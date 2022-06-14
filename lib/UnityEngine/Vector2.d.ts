declare module "UnityEngine" {
    import * as api from "api";
    import { Object, Array } from "System";
    class Vector2 extends Object {
        constructor(x: number, y: number)
        $GetValue(index: number): number
        $SetValue(index: number, value: number): void
        Set(newX: number, newY: number): void
        Scale(scale: Vector2): void
        toString(format: string, formatProvider: any): string
        toString(format: string): string
        toString(): string
        GetHashCode(): number
        Equals(other: Object): boolean
        Equals(other: Vector2): boolean
        static Scale(a: Vector2, b: Vector2): Vector2
        static Lerp(start: api.Ref<Vector2>, end: api.Ref<Vector2>, amount: number, result: api.Out<Vector2>): void
        static Lerp(start: api.Ref<Vector2>, end: api.Ref<Vector2>, amount: api.Ref<Vector2>, result: api.Out<Vector2>): void
        static Lerp(start: Vector2, end: Vector2, amount: number): Vector2
        static Lerp(start: Vector2, end: Vector2, amount: Vector2): Vector2
        static SmoothStep(start: api.Ref<Vector2>, end: api.Ref<Vector2>, amount: number, result: api.Out<Vector2>): void
        static op_Addition(left: Vector2, right: Vector2): Vector2
        static op_Addition(value: Vector2, scalar: number): Vector2
        static op_Addition(scalar: number, value: Vector2): Vector2
        static op_Multiply(left: Vector2, right: Vector2): Vector2
        static op_Multiply(scale: number, value: Vector2): Vector2
        static op_Multiply(value: Vector2, scale: number): Vector2
        static op_UnaryPlus(value: Vector2): Vector2
        static op_Subtraction(left: Vector2, right: Vector2): Vector2
        static op_Subtraction(value: Vector2, scalar: number): Vector2
        static op_Subtraction(scalar: number, value: Vector2): Vector2
        static op_UnaryNegation(value: Vector2): Vector2
        static op_Division(value: Vector2, scale: number): Vector2
        static op_Division(scale: number, value: Vector2): Vector2
        static op_Division(value: Vector2, scale: Vector2): Vector2
        static op_Modulus(value: Vector2, scale: number): Vector2
        static op_Modulus(value: number, scale: Vector2): Vector2
        static op_Modulus(value: Vector2, scale: Vector2): Vector2
        // js_op_overloading: static +(left: Vector2, right: Vector2): Vector2
        // js_op_overloading: static *(left: Vector2, right: Vector2): Vector2
        // js_op_overloading: static -(left: Vector2, right: Vector2): Vector2
        // js_op_overloading: static neg(value: Vector2): Vector2
        // js_op_overloading: static *(scale: number, value: Vector2): Vector2
        // js_op_overloading: static *(value: Vector2, scale: number): Vector2
        // js_op_overloading: static /(value: Vector2, scale: number): Vector2
        // js_op_overloading: static /(scale: number, value: Vector2): Vector2
        // js_op_overloading: static /(value: Vector2, scale: Vector2): Vector2
        X: number
        Y: number
        x: number
        y: number
        static readonly Zero: Vector2
        static readonly One: Vector2
        static readonly Up: Vector2
        static readonly Down: Vector2
        static readonly Left: Vector2
        static readonly Right: Vector2
        static readonly kEpsilon: number
        static readonly kEpsilonNormalSqrt: number
    }
}