import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import { RestaurantMenu, Announcement, People } from '@material-ui/icons';

import logo from '../../assets/logo_sem_texto.png';

import { Container, SidebarLink, Title } from './styles';
import { menuLinks, newsLinks, studentLinks } from './links';

export default function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Container isMenuOpen={isMenuOpen}>
      <img src={logo} alt="UFES" />
      <nav>
        <ul>
          <li>
            <Title>
              <RestaurantMenu />
              <h2>Cardápio</h2>
            </Title>
          </li>
          {menuLinks.map(link => (
            <li key={link.label}>
              <SidebarLink
                onClick={showMenu}
                exact
                activeClassName="active"
                to={link.url}
              >
                <div>
                  {link.icon}
                  <h3>{link.label}</h3>
                </div>
              </SidebarLink>
            </li>
          ))}
          <li>
            <Divider />
          </li>
          <li>
            <Title>
              <Announcement />
              <h2>Noticias</h2>
            </Title>
          </li>
          {newsLinks.map(link => (
            <li key={link.label}>
              <SidebarLink
                exact
                onClick={showMenu}
                activeClassName="active"
                to={link.url}
              >
                <div>
                  {link.icon}
                  <h3>{link.label}</h3>
                </div>
              </SidebarLink>
            </li>
          ))}
          <li>
            <Divider />
          </li>
          <li>
            {' '}
            <Title>
              <People />
              <h2>Alunos</h2>
            </Title>
          </li>

          {studentLinks.map(link => (
            <li key={link.label}>
              <SidebarLink
                exact
                onClick={showMenu}
                activeClassName="active"
                to={link.url}
              >
                <div>
                  {link.icon}
                  <h3>{link.label}</h3>
                </div>
              </SidebarLink>
            </li>
          ))}
          <li>
            <Divider />
          </li>
        </ul>
      </nav>
    </Container>
  );
}

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
