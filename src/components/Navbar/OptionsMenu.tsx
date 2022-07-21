interface Props {
    openMenu: boolean
}

export const OptionsMenu = ({ openMenu }: Props) => {

    openMenu
        ? document.getElementsByTagName('body')[0].style['overflowY'] = 'hidden'
        : document.getElementsByTagName('body')[0].style['overflowY'] = 'scroll'

    return (
        <div style={{ display: openMenu ? 'inline-block' : 'none' }} className="options-menu-container">

            {/* Top */}
            <div className="menu-top">
                <img src="logo192.png" alt="test.png" />
                <div className="top-details">
                    <h2>Username</h2>
                    <a href="#">Manage your Google Account</a>
                </div>
            </div>

            <div>

                {/* Middle */}
                <div className="menu-middle">
                    <a href="#">
                        <span className="material-symbols-sharp">account_box</span>
                        <div> Your Channel</div>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">monetization_on</span>
                        <div>Purchases and memberships</div>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <div>Youtube Studio</div>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">switch_account</span>
                        <div>Switch account</div>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">logout</span>
                        <div>Sign Out</div>
                    </a>

                    <div id="line"></div>



                    {/* Bottom */}
                    <div className="menu-bottom">

                        <a href="#">
                            <span className="material-symbols-outlined">brightness_3</span>
                            <div>Appearance: Dark</div>
                            <span className="material-symbols-outlined right-arrow">chevron_right</span>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">translate</span>
                            <div>Language: English</div>
                            <span className="material-symbols-outlined right-arrow">chevron_right</span>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">language</span>
                            <div>Location: Turkey</div>
                            <span className="material-symbols-outlined right-arrow">chevron_right</span>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <div>Settings</div>
                        </a>


                        <a href="#">
                            <span className="material-symbols-outlined">admin_panel_settings</span>
                            <div>Your data in Youtube</div>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">help</span>
                            <div>Help</div>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">sms_failed</span>
                            <div>Send feedback</div>
                        </a>

                        <a href="#">
                            <span className="material-symbols-outlined">keyboard</span>
                            <div>Keyboard shortcuts</div>
                        </a>
                    </div>

                    <div id="line"></div>

                    <a href="#">
                        <div>Restricted Mode: Off</div>
                        <span className="material-symbols-outlined">chevron_right</span>
                    </a>
                    </div>
            </div>
        </div>
    )
}