function Fixed(header, bg) {
    this.header = header;
    this.bg = bg;
    this.helper();
}

Fixed.prototype.helper = function() {
    window.addEventListener('scroll', this.move.bind(this)); 
    window.addEventListener('resize', this.move.bind(this));
};

Fixed.prototype.move = function() {
    if(window.innerWidth > '1170'){
        if (window.pageYOffset > window.innerHeight) {
            this.header.classList.add("fixed-nav");
            this.header.style.top = '0px';
            this.bg.style.height = '100vh';
            }else {
                this.bg.style.height = 'calc(100vh - 106px)';
                this.header.style.top = '';
                this.header.classList.remove("fixed-nav");
            }
        }else{
             this.header.classList.remove("fixed-nav");
        }
};

new Fixed(document.getElementById("header"), document.querySelector('.main-bg'));

function Full(block, red) {
    this.block = block;
    this.red = red;
    this.helper();
}

Full.prototype.helper = function() {
    window.addEventListener('scroll', this.move.bind(this)); 
    window.addEventListener('resize', this.move.bind(this));
};

Full.prototype.move = function() {
    var pos = this.block.getBoundingClientRect(),
        top = pos.top + pageYOffset;
    if(window.innerWidth > '1170' & pos.top > -500 & pos.top < 500){
         this.red.style.width = '61%';
    }else {
        this.red.style.width = '0%';
    }
};

new Full(document.querySelector('.insta__photo'), document.querySelector('.photo__red'));

function Slider() {
        this.slider = document.getElementById('slider');
        this.childs = this.slider.children;
        this.length = this.childs.length;
        this.width = parseInt(getComputedStyle(this.childs[0]).getPropertyValue('width'));
        this.widthUl = (this.width * this.length) + 10;
        this.controls = document.getElementById('controls');
        this.init();
        this.status = 0;
    }

    Slider.prototype.init = function () {
        this.construct();
        this.slider.addEventListener('click', this.control.bind(this));
        this.controls.addEventListener('click', this.control.bind(this));
        window.addEventListener('resize', this.reinstall.bind(this));
    };

    Slider.prototype.reinstall = function () {
        this.width = parseInt(getComputedStyle(this.childs[0]).getPropertyValue('width'));
        this.widthUl = (this.width * this.length)+10;
    };

    Slider.prototype.construct = function () {
        this.slider.style.width = this.widthUl + 'px';
    };

    Slider.prototype.control = function (event) {
        var target = event.target,
            attr = target.getAttribute('data-direction'),
            slides = this.slider.children,
            childrenF = slides[2].children[0],
            childrenS = slides[0].children[0];
            if ((attr && attr == 'next') || target == childrenF || target == childrenF.children[1]) {
            var firstChild = this.slider.firstElementChild,
                cloned = firstChild.cloneNode(true);
            this.slider.appendChild(cloned);
            this.slider.removeChild(firstChild);      
            }else if ((attr && attr == 'prev') || target == childrenS || target == childrenS.children[1]) {
                var lastChild = this.slider.lastElementChild,
                    clonedLast = lastChild.cloneNode(true);
                this.slider.insertBefore(clonedLast, this.slider.firstElementChild);
                this.slider.removeChild(lastChild);
            }
    };

    new Slider();


function Form(all, span, input) {
    this.all = all;
    this.span = span;
    this.input = input;
    this.helper();
}

Form.prototype.helper = function() {
    window.addEventListener('click', this.move.bind(this)); 
};

Form.prototype.move = function(event) {
    var target = event.target;
    if(target == this.all || target == this.span || target == this.input){
        this.input.focus();
        this.span.style.fontSize = '13px';
        this.span.style.color = '#939393';
        this.span.style.top = '-17px';
    } else if(this.input.value == ''){
        this.span.style.fontSize = '18px';
        this.span.style.color = 'black';
        this.span.style.top = '3px';
    }
};

new Form(document.querySelector('.form_all_a'), document.querySelector('.form_span_a'), document.querySelector('.form_input_a'));
new Form(document.querySelector('.form_all_b'), document.querySelector('.form_span_b'), document.querySelector('.form_input_b'));
new Form(document.querySelector('.form_all_c'), document.querySelector('.form_span_c'), document.querySelector('.form_input_c'));
new Form(document.querySelector('.form_all_f'), document.querySelector('.form_span_f'), document.querySelector('.form_input_f'));
new Form(document.querySelector('.form_all_s'), document.querySelector('.form_span_s'), document.querySelector('.form_input_s'));
new Form(document.querySelector('.form_all_t'), document.querySelector('.form_span_t'), document.querySelector('.form_input_t'));

function Nav(modal, text, btn, close) {
    this.modal = modal;
    this.text = text;
    this.btn = btn;
    this.close = close;
    this.helper();
}

Nav.prototype.helper = function() {
    this.btn.addEventListener('click', this.show.bind(this));
};

Nav.prototype.show = function() {
    var i = 0,
        that = this;
    if(window.innerWidth > '750'){
        this.modal.style.display = 'block';
        setTimeout(function() {
            for (i = 0; i <= that.text.length-1; i++) {
            that.text[i].style.fontSize = '55px';
            }
        }, 50);
    }else if(window.innerWidth <= '750'){
        this.modal.style.display = 'block';
        setTimeout(function() {
            for (i = 0; i <= that.text.length-1; i++) {
            that.text[i].style.fontSize = '40px';
            }
        }, 50);
    }
    this.listener();
};

Nav.prototype.listener = function() {
    this.close.addEventListener('click', this.hide.bind(this));
    for (var i = 0; i <= this.text.length-1; i++) {
        this.text[i].addEventListener('click', this.hide.bind(this));
    }
};

Nav.prototype.hide = function() {
    var that = this;
    if(window.innerWidth > '750'){
        setTimeout(function() {
            for (i = 0; i <= that.text.length-1; i++) {
            that.text[i].style.fontSize = '40px';
            }
        }, 50);
    }else if(window.innerWidth <= '750'){
        setTimeout(function() {
            for (i = 0; i <= that.text.length-1; i++) {
            that.text[i].style.fontSize = '25px';
            }
        }, 50);
    }
    this.modal.style.display = 'none';
};

new Nav(document.querySelector('.modals__menu'), document.querySelectorAll('.sections__link'), document.querySelector('.nav__gumb'), document.querySelector('.content__close'));

function Popup(modal, btn, close) {
    this.modal = modal;
    this.btn = btn;
    this.close = close;
    this.helper();
}

Popup.prototype.helper = function() {
    this.btn.addEventListener('click', this.show.bind(this)); 
};

Popup.prototype.show = function(event) {
    document.body.scrollTop = 0;
    this.modal.style.display = 'block';
    this.listener();
};

Popup.prototype.listener = function(event) {
    this.close.addEventListener('click', this.hide.bind(this));
};

Popup.prototype.hide = function(event) {
    this.modal.style.display = 'none';
};

new Popup(document.querySelector('.modals__send'), document.querySelector('.connect__btn'), document.querySelector('.send__close'));

function Option(label) {
    this.label = label;
    this.helper();
}

Option.prototype.helper = function() { 
    for (var i = 0; i <= this.label.length-1; i++) {
        this.label[i].addEventListener('click', this.check.bind(this));
    }
};

Option.prototype.check = function(event) {
    var target = event.target;
    for (var i = 0; i <= this.label.length-1; i++) {
        this.label[i].classList.remove("active-label");
    }
    target.classList.add("active-label");
};

new Option(document.querySelectorAll('.options'));

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