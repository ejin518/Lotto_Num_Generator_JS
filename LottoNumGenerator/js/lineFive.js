'use strict';

const wrap05 = document.querySelector('.wrapper');
const lineFive = document.querySelector('.line_five');

const LIMIT_NUM_05 = 41;
const NUMBER_05 = [];
const LOTTO_NUM_05 = [];

function makeLottoNum() {
    for(var i = 1; i < LIMIT_NUM_05; i++) {
        NUMBER_05.push(i);
    }
}

function pickNum() {
    for(var i = 1; i < LIMIT_NUM_05; i++) {
        const num = Math.floor(Math.random() * NUMBER_05.length);
        const ranNum = num + 1;
        if(LOTTO_NUM_05.indexOf(ranNum) === -1) {
            LOTTO_NUM_05.push(ranNum);
            if(LOTTO_NUM_05.length == 6) {
                break;
            }
        } 
        
    }
}

function loadNum(num) {
    const span = document.createElement('span');
    span.innerText = `${num}`;
    return span;
}

function displayNum(num) {
    const number = num.map(loadNum);
    lineFive.append(...number);
    wrap05.append(lineFive);
}


function init() {
    makeLottoNum();
    pickNum();
    displayNum(LOTTO_NUM_05);
}

init();

