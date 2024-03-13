import Header from "../../component/Header.jsx"
import Aside from "../../component/Aside.jsx"
import { useState } from "react"

function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <Header setIsOpen={setIsOpen}/>
            <Aside isOpen={isOpen}/>
            {children}
        </>
    )
} 

export default Layout