'use strict';

const wrap04 = document.querySelector('.wrapper');
const lineFour = document.querySelector('.line_four');

const LIMIT_NUM_04 = 41;
const NUMBER_04 = [];
const LOTTO_NUM_04 = [];

function makeLottoNum() {
    for(var i = 1; i < LIMIT_NUM_04; i++) {
        NUMBER_04.push(i);
    }
}

function pickNum() {
    for(var i = 1; i < LIMIT_NUM_04; i++) {
        const num = Math.floor(Math.random() * NUMBER_04.length);
        const ranNum = num + 1;
        if(LOTTO_NUM_04.indexOf(ranNum) === -1) {
            LOTTO_NUM_04.push(ranNum);
            if(LOTTO_NUM_04.length == 6) {
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
    lineFour.append(...number);
    wrap04.append(lineFour);
}


function init() {
    makeLottoNum();
    pickNum();
    displayNum(LOTTO_NUM_04);
}

init();

