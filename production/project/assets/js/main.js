
var i = 0,
wheel = 0, 
rotate = 0,
stop = true;
Go();
$('#display').css('opacity', '1');
$('#display').fadeOut(0);


function Go() {
    $('.wrapper').one('wheel', onWheel)
}



function onWheel(event){ 


var e = event;

console.log(e);


if(e){
   if(e.originalEvent.wheelDelta > 0 && i === 0){
        wheel = 0;
        Go();
    } else if(e.originalEvent.wheelDelta < 0 && i === 8){
        wheel = 0;
        Go();
    }else {
        wheel += e.originalEvent.wheelDelta;
    }
        console.log(wheel);
    if(wheel <= -120 && i != 8){ 
    i++; 
    
    Ajax(i); 
    }else if(i != 0 && wheel >= 120){ 
    i--; 
    Ajax(i); 
    }  
    

}

    
} 
var rotate = parseInt(-45);

function Ajax(i){ 


i = i; 
wheel = 0;
console.log(i);
if (i == 0 || i == 8) {
   $('#display').fadeOut();
} else{
    
    $('#display').fadeIn();
    $('#display').css('display', 'flex');
    
    
}
function getRandomInt(min, max) { 
return Math.floor(Math.random() * (max - min)) + min; 
} 
$('#wrap').empty(); 
$('#wrap').css('display', 'none'); // по окончанию загрузки страницы 
// $('#example-1').click(function(){ // вешаем на клик по элементу с id = example-1 
// $(document).ready(function(){ 
// по окончанию загрузки страницы 
$.ajax({ 
url: 'page'+ i +'.html', // указываем URL и 
cache: false, 
beforeSend: function(){ 
rotate += 360; 
$('#line').css('transform', 'rotate('+ rotate +'deg)'); 
$('#line').css('background', 'rgb('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) +')'); 
setTimeout(Go, 500);

}, 
success: function(html) { 
$('#wrap').html(html).fadeIn(500); 
} 
}); 
// }); 
// }); 
};








function AjaxE(i){ 


this.i = i; 
wheel = 0;
console.log(i);
if (i == 0 || i == 8) {
   $('#display').fadeOut();
} else{
    
    $('#display').fadeIn();
    $('#display').css('display', 'flex');
    
    
}
function getRandomInt(min, max) { 
return Math.floor(Math.random() * (max - min)) + min; 
} 
$('#wrap').empty(); 
$('#wrap').css('display', 'none'); // по окончанию загрузки страницы 
// $('#example-1').click(function(){ // вешаем на клик по элементу с id = example-1 
// $(document).ready(function(){ 
// по окончанию загрузки страницы 
$.ajax({ 
url: 'page'+ i +'.html', // указываем URL и 
cache: false, 
beforeSend: function(){ 
rotate += 360; 
$('#line').css('transform', 'rotate('+ rotate +'deg)'); 
$('#line').css('background', 'rgb('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) +')'); 

}, 
success: function(html) { 
$('#wrap').html(html).fadeIn(500); 
} 
}); 
// }); 
// }); 
};