        function DropDown(elem, drop, arrow, title) {
            this.element = elem;
            this.dropdown = drop;
            this.arrow = arrow;
            this.cont = title;
            this.helper();
        }

        DropDown.prototype.helper = function() {
            this.element.on('click', this.move.bind(this));
        };

        DropDown.prototype.move = function(e) {
            var attr = this.arrow.attr('value');
            if(attr == 'none'){
            this.arrow.css({
                transform: 'rotate(135deg)',
                top: '15px'
            });
            this.dropdown.css({
                display: 'block',
            });
            this.arrow.attr('value', 'active');}
            else if(attr == 'active'){
                this.arrow.css({
                    transform: 'rotate(-45deg)',
                    top: '10px'
            });
            this.dropdown.css({
                display: 'none',
            });
            this.arrow.attr('value', 'none');
            }
            this.title();
        };

        DropDown.prototype.title = function() {
            this.dropdown.on('click', this.remove.bind(this));
        };

        DropDown.prototype.remove = function(e) {
            var target = e.target;
            this.cont.text(target.innerHTML);
        };

        new DropDown($('#elem_s'), $('#drop_s'), $('#elem__arrow_s'), $('#elem__title_s'));
        new DropDown($('#elem_f'), $('#drop_f'), $('#elem__arrow_f'), $('#elem__title_f'));

function CheckBtn(btns) {
    this.btns = btns;
    this.helper();
}

CheckBtn.prototype.helper = function() {
    for (var i = 0; i <= this.btns.length-1; i++) {
        this.btns[i].addEventListener('click', this.addClass.bind(this));
    }
};

CheckBtn.prototype.addClass = function(event) {
    var target = event.target;
    for (var i = 0; i <= this.btns.length-1; i++) {
        this.btns[i].classList.remove("active_btn");
    }
    target.classList.add("active_btn");
};

new CheckBtn(document.querySelectorAll('.option__btn'));


function ShowModal(btn, modal, content_main, content_modal, type_modal, active) {
    this.btn = btn;
    this.modal = modal;
    this.cont_main = content_main;
    this.cont_modal = content_modal;
    this.type_modal = type_modal;
    this.type_main = active;
    this.helper();
}

ShowModal.prototype.helper = function(){
    this.btn.addEventListener('click', this.show.bind(this));
    window.addEventListener('resize', this.position.bind(this));
};

ShowModal.prototype.show = function(event) {
    this.modal.style.display = 'block';
    this.modal.style.left = (document.body.offsetWidth - this.modal.offsetWidth)/2 + 'px';
    for (var i = 0; i<= this.cont_main.length-1; i++) {
        this.cont_modal[i].value = this.cont_main[i].value;
        if (i==5 || i==6) {
            this.cont_modal[i].value = this.cont_main[i].innerHTML;
        }
    }
    this.type_modal.value = document.querySelector('.active_btn').value;
};

ShowModal.prototype.position = function(event){
    this.modal.style.left = (document.body.offsetWidth - this.modal.offsetWidth)/2 + 'px';
};

new ShowModal(document.getElementById('modal-show'), document.getElementById('modal'), document.querySelectorAll('.contact-main'), document.querySelectorAll('.contact-modal'), document.querySelector('.type_modal'));

function HideModal(btn, modal) {
    this.btn = btn;
    this.modal = modal;
    this.helper();
}

HideModal.prototype.helper = function(){
    for (var i = 0; i <= this.btn.length-1; i++) {
        this.btn[i].addEventListener('click', this.hide.bind(this));
    }
};

HideModal.prototype.hide = function(event) {
    this.modal.style.display = 'none';
};

new HideModal(document.querySelectorAll('.hide-modal'), document.getElementById('modal'));

function PaymentSlider(forward, back, pages) {
    this.forward = forward;
    this.back = back;
    this.pages = pages;
    this.i = 0;
    this.helper();
}

PaymentSlider.prototype.helper = function() {
    for (var i = 0; i <= 1; i++) {
        this.forward[i].addEventListener('click', this.forw.bind(this));
        this.back[i].addEventListener('click', this.bck.bind(this));
    }
};

PaymentSlider.prototype.forw = function(event) {
    for (var j = 0; j <= this.pages.length-1; j++) {
        this.pages[j].style.display = 'none';
    }
    this.i++;
    this.pages[this.i].style.display = 'block';
};

PaymentSlider.prototype.bck = function(event) {
    for (var j = 0; j <= this.pages.length-1; j++) {
        this.pages[j].style.display = 'none';
    }
    this.i--;
    this.pages[this.i].style.display = 'block';
};

new PaymentSlider(document.querySelectorAll('.forward-page'), document.querySelectorAll('.back-page'), document.querySelectorAll('.page'));

function Send(btn, inputs) {
    this.btn = btn;
    this.inputs = inputs;
    this.helper();
}

Send.prototype.helper = function() {
    this.btn.addEventListener('click', this.order.bind(this));
};

Send.prototype.order = function() {
    for (var i = 0; i <= this.inputs.length-1; i++) {
        if(this.inputs[i].value == '') {
            alert('Вы не заполнили все поля');
            break;
        }if (i==this.inputs.length-1){
            alert('Ваш заказ доставлен');
        }
    }

};

new Send(document.getElementById('send'), document.querySelectorAll('.contact__input'));