import { Searchbar } from "./Searchbar"
import { OptionsMenu } from './Navbar/OptionsMenu'
import { useState } from "react"

// Context
import { MainContext, useContext } from "../context/MainContext"

export const Navbar: React.FC = () => {
    const { setToggle } = useContext<any>(MainContext)
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <nav>
            <div className="icon-side">
                {/* Toggle Bar */}
                <div 
                    onClick={() => setToggle((prevState: boolean) => !prevState)} 
                    className="toggle-bar"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* Youtube Icon */}
                <div className="youtube-icon-container">
                    <i id="youtube-icon" className="fa-brands fa-youtube"></i>
                    <h2>YouTube</h2>
                    <span>TR</span>
                </div>
            </div>

            <Searchbar />

            {/* Right Side */}
            <div className="option-side">
                <div>
                    <span className="material-symbols-outlined">video_call</span>
                    <div className="create-explanation explanation">Create</div>

                </div>

                <div>
                    <span className="material-symbols-outlined">apps</span>
                    <div className="youtube-app-explanation explanation">Youtube apps</div>

                </div>
                
                <div>
                    <span className="material-symbols-rounded">notifications</span>
                    <div className="bell-explanation explanation">Notification</div>
                </div>
                <div>
                    {/* Profile - Settings */}
                    <img 
                        onClick={() => setOpenMenu((prevState: boolean) => !prevState)} 
                        src="logo192.png" 
                        alt="profilephoto.png" />
                    <OptionsMenu openMenu={openMenu} />                    
                </div>

            </div>

        </nav>
    )
}