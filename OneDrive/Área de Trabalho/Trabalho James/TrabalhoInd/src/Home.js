
import React from 'react';
import CalendarioDeHorarios from './pages/CalendarioDeHorarios';
import CadastroCurso from './pages/CadastroCurso';
import CadastroDePeriodo from './pages/CadastroDePeriodo';
import CadastroProfessor from './pages/CadastroProfessor';
import CadastroDeSalas from './pages/CadastroDeSalas';
import CadastroDeDesafio from './pages/CadastroDeDesafio';

const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à pagina de cadastros</h2>
      <p>Nessa pagina voce poderá fazer cadastros e consultar os horarios no calendário</p>

      <div className="secoes">
        <CalendarioDeHorarios />
        <CadastroCurso />
        <CadastroDePeriodo />
        <CadastroProfessor />
        <CadastroDeSalas />
        <CadastroDeDesafio />
      </div>
    </div>
  );
};

export default Home;
