import styled from 'styled-components';
import { asideCloseWidth, asideOpenWidth, transitionTime } from '../style';
import { PushPinOutlined } from '@mui/icons-material';
import Logo from './Logo';
import { MouseEventHandler } from 'react';

interface asideProps {
  $close: boolean;
  pinHandle: MouseEventHandler;
  ref?: any;
}
interface pinIconProps {
  onClick: Function;
}

// style component
const StyledLogo = styled(Logo)``;
const IconPushPin = styled(PushPinOutlined)<pinIconProps>`
  cursor: pointer;
  position: absolute;
  bottom: ${asideCloseWidth}px;
  right: ${asideCloseWidth}px;
  font-size: 14px;
`;
const FixedAside = styled('aside')<Partial<asideProps>>`
  position: fixed;
  height: 100vh;
  background-color: #14a2ff;
  transition: left ${transitionTime};
  z-index: 2;
  width: ${asideOpenWidth}px;
  padding: 5px ${asideCloseWidth}px;
  left: calc(${(props) => (props.$close ? `${asideCloseWidth - asideOpenWidth}px` : '0')});
  &:hover {
    left: 0;
  }
  ${StyledLogo} {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%);
  }
  ${IconPushPin} {
    color: ${(props) => (props.$close ? '#ebebebaa' : '#ffffffff')};
    transform: rotate(${(props) => (props.$close ? '45deg' : '0')});
  }
`;

// COMPONENT
export default function Aside(props: asideProps) {
  return (
    <FixedAside $close={props.$close}>
      <StyledLogo $color="#deebff" />
      <IconPushPin onClick={props.pinHandle} />
    </FixedAside>
  );
}
