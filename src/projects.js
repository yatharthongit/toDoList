import {Domstuff} from "./dom";

class Proj{
        constructor(projTitle){
        this.projTitle=projTitle;       
    }
    }

export function Project(){

    const dom=Domstuff();

    const takeProjectInput=()=>{
        const form=document.getElementById("myform");
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const projTitle=document.getElementById("title").value;
            const p=new Proj(projTitle);
            printProject(p);
        })
    }

    const printProject=(p)=>{
        dom.add(".projectList",p.projTitle);
    }

    const home=()=>{
        dom.add(".projectList","home");
    }

    return{takeProjectInput, printProject, home};

}