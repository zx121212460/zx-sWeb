// JavaScript Document


//获取样式（解决兼容性问题）
function getStyle( obj,attr )
{	
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};



//传参模拟jquerry的css方法
function css( obj,attr,value )
{
	if( arguments.length == 2 )
	{
		
		return obj.style[attr];
	}
	else if( arguments.length == 3 )
	{
		//console.log(333);
		obj.style[attr] = value;
	};
	
};



//补零操作
function toZero( n )
{
	return n < 10 ? '0'+n : ''+n;
};



//获取id
function getId( s )
{
	return document.getElementById( s );
};


//判断输入值是否是数字
function isNum( s )
{
	var num = 0;
	for( var i=0;i<s.length;i++ )
	{
		num++;
		if( !( s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 ) )
		{
			console.log(num);
			return false;
		};
	};
	
	return true;
	
};


//获取不同类型数据
function type( s )
{
	if( typeof s == 'function' )
	{
		window.onload = s;
	}
	else if( typeof s == 'string' ){
		return document.getElementById( s );		
	}
	else if( typeof s == 'object' )
	{
		return s;
	};
};



//var timer = null;
//匀速运动框架
function move( obj,attr,target,endFn )
{
	
	clearInterval( obj.timer );//clearInterval 可以清除任意数据类型
	obj.timer = setInterval( function(){
		var dir = parseInt(getStyle( obj,attr )) < target ? 10 : -10;//判断方向
		var speed = parseInt(getStyle( obj,attr )) + dir;
		
		if( speed >= target && dir > 0 || speed <= target && dir < 0 )//500
		{
			speed = target;
			clearInterval( obj.timer );
			endFn && endFn();
			
		};
		
		obj.style[attr] = speed + 'px';
		
		
	},30 );
	
};



//生成验证码
function createCode()
{
	var newArr = str.split('');
	
	newArr.sort(function(){
		
		return Math.random() - 0.5;
		
	});
	
	var strNew = '';
	for(var i=0;i<6;i++)
	{
		strNew+=newArr[i];
	};
	
	oDiv.innerHTML = strNew;
};



//获取元素到页面边距的距离
function getPosition( obj )
{
	var position = { "L":0,"T":0 };
	
	while( obj )
	{
		position.L += obj.offsetLeft;
		position.T += obj.offsetTop;
		
		obj = obj.offsetParent;
	};
	
	return position;
};



//生成随机不重复id(getTime:生成从1970-01-01到现在时间的毫秒数)
function createSn()
{
	var oTime = new Date();
	
	var iYear = oTime.getFullYear();
	var iMonth = toZero(oTime.getMonth()+1);
	var iDay = toZero(oTime.getDate());
	var iHour = toZero(oTime.getHours());
	var iMin = toZero(oTime.getMinutes());
	var iSec = toZero(oTime.getSeconds());
	
	var nRan = Math.random().toString().substring(2,6);
	
	var iTime = oTime.getTime().toString().substring(0,13);
	
	//console.log( nRan );
	
	//console.log( oTime.getTime() );//时间戳 从1970
	
	var str = '';
	str = iYear + iMonth + iDay + nRan + iTime;
	
	return str;
};



//通过classname选取元素
function byClassName( sClassName )
{
	var arrEle = [];
	
	var aEle = document.getElementsByTagName('*');
	
	for(var i=0;i<aEle.length;i++)
	{
		
		var arrClassName = aEle[i].className.split(' ');
		
		//console.log( arrClassName );
		
		for(var j=0;j<arrClassName.length;j++)
		{
			if( arrClassName[j] == sClassName )
			{
				arrEle.push( aEle[i] );
				break;
			};
		};
	};
	return arrEle;
};



//对象事件绑定
function bind(obj,ev,fn)
{
	if( obj.addEventListener )
	{
		obj.addEventListener(ev,fn,false);
	}
	else
	{
		obj.attachEvent('on'+ev,function(){
			
			fn.call( obj );
			
		});
	};
};



//拖拽效果
function drag( obj )
{
	
	obj.onmousedown = function( ev )
	{
		var ev = ev || event;
		
		var disX = ev.clientX - obj.offsetLeft;
		var disY = ev.clientY - obj.offsetTop;
		
		if( obj.setCapture )
		{
			obj.setCapture();
		};
		
		document.onmousemove = function( ev )
		{
			
			var ev = ev || event;
			var L = ev.clientX - disX;
			var T = ev.clientY - disY;
			
			if( L < 0 )
			{
				L = 0;
			}
			else if( L > document.documentElement.clientWidth - obj.offsetWidth )
			{
				L = document.documentElement.clientWidth - obj.offsetWidth;
			};
			
			if( T < 0 )
			{
				T = 0;
			}
			else if( T > document.documentElement.clientHeight - obj.offsetHeight )
			{
				T = document.documentElement.clientHeight - obj.offsetHeight;
			};
			
			obj.style.left = L + 'px';
			obj.style.top = T + 'px';
		};
		
		document.onmouseup = function()
		{
			document.onmousemove = document.onmouseup = null;
			
			if( obj.setCapture )
			{
				obj.releaseCapture();
			};
		};
		
		
		return false;
	};

};



