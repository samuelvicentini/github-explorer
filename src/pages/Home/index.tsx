import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>
      <S.Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/54546389?s=60&v=4"
            alt="Samuel Vicentini"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              {' '}
              Easy peasy highly scalable ReactJS & React Native forms! rocket
            </p>
          </div>

          <FiChevronRight />
        </a>
      </S.Repositories>
    </>
  );
};

export default Home;
