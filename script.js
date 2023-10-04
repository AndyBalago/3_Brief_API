const contenedorUsers = document.querySelector('#root');
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

//---------Recuperacion de la data de la API para las dos paginas-------------//

for (let i = 1; i <= 2; i++) {
    fetch(`https://reqres.in/api/users?page=${i}`)
        .then(response => response.json())
        .then(result => result.data.map(user => montrerUsers(user)))
        .catch(error => console.log(error))
}

//---------Funcion que permite agregar codigo HTML para la creacion de card para cada usario de la API -------------//

function montrerUsers(user) {
    console.log(user);

    const div = document.createElement("div");
    div.classList.add("cardUser");
    div.innerHTML = ` 
    
                        <h1 class="nom">${user.first_name} ${user.last_name}</h1>
                        <img onclick="openModal(${user.id})"src="${user.avatar}" class="img" alt="avatar">
                        <a href="mailto:${user.email}  class="mail">${user.email}</a>
                    `;
    const createModal = document.createElement('div');
    createModal.classList.add("modal");
    createModal.setAttribute("id", "myModal" + user.id);
    createModal.innerHTML = `               <div class="contentModal" >
                                                <span onclick="closeModal(${user.id})" class="close">&times</span>
                                                <h1 class="nom">${user.first_name} ${user.last_name}</h1>
                                                <img src="${user.avatar}" class="img" alt="avatar">
                                                <p class="descrip">${lorem} </p>
                                                <a href="mailto:${user.email}  class="mail">${user.email}</a>
                                            </div>
                                        `;

    contenedorUsers.appendChild(createModal);
    contenedorUsers.append(div);
}
//---------Funciones para abrir y cerrar la modal-------------//

function openModal(id) {
    document.getElementById("myModal" + id).style.display = "block";
}
function closeModal(id) {
    document.getElementById("myModal" + id).style.display = "none";
}

