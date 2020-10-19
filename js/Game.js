class Game {
  constructor(){}
  
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var pos = 130;
      for(var plr in allPlayers){
  if(plr === "player" + player.index){
     fill("green");

  } else{
    fill("red");
  }
  pos = pos+20;
  text(allPlayers[plr].name +":"+allPlayers[plr].distance,120,pos);
      }

    }
    if(keyDown(UP_ARROW)){
      player.distance = player.distance + 50;
      
       player.update();
    }
  }
}
