var pink=document.getElementById("pink");
var green=document.getElementById("green");
var blue=document.getElementById("blue");
var purple=document.getElementById("purple");
var su=document.getElementById("sum")
var sc=document.getElementById("score");
var sum=0,score=0,speed=30,interval=50;
green.addEventListener("click",fun)
pink.addEventListener("click",fun)
blue.addEventListener("click",fun)
purple.addEventListener("click",fun)
function fun2(e)
{
 	console.log(e)
	'transform: matrix(1, 0, 0, 1, x+=50, 60)'
}
function fun(e)
{
	if(sum>-1)
	{
		if(e.target.id==="pink")
		{
			var a=e.target.parentNode
			setTimeout(fun2,interval)
			var x=0,y=0;
			function fun2()
			{
				if(x<300)
				{
					x+=speed
					a.style='transform: matrix(1, 0, 0, 1,'+x+', 0)'
					setTimeout(fun2,interval)
				}
				else if(y<60)
				{
					y+=speed
					a.style='transform: matrix(1, 0, 0, 1,'+x+','+y+')'
					setTimeout(fun2,interval)
				}
				else
					a.style='transform: matrix(1, 0, 0, 1,0,0)'
			}
			score++;
			sum++;
		}
		if(e.target.id==="green")
		{
			if(sum==2)
			{
				var a=e.target.parentNode
				setTimeout(fun2,interval)
				var x=0,y=0;
				function fun2()
				{
					if(x<300)
					{
						x+=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+', 0)'
						setTimeout(fun2,interval)
					}
					else if(y>-60)
					{
						y-=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+','+y+')'
						setTimeout(fun2,interval)
					}
					else
						a.style='transform: matrix(1, 0, 0, 1,0,0)'
				}
				score+=3;
				sum++;
			}
			else
				alert("hit it at 3rd")
		}
		if(e.target.id==="blue")
		{
			if(sum==4)
			{
				var a=e.target.parentNode
				setTimeout(fun2,interval)
				var x=0,y=0;
				function fun2()
				{
					if(x>-300)
					{
						x-=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+', 0)'
						setTimeout(fun2,interval)
					}
					else if(y<60)
					{
						y+=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+','+y+')'
						setTimeout(fun2,interval)
					}
					else
						a.style='transform: matrix(1, 0, 0, 1,0,0)'
				}
				score+=5;
				sum++;
			}
			else
				alert("hit it at 5th")
		}
		if(e.target.id==="purple")
		{
			if(sum==14)
			{
				var a=e.target.parentNode
				setTimeout(fun2,interval)
				var x=0,y=0;
				function fun2()
				{
					if(x>-300)
					{
						x-=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+', 0)'
						setTimeout(fun2,interval)
					}
					else if(y>-60)
					{
						y-=speed
						a.style='transform: matrix(1, 0, 0, 1,'+x+','+y+')'
						setTimeout(fun2,interval)
					}
					else
						a.style='transform: matrix(1, 0, 0, 1,0,0)'
				}
				score+=15;
				sum++;
			}
			else
				alert("hit it at 15th")
		}
		su.innerHTML=sum;
		sc.innerHTML=score;
	}
}

