declare module "System" {
    abstract class MathF extends Object {
        static Acos(x: number): number
        static Acosh(x: number): number
        static Asin(x: number): number
        static Asinh(x: number): number
        static Atan(x: number): number
        static Atanh(x: number): number
        static Atan2(y: number, x: number): number
        static Cbrt(x: number): number
        static Ceiling(x: number): number
        static Cos(x: number): number
        static Cosh(x: number): number
        static Exp(x: number): number
        static Floor(x: number): number
        static FusedMultiplyAdd(x: number, y: number, z: number): number
        static ILogB(x: number): number
        static Log(x: number, y: number): number
        static Log(x: number): number
        static Log2(x: number): number
        static Log10(x: number): number
        static Pow(x: number, y: number): number
        static Sin(x: number): number
        static SinCos(x: number): any
        static Sinh(x: number): number
        static Sqrt(x: number): number
        static Tan(x: number): number
        static Tanh(x: number): number
        static Abs(x: number): number
        static BitDecrement(x: number): number
        static BitIncrement(x: number): number
        static CopySign(x: number, y: number): number
        static IEEERemainder(x: number, y: number): number
        static Max(x: number, y: number): number
        static MaxMagnitude(x: number, y: number): number
        static Min(x: number, y: number): number
        static MinMagnitude(x: number, y: number): number
        static ReciprocalEstimate(x: number): number
        static ReciprocalSqrtEstimate(x: number): number
        static Round(x: number, digits: number, mode: any): number
        static Round(x: number, digits: number): number
        static Round(x: number, mode: any): number
        static Round(x: number): number
        static Sign(x: number): number
        static Truncate(x: number): number
        static ScaleB(x: number, n: number): number
        static readonly E: number
        static readonly PI: number
        static readonly Tau: number
    }
}