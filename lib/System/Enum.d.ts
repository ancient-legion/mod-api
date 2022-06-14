declare module "System" {
    import * as api from "api";
    abstract class Enum extends Object {
        Equals(obj: Object): boolean
        HasFlag(flag: Enum): boolean
        GetHashCode(): number
        toString(format: string): string
        toString(): string
        CompareTo(target: Object): number
        GetTypeCode(): any
        GetDisplayName(): string
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: api.byte): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: number): Object
        static ToObject(enumType: any, value: Object): Object
        static GetName(enumType: any, value: Object): string
        static GetNames(enumType: any): Array<string>
        static GetUnderlyingType(enumType: any): any
        static GetValues(enumType: any): Array<any>
        static IsDefined(enumType: any, value: Object): boolean
        static Parse(enumType: any, value: string, ignoreCase: boolean): Object
        static Parse(enumType: any, value: any, ignoreCase: boolean): Object
        static Parse(enumType: any, value: string): Object
        static Parse(enumType: any, value: any): Object
        static TryParse(enumType: any, value: string, ignoreCase: boolean, result: api.Out<Object>): boolean
        static TryParse(enumType: any, value: any, ignoreCase: boolean, result: api.Out<Object>): boolean
        static TryParse(enumType: any, value: string, result: api.Out<Object>): boolean
        static TryParse(enumType: any, value: any, result: api.Out<Object>): boolean
        static Format(enumType: any, value: Object, format: string): string
    }
}