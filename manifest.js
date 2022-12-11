var hax0r = {
    processor: {},
    details: {ver: "0.0.1"},
    cmds: {},
    shell: {url: "dec/shell.html"},
    user: {username: "Jackboback",utoken: "SmFja2JvYmFjaw==_0000",uid: "0000"},
    Apps: {AppNames: [],Apps: []},
    APIS: {},
    DataBases: {},
    Store: {myItems: [], myScripts:[]},
    Scripts: {},
    Assets: {imgs: {
        IMG_0: bootFolder+"download (1).png",
        IMG_1: bootFolder+"download.png",
        IMG_2: bootFolder+"download (2).png",
        IMG_3: bootFolder+"download (3).png"
    }}
}


hax0r.Store.myItems = JSON.parse(localStorage.getItem("hax0r_myItems/store"));
if (hax0r.Store.myItems == null) {
    hax0r.Store.myItems = [];
}

hax0r.Scripts.RunScript = function(src) {

    window.opener.eval(`function Load(src) {
        var j = document.createElement('script');
        j.src = src;
        console.log("Loading: " + src);
        j.onload = function () { console.log("Loaded: " + src)}
        document.body.appendChild(j);
        } Load("`+src+`")`);
}
