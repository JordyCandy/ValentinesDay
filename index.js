$(".troubleshooter").hide();
$(".warning").hide();
$(".fullProgress").hide();
$(".pyro").hide();

$(document).one("click", () => {
    setTimeout(() => {
        $("body").addClass("newBody");
        $(".warning").show();
        $(".cover").hide();
        $(".navbar").hide();
    }, 2000);
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
            break;

        case 3:
            $(".warning").show();
            $(".troubleshooter").hide();
            $(".warningInfo").text("sorry");
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
            break;

        case 5:
            $(".pyro").show();
            $("body").addClass("fireworks");
            $(".warning").hide();
            break;
    }
});

let counter1 = 0

$(".b1").click(() =>{
    counter1 +=1;
 switch(counter1){
    case 0:
        alert("No sir.");
        break;
    
    case 1:
        alert("Dude fr no.");
        break;

    case 2:
        alert("You know what? No exit privileges for you");
        $(".b1").hide();
        break;
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
            }, 100);
            setTimeout(() =>{
                alert("Sike");
                $(".warning").show();
                $(".b3").hide();
            }, 2000);
    }
});