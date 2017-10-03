$(document).ready(function(){


    var introTextHight = $(".intro-text").height() + 30;
    console.log(introTextHight);

    var clientWidth = document.body.clientWidth;

    console.log(clientWidth)

    if (clientWidth < 786){
      $("#timeline").css("margin-top", introTextHight + "px")
    }


});
