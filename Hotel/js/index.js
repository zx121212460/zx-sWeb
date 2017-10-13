// JavaScript Document

//头部导航栏
var oUlNav = document.getElementById('ulNav');

var aANav = oUlNav.getElementsByTagName('a');

for(var i=0;i<aANav.length;i++)
{
	
	aANav[i].index = i;
	aANav[i].onmouseover = function()
	{
		for(var i=0;i<aANav.length;i++)
		{
			aANav[i].className = '';
		};
		this.className = 'hover';
	};
	
	
	aANav[i].onmouseout = function()
	{
		this.className = '';	
	};
	
};

//登录框效果
var oLogDiv = document.getElementById('loginDiv');

var aAlog = oLogDiv.getElementsByTagName('a');

for(var i=0;i<aAlog.length;i++)
{
	
	aAlog[i].index = i;
	aAlog[i].onmouseover = function()
	{
		
		for(var i=0;i<aAlog.length;i++)
		{
			aAlog[i].className = '';
		};
		this.className = 'hover';	
	};
	
	aAlog[i].onmouseout = function()
	{
		aAlog[this.index].className = '';	
	};

};

//输入预订数量
var oInput = document.getElementById('countIpt');

var oImg = document.getElementById('countImg');

var oCount = document.getElementById('bookUl');

var aCountLi = oCount.getElementsByTagName('li');

for(var i=0;i<aCountLi.length;i++)
{
	
	oImg.onclick = function()
	{
		if(oCount.className == '')
		{
			oCount.className = 'active';
			
			for(var i=0;i<aCountLi.length;i++)
			{
				aCountLi[i].index = i;
				aCountLi[i].onclick = function()
				{
					oInput.value = aCountLi[this.index].innerHTML;
					oCount.className = '';
				};
			};
			
		}
		else
		{
			oCount.className = '';
		};	
		
	};
};

//输入订房日期
/*var oDemo1 = document.getElementById('demo1');

var oDemo2 = document.getElementById('demo2');

var cal1 = document.getElementById('calender1');

var cal2 = document.getElementById('calender2');

var cal = document.getElementById('sangcalender');

var iYear = gids.call(idsArr[2]);

var iMonth = gids.call(idsArr[3]);

var iDate = gids.call(idsArr[11]);



console.log(iYear);

var str1 = '';

var str2 = '';

str1 = 

str2 = 


oDemo1.value = str1;

oDemo2.value = str2; 

*/