import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';

import {
  Header,
  LogoImage,
  IconBack,
  RepositoriesInfo,
  Issues,
  LinkPage,
  TitleRepo,
  Description,
  IconMoreDetails,
  Infos,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issues[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <LogoImage src={Logo} alt="logo" />
        <Link to="/">
          <IconBack />
          voltar
        </Link>
      </Header>
      {repository && (
        <RepositoriesInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.avatar_url}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoriesInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <Infos>
              <TitleRepo>{issue.title}</TitleRepo>
              <Description>{issue.user.login}</Description>
            </Infos>
            <IconMoreDetails />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
