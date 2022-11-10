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

