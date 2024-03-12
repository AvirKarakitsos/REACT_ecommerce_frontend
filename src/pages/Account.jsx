import "../assets/styles/Account.scss"
import Header from "../component/Header"
import { useQuery } from "@apollo/client"
import { USER } from "../graphql/Queries"
import { formatDate, formatPrice } from "../utils/common"
import { Link } from "react-router-dom"



function Account() {
    const token = localStorage.getItem("token") ?? ""

    const {data, loading, error} = useQuery(USER,{
        context: {
            headers: {
              Authorization: `Bearer ${token}`,
            }
        },
    })

    if (loading) return "Loading...";

    if (error) return <Header/>;
  
    else return (
        <>
            <Header/>
            <div className="accountContainer">
                <h1>Mon Compte</h1>
                <main className="mainContainer">
                    <div>
                        <h2 className="subTitle">Profil</h2>
                        <ul className="noDecoration">
                            <li>{"Nom: "+data.user.name}</li>
                            <li>{"Email: "+data.user.email}</li>
                            <li>{"Adresse: "+data.user.address}</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="subTitle">Historiques des commandes</h2>
                        {data.user.orders.map(order => (
                            <details key={order._id}>
                                <summary><span className="orderDate">{formatDate(order.createdAt)}</span><span className="totalPrice">{formatPrice(order.totalPrice)}</span></summary>
                                <ul className="noDecoration">
                                    {order.products?.map(item =>(<>
                                        <li key={item._id}><span>{item.product.name}</span><span>{formatPrice(item.product.unity)}</span><span>{item.quantity}</span></li>
                                        </>
                                    ))}
                                </ul>
                            </details>)
                        )}
                    </div>
                </main>
                <button className="greyButton"><Link className="noLink colorWhite" to="/">Retour</Link></button>
            </div>
        </>
    )
}

export default Account