$('.nav_box .nav_center .nav_user').hover(function() {
	$('.nav_box .nav_center .detail_mine').show();
}, function() {
	$('.nav_box .nav_center .detail_mine').hide();
})
$('.nav_box .nav_center .nav ul .has_child').hover(function() {
	$(this).find('.nav_detail').slideDown();//出现导航详情
	$('.nav_box .nav_center .nav ul li a').css('color', '#454545'); //所有导航的字颜色设为灰色
	$(this).find('a').css('color', 'dodgerblue');//当前导航字颜色设为蓝色
	$('.nav_box .nav_center .nav_search input').css('borderColor', '#999');//搜索框颜色设为灰色
	// console.log($('.nav_box .nav_center .nav_logo a img'));
	$('.nav_box .nav_center .nav_logo a img').attr('src', 'img/logo_blue.png');//更改logo图片
	$('.nav_box .nav_center .nav_user>a img').attr('src', 'img/icon-user-gray.png');//更改user图片
	$('.nav_box .nav_center .nav_cart a img').attr('src', 'img/shopping-cart-gray.png');//更改cart图片
	$('.nav_box').css('background', '#ffffff');//导航详情背景设为白色
}, function() {
	$('.nav_detail').hide();
	$('.nav_box .nav_center .nav ul li a').css('color', '#ffffff');
	$('.nav_box').css('background', 'none');
	$('.nav_box .nav_center .nav_logo a img').attr('src', 'img/logo_white.png');//更改logo图片
	$('.nav_box .nav_center .nav_user>a img').attr('src', 'img/icon-user-white.png');//更改user图片
	$('.nav_box .nav_center .nav_cart a img').attr('src', 'img/shopping-cart-white.png');//更改cart图片
	$('.nav_box .nav_center .nav_search input').css('borderColor', 'none');//搜索框颜色设为none

})
$('.footer .footer_center .f_bottom div .other_login .qrcode').hover(function() {
	$('.footer .footer_center .f_bottom div .other_login>img').show();
}, function() {
	$('.footer .footer_center .f_bottom div .other_login>img').hide();
})
$('.footer .footer_center .f_bottom div .other_login li').hover(function() {
	var index = $('.footer .footer_center .f_bottom div .other_login li').index(this);
	if (index === 0) {
		$(this).find('img').attr('src', 'img/footer_icon_6_yellow.png');
	} else if (index === 1) {
		$(this).find('img').attr('src', 'img/footer_icon_5_green.png');
	} else {
		$(this).find('img').attr('src', 'img/footer_icon_4_red.png');

	}
	// $('.footer .footer_center .f_bottom div .other_login>img').show();
}, function() {
	var index = $('.footer .footer_center .f_bottom div .other_login li').index(this);
	if (index === 0) {
		$(this).find('img').attr('src', 'img/footer_icon_6.png');
	} else if (index === 1) {
		$(this).find('img').attr('src', 'img/footer_icon_5.png');
	} else {
		$(this).find('img').attr('src', 'img/footer_icon_4.png');

	}
})