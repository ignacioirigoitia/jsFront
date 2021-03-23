let $inputName = document.querySelector("#name"),
    $inputLastname = document.querySelector("#lastname"),
    $selectSexo = document.querySelector("select"),
    $button = document.querySelector("button"),
    $form = document.querySelector("#form"),
    $nameErrors = document.querySelector("#nameErrors"),
    $lastnameErrors = document.querySelector("#lastnameErrors")


/* $inputName.onfocus = () => {
    alert("Ingresaste el cursor al campo Nombre")
} */

/* $inputName.onfocus = () => {
    $inputName.classList.toggle("input-focus")
};

$inputName.onblur = () => {
    $inputName.classList.toggle("input-focus")
};

$inputLastname.onchange = () => {
    $inputLastname.classList.toggle("input-focus")
}; */

/* $form.onsubmit = () => {
    alert("El formulario se esta por enviar")
}; */

/* let algunCampoEnBlanco = true; */

/* $button.onclick = () => { 
    setTimeout(() => {
        algunCampoEnBlanco = false
    }, 3000)
};

$form.onsubmit = (e) => {
    if (algunCampoEnBlanco) {
        setTimeout(() => {
            e.preventDefault();
            alert("Completa todos los campos")
        }, 4000)
    }else{
        alert("El formulario se esta por enviar...")
    }
}; */

/* window.addEventListener("load", () => {
    $form.addEventListener("submit", (event) => {

        let erroresNombre = [],
            erroresApellido = [];

        if ($inputName.value.trim()) {
            erroresNombre.push("El campo nombre esta vacio")   
        }

        if ($inputLastname.value == "") {
            erroresApellido.push("El campo apellido esta vacio")   
        }

        if(erroresNombre.length > 0 || erroresApellido.length > 0){
            event.preventDefault()
            $nameErrors.innerHTML = erroresNombre
            $lastnameErrors.innerHTML = erroresApellido
        }
    });
}); */

window.addEventListener("load", () => {
    $inputName.addEventListener("blur", () => {
        
        if (!$inputName.value.trim()) {
            $nameErrors.innerHTML = "El campo nombre esta vacio"   
        }else{
            $nameErrors.innerHTML = null
        }
    })
});