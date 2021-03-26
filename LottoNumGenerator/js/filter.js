'use strict';

const btn_wrap = document.querySelector('.buttons');
const line_One = document.querySelector('.line_one');
const line_Two = document.querySelector('.line_two');
const line_Three = document.querySelector('.line_three');
const line_Four = document.querySelector('.line_four');
const line_Five = document.querySelector('.line_five');
const reset = document.querySelector('.reset_btn');

function onButtonClick(event) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    if(key === "one") {
        line_One.classList.add('visible');
        line_Two.classList.remove('visible');
        line_Three.classList.remove('visible');
        line_Four.classList.remove('visible');
        line_Five.classList.remove('visible');
    } else if (key === "two") {
        line_One.classList.add('visible');
        line_Two.classList.add('visible');
        line_Three.classList.remove('visible');
        line_Four.classList.remove('visible');
        line_Five.classList.remove('visible');
    } else if (key === "three") {
        line_One.classList.add('visible');
        line_Two.classList.add('visible');
        line_Three.classList.add('visible');
        line_Four.classList.remove('visible');
        line_Five.classList.remove('visible');
    } else if (key === "four") {
        line_One.classList.add('visible');
        line_Two.classList.add('visible');
        line_Three.classList.add('visible');
        line_Four.classList.add('visible');
        line_Five.classList.remove('visible');
    } else if (key === "five") {
        line_One.classList.add('visible');
        line_Two.classList.add('visible');
        line_Three.classList.add('visible');
        line_Four.classList.add('visible');
        line_Five.classList.add('visible');
    }
}

function onButtonReset(event) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    if(key === "reset") {
        location.reload();
    }
}
function init() {
    btn_wrap.addEventListener('click', event => onButtonClick(event))
    reset.addEventListener('click', event => onButtonReset(event))
}

init();
