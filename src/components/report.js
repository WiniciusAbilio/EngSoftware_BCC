// Report.js
import React from 'react';

const Report = ({ content, onApprove, onReject }) => {
  return (
    <div className="report">
      <p>{content}</p>
      <div className="buttons">
        <button onClick={onApprove} className="approve-btn">Aprovar</button>
        <button onClick={onReject} className="reject-btn">Rejeitar</button>
      </div>
    </div>
  );
};

export default Report;
