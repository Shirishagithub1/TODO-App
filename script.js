document.getElementById('btn').addEventListener('click',

    function(){
        let input = document.getElementById('input').value;


        //Creating todo list 
        let element =document.createElement('li');

        let btn1 =document.createElement('button');

        let btn2 =document.createElement('button');
        btn1.innerHTML = "AddValue";
        btn2.innerHTML ="RemoveValue";
        element.innerText = input;
  let ul = document.querySelector('ul');
//Adding styles for list

btn1.style.border ="none"
btn1.style.marginLeft ="3%";
btn1.style.borderRadius="8px";
btn1.style.backgroundcolor ="red";

btn2.style.border ="none"
btn2.style.marginLeft ="3%";
btn2.style.borderRadius="8px"
btn2.style.backgroundcolor ="red"
  //Appending the created elements to html

  ul.appendChild(element)
  element.appendChild(btn1);
element.appendChild(btn2);

//adding button functionality to created buttons
btn1.addEventListener('click',
  function(){
    element.style.textDecoration ="line-throgh";
  }  
);
btn2.addEventListener('click',
    function(){
      element.remove();
    }  
  );
  document.getElementById('input').value="";
}
);