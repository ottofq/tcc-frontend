import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, MenuItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/modules/auth/actions';
import * as S from './styles';
import avatar from '../../assets/avatar.png';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const user = useSelector(state => state.user);
  const dispath = useDispatch();

  const handleLogout = () => {
    dispath(logout());
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

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Header>
      <S.Container>
        <S.ContainerTitle>
          <button onClick={() => openMenu()} type="button">
            <Menu size={32} />
          </button>
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

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
