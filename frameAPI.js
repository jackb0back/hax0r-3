var CommentData = [];
var frames = [];
if (hax0r !== null) {
   hax0r.APIS.frameAPI = {
    desc: "OASIS hcb database api thing"
   }
}

/*
{
    CommentData: [],
    index: 0
}
*/
 

function Frame(pgID) {
    var fr = document.createElement("iframe");
    fr.style.display = "none"
    this.pgid = pgID;
     document.body.appendChild(fr);
      this.pg =  fr.contentWindow.document;
    this.CommentData = [];
    var scr1 = this.pg.createElement('script');
    var scr2 = this.pg.createElement('script');
    this.Load = function () {
 this.pg.body.innerHTML = ` <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Box</a> is loading comments...</div> <style> div.hcb-shadow-tl{ top: left;}div.hcb-shadow-tr{ top: right;}div.hcb-shadow-bl{ bottom: left;}div.hcb-shadow-br{ bottom: right;}div.hcb-shadow-t{}div.hcb-shadow-b{margin-bottom:5px;background:url(shadow-bg-t.png) repeat-x bottom}div.hcb-shadow-m{padding-right:7px}.hcb-shadow-r{display:block;background:url(shadow-bg-l.png) repeat-y left}div.hcb-shadow-t,div.hcb-shadow-tr,div.hcb-shadow-b,div.hcb-shadow-br,div.hcb-shadow-tl,div.hcb-shadow-bl{background-color:transparent;height:7px}div.hcb-shadow-tr,div.hcb-shadow-br,div.hcb-shadow-tl,div.hcb-shadow-bl{width:7px}div.hcb-shadow-tr,div.hcb-shadow-br{float:right}div.hcb-shadow-tl,div.hcb-shadow-bl{float:left}br.hcb-shadow-clear{clear:both;display:block}#HCB_comment_box *{margin:0;padding:0;border-width:0;outline:0}#HCB_comment_box textarea.commentbox{width:100%;display:block;border:0 transparent}#HCB_comment_box textarea,#HCB_comment_box input.text,#HCB_comment_box input.submit{background-color:transparent;border:0 transparent;padding-left:5px}#HCB_comment_box .hcb-wrapper-half{width:50%;float:left}#HCB_comment_box .hcb-wrapper{clear:left}#HCB_comment_box input.text{width:100%}#HCB_comment_box input.submit{ width:84px;font-weight:700;cursor:pointer;height:25px}#HCB_comment_box span.home-desc{font-size:10px;opacity:.4}#HCB_comment_box blockquote{margin:0!important;padding:20px;background:url(speech-bubble.png) no-repeat}#HCB_comment_box div.comment{margin-bottom:5px;border-bottom:1px solid #eee} b{ animation: colorRotate 6s linear 0s infinite; } .author-name { color: red; } @keyframes colorRotate2 { from { color: #6666ff; } 10% { color: #0099ff; } 50% { color: #00ff00; } 75% { color: #ff3399; } 100% { color: #6666ff; } } textarea { border-style: solid; border-color: black; } body { background-color: #333; } </style> `; 
  scr1.innerHTML = ` var CommentboxID = 'h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%241xDnKLhKj17Zz.k0PK0WR1"+"&opts=16798&num=10&ts=1637617029935"';
  var ID = "`+pgID+`"
  function LoadedPage() {} // This code goes ABOVE the main HTML Comment Box code! // replace the text in the single quotes below to customize labels. hcb_user = { //L10N comments_header : '', name_label : 'Name', content_label: '', submit : 'Comment', logout_link : '<img title="log out" src="//www.htmlcommentbox.com/static/images/door_out.png" alt="[logout]" class="hcb-icon"/>', admin_link : '<img src="//www.htmlcommentbox.com/static/images/door_in.png" alt="[login]" class="hcb-icon"/>', no_comments_msg: '', add:'Add your comment', again: 'Post another comment', rss:'<img src="//www.htmlcommentbox.com/static/images/feed.png" class="hcb-icon" alt="rss"/> ', said:'said:', prev_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>', next_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>', showing:'Showing', to:'to', website_label:'website (optional)', email_label:'email', anonymous:'Anonymous', mod_label:'(_&#9733;OWNER&#9733;_)', subscribe:'', are_you_sure:'Do you want to flag this comment as inappropriate?', reply:'Reply', flag:'Report', like:'Like', //dates days_ago:'days ago', hours_ago:'hours ago', minutes_ago:'minutes ago', within_the_last_minute:'within the last minute', msg_thankyou:'Thank you for commenting!', msg_approval:'(this comment is not published until approved)', msg_approval_required:'Thank you for commenting! Your comment will appear once approved by a moderator.', err_bad_html:'Your comment contained bad html.', err_bad_email:'Please enter a valid email address.', err_too_frequent:'You must wait a few seconds between posting comments.', err_comment_empty:'Your comment was not posted because it was empty!', err_denied:'Your comment was not accepted.', //SETTINGS MAX_CHARS: 2048, PAGE:'', // ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. RELATIVE_DATES:true // show dates in the form "X hours ago." etc. }; `;

     scr2.innerHTML = ` /*<!--*/ if(!window.hcb_user){hcb_user={};} hcb_user.PAGE=ID;(function(){var s=document.createElement("script"), l=(hcb_user.PAGE || ""+window.location), h="//www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.onload = function () {LoadedPage()}; s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%241xDnKLhKj17Zz.k0PK0WR1"+"&opts=16798&num=10&ts=1637617029935");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); hcb_user.submit="Post";/*-->*/ `; 
     scr2.type = "text/javascript"; 
     scr2.id = "hcb";
     this.pg.body.appendChild(scr1);
    this.pg.body.appendChild(scr2); 
}
this.GetCommentData = function () {
    for (let i = 0; i < this.pg.getElementsByClassName("comment").length; i++) {
        var e = i -1;
        var d = {
            user: this.pg.getElementsByClassName("comment")[i].getElementsByTagName("blockquote")[0].getElementsByClassName("author-name")[0].innerText,
            data: this.pg.getElementsByClassName("comment")[i].getElementsByTagName("blockquote")[0].getElementsByClassName("hcb-comment-body")[0].innerText,
            id: this.pg.getElementsByClassName("comment")[i].id,
            mod: this.pg.getElementsByClassName("comment")[i].getElementsByClassName("author")[0].classList.contains("hcb-mod")
        }
      this.CommentData.push(d);
    }
}
this.ReadPages = function (num) {
       var found = false;
        this.CommentData = [];
        for (let i = 0; i < num; i++) {
            this.ChangePage(1);
            this.GetCommentData();
            }
        }



this.ChangePage = function(val) {
   var s = this.pg.createElement('script');
   s.innerHTML = ` hcb.changepage(`+val+`);`
   this.pg.body.appendChild(s);
    console.log(val)
    /*setTimeout(function(){
        if (fd.length == 0) {
        if (val == 1) {
            hcb.changepage(-1);  
        }else {
            hcb.changepage(1);
        }
       }
}, 500);
*/
}

this.post = function(name,data) {
    this.pg.getElementById("hcb_form_name").value = name;
    this.pg.getElementById("hcb_form_content").value = data;
    this.pg.getElementById("hcb_submit").click();
}


}



//LoadFrame()


