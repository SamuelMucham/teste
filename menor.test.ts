import test from "node:test";
import assert from "node:assert/strict";

import { menor } from "./index.js";

test("Entre dois números inteiro deve retornar o maior",() => {
    assert.deepStrictEqual(menor(1, 2), 1);
    assert.deepStrictEqual(menor(4, 1), 1);
    assert.deepStrictEqual(menor(6, 7), 6);
    assert.deepStrictEqual(menor(39, 72), 39);
    })
test("Entre dois números inteiros positivos ou negativos, deve retornar o menor",
    () => {
        assert.deepStrictEqual(menor(2, -4), -4);
        assert.deepStrictEqual(menor(0, -2), -2);
        assert.deepStrictEqual(menor(39, -72), 39);
    })

    test("Entre dois números decimais, deve se retornar o menor",() => {
        assert.deepStrictEqual(menor(1.2, 1), 1.2);
        assert.deepStrictEqual(menor(7.3, 7.4), 7.3);
        assert.deepStrictEqual(menor(-9.8, -9.9), -9.9);
    })

    test("se os números forem iguais, deve se retornar uma mensagem",
        () => assert.deepStrictEqual(menor(7, 7), "números iguais")
    )