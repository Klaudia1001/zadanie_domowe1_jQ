
$(function() {
    
    $("div").css({"height":"200px", "width": "200px", "background-color": "red"}); /*nadanie właściwości kwadratowi*/
    
    $("button").click(function() {
        $("div").animate({"height": "100px", "width": "100px", "margin-left": "100px"}, 3000, moveSquere); /*Funkcja click wywołuje animacje(zmiana wielkości i przesuniecie kwadratu)*/
       
        
     function moveSquere() {
         $("div").animate({"margin-left": "0px"},2000, changeColor); /*funkcja powrotu kwadratu na miejsce, ktora dzieje się w funkcji click*/
     
       function changeColor() {
            $("div").css({"background-color": "blue"},5000,napis)};/*funkcja powoduje zmiane koloru, napis się nie wyświetla*/
         
         /*$("div").animate({"background-color": "blue"},5000,napis)}; /*napis się wyświetla, kolor się nie zmienia*/
            
            function napis() {
                $("div").add("h2").text("Gratulacje, animacja zakończona").css({"color": "black", "font-size" : "20px"});
            /*funkcja powoduje pojawienie się napisu wewnątrz kwadratu*/
            }
        };
        
    });
});




                    









    

    
    

            
            
    





