
import {Operaciones} from "./suma";
import {expect} from 'chai';

describe('pruebas Suma', ()=>{
    it('2 + 5 = 7', ()=>{
        const operaciones = new Operaciones(2, 5);
        expect(operaciones.suma(2, 5)).eq(7);
    });
});

