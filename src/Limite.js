export function Limite(){
    let CPF = document.querySelector('.input')
    while(CPF.value.length>11){
        CPF.value = CPF.value.substring(0, CPF.value.length - 1);
        
    }
}