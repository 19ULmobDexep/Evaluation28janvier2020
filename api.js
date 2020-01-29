AOS.init({
    duration: 1200,
})



/*---------------------- PERSONNAGE ---------------------*/


function charger() {

    fetch('https://swapi.co/api/people')

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {


            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";


            for (let i = 0; i <= 10; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";

                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopoke(data.results[i].url)
                })
                right.appendChild(infof);

            }


        }
    )

}




function infopoke(url) {

    var visible = document.getElementById("information");
    visible.className = "vue"

    fetch(url)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {
            var parent = document.getElementById("information");
            parent.innerHTML = " ";

            var nomt = document.createElement("h3");
            nomt.innerHTML = "Nom";
            var parent = document.getElementById("information");
            parent.appendChild(nomt);
            var nom = document.createElement("p");
            nom.innerHTML = data.name;
            var parent = document.createElement("infromation");
            parent.appendChild(nom);

            var hauteurt = document.createElement("h3");
            hauteurt.innerHTML = "Hauteur";
            var parent = document.getElementById("information");
            parent.appendChild(hauteurt);
            var hauteur = document.createElement("p");
            hauteur.innerHTML = data.height;
            var parent = document.getElementById("information");
            parent.appendChild(hauteur);

            var poidst = document.createElement("h3");
            poidst.innerHTML = "Poids";
            var parent = document.getElementById("information");
            parent.appendChild(poidst);
            var poids = document.createElement("p");
            poids.innerHTML = data.mass;
            var parent = document.getElementById("information");
            parent.appendChild(poids);

            var cheveuxt = document.createElement("h3");
            cheveuxt.innerHTML = "Cheveux";
            var parent = document.getElementById("information");
            parent.appendChild(cheveuxt);
            var cheveux = document.createElement("p");
            cheveux.innerHTML = data.hair_color;
            var parent = document.getElementById("information");
            parent.appendChild(cheveux);

            var peaut = document.createElement("h3");
            peaut.innerHTML = "Peau";
            var parent = document.getElementById("information");
            parent.appendChild(peaut);
            var peau = document.createElement("p");
            peau.innerHTML = data.skin_color;
            var parent = document.getElementById("information");
            parent.appendChild(peau);

            var yeuxt = document.createElement("h3");
            yeuxt.innerHTML = "Yeux";
            var parent = document.getElementById("information");
            parent.appendChild(yeuxt);
            var yeux = document.createElement("p");
            yeux.innerHTML = data.eye_color;
            var parent = document.getElementById("information");
            parent.appendChild(yeux);

            var naissancet = document.createElement("h3");
            naissancet.innerHTML = "Date de naissance";
            var parent = document.getElementById("information");
            parent.appendChild(naissancet);
            var naissance = document.createElement("p");
            naissance.innerHTML = data.birth_year;
            var parent = document.getElementById("information");
            parent.appendChild(naissance);

            var genret = document.createElement("h3");
            genret.innerHTML = "Sexe";
            var parent = document.getElementById("information");
            parent.appendChild(genret);
            var genre = document.createElement("p");
            genre.innerHTML = data.gender;
            var parent = document.getElementById("information");
            parent.appendChild(genre);

        }
    )

}




var page = 1


function suivant() {

    page++


    fetch('https://swapi.co/api/people/?page=' + page)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {

            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";




            for (let i = 0; i <= 9; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";
                var p = document.getElementById('left');


                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopoke(data.results[i].url)
                })
                right.appendChild(infof);


            }


        }
    )

}





var page = 1


function precedent() {


    page--


    fetch('https://swapi.co/api/people/?page=' + page)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {

            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";


            for (let i = 0; i <= 9; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";
                var p = document.getElementById('left');


                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopoke(data.results[i].url)
                })
                right.appendChild(infof);


            }


        }
    )

}





/*------------------------- PLANETE ------------------------------*/



function chargera() {

    fetch('https://swapi.co/api/planets')

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {


            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";


            for (let i = 0; i <= 10; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";

                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopokea(data.results[i].url)
                })
                right.appendChild(infof);

            }


        }
    )

}




