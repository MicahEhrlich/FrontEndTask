import React from 'react';
import Results from '../../component/Results';
import ReactDOM from 'react-dom/server';
import { flushToHTML } from 'styled-jsx/server';
import data from '../../data.json';

export default (req, res) => {
  if (req.method === 'GET') {
    const app = ReactDOM.renderToString(<Results results={data.results} />);
    const styles = flushToHTML();
    const html = `<!doctype html>
    <html>
      <head>${styles}</head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  }
};
