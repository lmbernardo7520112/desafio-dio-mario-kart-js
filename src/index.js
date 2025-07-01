import players from "./config/characters.js";
import { playRaceEngine } from "./services/raceService.js";

const state = {
    player1: null,
    player2: null,
};


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