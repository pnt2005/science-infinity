var button = document.getElementById('button');
button.addEventListener('click', function(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
window.onscroll = function(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
		button.style.display = 'inline-block';
	else
		button.style.display = 'none';
};