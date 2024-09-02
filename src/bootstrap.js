import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from 'container/store'; // Import store from container app
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(    
 <Provider store={store}>
    <App />
  </Provider>);
