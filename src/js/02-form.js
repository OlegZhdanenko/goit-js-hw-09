const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onSubmit);
form.addEventListener("input", onForm);




let formData = {};
function onForm(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
};

function onSubmit(event) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.preventDefault();
    event.currentTarget.reset();
    
};
function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    let email = document.querySelector('.feedback-form input');
    let message = document.querySelector('.feedback-form textarea');
    if (data !== "" && data !=="") {
    email.value = data.email;
    message.value = data.message;
    }  else {
    alert("Заповни всі поля!")
    };
};
dataFromLocalStorage();