
import {Suma} from "./suma";
import {expect} from 'chai';

describe('pruebas Suma', ()=>{
    it('2 + 5 = 7', ()=>{
        const suma = new Suma(2, 5);
        expect((suma.respuesta)).eq(7);
    });
});

