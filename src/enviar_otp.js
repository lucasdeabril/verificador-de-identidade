
export function enviar_otp(){
    let numero = document.querySelector('#numero').value;
    console.log(numero)
    let url = 'http://18.230.123.208:3000/teste'
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            number : '+55' + numero
        })
    })
    .then(response => response.json())
    .then((data) =>{
        let resposta = data 
        alert(resposta.status)
    })
    .catch(err => {
        console.log('Erro ao enviar código', err);
    });
}