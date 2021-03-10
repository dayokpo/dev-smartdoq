import React from 'react';
import * as Icon from 'react-feather';
function EmptyOverlayModel({ topRightData, removeOverlay }) {
  return (
    <div className="overlay">
      <Icon.X className="overlay-close" onClick={(e) => removeOverlay()}/>
      <div className="rightContainerFlex">
      {topRightData.map((item, index)=> {
        return(<img
          className="box"
          src={item.slide_image.url}
          key={index}
          onClick={() => {
            window.location = item.slide_url.url;
          }}
        />)
      })}
      </div>
    </div>
  );
}

export default EmptyOverlayModel;
