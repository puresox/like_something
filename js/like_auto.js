var like=document.getElementsByClassName('item qz_like_btn_v3')[0];
var user;
var choice;
function presslike()
{
	var n=document.getElementsByClassName('f-user-avatar q_namecard f-s-a');
	var i;
	chrome.runtime.sendMessage('This string has no use', function(response){
		user=response[0];
		choice=response[1];
	});

	for(i=0;i<n.length;i++)
	{
		if(n[i].getAttribute('href')=='http://user.qzone.qq.com/'+user)
		{
			if(document.getElementsByClassName('item qz_like_btn_v3')[i].getAttribute('data-clicklog')=="like")		//判定是否已经点赞了
			{
				if(choice==1)
					document.getElementsByClassName('item qz_like_btn_v3')[i].click();
				setTimeout("changeLikeButton("+i+")",500)
				//console.log("running well");
			}
		}
	}
}

function changeLikeButton(i)
{
	document.getElementsByClassName('item qz_like_btn_v3')[i].innerHTML="已通过插件点赞";
	document.getElementsByClassName('item qz_like_btn_v3')[i].style.color="red";
}

setInterval("presslike()",3000);
