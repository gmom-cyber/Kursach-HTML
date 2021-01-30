var elems = [];
let itog = 0;
let kazna = 60000;
let mobile = true;
document.addEventListener("DOMContentLoaded",function(){
	var kazn = getcookie('kazna');
	if(kazn != null) kazna = parseInt(getcookie('kazna'));
	parseElems();
	updschet();
	pay.onclick = function(event) {
		if(itog == 0)
		{
			deshpoim();
			return;
		}
		if(itog > kazna)
		{
			visned();
			return;
		}
		verif();
	}
	chMob();
	window.onresize = chMob;
});
function parseElems()
{
	var elo = getcookie('elems');
	if(elo == null) return;
	for(let el of elo.split('*'))
	{
		if(el != '')
		{
			let inf = parseInfel(el);
			addelem(inf[4], inf[1], inf[2], inf[3], inf[0], inf[5]);
		}
	}
}
function delimcoc(ipod)
{
	var elo = getcookie('elems');
	if(elo == null) return;
	let ele;
	for(let el of elo.split('*'))
	{
		if(el != '')
		{
			let inf = parseInfel(el);
			if(inf[0] == ipod){
				ele = el;
				break;
			}
		}
	}
	if(ele != null)
	{
		ele += '*';
		elo = elo.replace(ele, '');
		document.cookie = 'elems=' + elo + ';';
	}
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
	let mas = [i, t, n, f, im, k];
	return mas;
}
function addelem(imag, nam, typ, price, ipod, ko)
{
	if(ko == 0)
	{
		delimcoc(ipod);
		return;
	}
	var elem = document.createElement("div"), del = document.createElement("div"), im = document.createElement("div"), over = document.createElement("div");
	var kolvo = document.createElement("div"), plus = document.createElement("button"), kol = document.createElement("div"), minus = document.createElement("button");
	var zag = document.createElement("div"), podz = document.createElement("div"), fix = document.createElement("div");
	elem.id = 'elem';
	elem.ipod = ipod;
	del.id = 'del';
	im.className = 'im';
	over.id = 'over';
	im.id = 'imager';
	im.appendChild(over);
	im.style.backgroundImage = imag;
	kolvo.id = 'kolvo';
	plus.id = 'plus';
	plus.innerHTML = '+';
	kol.id = 'kol';
	kol.innerHTML = ko;
	minus.id = 'minus';
	minus.innerHTML = '-';
	kolvo.appendChild(plus);
	kolvo.appendChild(kol);
	kolvo.appendChild(minus);
	over.appendChild(kolvo);
	zag.id = 'zag';
	zag.innerHTML = nam;
	podz.id = 'podz';
	podz.innerHTML = typ;
	fix.id = 'fix';
	fix.innerHTML = price + '₽';
	zag.appendChild(podz);
	zag.appendChild(fix);
	elem.appendChild(del);
	elem.appendChild(im);
	elem.appendChild(zag);
	kontent.appendChild(elem);
	elems.push(elem);
	updschet();
	del.onclick = function(event) {
		for(let i = 0; i < elems.length; i++)
		{
			if(elems[i] == this.parentElement)
			{
				delimcoc(elems[i].ipod);
				kontent.removeChild(elems[i]);
				elems.splice(i, 1);
			}
		}
		updschet();
	};
	plus.onclick = function(event) {
		let koli = this.parentElement.querySelector('#kol');
		let el = this.parentElement;
		while(true)
		{
			el = el.parentElement;
			if(el.id == 'elem') break;
		}
		let num = parseInt(koli.innerHTML);
		num++;
		koli.innerHTML = num;
		var elo = getcookie('elems');
		if(elo == null) return;
		let ele, inf;
		for(let el1 of elo.split('*'))
		{
			if(el1 != '')
			{
				inf = parseInfel(el1);
				if(inf[0] == el.ipod){
					ele = el1;
					break;
				}
			}
		}
		ele += '*';
		let ele1 = 'id=' + inf[0] + '&type=' + inf[1] + '&name=' + inf[2] + '&fix=' + inf[3] + '&imae=' + inf[4] + '&kol=' + num + '&*';
		elo = elo.replace(ele, ele1);
		document.cookie = 'elems=' + elo + ';';
		updschet();
	};
	minus.onclick = function(event) {
		let koli = this.parentElement.querySelector('#kol');
		let el = this.parentElement;
		while(true)
		{
			el = el.parentElement;
			if(el.id == 'elem') break;
		}
		let num = parseInt(koli.innerHTML);
		if(num > 0) num--;
		koli.innerHTML = num;
		var elo = getcookie('elems');
		if(elo == null) return;
		let ele, inf;
		for(let el1 of elo.split('*'))
		{
			if(el1 != '')
			{
				inf = parseInfel(el1);
				if(inf[0] == ipod)
				{
					ele = el1;
					break;
				}
			}
		}
		elo = elo.replace(ele+'*','id=' + inf[0] + '&type=' + inf[1] + '&name=' + inf[2] + '&fix=' + inf[3] + '&imae=' + inf[4] + '&kol=' + num + '&*');
		document.cookie = 'elems=' + elo + ';';
		updschet();
	};
}
function updschet()
{
	itog = 0;
	for(let el of elems)
		itog += parseInt(el.querySelector('#kol').innerHTML) * parseInt(el.querySelector('#fix').innerHTML);
	smeta.innerHTML = itog;
	kazn.innerHTML = kazna;
}
function deshpoim()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	opok.style.display = 'block';
	podlova.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function visned()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	nomaney.style.display = 'block';
	okey.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function verif()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	warning.style.display = 'block';
	no.onclick = function(event) {
		overlay.style.display = 'none';
	}
	yes.onclick = function(event) {
		kazna -= itog;
		updschet();
		udachopl();
		document.cookie = 'kazna=' + kazna + ';';
	}
}
function udachopl()
{
	overlay.style.display = 'flex';
	for(let el of overlay.children)
		el.style.display = 'none';
	udop.style.display = 'block';
	chor.onclick = function(event) {
		overlay.style.display = 'none';
	}
}
function toDesk()
{
	for(let el of elems)
	{
		let imager = el.querySelector('#imager');
		let over = imager.children[0];
		over.style.display = 'none';
		let kolvo = over.children[0];
		kolvo.style.margin = 'auto 0';
		kolvo.children[1].style.color = '#43484D';
		el.appendChild(kolvo);
		let zag = el.querySelector('#zag');
		let fix = zag.children[1];
		zag.removeChild(fix);
		fix.style.margin = 'auto 0';
		el.appendChild(fix);
	}
}
function toMobil()
{
	for(let el of elems)
	{
		let imager = el.querySelector('#imager');
		let over = imager.children[0];
		over.style.display = 'flex';
		let kolvo = el.children[3];
		el.removeChild(kolvo);
		kolvo.style.margin = 'auto';
		kolvo.children[1].style.color = '#FFF';
		over.appendChild(kolvo);
		let zag = el.querySelector('#zag');
		let fix = el.children[3];
		el.removeChild(fix);
		fix.style.margin = '0';
		zag.appendChild(fix);
	}
}
function chMob()
{
	if(window.innerWidth < 650 && !mobile)
	{
		mobile = true;
		toMobil();
	}
	if(window.innerWidth > 649 && mobile)
	{
		mobile = false;
		toDesk();
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