let list = document.querySelector(".list");
let submit = document.querySelector(".submit");
let input = document.querySelector("input[type=text]")
let i =0
let list2;
let tasks = [];
// window.onload= function () {
//     list.appendChild(window.localStorage.getItem("text"));


if (window.localStorage.getItem("tasks")) {
    
    tasks = JSON.parse(window.localStorage.getItem("tasks"));

    tasks.forEach((element, id) => {
        let div = document.createElement("div");
        tasks[id].id = `note${i}`;
        div.classList.add(`${tasks[id].id}`);  
        div.style.cssText="display:flex; justify-content: space-between; align-items: center; background-color : white; padding:5px;border-radius: 3px; margin-top:10px; transition:3s;"
    // console.log(div.className);
        let h3 = document.createElement("h3");
        h3.style.cssText = "border-radius: 5px; padding:5px;"
       let text = document.createTextNode(tasks[id].title);
   
    let deleteb = document.createElement("button");
    deleteb.textContent = "delete";
    deleteb.style.cssText = "width: 75px;height: 25px;color: white;background: red;border: none;border-radius: 3px;";
        deleteb.classList.add(`${tasks[id].id}`);
          
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
        i++;
        
    div.appendChild(h3);
    div.appendChild(deleteb);
    h3.appendChild(text);
    list.appendChild(div);
        


    })
}





// localStorage.clear()

// }

submit.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add(`note${i}`);  
    div.style.cssText="display:flex; justify-content: space-between; align-items: center; background-color : white; padding:5px;border-radius: 3px; margin-top:10px; transition:3s;"
    // console.log(div.className);
    let h3 = document.createElement("h3");
    
    let text = document.createTextNode(`${input.value}`);
   
    let deleteb = document.createElement("button");
    deleteb.textContent = "delete";
    deleteb.style.cssText = "width: 75px;height: 25px;color: white;background: red;border: none;border-radius: 3px;";
    deleteb.classList.add(`note${i}`);
    
    tasks = tasks.concat({
        title: input.value,
        id: `note${i}`
    });
    
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    i++;
    
    
    
   
    div.appendChild(h3);
    div.appendChild(deleteb);
    h3.appendChild(text);
    list.appendChild(div);


    h3.style.cssText = "border-radius: 5px; padding:5px;"
    // console.log(input.value)
    input.value = '';
    input.blur;
    
     list2 = document.querySelectorAll("button");
    // console.log(list2);
    list2.forEach(function (button) {
        button.addEventListener('click', (e) => {
            tasks = tasks.filter((element, i) => tasks[i].id != `${e.currentTarget.className}`);
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            let remov = document.querySelector(`.${e.currentTarget.className}`);
            //     console.log(list2)
            //    console.log(remov.textContent);
            if(remov )
            remov.remove();
        }
        )
    })
   
   
   
})


list2 = document.querySelectorAll("button");
        list2.forEach(function (button) {
            button.addEventListener('click', (e) => {
                tasks = tasks.filter((element, i) => tasks[i].id != `${e.currentTarget.className}`);
                window.localStorage.setItem("tasks", JSON.stringify(tasks));
                let remov = document.querySelector(`.${e.currentTarget.className}`);
                //     console.log(list2)
                //    console.log(remov.textContent);
                remov.remove();
            }
            )
        })




