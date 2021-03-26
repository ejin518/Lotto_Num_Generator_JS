'use strict';

const wrap03 = document.querySelector('.wrapper');
const lineThree = document.querySelector('.line_three');

const LIMIT_NUM_03 = 41;
const NUMBER_03 = [];
const LOTTO_NUM_03 = [];

function makeLottoNum() {
    for(var i = 1; i < LIMIT_NUM_03; i++) {
        NUMBER_03.push(i);
    }
}

function pickNum() {
    for(var i = 1; i < LIMIT_NUM_03; i++) {
        const num = Math.floor(Math.random() * NUMBER_03.length);
        const ranNum = num + 1;
        if(LOTTO_NUM_03.indexOf(ranNum) === -1) {
            LOTTO_NUM_03.push(ranNum);
            if(LOTTO_NUM_03.length == 6) {
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
    lineThree.append(...number);
    wrap03.append(lineThree);
}


function init() {
    makeLottoNum();
    pickNum();
    displayNum(LOTTO_NUM_03);
}

init();

