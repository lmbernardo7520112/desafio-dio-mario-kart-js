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
        console.log(`🏁 Rodada ${round}`);
        
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        // Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Lógica de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        // O código de cada bloco virá aqui...
    }
}

async function main() {
    console.log("🏁 Corrida entre Mario e Bowser começando...\n");
    
    state.player1 = players.Mario;
    state.player2 = players.Bowser;

    await playRaceEngine(state.player1, state.player2);

    // A lógica do vencedor virá aqui
};