/*侧边栏显示、切换等*/
function showCatelog(){
	$('#markdown-toc').hide();
	if (typeof $('#markdown-toc').html() === 'undefined') {
		$('.a_catelog').addClass('active');
		$('div.sidebar_catelog').hide();
		$('#sidebar_close').hide();
	}else {
		$('.sidebar_catelog').html('<ul class="list_catelog">' + $('#markdown-toc').html() + '</ul>');
		$('.a_catelog').addClass('active');
		$('#sidebar_close').show();
		$('div.sidebar_catelog').show();
		$('sidebar_catelog').show();
		//$('#totoro_fixed').show();
		$('#totoro_fixed').animate({right:"5px"});
	}
}
/*文章目录跟随定位*/
function locateCatelogList(){
	/*获取文章目录集合*/
	var alis = $('.article :header');
	/*获取侧边栏目录列表集合**/
	var sidebar_alis = $('.sidebar_catelog').find('a');
	var scroll_height = $(window).scrollTop();
	for(var i =0;i<alis.length;i++){
		var a_height = $(alis[i]).offset().top-100;/*-100仅为了显示效果*/
		if (a_height<scroll_height){
			sidebar_alis.removeClass('list_click');
			$(sidebar_alis[i]).addClass('list_click');
		}
	}
}
$(function() {
	showCatelog();
	/*绑定滚动事件 */ 
	$(window).bind('scroll',locateCatelogList); 
	/*侧标栏的显示,关闭及鼠标点击时的切换*/
	$('#totoro_fixed').click(function(){
			$('#right_sidebar').animate({right:"+=300px"},300);
			$('#content').animate({left:'-=150px'},300);
			$('#sidebar_close').animate({right:"+=50px"},400);
	});
	$('#sidebar_close').click(function(){
		$('#right_sidebar').animate({right:"-=300px"},300);
		$('#content').animate({left:'+=150px'},300);
		$(this).animate({right:"-=50px"},400);
		//$(this).hide();
	});
	$('.a_catelog').click(function(){
		$('.a_bloginfo').removeClass('active');
		$('.a_catelog').addClass('active');
		$('div.sidebar_index').hide();
		$('div.sidebar_catelog').show();
	});
	$('.a_bloginfo').click(function(){
		$('.a_catelog').removeClass('active');
		$('.a_bloginfo').addClass('active');
		$('div.sidebar_catelog').hide();
		$('div.sidebar_index').show();
	});
	/*给点击后的目录列表项添加list_click*/
	var alis = $('.sidebar_catelog').find('a');
	alis.click(function(){
		alis.removeClass('list_click');
		$(this).addClass('list_click');
	});
	/*文章标题变化...*/
	if($(window).width() >= 1200){
		$('.list-category').find('h2').hover(function(){
			$(this).css('font-size','+=2px');
		},function(){
			$(this).css('font-size','-=2px');
		});
		$('.list-category').find('a').hover(function(){
			$(this).css('font-size','+=2px');
		},function(){
			$(this).css('font-size','-=2px');
		});
		$('#content #title h3').hover(function(){
			$(this).css('font-size','+=2px');
		},function(){
			$(this).css('font-size','-=2px');
		});
	}
/*鼠标下滚导航栏消失，上滚导航栏出现*/
	$(window).scroll(function(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >500) {
			$('#back-top').animate({right:"5px"});
		}else{
			$('#back-top').animate({right:"-50px"});
		}
    })
	$('#back-top').click(function(){
		$(document).scrollTop(0);
	});
});
