import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

import { Header, LogoImage, IconBack } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <LogoImage src={Logo} alt="logo" />
        <Link to="/">
          <IconBack />
          voltar
        </Link>
      </Header>
    </>
  );
};

export default Repository;
