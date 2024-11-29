import React from 'react';

function ButtonGroup({ navigateTo }) {
  return (
    <div className="buttons">
      <button className="button" onClick={() => navigateTo('produtos')}>Produtos</button>
    </div>
  );
}

export default ButtonGroup;

{/* ok */}