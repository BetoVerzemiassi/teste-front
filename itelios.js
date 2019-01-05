$(document).ready(function () {
    var products = "";
    var url = "https://api.myjson.com/bins/c2of4";

    $.ajax({
        url: url,    
        dataType: "json",
        success: function (response) {
            if(response[0].erro) {
                $("h2").html(response[0].erro);
            }else {
                for(var i = 0; i < response[0].data.recommendation.length; i++) {
                    products += "<ul class='products'>";
                    products += "<li class='list'><div><img class='image' src=" + response[0].data.recommendation[i].imageName + "></div></li>";
                    products += "<li class='list'><p class='titulo'>" + response[0].data.recommendation[i].name + "</p></li>";
                    products += "<li class='list'><p class='price'>" + response[0].data.recommendation[i].price + "</p></li>";
                    products += "<li class='list'><p class='paymentConditions'>" + response[0].data.recommendation[i].productInfo.paymentConditions + "</p></li>";
                    products += "<button class='goToCart'>adicionar ao carrinho</button>"    
                    products += "</ul>";               
                }
                
                $('.myproducts').html(products);
                $('.myproducts').bxSlider({
                    mode: 'horizontal',
                    minSlides: 4,
                    maxSlides: 4,
                    responsive: true,
                    auto: true
                });
            }
        }
    });
});