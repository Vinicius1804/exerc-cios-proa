let drofo = ["Anel da invisibilidade", "par de botas", "par de botas", "poção de sono", "poção de inocência", "poção de inocência"];
let torper = ["Capa da invisibilidade", "pedra do despertar", "varinha das varinhas", "poção da inocência", "poção da mentira", "poção da mentira", "poção anti-inteligência"];

//todos as atualizações do TORPER
torper.splice(4, 1); //consumiu primeira poção da mentira na posição [4] do array
torper.splice(1, 1); //perder a sua pedra
torper.push("par de botas mágicas"); //ganhou um par de botas mágicas do drofo
torper.push("escudo mágico"); //achou um escudo mágico
torper.push("espada mágica"); //achou uma espada mágica
torper.splice(4, 1); //dorper consumiu a poção de anti-inteligência

//todos as atualizações do DROFO
drofo.splice(1,1); //perde uma bota mágica para o TORPER
drofo.push("par de botas mágicas"); //ganhou mais uma bota mágica
drofo.splice(2,1); //usou a poção do sono
drofo.push("ovo de dragão"); //encontrou um ovo de dragão
drofo.push("coxinha"); //encontrou uma coxinha



console.log("-------------------------")
console.log("ÍTENS FINAIS DO TORPER")

for(let i=0; i < torper.length; i++){
    console.log(i + " - " + torper[i]);
}

console.log("-------------------------\n");

console.log("-------------------------");
console.log("ÍTENS FINAIS DO DROFO");
for(let i=0; i < drofo.length; i++){
    console.log(i + " - " + drofo[i]);
}
console.log("-------------------------");