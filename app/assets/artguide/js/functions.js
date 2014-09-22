/* -------------------------------------------------- *
 * Project scripts
 * -------------------------------------------------- *
 * Author: Renat Ganbarov
 * URL: http://www.icoder.by/
 * Copyright: 2014 Renat Ganbarov
** -------------------------------------------------- */

$(function() {
	var clickEvent = (('ontouchstart' in window))? 'touchstart': 'click'; //'touchstart': 'click';

	$("input[placeholder]").placeholder();

	$('input').iCheck({
		checkboxClass: 'icheckbox_checkbox',
		radioClass: 'icheckbox_radio'
	});

	$(document)
	
	.on(clickEvent,".accordion .accordion-item-header", function(){
		var $this_container = $(this).parent();
		var $accordion_container = $(this).closest(".accordion");
		if($this_container.hasClass("item-active")){
			$this_container.removeClass("item-active");
			$this_container.find(".accordion-item-content").slideUp(300);
			return false;
		}
		$accordion_container.find(".item-active").removeClass("item-active");
		$this_container.addClass("item-active");
		$accordion_container.find(".accordion-item-content").slideUp(300);
		$this_container.find(".accordion-item-content").slideDown(300);
	})

	.on(clickEvent,"#tool-search", function(){
		$("#nav-site").hide();
		$("#tool-menu, #mobile-menu").removeClass("tool-selected");
		$("#tool-location").removeClass("tool-selected");
		$("#tool-locations-list").hide();
		
		
		$("#site-search").slideToggle(200).find("input:first").focus();	
		$(this).toggleClass("tool-selected");
		$("#up-down .header-up-down").toggleClass("fixed-large");
	})
	
	.on(clickEvent,"#tool-menu, #mobile-menu", function(){
		$("#tool-search").removeClass("tool-selected");
		$("#site-search").slideUp(200);
		$("#up-down .header-up-down").removeClass("fixed-large");
		
		$("#tool-location").removeClass("tool-selected");
		$("#tool-locations-list").hide();
		
		
		$("#nav-site").toggle();
		$("#tool-menu, #mobile-menu").toggleClass("tool-selected");
	})
	
	.on(clickEvent,"#tool-location", function(){
		$("#nav-site").hide();
		$("#tool-menu, #mobile-menu").removeClass("tool-selected");
		$("#up-down .header-up-down").removeClass("fixed-large");
		
		$("#tool-search").removeClass("tool-selected");
		$("#site-search").slideUp(200);
		
	
		$(this).toggleClass("tool-selected");
		$("#tool-locations-list").toggle();

	})
	
	
	
	
	.on(clickEvent,".btn-show-gallery", function(){
		var header_height = $(".header-article-event").height();
		$(".header-article-event").data("height", header_height );
		var height = $("#article-event-gallery").height();
		$(".header-article-event").animate({"height":height}, 400)
		$("#article-event-gallery").hide().css({'z-index':'1'})
		$("#article-event-gallery").fadeIn(400);
	})

	.on(clickEvent,"#article-event-gallery .btn-close", function(){
		var header_height = $(".header-article-event").data("height");
		$(".header-article-event").animate({"height":header_height}, 400)
		$("#article-event-gallery").fadeOut(400, function(){
			$(".header-article-event").css({"height":"auto"});
		})
	})

	.on(clickEvent,"#show-address-map", function(){
		$(".header-article-address").toggleClass("show-map");
		if($(".header-article-address").hasClass("show-map"))
			$(this).text("Скрыть карту");
		else
			$(this).text("Показать карту");
	})

	.on(clickEvent,".g-tabs ul.tabs li", function(){
		var container = $(this).closest(".g-tabs"),
			tab = $(this).data("tab");
		$(this).parent().find(".sel").removeClass("sel");
		$(this).addClass("sel");
		container.find(".tabs-container .tab-content").hide()
		container.find(".tabs-container .tab-content[data-tab='" + tab + "']").show();
	})
	
	.on(clickEvent,".iselect .iselect-header", function(){
		var container = $(this).closest(".iselect"),
			input = container.find("input.iselect-value");
		if(!container.hasClass("iselect-open"))
			$(".iselect").removeClass("iselect-open");
		container.toggleClass("iselect-open");
	})

	.on(clickEvent,".iselect li[data-option]", function(){
		var container = $(this).closest(".iselect"),
			value = $(this).data("option"),
			input = container.find("input.iselect-value"),
			header = container.find(".iselect-header"),
			options = container.find(".iselect-options-list");

		input.val(value);
		header.text(value);
		container.removeClass("iselect-open");
	})
	
	.on(clickEvent,"#addresses-roll", function(){
		$("#addresses").toggleClass("addresses-short");
	})

	.on(clickEvent, function(e){
		if(!$(e.target).closest(".iselect").length)
			$(".iselect").removeClass("iselect-open")
	})
	
	
	$("li.article-large-item").hover(function(){
		$(this).find(".article-review").slideDown(200)
	}, function(){
		$(this).find(".article-review").slideUp(200)
	
	})
	
	

	$(".iselect").each(function(){
		var input = $(this).find("input.iselect-value"),
			value = input.val(),
			header = $(this).find(".iselect-header"),
			options = $(this).find(".iselect-options-list"),
			current_option = options.find("li[data-option='"+value+"']");
			// console.log(options)
		if(current_option.length > 0)
			header.text(value);
		else{
			var first_option = options.find("li:first"),
				first_value = first_option.data("option");
			input.val(first_value);
			header.text(first_value);
		}

		if(options.height() + $(this).offset().top + $(this).outerHeight() > $(document.body).height()){
			$(this).addClass("iselect-bottom");
		}
	})
	


	$(".article-figure").each(function(){
		var width = $(this).find(".figure-image img").width();
		$(this).width(width);
	})
	
	
	if($(window).width() < 1261){
		$(".articles-aside-list").each(function(){
			var li = $(this).find("li[class!='banner']");
			var li_width = li.outerWidth();
			var li_count = li.length;
			var ul_width = (li_width + 20) * li_count - 20;
			$(this).width(ul_width);
		})
		$("aside.aside-right .tab-content").mousewheel(function(event, delta) {
		    this.scrollLeft -= (delta * 30);
		    event.preventDefault();
		});
	}
	
	
	
	


    var $fotoramaDiv = $('.fotorama').fotorama();
    if($fotoramaDiv.length > 0){
	    var fotorama = $fotoramaDiv.data('fotorama');

	    $('#fotorama-caption').text(fotorama.activeFrame.caption);
	    $('#fotorama-counter').text((fotorama.activeIndex + 1) + ' / ' + fotorama.size);

	    if ($('.fotorama_custom__arr').length > 0)
	        $('.fotorama_custom__arr').remove();

	    $("<div class='fotorama_custom__arr fotorama_custom__arr--prev'></div>").appendTo(".fotorama-container");
	    $("<div class='fotorama_custom__arr fotorama_custom__arr--next'></div>").appendTo(".fotorama-container");

	    $('.fotorama_custom__arr--prev').click(function () {
	        fotorama.show('<');
	    });

	    $('.fotorama_custom__arr--next').click(function () {
	        fotorama.show('>');
	    });

		$('.fotorama').on('fotorama:show', function (e, fotorama, direct) {
			$('#fotorama-caption').text(fotorama.activeFrame.caption);
			$('#fotorama-counter').text((fotorama.activeIndex + 1) + ' / ' + fotorama.size);
		})
	}
	
	$("#article-event-gallery").hide().css({'z-index':'1'})

	PageScroll();
	Init();
	LargeListScroll();
	UpDown();
	Pagination();
});


