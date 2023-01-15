# 🎱Objetivo
<p>O objetivo deste projeto foi criar um compilado com exercícios práticos extremamente eficázes para o aprendizado de alguns dos principais métodos se tratando de arrays. Sendo eles: filter, map e reduce.</p>
<h1>Compreendendo os exercícios:</h1>
<b><li>Exercício método filter</b> → Filtrar e retornar todos os números pares de um array:</li>
<p>Dada uma sequência de números dispostos em uma lista (array) <b>filtre</b> e retorne todos os números pares da mesma. Para realizar esse exercício utilizei o método <code>filter</code> que possui como característica principal criar um novo array com todos os elementos que passaram pelo teste de exigências impostos pela função, que neste caso, é ser número par.</p>
<b><li>Exercício método map</b> → Multiplicar qualquer número do array por 2:</li></b>
<p>Nesse primeiro exercício de map solucionaremos de uma forma mais simples e direta. No segundo, entretanto, faremos algo mais robusto, utilizando o parâmetro <code>this</code> de um objeto criado por nós mesmos. </p>
<b><li>Exercício método map (com this)</b> → Praticar a sintaxe de multiplicação de número utilizando o parâmetro <code>this</code> de um objeto criado por nós mesmos.</li></b>
<p>Solução no arquivo de nome: <b>script.this.js</b>. É válido ressaltar que com este método o array <b>não</b> é modificado. Mas sim, gerado um novo array.</p>
<b><li>Exercício método filter</b> → Multiplicar qualquer número do array por 2:</li>
<p>Filtrar e retornar todos os números pares de um dado array. É válido ressaltar que para realizar esse mesmo exercício de forma invetida (filtrar por número ímpar) basta retornar da seguinte forma no código: <code>return item % 2 !== 0;</code>.</p>
<b><li>Exercício método reduce →</b> Somar todos os números do dado array.</li><br>
<b><li>Exercício método reduce →</b> Criar uma função que receba uma lista de preços e um número representando o saldo disponível. Calcular qual será o saldo final após subtrair todos os preços da lista enviada.</li> 
<p>É válido ressaltar que esse método não vai executar um novo array. Ele executará uma função em todos os elementos do array retornando um valor único. </p>
<h1>filter()</h1>
<p>Segundo a documentação da <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">mdn web docs</a> o método <code>filter</code> cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. É como se fosse colocado todo o array dentro de um filtro e só passasse aqueles itens que correspondessem a uma data exigência/condição. 
<h3> Sintaxe ⤵️</h3>
<p><code>array.filter(callback, thisArg)</code><br></br>
Recebe os mesmos parâmetros que a <code>map</code> onde callback é a função a ser executada em cada elemento. A qual no <code>filter</code> normalmente é uma comparação.  
<h1>map()</h1>
<p>A <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map">mdn</a> revela que esse método invoca a função <code>callback</code> passada por argumento para cada elemento do array e devolve um novo array como resultado.</p>
<h3>Sintaxe ⤵️</h3>
<code>arr.map(callback[, thisArg])</code><br></br>
<h1>reduce()</h1>
<p>Esse método não vai executar um outro array. Ele executa uma função em todos os elementos do array retornando um valor único. A <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">mdn</a> explana o método <code>reduce</code> executa uma função reducer (fornecida por nós mesmos) para cada elemento do array, resultando num único valor de retorno.</p>
<h3>Sintaxe ⤵️</h3>
<code>array.reduce(callbackFn, initialValue)</code><br></br>
<ul>
<li>callback: função a ser executada a partir do acumulador;</li>
<li>initialValue: valor sobre o qual o retorno final irá atuar</li>
</ul>

<br></br>

# 🎱Objective
<p>The goal of this project was to create a compilation with extremely effective practical exercises for learning some of the main methods when dealing with arrays. They are: filter, map and reduce.</p>
<h1>Understanding the exercises:</h1>
<b><li>Filter method exercise</b> → Filter and return all even numbers from an array:</li>
<p>Given a sequence of numbers arranged in a list (array) <b>filter</b> and return all the even numbers of the same. To carry out this exercise, I used the <code>filter</code> method, which has as its main characteristic creating a new array with all the elements that passed the test of requirements imposed by the function, which in this case is to be an even number.</p >
<b><li>Exercise map method</b> → Multiply any number in the array by 2:</li></b>
<p>In this first map exercise we will solve it in a simpler and more direct way. In the second, however, we will do something more robust, using the <code>this</code> parameter of an object created by ourselves. </p>
<b><li>Exercise map method (with this)</b> → Practice the number multiplication syntax using the <code>this</code> parameter of an object created by ourselves.</li></ b>
<p>Solution in file name: <b>script.this.js</b>. It is worth mentioning that with this method the array is <b>not</b> modified. But yes, generated a new array.</p>
<b><li>Filter method exercise</b> → Multiply any number in the array by 2:</li>
<p>Filter and return all even numbers from a given array. It is worth noting that to perform this same exercise backwards (filter by odd number) just return as follows in the code: <code>return item % 2 !== 0;</code>.</p>
<b><li>Exercise reduce method →</b> Add all the numbers in the given array.</li><br>
<b><li>Exercise reduce method →</b> Create a function that receives a price list and a number representing the available balance. Calculate what the final balance will be after subtracting all prices from the submitted list.</li>
<p>It is worth mentioning that this method will not execute a new array. It will run a function on all array elements returning a single value. </p>
<h1>filter()</h1>
<p>According to the documentation from <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">mdn web docs</a> the method <code>filter</code> creates a new array with all elements that passed the test implemented by the given function. It is as if the entire array were placed inside a filter and only passed those items that match a date requirement/condition.
<h3> Syntax ⤵️</h3>
<p><code>array.filter(callback, thisArg)</code><br></br>
It takes the same parameters as <code>map</code> where callback is the function to be executed on each element. Which in the <code>filter</code> is normally a comparison.
<h1>map()</h1>
<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">mdn</a> reveals that this method invokes the function <code>callback</code> passed as an argument for each array element and returns a new array as the result.</p>
<h3>Syntax ⤵️</h3>
<code>arr.map(callback[, thisArg])</code><br></br>
<h1>reduce()</h1>
<p>This method will not execute another array. It runs a function on all array elements returning a single value. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">mdn</a> explains the <code>reduce</code > executes a reducer function (provided by ourselves) for each array element, resulting in a single return value.</p>
<h3>Syntax ⤵️</h3>
<code>array.reduce(callbackFn, initialValue)</code><br></br>
<ul>
<li>callback: function to be executed from the accumulator;</li>
<li>initialValue: value on which the final return will act</li>
</ul>

