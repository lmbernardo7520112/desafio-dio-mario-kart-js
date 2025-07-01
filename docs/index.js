// =================== MODIFICAÇÃO 1: Adicionar NOME aos objetos ===================
const players = {
    "Mario": { NOME: "Mario", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 3, pontos: 0 },
    "Peach": { NOME: "Peach", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 2, pontos: 0 },
    "Yoshi": { NOME: "Yoshi", VELOCIDADE: 2, MANOBRABILIDADE: 4, PODER: 3, pontos: 0 },
    "Bowser": { NOME: "Bowser", VELOCIDADE: 5, MANOBRABILIDADE: 2, PODER: 5, pontos: 0 },
    "Luigi": { NOME: "Luigi", VELOCIDADE: 3, MANOBRABILIDADE: 4, PODER: 4, pontos: 0 },
    "Donkey Kong": { NOME: "Donkey Kong", VELOCIDADE: 2, MANOBRABILIDADE: 2, PODER: 5, pontos: 0 },
};

const state = {
    player1: null,
    player2: null,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

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

// =================== MODIFICAÇÃO 2: Criar função de seleção aleatória ===================
async function selectRandomPlayers() {
    console.log("Sorteando jogadores...");
    const playerKeys = Object.keys(players);
    let player1Key, player2Key;

    // Garante que os dois jogadores sejam diferentes
    do {
        player1Key = playerKeys[Math.floor(Math.random() * playerKeys.length)];
        player2Key = playerKeys[Math.floor(Math.random() * playerKeys.length)];
    } while (player1Key === player2Key);

    return {
        p1: players[player1Key],
        p2: players[player2Key],
    };
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

// =================== MODIFICAÇÃO 3: Chamar a seleção aleatória ===================
(async function main() {
    const selectedPlayers = await selectRandomPlayers();
    
    state.player1 = selectedPlayers.p1;
    state.player2 = selectedPlayers.p2;
    
    console.log(`\n🏁 Corrida entre ${state.player1.NOME} e ${state.player2.NOME} começando...\n`);

    await playRaceEngine(state.player1, state.player2);

    console.log("\n----------------------------------------");
    console.log("Resultado final:");
    
    let p1_score_text = state.player1.pontos === 1 ? "ponto" : "pontos";
    let p2_score_text = state.player2.pontos === 1 ? "ponto" : "pontos";

    console.log(`${state.player1.NOME}: ${state.player1.pontos} ${p1_score_text}`);
    console.log(`${state.player2.NOME}: ${state.player2.pontos} ${p2_score_text}`);
    
    if (state.player1.pontos > state.player2.pontos) {
        console.log(`\n🏆 ${state.player1.NOME} venceu a corrida! Parabéns!`);
    } else if (state.player2.pontos > state.player1.pontos) {
        console.log(`\n🏆 ${state.player2.NOME} venceu a corrida! Parabéns!`);
    } else {
        console.log("\nA corrida terminou em empate!");
    }
})();