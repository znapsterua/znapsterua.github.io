function SliderConstructor(elem, pag) { 
    this.element = elem; 
    this.pag = pag; 
    this.construct(); 
    this.handler(); 
    this.helper();
    this.width();
    this.current = 0; 
} 

SliderConstructor.prototype.width = function () {
    this.width = parseInt(getComputedStyle(this.element.firstElementChild).getPropertyValue('width'));
    this.element.style.width = this.width * this.list.length + 'px'; 
};

SliderConstructor.prototype.helper = function () {
    window.addEventListener('resize', this.resize.bind(this));
};

SliderConstructor.prototype.resize = function () {
    this.width = parseInt(getComputedStyle(this.element.firstElementChild).getPropertyValue('width'));
    this.element.style.width = this.width * this.list.length + 'px';
    this.element.style.cssText += 'transition: 0s; transform: translateX(' + -(this.attr * this.width) + 'px);';
};

SliderConstructor.prototype.construct = function () {    
    this.list = this.element.children;
    var pagination = ''; 
    for (var i = 0; i < this.list.length; i++) { 
        this.list[i].setAttribute('data-slide', i); 
        pagination += '<li class="pagination__circle" data-control=\"' + i + '\"></li>'; 
    } 
    this.pag.insertAdjacentHTML('afterBegin', pagination); 

    this.pag.firstElementChild.classList.add('active'); 
}; 

SliderConstructor.prototype.handler = function () { 
    this.pag.addEventListener('click', this.move.bind(this)); 
}; 

SliderConstructor.prototype.move = function (event) { 
    var target = event.target,  
        pagList = this.pag.children;
    this.attr = target.getAttribute('data-control'); 
    this.pos = this.attr * this.width;    
    if (target.hasAttribute('data-control')) { 
        if (Math.abs(this.current - this.attr) > 1) { 
            this.element.style.cssText += 'transition: 1.5s; transform: translateX(' + -this.pos + 'px);'; 
        } 
        else { 
            this.element.style.cssText += 'transition: 1s; transform: translateX(' + -this.pos + 'px);'; 
        } 

        this.current = this.attr; 

        for (var i = 0; i < pagList.length; i++) { 
            pagList[i].classList.remove('active');
        } 

        pagList[this.attr].classList.add('active'); 
    } 
};

new SliderConstructor(document.querySelector('.main__slider'), document.querySelector('.pagination'));

function Price(elem, show) {
    this.elem = elem;
    this.show = show;
    this.helper();
}

Price.prototype.helper = function (){
    this.elem.addEventListener('click', this.type.bind(this));
};

Price.prototype.type = function (event){
    var target = event.target,
        attr = target.getAttribute('value');
    if(attr == 'none') {
    this.show.style.display = 'block';
    this.elem.setAttribute('value', 'done');
    }else if(attr == 'done') {
        this.show.style.display = 'none';
        this.elem.setAttribute('value', 'none');
    }
    this.inside();
};

Price.prototype.inside = function (){
    this.show.addEventListener('click', this.text.bind(this));
};

Price.prototype.text = function (event){
    var target = event.target;
        this.elem.innerHTML = target.innerHTML;
    this.show.style.display = 'none';
    this.elem.setAttribute('value', 'none');
};

new Price(document.querySelector('.filter__item'), document.querySelector('.filter__list'));

$(function() {
        $( "#slider-range" ).slider({
          // orientation: "vertical",
          // step: 15,
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] );
            $( "#amount_1" ).val( ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
        $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

        // Изменение местоположения ползунка при вводиде данных в первый элемент input
          $("input#amount").change(function(){
            var value1=$("input#amount").val();
            var value2=$("input#amount_1").val();
              if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#amount").val(value1);
            }
            $("#slider-range").slider("values",0,value1);   
          });
              
          // Изменение местоположения ползунка при вводиде данных в второй элемент input    
          $("input#amount_1").change(function(){
            var value1=$("input#amount").val();
            var value2=$("input#amount_1").val();

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#amount_1").val(value2);
            }
            $("#slider-range").slider("values",1,value2);
          });

          // фильтрация ввода в поля
            jQuery('#amount, #amount_1').keypress(function(event){
                var key, keyChar;
                if(!event) var event = window.event;
                
                if (event.keyCode) key = event.keyCode;
                else if(event.which) key = event.which;
            
                if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
                keyChar=String.fromCharCode(key);
                
                if(!/\d/.test(keyChar)) return false;
            
            });

      });