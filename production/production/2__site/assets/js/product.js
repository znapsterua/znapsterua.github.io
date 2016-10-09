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

new Img(document.querySelectorAll('.left__items'), document.querySelector('.img__right'));