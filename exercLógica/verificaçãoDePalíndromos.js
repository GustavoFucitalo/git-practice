/*Escreva uma função que verifica se uma string pode ser rearranjada para formar um palíndromo.
A função deve retornar true se for possível formar um palíndromo e false caso contrário.

no máximo um caractere pode ter uma contagem ímpar (no caso de palíndromos de comprimento ímpar),
e todos os outros caracteres devem ter uma contagem par.
*/

function canFormPalindrome(str){

    let charCount = {};
    for(let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }    
    
    // Contar quantos caracteres têm uma frequência ímpar
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0){
            oddCount++;
        }
    }
    // Verificar se mais de um caractere tem uma frequência ímpar
    return oddCount <= 1;

}

console.log(canFormPalindrome("civic"));
console.log(canFormPalindrome("ivicc"));
console.log(canFormPalindrome("hello"));
console.log(canFormPalindrome("aabbhccd"));
console.log(canFormPalindrome("aaabb"));
console.log(canFormPalindrome("hasah"));
console.log(canFormPalindrome("gaavvoo"));
