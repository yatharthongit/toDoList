import {Project} from "./projects";
import { ToDo } from "./toDo";

const pp=Project();
const todo=ToDo(pp);
pp.home();
pp.takeProjectInput();
todo.takeTodoInput();
