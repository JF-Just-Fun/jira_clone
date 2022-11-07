import { useEffect, useRef, useState } from 'react';
import { Header, Container, Content, SecurityArea } from './style';
import { useScrollTrigger, Fab, Fade, Box } from '@mui/material';
import Top from './components/Top';
import Nav from './components/Nav';
import Aside from './components/Aside';
import { Outlet } from 'react-router-dom';
import { KeyboardArrowUp } from '@mui/icons-material';

export default function Home() {
  const [asideClose, setAsideClose] = useState<boolean>(true);

  const handleAsidePin = () => setAsideClose((preValue) => !preValue);

  const scrollTrigger = useScrollTrigger();

  const toTopTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleToTop = () => {
    document.querySelector('#root')?.scrollIntoView({
      block: 'start',
    });
  };

  return (
    <>
      <Aside $close={asideClose} pinHandle={handleAsidePin} />
      <Container $close={asideClose}>
        <Header in={scrollTrigger ? 1 : 0}>
          <Top />
          <Nav />
        </Header>
        <Content>
          {/* <SecurityArea> */}
          <Outlet />
          {/* </SecurityArea> */}
        </Content>
        <Fade in={toTopTrigger}>
          <Box sx={{ position: 'fixed', bottom: 25, right: 25 }} onClick={handleToTop}>
            <Fab variant="circular" size="small">
              <KeyboardArrowUp />
            </Fab>
          </Box>
        </Fade>
      </Container>
    </>
  );
}
