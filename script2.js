const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let CPF = document.getElementById('CPF').value;
    let endereço = document.getElementById('endereço').value;
    let data = {

        nome,
        email,
        telefone,
        CPF,
        endereço,

    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('dados', convertData)

    
})