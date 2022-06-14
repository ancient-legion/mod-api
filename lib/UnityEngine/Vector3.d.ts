declare module "UnityEngine" {
    import * as api from "api";
    import { Object, Array } from "System";
    export class Vector3 extends Object {
        constructor(x: number, y: number, z: number)
        GetHashCode(): number
        Normalize(): void
        Equals(other: Object): boolean
        Equals(other: Vector3): boolean
        toString(format: string, formatProvider: any): string
        toString(format: string): string
        toString(): string
        Cast(): any
        static Cross(lhs: Vector3, rhs: Vector3): Vector3
        static op_Multiply(a: Vector3, d: number): Vector3
        static op_Multiply(d: number, a: Vector3): Vector3
        static MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3
        static Normalize(value: Vector3): Vector3
        static Magnitude(vector: Vector3): number
        static Clamp01(value: number): number
        static Lerp(start: api.Ref<Vector3>, end: api.Ref<Vector3>, amount: number, result: api.Out<Vector3>): void
        static Lerp(a: Vector3, b: Vector3, t: number): Vector3
        static LerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3
        static op_Addition(a: Vector3, b: Vector3): Vector3
        static op_Subtraction(a: Vector3, b: Vector3): Vector3
        static op_UnaryNegation(a: Vector3): Vector3
        static op_Division(a: Vector3, d: number): Vector3
        static op_Equality(lhs: Vector3, rhs: Vector3): boolean
        static op_Inequality(lhs: Vector3, rhs: Vector3): boolean
        static Dot(lhs: Vector3, rhs: Vector3): number
        static Project(vector: Vector3, onNormal: Vector3): Vector3
        static ProjectOnPlane(vector: Vector3, planeNormal: Vector3): Vector3
        static Angle(from: Vector3, to: Vector3): number
        static SignedAngle(from: Vector3, to: Vector3, axis: Vector3): number
        static Distance(a: Vector3, b: Vector3): number
        static SmoothStep(start: api.Ref<Vector3>, end: api.Ref<Vector3>, amount: number, result: api.Out<Vector3>): void
        // js_op_overloading: static *(a: Vector3, d: number): Vector3
        // js_op_overloading: static +(a: Vector3, b: Vector3): Vector3
        // js_op_overloading: static -(a: Vector3, b: Vector3): Vector3
        // js_op_overloading: static neg(a: Vector3): Vector3
        // js_op_overloading: static *(d: number, a: Vector3): Vector3
        // js_op_overloading: static /(a: Vector3, d: number): Vector3
        // js_op_overloading: static ==(lhs: Vector3, rhs: Vector3): boolean
        static readonly forward: Vector3
        static readonly back: Vector3
        static readonly up: Vector3
        static readonly down: Vector3
        static readonly left: Vector3
        static readonly right: Vector3
        readonly normalized: Vector3
        x: number
        y: number
        z: number
        static readonly Zero: Vector3
        static readonly One: Vector3
    }
}