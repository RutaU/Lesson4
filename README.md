# Lesson4
Horizontal and vertical centering. Div and text centering (index_center.html, stylesheet_center.css)

Button with CSS sprite background (button_img.png) and speech bubble. (button_img_sprites.html, button_img_stylesheet.css, button_img_sprites.js.)

button_img_sprites.js "įdėjau"  function printColors(). Viskas aišku, tik nepavyko pakeisti pseudo elemento ".button-speech::after" spalvą. 

$(".button-speech").css("background-color", "#" + colorPalettes[palette].colors[1]);
				$(".button-speech::after").css("border-color", "#" + colorPalettes[palette].colors[1] + 
				    " transparent transparent #" + colorPalettes[palette].colors[1]);
				    
JQuery negali tiesiogiai manipuliuoti pseudo elementais(šis užrašas neteisingas), kaip tą padaryti kitais būdais?
