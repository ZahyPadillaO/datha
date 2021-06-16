export class Operaciones{
    public a: number;
    public b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public suma(a: number, b: number): number {
        return a + b;
    }
}