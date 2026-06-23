import test from "node:test";
import assert from "node:assert/strict";

import { aprovado } from "./index.js";
import { gerarNegativo } from "./helpers.js";

test("Deve retornar se o aluno esta aprovado ou reprovado dependendo da nota",
    () => {
        assert.deepStrictEqual(aprovado(0), "Reprovado");
        assert.deepStrictEqual(aprovado(1), "reprovado");
        assert.deepStrictEqual(aprovado(2), "reprovado");
        assert.deepStrictEqual(aprovado(3), "reprovado");
        assert.deepStrictEqual(aprovado(4), "reprovado");
        assert.deepStrictEqual(aprovado(5), "reprovado");
        assert.deepStrictEqual(aprovado(6), "reprovado");
        assert.deepStrictEqual(aprovado(7), "aprovado");
        assert.deepStrictEqual(aprovado(8), "aprovado");
        assert.deepStrictEqual(aprovado(9), "aprovado");
        assert.deepStrictEqual(aprovado(10), "aprovado");
    }
)
test("Deve retornar uma mensagem de erro se passar um numero negativo", 
    () => assert.deepStrictEqual(aprovado(gerarNegativo()), "Me envie um número positivo!")
)

test("Deve retornar uma mensagem de erro se passarmos um numero maior que 10",
    () => assert.deepStrictEqual(aprovado(11), "Me de uma nota válida")
)
test("")