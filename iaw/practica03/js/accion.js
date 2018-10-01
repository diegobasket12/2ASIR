    $(function () {
        $("#boton").on("click", function (e) {
            var jqxhr = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 50}
            });

            jqxhr
                .done(function (data) {
                    $("#boton").hide();
                    var listaUsuarios = data["results"];
                    var texto = "";
                    for (var usuario of listaUsuarios) {
                        var nombre = usuario["name"]["first"];
                        var apellido = usuario["name"]["last"];
                        var email = usuario["email"];
                        var localidad = usuario["location"]["city"];
                        var estado = usuario["location"]["state"];
                        var cp = usuario["location"]["postcode"];
                        var calle = usuario["location"]["street"];
                        var imagen = usuario["picture"]["large"];
                        texto = "<div class='fila'>";
                        texto += "<figure>";
                        texto += "<img src='" + imagen + "'>";
                        texto += "</figure>";
                        texto += "<div class='texto'>";
                        texto += "<p>" + nombre + " " + apellido + "</p>";
                        texto += "<p>" + email + "</p>";
                        texto += "<p>" + calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                        texto += "</div>";
                        texto += "</div>";
                        $("#contenido").append(texto);
                    }

                })

        })
        $("body").on("click", ".fila", function () {
            $(this).remove()
            var jqxhr1 = $.ajax({
                url: 'https://randomuser.me/api/',
                method: "get",
                dataType: "json",
                data: {results: 1}
            });

            jqxhr1
                .done(function (datos) {
                    var listaUsuarios1 = datos["results"];
                    var texto = "";
                    for (var usuario1 of listaUsuarios1) {
                        var nombre = usuario1["name"]["first"];
                        var apellido = usuario1["name"]["last"];
                        var email = usuario1["email"];
                        var localidad = usuario1["location"]["city"];
                        var estado = usuario1["location"]["state"];
                        var cp = usuario1["location"]["postcode"];
                        var calle = usuario1["location"]["street"];
                        var imagen = usuario1["picture"]["large"];
                        texto = "<div class='fila'>";
                        texto += "<figure>";
                        texto += "<img src='" + imagen + "'>";
                        texto += "</figure>";
                        texto += "<div class='texto'>";
                        texto += "<p>" + nombre + " " + apellido + "</p>";
                        texto += "<p>" + email + "</p>";
                        texto += "<p>" + calle + ", " + cp + ", " + localidad + " (" + estado + ")</p>";
                        texto += "</div>";
                        texto += "</div>";
                        $(this).after(texto);
                    }

                })
        })
    })
