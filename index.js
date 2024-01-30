// let clickCounter = 1;
// $(".imgDiv").hide();
// $(".warning1").hide();
// $(".warning").hide();
// $(".troubleshooter").hide();
// $(".fullProgress").hide();
// $(".pyro").hide();
// $(".b2").click(()=>{
//     $(".warning").hide();

//     switch(clickCounter){
//         case 1:
//             $(".fullProgress").show();
//             clickCounter +=1;
//             break;

//         case 2:
//             $(".warning").show();
//             $(".b2").click(()=>{
//                 $(".troubleshooter").show();
//                 setTimeout(() =>{
//                     $(".li3").hide();
//                 }, 1500);
//                 $(".warning").hide();
//                 clickCounter +=1;
//             });
//             break;
//     }
// });


// //progress bar
// var i = 0;

// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = $("#myBar");
//     var width = 1;
//     var id = setInterval(frame, 70);

//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//         setTimeout(()=>{
//             $(".fullProgress").hide();
//             $(".warning").show();
//             $(".header").text("Virus detected!");
//             $(".info").text("Run troubleshooter?");
//         }, 2000);
//       } else {
//         width++;
//         elem.css("width", width + "%");
//       }
//     }
//   }
// }

// $(".btn").click(()=>{
//     move();
//     $(".btn").hide();
// });

// //     if(clickCounter === 4){
// //         console.log(clickCounter);
// //         $(".header").text("Will you be my victim?");
// //         setTimeout(() =>{
// //             $(".header").text("Will you be my valentine?");
// //         }, 2000);
// //         $(".warningInfo").text("Pretty please :')");
// //         $(".info").text("I promise I'll be the best valentine ever!");
// //         $(".warning").show();
// //         clickCounter += 1;

// //     }
    
// //     if(clickCounter === 5){
// //         $(".b2").click(()=>{
// //             $("body").addClass("fireworks");
// //             $(".pyro").show();
// //             $(".troubleshooter").hide();
// //         })
// //     }
// // });

// // $(".b4").click(() => {
// //     console.log(clickCounter);

// //     if(clickCounter === 3){
// //         $(".troubleshooter").hide();
// //         $(".warning").show();
// //     }
// // });


// $(".b4").click(() => {
//    if(clickCounter === 3){
//             $(".troubleshooter").hide();
//             $("warningInfo").text("Sorry");
//             $(".header").text("One last thing...");
//             $(".info").text("I swear");
//             $('.warning').show();
//             $(".warning1").show();
//    }

// });

// $(".b3").click(() =>{
//     alert("There's no getting out of this 😈");
// });

// $(".b1").click(()=>{
//     setTimeout(()=>{
//         $(".warning").hide();
//     });

//     setTimeout(() =>{
//         $(".warning").show();
//         alert("Sike!")
//     }, 1500);
// });

// $(".b5").click(() =>{
//     $(".li2").hide();
// });

// $(".b7").click(()=>{
//     clickCounter = 4;
//             if(clickCounter === 4){
//                 $(".header").text("Will you be my victim?");
//                 setTimeout(() =>{
//                     $(".header").text("Will you be my valentine?");
//                 }, 2000);
//                 $(".warningInfo").text("Pretty please :')");
//                 $(".info").text("I promise I'll be the best valentine ever!");
//                 $(".warning").show();
//                 clickCounter += 1;
//             }
// });

// $(".b2").click(()=>{
//     if(clickCounter === 5){
//         $(".pyro").show();
//     }

// });

// $(document).click(() =>{
//    setInterval(() =>{
//     $("body").addClass("newBody");
//     $(".cover").hide();
//     $(".navbar").hide();
//     $(".warning").show();
//     $(".b2").click(() =>{
//         $(".warning").hide();
//     })
//    }, 2000);
// });
