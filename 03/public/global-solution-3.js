var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var thisLink = this;
  
  var req = new XMLHttpRequest();

  req.open("get", thisLink.getAttribute("href"));

  req.addEventListener("load", function(){    
    thisLink.innerText = "Response Received!";
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);