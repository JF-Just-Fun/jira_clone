import styled from 'styled-components';
import { SecurityArea } from '../style';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { useState, SyntheticEvent } from 'react';

interface LinkTabProps {
  label?: string;
  to?: string;
}

// style component
const TabContainer = styled(Tabs)``;
const TabItem = styled(Tab)``;
const Nav = styled('nav')`
  height: 40%;
  display: flex;
  justify-content: left;
  user-select: none;
  ${TabContainer} {
    height: 100%;
    min-height: auto !important;
  }
`;

const LinkTab = (props: LinkTabProps) => {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        console.log('=> click to :', props.to);
      }}
      {...props}
    />
  );
};

// COMPONENT
export default function TopNav() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Nav>
      <SecurityArea>
        <TabContainer value={value} onChange={handleChange}>
          <LinkTab label="home" to="/" />
          <LinkTab label="about" to="/about" />
          <LinkTab label="kanban" to="/kanban" />
        </TabContainer>
      </SecurityArea>
    </Nav>
  );
}
