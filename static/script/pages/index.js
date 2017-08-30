$.get('/ajax/index',function(d){
	 var data = JSON.parse(d);
	 console.log(data);
	 new Vue({
	 	 el:"#app",
	 	 data:{
	 	 	top:data.items[0].data.data,
	 	 	hot:data.items[1].data.data,
	 	 	recommend:data.items[2].data.data,
	 	 	female:data.items[3].data.data,
	 	 	male:data.items[4].data.data,
	 	 	free:data.items[5].data.data,
	 	 	topic:data.items[6].data.data,
	 	 	home_container_tab:'tab_1',
	 	 	header_tab1:'cur',
	 	 	header_tab2:'',
	 	 	i_tab:'i_tab_1'
	 	 },
	 	 methods:{
	 	 	tabSwitch:function(index){
                     if(index==1){
                     	 this.home_container_tab="tab_1";
                     	 this.header_tab1 = "cur";
                     	 this.header_tab2 = "";
                     	 this.i_tab = "i_tab_1"
                     }else{
                     	
                     	 this.home_container_tab="tab_2";
                     	 this.header_tab2 = "cur";
                     	 this.header_tab1 = "";
                     	 this.i_tab = "i_tab_2"
                    
                   }
	 	 	}
	 	 }
	 });
})