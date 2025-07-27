import {Domstuff} from "./dom";

export function ToDo(projectInstance){
    
    class Todo{
        constructor(title,description,dueDate,priority,status){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.status=status; 
    }
    }

    const dom=Domstuff();

    const takeTodoInput=()=>{
        const todoForm=document.getElementById("myformtodo");

        todoForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            const title=document.getElementById("title").value;
            const description=document.getElementById("description").value;
            const dueDate=document.getElementById("date").value;
            const priority=document.getElementById("priority").value;

            const task=new Todo(title,description,dueDate,priority,"checked");
            printTodo(task);
        })
    }

    const printTodo=(task)=>{
        const projectName=projectInstance.getCurrentProject();
        dom.addTodo(projectName,task.title,task.description,task.dueDate,task.priority);
    }

    return {takeTodoInput, printTodo}
    
}