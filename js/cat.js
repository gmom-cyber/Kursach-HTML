let tid;
document.addEventListener("DOMContentLoaded",function(){
	adr1.onclick = function(event) {
		window.scrollTo(0,choc.offsetTop - 100);
	}
	adr2.onclick = function(event) {
		window.scrollTo(0,cooookie.offsetTop - 100);
	}
	adr3.onclick = function(event) {
		window.scrollTo(0,drozh.offsetTop - 100);
	}
	for(let el of document.querySelectorAll('#butt'))
	{
		el.onclick = function(event) {
			let elem = this.parentElement.parentElement.parentElement;
			addelcoc(elem.dataset.t, elem.dataset.n, elem.dataset.f, elem.dataset.i);
		}
	}
	document.onscroll = progr;
	for(let el of document.querySelectorAll('#elem'))
	{
		el.onmouseenter = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'flex';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'block';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'inline-block';
			progr();
		};
		el.onmouseleave = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'none';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'none';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'none';
			progr();
		};
	}
	for(let el of document.querySelectorAll('#elem1'))
	{
		el.onmouseenter = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'flex';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'block';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'inline-block';
			progr();
		};
		el.onmouseleave = function(event) {
			for(let over of el.querySelectorAll('#over'))
				over.style.display = 'none';
			for(let des of el.querySelectorAll('#descr'))
				des.style.display = 'none';
			for(let but of el.querySelectorAll('#butt'))
				but.style.display = 'none';
			progr();
		};
	}
});
window.onload = progr;
function progr()
{
	let proc = ((window.pageYOffset + window.innerHeight)/(k1.offsetTop+k1.offsetHeight)) / 0.0296;
	prog.style.width = proc + '%';
}
function addelcoc(t, n, f, i)
{
	let id = 0;
	if(getcookie('id') != null) id = parseInt(getcookie('id'));
	let elems = '';
	if(getcookie('elems') != null) elems = getcookie('elems');
	let elee;
	if(elems != '')
	{
		for(let el of elems.split('*'))
		{
			if(el != '')
			{
				let inf = parseInfel(el);
				if(t == inf[1] && n == inf[2] && f == inf[3] && i == inf[4]) elee = inf;
			}
		}
	}
	if(!elee)
	{
		let ntim = 5;
		if(tid != null)
		{
			notific.style.display = 'none';
			add.style.display = 'none';
			clearInterval(tid);
			tid = null;
			notific.onmouseenter = null;
			notific.onmouseleave = null;
		}
		notific.style.display = 'flex';
		add.style.display = 'flex';
		nume.innerHTML = ntim;
		tid = setInterval(function(){
			ntim--;
			nume.innerHTML = ntim;
			if(ntim == 0)
			{
				notific.style.display = 'none';
				add.style.display = 'none';
				clearInterval(tid);
				tid = null;
				notific.onmouseenter = null;
				notific.onmouseleave = null;
			}
		}, 1000);
		notific.onmouseenter = function(){
			clearInterval(tid);
		}
		notific.onmouseleave = function(){
			tid = setInterval(function(){
				ntim--;
				nume.innerHTML = ntim;
				if(ntim == 0)
				{
					notific.style.display = 'none';
					add.style.display = 'none';
					clearInterval(tid);
					tid = null;
					notific.onmouseenter = null;
					notific.onmouseleave = null;
				}
			}, 1000);
		}
		elems += 'id=' + id + '&type=' + t + '&name=' + n + '&fix=' + f + '&imae=' + i + '&kol=1&*';
		document.cookie = 'elems=' + elems + ';';
		id++;
		document.cookie = 'id=' + id + ';';
	}
	if(elee)
	{
		namet.innerHTML = elee[1] + ' ' + elee[2].toLowerCase();
		fixt.innerHTML = elee[3] + '₽';
		imt.style.backgroundImage = elee[4];
		let kolovo = parseInt(elee[5]) + 1;
		kolvt.innerHTML = kolovo;
		elems = elems.replace(elee[6], 'id=' + elee[0] + '&type=' + elee[1] + '&name=' + elee[2] + '&fix=' + elee[3] + '&imae=' + elee[4] + '&kol=' + kolovo + '&');
		document.cookie = 'elems=' + elems + ';';
		let ntim = 5;
		if(tid != null)
		{
			notific.style.display = 'none';
			add.style.display = 'none';
			clearInterval(tid);
			tid = null;
			notific.onmouseenter = null;
			notific.onmouseleave = null;
		}
		notific.style.display = 'flex';
		tadd.style.display = 'flex';
		nume.innerHTML = ntim;
		tid = setInterval(function(){
			ntim--;
			nume.innerHTML = ntim;
			if(ntim == 0)
			{
				notific.style.display = 'none';
				tadd.style.display = 'none';
				clearInterval(tid);
				tid = null;
				notific.onmouseenter = null;
				notific.onmouseleave = null;
			}
		}, 1000);
		notific.onmouseenter = function(){
			clearInterval(tid);
		}
		notific.onmouseleave = function(){
			tid = setInterval(function(){
				ntim--;
				nume.innerHTML = ntim;
				if(ntim == 0)
				{
					notific.style.display = 'none';
					tadd.style.display = 'none';
					clearInterval(tid);
					tid = null;
					notific.onmouseenter = null;
					notific.onmouseleave = null;
				}
			}, 1000);
		}
	}
}
function getcookie ( cookie_name )
{
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
		return ( unescape ( results[2] ) );
	else
		return null;
}
function parseInfel(el)
{
	let i, t, n, f, im, k;
	for(let ty of el.split('&'))
	{
		if(ty != '')
		{
			let nam = ty.split('=');
			switch(nam[0])
			{
				case 'id':
					i = nam[1];
					break;
				case 'type':
					t = nam[1];
					break;
				case 'name':
					n = nam[1];
					break;
				case 'fix':
					f = nam[1];
					break;
				case 'imae':
					im = nam[1];
					break;
				case 'kol':
					k = nam[1];
					break;
				default:
					console.log('Чек');
			}
		}
	}
	let mas = [i, t, n, f, im, k, el];
	return mas;
}