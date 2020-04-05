import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/MessageList';

const messages = [{
  message: 'Esto es un mensaje',
  source: 'http://original/mesage/url',
  hashtags: [ 'AyudaAlimentosCoronavirus', 'Madrid', 'Legazpi' ]
}, {
  message: 'Esto es otro mensaje',
  source: 'http://original/mesage/url',
  hashtags: [ 'AyudaAlimentosCoronavirus', 'SantiagoDeCompostela', 'Sar' ]
}, {
  message: 'Esto es un mensaje más',
  source: 'http://original/mesage/url',
  hashtags: [ 'AyudaAlimentosCoronavirus', 'Madrid', 'Usera' ]
}];
const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(<MessageList messages={messages} />, container);
