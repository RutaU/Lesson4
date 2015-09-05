$(document).ready(function() {
    $("#button-click").on("click", function() {
        $(".button-speech").show();
        $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", {
                numResults: 3
            },
            function(colorPalettes) {
                printColors(colorPalettes);
            }
        );
        function printColors(colorPalettes) {
            for (var palette in colorPalettes) {
                console.log(colorPalettes[palette].title);
                console.log(colorPalettes[palette].colors[0]); //HEX color code
            	$("body").css("background-color", "#" + colorPalettes[palette].colors[0]);
				$("h3").css("color", "#" + colorPalettes[palette].colors[1]);	
      /*        $(".button-speech").css("background-color", "#" + colorPalettes[palette].colors[1]);
				$(".button-speech::after").css("border-color", "#" + colorPalettes[palette].colors[1] + 
				    " transparent transparent #" + colorPalettes[palette].colors[1]);*/			
			}
        }

    });
});