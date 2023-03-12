//jshint esversion:6


const superheroes = require('superheroes');

var mySuperheroName = superheroes.random();

const supervillains = require('supervillains');

var myVillain = supervillains.random();
console.log(mySuperheroName + " vs " + myVillain);