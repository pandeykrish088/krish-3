class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(50,300,20,20);
    //player1.addImage("player1",player_img);
    
    player2 = createSprite(800,300,20,20);
   // player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 
                 
                  
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}