declare module "System" {
    class Object {
        constructor()
        GetType(): any
        toString(): string
        Equals(obj: Object): boolean
        GetHashCode(): number
        static Equals(objA: Object, objB: Object): boolean
        static ReferenceEquals(objA: Object, objB: Object): boolean
    }
}