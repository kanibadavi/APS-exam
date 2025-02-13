// todo: there is a div tag with "colorChangeElement" id. Create a script that handles mouseover and mouseout events to change the background color of this element.

//Answer

const colorChangeElement = document.getElementById("colorChangeElement");

colorChangeElement.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.backgroundColor = "orange";


    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
  },
  false,
);




  

