$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
	 var defMh = 0, h = 0;
	 defMh = parseInt($('body').css('minHeight'));

     var MSIE = false;
     MSIE = ($.browser.msie) && ($.browser.version <= 8);
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
	//page2 slider
    if ($(".slider").length) {
        $('.slider').cycle({
            fx: 'scrollHorz',
            speed: 600,
            timeout: 0,
            next: '.next1',
            prev: '.prev1',                
            easing: 'easeInOutExpo',
            cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
        })
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        //ind = $(this).index()-1;
        ind = $(this).index()-0;
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider').cycle(ind);
    });
    $('.prev1').bind('click',function(e){
        if (ind>0){
            ind--;
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
    });
     $('.next1').bind('click',function(e){
        if (ind<(len)){
            ind++;
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
    });
    //end page2 slider

    //start fancybox
    $('.list-2 li figure span a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list-2 li figure span a').fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 500,
        'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });


    $('.list-2 li figure span a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    //end fancybox


    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        nav=$('.menu'),
        main=$('.main'),
        splash = $('#splash');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

    $('.submenu_1 a b').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'0px'}).stop().animate({width:'100%'}, 300,'easeOutCubic');			   
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'100%'}, 300,'easeOutCubic');						   
    })
    
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
              $(".hintHolder", li).stop(true).animate({top:"0px", opacity:1}, 600, 'easeOutCubic');
		   	  $('>a ',li).css({color:'#fff'});
		   	  $('.bg ',li).css({display:'block'}).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $(".hintHolder", li).stop(true).animate({top:"-40px", opacity:0}, 300, 'easeInCubic');
              $('>a ',li).css({color:'#383c3f'});
		   	  $('.bg ',li).stop().animate({opacity:0}, aniButtonDuration, 'easeOutCubic', function(){
		   	      $(this).css({display:'none'});
		   	  });
          }
		}				
    })
    
	 
	 $(window).resize(function (){
		 if (h < defMh) {h = defMh}
		 $('body').stop().animate({'minHeight':h})
         var top_value;
         /*top_value=850-h;*/
         top_value=$(window).height()-h-70;
         if(top_value<10) {top_value=10}
         main.stop(true,false).animate({marginTop:top_value+'px'}, 650,'easeOutCubic');
		});
		
		
     content.tabs({
		preFu:function(_)
        {
            _.li.css({display:'none', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 550){
                    $(this).height(550);
                } else {
                    $(this).height($(this).height()+10)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){     aniDelay = 250; } else {
            if(_.n == -1 && _.pren == -1){         aniDelay = 250;
            } else { aniDelay = 450;     } }
            
            var posArr = [[0,0,10], [0,80,0], [160,80,0], [320,80,0], [320,160,0]]
            if(_.n == -1){

                 $("#menu > li").each( function(index){
                    _delay = 500-(index*100)+200;
                    $(this).css({left:"-1700px", top: posArr[index][1]+"px", 'z-index':posArr[index][2]}).stop().delay(_delay).animate({left:posArr[index][0]+"px"}, 900, 'easeOutCubic');
                 });

                content.stop().delay(500).animate({height:'10px'}, 650,'easeOutCubic');
                    h=10;
					 $(window).trigger('resize');
            } else {

                
                $("#menu > li").each( function(index){
                    _delay = 200-(index*50);
                    
                    if(index==0) {
                        $(this).stop().delay(_delay).animate({left:"-263px", top: "33px"}, 900, 'easeInOutCubic');
                    } else {
                        $(this).stop().delay(_delay).animate({left:"-1700px", top: posArr[index][1]+"px"}, 900, 'easeInOutCubic');
                    }

                 });

                content.stop().delay(aniDelay).animate({height:_.curr.height()+10}, 650,'easeOutCubic');
            }
            
        	if(_.curr){
        	   h = parseInt( _.curr.outerHeight(true)+220);
				$(window).trigger('resize');
				_.curr
					.stop()
					.delay(aniDelay).css({display:'block', top:content.height()}).animate({top:'0px'}, 650,'easeOutCubic');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()}, 350,'easeInSine', function(){
    				     $(this).css({display:'none'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
    
 
})