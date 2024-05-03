export class task {
    id;
    name;
    description;
    dueDate;
    stage;

    constructor(id, name = "", description = "", dueDate = "2024-01-01", stage = 0) {

    }

    addTaskToDropArea = () => {

    }
    updateTaskToDropArea = () => {
        // using the querySelector to select element 
        //  document.querySelector(`[data-task-stage-id="${this.stage}"]`);

        //
    }

    changeStage = (stage) => {
        //
    }

    // generateCardHTML is for generate a html element that include the card content.
    generateCardHTML = () => {
        // Return Card Element
        // const div = document.createElement("div");
        // div.appendChild()
    }
}