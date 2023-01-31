
    function carga_datos() {
        fetch("https://randomuser.me/api/")
        .then(respuesta => respuesta.json())
        .then(json => completar_cv(json));
    }

    function completar_cv(datos) {
        let postulante = datos.results[0];
        document.getElementById("foto-postulante").setAttribute("src", postulante.picture.large);
        document.getElementById("nombre-postulante").innerHTML = postulante.name.title + ". " + postulante.name.first + " " + postulante.name.last;
        document.getElementById("email-postulante").innerHTML = postulante.email;
        document.getElementById("email-postulante").setAttribute("href", "mailto:" + postulante.email);
        document.getElementById("email-postulante1").innerHTML = postulante.email;
        document.getElementById("email-postulante1").setAttribute("href", "mailto:" + postulante.email);
        document.getElementById("edad-postulante").innerHTML = postulante.dob.age;
        document.getElementById("nacionalidad-postulante").innerHTML = postulante.nat;
        document.getElementById("telefono-postulante").innerHTML = postulante.cell;
        document.getElementById("ciudad-postulante").innerHTML = postulante.location.city + ", " + postulante.location.country;
        document.getElementById("calle-postulante").innerHTML = postulante.location.city + ", " + postulante.location.street.name + " " + postulante.location.street.number;
    }

    carga_datos();