'use strict';

const wrap = document.querySelector('.wrapper');
const lineOne = document.querySelector('.line_one');

const LIMIT_NUM = 41;
const NUMBER = [];
const LOTTO_NUM = [];

function makeLottoNum() {
    for(var i = 1; i < LIMIT_NUM; i++) {
        NUMBER.push(i);
    }
}

function pickNum() {
    for(var i = 1; i < LIMIT_NUM; i++) {
        const num = Math.floor(Math.random() * NUMBER.length);
        const ranNum = num + 1;
        if(LOTTO_NUM.indexOf(ranNum) === -1) {
            LOTTO_NUM.push(ranNum);
            if(LOTTO_NUM.length == 6) {
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
    lineOne.append(...number);
    wrap.append(lineOne);
}


function init() {
    makeLottoNum();
    pickNum();
    displayNum(LOTTO_NUM);
}

init();

