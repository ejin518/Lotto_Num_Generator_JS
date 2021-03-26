'use strict';

const wrapper = document.querySelector('.wrapper');
const lineTwo = document.querySelector('.line_two');

const LIMIT_NUM02 = 41;
const NUMBERS = [];
const LOTTO_NUMS = [];

function makeLottoNum() {
    for(var i = 1; i < LIMIT_NUM02; i++) {
        NUMBERS.push(i);
    }
}

function pickNum() {
    for(var i = 1; i < LIMIT_NUM02; i++) {
        const num = Math.floor(Math.random() * NUMBERS.length);
        const ranNum = num + 1;
        if(LOTTO_NUMS.indexOf(ranNum) === -1) {
            LOTTO_NUMS.push(ranNum);
            if(LOTTO_NUMS.length == 6) {
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
    lineTwo.append(...number);
    wrapper.append(lineTwo);
}


function init() {
    makeLottoNum();
    pickNum();
    displayNum(LOTTO_NUMS);
}

init();

