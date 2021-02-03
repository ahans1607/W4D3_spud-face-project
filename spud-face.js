window.addEventListener("DOMContentLoaded", (event) => {

  const licenseForm = document.getElementById("drivers-license-form")
  console.log(licenseForm);
  let formfields = document.getElementsByClassName("form__input");
  console.log(formfields);
  const license = document.querySelectorAll(".license__info");
  console.log(license);
  const submitForm = document.getElementsByClassName("form_submit");
  licenseForm.addEventListener("submit", event => {
    console.log("submitted")
    // event.preventDefault("submit");

  });

  // ** Phase 1B: Update license with event delegation and event.target **


  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
