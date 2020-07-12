import React from 'react';

import { useParams } from 'react-router-dom';
import MenuDetails from 'components/MenuDetails';
import { fetchMenu } from 'redux/modules/menu/actions';

const Details = () => {
  const params = useParams();
  const { id } = params;
  return <MenuDetails title="Detalhes do cardápio" fetchMenu={fetchMenu(id)} />;
};

export default Details;
