	window.smartlook||(function(d) {
	var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
	var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
	c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
	})(document);
	smartlook('init', 'ae1b34cadc7336b2884df42245d77781e59a1338', { region: 'eu' });
	smartlook('record', { forms: true })
