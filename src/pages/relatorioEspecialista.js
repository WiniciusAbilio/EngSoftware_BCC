// ApprovalScreen.js
import React from 'react';
import Report from '../components/report';

const ApprovalScreen = ({ reports, onApprove, onReject }) => {
  return (
    <div className="container">
      <h1>Aprovação de Relatórios</h1>
      {reports.map((report, index) => (
        <Report
          key={index}
          content={report.content}
          onApprove={() => onApprove(index)}
          onReject={() => onReject(index)}
        />
      ))}
    </div>
  );
};

export default ApprovalScreen;
