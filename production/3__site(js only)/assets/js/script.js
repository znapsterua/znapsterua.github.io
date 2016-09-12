function Weather(title, links) {
    this.title = title;
    this.links = links;
    this.getJson('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kharkiv%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', this.succes);
    this.option();
}

Weather.prototype.option = function () {
   for(var i = 0; i <= this.links.length-1; i++) {
        this.links[i].addEventListener('click', this.city.bind(this));
    }
};

Weather.prototype.city = function (event) {
    var target = event.target;
    this.title.innerHTML = target.innerHTML;

   if(this.title.innerHTML == 'Kharkiv'){
        this.getJson('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kharkiv%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', this.succes);
   }if(this.title.innerHTML == 'Lviv'){
        this.getJson('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22lviv%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', this.succes);
   }if(this.title.innerHTML == 'Kyiv'){
        this.getJson('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kyiv%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', this.succes);
   }
};

Weather.prototype.days = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
};

Weather.prototype.description = {
    0: 'Tornado',
    1: 'Tropical storm',
    2: 'Hurricane',
    3: 'Severe thunderstorms',
    4: 'Thunderstorms',
    5: 'Mixed rain and snow',
    6: 'Mixed rain and sleet',
    7: 'Mixed snow and sleet',
    8: 'Freezing drizzle',
    9: 'Drizzle',
    10: 'Freezing rain',
    11: 'Showers',
    12: 'Showers',
    13: 'Snow flurries',
    14: 'Light snow showers',
    15: 'Blowing snow',
    16: 'Snow',
    17: 'Hail',
    18: 'Sleet',
    19: 'Dust',
    20: 'Foggy',
    21: 'Haze',
    22: 'Smoky',
    23: 'Blustery',
    24: 'Windy',
    25: 'Cold',
    26: 'Cloudy',
    27: 'Mostly cloudy (night)',
    28: 'Mostly cloudy (day)',
    29: 'Partly cloudy (night)',
    30: 'Partly cloudy (day)',
    31: 'Clear (night)',
    32: 'Sunny',
    33: 'Fair (night)',
    34: 'Fair (day)',
    35: 'Mixed rain and hail',
    36: 'Hot',
    37: 'Isolated thunderstorms',
    38: 'Scattered thunderstorms',
    39: 'Scattered thunderstorms',
    40: 'Scattered showers',
    41: 'Heavy snow',
    42: 'Scattered snow showers',
    43: 'Heavy snow',
    44: 'Partly cloudy',
    45: 'Thundershowers',
    46: 'Snow showers',
    47: 'Isolated thundershowers'
};

Weather.prototype.getJson = function (url, succes) {
    var xhr = new XMLHttpRequest(),
    that = this;
    xhr.open('get', url, true);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            succes(xhr.response, that);
        }
    };
    xhr.send();
    
};

Weather.prototype.findMethod = function (object, string, callback) {
    for (var key in object) {
        if (key == string) {
            callback(object[key]);
        } else if (typeof object[key] == 'object') {
            this.findMethod(object[key], string, callback);
        }
    }
};

Weather.prototype.succes = function (data, that) {
    var objectParsed = JSON.parse(data);
    that.findMethod(objectParsed, 'item', that.callbackObj.bind(that));
};

Weather.prototype.callbackObj = function (object) {
    var wrapper = document.querySelector('.weatherWrapper'),
        templateDay = '',
        template = '';

    for ( var i = 1; i <= 4; i++){
        templateDay += '<li class="weather__item">'+
                            '<p class="item__day">'+ this.days[object.forecast[i].day] +'</p>'+
                            '<div class="mob item__img_' + object.forecast[i].code + '"></div>'+
                            '<p class="item__max">' + object.forecast[i].high + '°</p>'+
                            '<p class="item__min">' + object.forecast[i].low + '°</p>'+
                        '</li>';
    }

    template = '<div class="block__weather">'+
                    '<div class="weather__now">'+
                        '<div class="mob now__img_'+ object.condition.code +'"></div>'+
                        '<p class="now__dscr">'+ this.description[object.condition.code] +'</p>'+
                    '</div>'+
                    '<h2 class="weather__num">' + object.condition.temp + '°<span class="num__un"> F</span></h2>'+
                    '<div class="weather__minmax">'+
                        '<div class="minmax__arrow_up"></div>'+
                        '<p class="minmax__num">' + object.forecast[0].high + '°</p>'+
                        '<div class="minmax__arrow_down"></div>'+
                        '<p class="minmax__num">' + object.forecast[0].low + '°</p>'+
                    '</div>'+
                '</div>'+
                '<div class="block__week">'+
                    '<ul class="week__weather">' + templateDay + '</ul>'+
                '</div>';

    wrapper.innerHTML = "";
    wrapper.insertAdjacentHTML('afterBegin', template);
};

new Weather(document.querySelector('h1'), document.querySelectorAll('.items__link'));


function Modal(btn, item, links) {
    this.btn = btn;
    this.item = item;
    this.links = links;
    this.helperBtn();
}

Modal.prototype.helperBtn = function () {
    this.btn.addEventListener('click', this.show.bind(this));
};

Modal.prototype.show = function () {
    this.item.style.display = 'block';
    this.helperLinks();
};

Modal.prototype.helperLinks = function () {
    for (var i = 0; i <= this.links.length-1; i++) {
        this.links[i].addEventListener('click', this.fadeout.bind(this));
    }
};

Modal.prototype.fadeout = function () {
    this.item.style.display = 'none';
};

new Modal(document.querySelector('.title__loc'), document.querySelector('.modal'), document.querySelectorAll('.items__link'));

