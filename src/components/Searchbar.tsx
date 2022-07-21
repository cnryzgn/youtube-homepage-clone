import { useState } from 'react'

export const Searchbar: React.FC = () => {
    const [focus, setFocus] = useState<boolean>(false)
    const [showInput, setShowInput] = useState<boolean>(false)

    return (
        <div className="search-container">
            <div 
                style={{ 
                    boxShadow: focus ? '0 0 2px rgb(0, 132, 255)' : '0' ,
                    marginLeft: focus ? '0px' : '36px' 
                }} 
                className="searchbar"
                id={ showInput ? 'showInput':  '' }
            >
                <i 
                    style={{ display: focus ? 'block' : 'none' }} 
                    id="search-inside" 
                    className="fa-solid fa-magnifying-glass"
                ></i>
                <input 
                    onFocus={() => setFocus(true)} 
                    type="text" 
                    placeholder="Search"
                />
            </div>
            <button onClick={() => setShowInput(true)}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="search-explanation">Search</div>
            </button>

            <div className="notification">
                <i id="notification-bell" className="fa-solid fa-microphone"></i>
                <div className="notification-explanation">Search with your voice</div>
            </div>
        </div>
    )
}