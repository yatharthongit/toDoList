/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Domstuff: () => (/* binding */ Domstuff)\n/* harmony export */ });\nfunction Domstuff(){\n\n    const add=(tag1,value,setCurrentProject)=>{\n        const parent=document.querySelector(tag1);\n        const child=document.createElement(\"div\");\n        const deleteButton=document.createElement(\"button\");\n        deleteButton.textContent=\"del\";\n        deleteButton.classList.add(\"delete\");\n        deleteButton.addEventListener(\"click\", (e) => {\n            e.stopPropagation();\n            parent.removeChild(child);\n        });\n\n        child.id=`${value}`;\n        const nameSpan = document.createElement(\"span\");\n        nameSpan.textContent = `${value}`;\n        child.appendChild(nameSpan);\n        child.addEventListener(\"click\",()=>{\n            setCurrentProject(value);\n        })\n        const todoList = document.createElement(\"div\");\n        todoList.classList.add(\"todoList\");\n        child.appendChild(todoList);\n        child.append(deleteButton);\n        parent.append(child);\n    }\n\n    const addTodo=(projectName, value1,value2,value3,value4)=>{\n        const parent=document.getElementById(`${projectName}`);\n        if (!parent) return;\n\n        const todoList = parent.querySelector(\".todoList\");\n        if (!todoList) return;\n\n        const box=document.createElement(\"div\");\n        \n\n        const title=document.createElement(\"div\");\n        title.textContent=`${value1}`;\n\n        const description=document.createElement(\"div\");\n        description.textContent=`${value2}`;\n\n        const date=document.createElement(\"div\");\n        date.textContent=`${value3}`;\n\n        const priority=document.createElement(\"div\");\n        priority.textContent=`${value4}`;\n\n        const stat=document.createElement(\"input\");\n        stat.type=\"checkbox\";\n        \n        box.appendChild(title);\n        box.appendChild(description);\n        box.appendChild(date);\n        box.appendChild(priority);\n        box.appendChild(stat);\n\n        const deleteButton=document.createElement(\"button\");\n        deleteButton.textContent=\"del\";\n        deleteButton.classList.add(\"delete\");\n        deleteButton.addEventListener(\"click\", (e) => {\n            e.stopPropagation();\n            todoList.removeChild(box);\n        });\n        box.append(deleteButton);\n\n        todoList.appendChild(box);\n\n    }\n        \n\n    return{ add,addTodo};\n\n}\n\n//# sourceURL=webpack://todolist/./src/dom.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n\n\n\nconst pp=(0,_projects__WEBPACK_IMPORTED_MODULE_0__.Project)();\nconst todo=(0,_toDo__WEBPACK_IMPORTED_MODULE_1__.ToDo)(pp);\npp.home();\npp.takeProjectInput();\ntodo.takeTodoInput();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?\n}");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nclass Proj{\n        constructor(projTitle){\n        this.projTitle=projTitle;       \n    }\n    }\n\nfunction Project(){\n\n    const dom=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Domstuff)();\n    let currentProject = \"home\";\n\n    const takeProjectInput=()=>{\n        const form=document.getElementById(\"myform\");\n        form.addEventListener(\"submit\",(e)=>{\n            e.preventDefault();\n            const projTitle=document.getElementById(\"projTitle\").value;\n            const p=new Proj(projTitle);\n            printProject(p);\n        })\n    }\n\n    const printProject=(p)=>{\n        dom.add(\".projectList\",p.projTitle,setCurrentProject);\n    }\n\n    const home=()=>{\n        dom.add(\".projectList\",\"home\",setCurrentProject);\n    }\n\n    const setCurrentProject=(name)=>{\n        currentProject=name;\n    }\n\n    const getCurrentProject=()=> currentProject;\n\n    return{takeProjectInput, printProject, home,setCurrentProject,getCurrentProject};\n\n}\n\n//# sourceURL=webpack://todolist/./src/projects.js?\n}");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDo: () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nfunction ToDo(projectInstance){\n    \n    class Todo{\n        constructor(title,description,dueDate,priority,status){\n        this.title=title;\n        this.description=description;\n        this.dueDate=dueDate;\n        this.priority=priority;\n        this.status=status; \n    }\n    }\n\n    const dom=(0,_dom__WEBPACK_IMPORTED_MODULE_0__.Domstuff)();\n\n    const takeTodoInput=()=>{\n        const todoForm=document.getElementById(\"myformtodo\");\n\n        todoForm.addEventListener(\"submit\",(e)=>{\n            e.preventDefault();\n            const title=document.getElementById(\"title\").value;\n            const description=document.getElementById(\"description\").value;\n            const dueDate=document.getElementById(\"date\").value;\n            const priority=document.getElementById(\"priority\").value;\n\n            const task=new Todo(title,description,dueDate,priority,\"checked\");\n            printTodo(task);\n        })\n    }\n\n    const printTodo=(task)=>{\n        const projectName=projectInstance.getCurrentProject();\n        dom.addTodo(projectName,task.title,task.description,task.dueDate,task.priority);\n    }\n\n    return {takeTodoInput, printTodo}\n    \n}\n\n//# sourceURL=webpack://todolist/./src/toDo.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;