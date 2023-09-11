const container = document.querySelector('.container');
const addBtn = document.querySelector('button');
const input = document.getElementById('msg');
const edition = document.querySelector('.edition');
let count = 1;




addBtn.addEventListener('click', (e) => {
    if (input.value !== undefined && input.value !== "") {
        msgAdd();
        count += 1;
    }
    input.value = "";
})

// ADD MSG WRAPPER

function msgAdd() {
    const divs = document.createElement('div');
    const no = document.createElement('p');
    const msg = document.createElement('p');
    const btnDivs = document.createElement('div')
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');


    no.innerText = count;
    divs.classList.add('divStyle');
    msg.className = 'inputMsg';
    msg.innerText = input.value;

    btnDivs.className = 'btnDivs';
    editBtn.innerText = 'EDIT';
    deleteBtn.innerText = 'DELETE';

    btnDivs.appendChild(editBtn);
    btnDivs.appendChild(deleteBtn);


    divs.appendChild(no);
    divs.appendChild(msg);
    divs.appendChild(btnDivs);


    edition.appendChild(divs);



    editBtn.addEventListener('click', (e) => {

        const editerMainDiv = document.createElement('div');
        const editerDiv = document.createElement('div');
        const inputField = document.createElement('input');
        const saveBtn = document.createElement('button');
        const cancelBtn = document.createElement('a');
        const canceliTag = document.createElement('i');

        editerMainDiv.className = 'editerMainDiv';
        editerDiv.className = 'editerDiv';
        inputField.className = 'inputField';
        inputField.value = msg.innerText;
        saveBtn.innerText = 'SAVE';
        inputField.setAttribute('type', 'text');
        cancelBtn.className = 'cancelBtn';
        canceliTag.className = 'fas fa-times-circle';
        cancelBtn.appendChild(canceliTag);

        editerDiv.appendChild(inputField);
        editerDiv.appendChild(saveBtn);
        editerDiv.appendChild(cancelBtn);
        editerMainDiv.appendChild(editerDiv);
        container.appendChild(editerMainDiv);

        // console.log(msg.innerText)


        saveBtn.addEventListener('click', (e) => {
            msg.innerText = inputField.value;
            if (inputField.value !== ""){
                container.removeChild(editerMainDiv);
            }
        })


        cancelBtn.addEventListener('click', (e) => {
            container.removeChild(editerMainDiv);
        })

    })



    deleteBtn.addEventListener('click', (e) => {
        edition.removeChild(divs);
        count -= 1;
    })


}


