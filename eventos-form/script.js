let qs = function (element) {
  return document.querySelector(element);
};

window.addEventListener("load", () => {
  console.log("vinculado");

  let $inputName = qs("#name"),
    $inputLastname = qs("#lastname"),
    $selectSexo = qs("select"),
    $sexErrors = qs("#sexErrors");
    ($button = qs("button")),
    ($form = qs("#form")),
    ($nameErrors = qs("#nameErrors")),
    ($lastnameErrors = qs("#lastnameErrors")),
    ($dni = qs("#dni")),
    ($email = qs("#email")),
    ($pass = qs("#pass")),
    ($pass2 = qs("#pass2")),
    ($dniErrors = qs("#dniErrors")),
    ($emailErrors = qs("#emailErrors")),
    ($passErrors = qs("#passErrors")),
    ($pass2Errors = qs("#pass2Errors")),
    ($date = qs("#date")),
    ($dateErrors = qs("#dateErrors")),
    ($file = qs("#formFile")),
    ($fileErrors = qs("#fileErrors")),
    ($imgPreview = qs("#img-preview")),
    ($flexCheckDefault = qs("#flexCheckDefault")),
    ($termsErrors = qs("#termsErrors")),
    ($submitErrors = qs("#submitErrors"))
    (regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/),
    (regExDNI = /^[0-9]{8}$/),
    (regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/),
    (regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/);

  $inputName.addEventListener("blur", function () {
    switch (true) {
      case !$inputName.value.trim():
        $nameErrors.innerHTML = "El campo nombre es obligatorio";
        $inputName.classList.add("is-invalid");
        break;
      case !regExAlpha.test($inputName.value):
        $nameErrors.innerHTML = "El nombre debe ser valido";
        $inputName.classList.add("is-invalid");
        break;
      default:
        $inputName.classList.remove("is-invalid");
        $inputName.classList.add("is-valid");
        $nameErrors.innerHTML = null; // o ponemos un "" vacio
        break;
    }
  });

  $inputLastname.addEventListener("blur", function () {
    switch (true) {
      case !$inputLastname.value.trim():
        $lastnameErrors.innerHTML = "El campo apellido es obligatorio";
        $inputLastname.classList.add("is-invalid");
        break;
      case !regExAlpha.test($inputLastname.value):
        $lastnameErrors.innerHTML = "El apellido debe ser valido";
        $inputLastname.classList.add("is-invalid");
        break;
      default:
        $inputLastname.classList.remove("is-invalid");
        $inputLastname.classList.add("is-valid");
        $lastnameErrors.innerHTML = null; // o ponemos un "" vacio
        break;
    }
  });

  $dni.addEventListener("blur", function () {
    switch (true) {
      case !$dni.value.trim():
        $dniErrors.innerHTML = "El campo DNI es obligatorio";
        $dni.classList.add("is-invalid");
        break;
      case !regExDNI.test($dni):
        $dniErrors.innerHTML = "El DNI debe ingresarse sin puntos ni espacios";
        $dni.classList.add("is-invalid");
        break;
      default:
        $dni.classList.remove("is-invalid");
        $dni.classList.add("is-valid");
        $dniErrors.innerHTML = null;
        break;
    }
  });

  $email.addEventListener("blur", function () {
    switch (true) {
      case !$email.value.trim():
        $emailErrors.innerHTML = "El campo Email es obligatorio";
        $email.classList.add("is-invalid");
        break;
      case !regExEmail.test($email):
        $emailErrors.innerHTML = "El Email debe ser valido";
        $email.classList.add("is-invalid");
        break;
      default:
        $email.classList.remove("is-invalid");
        $email.classList.add("is-valid");
        $emailErrors.innerHTML = null;
        break;
    }
  });

  $pass.addEventListener("blur", function () {
    switch (true) {
      case !$pass.value.trim():
        $passErrors.innerHTML = "El campo Contraseña es obligatorio";
        $pass.classList.add("is-invalid");
        break;
      case !regExPass.test($pass):
        $passErrors.innerHTML =
          "La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número";
        $pass.classList.add("is-invalid");
        break;
      default:
        $pass.classList.remove("is-invalid");
        $pass.classList.add("is-valid");
        $passErrors.innerHTML = null;
        break;
    }
  });

  $pass2.addEventListener("blur", function () {
    switch (true) {
      case !$pass2.value.trim():
        $pass2Errors.innerHTML = "Debes reingresar tu contraseña";
        $pass2.classList.add("is-invalid");
        break;
      case $pass2.value != $pass.value:
        $pass2Errors.innerHTML = "Las contraseñas no coinciden";
        $pass2.classList.add("is-invalid");
        break;
      default:
        $pass2.classList.remove("is-invalid");
        $pass2.classList.add("is-valid");
        $pass2Errors.innerHTML = null;
        break;
    }
  });

  $date.addEventListener("blur", function () {
    switch (true) {
      case !$date.value.trim():
        $dateErrors.innerHTML = "Debes reingresar se fecha de nacimiento";
        $date.classList.add("is-invalid");
        break;
      case moment($date.value) > moment():
        $dateErrors.innerHTML = "Fecha invalida";
        $date.classList.add("is-invalid");
        break;
      case moment().diff(moment($date.value), "years") < 18:
        $dateErrors.innerHTML = "Debes tener +18 años";
        $date.classList.add("is-invalid");
        break;
      default:
        $date.classList.remove("is-invalid");
        $date.classList.add("is-valid");
        $dateErrors.innerHTML = null;
        break;
    }
  });

  $form.addEventListener('submit',function(event){
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements
    
    for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == ""){
            elementosForm[index].classList.add('is-invalid');
            $submitErrors.innerHTML = "Los campos señalados son obligatorios";
            error = true;
        }
    }

    if(!$terms.checked){
        $flexCheckDefault.classList.add('is-invalid');
        $termsErrors.innerHTML = "Debes aceptar las bases y condiciones"
        error = true
    }

    if(!error){
        console.log('Todo bien');
        $form.submit()
    }

    })


  $selectSexo.addEventListener("blur", function () {
    if (!$selectSexo.value.trim()) {
      $sexErrors.innerHTML = "Campo requerido";
      $selectSexo.classList.add("is-invalid");
    } else {
      $selectSexo.classList.remove("is-invalid");
      $selectSexo.classList.add("is-valid");
      $sexErrors.innerHTML = "";
    }
  });

  $flexCheckDefault.addEventListener("click", function () {
    $flexCheckDefault.value = "on";
    $flexCheckDefault.classList.toggle("is-valid");
    $flexCheckDefault.classList.remove("is-invalid");
    $termsErrors.innerHTML = "";
  });

  $file.addEventListener("change", function fileValidation() {
    let filePath = $file.value, //Capturo el valor del input
      allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i; //Extensiones permitidas
    if (!allowefExtensions.exec(filePath)) {
      //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
      $fileErrors.innerHTML =
        "Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)";
      $file.value = "";
      $imgPreview.innerHTML = "";
      return false;
    } else {
      // Image preview
      console.log($file.files);
      if ($file.files && $file.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $imgPreview.innerHTML = '<img src="' + e.target.result + '"/>';
        };
        reader.readAsDataURL($file.files[0]);
        $fileErrors.innerHTML = "";
      }
    }
  });
});
