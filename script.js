let numberToFind = 0;
let attemps = 0;

function reflesh(){
    //gera um número aleatório
    attemps = 0;
    numberToFind = Math.round(Math.random() * 100);

    console.log(numberToFind);
}

function verifyNumber(){
    //verifica se o número digitado é igual ao gerado
    let bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1){
        alert("Aposta inválida! Você deve digitar um valor de 1 a 100");
        document.getElementById('bet').value=''; // Limpa o campo
    }
    
    if(bet > numberToFind){
        attemps++;
        alert("DICA: o número é MENOR que o digitado!");
        document.getElementById('bet').value=''; // Limpa o campo
    }else if(bet < numberToFind){
        attemps++;
        alert("DICA: o número é MAIOR que o digitado!");
        document.getElementById('bet').value=''; // Limpa o campo
    }else{
        alert(`Parabéns, você acertou após ${attemps} tentativas!!`);
        document.getElementById('bet').value=''; // Limpa o campo
        reflesh()
    }

}

reflesh();