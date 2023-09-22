import "../../styles/Forms/FormularioLogin.css"
import { useState } from "react"

export function Formulario(){

    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(nombre === "" || contraseña === ""){
            setError(true)
            return
        }
        setError(false)
    }

    return(
        <section>
            <h1>Login</h1>

            <form 
                className="formulario"
                onSubmit={handleSubmit}
                >
                <input type="text" 
                    //aca guarda el valor de lo ingresado
                    value={nombre} 
                    //dentro del onchange capturamos lo que ingresemos en el input
                    onChange={n => setNombre(n.target.value)}
                    />
                <input type="password" 
                    name="Contraseña" 
                    id="passwordInput" 
                    value={contraseña}
                    onChange={c => setContraseña(c.target.value)}
                    />
                <button>Iniciar Sesion</button>
            </form>

            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
} 