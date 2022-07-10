import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: #f1f1f1;
  }
  #root {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
  }
`;
