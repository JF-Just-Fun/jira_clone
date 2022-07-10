import { useEffect, useRef, useState } from 'react';
import { Header, Container, Content, SecurityArea } from './style';
import { useScrollTrigger } from '@mui/material';
import TopTitle from './components/TopTitle';
import TopNav from './components/TopNav';
import Aside from './components/Aside';

export default function Home() {
  const [asideClose, setAsideClose] = useState<boolean>(true);

  const handleAsidePin = () => setAsideClose((preValue) => !preValue);

  const containerRef = useRef<HTMLElement>();
  const scrollTrigger = useScrollTrigger({
    target: containerRef.current,
    threshold: 300,
  });

  useEffect(() => {
    console.log('=> scrollTrigger', scrollTrigger);
  }, [scrollTrigger]);

  return (
    <>
      <Aside $close={asideClose} pinHandle={handleAsidePin} />
      <Container ref={containerRef} $close={asideClose}>
        <Header>
          <TopTitle />
          <TopNav />
        </Header>
        <Content>
          <SecurityArea></SecurityArea>
        </Content>
      </Container>
    </>
  );
}
