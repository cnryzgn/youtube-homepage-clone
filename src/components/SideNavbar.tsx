import { useState } from 'react'
import { Channel } from './SideNavbar/Channel'

// Context
import { MainContext, useContext } from '../context/MainContext'

export const SideNavbar: React.FC = () => {
    const { toggle } = useContext<any>(MainContext)
    
    window.onload = () => document.getElementById('home')?.focus()

    return (
        <div id={toggle ? 'sideNavOpen' : 'sideNavClose'} className="sideNav">
            
            <a id='home' className='responsive-nav' href="#">
                <span className="material-symbols-outlined">home</span>
                <div>Home</div>
            </a>

            <a className='responsive-nav' href="#">   
                <span className="material-symbols-outlined">explore</span>
                <div>Explore</div>
            </a>

            <a className='responsive-nav' href="#">
                <span className="material-symbols-outlined">play_circle</span>
                <div>Shorts</div>
            </a>

            <a className='responsive-nav' href="#" id="last-one">
                <span className="material-symbols-outlined">subscriptions</span>
                <div>Subscriptions</div>
            </a>

            <div id="line"></div>

            <a className='responsive-nav' href="#">
                <span className="material-symbols-outlined">video_library</span>
                <div>Library</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">history</span>
                <div>History</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">smart_display</span>
                <div>Your videos</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">schedule</span>
                <div>Watch later</div>
            </a>

            <a href="#">
                <span className="material-symbols-rounded">thumb_up</span>
                <div>Liked videos</div>
            </a>

            <div id="line"></div>

            <h3>SUBSCRIPTIONS</h3>

            <Channel />

            <Channel />

            <Channel />
            
            <Channel />

            <div id='line'></div>

            <h3>MORE FROM YOUTUBE</h3>

            <a href="#">
                <span className="material-symbols-outlined">smart_display</span>
                <div>Youtube Premium</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">sports_esports</span>
                <div>Gaming</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">cell_tower</span>
                <div>Live</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">sports_score</span>
                <div>Sports</div>
            </a>


            <div id="line"></div>

            <a href="#">
                <span className="material-symbols-outlined">settings</span>
                <div>Settings</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">flag</span>
                <div>Report history</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">help</span>
                <div>Help</div>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">sms_failed</span>
                <div>Send feedback</div>
            </a>

            <div id='line'></div>

            <div className='bottom-links'>
                <div>
                    <a href="#">About</a>
                    <a href="#">Press</a>
                    <a href="#">Copyright</a>
                </div>

                <div>
                    <a href="#">Contact us</a>
                    <a href="#">Creators</a>
                </div>

                <div>
                    <a href="#">Advertise</a>
                    <a href="#">Developers</a>
                </div>
            </div>

            <div className='bottom-links'>
                <div>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Policy & Safety</a>
                </div>

                <div>
                    <a href="#">How Youtube works</a>
                </div>

                <div>
                    <a href="#">Test new features</a>
                </div>
            </div>


            <span id='copy-right-line'>© 2022 Google LLC</span>
        </div>
    )
}