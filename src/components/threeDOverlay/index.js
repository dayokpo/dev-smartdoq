import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather';

function ThreeDOverlay({ data, removeOverlay }) {

  const embedHtml = data.three_d_model_embed_url.html;
  return (
    <div className="overlay">

      <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
      <div id="iframe-wrapper" className="iframe-wrapper">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>
    </div>
  )
}

ThreeDOverlay.defaultProps = {
  vlink: '',
}

ThreeDOverlay.propTypes = {
  removeOverlay: PropTypes.func,
}
export default ThreeDOverlay
