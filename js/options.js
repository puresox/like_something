var user = localStorage.user || 0;
var num = localStorage.num || 0;	
var mode= document.getElementsByName('mode');
var mode_send;
 for (var i = 0; i < mode.length; i++) 
 {
     if (mode[i].checked == true) 
     {
         mode_send=mode[i].value;
    }
}
document.getElementById('user').value = user;
document.getElementById('num').value = num;
document.getElementById('save').onclick = function(){
    localStorage.user = document.getElementById('user').value;
    localStorage.num = document.getElementById('num').value;
    alert('保存成功。');
}