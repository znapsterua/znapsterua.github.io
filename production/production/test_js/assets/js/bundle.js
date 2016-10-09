function Valid(button, cover, title) {
    this.btn = button;
    this.helper();
}

Valid.prototype.helper = function() {
    this.btn.addEventListener('click', this.inputs.bind(this));
};

Valid.prototype.inputs = function() {
    this.ValidPhone();
    this.ValidMail();
    this.ValidPass();
};

Valid.prototype.ValidPhone = function() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/,
        myPhone = document.getElementById('phone').value,
        valid = re.test(myPhone),
        cover = document.querySelector('.phone'),
        title = document.querySelector('.phone_t');
    if (valid) {
        title.style.background = '#f1faf8';
        cover.style.border = 'solid 1px #15b284'
    }else {
        title.style.background = '#f8f8f8';
        cover.style.border = 'solid 1px red'
    }
};

Valid.prototype.ValidMail = function() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
        myMail = document.getElementById('email').value,
        valid = re.test(myMail),
        cover = document.querySelector('.mail'),
        title = document.querySelector('.mail_t');
    if (valid) {
        title.style.background = '#f1faf8';
        cover.style.border = 'solid 1px #15b284'
    }else {
        title.style.background = '#f8f8f8';
        cover.style.border = 'solid 1px red'
    }
};

Valid.prototype.ValidPass = function() {
    var password = document.getElementById('pass').value,
        cover = document.querySelectorAll('.pass'),
        title = document.querySelectorAll('.pass_t'),
        s_letters = "qwertyuiopasdfghjklzxcvbnm",
        b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM",
        digits = "0123456789",
        specials = "!@#$%^&*()_-+=\|/.,:;[]{}",
        is_s = false,
        is_b = false,
        is_d = false,
        is_sp = false;
    for (var i = 0; i < password.length; i++) {
      if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;
      else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
      else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
      else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
    }
    var rating = 0;
    var text = "";
    if (is_s) rating++;
    if (is_b) rating++;
    if (is_d) rating++;
    if (is_sp) rating++;
    if (password.length < 6 && rating < 3){
        title[0].style.background = '#f8f8f8';
        title[1].style.background = '#f8f8f8';
        cover[0].style.border = 'solid 1px red';
        cover[1].style.border = 'solid 1px red';
        text = "Простой пароль";
        alert(text);
    }
    else if (password.length < 6 && rating >= 3){
        this.TheSame();
    }
    else if (password.length >= 8 && rating < 3){
        this.TheSame();
    }
    else if (password.length >= 8 && rating >= 3){
        this.TheSame();
    }
    else if (password.length >= 6 && rating == 1){
        title[0].style.background = '#f8f8f8';
        title[1].style.background = '#f8f8f8';
        cover[0].style.border = 'solid 1px red';
        cover[1].style.border = 'solid 1px red';
        text = "Простой пароль";
        alert(text);
    }
    else if (password.length >= 6 && rating > 1 && rating < 4){
        this.TheSame();
    }
    else if (password.length >= 6 && rating == 4){
        this.TheSame();
    }
    return false;
};

Valid.prototype.TheSame = function() {
    var pass = document.getElementById('pass').value,
        conf = document.getElementById('conf').value;
        cover = document.querySelectorAll('.pass'),
        title = document.querySelectorAll('.pass_t');
    if(pass == conf & pass != '') {
        title[0].style.background = '#f1faf8';
        cover[0].style.border = 'solid 1px #15b284';
        title[1].style.background = '#f1faf8';
        cover[1].style.border = 'solid 1px #15b284';
    }else{
        title[0].style.background = '#f8f8f8';
        title[1].style.background = '#f8f8f8';
        cover[0].style.border = 'solid 1px red';
        cover[1].style.border = 'solid 1px red';
    }
};

new Valid(document.querySelector('.btn'));