

let [x, y, ...z] = ['a'];
console.log(x,y,z);

class fun{
	bar(){
		console.log('shabi');
	}
}
var a = new fun();
a.bar();

//class
//类声明
class Point{
	constructor(a,b){
		this.x = a;
		this.y = b;
	}
	plus(){
		console.log(`${this.x}`+`${this.y}`)
		console.log(`${this.x+this.y}`)
	}
}
let p = new Point(1,1);
p.plus();

//类表达式
let Point2 = class{
	constructor(a=2,b=2){
		this.x = a;
		this.y = b;
	}
	plus(){
		console.log(`${this.x}`+`${this.y}`)
		console.log(`${this.x+this.y}`)
	}
}
let p2 = new Point2();
p2.plus();

//表达式写法中，可以给类起个名字
let Point2_ = class ppp{
	constructor(a,b){
		ppp.x = a;
		ppp.y = b;
	}
	plus(){
		console.log(`${ppp.x}`+`${ppp.y}`);
		console.log(`${ppp.x+ppp.y}`);
	}
}
let p2_ = new Point2_(3,3);
p2_.plus();


//类自执行
let p3 = new class{
	constructor(a,b){
		this.x = a;
		this.y = b;
	}
	plus(){
		console.log(`${this.x}`+`${this.y}`);
		console.log(`${this.x+this.y}`);
	}
}(4,4);
p3.plus();

// var fs = require('fs');
// fs.exists('./test.txt',function(exists){
// 	if(exists){
// 		fs.readFile('./test.txt','UTF-8',function(err,data){
// 			if(!err){
// 				fs.writeFile('./test2.txt',data,function(err){

// 				})
// 			}
// 		})
// 	}else{
// 		console.log('none');
// 	}
// })

var s = new Set();
[1,2,3,4,4].map(function(x){s.add(x)});
console.log(s)

var set = new Set([1,2,3])
console.log([...set]);

// 数组去重
var set = new Set([1,2,3,4,2,3]);
var arr = [...set];
console.log(arr);





























