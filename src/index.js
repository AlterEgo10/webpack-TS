/**@format*/

import updateUser from './userData';
// import {getRandomInt} from './random'
import './style/main.scss';
import candyImg from './img/candy.svg';

const mainImg = document.querySelector('.main-img');
mainImg.src = candyImg;

const mainButton = document.querySelector('.main-btn');
mainButton.addEventListener('click', updateUser);
updateUser();
