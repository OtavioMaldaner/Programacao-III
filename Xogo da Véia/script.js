function verificaVencedor(tabuleiro){
    if(tabuleiro[0]==tabuleiro[1] && tabuleiro[1]==tabuleiro[2]){
        return true;
    }else if(tabuleiro[3]==tabuleiro[4] && tabuleiro[4]==tabuleiro[5]){
        return true;
    }else if(tabuleiro[6]==tabuleiro[7] && tabuleiro[7]==tabuleiro[8]){
        return true;
    }else if(tabuleiro[0]==tabuleiro[3] && tabuleiro[3]==tabuleiro[6]){
        return true;
    }else if(tablado[1]==tabuleiro[4] && tabuleiro[4]==tabuleiro[7]){
        return true;
    }else if(tablado[2]==tabuleiro[5] && tabuleiro[5]==tabuleiro[8]){
        return true;
    }else if(tablado[0]==tabuleiro[4] && tabuleiro[4]==tabuleiro[8]){
        return true;
    }else if(tablado[2]==tabuleiro[4] && tabuleiro[4]==tabuleiro[6]){
        return true;
    }else{
        return false;
    }
}

localStorage['jogada'] = 1;
localStorage['qtd'] = 0;
localStorage['vencedor'] = "ninguém";
var tablado = [0,1,2,3,4,5,6,7,8];
localStorage.setItem("tablado",JSON.stringify(tablado));
var botoes = document.querySelectorAll(".casa");
botoes.forEach(function(botao){
    botao.addEventListener("click",function(e){
        if(localStorage['qtd']<9 && e.target.innerHTML=="" && localStorage['vencedor']=="ninguém"){
            if (localStorage['jogada']=="1"){
                e.target.innerHTML = "X";
                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "X";
                localStorage.setItem("tablado",JSON.stringify(tablado_local));
                localStorage['jogada']="2";
                localStorage['qtd']++;
                console.log(JSON.parse(localStorage.getItem("tablado")))
                if(verificaVencedor(tablado_local)){
                    localStorage['vencedor']="X";
                    console.log("Venceu X");
                }
            }else{
                e.target.innerHTML = "O";
                localStorage['jogada']="1";
                localStorage['qtd']++;
                let tablado_local = JSON.parse(localStorage.getItem("tablado"));
                tablado_local[e.target.id] = "O";
                localStorage.setItem("tablado",JSON.stringify(tablado_local));
                console.log(JSON.parse(localStorage.getItem("tablado")))
                if(verificaVencedor(tablado_local)){
                    localStorage['vencedor']="O";
                    console.log("Venceu O");
                }
            }
        }
    });
});