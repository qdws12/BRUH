var tball = $('.tab-button');
var tcall = $('.tab-content');

// 반복문 변수 let
for(let i = 0; i< tball.length; i++){
  tball.eq(i).on('click',function(){
    tball.removeClass('orange');
    tball.eq(i).addClass('orange');
    tcall.removeClass('show');
    tcall.eq(i).addClass('show');  
  })
}


// tball.eq(0).on('click',function(){
//     tball.removeClass('orange');
//     tball.eq(0).addClass('orange');
//     tcall.removeClass('show');
//     tcall.eq(0).addClass('show');  
// })

// tball.eq(1).on('click',function(){
//   if(tball.eq(1)){
//     tball.removeClass('orange');
//     tball.eq(1).addClass('orange');
//     tcall.removeClass('show');
//     tcall.eq(1).addClass('show');
//   }
// })

// tball.eq(2).on('click',function(){
//   if(tball.eq(2)){
//     tball.removeClass('orange');
//     tball.eq(2).addClass('orange');
//     tcall.removeClass('show');
//     tcall.eq(2).addClass('show');
//   }
// })