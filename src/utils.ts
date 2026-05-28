export function repeat<T>(times: number, lambda: (i: number) => T): T[] {
    return Array.from(new Array(times), (_, i) => lambda(i));
}