import {Domstuff} from "./dom";

class Proj{
        constructor(projTitle){
        this.projTitle=projTitle;       
    }
    }

export function Project(){

    const dom=Domstuff();
    let currentProject = "home";

    const takeProjectInput=()=>{
        const form=document.getElementById("myform");
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const projTitle=document.getElementById("projTitle").value;
            const p=new Proj(projTitle);
            printProject(p);
        })
    }

    const printProject=(p)=>{
        dom.add(".projectList",p.projTitle,setCurrentProject);
    }

    const home=()=>{
        dom.add(".projectList","home",setCurrentProject);
    }

    const setCurrentProject=(name)=>{
        currentProject=name;
    }

    const getCurrentProject=()=> currentProject;

    return{takeProjectInput, printProject, home,setCurrentProject,getCurrentProject};

}