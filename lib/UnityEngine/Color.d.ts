declare module "UnityEngine" {
    import * as api from "api";
    import { Object, Array } from "System";
    class Color extends Object {
        constructor(r: number, g: number, b: number, a: number)
        constructor(r: number, g: number, b: number)
        Equals(other: Object): boolean
        Equals(other: Color): boolean
        static op_Addition(a: Color, b: Color): Color
        static op_Subtraction(a: Color, b: Color): Color
        static op_Multiply(a: Color, b: Color): Color
        static op_Multiply(a: Color, b: number): Color
        static op_Multiply(b: number, a: Color): Color
        static op_Division(a: Color, b: number): Color
        static LerpUnclamped(a: Color, b: Color, t: number): Color
        static Lerp(a: api.Ref<Color>, b: api.Ref<Color>, t: number, result: api.Out<Color>): void
        static Lerp(a: Color, b: Color, t: number): Color
        // js_op_overloading: static +(a: Color, b: Color): Color
        // js_op_overloading: static -(a: Color, b: Color): Color
        // js_op_overloading: static *(a: Color, b: Color): Color
        // js_op_overloading: static *(a: Color, b: number): Color
        // js_op_overloading: static *(b: number, a: Color): Color
        // js_op_overloading: static /(a: Color, b: number): Color
        static readonly red: Color
        static readonly green: Color
        static readonly blue: Color
        static readonly white: Color
        static readonly black: Color
        static readonly yellow: Color
        static readonly cyan: Color
        static readonly magenta: Color
        static readonly gray: Color
        static readonly grey: Color
        static readonly clear: Color
        readonly R: number
        readonly G: number
        readonly B: number
        readonly A: number
        r: number
        g: number
        b: number
        a: number
    }
}