//鼠标滚动事件
function scrollFn( ev )
{
	var ev = ev || event;
	
	var b = true;
	
	if( ev.wheelDelta )
	{
		b = ev.wheelDelta > 0 ? true : false;
	}
	else
	{
		b = ev.detail > 0 ? false : true;
	};
	
	if( ev.preventDefault )
	{
		ev.preventDefault();
	};
	
	return false;
};
/*
oContentDiv.onmousewheel = scrollFn;

if( oContentDiv.addEventListener )
{
	oContentDiv.addEventListener( 'DOMMouseScroll',scrollFn,false );
};

*/

//缓冲运动
function sMove(obj,json,endFn)
{
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function(){
		
		var isStop = true;
		
		for( var attr in json )
		{
			if( attr == 'opacity' )
			{
				var cur = Math.round(parseFloat(getStyle( obj,attr ))*100);//
			}
			else
			{
				var cur = parseInt( getStyle( obj,attr ) );//
			};

			var speed = (json[attr] - cur)/10;
			speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );

			cur += speed;
			
			if( cur != json[attr] )
			{
				isStop = false;
			};
			
			if( attr == 'opacity' )
			{
				obj.style.opacity = cur/100;
				obj.style.filter = 'alpha(opacity='+ cur +')';
			}
			else
			{
				obj.style[attr] = cur + 'px';
			};
		};

		if( isStop )
		{ 
			clearInterval( obj.timer );
			endFn && endFn();
		};
		
	},30);
	
};

//键盘事件-方向键-上下左右
function direction()
{
	var keyOnff = {"L":false,"R":false,"T":false,"B":false};
	
	var timer = null;
	
	timer = setInterval(function(){
		
		if( keyOnff.L )
		{
			oDiv.style.left = oDiv.offsetLeft - 10 + 'px';
		}
		else if( keyOnff.R )
		{
			oDiv.style.left = oDiv.offsetLeft + 10 + 'px';
		}
		else if( keyOnff.T )
		{
			oDiv.style.top = oDiv.offsetTop - 10 + 'px';
		}
		else if( keyOnff.B )
		{
			oDiv.style.top = oDiv.offsetTop + 10 + 'px';
		};
		
		
	},30);
	
	document.onkeydown = function(ev)
	{
		var ev = ev || event;
		
		var nKeyCode = ev.keyCode;
		
		switch ( nKeyCode )
		{
			case 37:
			keyOnff.L = true;
			break;
			
			case 38:
			keyOnff.T = true;
			break;
			
			case 39:
			keyOnff.R = true;
			break;
			
			case 40:
			keyOnff.B = true;
			break;
		};
	};
	
	document.onkeyup = function( ev )
	{
		var ev = ev || event;
		
		var nKeyCode = ev.keyCode;
		
		switch ( nKeyCode )
		{
			case 37:
			keyOnff.L = false;
			break;
			
			case 38:
			keyOnff.T = false;
			break;
			
			case 39:
			keyOnff.R = false;
			break;
			
			case 40:
			keyOnff.B = false;
			break;
			
		};
		
	};
};


//设置Cookie
function setCookie( name,value,iDay )
{
	var iTime = new Date();
	
	iTime.setDate( iTime.getDate() + iDay );
	
	document.cookie = name + '='+ value +';expires=' + iTime ;
};

//获取Cookie
function getCookie( name )
{
	var sValue = document.cookie.split('; ');
	console.log( sValue );//获取所有的cookie 并第一次分割
	
	// [ "passwrod=111222", "name=优就业", "sex=男" ]
	
	
	/*
		[passwrod,111222],
		[name,优就业],
		[sex,男]
	*/
	
	for( var i=0;i<sValue.length;i++ )
	{
		var arrNew = sValue[i].split( '=' );
		console.log( arrNew );
		
		if( name == arrNew[0] )
		{
			return arrNew[1];
		};
		
	};
	
	return '';
	
};

//删除Cookie
function removeCookie( name )
{
	setCookie( name,'1324fdsaf',-2 ); //设置一个时间必已过期的过期Cookie，即为删除
};

//AJAX方法
function ajax(url, fnSucc, fnFaild)
{
	//1.创建Ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//2.连接服务器（打开和服务器的连接）
	oAjax.open('GET', url, true);
	
	
	//3.发送
	oAjax.send();
	
	//4.接收
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				//alert('成功了：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else
			{
				//alert('失败了');
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
};