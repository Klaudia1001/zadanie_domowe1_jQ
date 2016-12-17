$(function() {
    
    $("div").css({"height":"200px", "width": "200px", "background-color": "red"}); /*nadanie właściwości kwadratowi*/
    
    $("button").click(function() {
        $("div").animate({"height": "100px", "width": "100px", "margin-left": "100px"}, 3000, hideSquere); /*Funkcja click wywołuje animacje(zmiana wielkości i przesuniecie kwadratu)*/
        
     function hideSquere() {
         $("div").animate({"margin-left": "0px"},2000, changeColor)}; /*funkcja zmiany koloru, ktora dzieje się w funkcji click*/
     
        function changeColor() {
            $("div").css({"background-color": "blue"},5000,napis)};/*funkcja powoduje zmiane koloru*/
            
            function napis() {
                $("div").add("h2").text("Gratulacje, animacja zakończona").css({"color": "black", "font-size" : "20px"});
            })
        });
        
    });
    

                    









$(function() {
    
    $("div").css({"height":"200px", "width": "200px", "background-color": "red"}); /*nadanie właściwości kwadratowi*/
    
    $("button").click(function() {
        $("div").animate({"height": "100px", "width": "100px", "margin-left": "100px"}, 3000, hideSquere); /*Funkcja click wywołuje animacje(zmiana wielkości i przesuniecie kwadratu)*/
        
     function hideSquere() {
         $("div").animate({"margin-left": "0px"},2000, changeColor)}; /*funkcja zmiany koloru, ktora dzieje się w funkcji click*/
     
        function changeColor() {
            $("div").css({"background-color": "blue"},5000,napis)};/*funkcja powoduje zmiane koloru*/
            
            function napis() {
                $("div").add("h2").text("Gratulacje, animacja zakończona").css({"color": "black", "font-size" : "20px"});
            })
        });
        
    });
    

                    









/*$("button").click(function() {
        var square = $(".square");
    
        square.animate({"height" : "100px", "width" : "100px", "margin-left": "100px"},3000);
        square.animate({"margin-left": "0px"}, 5000, onComplete);
    
});

function onComplete () {
    $(".square").css("background-color", "blue");
    $(".napis").css("display", "inline");
    
}*/
    

    
    

            
            
    






    
    

            
            
    





