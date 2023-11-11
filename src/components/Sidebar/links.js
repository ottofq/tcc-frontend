import React from 'react';
import { Home, ViewList, AddBox, PieChart } from '@material-ui/icons';

export const menuLinks = [
  { label: 'Home', url: '/dashboard', icon: <Home /> },
  {
    label: 'Cadastrar cardápio',
    url: '/dashboard/cardapio/cadastrar',
    icon: <AddBox />,
  },
  {
    label: 'Listagem de cardápios',
    url: '/dashboard/cardapio/listagem',
    icon: <ViewList />,
  },
];

export const newsLinks = [
  {
    label: 'Cadastrar notícia',
    url: '/dashboard/noticias/cadastro',
    icon: <AddBox />,
  },
  {
    label: 'Listagem de notícias',
    url: '/dashboard/noticias/listagem',
    icon: <ViewList />,
  },
];

export const studentLinks = [
  // {
  //   label: 'Listagem de alunos',
  //   url: '/dashboard/aluno/listagem',
  //   icon: <ViewList />,
  // },
  {
    label: 'Gráficos',
    url: '/dashboard/aluno/graficos',
    icon: <PieChart />,
  },
];
