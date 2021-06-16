
export class Suma{

    public a: number;
    public b: number;
    private _respuesta: number;


    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this._respuesta = b + a;
    }


    get respuesta(): number {
        return this._respuesta;
    }

    set respuesta(value: number) {
        this._respuesta = value;
    }
}

/*
function suma(a, b){
    return parseInt(a) + parseInt(b);
}
module.exports= suma;*/
