function Slider() {
        this.slider = document.getElementById('slider');
        this.childs = this.slider.children;
        this.length = this.childs.length;
        this.width = parseInt(getComputedStyle(this.childs[0]).getPropertyValue('width'));
        this.widthUl = this.width * this.length;
        this.controls = document.getElementById('controls');
        this.autoplay = undefined;
        this.init();
        this.status = 0;
    }

    Slider.prototype.init = function () {
        this.construct();
        this.controls.addEventListener('click', this.control.bind(this) );
        window.addEventListener('resize', this.reinstall.bind(this));
    };

    Slider.prototype.reinstall = function () {
        this.width = parseInt(getComputedStyle(this.childs[0]).getPropertyValue('width'));
        this.widthUl = this.width * this.length;
    };

    Slider.prototype.construct = function () {
        this.slider.style.width = this.widthUl + 'px';
    };

    Slider.prototype.control = function (event) {
        var target = event.target,
            attr = target.getAttribute('data-direction'),
            that = this;
        if ( this.status == 0) {
            if (attr && attr == 'next') {
                var firstChild = this.slider.firstElementChild,
                    step = 0;
                    cloned = firstChild.cloneNode(true);
                    this.status = 1;
                    this.slider.style.cssText += 'transition: .5s;transform:translateX(' + (-that.width) + 'px)';

                setTimeout(function () {
                    that.slider.appendChild(cloned);
                    that.slider.removeChild(firstChild);

                    that.slider.style.cssText += 'transition: 0s;transform:translateX(0px)';
                    that.status = 0;
                }, 500)       
            }else if (attr == 'prev') {
                var lastChild = this.slider.lastElementChild,
                    clonedLast = lastChild.cloneNode(true);
                this.status = 1;
                
                this.slider.style.cssText += 'transition: 0s;transform:translateX(' + (-that.width) + 'px)';
                this.slider.insertBefore(clonedLast, this.slider.firstElementChild);
                this.slider.removeChild(lastChild);
                setTimeout(function () {
                    that.slider.style.cssText += 'transition: .5s;transform:translateX(0px)';        
                }, 50);
                setTimeout(function() {that.status = 0}, 500)
            }
        }
    };

    new Slider();


function Navigation(one, two, three, pointer, menu){
        this.first = one;
        this.second = two;
        this.third = three;
        this.nav = pointer;
        this.menu = menu;
        this.click();
    }

    Navigation.prototype.click = function () { 
        this.nav.addEventListener('click', this.attr.bind(this)); 
    }; 

    Navigation.prototype.attr = function (event){
        var target = event.target, 
            attr = target.getAttribute('value');
            if(attr == "none"){
                target.setAttribute('value', 'done');
                this.move();
            }else if(attr == "done"){
                target.setAttribute('value', 'none');
                this.back();
            }else if(target == this.first || target == this.second || target == this.third){
                target = this.nav;
                attr = target.getAttribute('value');
                if(attr == "none"){
                    target.setAttribute('value', 'done');
                    this.move();
                }else if(attr == "done"){
                    target.setAttribute('value', 'none');
                    this.back();
                }
            }
    };

    Navigation.prototype.move = function(){
        $('body').append('<div id="dark"></div>');
        this.first.style.cssText += 'transform:translateY(' + (7) + 'px);';
        this.third.style.cssText += 'transform:translateY(' + (-7) + 'px);';
        this.menu.style.right = '0px';
        this.rotation();
        var a = 0;
    };

    Navigation.prototype.rotation = function(){
        var that = this;
        setTimeout(function () {
            that.second.style.cssText += 'display:none;';
            that.first.style.cssText += 'transform:translateY(' + (7) + 'px) rotate(-45deg);';
            that.third.style.cssText += 'transform:translateY(' + (-7) + 'px) rotate(45deg);';
        },300);
    };

    Navigation.prototype.back = function(){
        $('#dark').remove();
        this.first.style.cssText += 'transform:translateY(' + (7) + 'px) rotate(0deg);';
        this.third.style.cssText += 'transform:translateY(' + (-7) + 'px) rotate(0deg);';
        this.menu.style.right = '-257px';
        this.position();
    };

    Navigation.prototype.position = function(){
        var that = this;
        setTimeout(function () {
            that.second.style.cssText += 'display:block;';
            that.first.style.cssText += 'transform:translateY(' + (0) + 'px);';
            that.third.style.cssText += 'transform:translateY(' + (0) + 'px);';
        },300);
    };

    new Navigation(document.getElementById("first-line"), document.getElementById("two-line"), document.getElementById("third-line"), document.getElementById("nav"), document.getElementById("menu"));


function Fixed(header) {
    this.header = header;
    this.helper();
}

Fixed.prototype.helper = function() {
    window.addEventListener('scroll', this.move.bind(this)); 
    window.addEventListener('resize', this.move.bind(this));
};

Fixed.prototype.move = function() {
    if(window.innerWidth > '960'){
        if (window.pageYOffset > 20) {
            this.header.classList.add("fixed-nav");
            }else {
                this.header.classList.remove("fixed-nav");
            }
        }
};

new Fixed(document.getElementById("header"));

function Modals(link, modal) {
    this.link = link;
    this.modal = modal;
    this.helper();
}

Modals.prototype.helper = function() {
    for (var i = 0; i <= this.link.length-1; i++) {
        this.link[i].addEventListener('click', this.show.bind(this));
    }
};

Modals.prototype.show = function() {
    var close = document.querySelectorAll('.modal-close')
    if ($('#dark')){
        $('#dark').remove();
    }
    $('body').append('<div id="dark"></div>');
    for (var i = 0; i <= document.querySelector('.modals').children.length-1; i++) {
        document.querySelector('.modals').children[i].style.display = 'none';
    }
    this.modal.style.display = 'block'; 
    for (var i = 0; i <= close.length-1; i++) {
        close[i].addEventListener('click', this.closeF.bind(this));
    }
    document.getElementById("dark").addEventListener('click', this.closeS.bind(this));
};

Modals.prototype.closeF = function() {
    $('#dark').remove();
    this.modal.style.display = 'none';
};

Modals.prototype.closeS = function() {
    $('#dark').remove();
    this.modal.style.display = 'none';
};

new Modals(document.querySelectorAll('.modal-detail'), document.querySelector('.modals__details'));
new Modals(document.querySelectorAll('.modal-order'), document.querySelector('.modals__order'));
new Modals(document.querySelectorAll('.modal-call'), document.querySelector('.modals__callback'));
new Modals(document.querySelectorAll('.modal-video-f'), document.querySelector('.video-f'));
new Modals(document.querySelectorAll('.modal-video-s'), document.querySelector('.video-s'));

$(document).ready(function(){
            // Плавный скролл по якорям
            $('a[href^="#"]').click(function () { 
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top;
                if($.browser.safari){
                $('body').animate( { scrollTop: destination }, 1000 );
                } else {
                    $('html').animate( { scrollTop: destination }, 1000 );
                }
                return false;
           });
        });