const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("input", onForm);

let formData = {};
function onForm(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));  
};

function onSubmit(event) {
    const formOnSubmit = event.target;
    const emailOnSubmit = formOnSubmit.elements.email.value;
    const messegeOnSubmit = formOnSubmit.elements.message.value;
    if (emailOnSubmit === "" || messegeOnSubmit === "") {
    return alert("Заповни всі поля")
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state').trim()));
        event.preventDefault();
        event.currentTarget.reset();
    };
};

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    console.log(data.email);
    console.log(data.message);
    if (data.email==="" || data.message==="") {
       return
    } else {
         email.value = data.email;
        message.value = data.message;
    };
};
dataFromLocalStorage();