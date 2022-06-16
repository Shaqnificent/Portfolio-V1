$(document).ready(function(){
    $("#nav-grid").animate({width: "0px",});
    
    $("#openNav").click(function(){
        
       
        $("#nav-grid").fadeTo(10,0.01);
        $("#nav-grid").animate({width: "300px",}, {duration: 500, easing: "linear", 
        complete: function(){ 
            
            $("#nav-close").removeClass("hidden");
            $("#nav-open").addClass("hidden");
            $("#nav-grid").fadeTo(10,1);
            $("#nav-grid").show();
        }
    });
    });

    $("#closeNav").click(function(){
        $("#nav-grid").fadeTo(10,0.01);
        $("#nav-grid").animate({width: "0px",}, {duration: 500, easing: "linear", 
            complete: function(){
                $("#nav-grid").hide();
                $("#nav-close").addClass("hidden");
                $("#nav-open").removeClass("hidden");
            }
        });
        
    });


});