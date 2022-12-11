
var compiled;
var enc = "b64";
var fd;
var file;
var gd;
var exe;
var COMP_DATA;
var Gw;
var doc = document.implementation.createHTMLDocument();
var JustCompiled;



function Execute(oexe,b64) {
    if (b64) {
    COMP_DATA = JSON.parse(atob(oexe));
    }else {
        COMP_DATA = oexel
    }
	var params = [
    'height='+screen.height,
    'width='+screen.width,
    'fullscreen=yes' // only works in IE, but here for completeness
].join(',');
	//Gw
	//fd
	//COMP_DATA
	//if (GetFileName() == undefined) {
		//console.log("EXECUTEING: OEXE","error");
//	}else {
//	println("EXECUTEING: " + GetFileName(),"error");
//	}
//	COMP_DATA = JSON.parse(fd);
    var win = window.open("", "OASIS EXE", params);
	win.moveTo(0,0);
	 Gw = win;
    var doc = win.document;
    gd = doc;
    doc.head.innerHTML = COMP_DATA.head; 
    doc.body.innerHTML = COMP_DATA.body;
  doc.body.id = COMP_DATA.BID;

for (let i = 0; i < COMP_DATA.js.length; i++) {
var sc = doc.createElement('script');
if (COMP_DATA.js[i].encr == "b64") {
sc.innerHTML = atob(COMP_DATA.js[i].code);
}else {
  sc.innerHTML = COMP_DATA.js[i].code;
}
sc.id = COMP_DATA.js[i].id;
sc.type = COMP_DATA.js[i].type;
doc.body.appendChild(sc);


}


}
//Execute(OEXE,base64-t/f)
