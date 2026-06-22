import test from "node:test";
import assert from "node:assert/strict";
import { soma } from "./index.js";

test("Deve somar dois numeros e retornar a soma", 
    () => {
    // @ts-ignore
    assert.strictEqual(soma(1, 1), 2) })

test("Deve retornar erro ao o usuário passar parametros que não são numeros",
    // @ts-ignore
    () => { assert.strctEqual(soma("string", true), "Me envie números!")})

test("Deve retornar erro se não tiver parametro", 
    () => {
     // @ts-ignore
    assert.strctEqual(soma(), "Me envie números!")})