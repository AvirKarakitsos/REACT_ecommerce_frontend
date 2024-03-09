import { useQuery } from "@apollo/client"
import { USER } from "../graphql/Queries"
import Header from "../component/Header"
import styled from "styled-components"

const MainContainer = styled.main`
    max-width: 500px;
    width:100%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border 1px solid black;
`


function Account() {
    const token = localStorage.getItem("token") ?? ""

    const {data, loading, error} = useQuery(USER,{
        context: {
            headers: {
              Authorization: `Bearer ${token}`,
            }
        },
    })

    const newDate = (timestamp) => {
        const date = new Date(parseInt(timestamp))
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
    } 

    if (loading) return "Loading...";

    if (error) return <Header/>;
  
    else return (
        <>
            <Header/>
            <h1>Mon Compte</h1>
            <MainContainer>
                <ul className="noDecoration">
                    <li>{"Nom: "+data.user.name}</li>
                    <li>{"Email: "+data.user.email}</li>
                    <li>{"Adresse: "+data.user.address}</li>
                </ul>
                <h2>Historiques des commandes</h2>
                {data.user.orders.map(order => (
                    <details key={order._id}>
                        <summary>{newDate(order.createdAt)+" "+(order.totalPrice/100).toFixed(2)+"€"}</summary>
                        <ul className="noDecoration">
                            {order.products?.map(item =>(<>
                                <li key={item._id}>{item.product.name+" "+item.product.unity+" "+item.quantity}</li>
                                </>
                            ))}
                        </ul>
                    </details>)
                )}
            </MainContainer>
        </>
    )
}

export default Account