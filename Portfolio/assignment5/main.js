
var CommentCount = 0;
function postFunction() { 
    var topic1 = document.getElementById("topic1")
    var comment1 = document.getElementById("comment1") 
    var comment2 = document.getElementById("comment2")  
    var text1 = document.getElementById("text1");
    var Input = text1.value
    if(CommentCount == 0){
        topic1.innerHTML = "Topic : " + Input;
    }
    if(CommentCount == 1){
        comment1.innerHTML = "Comment : " + Input;
    }
    if(CommentCount == 2){
        comment2.innerHTML = "Comment : " + Input;
    }
    CommentCount++
}

function clearFunction() {
    topic1.innerHTML = "";
    comment1.innerHTML = "";
    comment2.innerHTML = "";
    CommentCount = 0;
}
