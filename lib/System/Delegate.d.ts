declare module "System" {
    import * as api from "api";
    abstract class Delegate extends Object {
        Equals(obj: Object): boolean
        GetHashCode(): number
        Clone(): Object
        GetInvocationList(): Array<Delegate>
        DynamicInvoke(...args: Object[]): Object
        GetObjectData(info: any, context: any): void
        GetMethodInfo(): any
        static Combine(a: Delegate, b: Delegate): Delegate
        static Combine(...delegates: Delegate[]): Delegate
        static Remove(source: Delegate, value: Delegate): Delegate
        static RemoveAll(source: Delegate, value: Delegate): Delegate
        static op_Equality(d1: Delegate, d2: Delegate): boolean
        static op_Inequality(d1: Delegate, d2: Delegate): boolean
        // js_op_overloading: static ==(d1: Delegate, d2: Delegate): boolean
        readonly Target: Object
        readonly Method: any
    }
}