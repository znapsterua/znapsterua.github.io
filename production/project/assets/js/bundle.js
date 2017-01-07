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
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "none" );
        $(".wrapper").css( "display", "block" );
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "none" );
        $(".wrapper-page").css( "display", "block" );
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
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "block" );
        $(".modal-connect").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "block" );
        $(".modal-connect").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }
    }
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
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "none" );
        $(".wrapper").css( "display", "block" );
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "none" );
        $(".wrapper-page").css( "display", "block" );
    }
    $('.modal').fadeIn();
}

function HideModal(){
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "block" );
        $(".modal-connect").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "block" );
        $(".modal-connect").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }
    }
    $('.modal').fadeOut();
}



$('#drop').hover(function(){
    $('#down').fadeIn();
    $('#down').css('display', 'flex');
    $('#list').hover(function(){
        if(!$("#list").is(":hover") && !$(".nav__list").is(":hover")){
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
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "none" );
        $(".wrapper").css( "display", "block" );
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "none" );
        $(".wrapper-page").css( "display", "block" );
    }
    $('body,html').scrollTop(0);
    $('.modal-connect').fadeIn();
}

function Hide() {
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "block" );
        $(".modal").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "block" );
        $(".modal").css( "display", "none" );
        if($(".modal-together")){
            $(".modal-together").css( "display", "none" );
        }    }
    $('.modal-connect').fadeOut();
}

function ShowSuccess() {
    $('.success-modal').fadeIn();
}

function HideSuccess() {
    $('.success-modal').fadeOut();
}

function TeamShow() {
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "none" );
        $(".wrapper").css( "display", "block" );
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "none" );
        $(".wrapper-page").css( "display", "block" );
    }
    $('body,html').scrollTop(0);
    $('.modal-together').fadeIn();
}

function TeamHide() {
    if (document.querySelector(".wrapper")) {
        $('body').children().css( "display", "block" );
        $(".modal").css( "display", "none" );
        $(".modal-connect").css( "display", "none" );
    }
    if (document.querySelector(".wrapper-page")) {
        $('body').children().css( "display", "block" );
        $(".modal").css( "display", "none" );
        $(".modal-connect").css( "display", "none" );
    }
    $('.modal-together').fadeOut();
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

function Fixed(header, drop) {
    this.header = header;
    this.drop = drop;
    this.helper();
}

Fixed.prototype.helper = function() {
    window.addEventListener('scroll', this.move.bind(this)); 
};

Fixed.prototype.move = function() {
    if (window.pageYOffset > 100) {
        this.header.addClass("menu-fixed");
        this.header.css( "top", "0px" );
        this.drop.addClass("fixed-dropdown");
        if ($('.some_class').length === 0) {
            $('.link__logo_img').css( "display", "none" );
            $('.logo__link').append( "<img src='assets/img/compressed/Canape_logo.svg' class='link__logo_img some_class'>" );
        }
    }else {
        this.header.removeClass("menu-fixed");
        this.header.css( "top", "-200px" );
        this.drop.removeClass("fixed-dropdown");
        if ($('.some_class').length !== 0) {
            $('.link__logo_img')[1].remove();
            $('.link__logo_img').css( "display", "block" );
        }
    }
};

new Fixed($(".content"), $(".item__dropdown"));