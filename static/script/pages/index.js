$.get('/ajax/index',function(d){
	 var data = JSON.parse(d);
	 console.log(data);
	 new Vue({
	 	 el:"#app",
	 	 data:{
	 	 	top:data.items[0].data.data,
	 	 	hot:data.items[1].data.data,
	 	 	recommend:data.items[2].data.data
	 	 }
	 });
})