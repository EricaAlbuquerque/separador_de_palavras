const texto= document.querySelector(".text_area");
const input= document.querySelector('.input');
const botao = document.querySelector(".btn_sep");




texto.addEventListener('click' , function() {
    alert('Cole um texto na área de texto')

});
 
//função está separando por letra
botao.addEventListener('click' ,function separar_words() {
   //separ o valor do text area e colocar em um array
   let texto_sep=[texto.value]+ " ".split();
    
        //console.log(texto_sep);
     
    //seprar palavras  por espaço ecolocar em  do array novo
    let palavra= texto_sep.split(" ")    
       console.log(palavra)
 
   //separar palavras com letra especifica digitadas no input

    var letra = palavra.filter(item => item.charAt(0) === input.value);  
    console.log(letra);
   

   let letra_sep=[letra]
   for(let i=0; i<letra_sep.length;i++){
    console.log(letra_sep[i]);
   }


   //colocar os itens do array no html em forma de lista
   //map() ira converter  em outro formato
    //join transformar os item em string
   document.getElementById('lista_exibe').innerHTML=
   letra.map(letra_sep=>'<li>'+letra_sep+'</li>').join('');

    });

   
   

