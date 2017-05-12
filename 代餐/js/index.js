
$(function () {

	$(".menu-tabs-container").find('a').each(function () {
		$(this).click(function () {
			$(this).children().addClass('border-bottom')
			$(".menu-tabs-container").find('.active').removeClass()
			$(this).siblings('a').children().removeClass()
		
		})
	})

	 $(".info").eq(0).siblings().hide(0)
     
   //点击切换导航栏切换不同页面
	$(".menu-wrap-left").find('div').click(function(){
		  $(this).addClass('tag-icon').siblings('div').removeClass('tag-icon').find('img').css('width','15px')
		  
		   $(this).children().find('span').addClass('tag-text').parent().parent().siblings('div')
		  .find('span').removeClass()
	
		  var $index = $(this).index()
          console.log($index)
		  $(".info").eq($index).css('display','block').siblings().hide(0)
	})

	var offset = $("#end").offset();
	$(".addcar").click(function (event) {
		console.log(this)
		var addcar = $(this);
		var img = addcar.parent().find('i');
		var flyer = $('<img class="img-fly" src="">');
		console.log(flyer)
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: offset.left + 10,
				top: offset.top + 10,
				width: 0,
				height: 0
			},
			// onEnd: function(){
			// 	$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
			// 	addcar.css("cursor","default").removeClass('orange').unbind('click');
			// 	this.destory();
			// }
		});
	});
})