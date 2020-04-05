import React from 'react';
import { screen, render } from '@testing-library/react';
import MessageList from '../src/components/MessageList';

describe('MessageList', () => {
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

  it('has three rows', () => {
    render(<MessageList messages={messages} />);

    expect(screen.queryByTestId('messages-list-rows').children.length).toBe(3);
  });

  it("displays message's message and source", () => {
    render(<MessageList messages={messages} />);

    let row = screen.queryByTestId('messages-list-rows').children[1];

    expect(row.textContent).toContain(messages[1].message);
    expect(row.querySelector("a").getAttribute('href')).toBe(messages[1].source);
    messages[1].hashtags.forEach((tag) => {
      expect(row.textContent).toContain(tag);
    });
  });
});

