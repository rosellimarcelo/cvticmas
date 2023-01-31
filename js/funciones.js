
    function carga_datos() {
        fetch("https://randomuser.me/api/")
        .then(respuesta => respuesta.json())
        .then(json => completar_cv(json));
    }

    function onClick(item) {
        document.getElementById("boton-"+item).onclick = function () {
            document.getElementById("principal").innerHTML = document.getElementById("p-"+item).innerHTML;
        };
    }
    
    function innerHtml(id, valor) {
        document.getElementById(id).innerHTML = valor;
    }

    function setAttribute(id, atributo, valor) {
        document.getElementById(id).setAttribute(atributo, valor);
    }

    function completar_cv(datos) {
        let postulante = datos.results[0];
        setAttribute("foto-postulante", "src", postulante.picture.large);
        setAttribute("email-postulante", "href", "mailto:" + postulante.email);
        setAttribute("email-postulante1", "href", "mailto:" + postulante.email);
        innerHtml("nombre-postulante", postulante.name.title + ". " + postulante.name.first + " " + postulante.name.last);
        innerHtml("email-postulante", postulante.email);
        innerHtml("email-postulante1", postulante.email);
        innerHtml("edad-postulante", postulante.dob.age);
        innerHtml("nacionalidad-postulante", postulante.nat);
        innerHtml("telefono-postulante", postulante.cell);
        innerHtml("ciudad-postulante", postulante.location.city + ", " + postulante.location.country);
        innerHtml("calle-postulante", postulante.location.city + ", " + postulante.location.street.name + " " + postulante.location.street.number);
        innerHtml("principal", document.getElementById("p-sobremi").innerHTML);
    }

    onClick("sobremi");
    onClick("habilidades");
    onClick("educacion");
    onClick("idiomas");
    onClick("experiencia");
    onClick("contacto");
    carga_datos();