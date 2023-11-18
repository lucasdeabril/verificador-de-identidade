import {TestaCPF} from './Verificador.js';
import {Limite} from './Limite.js';
import {enviar_otp} from './enviar_otp.js';
import {verificar_otp} from './verificar_otp.js';
let cpf = document.querySelector('.input')
let otp = document.querySelector('#verificar')
let ver_otp = document.querySelector('#verificar_otp')

cpf.addEventListener('input', (e)=>{
 let target = e.target
 if (target.classList.contains('input')){
    let a = Limite()
    let b = TestaCPF()
 }
 
})
otp.addEventListener('click', ()=>{
   let a = enviar_otp()
    
})
ver_otp.addEventListener('click', (e)=>{
   let a = verificar_otp()
})