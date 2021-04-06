import React from 'react'

const LogoDesc = ({ logo, desc, fontName }) => (
    <div id="LogoDesc" className="logoDescContainer">
        <img className="box" src={logo}></img>
        <div className="align-self">
            <p className="paraLogoClassName">
                <span
                    className="spanLogoClassName"
                    style={{ fontFamily: fontName }}
                >
                    {desc}
                </span>
            </p>
        </div>
    </div>
)

export default LogoDesc
