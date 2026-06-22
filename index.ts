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
        return "me de um numero positivo";
    }

    if (quantity === 1){
        return [1];
    }
    if (quantity % 1 ){
        return "me de um numero inteiro";
    }

    if (quantity > 50){
        return "Me dê um número menor que 50!";
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