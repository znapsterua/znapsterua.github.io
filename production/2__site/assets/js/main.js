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

    function Search(item, btn) {
        this.block = item;
        this.search = btn;
        this.helper();
    }

    Search.prototype.helper = function(){
        this.search.addEventListener('click', this.opacity.bind(this)); 
    };

    Search.prototype.opacity = function(event){
        var target = event.target,
        attr = target.getAttribute('value');
        if(attr == "none"){
            target.setAttribute('value', 'done');
            this.block.style.opacity = '1';
            }else{
                target.setAttribute('value', 'none');
                this.block.style.opacity = '0';
            }
    };

     new Search(document.getElementById("search__block_mob"), document.getElementById("search_mob"));
     new Search(document.getElementById("search_box"), document.getElementById("search"));