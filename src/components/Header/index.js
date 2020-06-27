import React, { useState, useEffect } from 'react';
import { Avatar, Button, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import avatar from '../../assets/avatar.png';

export default function Header() {
  const [user, setUser] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('@app-ru/user'));
    setUser(userLocalStorage.user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('@app-ru/user');
    history.push('/');
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = () => {
    history.push('/dashboard/profile');
  };

  return (
    <S.Header>
      <S.Container>
        <S.ContainerTitle>
          {/* <button type="button">
            <Menu size={32} />
          </button> */}
          <S.Title>Cardápio RU CCA-UFES</S.Title>
        </S.ContainerTitle>
        <S.ContainerMenu>
          <Button
            variant="text"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <S.ContainerUser>
              <Avatar src={avatar} alt="avatar" />
              <p>{user.nome}</p>
            </S.ContainerUser>
          </Button>
          <S.Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleNavigation}>Ver perfil</MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </S.Menu>
        </S.ContainerMenu>
      </S.Container>
    </S.Header>
  );
}
