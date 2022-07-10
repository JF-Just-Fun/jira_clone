import { useEffect, useRef, useState, MouseEvent } from 'react';
import {
  Aside,
  Header,
  Container,
  Content,
  IconPushPin,
  LogoSvg,
  TopTitle,
  Navigator,
  SecurityArea,
  UserControl,
  UserAvatar,
  UserOptionPopper,
} from './style';
import { MenuItem, useScrollTrigger, Divider, MenuList, ClickAwayListener, Popper, Grow } from '@mui/material';

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

  const anchorEl = useRef<HTMLDivElement>(null);
  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    handleMenuToggle();
  };
  const handleMenuToggle = () => {
    setUserOption((preValue) => !preValue);
  };

  const [userOption, setUserOption] = useState<boolean>(false);

  return (
    <>
      <Aside $close={asideClose}>
        <LogoSvg $color="#deebff" />
        <IconPushPin onClick={handleAsidePin} />
      </Aside>
      <Container ref={containerRef} $close={asideClose}>
        <Header>
          <TopTitle>
            <SecurityArea>
              <LogoSvg $color="#14a2ff" $size={86} />
              <UserControl ref={anchorEl} onClick={handleMenuClick}>
                <UserAvatar src="https://mui.com/static/images/avatar/3.jpg" variant="rounded">
                  user
                </UserAvatar>
                <span>user name</span>
              </UserControl>

              <UserOptionPopper open={userOption} anchorEl={anchorEl.current} placement="bottom-end" disablePortal>
                <ClickAwayListener onClickAway={handleMenuToggle}>
                  <MenuList
                    autoFocusItem={userOption}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={() => console.log('=> asdasd')}
                  >
                    <MenuItem onClick={handleMenuToggle}>账户信息</MenuItem>
                    <MenuItem onClick={handleMenuToggle}>消息通知</MenuItem>
                    <MenuItem onClick={handleMenuToggle}>系统设置</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleMenuToggle}>退出登录</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </UserOptionPopper>
            </SecurityArea>
          </TopTitle>
          <Navigator>
            <SecurityArea></SecurityArea>
          </Navigator>
        </Header>
        <Content>
          <SecurityArea></SecurityArea>
        </Content>
      </Container>
    </>
  );
}
