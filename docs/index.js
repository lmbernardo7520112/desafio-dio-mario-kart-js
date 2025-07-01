// index.js

const players = {
    "Mario": {
        VELOCIDADE: 4,
        MANOBRABILIDADE: 3,
        PODER: 3,
        pontos: 0,
    },
    "Peach": {
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 2,
        pontos: 0,
    },
    "Yoshi": {
        VELOCIDADE: 2,
        MANOBRABILIDADE: 4,
        PODER: 3,
        pontos: 0,
    },
    "Bowser": {
        VELOCIDADE: 5,
        MANOBRABILIDADE: 2,
        PODER: 5,
        pontos: 0,
    },
    "Luigi": {
        VELOCIDADE: 3,
        MANOBRABILIDADE: 4,
        PODER: 4,
        pontos: 0,
    },
    "Donkey Kong": {
        VELOCIDADE: 2,
        MANOBRABILIDADE: 2,
        PODER: 5,
        pontos: 0,
    },
};

const state = {
    player1: null,
    player2: null,
};

async function main() {
    console.log("🏁 Corrida entre Mario e Bowser começando...\n");
    
    // Define os jogadores para a corrida
    state.player1 = players.Mario;
    state.player2 = players.Bowser;

    // A lógica da corrida virá aqui
    
    // A lógica do vencedor virá aqui
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }

    return result;
}

async function playRaceEngine(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round}`);
        
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        let player1Name = "Mario"; // Simples para o log
        let player2Name = "Bowser";

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + player1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + player2.VELOCIDADE;

            console.log(`${player1Name} 🎲 rolou um dado de velocidade ${diceResult1} + ${player1.VELOCIDADE} = ${totalTestSkill1}`);
            console.log(`${player2Name} 🎲 rolou um dado de velocidade ${diceResult2} + ${player2.VELOCIDADE} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${player1Name} venceu a reta! Ganhou 1 ponto 🍄`);
                player1.pontos++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${player2Name} venceu a reta! Ganhou 1 ponto 🍄`);
                player2.pontos++;
            } else {
                console.log("Empate na reta! Ninguém pontuou.");
            }
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + player1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + player2.MANOBRABILIDADE;

            console.log(`${player1Name} 🎲 rolou um dado de manobrabilidade ${diceResult1} + ${player1.MANOBRABILIDADE} = ${totalTestSkill1}`);
            console.log(`${player2Name} 🎲 rolou um dado de manobrabilidade ${diceResult2} + ${player2.MANOBRABILIDADE} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                console.log(`${player1Name} venceu a curva! Ganhou 1 ponto 🍄`);
                player1.pontos++;
            } else if (totalTestSkill2 > totalTestSkill1) {
                console.log(`${player2Name} venceu a curva! Ganhou 1 ponto 🍄`);
                player2.pontos++;
            } else {
                console.log("Empate na curva! Ninguém pontuou.");
            }
        }

        if (block === "CONFRONTO") {
            totalTestSkill1 = diceResult1 + player1.PODER;
            totalTestSkill2 = diceResult2 + player2.PODER;

            console.log(`${player1Name} confrontou com ${player2Name}! 🥊`);
            console.log(`${player1Name} 🎲 rolou um dado de poder ${diceResult1} + ${player1.PODER} = ${totalTestSkill1}`);
            console.log(`${player2Name} 🎲 rolou um dado de poder ${diceResult2} + ${player2.PODER} = ${totalTestSkill2}`);

            if (totalTestSkill1 > totalTestSkill2) {
                if (player2.pontos > 0) {
                    console.log(`${player1Name} venceu o confronto! ${player2Name} perdeu 1 ponto 🐢`);
                    player2.pontos--;
                }
            } else if (totalTestSkill2 > totalTestSkill1) {
                if (player1.pontos > 0) {
                    console.log(`${player2Name} venceu o confronto! ${player1Name} perdeu 1 ponto 🐢`);
                    player1.pontos--;
                }
            } else {
                console.log("Empate no confronto! Ninguém perdeu pontos.");
            }
        }
    }
}

async function main() {
    console.log("🏁 Corrida entre Mario e Bowser começando...\n");

    state.player1 = players.Mario;
    state.player2 = players.Bowser;

    await playRaceEngine(state.player1, state.player2);

    console.log("\n----------------------------------------");
    console.log("Resultado final:");

    let player1Name = "Mario"; // Simples para o log
    let player2Name = "Bowser";
    
    // Usando operador ternário para "ponto" ou "pontos"
    let p1_score_text = state.player1.pontos === 1 ? "ponto" : "pontos";
    let p2_score_text = state.player2.pontos === 1 ? "ponto" : "pontos";

    console.log(`${player1Name}: ${state.player1.pontos} ${p1_score_text}`);
    console.log(`${player2Name}: ${state.player2.pontos} ${p2_score_text}`);
    
    if (state.player1.pontos > state.player2.pontos) {
        console.log(`\n🏆 ${player1Name} venceu a corrida! Parabéns!`);
    } else if (state.player2.pontos > state.player1.pontos) {
        console.log(`\n🏆 ${player2Name} venceu a corrida! Parabéns!`);
    } else {
        console.log("\nA corrida terminou em empate!");
    }
};