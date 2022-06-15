$(document).ready(function(){
    
    
    $("#openNav").click(function(){
        
        $("#nav-grid").show();
        $("#nav-grid").fadeTo(10,1);
        $("#nav-grid").animate({width: "300px",}, {duration: 500, easing: "linear", 
        complete: function(){ 
            
            $("#nav-close").removeClass("hidden");
            $("#nav-open").addClass("hidden");
            
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