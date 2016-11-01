//name:like_mode 指定QQ模式下的点赞/不点赞
//name:mode 点赞模式

var user = localStorage.user || 0;
var like_mode=document.getElementsByName('like_mode');
var like_mode_send;
var mode= document.getElementsByName('mode');
var mode_send;
document.getElementById('user').value = user;           //在输入QQ的框里显示已保存的QQ号
document.getElementById('save').onclick = function(){
     for (var i = 0; i < mode.length; i++)
     {
        if (mode[i].checked == true)
        {
            mode_send=mode[i].value;
        }
    }
     for (i=0;i<like_mode.length;i++) 
     {                                          //下拉框的长度就是它的选项数.
         if (like_mode[i].selected== true ) 
         {
            like_mode_send=like_mode[i].value;        //获取当前选择项的值 .
        }
    }
    localStorage.user = document.getElementById('user').value;
    localStorage.like_mode = like_mode_send;
    localStorage.mode=mode_send;

    //测试数值
    console.log(like_mode_send);
    console.log(mode_send);
    console.log(localStorage.user);
    console.log(localStorage.like_mode);
    console.log(localStorage.mode);

    alert('保存成功。');
}