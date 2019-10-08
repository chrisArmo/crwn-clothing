import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({
  title,
  imageUrl,
  linkUrl = '',
  size = null,
  history,
  match: { url },
}) => (
  <div
    className={`menu-item${size ? ` ${size}` : ''}`}
    onClick={() => history.push(`${url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>

      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
