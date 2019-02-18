const taskInput = document.getElementById('new-to-do');
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
    // Stock tous les elts dans des var ensuite les append avec les var
    const ulElt = document.getElementById('tasks-container');
    // Eléments stockés dans variables
    const currentLiElt = createLiElt();
    const currentDivElt = createDivElt();
    const currentPElt = createPElt();
    const currentSpanElt = createSpanElt();
    const currentDoneIcon = createIconElt('fa-check-circle', 'done', 'text-success');
    const currentEditIcon = createIconElt('fa-edit', 'edit', 'text-warning');
    const currentRemoveIcon = createIconElt('fa-trash-alt', 'remove', 'text-danger');
    const currentSaveIcon = createIconElt('fa-save', 'save', 'text-success');

    // CREATION DU LI AVEC CES ENFANTS
    // Création des 4 icones dans le span
    currentSpanElt.appendChild(currentDoneIcon);
    currentSpanElt.appendChild(currentEditIcon);
    currentSpanElt.appendChild(currentRemoveIcon);
    currentSpanElt.appendChild(currentSaveIcon);
    currentSaveIcon.classList.add('d-none');
    // Création du paragraphe dans la div
    currentDivElt.appendChild(currentPElt);
    // Création du span dans la div
    currentDivElt.appendChild(currentSpanElt);
    // Création de la div dans le li
    currentLiElt.appendChild(currentDivElt);
    // Création du li dans le ul (!!! PROB NEW TASK INSERTED @ the END !!!)
    ulElt.appendChild(currentLiElt);
    // ulElt.insertBefore(currentLiElt, currentLiElt.parentElement.firstElementChild);
    // ulElt.insertBefore(currentLiElt, currentLiElt.parentNode.firstElementChild);
    // ulElt.insertBefore(currentLiElt, null);
    // Ajout d'un élément au tout début de la liste
    // ulElt.insertAdjacentHTML('afterBegin', '<li class="list-group-item"></li>');

    // BTNS EVENTS FUNCTIONS
    const deleteTask = () => {
        currentLiElt.remove();
    }

    const doneTask = () => {
        currentLiElt.classList.toggle('bg-done-task');
        currentLiElt.classList.toggle('text-white');
        currentDoneIcon.classList.toggle('text-white');
        currentDoneIcon.classList.toggle('text-success');
    }

    const updateTask = () => {
        // Stocke la valeur de la tâche
        const currentTaskValue = currentPElt.textContent;
        
        // Créé l'input et prend la valeur de la tâche par défault
        const newInputElt = document.createElement('input');
        newInputElt.type = 'text';
        // newInputElt.className = 'mr-auto';
        newInputElt.classList.add('mr-auto');
        newInputElt.value = currentTaskValue;

        // Met les 3 icones en "d-none"
        currentDoneIcon.classList.add('d-none');
        currentEditIcon.classList.add('d-none');
        currentRemoveIcon.classList.add('d-none');

        // Supprime le paragraphe
        currentPElt.remove();

        // Ajoute l'input
        currentDivElt.insertBefore(newInputElt, currentSpanElt);

        // Affiche l'icone "save"
        currentSaveIcon.classList.remove('d-none');

        let saveUpdatedTask = () => {
            // Cache l'icone SAVE
            currentSaveIcon.classList.add('d-none');
    
            // Supprime la classe "d-none" aux 3 icones pour les réafficher
            currentDoneIcon.classList.remove('d-none');
            currentEditIcon.classList.remove('d-none');
            currentRemoveIcon.classList.remove('d-none');
    
            // Créé le nouveau P et l'insère au doc
            const newP = createPElt();
            newP.textContent = newInputElt.value;
    
            // Supprime l'input
            newInputElt.remove();

            // Rajoute le nouveau Paragraphe dans la Div.row avant le SPAN
            currentDivElt.insertBefore(newP, currentSpanElt);
        }
        // Enregistre la nouvelle valeur au click de l'icone "save"
        currentSaveIcon.addEventListener('click', saveUpdatedTask);
    }
    // Suppression de la tâche au clic de l'icone "delete"
    currentRemoveIcon.addEventListener('click', deleteTask);
    // Changement du fond au click de l'icone "done"
    currentDoneIcon.addEventListener('click', doneTask);
    // Changement de la valeur de la tâche au click de l'icone "update"
    currentEditIcon.addEventListener('click', updateTask);
});