import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather'

function ThreeDOverlay({ data, removeOverlay }) {
    return (
        <div className="overlay">
            <Icon.X
                className="overlay-close"
                onClick={(e) => removeOverlay()}
            />
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        id="iframe-wrapper"
                        className="iframe-wrapper"
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.primary.embed_url.html,
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ThreeDOverlay
