var user = localStorage.user || 0;
var like_mode=document.getElementsByName('like_mode');
var like_mode_send;
console.log('hello world');
var mode= document.getElementsByName('mode');
var mode_send;
document.getElementById('user').value = user;
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
    alert('保存成功。');
}