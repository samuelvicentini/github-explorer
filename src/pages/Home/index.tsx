import React from 'react';

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
    </>
  );
};

export default Home;
