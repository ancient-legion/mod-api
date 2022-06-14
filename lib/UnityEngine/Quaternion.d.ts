declare module "UnityEngine" {
    import { Ref, Out } from "api";
    import { Object, Array } from "System";
    class Quaternion extends Object {
        constructor(x: number, y: number, z: number, w: number)
        constructor(v: Vector3, w: number)
        Set(new_x: number, new_y: number, new_z: number, new_w: number): void
        SetLookRotation(view: Vector3, up: Vector3): void
        SetLookRotation(view: Vector3): void
        Normalize(): void
        Cast(): any
        ToVector3(): Vector3
        static Dot(a: Quaternion, b: Quaternion): number
        static RotateTowards(from: Quaternion, to: Quaternion, maxDegreesDelta: number): Quaternion
        static Angle(a: Quaternion, b: Quaternion): number
        static LookRotation(forward: Vector3, upwards: Vector3): Quaternion
        static LookRotation(forward: Vector3): Quaternion
        static SlerpUnclamped(a: Quaternion, b: Quaternion, t: number): Quaternion
        static Normalize(q: Ref<Quaternion>, result: Out<Quaternion>): void
        static Normalize(q: Quaternion): Quaternion
        static Lerp(a: Quaternion, b: Quaternion, t: number): Quaternion
        static Slerp(start: Ref<Quaternion>, end: Ref<Quaternion>, amount: number, result: Out<Quaternion>): void
        static Slerp(a: Quaternion, b: Quaternion, t: number): Quaternion
        static Euler(x: number, y: number, z: number): Quaternion
        static Euler(euler: Vector3): Quaternion
        static op_Equality(lhs: Quaternion, rhs: Quaternion): boolean
        static op_Inequality(lhs: Quaternion, rhs: Quaternion): boolean
        // js_op_overloading: static ==(lhs: Quaternion, rhs: Quaternion): boolean
        static readonly Zero: Quaternion
        static readonly Identity: Quaternion
        readonly LengthSquared: number
        readonly Length: number
        xyz: Vector3
        x: number
        y: number
        z: number
        w: number
        static readonly degToRad: number
        static readonly rad2Deg: number
    }
}