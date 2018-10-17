$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip();

	// 产品标题滑动
	swipeFn();

});

// 产品标题滑动
function swipeFn(){

	// 获取产品标题
	var productTitle = $('#product-title');

	// 获取产品标题内部的每一个Li
	var productLi = productTitle.find('li');

	// 要计算的宽度变量
	var totalWidth = 0;

	// 循环每一个Li
	$.each(productLi,function(index,element){

		// 获取到li的宽度加上外边距 让totalWidth累加
		totalWidth += $(element).outerWidth(true);

	});


	// 设置产品标题的宽度
	productTitle.width(totalWidth);

	// 这是一个能够实现滑动效果的插件
	itcast.iScroll({
		// 要滚动的盒子的父元素
		swipeDom:document.getElementById('scrollContainer'),
		// x 横向滑动
		swipeType:'x',
		// 回弹效果的距离
		swipeDistance:300
	});

}


