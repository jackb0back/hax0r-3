var placeholder;
var hax0rDeps = [];
console.log("hax0r version: " + hax0r.details.ver);
console.log("by jackboback");

function openDev() {
   hax0r.cmds.CreatejsWin("DEV",`<button onclick="hax0r.cmds.openShell()">shell</button>
   <button onclick="document.getElementById('apps').innerHTML = '';DisplayApps()">LoadApps</button>
   `,300,100) 
}


//define hax0r varibles

hax0r.cmds.openShell = function() {
    var params = [
        'height='+screen.height,
        'width='+screen.width,
        'fullscreen=yes',
        'toolbar=no'
        ].join(',');
    if (hax0r.shell.win !== undefined) {
    if (hax0r.shell.win.name !== "OASIS") {
            hax0r.shell.win.close();
        }
    }
    hax0r.shell.win = window.open(hax0r.shell.url, "OASIS", params);
    hax0r.shell.win.moveTo(0,0);
}

hax0r.cmds.CreatejsWin = function (title,cont,width,height) {
    if (width == undefined) {
        width = 600;
    }
    if (height == undefined) {
        height = 400;
    }
    var eg = new jswindow({title: title, icon: ""});
    eg.innerWindow.innerHTML = cont;
    eg.open({width: width, height: height});
    document.getElementsByClassName('window')[0].style.top = "0px"
    document.getElementsByClassName('window')[0].style.left = "78vw"
}


/*
{
    Name: "Test",
    Src: ""
}
*/









hax0r.cmds.ScriptSave = function(dat) {
    dat = JSON.parse(atob(dat));
console.log(dat.Src);
hax0r.Store.myScripts.push(dat);
localStorage.setItem("hax0r_myScripts/store",JSON.stringify(hax0r.Store.myScripts));
if (hax0r.DataBases.MyScripts !== null) {
    hax0r.DataBases.MyScripts.post("USERNAME",JSON.stringify(hax0r.Store.myScripts));
}
}
hax0r.cmds.ScriptLoad = function (src) {
    var s = document.createElement('script');
    s.src = src;
    document.body.appendChild(s);
}
/*
for (let i = 0; i < hax0r.Store.myItems.length; i++) {
    document.getElementById("apps").innerHTML = "";
    document.getElementById("apps").innerHTML += `<button class="S-gett" onclick="hax0r.cmds.StoreLoad('`+hax0r.Store.myItems[i].Src+`')">`+hax0r.Store.myItems[i].Name+`</button> <br>`
}
*/





















hax0r.cmds.StoreSave = function(dat) {
    dat = JSON.parse(atob(dat));
console.log(dat.Src);
hax0r.Store.myItems.push(dat);
localStorage.setItem("hax0r_myItems/store",JSON.stringify(hax0r.Store.myItems));
if (hax0r.DataBases.MyApps !== null) {
    hax0r.DataBases.MyApps.post("USERNAME",JSON.stringify(hax0r.Store.myItems));
}
}
hax0r.cmds.StoreLoad = function (src) {
    var s = document.createElement('script');
    s.src = src;
    document.body.appendChild(s);
}
function LoadStore() {
if (hax0r.APIS.frameAPI !== null) {
    console.log("FRAME API FOUND");
    hax0r.DataBases.MyScripts = new Frame("hax0r/DB/Script");
    hax0r.DataBases.Store = new Frame("hax0r/DB/Store");
    hax0r.DataBases.MyScripts.Load();
    hax0r.DataBases.Store.Load();
    setTimeout(function(){
        hax0r.DataBases.MyScripts.GetCommentData();
        DisplayScripts();
        hax0r.DataBases.Store.GetCommentData();
        var Store = document.getElementById("Store");
        Store.innerHTML = ""
        for (let i = 0; i < hax0r.DataBases.Store.CommentData.length; i++) {
            if (hax0r.DataBases.Store.CommentData[i].mod == true) {
                var d;
                    console.log(hax0r.DataBases.Store.CommentData[i].data[0] == "{");
                    if (hax0r.DataBases.Store.CommentData[i].data[0] == "{") {
                        d = JSON.parse(hax0r.DataBases.Store.CommentData[i].data);
                    }else {
                        return;
                    }
                if (d.type == "OEXE") {
                Store.innerHTML += `<h3 class="S-ent">`+d.Name+`</h3>
                <div class="StoreDesc">`+d.desc+`</div>
                <button class="S-get" onclick="hax0r.cmds.StoreSave('`+btoa(JSON.stringify(d))+`')">Save</button>
                <button class="S-get" onclick="hax0r.cmds.StoreLoad('`+d.Src+`')">Execute</button>
                `
                }

                if (d.type == "SCRIPT") {
                    Store.innerHTML += `<h3 class="S-ent">`+d.Name+`</h3>
                    <div class="StoreDesc">`+d.desc+`</div>
                    <button class="S-get" onclick="hax0r.cmds.ScriptSave('`+btoa(JSON.stringify(d))+`')">Save</button>
                    <button class="S-get" onclick="hax0r.cmds.StoreLoad('`+d.Src+`')">Execute</button>
                    `
                    }
            }
        }
    }, 1500);
}


for (let i = 0; i < hax0r.Store.myItems.length; i++) {
    document.getElementById("apps").innerHTML = "";
    document.getElementById("apps").innerHTML += `<button class="S-gett" onclick="hax0r.cmds.StoreLoad('`+hax0r.Store.myItems[i].Src+`')">`+hax0r.Store.myItems[i].Name+`</button> <br>`
}
}