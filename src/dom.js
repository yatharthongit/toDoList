export function Domstuff(){

    const add=(tag1,value,setCurrentProject)=>{
        const parent=document.querySelector(tag1);
        const child=document.createElement("div");
        const deleteButton=document.createElement("button");
        deleteButton.textContent="del";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            parent.removeChild(child);
        });

        child.id=`${value}`;
        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${value}`;
        child.appendChild(nameSpan);
        child.addEventListener("click",()=>{
            setCurrentProject(value);
        })
        const todoList = document.createElement("div");
        todoList.classList.add("todoList");
        child.appendChild(todoList);
        child.append(deleteButton);
        parent.append(child);
    }

    const addTodo=(projectName, value1,value2,value3,value4)=>{
        const parent=document.getElementById(`${projectName}`);
        if (!parent) return;

        const todoList = parent.querySelector(".todoList");
        if (!todoList) return;

        const box=document.createElement("div");
        

        const title=document.createElement("div");
        title.textContent=`${value1}`;

        const description=document.createElement("div");
        description.textContent=`${value2}`;

        const date=document.createElement("div");
        date.textContent=`${value3}`;

        const priority=document.createElement("div");
        priority.textContent=`${value4}`;

        const stat=document.createElement("input");
        stat.type="checkbox";
        
        box.appendChild(title);
        box.appendChild(description);
        box.appendChild(date);
        box.appendChild(priority);
        box.appendChild(stat);

        const deleteButton=document.createElement("button");
        deleteButton.textContent="del";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            todoList.removeChild(box);
        });
        box.append(deleteButton);

        todoList.appendChild(box);

    }
        

    return{ add,addTodo};

}