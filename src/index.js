import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import AOS from "aos"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { extendTheme } from '@chakra-ui/react'
AOS.init({
    offset: 2000,
    delay: 50,
    once: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme=extendTheme({
  colors:{
    blue:"#0062b9",

  }
})
root.render(
  <React.StrictMode>
    <ChakraProvider  theme={theme}>
    
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
