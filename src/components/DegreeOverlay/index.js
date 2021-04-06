import React from 'react'
import PropTypes from 'prop-types'
import Iframe from 'react-iframe'
import * as Icon from 'react-feather'

function DegreeOverlay({ removeOverlay, data }) {
    let cName = 'overlay-close'
    // if (data[0]['primary']['move_the_x_to_the_left']) {
    //     cName += ' toggle_x'
    // }
    // const UrlToRender = data.filter(d=>d)
    return (
        <div className="overlay">
            <Icon.X className={cName} onClick={(e) => removeOverlay()} />

            {data.map((item, index) => {
                return (
                    <div
                        id="iframe-wrapper"
                        key={index}
                        className="iframe-wrapper"
                    >
                        <Iframe
                            url={item.website_address?.url}
                            width="100%"
                            height="100%"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="absolute"
                        />
                    </div>
                )
            })}
        </div>
    )
}

DegreeOverlay.defaultProps = {
    modelUrl: '',
}

DegreeOverlay.propTypes = {
    removeOverlay: PropTypes.func,
    modelUrl: PropTypes.string,
}
export default DegreeOverlay
