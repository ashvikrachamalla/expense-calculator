class Game{
    constructor(){

    }
    getState(){
        var getStateref = database.ref('gameState');
        getStateref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if (gameState == 0){
            player = new Player();
            var countref = await database.ref('playerCount').once("value");
            if(countref.exists()){
                playerCount = countref.val();
                player.getCount();
            }
           
            form = new Form ();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(32);
        text("gamestarted", 120, 100);
        Player.getplayerinfo();
        if(allPlayers!==undefined){
            var dp = 130;
            for(var p in allPlayers){
                if(p == "player" + player.index){
                    fill ("red");

                }else{
                    fill ("black");

                }
                dp += 20;
                textSize(15);
                text(allPlayers[p].name + " : " + allPlayers[p].distance, 120, dp);

            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();

        }
    }
}