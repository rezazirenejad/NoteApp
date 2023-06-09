// Variables

const inputElem = document.getElementById("input-field");
const addBtn = document.getElementById("btn-save");
const clearBtn = document.getElementById("btn-delete");
const colorsBox = document.querySelectorAll(".color-box");
const notes = document.getElementById("listed");
const note = document.querySelectorAll(".card");

// Fanctions

function addNoteByBtn() {
    // create a note when plus button get clicked
    let inputValue = inputElem.value;
    if (inputValue) {
        // if user didn't type anything in input, DONOT create a note
        let divElem = document.createElement("div");
        divElem.className = "card shadow-sm rounded";
        let pElem = document.createElement("p");
        pElem.className = "card-text p-3";
        pElem.innerHTML = inputValue;
        divElem.appendChild(pElem);
        // below part add color of input to created note
        let inputColor = inputElem.style.backgroundColor;
        divElem.style.backgroundColor = inputColor;
        // until here
        notes.appendChild(divElem);
        inputElem.value = "";

        divElem.addEventListener("click", removeNote);
    }
}
function clearInput() {
    // clear the input when erase button get clicked
    inputElem.value = "";
}
function addNoteByEnter(event) {
    // create a note when user press Enter
    if (event.key === "Enter") {
        let inputValue = inputElem.value;
        if (inputValue) {
            // if user didn't type anything in input, DONOT create a note
            let divElem = document.createElement("div");
            divElem.className = "card shadow-sm rounded";
            let pElem = document.createElement("p");
            pElem.className = "card-text p-3";
            pElem.innerHTML = inputValue;
            divElem.appendChild(pElem);
            // below part add color of input to created note
            let inputColor = inputElem.style.backgroundColor;
            divElem.style.backgroundColor = inputColor;
            // until here
            notes.appendChild(divElem);
            inputElem.value = "";
            divElem.addEventListener("click", removeNote);
        }
    }
}
function removeNote(event) {
    console.log(event.target.parentElement);
    notes.removeChild(event.target.parentElement);
}

addBtn.addEventListener("click", addNoteByBtn);
clearBtn.addEventListener("click", clearInput);
document.body.addEventListener("keyup", addNoteByEnter);
colorsBox.forEach(function (color) {
    color.style.cursor = "pointer";
    color.addEventListener("click", function (event) {
        let colorElem = event.target;
        colorOfColorElem = colorElem.style.backgroundColor;
        inputElem.style.backgroundColor = colorOfColorElem;
    });
});
