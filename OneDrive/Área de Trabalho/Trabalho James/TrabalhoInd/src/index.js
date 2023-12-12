import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CalendarioDeHorarios from './pages/CalendarioDeHorarios';
import CadastroCurso from './pages/CadastroCurso'; 
import CadastroDePeriodo from './pages/CadastroDePeriodo'; 
import CadastroProfessor from './pages/CadastroProfessor'; 
import CadastroDeSalas from './pages/CadastroDeSalas'; 
import CadastroDeDesafio from './pages/CadastroDeDesafio'; 
import Home from './Home'
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Inicio from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/CadastroCurso' element={<CadastroCurso />} />
        <Route path='/CadastroDeDesafios' element={<CadastroDeDesafio />} />
        <Route path='/CadastroDePeriodo' element={<CadastroDePeriodo />} />
        <Route path='/CadastroProfessor' element={<CadastroProfessor />} />
        <Route path='/CadastroDeSalas' element={<CadastroDeSalas />} />
        <Route path='/CalendarioDeHorarios' element={<CalendarioDeHorarios />} />
      </Routes>
    </BrowserRouter>
  </div>
);

//reportWebVitals();
