import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/54546389?s=60&v=4"
            alt="Samuel"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to={'asas'}>
          <div>
            <strong>madbhj</strong>
            <p>an dja d</p>
          </div>

          <FiChevronRight />
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
