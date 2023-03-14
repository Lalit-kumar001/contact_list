

var parent_divs=$('.parent-div')
console.log(parent_divs.children())


$.each( parent_divs, function() {
   $(this).click(function(){
    console.log($(this).children()[3])
    d=$(this).children()[3]
    if(d.classList.contains('details2')){
       d.classList.remove('details2')
    }
    else{
        d.classList.add('details2')
    }
   


   })
  });
$('.form-box').hide()

$('.Add-contact').click(function(){
$('.form-box').toggle();
})

