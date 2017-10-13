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

//主体左侧选项卡
var oDl = document.getElementById('leftDl');

var aA = oDl.getElementsByTagName('a');

for(var i=0;i<aA.length;i++)
{
	aA[i].index = i;
	aA[i].onmouseover = function()
	{	
		for(var i=0;i<aA.length;i++)
		{
			aA[i].className = '';
		};
		this.className = 'hover';	
	};
	
	aA[i].onmouseout = function()
	{
		this.className = '';	
	}	
		
};

//主体右侧新闻滑过效果
var oDd = document.getElementById('ddNews');

var aDiv = oDd.getElementsByTagName('div');

var aH = oDd.getElementsByTagName('h6');

var aP = oDd.getElementsByTagName('p');

for(var i=0;i<aDiv.length;i++)
{
	
	aDiv[i].index = i;
	aDiv[i].onmouseover = function()
	{
		
		for(var i=0;i<aDiv.length;i++)
		{
			aDiv[i].className = '';
			aH[i].className = '';
			aP[i].className = '';
		};
		this.className = 'hover';
		aH[this.index].className = 'hover';
		aP[this.index].className = 'hover';		
	};
	
	aDiv[i].onmouseout = function()
	{
		this.className = '';
		aH[this.index].className = '';
		aP[this.index].className = '';	
	};
	
};