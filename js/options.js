var user = localStorage.user || 0;
var num = localStorage.num || 0;
console.log("123");	
var mode= document.getElementsByName('mode');
var mode_send=localStorage.mode || 0;
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
    localStorage.mode=mode_send;
    alert('保存成功。');
}