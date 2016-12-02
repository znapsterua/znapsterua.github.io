function Modal(show, hide, modal) {
            this.show = show,
            this.hide = hide;
            this.modal = modal;
            this.helper();
        }

        Modal.prototype.helper = function () {
            this.show.on('click', this.showModal.bind(this));
        }

        Modal.prototype.showModal = function () {
            this.show.css("display", "none");
            this.hide.css("display", "block");
            this.modal.fadeIn();
            $('.project__box').css('transform', 'scale(1.2, 1.2)');
            $('.show_hide').css('display', 'none');
            
            $('.hide_show').css('display', 'flex');
            setTimeout(function() {
                $('.hide_show').css('opacity', '1');
                $('.project__cross').css('transform', 'rotate(360deg)')
            }, 300);
            this.animate(0);
            this.hide.on('click', this.hideModal.bind(this));
        }

        Modal.prototype.animate = function (count) {
            var i = count,
                that = this;
            setTimeout(function() { 
                console.log(i); 
                $('.content__img')[i].style.opacity = 1; 
                $('.content__img')[i].style.transform = 'scale(1, 1)'; 
                if (i != $('.content__img').length-1) { 
                    i++; 
                    that.animate(i); 
                } else { 
                    $('.modal__more').css('width', '60%'); 
                    $('.modal__more').css('opacity', '1');
                    setTimeout(function() { 
                        console.log('hi'); 
                        $('.more__text').css('opacity', '1');
                    }, 500) 
                } 
            }, 200) 
        }

        Modal.prototype.hideModal = function () {
            $('.project__cross').css('transform', 'rotate(0deg)')
            $('.hide_show').css('opacity', '0');
            setTimeout(function() {
                $('.hide_show').css('display', 'none');
                $('.show_hide').fadeIn();
                $('.project__box').css('transform', 'scale(1, 1)');
            },500);
            for (var i = 0; i < $('.content__img').length; i++) {
                $('.content__img')[i].style.opacity = 0; 
                $('.content__img')[i].style.transform = 'scale(.7, .7)'; 
            }
            $('.modal__more').css('width', '0%'); 
            $('.modal__more').css('opacity', '0');
            $('.more__text').css('opacity', '0');
            this.show.css("display", "block");
            this.hide.css("display", "none");
            this.modal.fadeOut();
        }

        new Modal($('#show'), $('#hide'), $('.modal'));



var i = 0,
wheel = 0; 
rotate = 0; 
if (window.addEventListener) { 
if ('onwheel' in document) { 
// IE9+, FF17+, Ch31+ 
window.addEventListener("wheel", onWheel); 
} else if ('onmousewheel' in document) { 
// устаревший вариант события 
window.addEventListener("mousewheel", onWheel); 
} else { 
// Firefox < 17 
window.addEventListener("MozMousePixelScroll", onWheel); 
} 
} else { // IE8- 
window.attachEvent("onmousewheel", onWheel); 
} 

function onWheel(event){ 
var e = event;
if(e.deltaY > 0 && i === 0){
    wheel = 0;
} else if(e.deltaY < 0 && i === 8){
    wheel = 0;
}else {
    wheel += e.deltaY;
}
    console.log(wheel);
if(wheel >= 400 && i != 0){ 
i--; 
console.log(wheel); 
Ajax(i); 
}else if(i != 8 && wheel <= -400){ 
i++; 
Ajax(i); 
} 
} 
var rotate = parseInt(-45);

function Ajax(i){ 
var i = i; 
wheel = 0;
console.log(i);
if (i == 0 || i == 8) {
   $('#display').fadeOut();
} else{
    $('#display').fadeIn();
    $('#display').css('display', 'flex')
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