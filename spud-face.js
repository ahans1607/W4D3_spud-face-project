window.addEventListener("DOMContentLoaded", (event) => {

  console.log("spudhead");
  const licenseForm = document.getElementById("drivers-license-form")
  console.log(licenseForm);

  const textElements = document.querySelectorAll(".license__info");
  console.log(textElements);
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
