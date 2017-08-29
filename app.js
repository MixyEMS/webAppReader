var koa = require('koa');
var controller = require('koa-route');
var app = koa();

var views = require('co-views');
var render = views('./view',{
    map:{html:'ejs'}
});

var koa_static = require('koa-static-server');
app.use(koa_static({
  rootDir:'./static',
  rootPath:'/static',
  maxage:0
}));

var service =  require('./service/webAppService');

var querystring = require('querystring');

app.use(controller.get('/route_test',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = 'hellow koa';
}));

app.use(controller.get('/ejs_test',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = yield render('test',{
    	 title:'title_test'
    });
}));

app.use(controller.get('/api_test',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = service.get_test_data();
}));

app.use(controller.get('/',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = yield render('index',{
    	 title:'书城首页'
    });
}));

app.use(controller.get('/search',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = yield render('search',{
    	 title:'搜索页面'
    });
}));

app.use(controller.get('/book',function*(){
	this.set('Cathe-Control','no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var bookId = params.id;
    this.body = yield render('book',{
    	 title:'书籍详情页面',
    	 bookId:bookId
    });
}));


app.use(controller.get('/ajax/index',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = service.get_index_data();
}));

app.use(controller.get('/ajax/rank',function*(){
	this.set('Cathe-Control','no-cache');
    this.body = service.get_rank_data();
}));



app.use(controller.get('/ajax/book',function*(){
	this.set('Cathe-Control','no-cache');	
	var params = querystring.parse(this.req._parsedUrl.query);
	var id = params.keyworid;
	if(!id){
		 id = "";
	}
    this.body = service.get_book_data(id);
}));

app.use(controller.get('/ajax/search',function*(){
	this.set('Cathe-Control','no-cache');
	var params = querystring.parse(this.req._parsedUrl.query);
	var start = params.start;
	var end = params.end;
	var keyword = params.keyword;
    this.body = yield service.get_search_data(start,end,keyword);
}));

app.listen(3001);
console.log('koa server is started!');