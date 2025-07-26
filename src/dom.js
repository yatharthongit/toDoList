export function Domstuff(){

    const add=(tag1,value)=>{
        const parent=document.querySelector(tag1);
        const child=document.createElement("button");
        const deleteButton=document.createElement("button");
        deleteButton.textContent="del";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            parent.removeChild(child);
        });
        child.textContent=`${value}`;
        child.append(deleteButton);
        parent.append(child);
    }

    const addTodo=(tag, value1,value2,value3,value4)=>{
        const parent=document.querySelector(tag);
        const box=document.createElement("div");
        const title=document.createElement("div");
        title.textContent=`${value1}`;

        const description=document.createElement("div");
        description.textContent=`${value2}`;

        const date=document.createElement("div");
        date.textContent=`${value3}`;

        const priority=document.createElement("div");
        priority.textContent=`${value4}`;

        const stat=document.createElement("checkbox");
        
        box.appendChild(title);
        box.appendChild(description);
        box.appendChild(date);
        box.appendChild(priority);
        box.appendChild(stat);

        parent.appendChild(box);

    }
        

    return{ add,addTodo};

}