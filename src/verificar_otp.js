
export function verificar_otp(){
    let codigo = document.querySelector('#codigo').value;
    let url = 'http://18.230.123.208:3000/teste1'
    fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            number: `+55${numero}`,
            codigo: codigo
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