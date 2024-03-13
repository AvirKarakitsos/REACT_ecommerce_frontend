import "../assets/styles/template/Message.scss"
import { Link } from "react-router-dom"

function Message({message}) {

    return (
        <div className="container">
            <p className="message">{message}</p>
            <button className="greyButton"><Link className="noLink colorWhite" to="/">Retour à la page d&apos;accueil</Link></button>
        </div>
    )
}

export default Message