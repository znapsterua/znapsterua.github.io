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
            items = document.querySelectorAll('.slide__inside');
        if ( this.status == 0) {
            if (attr && attr == 'next') {
                var firstChild = this.slider.firstElementChild,
                    step = 0;
                    cloned = firstChild.cloneNode(true);
                    items[1].classList.remove("active_slide");
                    items[2].classList.add("active_slide");
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
                    items[1].classList.remove("active_slide");
                    items[0].classList.add("active_slide");
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

function Img(items, elem) {
    this.items = items;
    this.elem = elem;
    this.helper();
    this.elem.style.background = getComputedStyle(this.items[0]).getPropertyValue('background-color');
}

Img.prototype.helper = function(){
    for (var i = 0; i <= this.items.length-1; i++) {
        this.items[i].addEventListener('click', this.change.bind(this));
    }
};

Img.prototype.change = function(event){
    var target = event.target,
        bg = getComputedStyle(target).getPropertyValue('background-color');
    this.elem.style.background = bg;
};

new Img(document.querySelectorAll('.left__img'), document.querySelector('.left__img_main'));