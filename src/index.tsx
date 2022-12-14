import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlueProvider } from "@glue42/react-hooks";
import Glue from '@glue42/desktop';

ReactDOM.render(
  <React.StrictMode>
    <GlueProvider settings={{
      desktop: {
        factory: (config: any) => {
          return Glue();
        }
      }
    }}>
      <App />
    </GlueProvider>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
