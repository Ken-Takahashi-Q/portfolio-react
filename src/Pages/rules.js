import './rules.scss';
import { useState, useEffect } from 'react';

function Rules({ showRule, setShowRule }) {

  useEffect(() => {
    console.log(showRule)
  }, [showRule])

  return (
    <main>
      <div className="rules">
        <div className="rules-header">
          <h1>RULES</h1>
          <img src={process.env.PUBLIC_URL + "/images/icon-close.svg"} alt="close" onClick={() => setShowRule(false)} />
        </div>
        
      </div>
    </main>
  );
}

export default Rules;
