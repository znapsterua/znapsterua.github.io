function Modal(s,o,i){this.show=s,this.hide=o,this.modal=i,this.helper()}function More(s,o,i){this.show=s,this.hide=o,this.line=i,this.helper()}function Slide(s){for(var o=masimg[s],i=0;i<masimg.length;i++)masimg[i].style.display="none",maspag[i].classList.remove("active-item");o.style.display="block",maspag[s].classList.add("active-item")}function SlideS(s){for(var o=masimgS[s],i=0;i<masimgS.length;i++)masimgS[i].style.display="none",maspagS[i].classList.remove("active-pic");o.style.display="block",maspagS[s].classList.add("active-pic")}function SlideT(s){for(var o=masimgT[s],i=0;i<masimgT.length;i++)masimgT[i].style.display="none",maspagT[i].classList.remove("active-img");o.style.display="block",maspagT[s].classList.add("active-img")}Modal.prototype.helper=function(){this.show.on("click",this.showModal.bind(this))},Modal.prototype.showModal=function(){this.show.css("display","none"),this.hide.css("display","block"),this.modal.fadeIn(),$(".project__box").css("transform","scale(1.2, 1.2)"),$(".show_hide").css("display","none"),$(".hide_show").css("display","flex"),setTimeout(function(){$(".hide_show").css("opacity","1"),$(".project__cross").css("transform","rotate(360deg)")},300),this.animate(0),this.hide.on("click",this.hideModal.bind(this))},Modal.prototype.animate=function(s){var o=s,i=this;setTimeout(function(){console.log(o),$(".content__img")[o].style.opacity=1,$(".content__img")[o].style.transform="scale(1, 1)",5!=o?(o++,i.animate(o)):($(".modal__more").css("width","60%"),$(".modal__more").css("opacity","1"),setTimeout(function(){console.log("hi"),$(".more__text").css("opacity","1")},500))},200)},Modal.prototype.hideModal=function(){$(".project__cross").css("transform","rotate(0deg)"),$(".hide_show").css("opacity","0"),setTimeout(function(){$(".hide_show").css("display","none"),$(".show_hide").fadeIn(),$(".project__box").css("transform","scale(1, 1)")},500);for(var s=0;s<6;s++)$(".content__img")[s].style.opacity=0,$(".content__img")[s].style.transform="scale(.7, .7)";$(".modal__more").css("width","0%"),$(".modal__more").css("opacity","0"),$(".more__text").css("opacity","0"),this.show.css("display","block"),this.hide.css("display","none"),this.modal.fadeOut()},new Modal($("#show"),$("#hide"),$(".modal")),$("#drop").hover(function(){$("#down").fadeIn(),$("#down").css("display","flex"),$("#list").hover(function(){$("#list").is(":hover")||$("#down").fadeOut()})}),More.prototype.helper=function(){this.show.on("click",this.showProj.bind(this))},More.prototype.showProj=function(){this.show.css("display","none"),this.hide.css("display","block"),$(".text__project").text("К основным"),this.line.css("display","none");for(var s=6;s<$(".content__img").length;s++)$(".content__img")[s].style.display="block";this.hide.on("click",this.hideProj.bind(this))},More.prototype.hideProj=function(){this.show.css("display","block"),this.hide.css("display","none"),$(".text__project").text("Больше проектов"),this.line.css("display","block");for(var s=6;s<$(".content__img").length;s++)$(".content__img")[s].style.display="none";this.show.on("click",this.showProj.bind(this))},new More($("#showP"),$("#hideP"),$(".block__plus_second"));var maspag=document.querySelectorAll(".lines__item"),masimg=document.querySelectorAll(".list-img"),maspagS=document.querySelectorAll(".list__line_proj"),masimgS=document.querySelectorAll(".list__pic_proj"),maspagT=document.querySelectorAll(".list__line_inter"),masimgT=document.querySelectorAll(".inter__img");$(document).ready(function(){$(".slider__slick").slick({arrows:!1,dots:!0,infinite:!0,speed:300,slidesToShow:2,centerMode:!0,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:720,settings:{slidesToShow:1}}]})});