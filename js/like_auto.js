var like=document.getElementsByClassName('item qz_like_btn_v3')[0];
var user;
var mode;
var like_mode;
chrome.runtime.sendMessage('This string has no use', function(response){
	mode=response[0];
	user=response[1];
	like_mode=response[2];
});

function presslike_mode0()
{

}

function presslike_mode1()
{
	var n=document.getElementsByClassName('f-user-avatar q_namecard f-s-a');

	for(var i=0;i<n.length;i++)
	{
		if(n[i].getAttribute('href')=='http://user.qzone.qq.com/'+user)
		{
			if(document.getElementsByClassName('item qz_like_btn_v3')[i].getAttribute('data-clicklog')=="like")		//判定是否已经点赞了
			{
				if(like_mode==1)
				{
					setTimeout("changeLikeButton_mode1("+i+")",500);
					document.getElementsByClassName('item qz_like_btn_v3')[i].click();
				}
				else
				{
					setTimeout("changeLikeButton_mode0("+i+")",500);
				}
				//console.log("running well");
			}
		}
	}
}

function changeLikeButton_mode0(i)
{
	document.getElementsByClassName('item qz_like_btn_v3')[i].innerHTML="测试点赞";
	document.getElementsByClassName('item qz_like_btn_v3')[i].style.color="red";
}

function changeLikeButton_mode1(i)
{
	document.getElementsByClassName('item qz_like_btn_v3')[i].innerHTML="已通过插件点赞";
	document.getElementsByClassName('item qz_like_btn_v3')[i].style.color="red";
}


function runScripts()
{
	if(mode==0)
	{
		presslike_mode0();
		console.log("presslike_mode0()");
	}
	else
	{
		presslike_mode1();
		console.log("presslike_mode1()");
	}
}

setInterval("runScripts()",3000);

