$(".troubleshooter").hide();
$(".warning").hide();
$(".fullProgress").hide();
$(".pyro").hide();
$(".imgClass").hide();

//Tem hide
// $(".cover").hide();
// $(".navbar").hide();
// $("body").addClass("newBody");

$(document).one("click", () => {
    setTimeout(() => {
        $("body").addClass("newBody");
        $(".cover").hide();
        $(".navbar").hide();
        imgShow();
    }, 2400);
});

$(".btn").click(() =>{
    move();
    $(".btn").hide();
});

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

let clickCounter = 0;

$(".b2").click(() =>{
    clickCounter += 1;
    switch(clickCounter){
        case 1:
            $(".fullProgress").show();
            $(".warning").hide();
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
            $(".b3").show();
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

let counter1 = 0

$(".b1").click(() =>{
    counter1 +=1;
 switch(counter1){
    case 1:
        alert("No sir.");
        break;
    
    case 2:
        alert("Dude fr no.");
        break;

    case 3:
        alert("You know what? No exit privileges for you");
        $(".b1").hide();
        break;

    default:
        alert("I really can't trust you with that button");
        $(".b1").hide();
 }
});

let counter2 = 0;
$(".b3").click(()=>{
    counter2 += 1;
    switch(counter2){
        case 1:
            alert("Damn okay.");
            setTimeout(() =>{
                $(".warning").hide();
                $(".cover").show();
                $(".navbar").show();
                $("body").removeClass("newBody");
                $(".imgDiv").hide();
            }, 100);
            setTimeout(() =>{
                alert("Sike");
                $(".warning").show();
                $(".b3").hide();
                $(".cover").hide();
                $(".navbar").hide();
                $("body").addClass("newBody");
                $(".imgDiv").show();
            }, 2000);
            break;

        case 2:
            $(".b3").hide();
            alert("This is a trick question Ma'am 🧍🏻‍♀️");
            break;

        case 3:
            $(".b3").hide();
            alert("You thought.");
            break;

        default:
            alert("Bruh STAHP");
            break;
    }
});

function imgShow(){
    setTimeout(()=>{
        $(".c1").show();
        $(".c14").show();
    }, 500);
    setTimeout(()=>{
        $(".c2").show();
        $(".c13").show();
    }, 1000);
    setTimeout(()=>{
        $(".c3").show();
        $(".c12").show();
    }, 1900);
    setTimeout(()=>{
        $(".c4").show();
        $(".c11").show();
    }, 2100);
    setTimeout(()=>{
        $(".c5").show();
        $(".c10").show();
    }, 2500);
    setTimeout(()=>{
        $(".c6").show();
        $(".c9").show();
    }, 300);
    setTimeout(()=>{
        $(".c7").show();
        $(".c8").show();
    }, 2800);

    setTimeout(() =>{
        $(".warning").show();
    }, 4000);
}