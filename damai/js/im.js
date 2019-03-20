function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

window.onload = function(){
addh();
jian();

duoxuan();
danss()

}
//	商品的减法
function addh(){
	var add = $('.add');

	for(var i = 0; i < add.length; i++){
		add[i].index =i;
		add[i].onclick = function(){

		var cont = parseInt($(".nums")[this.index].value);

			cont ++;
			if(cont < 0 ){
				return;
			}
			$(".nums")[this.index].value= cont;
		var pice = parseInt($(".pice")[this.index].innerHTML);
		var mony =pice * cont;
			$(".zong")[this.index].innerHTML =mony; 
		if($(".checkall")[this.index].checked ==true){
			zongjia();
		}
	console.log(this.index);
		}
	}
}
function jian(){
	var redu = $('.jian');

	for(var i = 0; i<redu.length ; i++){
		redu[i].index =i;
		redu[i].onclick = function(){

		var cont = parseInt($(".nums")[this.index].value);
			cont --;
			if(cont < 0 ){
				return;
			}
			$(".nums")[this.index].value= cont;
		var pice = parseInt($(".pice")[this.index].innerHTML);
		var mony =pice * cont;
			$(".zong")[this.index].innerHTML =mony; 

			if($(".checkall")[this.index].checked ==true){
				zongjia();
			}
		}
	}
}
function zongjia(){
	var hang = $('.zong');
	var sum = 0;
	for(var i =0; i< hang.length ; i++){
	var mony= parseInt(hang[i].innerHTML);
		sum +=mony;
	}
	$('.picecont')[0].innerHTML ="￥"+ sum;
}
// =====================

	function duoxuan(){
		$("#quan").onclick = function(){
			for(var i=0; i<$(".checkall").length; i++){
				if(this.checked==true){
					$(".checkall")[i].checked=true;
					zongjia();
				}else{
					$(".checkall")[i].checked=false;
					$('.picecont')[0].innerHTML = "￥0.00";
				}
			}
		}
	}
	function danss(){
		var sum = 0;
		for(let i =0; i <$(".checkall").length; i++){
			$(".checkall")[i].onclick = function(){
				if( this.checked ==true){
					var  nn= $(".pice")[i].innerHTML;
					var  cc = $(".nums")[i].value;
					$(".zong")[i].innerHTML =parseInt(nn*cc)
					sum +=parseInt($(".zong")[i].innerHTML);
				$('.picecont')[0].innerHTML ="￥"+ sum;
				}else {
					// if( this.checked ==true){
					// 	var  nn= $(".pice")[i].innerHTML;
					// 	var  cc = $(".nums")[i].value;
					// 	sum +=parseInt(nn*cc);
					// $('.picecont')[0].innerHTML ="￥"+ sum;
					// }
					sum =0;
					$('.picecont')[0].innerHTML ="￥"+ sum;
				}
			}
		}
	}
