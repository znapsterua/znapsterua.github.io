var i = 0,
    wheel = 0, 
    rotate = 0,
    stop = true;

if (document.documentElement.clientWidth >= 1100) {
    Go();
}

if(document.querySelector('#display')){
    $('#display').css('opacity', '1');
    $('#display').fadeOut(0);
}



function Go() {
    $('.wrapper').one('wheel', onWheel)
}



function onWheel(event){ 


var e = event;


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
    if(wheel <= -1 && i != 8){ 
        i++; 
        Ajax(i); 
    }else if(i != 0 && wheel >= 1){ 
        i--; 
        Ajax(i); 
    }  
}  
} 
var rotate = parseInt(-45);

function Ajax(i, type = true){ 
    this.type = type;
    this.i = i; 
    wheel = 0;
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
    $('#wrap').css('display', 'none'); 

    $.ajax({ 
        url: 'ajax/page'+ i +'.html', 
        cache: false, 
        beforeSend: function(){ 
            rotate += 360; 
            $('#line').css('transform', 'rotate('+ rotate +'deg)'); 
            $('#line').css('background', 'rgb('+ getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) +')'); 
            if(type === true){
                setTimeout(Go, 1000);
            }
        }, 

        success: function(html) { 
            $('#wrap').html(html).fadeIn(500); 
        } 
    }); 
};









