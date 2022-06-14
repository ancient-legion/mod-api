declare module "QuickJS.IO" {
    import * as api from "api";
    import { Object, Array } from "System";
    class ByteBuffer extends Object {
        constructor(initialCapacity: number, maxCapacity: number, allocator: any)
        constructor(data: Array<api.byte>, maxCapacity: number)
        constructor(data: Array<api.byte>)
        ReadAllBytes(): Array<api.byte>
        WriteBytes(src: Array<api.byte>, srcOffset: number, count: number): void
        WriteBytes(memoryStream: any, size: number): void
        WriteBytes(other: ByteBuffer): void
        WriteBytes(byteCount: number): void
        WriteBytes(data: Array<api.byte>): void
        toString(): string
        Release(): void
        Retain(): ByteBuffer
        Slice(size: number): ByteBuffer
        CheckReadalbe(size: number): void
        ReadBytes(dst: Array<api.byte>, dstOffset: number, size: number): number
        ReadBytes(pointer: any, size: number): number
        ReadBytes(count: number): void
        ReadUByte(): api.byte
        ReadSByte(): number
        ReadBoolean(): boolean
        ReadSingle(): number
        ReadDouble(): number
        ReadString(): string
        ReadInt16(): number
        ReadUInt16(): number
        ReadInt32(): number
        ReadUInt32(): number
        ReadInt64(): number
        ReadUInt64(): number
        EnsureCapacity(value: number): void
        WriteByte(data: api.byte): void
        WriteSByte(data: number): void
        WriteBoolean(value: boolean): void
        WriteInt16(value: number): void
        WriteUInt16(value: number): void
        WriteInt32(value: number): void
        WriteUInt32(value: number): void
        WriteInt64(value: number): void
        WriteUInt64(value: number): void
        WriteSingle(value: number): void
        WriteDouble(value: number): void
        WriteString(value: string): void
        readonly data: Array<api.byte>
        readonly capacity: number
        writerIndex: number
        readonly readableBytes: number
        readerIndex: number
        readonly maxCapacity: number
        readonly isWritable: boolean
    }
}