function infopokea(url) {

    var visible = document.getElementById("information");
    visible.className = "vue"

    fetch(url)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {
            var parent = document.getElementById("information");
            parent.innerHTML = " ";

            var nomt = document.createElement("h3");
            nomt.innerHTML = "Nom";
            var parent = document.getElementById("information");
            parent.appendChild(nomt);
            var nom = document.createElement("p");
            nom.innerHTML = "data.name";
            var parent = document.createElement("infromation");
            parent.appendChild(nom);

            var rotationt = document.createElement("h3");
            rotationt.innerHTML = "Rotation";
            var parent = document.getElementById("information");
            parent.appendChild(rotationt);
            var rotation = document.createElement("p");
            rotation.innerHTML = data.rotation_period;
            var parent = document.getElementById("information");
            parent.appendChild(rotation);

            var orbitalt = document.createElement("h3");
            orbitalt.innerHTML = "Orbital";
            var parent = document.getElementById("information");
            parent.appendChild(orbitalt);
            var orbital = document.createElement("p");
            orbital.innerHTML = data.orbital_period;
            var parent = document.getElementById("information");
            parent.appendChild(orbital);

            var diametert = document.createElement("h3");
            diametert.innerHTML = "Diametre";
            var parent = document.getElementById("information");
            parent.appendChild(diametert);
            var diameter = document.createElement("p");
            diameter.innerHTML = data.diameter;
            var parent = document.getElementById("information");
            parent.appendChild(diameter);

            var climatet = document.createElement("h3");
            climatet.innerHTML = "Climate";
            var parent = document.getElementById("information");
            parent.appendChild(climatet);
            var climate = document.createElement("p");
            climate.innerHTML = data.climate;
            var parent = document.getElementById("information");
            parent.appendChild(climate);

            var gravityt = document.createElement("h3");
            gravityt.innerHTML = "Gravite";
            var parent = document.getElementById("information");
            parent.appendChild(gravityt);
            var gravity = document.createElement("p");
            gravity.innerHTML = data.gravity;
            var parent = document.getElementById("information");
            parent.appendChild(gravity);

            var terraint = document.createElement("h3");
            terraint.innerHTML = "Terrain";
            var parent = document.getElementById("information");
            parent.appendChild(terraint);
            var terrain = document.createElement("p");
            terrain.innerHTML = data.terrain;
            var parent = document.getElementById("information");
            parent.appendChild(terrain);

            var surfacet = document.createElement("h3");
            surfacet.innerHTML = "Surface";
            var parent = document.getElementById("information");
            parent.appendChild(surfacet);
            var surfacew = document.createElement("p");
            surface.innerHTML = data.surface_water;
            var parent = document.getElementById("information");
            parent.appendChild(surface);

            var populationt = document.createElement("h3");
            populationt.innerHTML = "Population";
            var parent = document.getElementById("information");
            parent.appendChild(populationt);
            var population = document.createElement("p");
            populationt.innerHTML = data.population;
            var parent = document.getElementById("information");
            parent.appendChild(population);


        }
    )

}





var page = 1


function suivanta() {

    page++


    fetch('https://swapi.co/api/planets/?page=' + page)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {

            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";




            for (let i = 0; i <= 9; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";
                var p = document.getElementById('left');


                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopokea(data.results[i].url)
                })
                right.appendChild(infof);


            }


        }
    )

}





var page = 1


function precedenta() {


    page--


    fetch('https://swapi.co/api/planets/?page=' + page)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {

            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";


            for (let i = 0; i <= 9; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";
                var p = document.getElementById('left');


                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopokea(data.results[i].url)
                })
                right.appendChild(infof);


            }


        }
    )

}



/*----------------------------------- RECHERCHER --------------------------------------*/




function person() {

    var name = document.getElementById('perso').value;


    fetch('https://swapi.co/api/people/?search=' + name)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {


            name = document.getElementById('perso').value;
            name.innerHTML = " ";
            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";


            for (let i = 0; i <= data.results.length; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";

                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopoke(data.results[i].url)
                })
                right.appendChild(infof);

            }

            name.innerHTML = " ";

        }
    )

}



function plan() {
    var name = document.getElementById('planET').value;


    fetch('https://swapi.co/api/planets/?search=' + name)

    .then(
        function(response) {
            return response.json()
        }
    )

    .then(
        function(data) {


            name = document.getElementById('planET').value;
            name.innerHTML = " ";
            var tab = data;
            var p = document.getElementById('left');
            p.innerHTML = " ";
            var right = document.getElementById('right')
            right.innerHTML = " ";
            var parent = document.getElementById('information')
            parent.innerHTML = " ";


            for (let i = 0; i <= data.results.length; i++) {

                var span = document.createElement('span');
                span.innerHTML += "<p>" + tab.results[i].name + "</p>";

                p.appendChild(span);

                var infof = document.createElement("p");
                infof.innerHTML = "voir les stats";

                infof.addEventListener("click", function() {
                    infopoke(data.results[i].url)
                })
                right.appendChild(infof);

            }

            name.innerHTML = " ";

        }
    )

}