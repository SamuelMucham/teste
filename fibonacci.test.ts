import test from "node:test";
import assert from "node:assert/strict";
import { fibonacci } from "./index.js";

test("Deve retornar o primeiro numero da sequencia de Fibonacci se passarmos 1", 
    () => {
    // @ts-ignore
    assert.strictEqual(fibonacci(1), [1])}
) 

test("Deve retornar os 2 priemiro numeros da sequencia de Fibonacci se passarmos 2",
    () => {
    // @ts-ignore
    assert.deeptEqual(fibonacci(2), [1, 1])}
)

test("deve retornar os 5 primeiros números da sequencia de Fibonacci se passarmos 5", 
    () =>{
        // @ts-ignore
        assert.deeptEqual(fibonacci(5), [1, 1, 2, 3, 5])})

test("Deve retornar uma lista vazia se passarmos 0", 
    () => {
    // @ts-ignore
    assert.deeptEqual(fibonacci(0), [])})

test("Deve retornar erro se passarmos um numero negativo", 
    () => {
    // @ts-ignore
    assert.deeptEqual(fibonacci(-1), "me de um numero positivo")})

test("Deve retornar erro se passarmos um numero decimal", 
    () => {
    // @ts-ignore
    assert.deeptEqual(fibonacci(1.5), "me de um numero inteiro")})

test("Deve retornar uma mensagem de erro se passarmos um número maior que 50    ",
    () => {
        // @ts-ignore
        assert.deepEqual(fibonacci(50), "Me dê um número menor que 50!");});