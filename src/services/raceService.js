import { rollDice } from "../utils/dice.js";

async function getRandomBlock() {
    let random = Math.random();
    let result;
    switch (true) {
        case random < 0.33: result = "RETA"; break;
        case random < 0.66: result = "CURVA"; break;
        default: result = "CONFRONTO";
    }
    return result;
}

// =================== MODIFICAÇÃO 3: Usar nomes dinâmicos ===================
async function playRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round}`);
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        // As variáveis hardcoded foram removidas. Usaremos player1.NOME e player2.NOME
        
        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + player1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + player2.VELOCIDADE;
            console.log(`${player1.NOME} 🎲 rolou um dado de velocidade ${diceResult1} + ${player1.VELOCIDADE} = ${totalTestSkill1}`);
            console.log(`${player2.NOME} 🎲 rolou um dado de velocidade ${diceResult2} + ${player2.VELOCIDADE} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${player1.NOME} venceu a reta! Ganhou 1 ponto 🍄`);
                player1.pontos++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${player2.NOME} venceu a reta! Ganhou 1 ponto 🍄`);
                player2.pontos++;
            } else {
                console.log("Empate na reta! Ninguém pontuou.");
            }
        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + player1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + player2.MANOBRABILIDADE;
            console.log(`${player1.NOME} 🎲 rolou um dado de manobrabilidade ${diceResult1} + ${player1.MANOBRABILIDADE} = ${totalTestSkill1}`);
            console.log(`${player2.NOME} 🎲 rolou um dado de manobrabilidade ${diceResult2} + ${player2.MANOBRABILIDADE} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${player1.NOME} venceu a curva! Ganhou 1 ponto 🍄`);
                player1.pontos++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${player2.NOME} venceu a curva! Ganhou 1 ponto 🍄`);
                player2.pontos++;
            } else {
                console.log("Empate na curva! Ninguém pontuou.");
            }
        }
        if (block === "CONFRONTO") {
            totalTestSkill1 = diceResult1 + player1.PODER;
            totalTestSkill2 = diceResult2 + player2.PODER;
            console.log(`${player1.NOME} confrontou com ${player2.NOME}! 🥊`);
            console.log(`${player1.NOME} 🎲 rolou um dado de poder ${diceResult1} + ${player1.PODER} = ${totalTestSkill1}`);
            console.log(`${player2.NOME} 🎲 rolou um dado de poder ${diceResult2} + ${player2.PODER} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                if (player2.pontos > 0) {
                    console.log(`${player1.NOME} venceu o confronto! ${player2.NOME} perdeu 1 ponto 🐢`);
                    player2.pontos--;
                }
            } else if (totalTestSkill2 > totalTestSkill1) {
                if (player1.pontos > 0) {
                    console.log(`${player2.NOME} venceu o confronto! ${player1.NOME} perdeu 1 ponto 🐢`);
                    player1.pontos--;
                }
            } else {
                console.log("Empate no confronto! Ninguém perdeu pontos.");
            }
        }
    }
}

export { playRaceEngine, getRandomBlock };