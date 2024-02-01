$(".warning").hide();
$(".troubleshooter").hide();
$(".fullProgress").hide();
$(".imgClass").hide();
$(".pyro").hide();

let clickCounter = 0;

$(".b2").click(() =>{
    clickCounter +=1;
    switch (clickCounter){
        case 1:
            $(".warning").hide();
            $(".fullProgress").show();
            break;

        case 2:
            $(".warning").hide();
            $(".troubleshooter").show();
            $(".b5").click(() =>{
                $(".li2").hide();
            })
            setTimeout(()=>{
                $(".li3").hide();
            }, 1500);
            break;

            case 3:
                $(".warning").show();
                $(".troubleshooter").hide();
                $(".warningInfo").text("Sorry");
                $(".header").text("One last thing");
                $(".info").text("I swear");
                break;

                case 4:
                    $(".warningInfo").text("Pretty Please <3");
                    $(".header").text("Will you be my victim?");
                    setTimeout(() =>{
                        $(".header").text("Will you be my valentine?");
                    }, 2000);
                    $(".info").text("I will be the best valentine ever!");
                    $(".b3").show();
                    break;

                    case 5:
                        $(".pyro").show();
                        $("body").addClass("fireworks");
                        $(".warning").hide();
                        $(".imgDiv").hide();
                        break;
    }
});

$(".btn").click(() =>{
    move();
    $(".btn").hide();
})

$(document).one("click touchstart", () =>{
    setTimeout(() => {
        $("body").addClass("newBody");
        $(".cover").hide();
        $(".navbar").hide();
        intial();
    }, 2400);
});

function intial(){
    setTimeout(()=>{
        $(".c1").show();
        $(".c14").show();
    }, 500);

    setTimeout(()=>{
        $(".c2").show();
        $(".c13").show();
    }, 2000);

    setTimeout(()=>{
        $(".c3").show();
        $(".c12").show();
    }, 3500);

    setTimeout(()=>{
        $(".c4").show();
        $(".c11").show();
    }, 4000);

    setTimeout(()=>{
        $(".c5").show();
        $(".c10").show();
    }, 4500);

    setTimeout(()=>{
        $(".c6").show();
        $(".c9").show();
    }, 5000);

    setTimeout(()=>{
        $(".c7").show();
        $(".c8").show();
    }, 6000);

    setTimeout(() =>{
        $(".warning").show();
    }, 7000);
}

let i = 0;

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
  