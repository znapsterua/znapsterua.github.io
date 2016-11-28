function Comment(form, text, body) {
    this.form = form;
    this.text = text;
    this.body = body;
    this.months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    this.today = new Date;
    this.day = this.today.getDate();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.date = [this.day, this.months[this.month], this.year].join(" ");
    this.helper();
}

Comment.prototype.helper = function() {
    var that = this;
    this.form.addEventListener("submit", this.type.bind(this));
    this.text.addEventListener("keypress", function(e) {
        if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey){
            that.type();
        }
    });
}

Comment.prototype.type = function(e) {
    this.body.innerHTML += '<article class="body__comment"><div class="comment__info"><h3 class="info__name">Лилия Семёновна</h3><span class="info__date">' + this.date + '</span></div><p class="comment__text">' + this.text.value + "</p></article>";
    this.text.value = "";
    e.preventDefault();
}

new Comment(document.querySelector(".form__comment"), document.querySelector(".comment__textarea"), document.querySelector(".main__body"));