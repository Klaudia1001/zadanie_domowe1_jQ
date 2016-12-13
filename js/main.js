$("button").click(function() {
        var square = $(".square");
    
        square.animate({"height" : "100px", "width" : "100px", "margin-left": "100px"},3000);
        square.animate({"margin-left": "0px"}, 5000, onComplete);
    
});

function onComplete () {
    $(".square").css("background-color", "blue");
    $(".napis").css("display", "inline");
    
}
    

    
    

            
            
    





