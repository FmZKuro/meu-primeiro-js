
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    //window.open("https://github.com/FmZKuro/meu-primeiro-js")
    window.location.href = "https://github.com/FmZKuro/meu-primeiro-js"
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o muse"
    elemento.innerHTML = "obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"

}

function  load() {
    alert("Pagina carregada");
    
}

function funcaochange(elemento) {
    console.log(elemento.value)
    
}







/*
function soma(n1,n2){
    return n1 + n2
}
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/

/*var validar=0//global

function validaIdade(idade){
    //var validar;local
    if(idade>=18){
        validar= true
    }else{
        validar= false
    }
    return validar;
}

var idade = prompt("Qual sua idade?")
validarIdade(idade);
console.log(validar);
*/

//alert(soma(5, 10));
//alert(setReplace("vai Japão", "Japão", "Brasil"))




/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count<=5;count++){
    alert(count);
}
*/






/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
}
*/




/*
var idade = prompt("Qual sua idade")
if (idade>=18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};
*/






//var frutas =[ {nome:"maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);



//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva") Adiciona um item
//lista.pop();    retira o ultimo item

//console.log(lista.reverse);
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))












//var nome = " Mateus Franco ";
//var n1 = 18;
//var n2= 10;
//var frase = "Japão e´ o melhor time do mundo"
//alert(" Bem vindo " + nome + " tem " + idade + " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"))
//alert(frase.replace("Japão", "Brasil" ))