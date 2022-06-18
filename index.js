$(document).ready(function(){
    $("#nav-grid").animate({width: "0px",});
    
    $("#openNav").click(function(){
        
        var w = screen.width;
        if (w <= 700) {
            $(".titleBody").hide();
        } 
        $("#nav-grid").fadeTo(10,0.01);

       
        $("#nav-grid").animate({width: "300px",}, {duration: 500, easing: "linear", 
        complete: function(){ 
            $("#display").css("background-color", "white");
            $(".secChange").css("color", "black");
            $(".priChange").css("color", "blue");
            $("#nav-close").removeClass("hidden");
            $("#nav-open").addClass("hidden");
            $("#nav-grid").fadeTo(10,1);
            $("#nav-grid").show();
            
        }
    });
    });

    $("#closeNav").click(function(){
        $("#nav-grid").fadeTo(10,0.01);
        $(".titleBody").show();
        $("#nav-grid").animate({width: "0px",}, {duration: 500, easing: "linear", 
            complete: function(){
                $("#display").css("background-color", "black");
                $(".secChange").css("color", "white");
                $(".priChange").css("color", "rgb(34, 211, 238)");
                $("#nav-grid").hide();
                $("#nav-close").addClass("hidden");
                $("#nav-open").removeClass("hidden");
            }
        });
        
    });


});