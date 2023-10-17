
import './App.css';
import TestaCPF from './components/Verificador.js';
import Limite from './components/Limite.js';
import verifyUser from './demo/verify-node';

function App () {
  
 
  return (
    <div className='main'>
      <div>

      </div>
      <p>Digite seu cpf</p>
      <input className='inputcpf' type='text' placeholder='Apenas números' onInput={Limite} ></input>
      <input type='button' value={'Pesquisar'} onClick={TestaCPF}></input> 
      <input type='button' onClick={verifyUser('+5565999439793')} value={'teste'}></input>

    </div>
  )
}

export default App;
