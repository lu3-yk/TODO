$(document).ready(function(){
    console.log("loaded")


     $("#form").submit(function(event){
        //event.preventDefault();
        const input = $("#input").val();
         console.log(input);
         return false;
         add();
     })
    function add()  {
        const li = document.createElement("li");
        li.innerTxt = input.value;
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
})

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log(input.value);
// });