$(window).on("scroll resize", function(){
	PageScroll();
});

$(window).on("resize", function(){
	Init();
	Pagination();
})



function Init(){
    var height = $(window).outerHeight(),
	    banner_height = _getTopBannerHeight();
	    	
    	$("#aside-right").height(height - banner_height);

}

function PageScroll(){
    var window_scroll_top = $(window).scrollTop(),
		height = $(window).outerHeight(),
		banner_height = _getTopBannerHeight(),
		tabs_header = $("#articles-aside-tabs ul.tabs").outerHeight(),
		aside_padding = parseFloat($(".aside-container").css("padding-top"));
		
    if (window_scroll_top < banner_height){
    	$("#aside-right").removeClass("fixed");
    	$("#aside-right").height(height - banner_height + window_scroll_top);
    	$(".header-page").height("auto");
    	
    	$("#articles-aside-tabs .tabs-container").height(height - banner_height + window_scroll_top - tabs_header - aside_padding);
        	
        $(".header-page").removeClass("fixed");
        $(".section-content").removeClass("header-fixed");
        $(".section-content").removeClass("header-fixed-large");

    }else{

		$(".header-page").addClass("fixed");
		if($("#site-search").is(":visible"))
			$(".section-content").addClass("header-fixed-large");
		else
			$(".section-content").addClass("header-fixed");

		
			$("#aside-right").height(height);
			$("#aside-right").addClass("fixed");
			$("#articles-aside-tabs .tabs-container").height(height - tabs_header - aside_padding);

    }
}


