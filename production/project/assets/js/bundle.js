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
    if(document.querySelector('.wrapper')) {
        document.querySelector('.wrapper').style.display = 'none';
    }
    if(document.querySelector('.wrapper-page')) {
        document.querySelector('.wrapper-page').style.display = 'none';
    }
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
        $('.content__img')[i].style.opacity = 1; 
        $('.content__img')[i].style.transform = 'scale(1, 1)'; 
        if (i != 5) { 
            i++; 
            that.animate(i); 
        } else { 
            $('.modal__more').css('width', '60%'); 
            $('.modal__more').css('opacity', '1');
            setTimeout(function() { 
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
    for (var i = 0; i < 6; i++) {
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

function ShowModal(){
    $('.modal').fadeIn()
}

function HideModal(){
    $('.modal').fadeOut()
}



$('#drop').hover(function(){
    $('#down').fadeIn();
    $('#down').css('display', 'flex');
    $('#list').hover(function(){
        if(!$("#list").is(":hover")){
            $('#down').fadeOut(); 
        } 
    });
});



function More(show, hide, line) {
    this.show = show;
    this.hide = hide;
    this.line = line;
    this.helper();
}

More.prototype.helper = function () {
    this.show.on('click', this.showProj.bind(this));
}

More.prototype.showProj = function () {
    this.show.css('display', 'none'); 
    this.hide.css('display', 'block');
    $('.text__project').text('К основным');
    this.line.css('display', 'none');
    for(var i = 6; i < $('.content__img').length; i++) {
        $('.content__img')[i].style.display = 'block';
    }
    this.hide.on('click', this.hideProj.bind(this));
}

More.prototype.hideProj = function () {
    this.show.css('display', 'block'); 
    this.hide.css('display', 'none');
    $('.text__project').text('Больше проектов');
    this.line.css('display', 'block');
    for(var i = 6; i < $('.content__img').length; i++) {
        $('.content__img')[i].style.display = 'none';
    }
    this.show.on('click', this.showProj.bind(this));
}

new More($('#showP'), $('#hideP'), $('.block__plus_second'));

var maspag = document.querySelectorAll(".lines__item"),
    masimg = document.querySelectorAll(".list-img");


function Slide(i) {
    var img = masimg[i];
    for (var j = 0; j < masimg.length; j++) {
        masimg[j].style.display = 'none';
        maspag[j].classList.remove("active-item");
    }
    img.style.display = 'block';
    maspag[i].classList.add("active-item");
}

var maspagS = document.querySelectorAll(".list__line_proj"),
    masimgS = document.querySelectorAll(".list__pic_proj");


function SlideS(i) {
    var img = masimgS[i];
    for (var j = 0; j < masimgS.length; j++) {
        masimgS[j].style.display = 'none';
        maspagS[j].classList.remove("active-pic");
    }
    img.style.display = 'block';
    maspagS[i].classList.add("active-pic");
}

var maspagT = document.querySelectorAll(".list__line_inter"),
    masimgT = document.querySelectorAll(".inter__img");


function SlideT(i) {
    var img = masimgT[i];
    for (var j = 0; j < masimgT.length; j++) {
        masimgT[j].style.display = 'none';
        maspagT[j].classList.remove("active-img");
    }
    img.style.display = 'block';
    maspagT[i].classList.add("active-img");
}

function Show() {
    $('body,html').scrollTop(0);
    $('.modal-connect').fadeIn();
}

function Hide() {
    $('.modal-connect').fadeOut();
}

function ShowSuccess() {
    $('.success-modal').fadeIn();
}

function HideSuccess() {
    $('.success-modal').fadeOut();
}



function Slick(){
  $('.slider__slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    variableWidth: true,
    slidesToScroll: 1
  });
};

if(document.querySelector('.slider__slick')){
    Slick();
}

