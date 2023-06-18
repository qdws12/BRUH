var tball = $('.tab-button');
var tcall = $('.tab-content');

// 반복문 변수 let
// for(let i = 0; i< tball.length; i++){
//   tball.eq(i).on('click',function(){
//     탭열기(i);
//   })
// }

$('.list').click(function(e){
  if(e.target == tball[e.target.dataset.id]){
    탭열기(e.target.dataset.id);
  }
  if(e.target == tball[e.target.dataset.id]){
    탭열기(e.target.dataset.id);
  }

  if(e.target == tball[e.target.dataset.id]){
    탭열기(e.target.dataset.id);
  }


})


function 탭열기(변수){
  tball.removeClass('orange');
  tball.eq(변수).addClass('orange');
  tcall.removeClass('show');
  tcall.eq(변수).addClass('show');  
}