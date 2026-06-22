import test from "node:test";
import assert from "node:assert/strict";

import { maior } from "./index.js";

test("Entre dois números inteiro deve retornar o maior",() => {
    assert.deepStrictEqual(maior(1, 2), 2);
    assert.deepStrictEqual(maior(4, 1), 4);
    assert.deepStrictEqual(maior(6, 7), 7);
    assert.deepStrictEqual(maior(39, 72), 72);
    })
test("Entre dois números inteiros positivos ou negativos, deve retornar o maior",
    () => {
        assert.deepStrictEqual(maior(2, -4), 2);
        assert.deepStrictEqual(maior(-1, -1), -1);
        assert.deepStrictEqual(maior(0, -2), 0);
        assert.deepStrictEqual(maior(39, -72), 72);
    })

    test("Entre dois números decimais, deve se retornar o maior",() => {
        assert.deepStrictEqual(maior(1.2, 1), 2);
        assert.deepStrictEqual(maior(4.5, 1), 4.5);
        assert.deepStrictEqual(maior(6.7, 7), 7);
    })

    test("se os números forem iguais, deve se retornar uma mensagem",
        () => assert.deepStrictEqual(maior(7, 7), "números iguais")
    )