function UpDown(){
	if(!$("#up-down").length) return false;
	var element = $("#up-down"),
		element_offset_top = element.offset().top,
		element_offset_bottom = element.offset().top + element.outerHeight(),
		element_header = element.find(".header-up-down");

	$(window).on("scroll resize", function(){
		element_offset_top = element.offset().top;
		element_offset_bottom = element.offset().top + element.outerHeight();
		var window_scroll_top = $(window).scrollTop();
		
		if(window_scroll_top > element_offset_top - $(".header-page").outerHeight()){
			element.addClass("header-fixed");
			element_header.addClass("fixed");
			
			if(window_scroll_top > element_offset_bottom - $(".header-page").outerHeight())
				element_header.addClass("fixed-bottom");
			else
				element_header.removeClass("fixed-bottom");
		}
		else{
			element.removeClass("header-fixed");
			element_header.removeClass("fixed");
		}
	
	});
}





function LargeListScroll(){
	var height = $(window).height(),
		banner_height = _getTopBannerHeight();
		header_height = $(".header-page").outerHeight(),
		element = $("#large-list");
		
	if(element.length < 1) return false;
	
	var element_top = element.offset().top,
		element_bottom = element.height() + element_top,
		content_height = $(".section-content").outerHeight(),
		list_height = $("#large-list").outerHeight();

		
	var factor = ( (list_height + header_height) - height ) / ( content_height - height);

	$(window).on("scroll resize", function(){
		var window_scroll_top = $(window).scrollTop(),
			scrollBottom = window_scroll_top + height;
	        
		if(window_scroll_top > banner_height){
			element.addClass("fixed")
			element.css({
				"top": header_height - ( window_scroll_top - banner_height ) * factor,
			})
		}
		else
			element.removeClass("fixed")
 
		if( $(document.body).height() < scrollBottom + banner_height)
			element.addClass("fixed-botom");
		else
			element.removeClass("fixed-botom");

	});


}

function _getTopBannerHeight(){
	var banner = $(".b-top-banner"),
		banner_height = 0;
	if(banner.length) banner_height = banner.outerHeight();
	return banner_height;
}


function Pagination(){
	var container = $(".b-pagination");
	var count = container.find("li").length - 2;
	var li_widht = (container.width() - count * 61 ) / 2
	$(".b-pagination li.prev").width( li_widht + 1);
	$(".b-pagination li.next").width( li_widht );
}



ymaps.ready(map_init);
var myMap,
    myPlacemark;

function map_init(){
	if(!$("#event-map").length) return false;
	var place = [55.737483,37.606851];
    myMap = new ymaps.Map("event-map", {
        center: [place[0]-0.002,place[1]+0.007],
        zoom: 15,
        controls: []
    });
	myMap.controls.add('zoomControl', { top: 10, left: 5 })
	
    myPlacemark = new ymaps.Placemark(place, {	
    	 balloonContent: '<li class="article-item">\
    	 	<div class="article-info">\
    	 		<a href="#" class="g-tag link-address">Музеи</a>\
    	 		<time class="g-time">29.05</time>\
    	 	</div>\
    	 	<a href="#">\
    	 		<figure class="article-image">\
    	 			<img width="110" height="110" alt="" src="img/pic-2.jpg">\
    	 		</figure>\
    	 		<h4 class="article-title">Государственная Третьяковская галерея наКрымском Валу</h4>\
    	 	</a>\
    	 	<div class="g-location">\
				<a href="#">Москва , Лаврушинский пер., 10</a>\
			</div>\
    	 </li>'  	 				
    }, {
	   // hideIconOnBalloonOpen: false,
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [24, 36],
        iconImageOffset: [-12, -36],
        iconShape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 20
        }
    });
	
	
    myMap.geoObjects.add(myPlacemark);


}


