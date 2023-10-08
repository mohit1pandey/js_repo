// Access the first element with the class name "example-class"
var element = document.querySelectorAll(".nav-link");

// Do something with the element
element.forEach(function(a){
                a.style.background="blue";
                })


                var container = document.getElementsByClassName("container1");

                for (var i = 0; i < container.length; i++) {
                  var element = container[i];
                  element.style.height = "100%";
                  element.style.width = "20%";
                  element.style.border = "2px solid black";
                }
                