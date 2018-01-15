## Artigos /Youtube E/OU Tutorial

### BrazilJS
1. [Criando um sistema de paginação simples com JavaScript](https://braziljs.org/blog/criando-um-sistema-de-paginacao-simples-com-javascript/)
2. [Usando promisify NodeJS 8](https://braziljs.org/blog/usando-promisify-nodejs-8/)
3. [Como testar o tempo de execução do seu código com JS](https://braziljs.org/blog/como-testar-o-tempo-de-execucao-seu-codigo-com-js/)
4. Como saber o ponto mais critico do meu código e como otimizá-lo? Ganharei performance?
5. Iniciando sua primeira Progressive Web App
6. Certificado NodeJS

### Medium
1. [Criando um sistema de paginação simples com JavaScript](https://medium.com/@renanbastos93/criando-um-sistema-de-pagina%C3%A7%C3%A3o-simples-com-javascript-d2dd853741ea)
2. [Usando promisify NodeJS 8](https://medium.com/@renanbastos93/usando-promisify-nodejs-8-94170ff19460)
3. Como testar o tempo de execução do seu código com JS

### Youtube
1. Entendo pouco mais de JavaScript (nivelamento)

### Exemplos dos códigos

#### Array Unique
 Você poderá passar por parametro, um array de números, textos e de objetos JSON.
```js
rrayUnique([1,2,3,4,5,1,2,3,4,5,1,2,3,1]);
// [1,2,3,4,5]

arrayUnique(["javascript", "nodejs", "javascript"]);
// ["javascript", "nodejs"]

arrayUnique([
    {
        name: "JavaScript",
        url: "https://www.ecma-international.org/memento/TC39.htm"
    },
    {
        name: "NodeJS",
        url: "www.nodejs.org"
    },
    {
        name: "NodeJS",
        url: "www.nodejs.org"
    },
    {
        name: "JavaScript",
        url: "https://www.ecma-international.org/memento/TC39.htm"
    }
], "name");
// [{
//     name: "JavaScript",
//     url: "https://www.ecma-international.org/memento/TC39.htm"
// },
// {
//     name: "NodeJS",
//     url: "www.nodejs.org"
// }]
```

## Dúvidas
Abre uma **[ISSUE](https://github.com/renanbastos93/tutoriais/issues)**
