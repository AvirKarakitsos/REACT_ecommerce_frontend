import "../assets/styles/Login.scss"
import { useMutation } from "@apollo/client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { LOGIN } from "../graphql/Mutations.js"

function Login() {
    const [credentials, setCrendentials] = useState({
        email: '',
        password: ''
    })
    const [isValid, setIsValid] = useState({
        display: true,
        message: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loginUser] = useMutation(LOGIN)
    
    const handleMouseMove = () => {
        if(showPassword) setShowPassword(false)
    }

    const onChange = function(e) {
        e.preventDefault()
        setCrendentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async function(e) {
        try {
            e.preventDefault()
            if(credentials.email.trim() === '') {
                setIsValid({
                    display: false,
                    message: "Veuillez compléter le formulaire"
                })
            } else {
                const result = await loginUser({
                    variables: {
                        user: {email: credentials.email},
                        //password: password,
                    }
                })
                if(!result.data.loginUser?.token) {
                    setIsValid({
                        display: false,
                        message: "Email/mot de passe incorrects"
                    })
                } else {
                    setIsValid({
                        display: true,
                        message: ""
                    })
                    localStorage.setItem('token', result.data.loginUser?.token);
                    setCrendentials({
                        email: "",
                        password: ""
                    })
                }
            }

        } catch (error) {
            console.log(error);
        }
    } 

    return(
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Se connecter</legend>
                    <label htmlFor="email">
                        <input type="text" name="email" id="email" value={credentials.email} onChange={onChange} autoComplete="off" placeholder="Email"/>
                    </label>
                    <label htmlFor="password" className="password">
                        <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} autoComplete="off" placeholder="Mot de passe" />
                        <FontAwesomeIcon 
                            icon="fa-solid fa-eye" 
                            onMouseDown={() => setShowPassword(true)}
                            onMouseUp={() => setShowPassword(false)}
                            onMouseMove={handleMouseMove}/>
                        {showPassword && <p className="showPassword">{credentials.password}</p>}
                    </label>
                    {!isValid.display && <p>{isValid.message}</p>}
                    <button className="validButton" type="submit">Valider</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Login