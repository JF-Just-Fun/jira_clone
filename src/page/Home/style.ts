import styled from 'styled-components';

export const Aside = styled('aside')`
  position: fixed;
  height: 100vh;
  width: 300px;
  background-color: aqua;
`;
export const Header = styled('header')`
  position: fixed;
  width: calc(100vw - 310px);
  min-width: 1200px;
  left: 300px;
  height: 110px;
  top: 0;
  overflow: hidden;
  background-color: aliceblue;
`;

export const Container = styled('div')`
  position: fixed;
  width: calc(100vw - 320px);
  min-width: 1200px;
  left: 310px;
  height: calc(100vh - 130px);
  top: 120px;
  overflow: auto;
  background-color: antiquewhite;
`;
