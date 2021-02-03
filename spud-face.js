window.addEventListener("DOMContentLoaded", (event) => {

  const licenseForm = document.getElementById("drivers-license-form")
  // console.log(licenseForm);

  let formFields = document.getElementsByClassName("form__input");
  // console.log(formFields);
  const license = document.querySelectorAll(".license__info");
  // console.log(license);
  const submitForm = document.getElementsByClassName("form_submit");
  // console.log(submitForm);

  licenseForm.addEventListener("focus", event => {
    event.target.style.backgroundcolor = 'lightgreen'

  }, true);
  licenseForm.addEventListener("blur", event => {


  });
  licenseForm.addEventListener("input", event => {


  });
  licenseForm.addEventListener("submit", event => {


  });
  licenseForm.addEventListener("click", event => {

  });



  // ** Phase 1B: Update license with event delegation and event.target **


  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
// for (let i = 0; i < formFields.length; i++){
  //   inputField = formFields[i]
  //   let arr = Array.from(inputField)
  //   console.log(arr)
  //   // console.log(inputField)
  //     for(let input of arr){
  //      console.log(input);
  //     }


}


// licenseForm.addEventListener("submit", event => {
//   console.log("submitted")
//   // event.preventDefault("submit");

// });
