
let gameStatus = {
  isGameStart:false,
  currentAns:0,
  currentScore:0,
  currentRound:0
};

let gameCondtions = {
  score:20,
  penalty:5,
  roundCount:9
};


$(document).ready(function() {
    initGame();
    getGameCondtionsAndStart();
});


function getGameCondtionsAndStart(answer)
{
  // todo make server call request to get game data
  // todo make server call request to get game conditins
  // currently read data from local variable

   gameStatus.startGame=true;
   startGame(1);
}


function startGame(index)
{
  if(index>gameCondtions.roundCount)
  {
    gameStatus.startGame===false
    updateBoard();
    $("#gameImage").fadeOut();
     // TODO reset game and start new game.
    return;
  }

  gameStatus.currentRound=index;
  gameStatus.currentAns= result.guessList[index-1].nationality;
  moveNext(result.guessList[index - 1].image.url);

  updateBoard();

  waitForUserAnswer().then(function () { 
      startGame(++index) // recursive call for next round.
  })   
}

function waitForUserAnswer() {
  return new Promise(resolve => setTimeout(resolve, 3100));
}

function guessNatiolaity(answer,sender)
{
    if(gameStatus.startGame===false){ return; }

    if(gameStatus.currentAns===answer)
    {
      var senderPosition = getOffset(sender); 
      makeScore(senderPosition.left, senderPosition.top);
    }

    else{ makePenalty(); }
    updateBoard();
}

function makeScore(x,y)
{
    $("#gameImage").stop()
    $("#gameImage").animate(
        {
            left: x,
            top: y,
        }, 750);

    $("#gameImage").fadeOut();

  if(gameStatus.currentScore>= gameCondtions.roundCount * gameCondtions.score) { return; } // max score
  gameStatus.currentScore+=gameCondtions.score;
}

function makePenalty()
{
  if(gameStatus.currentScore<=0){
      return;
  }
    gameStatus.currentScore-=gameCondtions.penalty;
}


 function moveNext(imagesrc) {

  $("#gameImage").css('top', 0);
  $("#gameImage").css('left', Math.floor(window.innerWidth/2)-$('.gameImage').height()/2);
  $("#gameImage").attr("src",imagesrc);
  $("#gameImage").fadeIn();

  var windowHeight = $(window).height();
  var imageHeight = $('.gameImage').height();
  var bottomMargin = 80;
  var pos = windowHeight - (imageHeight + bottomMargin);
  $('.gameImage').animate({top:pos},3000,function () {
      $('.gameImage').css({
          bottom: bottomMargin,
          top: 'auto'
      });
  });
}


function updateBoard()
{
  $("#currentRound").text(gameStatus.currentRound);
  $("#maxRound").text(gameCondtions.roundCount);
  $("#currentScore").text(gameStatus.currentScore);
}

function initGame()
{
    gameStatus.isGameStart=false;
    gameStatus.currentAns=0;
    gameStatus.currentScore=0;
    updateBoard();
}


function getOffset(el) {
  var x = 0;
  var y = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
  }
  return { top: y, left: x };
}

// TODO read this from server call. 
// this is for sample.

var result= {
    "guessList": [
      {
        "id": 1,
        "nationality": 1,
        "image": {
          "id": 1,
          "url": "images//1.jpeg"
        }
      },
      {
        "id": 2,
        "nationality": 2,
        "image": {
          "id": 2,
          "url": "images//2.jpeg"
        }
      },
      {
        "id": 3,
        "nationality": 3,
        "image": {
          "id": 3,
          "url": "images//3.jpeg"
        }
      },
      {
        "id": 4,
        "nationality": 2,
        "image": {
          "id": 2,
          "url": "images//2.jpeg"
        }
      },
      {
        "id": 5,
        "nationality": 2,
        "image": {
          "id": 2,
          "url": "images//2.jpeg"
        }
      },
      {
        "id": 6,
        "nationality": 1,
        "image": {
          "id": 1,
          "url": "images//1.jpeg"
        }
      },
      {
        "id": 7,
        "nationality": 1,
        "image": {
          "id": 1,
          "url": "images//1.jpeg"
        }
      },
      {
        "id": 8,
        "nationality": 1,
        "image": {
          "id": 1,
          "url": "images//1.jpeg"
        }
      }
      ,
      {
        "id": 9,
        "nationality": 1,
        "image": {
          "id": 1,
          "url": "images//1.jpeg"
        }
      }
    ],
    "gameConditions": {
      "score": 25,
      "penalty": 5
    }
  }