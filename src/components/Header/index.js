import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
// import { Menu } from '@material-ui/icons';
import { withRouter, Link, useHistory } from 'react-router-dom';

import * as S from './styles';
import avatar from '../../assets/avatar.png';

function Header() {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('@app-ru/user'));
    setUser(userLocalStorage.user);
  }, []);

  function handleLogout() {
    localStorage.removeItem('@app-ru/user');
    history.push('/');
  }

  return (
    <S.Header>
      <S.Container>
        <S.ContainerTitle>
          {/* <button type="button">
            <Menu size={32} />
          </button> */}
          <h1>Cardápio RU CCA-UFES</h1>
        </S.ContainerTitle>
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
    </S.Header>
  );
}

export default withRouter(Header);
