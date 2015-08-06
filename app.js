$(document).ready(function() {
	// console.log("The document is ready!");

//append three additional cabins to the DOM
$('.image-container').append('<article class="home" data-price="300000"><img src="img/christmas-gingerbread-cabin.jpg"/><h4>$300,000</h4></article>');
$('.image-container').append('<article class="home" data-price="600"><img src="img/australian-cabin.jpg"/><h4>$600</h4></article>');
$('.image-container').append('<article class="home" data-price="1000000"><img src="img/airplane-cabin.jpg"/><h4>$1,000,000</h4></article>');

//changes background to a dark wood color when button is clicked
$(".dark").on("click", function(){
  $("body").css('background-image', 'url(img/dark_wood.png)');
});

//changes background to a light wood color when button is clicked
$(".light").on("click", function(){
  $("body").css('background-image', 'url(img/tileable_wood_texture.png)');
});

//changes background to a forest picture when button is clicked
$('.textures').css("width", "150px").append('<span class="forest"></span>');
$(".forest").on("click", function(){
  $("body").css({
    'background-image': 'url(img/forest.jpg)',
    'background-size': 'cover'
     });
});

//sort cabin pics and prices from low to high
$(".low").on("click", function(event){
  $('.low image-container').empty();
   event.preventDefault();
     var cabin = $('.home');
     var lowToHigh = cabin.sort(function(a,b){
     var an = parseInt(a.dataset.price);
     var bn = parseInt(b.dataset.price);
       if (an > bn){
        return 1;}
       if ( bn > an){
        return -1;}
     }).appendTo('.image-container');
   });

//sort cabin pics and prices from high to low
$(".high").on("click", function(event){
    $('.high image-container').empty();
   event.preventDefault();
     var cabin = $('.home');
     var lowToHigh = cabin.sort(function(a,b){
     var an = parseInt(a.dataset.price);
     var bn = parseInt(b.dataset.price);
    if (bn > an){
      return 1;}
    if ( an > bn){
      return -1;}
     }).appendTo('.image-container');
   });

function sortCabinPrices(num){
  switch(num){
    case 50:
    return [0, 50];


    case 100:
    return [51, 100];


    case 200:
    return [101, 200];


    case 300:
    return [201, 300];

    case 500:
    return [301, 500];

    case 1000:
    return [501, 1000];

  }
}

function getCabinPrices(){


}








});








