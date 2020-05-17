$(function(){
	var type=new Array();
	type[0] = "diamond";
	type[1] = "gold";
	type[2] = "silver";
	var historytype=3;
	$(".nav li").mouseover(function() {
		var type_index = $(this).index();
		if(type_index != historytype){   //与上次划入的li索引对比是否发生变化
			for(var i=0;i<3;i++){
				if(i == type_index){
					$("#" + type[i]).css({
						"background-color":"white",
						"color":"#368BBB"
					});
					$("."+type[i]).fadeIn(500);
				} else {
					$("#" + type[i]).css({
						"background-color":"#D3D3D3",
						"color":"black"
					});
					$("."+type[i]).hide();
				}
			}
		}
		historytype=type_index;   //记录划入的li索引
	})
})