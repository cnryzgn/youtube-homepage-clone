import React, { useState, useEffect } from 'react'

// Contexts
import { MainContext } from './context/MainContext' 

// Components
import { Navbar } from './components/Navbar'
import { SideNavbar } from './components/SideNavbar'
import { Main } from './components/Main'

export const App: React.FC = () => {
    const [data, setData] = useState<any>()
    // Side Nav Toggle -> mobile responsive
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(() => {
        fetch('http://localhost:8001')
            .then((res: Response) => res.json())
            .then((data: any) => setData(data))
            .catch((err: any) => console.log(err))
    }, [])

    let actualData: any = {
        toggle,
        setToggle
    }

    if (data != undefined) {
        actualData = {
            ...actualData,
            data
        }
    }

    return (
        <MainContext.Provider value={actualData}>
            <Navbar />
            <SideNavbar />
            <Main />
        </MainContext.Provider>
    )
}