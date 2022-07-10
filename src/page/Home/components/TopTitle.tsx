import styled from 'styled-components';
import { SecurityArea } from '../style';
import { MenuItem, Divider, MenuList, ClickAwayListener, Avatar, Popper } from '@mui/material';
import { useRef, useState, MouseEvent } from 'react';
import LogoSvg from './LogoSvg';

// style component
const Title = styled('div')`
  height: 60%;
  border-bottom: 1px solid #f0f0f0;
`;
const UserAvatar = styled(Avatar)``;
const UserControl = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${UserAvatar} {
  }
  & span {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const UserOptionPopper = styled(Popper)`
  background-color: #ffffff;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
`;

// COMPONENT
export default function TopTitle() {
  const anchorEl = useRef<HTMLDivElement>(null);
  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    handleMenuToggle();
  };
  const handleMenuToggle = () => {
    setUserOption((preValue) => !preValue);
  };

  const [userOption, setUserOption] = useState<boolean>(false);

  return (
    <Title>
      <SecurityArea>
        <LogoSvg $color="#14a2ff" $size={86} />
        <UserControl ref={anchorEl} onClick={handleMenuClick}>
          <UserAvatar src="https://mui.com/static/images/avatar/3.jpg" variant="rounded">
            user name
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
    </Title>
  );
}
