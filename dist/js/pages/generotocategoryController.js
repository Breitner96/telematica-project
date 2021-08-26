$(function () {
  "use strict";

  let select = document.getElementById("selectgeneros");

  // if( $('#checkbox1').is(':checked') ) {
  //     console.log('checkbox1 esta Seleccionado');
  // }

  select.addEventListener("change", function () {
    let selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ": " + selectedOption.text);
  });
});
