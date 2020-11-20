var database;
var transaction;
var playerCount = 0;
var gameState = 0;
var form, player,game;
var allPlayers;

function setup(){
    database = firebase.database();
    var transactionref = database.ref('transaction');
        transactionref.on("value",function(data){
            transaction = data.val();

        })
    createCanvas(500,500);

        form = new Form();
    
}

function draw(){
    background("white");
    
    form.display();
}

