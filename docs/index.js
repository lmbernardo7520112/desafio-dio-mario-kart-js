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