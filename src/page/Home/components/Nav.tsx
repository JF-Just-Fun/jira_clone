import styled from 'styled-components';
import { SecurityArea } from '../style';
import { Tabs, Tab } from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface linkTabProps {
  label: string;
  value: string;
}

// style component
const StyledTabs = styled(Tabs)``;
const StyledNav = styled('nav')`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: left;
  user-select: none;
  z-index: 0;
  ${StyledTabs} {
    height: 100%;
    min-height: auto !important;
  }
`;

const LinkTab = (props: linkTabProps) => {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(`${props.value}`);
        document.querySelector('#root')!.scrollIntoView({
          block: 'start',
        });
      }}
      {...props}
    />
  );
};

// COMPONENT
export default function Nav() {
  const location = useLocation();

  const [value, setValue] = useState<string>(location.pathname);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledNav>
      <SecurityArea>
        <StyledTabs value={value} onChange={handleChange}>
          <LinkTab label="HOME" value="/" />
          <LinkTab label="ABOUT" value="/about" />
          <LinkTab label="KANBAN" value="/kanban" />
        </StyledTabs>
      </SecurityArea>
    </StyledNav>
  );
}
