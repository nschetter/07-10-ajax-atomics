var finishLinks = document.getElementsByClassName("done_link");

for (var i=0; i < finishLinks.length; i++) {
  finishLinks[i].addEventListener("click", mark_task_done)
}

function mark_task_done(event){
  var current_element = this;
  var this_link = this.getAttribute("href");

  var my_request = new XMLHttpRequest();

  my_request.open("get", this_link);

  my_request.addEventListener("load", function(event){
    var parent = current_element.parentElement;
    console.log(parent);
    parent.className = "task finished";
    parent.removeChild(current_element);
  })

  event.preventDefault();

  my_request.send();
}