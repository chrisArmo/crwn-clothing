import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items.slice(0, 4).map(({ id, ...remainingProps }) => (
        <CollectionItem key={id} {...remainingProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
