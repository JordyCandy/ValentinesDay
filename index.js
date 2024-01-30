let clickCounter = 1;
$(".troubleshooter").hide();
$(".fullProgress").hide();
$(".b2").click(()=>{
    $(".warning").hide();

    switch(clickCounter){
        case 1:
            $(".fullProgress").show();
            clickCounter +=1;
            break;

        case 2:
            $(".warning").show();
            $(".b2").click(()=>{
                $(".troubleshooter").show();
                $(".warning").hide();
                clickCounter +=1;
            });
            break;
    }
});


//progress bar
var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = $("#myBar");
    var width = 1;
    var id = setInterval(frame, 70);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        setTimeout(()=>{
            $(".fullProgress").hide();
            $(".warning").show();
            $(".header").text("Virus detected!");
            $(".info").text("Run troubleshooter?");
        }, 2000);
      } else {
        width++;
        elem.css("width", width + "%");
      }
    }
  }
}

$(".btn").click(()=>{
    move();
    $(".btn").hide();
});

$(".b4").click(() =>{
    if(clickCounter === 3){
    $(".troubleshooter").hide();
    $(".header").text("Will you be my valentine?");
    $(".warningInfo").text("Pretty please :')");
    $(".info").text("I promise I'll be the best valentine ever!");
    $(".warning").show();
    clickCounter += 1;
    console.log(clickCounter);
    }
});