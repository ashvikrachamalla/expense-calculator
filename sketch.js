var database;
var playerCount = 0;
var gameState = 0;
var form, player,game;
var allPlayers;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    form = new Form();
}

function draw(){
    background("white");
    form.display();
}

