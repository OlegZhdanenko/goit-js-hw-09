import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector(".feedback-form");t.addEventListener("submit",i);t.addEventListener("input",n);const{email:l,message:s}=t.elements;let o={};function n(e){o[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(o))}function i(e){const a=e.target,r=a.elements.email.value,m=a.elements.message.value;if(r===""||m==="")return alert("Fill in all fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.preventDefault(),e.currentTarget.reset()}function c(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(l.value=e.email||"",s.value=e.message||"")}c();
//# sourceMappingURL=commonHelpers2.js.map
