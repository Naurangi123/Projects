'use strict';

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const button = document.querySelector('.close-model');
const btnsOpenModel = document.querySelectorAll('.show-model');
const btnCloseModel = document.querySelector('.close-model');
console.log(btnsOpenModel);

const openModel = function () {
  console.log('Button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closedModel);
overlay.addEventListener('click', closedModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closedModel();
  }
});
