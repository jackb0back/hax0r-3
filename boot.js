//THIS IS REQUIRED TO LOAD ALL SCRIPTS REQIRED FOR BOOT DONT USE THIS FUNCTION UNLESS BOOTING hax0r CLIENT
var bootSel = 0;
function BootLoad(src) {
    setTimeout(function(){
            var j = document.createElement('script');
    j.src = src;
    console.log("Loading: " + src);
    j.onload = function () { console.log("Loaded: " + src)}
    document.body.appendChild(j);
    bootSel += 1000;
    }, bootSel);

    }

/*
    <script src="dec/OEXE_API.js"></script>
    <script src="dec/manifest.js"></script>
    <script src="dec/decomp.js"></script>
    <script src="dec/frameAPI.js"></script>
    <script src="dec/apps.js"></script>
*/
    BootLoad(bootFolder+"OEXE_API.js");
    BootLoad(bootFolder+"manifest.js");
    BootLoad(bootFolder+"decomp.js");
    BootLoad(bootFolder+"frameAPI.js");
    BootLoad(bootFolder+"apps.js");
    BootLoad(bootFolder+"afterRun.js");
