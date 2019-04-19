$(window).load(function(){
	var domain = window.location.host;
	var mycoding = document.getElementById('mycoding');
	if ( domain.indexOf("coco") != -1 ) {
		mycoding.style.display='';
	}else {
		mycoding.style.display='none';
	}
      //只在more显示留言
  var cruntUrl = window.location.href;
	var container = document.getElementById('container');
	if ( cruntUrl.indexOf("2018") != -1 ) {
		//找到了
		container.style.display='';
	}else {
		container.style.display='none';
	}
})
