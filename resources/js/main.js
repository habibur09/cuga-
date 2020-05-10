$(document).ready(function(){


    //SKIKAY MENU

    $('.js--services-section').waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });


    //MIX IT UP POROTFOLIO SECTION
    var mixer = mixitup('.container')


    // SMOTH SCROLL IE/ EDGE / SAFARE 

    $("a").on('click',function(evant){
        if(this.hash !== ""){
            event.preventDefault();

            var hash = this.hash;

            $('html,body').animate({
                scroolTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    })
 
});

function openNav() {
    document.getElementById("may-nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("may-nav").style.width = "0%";
}