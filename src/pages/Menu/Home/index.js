import React from 'react';

import MenuDetails from 'components/MenuDetails';
import { fetchMenu } from 'redux/modules/menu/actions';

const Home = () => {
  return (
    <MenuDetails title="Cardápio mais recente" fetchMenu={fetchMenu('last')} />
  );
};

export default Home;
