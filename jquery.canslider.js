(function($) {
  "use strict";
 $.fn.canSlider = function(options) {
	 
		var i;
		var imagesIndex = [];
		var loadingCounter = 0;
		var parentim=this;
		var listEnd = 0;
		
		var options = $.extend({
            directions:['center-top','left-top','right-top','center-middle','center-top','center-bottom'],
			time:1000,
			effectTime:500,
			imageLine:"order",
			safeLoop:10,
            backgroundColor: "white"
        }, options );

	
		
		
		
 
			var oldImg = 0;
			var ranimg = 0;
			var artim = 0;
			var genFark,yukFark,i,tmpx,yuk1,yuk2,yukFarkReal,genFarkReal,nextDirection,yon,yonY,timeForCSS;
			
			this.bganimation = function(){
				
				// IMAGE LINE
				if(options.imageLine == "order"){
					ranimg =  Math.floor(artim%$(parentim).find("img").length);
					oldImg = ranimg;					
				}else{
					do {
						ranimg = Math.floor((Math.random() * $(parentim).find("img").length));
					} while (ranimg == oldImg);
					oldImg = ranimg;
				}

				// $('title').html(ranimg);
					
				tmpx = 0;
				do {
					tmpx++;
					yuk1 = Math.abs($(parentim).find("img").eq(ranimg).height());
					yuk2 = Math.abs($(parentim).height());
					yukFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100 & tmpx < options.safeLoop);
					
				tmpx = 0;
				do {
					tmpx++;
					yuk1 = Math.abs($(parentim).find("img").eq(ranimg).width());
					yuk2 = Math.abs($(parentim).width());
					genFarkReal =Math.abs((yuk1-yuk2));
				} while (yuk1 < 100 || yuk2 < 100 & tmpx < options.safeLoop);
				
				
				
				nextDirection = options.directions[artim%options.directions.length];
				
				switch(nextDirection){
					case 'left-top':
						genFark = 1;
						yukFark = 1;
						break;
					case 'left-middle':
						genFark = 1;
						yukFark = yukFarkReal/2;
						break;	
					case 'left-bottom':
						genFark = 1;
						yukFark = yukFarkReal;
						break;
					case 'right-top':
						genFark = genFarkReal;
						yukFark = 1;
						break;
					case 'right-middle':
						genFark = genFarkReal;
						yukFark = yukFarkReal/2;
						break;	
					case 'right-bottom':
						genFark = genFarkReal;
						yukFark = yukFarkReal;
						break;
					case 'center-top':
						genFark = genFarkReal/2;
						yukFark = 1;
						break;
					case 'center-middle':
						genFark = genFarkReal/2;
						yukFark = yukFarkReal/2;
						break;	
					case 'center-bottom':
						genFark = genFarkReal/2;
						yukFark = yukFarkReal;
						break;						
					default:
						genFark = genFarkReal/2;
						yukFark = yukFarkReal/2;				
						break;

				}	
							
					
					yon = "-"+Math.abs(Math.ceil(genFark)).toString()+'px';
					yonY = "-"+Math.abs(Math.ceil(yukFark)).toString()+'px';

					

	
					
					$(parentim).find("img").css('-webkit-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('-moz-transform','translate('+yon+','+yonY+') rotate(0.12deg);');
					$(parentim).find("img").css('-ms-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('-o-transform','translate('+yon+','+yonY+')');
					$(parentim).find("img").css('transform','translate('+yon+','+yonY+')');
					
					
					// $(parentim).find("img").not(ranimg).css('z-index', '1000');
					// $(parentim).find("img").eq(ranimg).css('z-index', '1100');
					$(parentim).find("img").not(ranimg).fadeTo(0, 0);
					$(parentim).find("img").eq(ranimg).fadeTo(options.effectTime/2, 1);
					// $('#log').html("GOSTERILDI: "+ranimg + " ? "+options.effectTime);
					
					artim++;
					// parentim.bganimation();
				}
				
	this.starter = function(){
		var canSliderLoop = setInterval(function(){
					parentim.bganimation();
		}, (options.time));
	}	
				
				
	parentim.css('width','100%').css('height','420px').css('overflow','hidden').css('position','relative');
	parentim.find('img').css('position','absolute').css('top','0px').css('left','0px');
				
	
	// $(parentim).find("img").fadeTo(0, 0);
	// $(parentim).find("img").eq(0).fadeTo(0, 1);
	listEnd = $(parentim).find("img").length;
	
	timeForCSS = (options.time) +"ms";
	for(i=0;i<listEnd;i++){
		imagesIndex[i] = true;
		$(parentim).find("img").css('-webkit-transition','-webkit-transform '+timeForCSS+' linear');
		$(parentim).find("img").css('-moz-transition','-moz-transform '+timeForCSS+' linear');
		$(parentim).find("img").css('-ms-transition','-ms-transform '+timeForCSS+' linear');
		$(parentim).find("img").css('-o-transition','-o-transform '+timeForCSS+' linear');
		$(parentim).find("img").css('transition','transform '+timeForCSS+' linear');

	}
	
	var imageLoadingLoop = setInterval(function(){
		$.each(imagesIndex,function(i){
			if(!imagesIndex[i]){
				return;
			}
			
			if($(parentim).find("img").get(i).complete){
				loadingCounter = loadingCounter + 1;
				imagesIndex[i] = false;
			}
			
			
		});
		if(loadingCounter == $(parentim).find('img').size()){
				// alert("tüm resimler yüklendi");
				$(parentim).find("img").each(function(){
					$(this).attr("width","120%");					
				});
				clearInterval(imageLoadingLoop);
				parentim.bganimation();
				parentim.starter();
				
		}
	}, 100);
				
				
				
				
				
				
				
				
				
			}	
					
})(jQuery);
					
					
					
					

				





