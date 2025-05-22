import { useRef } from "react";
import { Copy } from "lucide-react";

function Textbox(props){
    
    const inputRef = useRef(null);
    const copiar=()=> {
        const input=inputRef.current;
        input.select()
        document.execCommand("copy");
        console.log("Copiado")
    };

    return(
    <div>
      
    <input ref={inputRef} value={props.senha} className="mx-5 bg-white w-92 md:w-160 lg:w-200 rounded text-center outline-slate-400 py-1 px-4 text-black text-xs md:text-lg lg:text-2xl" />
    <button onClick={copiar} className="cursor-pointer rounded"><Copy size={30} color="green" className="-my-3 lg:-my-6 -mx-3 text-green-500 w-5 md:w-7 lg:w-10"/></button>
    </div>
    )
}
export default Textbox
