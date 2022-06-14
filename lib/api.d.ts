declare module "api" {
    import { Delegate as SystemDelegate, Array as SystemArray } from "System";

    type byte = number;
    type Nullable<T> = T;

    /**
    * 封装 C# ref 传参约定
    */
    interface Ref<T = any> {
        type?: { new(): T } | Function
        value?: T
    }

    /**
    * 封装 C# out 传参约定
    */
    interface Out<T = any> {
        type?: { new(): T } | Function
        value?: T
    }

    /**
     * [NOT_IMPLEMENTED]
     */
    interface RuntimeInfo {
        /**
         * 运行时唯一ID
         */
        id: number;

        /**
         * 是否是工作者线程
         */
        isWorker: boolean;

        /**
         * 是否是编辑器运行时
         */
        isEditor: boolean;
    }

    /**
     * duck type
     */
    interface Task<T> { }

    /**
     * Marking a type only exists under specific compilation options (the modifier does not have an actual definition, it is only used for marking, and should not be used in code)
     */
    function RequiredDefines(...targets: string[]): void;

    class ModuleManager {
        static BeginReload(): void;

        /**
         * 将此模块标记为等待重载
         */
        static MarkReload(moduleId: string): void;

        static EndReload(): void;
    }

    /**
     * Eval code snippet read from file.
     */
    function DoFile(filename: string): void;

    /**
     * Requests a garbadge collection call.
     */
    function GC(): void

    /**
     * 标记对象是否由JS管理销毁 (自动调用 Dispose)
     * @param o CS对象实例
     * @param disposable 是否托管
     * @returns 是否设置成功
     */
    function SetDisposable(o: any, disposable: boolean): boolean;

    /**
     * The current tick (in milliseconds) of the scheduler used by setInterval and setTimeout.
     * NOTE: It starts from 0.
     */
    function Now(): number

    /**
     * Is running with StaticBind mode
     */
    function IsStaticBinding(): boolean;

    let isOperatorOverloadingSupported: boolean;

    /**
     * Indicates what backend engine is being used
     */
    let engine: string;

    /**
     * Represents the version of jsb dll (the value of JSApi.SO_JSB_VERSION)
     */
    let version: number;

    /**
     * The version of this plugin itself (in hex)
     */
    let pluginVersion: number;

    /**
     * Calls Thread.Sleep()
     */
    function Sleep(millisecondsTimeout?: number): void

    /**
     * Cache a string (It's helpful to avoid unnecessary gc alloc when frequently used in interop)
     */
    function AddCacheString(str: string): string;

    /**
     * Remove a string from string cache.
     */
    function RemoveCacheString(str: string): boolean;

    /**
     * 
     */
    function AddSearchPath(path: string): void

    /**
     * [UNDOCUMENTED]
     */
    function AddModule(module_id: string, e: any): void;

    // @ts-ignore
    // function Yield(instruction: UnityEngine.YieldInstruction): Promise<UnityEngine.YieldInstruction>;
    // function Yield(enumerator: SystemCollections.IEnumerator): Promise<SystemObject>;
    function Yield<T>(task: Task<T>): Promise<T>;

    /**
     * 将 C# 委托强制转换为 JS Function
     * @summary 如果传入的已经是 Function, 将直接返回
     * @summary 如果传入的是一个 C# 委托对象, 将通过 dynamic method wrapper 产生一个 JS Function 
     * @summary 谨慎: 无法再从 function 还原此委托, 两者不会建立关联 (会构成强引用循环) 
     * @summary 谨慎: NewDynamicDelegate 会产生一个与 Runtime 相同生命周期的对象, 该对象将持有 Delegate 对象引用 
     * @param makeDynamic 是否创建委托的JS函数包装 (NewDynamicDelegate) [默认 false]
     */
    function ToFunction(o: SystemDelegate | Function, makeDynamic?: boolean): Function;

    /**
     * [EXPERIMENTAL]
     */
    function ToDelegate(o: SystemDelegate | Function, typeName: string): SystemDelegate;

    /**
     * [NOT_DETERMINED]
     */
    // function ToJSArray(o: any): Array;

    /**
     * Converts C# Array into JS Array
     */
    function ToArray<T>(o: SystemArray<T>): Array<T>;

    /**
     * Converts C# Array<byte> into JS ArrayBuffer
     */
    function ToArrayBuffer(o: SystemArray<byte> | number[]): ArrayBuffer;

    /**
     * Converts JS ArrayBuffer or Unit8Array into C# Array<byte>
     */
    function ToBytes(o: ArrayBuffer | Uint8Array): SystemArray<byte>;

    /**
     * Dynamically import a C# type
     * @param type FullName of a C# type
     * @param privateAccess Whether the private members are allowed to access in JS
     */
    function Import(type: string, privateAccess?: boolean): FunctionConstructor;
}