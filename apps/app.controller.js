"use strict";
function ToDoController() {
    const vm = this;
    vm.tasks = [
        {task: "Feed my pet sister", completed: false},
        {task: "wash my flying car", completed: true},
        {task: "Wash my cats feet", completed: false},
        {task: "Hung with the boys", completed: true},

    ];
    // vm.add = function (){

    // }
    // vm.delete = function (){
        
    // }
}

angular
    .module("todoApp")
    .controller("ToDoController",ToDoController);