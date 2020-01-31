var btnOpen=document.getElementById("btn-open")
 document.getElementById("btn-open").onclick = function() {
     console.log("bbb");
if(btnOpen.innerHTML=="閉じる"){
    document.getElementById("search-inner").style.top="-644px";
    document.getElementById("content").style.top="-360px";
    btnOpen.innerHTML="詳細検索";

}
else{
    console.log("aaa");
    document.getElementById("search-inner").style.top="0px";
    document.getElementById("content").style.top="280px";
    btnOpen.innerHTML="閉じる";
}
};
