const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("input", onForm);
const { email, message } = form.elements;
let formData = {};
function onForm(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));  
};

function onSubmit(event) {
    const formOnSubmit = event.target;
    const emailOnSubmit = formOnSubmit.elements.email.value;
    const messegeOnSubmit = formOnSubmit.elements.message.value;
    if (emailOnSubmit === "" || messegeOnSubmit === "") {
    return alert("Fill in all fields!")
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        event.preventDefault();
        event.currentTarget.reset();
    };
};

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (data)  {
        email.value = data.email || '';
        message.value = data.message || '';
    };
};
dataFromLocalStorage();