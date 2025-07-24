export function Project(){

    class Proj{
        constructor(projTitle){
        this.projTitle=projTitle;       
    }
    }

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
        console.log(p);
    }

    return{takeProjectInput, printProject};

}