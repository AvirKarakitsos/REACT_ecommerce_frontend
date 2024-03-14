import "../assets/styles/Account.scss"
import Layout from "./layouts/Layout"
import Message from "../component/Message"
import { useQuery } from "@apollo/client"
import { USER } from "../graphql/Queries"
import { formatDate, formatPrice } from "../utils/common"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getStatus, getToken } from "../features/user/userSlice"
import { useEffect } from "react"


function Account() {
    let token = useSelector(getToken)
    let user = useSelector(getStatus)
    
    const {data, loading, error, refetch} = useQuery(USER,{
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        },
    })

    useEffect(()=> {
        refetch()
    } ,[refetch])
    
    if (loading) return "Loading...";

    if (error) return <Message message="Erreur"/>;

    if(!user) return <Message message="Vous n'êtes pas connecté"/>;
  
    else return (
        <Layout>
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
                        {!data.user.orders.length
                            ? <p>Aucune commande</p>
                            : data.user.orders?.map(order => (
                                <details key={order._id}>
                                <summary>
                                    <span className="orderDate">{formatDate(order.createdAt)}</span>
                                    <span className="totalPrice">{formatPrice(order.totalPrice)}</span>
                                </summary>
                                <ul className="noDecoration">
                                    {order.products?.map(item =>(
                                       <li key={item._id}>
                                            <span>{item.product.name}</span>
                                            <span>{formatPrice(item.product.unity)}</span>
                                            <span>{item.quantity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </details>)
                        )}
                    </div>
                </main>
                <button className="greyButton"><Link className="noLink colorWhite" to="/">Retour</Link></button>
            </div>
        </Layout>
    )
}

export default Account