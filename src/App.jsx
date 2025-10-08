
import './App.css'
import { useState } from "react";
import Button from './components/Button'
import Textbox from './components/Textbox'


function App() {
 
  
function gerarSenhaAleatoria(tamanho) {
    const caracteres = ',.-º+;:_ª*^/=)(#$(%&!"|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
   for (let i = 0; i < tamanho; i++) {

      resultado+=caracteres.charAt(Math.floor(Math.random() * caracteres.length))
   }
    return resultado;
}
 const [senha,setSenha] = useState(gerarSenhaAleatoria(25))



const [valor, setValor] = useState(15);

return (
  <div> 
    <h1 className="text-2xl md:text-3-l lg:text-4xl">Gerador de Senhas</h1>
    
       <div className="my-6 flex flex-col items-center">
        <label className=" text-green-300" htmlFor="slider ">Escolha um valor:</label>
      <input 
        className="w-70"
        type="range"
        id="slider"
        min="3"
        max="30"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onClick={()=>setSenha(gerarSenhaAleatoria(valor))}
      />
      <span className="text-1xl text-green-300">{valor}</span>
      
   </div>

    <Textbox senha={senha}/>
    <Button mudarSenha={()=>setSenha(gerarSenhaAleatoria(valor))}/>
  </div>
  )
}

export default App