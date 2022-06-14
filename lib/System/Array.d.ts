declare module "System" {
    import * as api from "api";
    abstract class Array<T, RANK = 1> extends Object {
        GetValue(index1: number, index2: number, index3: number): T
        GetValue(index1: number, index2: number): T
        GetValue(index: number): T
        GetValue(...index: number[]): T
        SetValue(value: T, index1: number, index2: number, index3: number): T
        SetValue(value: T, index1: number, index2: number): T
        SetValue(value: T, index: number): T
        SetValue(value: T, ...index: number[]): T
        CopyTo(array: Array<any>, index: number): void
        GetEnumerator(): any
        GetLength(dimension: number): number
        GetUpperBound(dimension: number): number
        GetLowerBound(dimension: number): number
        Initialize(): void
        GetLongLength(dimension: number): number
        Clone(): Object
        static Copy<T>(sourceArray: Array<T>, sourceIndex: number, destinationArray: Array<T>, destinationIndex: number, length: number): void
        static Copy<T>(sourceArray: Array<T>, destinationArray: Array<T>, length: number): void
        static CreateInstance<T>(elementType: any, length1: number, length2: number, length3: number): Array<T>
        static CreateInstance<T>(elementType: any, length1: number, length2: number): Array<T>
        static CreateInstance<T>(elementType: any, lengths: Array<number>, lowerBounds: Array<number>): Array<T>
        static CreateInstance<T>(elementType: any, length: number): Array<T>
        static CreateInstance<T>(elementType: any, ...lengths: number[]): Array<T>
        static BinarySearch<T>(array: Array<T>, index: number, length: number, value: Object, comparer: any): number
        static BinarySearch<T>(array: Array<T>, index: number, length: number, value: Object): number
        static BinarySearch<T>(array: Array<T>, value: Object, comparer: any): number
        static BinarySearch<T>(array: Array<T>, value: Object): number
        static IndexOf<T>(array: Array<T>, value: Object, startIndex: number, count: number): number
        static IndexOf<T>(array: Array<T>, value: Object, startIndex: number): number
        static IndexOf<T>(array: Array<T>, value: Object): number
        static LastIndexOf<T>(array: Array<T>, value: Object, startIndex: number, count: number): number
        static LastIndexOf<T>(array: Array<T>, value: Object, startIndex: number): number
        static LastIndexOf<T>(array: Array<T>, value: Object): number
        static Reverse<T>(array: Array<T>, index: number, length: number): void
        static Reverse<T>(array: Array<T>): void
        static Sort<T>(keys: Array<T>, items: Array<T>, index: number, length: number, comparer: any): void
        static Sort<T>(keys: Array<T>, items: Array<T>, index: number, length: number): void
        static Sort<T>(array: Array<T>, index: number, length: number, comparer: any): void
        static Sort<T>(array: Array<T>, index: number, length: number): void
        static Sort<T>(keys: Array<T>, items: Array<T>, comparer: any): void
        static Sort<T>(keys: Array<T>, items: Array<T>): void
        static Sort<T>(array: Array<T>, comparer: any): void
        static Sort<T>(array: Array<T>): void
        static Clear<T>(array: Array<T>, index: number, length: number): void
        static Clear(array: Array<any>): void
        static ConstrainedCopy<T>(sourceArray: Array<T>, sourceIndex: number, destinationArray: Array<T>, destinationIndex: number, length: number): void
        readonly Length: number
        readonly LongLength: number
        readonly Rank: number
        readonly SyncRoot: Object
        readonly IsReadOnly: boolean
        readonly IsFixedSize: boolean
        readonly IsSynchronized: boolean
        static readonly MaxLength: number
    }
}