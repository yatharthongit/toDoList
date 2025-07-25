export function Domstuff(){

    const add=(tag1,value)=>{
        const parent=document.querySelector(tag1);
        const child=document.createElement("div");
        child.classList.add("projectName");
        const deleteButton=document.createElement("button");
        deleteButton.textContent="del";
        child.textContent=`${value}`;
        child.append(deleteButton);
        parent.append(child);
    }

    return{ add};

}