let taskInput = document.getElementById('new-to-do');
const addNewTaskBtn = document.getElementsByClassName('btn-primary')[0];

// Fonctions créations éléments
const createLiElt = () => {
    const newLiElt = document.createElement('li');
    newLiElt.classList = 'list-group-item';
    return newLiElt;
}

const createDivElt = () => {
    const newDiv = document.createElement('div');
    newDiv.classList = 'row align-items-center';
    return newDiv;
}

const createPElt = () => {
    const newP = document.createElement('p');
    newP.classList = 'mr-auto';
    newP.textContent = taskInput.value;
    return newP;
}

const createSpanElt = () => {
    const newSpan = document.createElement('span');
    newSpan.classList = 'ml-auto';
    return newSpan;
}

const createIconElt = (fasClass, iconId, iconColor) => {
    const newIcon = document.createElement('i');
    newIcon.classList.add('mr-3', 'fas', fasClass, iconColor);
    newIcon.id = iconId;
    return newIcon;
}

addNewTaskBtn.addEventListener('click', () => {
    // V2 YOUSSEF : stock tous les elts dans des var ensuite les append avec les var
    const ulElt = document.getElementById('tasks-container');
    // Eléments stockés dans variables
    const liElt = createLiElt();
    const divElt = createDivElt();
    const pElt = createPElt();
    const spanElt = createSpanElt();
    const doneIcon = createIconElt('fa-check-circle', 'done', 'text-success');
    const editIcon = createIconElt('fa-edit', 'edit', 'text-warning');
    const removeIcon = createIconElt('fa-trash-alt', 'remove', 'text-danger');
    const saveIcon = createIconElt('fa-save', 'save', 'text-success');


    // Création des 4 icones dans le span
    spanElt.appendChild(doneIcon);
    spanElt.appendChild(editIcon);
    spanElt.appendChild(removeIcon);
    spanElt.appendChild(saveIcon);
    saveIcon.classList.add('d-none');
    // Création du paragraphe dans la div
    divElt.appendChild(pElt);
    // Création du span dans la div
    divElt.appendChild(spanElt);
    // Création de la div dans le li
    liElt.appendChild(divElt)
    // Création du li dans le ul (!!! PROB NEW TASK INSERT END !!!)
    ulElt.appendChild(liElt);
});