//El lenguaje de programacion JavaScript
//permite darle "comportamiento" a las paginas web
//en el navegador al hacer click en un boton,
//al enviar un formulario, al desplegar un menu, etc.
//Los usuarios podran interactuar con nuestros sitios.

alert("Este proyecto de CV es para la entrega final del curso 'Primeros pasos del desarrollo frontend' impartido por 'Ticmas Academy' para 'Argentina Programa 4.0'. Utilice un personaje ficticio de https://randomuser.me para crear el CV, en este proyecto me guie con Cards de Bootstrap para cada seccion, le agregue iconos de Font Awesome y fui plasmando lo aprendido en el curso sobre Git, HTML, CSS, el framework Bootstrap para hacerlo Responsive, algo de JavaScript, y lo subi a un repositorio en Github. ");



fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            document.getElementById("image").src =
            data.results[0].picture.large;
            document.getElementById("name").innerHTML =
            data.results[0].name.first +" "+ data.results[0].name.last;
            
            document.getElementById("text").innerHTML =
            "Hello everyone! My name is "+ data.results[0].name.first 
            +", I'\m from "+ data.results[0].location.country;
            document.getElementById("phone").innerHTML =
            data.results[0].phone;
            document.getElementById("email").innerHTML =
            data.results[0].email;
            document.getElementById("location").innerHTML =
            data.results[0].location.state +", "+ data.results[0].location.country; 
        });


        function infoFoto(){
            
            alert(
            `Open to work!`);
        }
