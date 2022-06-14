declare module "System" {
    import * as api from "api";
    class Byte extends Object {
        CompareTo(value: Object): number
        CompareTo(value: api.byte): number
        Equals(obj: Object): boolean
        Equals(obj: api.byte): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(format: string): string
        toString(provider: any): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): api.byte
        static Parse(s: any, style: any, provider: any): api.byte
        static Parse(s: string, style: any): api.byte
        static Parse(s: string, provider: any): api.byte
        static Parse(s: string): api.byte
        static TryParse(s: string, style: any, provider: any, result: api.Out<api.byte>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<api.byte>): boolean
        static TryParse(s: string, result: api.Out<api.byte>): boolean
        static TryParse(s: any, result: api.Out<api.byte>): boolean
        protected constructor()
        static readonly MaxValue: api.byte
        static readonly MinValue: api.byte
    }
}
declare module "System" {
    import * as api from "api";
    class SByte extends Object {
        CompareTo(obj: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(format: string): string
        toString(provider: any): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        protected constructor()
        static readonly MaxValue: number
        static readonly MinValue: number
    }
}
declare module "System" {
    import * as api from "api";
    class Single extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(provider: any): string
        toString(format: string): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static IsInfinity(f: number): boolean
        static IsNaN(f: number): boolean
        static IsNegative(f: number): boolean
        static IsNegativeInfinity(f: number): boolean
        static IsNormal(f: number): boolean
        static IsPositiveInfinity(f: number): boolean
        static IsSubnormal(f: number): boolean
        static op_Equality(left: number, right: number): boolean
        static op_Inequality(left: number, right: number): boolean
        static op_LessThan(left: number, right: number): boolean
        static op_GreaterThan(left: number, right: number): boolean
        static op_LessThanOrEqual(left: number, right: number): boolean
        static op_GreaterThanOrEqual(left: number, right: number): boolean
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        // js_op_overloading: static ==(left: number, right: number): boolean
        // js_op_overloading: static <(left: number, right: number): boolean
        protected constructor()
        static readonly MinValue: number
        static readonly Epsilon: number
        static readonly MaxValue: number
        static readonly PositiveInfinity: number
        static readonly NegativeInfinity: number
        static readonly NaN: number
    }
}
declare module "System" {
    import * as api from "api";
    class Double extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(format: string): string
        toString(provider: any): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static IsInfinity(d: number): boolean
        static IsNaN(d: number): boolean
        static IsNegative(d: number): boolean
        static IsNegativeInfinity(d: number): boolean
        static IsNormal(d: number): boolean
        static IsPositiveInfinity(d: number): boolean
        static IsSubnormal(d: number): boolean
        static op_Equality(left: number, right: number): boolean
        static op_Inequality(left: number, right: number): boolean
        static op_LessThan(left: number, right: number): boolean
        static op_GreaterThan(left: number, right: number): boolean
        static op_LessThanOrEqual(left: number, right: number): boolean
        static op_GreaterThanOrEqual(left: number, right: number): boolean
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        // js_op_overloading: static ==(left: number, right: number): boolean
        // js_op_overloading: static <(left: number, right: number): boolean
        protected constructor()
        static readonly MinValue: number
        static readonly MaxValue: number
        static readonly Epsilon: number
        static readonly NegativeInfinity: number
        static readonly PositiveInfinity: number
        static readonly NaN: number
    }
}
declare module "System" {
    import * as api from "api";
    import { Color } from "UnityEngine";
    class String extends Object {
        constructor(value: Array<string>, startIndex: number, length: number)
        constructor(c: string, count: number)
        constructor(value: Array<string>)
        constructor(value: any)
        IndexOf(value: string, startIndex: number, count: number, comparisonType: any): number
        IndexOf(value: string, startIndex: number, count: number): number
        IndexOf(value: string, startIndex: number, count: number): number
        IndexOf(value: string, startIndex: number, comparisonType: any): number
        IndexOf(value: string, startIndex: number): number
        IndexOf(value: string, comparisonType: any): number
        IndexOf(value: string, startIndex: number): number
        IndexOf(value: string, comparisonType: any): number
        IndexOf(value: string): number
        IndexOf(value: string): number
        Equals(value: string, comparisonType: any): boolean
        Equals(obj: Object): boolean
        Equals(value: string): boolean
        LastIndexOf(value: string, startIndex: number, count: number, comparisonType: any): number
        LastIndexOf(value: string, startIndex: number, count: number): number
        LastIndexOf(value: string, startIndex: number, comparisonType: any): number
        LastIndexOf(value: string, startIndex: number, count: number): number
        LastIndexOf(value: string, startIndex: number): number
        LastIndexOf(value: string, comparisonType: any): number
        LastIndexOf(value: string, startIndex: number): number
        LastIndexOf(value: string): number
        LastIndexOf(value: string): number
        PadRight(totalWidth: number, paddingChar: string): string
        PadRight(totalWidth: number): string
        Remove(startIndex: number, count: number): string
        Remove(startIndex: number): string
        Replace(oldValue: string, newValue: string, ignoreCase: boolean, culture: any): string
        Replace(oldValue: string, newValue: string, comparisonType: any): string
        Replace(oldChar: string, newChar: string): string
        Replace(oldValue: string, newValue: string): string
        ReplaceLineEndings(replacementText: string): string
        ReplaceLineEndings(): string
        Split(separator: string, count: number, options: any): Array<string>
        Split(separator: Array<string>, count: number, options: any): Array<string>
        Split(separator: string, count: number, options: any): Array<string>
        Split(separator: Array<string>, count: number, options: any): Array<string>
        Split(separator: string, options: any): Array<string>
        Split(separator: Array<string>, count: number): Array<string>
        Split(separator: Array<string>, options: any): Array<string>
        Split(separator: string, options: any): Array<string>
        Split(separator: Array<string>, options: any): Array<string>
        Split(...separator: string[]): Array<string>
        Substring(startIndex: number, length: number): string
        Substring(startIndex: number): string
        ToLower(culture: any): string
        ToLower(): string
        ToLowerInvariant(): string
        ToUpper(culture: any): string
        ToUpper(): string
        ToUpperInvariant(): string
        Trim(trimChar: string): string
        Trim(): string
        Trim(...trimChars: string[]): string
        TrimStart(trimChar: string): string
        TrimStart(): string
        TrimStart(...trimChars: string[]): string
        TrimEnd(trimChar: string): string
        TrimEnd(): string
        TrimEnd(...trimChars: string[]): string
        Contains(value: string, comparisonType: any): boolean
        Contains(value: string, comparisonType: any): boolean
        Contains(value: string): boolean
        Contains(value: string): boolean
        IndexOfAny(anyOf: Array<string>, startIndex: number, count: number): number
        IndexOfAny(anyOf: Array<string>, startIndex: number): number
        IndexOfAny(anyOf: Array<string>): number
        LastIndexOfAny(anyOf: Array<string>, startIndex: number, count: number): number
        LastIndexOfAny(anyOf: Array<string>, startIndex: number): number
        LastIndexOfAny(anyOf: Array<string>): number
        GetPinnableReference(): api.Ref<string>
        toString(provider: any): string
        toString(): string
        GetEnumerator(): any
        EnumerateRunes(): any
        GetTypeCode(): any
        IsNormalized(normalizationForm: any): boolean
        IsNormalized(): boolean
        Normalize(normalizationForm: any): string
        Normalize(): string
        Insert(startIndex: number, value: string): string
        PadLeft(totalWidth: number, paddingChar: string): string
        PadLeft(totalWidth: number): string
        CompareTo(value: Object): number
        CompareTo(strB: string): number
        EndsWith(value: string, ignoreCase: boolean, culture: any): boolean
        EndsWith(value: string, comparisonType: any): boolean
        EndsWith(value: string): boolean
        EndsWith(value: string): boolean
        GetHashCode(comparisonType: any): number
        GetHashCode(): number
        StartsWith(value: string, ignoreCase: boolean, culture: any): boolean
        StartsWith(value: string, comparisonType: any): boolean
        StartsWith(value: string): boolean
        StartsWith(value: string): boolean
        Clone(): Object
        CopyTo(sourceIndex: number, destination: Array<string>, destinationIndex: number, count: number): void
        CopyTo(destination: any): void
        TryCopyTo(destination: any): boolean
        ToCharArray(startIndex: number, length: number): Array<string>
        ToCharArray(): Array<string>
        AsSpan(start: number, length: number): any
        AsSpan(start: number): any
        AsSpan(): any
        AsMemory(start: number, length: number): any
        AsMemory(start: number): any
        AsMemory(startIndex: any): any
        AsMemory(range: any): any
        AsMemory(): any
        ColorText(color: Color): string
        static Equals(a: string | Object, b: string | Object, comparisonType: any): boolean
        static Equals(a: string | Object, b: string | Object): boolean
        static IsNullOrEmpty(value: string): boolean
        static IsNullOrWhiteSpace(value: string): boolean
        static Concat(str0: string, str1: string, str2: string, str3: string): string
        static Concat(str0: any, str1: any, str2: any, str3: any): string
        static Concat(arg0: Object, arg1: Object, arg2: Object): string
        static Concat(str0: string, str1: string, str2: string): string
        static Concat(str0: any, str1: any, str2: any): string
        static Concat(arg0: Object, arg1: Object): string
        static Concat(str0: string, str1: string): string
        static Concat(str0: any, str1: any): string
        static Concat(arg0: Object): string
        static Concat(values: any): string
        static Concat(...args: Object[]): string
        static Concat(...values: string[]): string
        static Format(provider: any, format: string, arg0: Object, arg1: Object, arg2: Object): string
        static Format(format: string, arg0: Object, arg1: Object, arg2: Object): string
        static Format(provider: any, format: string, arg0: Object, arg1: Object): string
        static Format(format: string, arg0: Object, arg1: Object): string
        static Format(provider: any, format: string, arg0: Object): string
        static Format(format: string, arg0: Object): string
        static Format(provider: any, format: string, ...args: Object[]): string
        static Format(format: string, ...args: Object[]): string
        static Join(separator: string, value: Array<string>, startIndex: number, count: number): string
        static Join(separator: string, value: Array<string>, startIndex: number, count: number): string
        static Join(separator: string, values: any): string
        static Join(separator: string, ...value: string[]): string
        static Join(separator: string, ...value: string[]): string
        static Join(separator: string, ...values: Object[]): string
        static Join(separator: string, ...values: Object[]): string
        static Intern(str: string): string
        static IsInterned(str: string): string
        static Compare(strA: string, indexA: number, strB: string, indexB: number, length: number, ignoreCase: boolean, culture: any): number
        static Compare(strA: string, indexA: number, strB: string, indexB: number, length: number, culture: any, options: any): number
        static Compare(strA: string, indexA: number, strB: string, indexB: number, length: number, ignoreCase: boolean): number
        static Compare(strA: string, indexA: number, strB: string, indexB: number, length: number, comparisonType: any): number
        static Compare(strA: string, indexA: number, strB: string, indexB: number, length: number): number
        static Compare(strA: string, strB: string, culture: any, options: any): number
        static Compare(strA: string, strB: string, ignoreCase: boolean, culture: any): number
        static Compare(strA: string, strB: string, ignoreCase: boolean): number
        static Compare(strA: string, strB: string, comparisonType: any): number
        static Compare(strA: string, strB: string): number
        static CompareOrdinal(strA: string, indexA: number, strB: string, indexB: number, length: number): number
        static CompareOrdinal(strA: string, strB: string): number
        static op_Equality(a: string, b: string): boolean
        static op_Inequality(a: string, b: string): boolean
        static GetHashCode(value: any, comparisonType: any): number
        static GetHashCode(value: any): number
        static Create(provider: any, initialBuffer: any, handler: api.Ref<any>): string
        static Create(provider: any, handler: api.Ref<any>): string
        static op_Implicit(value: string): any
        static Copy(str: string): string
        // js_op_overloading: static ==(a: string, b: string): boolean
        readonly Length: number
        static readonly Empty: string
    }
}
declare module "System" {
    import * as api from "api";
    class Int32 extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(format: string): string
        toString(provider: any): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        protected constructor()
        static readonly MaxValue: number
        static readonly MinValue: number
    }
}
declare module "System" {
    import * as api from "api";
    class UInt32 extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(provider: any): string
        toString(format: string): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        protected constructor()
        static readonly MaxValue: number
        static readonly MinValue: number
    }
}
declare module "System" {
    import * as api from "api";
    class Int16 extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(provider: any): string
        toString(format: string): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        protected constructor()
        static readonly MaxValue: number
        static readonly MinValue: number
    }
}
declare module "System" {
    import * as api from "api";
    class UInt16 extends Object {
        CompareTo(value: Object): number
        CompareTo(value: number): number
        Equals(obj: Object): boolean
        Equals(obj: number): boolean
        GetHashCode(): number
        toString(format: string, provider: any): string
        toString(provider: any): string
        toString(format: string): string
        toString(): string
        TryFormat(destination: any, charsWritten: api.Out<number>, format: any, provider: any): boolean
        GetTypeCode(): any
        static Parse(s: string, style: any, provider: any): number
        static Parse(s: any, style: any, provider: any): number
        static Parse(s: string, style: any): number
        static Parse(s: string, provider: any): number
        static Parse(s: string): number
        static TryParse(s: string, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: any, style: any, provider: any, result: api.Out<number>): boolean
        static TryParse(s: string, result: api.Out<number>): boolean
        static TryParse(s: any, result: api.Out<number>): boolean
        protected constructor()
        static readonly MaxValue: number
        static readonly MinValue: number
    }
}