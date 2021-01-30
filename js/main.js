document.addEventListener("DOMContentLoaded",function(){
	if(document.cookie == '')
	{
		document.cookie = "kazna=60000;";
		notific.style.display = 'flex';
		okey.onclick = function(){
			notific.style.display = 'none';
		}
	}
});