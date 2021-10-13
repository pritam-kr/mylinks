import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <>
            <main>
                <header>
                    <div className="profile">
                        <img src="./img/pritam.jpeg" alt="pritam_image" />
                        <h3>Pritam Kumar</h3>
                        <p>Front-end developer</p>
                    </div>
                </header>
            </main>
        </>
    )
}

export default Header