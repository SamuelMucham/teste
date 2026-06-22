export function soma(number1: number, number2: number){
     if(typeof number1 !== "number" || typeof number2 !== "number"){
        return"Me envie números!";
    }
    return number1 + number2;
}

export function fibonacci(quantity: number){
    if (quantity === 0){
        return [];
    }

    if (quantity < 0){
        return "Me envie um número positivo!";
    }

    if (quantity === 1){
        return [1];
    }
    if (quantity % 1 ){
        return "Me envie um número inteiro!";
    }

    if (quantity > 50){
        return "me de um número menor ou igual a 50!";
    }

    const sequencia = [1, 1];
  for (let i = 2; i < quantity; i++) {
    sequencia.push(sequencia[i - 1]! + sequencia[i - 2]!);
  }
  return sequencia;
}

export function media(number1: number, number2: number){
    const media = (number1 + number2) /2;
    return media;
}

export function ehPar(number: number){
    if (number % 2 === 0){
        return "É par!";
    }
    return "É impar!";
}

export function maior(number1: number, number2: number, p0: number, p1: number){
    if (number1 > number2){
        return number1;
    }
    return number2;
}

export function menor(number1: number, number2: number){
    if (number1 < number2){
        return number1;
    }
    return number2;
}

export function aprovado(nota: number){
    if (nota >= 9 && nota <= 10){
        return "Aprovado";
    }
    return "Reprovado";
}

export function categoriaIdade(idade: number){
    if (idade >= 18 && idade <= 25){
        return "Adolescente";
    }
    if (idade >= 26 && idade <= 35){
        return "Adolescente";
    }
    if (idade >= 36 && idade <= 45){
        return "Adolescente";
    }
}

export function contarCaracter(texto: string, letra: string){
     let contador = 0;
     for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra){
            contador++;
        }
     }
     
      console.log(contador);
      return contador;
}

export function inverter(texto: string){
    let textoInverso = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInverso += texto[i];
    }
    return textoInverso;
}

export function contarVogais(texto: string){
    let vogais = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a" || texto[i] === "e" || texto[i] === "i" || texto[i] === "o" || texto[i] === "u"){
            vogais++;
        }
    }
    // console.log(vogais);
    return vogais;
}

export function somatorio(numeros: number[]){
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

export function maiorDaLista(numeros: number[]){
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior){
            maior = numeros[i];
        }
    }
    return maior;
}

export function mediaDaLista(numeros: number[]){
    let media = 0;
    for (let i = 0; i < numeros.length; i++) {
        media += numeros[i];
    }
    media /= numeros.length;
    return media;
}

export function contagemRegressiva(quantidade: number){
    let contagem = 0;
    for (let i = 1; i <= quantidade; i++) {
        contagem += i;
    }
    return contagem;
}

export function fatorial(numero: number){ 
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

export function ehPalindromo(texto: string){
    let textoReverso = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    if (texto === textoReverso){
        return true;
    }
    return false;
}

export function ehPrimo(numero: number){
    if (numero === 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0){
            return false;
        }
    }
    return true;
}

export function removerDuplicados(texto: string){
    const array = texto.split("");
    const arrayUnico = [...new Set(array)];
    return arrayUnico.join("");
}

export function ordemAlfabetica(texto: string){
    const array = texto.split("");
    array.sort();
    return array.join("");
}

export function contarPalavras(texto: string){
    const array = texto.split(" ");
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 0){
            contador++;
        }
    }
    console.log(contador);
    return contador;
}