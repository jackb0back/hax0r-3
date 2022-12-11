var appSources = ["dec/appsManaTest.js"]

function Load(src) {
var j = document.createElement('script');
j.src = src;
console.log("Loading: " + src);
j.onload = function () { console.log("Loaded: " + src)}
document.body.appendChild(j);
}

function DisplayApps() {
    for (let i = 0; i < hax0r.Apps.Apps.length; i++) {
        console.log(i);
        if (hax0r.Apps.Apps[i].AppType == "Standard/OEXE") {
        document.getElementById("apps").innerHTML += `<button onclick="Execute('`+hax0r.Apps.Apps[i].AppData+`',true)" class="S-gett">`+hax0r.Apps.AppNames[i]+`</button><br>`;
        }else {
            document.getElementById("apps").innerHTML += `<button onclick="" class="app">`+hax0r.Apps.AppNames[i]+`</button>`;

        }
    }
}
function DisplayScripts() {
    document.getElementById("scripts").innerHTML = ""
    var e = JSON.parse(hax0r.DataBases.MyScripts.CommentData[0].data);
    console.log(e);
    for (let i = 0; i <e.length; i++) {
        
        document.getElementById("scripts").innerHTML += `<button onclick="hax0r.Scripts.RunScript('`+e[i].Src+`')" class="S-gett">`+e[i].Name+`</button>`
    }
}


function GetAppData(id) {
    var dat = hax0r.Apps.Apps[id].AppData;
    var dec;
    var enc = "dec = " + hax0r.Apps.Apps[id].DataDecFunc + "('" +dat+ "')";
    eval(enc);
    return dec;
}



window.onload = function() {
   for (let i = 0; i < appSources.length; i++) {
    Load(appSources[i]);
    if (hax0r.APIS.frameAPI !== null){
    hax0r.DataBases.MyApps = new Frame("hax0r/DB/myApps");
    hax0r.DataBases.MyApps.Load();
    }
    setTimeout(function(){
        if (hax0r.APIS.frameAPI !== null){
            hax0r.DataBases.MyApps.GetCommentData();
            if (hax0r.DataBases.MyApps.CommentData.length == 0) {
                return;
            }
            hax0r.Store.myItems = JSON.parse(hax0r.DataBases.MyApps.CommentData[0].data);
            LoadStore();
        }
        DisplayApps();
    }, 1000);
   }
}