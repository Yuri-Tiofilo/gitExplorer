import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';
import Logo from '../../assets/logo.svg';

import {
  Title,
  LogoImage,
  Form,
  Button,
  Repositories,
  LinkPage,
  Avatar,
  Infos,
  TitleRepo,
  Description,
  IconMoreDetails,
  Error,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GitHubExplorer: repos');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer: repos',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/repositorio');
      return;
    }
    try {
      const { data } = await api.get<Repository>(`repos/${newRepo}`);

      const repository = data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('erro na busca pelo reposiório');
    }
  }

  return (
    <>
      <LogoImage src={Logo} alt="logo" />
      <Title>Explore repositorios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(text) => {
            setNewRepo(text.target.value);
          }}
          placeholder="Digite o nome de um repositorio"
        />
        <Button type="submit">Pesquisar</Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <LinkPage
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <Avatar
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <Infos>
              <TitleRepo>{repository.full_name}</TitleRepo>
              <Description>{repository.description}</Description>
            </Infos>
            <IconMoreDetails />
          </LinkPage>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
