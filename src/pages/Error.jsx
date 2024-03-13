import "../assets/styles/template/FullPage.scss"
import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="container">
            <p className="message">Error 404</p>
            <button className="greyButton"><Link className="noLink colorBlack" to="/">Retour</Link></button>
        </div>
    )
}

export default Error