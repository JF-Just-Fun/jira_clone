import { useEffect, useRef, useState } from 'react';
import { Header, Container, Content } from './style';
import { useScrollTrigger } from '@mui/material';
import Top from './components/Top';
import Nav from './components/Nav';
import Aside from './components/Aside';
import { Outlet } from 'react-router-dom';

export default function Home() {
  const [asideClose, setAsideClose] = useState<boolean>(true);

  const handleAsidePin = () => setAsideClose((preValue) => !preValue);

  const scrollTrigger = useScrollTrigger({
    threshold: 50,
  });

  return (
    <>
      <Aside $close={asideClose} pinHandle={handleAsidePin} />
      <Container $close={asideClose}>
        <Header in={scrollTrigger ? 1 : 0}>
          <Top />
          <Nav />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
}
