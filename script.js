const contenedorUsers = document.querySelector('#root');

for (let i = 1; i <= 2; i++) {
    fetch(`https://reqres.in/api/users?page=${i}`)
        .then(response => response.json())
        .then(result => result.data.map(user => montrerUsers(user)))
        .catch(error => console.log(error))
}
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';

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

function openModal(id) {
    document.getElementById("myModal" + id).style.display = "block";
}
function closeModal(id) {
    document.getElementById("myModal" + id).style.display = "none";
}

