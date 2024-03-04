import { Link } from "react-router-dom"

function Error() {
    return (
        <>
            <div>Error 404</div>
            <Link to="/">Retour</Link>
        </>
    )
}

export default Error