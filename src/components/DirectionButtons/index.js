import React from 'react';

import Button from 'src/containers/DirectionButtons/Button';

const DirectionButtons = () => (
  <div className="buttons group">
    {/* on peut continuer à passer des props "à l'ancienne" directement au composant même s'il y a un container entre temps */}
    <Button direction="90deg" />
    <Button direction="180deg" />
    <Button direction="270deg" />
    <Button direction="45deg" />
    <Button direction="72deg" />
  </div>
);

export default DirectionButtons;
