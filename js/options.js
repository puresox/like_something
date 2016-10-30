var user = localStorage.user || 0;
var num = localStorage.num || 0;	
var choice = localStorage.choice || 0;		
document.getElementById('user').value = user;
document.getElementById('num').value = num;
document.getElementsByName('qq').value=choice;
document.getElementById('save').onclick = function(){
    localStorage.user = document.getElementById('user').value;
    localStorage.num = document.getElementById('num').value;
    localStorage.choice=document.document.getElementsByName('qq').value;
    alert('保存成功。');
}