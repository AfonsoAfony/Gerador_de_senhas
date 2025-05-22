function Button(props){
    return(
         <div>
            <button onClick={props.mudarSenha} className="border-slate-500 rounded bg-green-500 px-5 md:px-7  py-2 md:py-3 my-4 cursor-pointer text-1xl">Outra Senha</button>
        </div>
    )
}
export default Button