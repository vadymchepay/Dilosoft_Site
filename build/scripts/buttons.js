// $(document).ready(function () {
//    $('.btn').click(function(){
//        $('.description-text').css({display:"block"});
//    })
// });

function getClass(a, b) {
        return document.getElementsByClassName(a)[b];
    };
function getId(a) {
        return document.getElementById(a);
    };

getId("btn1").onclick = function(){
    getClass("description-full", 0).style.display = "block";
}