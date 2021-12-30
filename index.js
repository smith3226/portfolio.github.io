$('#menu').click(function(){
  $(this).toggleClass('fa-times');
  $('header').toggleClass('toggle');
  console.log(this);
});

$(window).on('scroll load' , function(){
    $(this).removeClass('fa-times');
  $('header').removeClass('toggle');

  if($(window).scrollTop()>0){
    $('.top').show();
  }else{
    $('.top').hide();
  }
});

// smooth scrolling 

$('a[href*="#"]').on('click' , function(e){
  
  e.preventDefault();

  $('html , body').animate({
    scrollTop : $($(this).attr('href')).offset().top,
  },
  500,
  'linear'
  );
});

// toggle button 
const chk = document.getElementById('chk');

chk.addEventListener('click', function()  {
	document.body.classList.toggle('dark');
});



