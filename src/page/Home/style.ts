import styled from 'styled-components';

interface containerProps {
  $close: boolean;
}
interface headerProps {
  in: number;
}

export const transitionTime = '0.3s ease-in-out';
export const asideOpenWidth = 60;
export const asideCloseWidth = 5;

export const SecurityArea = styled('div')`
  display: block;
  overflow: hidden;
  max-width: 2400px;
  min-width: 1200px;
  padding: 0 100px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const headerHeight = 110;
export const Header = styled('header')<headerProps>`
  position: relative;
  top: 0;
  height: ${(props) => (props.in ? 61 : headerHeight)}px;
  background-color: #ffffff;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #cbcbcb;
  z-index: 1;
  transition: height 0.3s;
  ${SecurityArea} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const margin = 10;
export const Content = styled('section')`
  position: relative;
  width: calc(100% - ${margin * 2}px);
  min-height: 85vh;
  height: 2000px;
  margin: ${margin + headerHeight}px ${margin}px ${margin}px;
  overflow: auto;
  background-color: #ffffff;
  border-radius: 3px;
  z-index: 0;
`;

export const Container = styled('main')<containerProps>`
  position: relative;
  min-width: 1000px;
  width: calc(100% - ${(props) => (props.$close ? asideCloseWidth : asideOpenWidth)}px);
  margin-left: ${(props) => (props.$close ? asideCloseWidth : asideOpenWidth)}px;
  overflow: hidden;
  z-index: 1;
  background-color: #f1f1f1;
  ${Header} {
    position: fixed;
    left: ${(props) => (props.$close ? asideCloseWidth : asideOpenWidth)}px;
    width: calc(100% - ${(props) => (props.$close ? asideCloseWidth : asideOpenWidth)}px);
  }
`;
