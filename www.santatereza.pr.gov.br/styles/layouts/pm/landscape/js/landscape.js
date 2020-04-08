$(function(){
    


});

function fadeOutLoading(){
    $(".loading-site").css("opacity",0);
    window.setTimeout(function(){
        $(".loading-site").hide();
    },650);
}
function ajustaLayout(image){
    var width = image.width,
        height = image.height;
    
    bgSize = $(".header").css("background-size");
    if (bgSize == "100%" || bgSize == "100% auto") {
        height = ($("body").width() / image.width) * height;    
    };

    topo = height - 475;
    $(".header").height(height);
    var tamanhoBarra = height - 525;
    $(".container-barra").css("height", tamanhoBarra + "px");

    $(".container-head").css("top",topo+"px");
    /* Abrir página no Head */

    window.scrollTo(0, height-575);
    $("html").css("background-color","#fff");
    fadeOutLoading();

}
$(document).ready(function(){
    /* Ajustar padding */
     var imageSrc = $(".header").css("background-image")
                       .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
                        .split(',')[0];


    // I just broke it up on newlines for readability        

    var image = new Image();
    image.src = imageSrc;
    if (imageSrc === "none") {
        $(".header").height("530px");
        
        $(".container-head").css("top",50+"px");
        /* Abrir página no Head */

        window.scrollTo(0, 0);
        
    } else {
        if (!image.complete) {
          $(".loading-site").show();

          image.onload = function(){
            ajustaLayout(image);
          }
        } else {
            ajustaLayout(image);
        }
        window.setTimeout(function(){
            var displayLoading = $(".loading-site").css("display");
            if (displayLoading !== "none") {
                ajustaLayout(image);
            };
        },5000);
    }
    
    // window.onbeforeunload = function() {
    //     $(".loading-site").show();

    //     $(".loading-site").animate({"opacity":1},500);
    // };
    

    if (typeof(widgetDestaque) === "object") {
    	var c = 0;
    	while(c < widgetDestaque.totalImagens){
    		classe="";
    		if (c===widgetDestaque.imagemAtual) {
    			classe="selected";
    		};
    		$("#paginacao-destaque").append("<li class='"+classe+"' onclick='widgetDestaque.trocar("+c+")'></li>");
    		c++;
    	}
    	$(".conteudo-item.destaque.widget .callbacks_container").append("<div class='controladores'><div class='voltar' onclick='widgetDestaque.voltar()'></div><div class='avancar' onclick='widgetDestaque.avancar()'></div></div>")

    	widgetDestaque.naTroca = function(index){
    		$("#paginacao-destaque li").removeClass("selected");
    		$("#paginacao-destaque li:nth-child("+(index+1)+")").addClass("selected");
    	}
    };

    window.setTimeout(function(){
        var larguraMenu = 0;
        var totalItens = $(".header .container-head .cabecalho .cabecalho-cima .navigation > li").size();
        $(".header .container-head .cabecalho .cabecalho-cima .navigation > li").each(function(){
            larguraMenu += $(this).width();
        });
        if (larguraMenu < 940) {
            padding = Math.floor(((940-larguraMenu)/totalItens)/2) - 2;
            $(".header .container-head .cabecalho .cabecalho-cima .navigation > li").css({"padding-left":padding+"px","padding-right":padding+"px"});
            larguraMenu += (padding*2)*totalItens - padding;
            paddingUltimo = 940 - larguraMenu - 2*totalItens - 1;

            $(".header .container-head .cabecalho .cabecalho-cima .navigation > li:last-child").css({"padding-right":paddingUltimo+"px"});
        };
    },150);

});