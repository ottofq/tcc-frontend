import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import * as S from './styles';
import avatar from '../../assets/avatar.png';

function Header({ history }) {
  const [user, setUser] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@app-ru/user'));
    setUser(user.user);
  }, []);

  function handleLogout() {
    localStorage.removeItem('@app-ru/user');
    history.push('/');
  }

  return (
    <StylesProvider injectFirst>
      <S.Container>
        <h1>Cardápio RU CCA-UFES</h1>
        <S.ContainerMenu>
          <S.ContainerUser>
            <Avatar src={avatar} alt="avatar" />
            <p>{user.nome}</p>
          </S.ContainerUser>

          <S.ContainerItems>
            <S.ItemMenu>
              <Link style={{ textDecoration: 'none' }} to="/dashboard/profile">
                Ver dados
              </Link>
            </S.ItemMenu>

            <S.ItemMenu>
              <a
                style={{ textDecoration: 'none' }}
                href="/"
                onClick={handleLogout}
              >
                Sair
              </a>
            </S.ItemMenu>
          </S.ContainerItems>
        </S.ContainerMenu>
      </S.Container>
    </StylesProvider>
  );
}

export default withRouter(Header);
