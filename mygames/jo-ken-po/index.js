const opcoes = {
    caminho: [ 'midia/pedra.svg','midia/papel.svg','midia/tesoura.svg'],
    texto: ['JO','KEN','PO']
}
const content = document.getElementById('content')
function randint(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min
}
function jogada(valor){
    const jogadas = ['pedra','papel','tesoura']
    const jogador = valor
    const computador = jogadas[randint(0,2)]
    jokenpo()
    resultado(jogador,computador)
}
function jokenpo(){
    content.innerHTML=`
    <div id="jokenpo-animation">
        <div class='img'></div>
        <div class='img'></div>
        <div class='img'></div>
        <div class='txt'></div>
        <div class='txt'></div>
        <div class='txt'></div>
    </div>`
    img(0,1000)
    txt(0,2000)
    img(1,3000)
    txt(1,4000)
    img(2,5000)
    txt(2,6000)
    function img(value,time) {
        setTimeout(() => {
            document.querySelectorAll('div.img')[value].innerHTML=`<img src="${opcoes.caminho[value]}" class='up'>`
        }, time);
    }
    function txt(value,time) {
        setTimeout(() => {
            document.querySelectorAll('div.txt')[value].innerHTML=`<span class='show'>${opcoes.texto[value]}</span>`
        }, time);
    }
}
function resultado(jogador,computador){
    let msg = 'Você '
    const win = () => {
        msg += 'GANHOU!!!'
    }
    const lose = () =>{
        msg += 'PERDEU!!!'
    }
    const empate = () =>{
        msg = 'EMPATE!!!'
    }
    if(jogador==computador){
        empate()
    }else{
        switch(jogador){
            case 'pedra':
                (computador=='tesoura') ? win() : lose()
                break
            case 'papel':
                (computador=='pedra') ? win() : lose()
                break
            case 'tesoura':
                (computador=='papel') ? win() : lose()
        }
    }
    content.innerHTML=`
    <div id='result'>
        <div class='grid3'>
            <div class='player'>Você <img src="midia/${jogador}.svg"></div>
            <div class='vs'>X</div>
            <div class='pc'><img src="midia/${computador}.svg"> Bot</div>
            <div class='result'><span class="msg">${msg}</span></div>
        </div>
        
    </div>`
}