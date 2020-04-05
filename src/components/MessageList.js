import React from 'react';

function MessageList({messages}) {
  const rows = messages.map((message, index) =>
    <tr key={index}>
      <th scope="row">{message.hashtags.join(', ')}</th>
      <td>{message.message}<br/><br/><a href={message.source} target="_blank">Ver mensage original</a></td>
    </tr>
  );

  return <table>
    <thead>
      <tr>
        <th scope="col">Dónde</th>
        <th scope="col">Mensaje</th>
      </tr>
    </thead>
    <tbody data-testid="messages-list-rows" id="tweets">
      {rows}
    </tbody>
  </table>
}

export default MessageList;
