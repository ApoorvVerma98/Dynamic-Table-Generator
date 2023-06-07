import React from 'react';

function NumberTable({ number }) {
  const rows = [];
  for (let i = 1; i <= number; i++) {
    rows.push(<tr key={i}><td>{i}</td></tr>);
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default NumberTable;
