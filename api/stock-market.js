jQuery(document).ready(function () {
    $.ajax({
        url:"http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ceaaecac2d2e4b92a4e8739a2e6b8e32",
        type: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" + "<h2>" + data.articles[i].title + "</h2><span>"+ data.articles[i].description + "</span><a href=" + data.articles[i].url +"><button>Click</button></a></div>");
            }
        },
        error: function(){
            if($.ajax().url !== "http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ceaaecac2d2e4b92a4e8739a2e6b8e32"){
            alert("API key is incorrect, please check!");
        } else {
            alert("Other type of error");
        }
        }
    })
})