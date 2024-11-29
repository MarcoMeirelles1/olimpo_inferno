// src/pages/Home.jsx
import React from 'react';
import ButtonGroup from '../components/ButtonGroup';
import Section from '../components/Section';
import ImageGallery from '../components/ImageGallery';
import TeamPhotos from '../components/TeamPhotos';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="home-page">
      {/* Logo aparece na Home */}
      <NavBar />

      <section className="main-section">
        <div className="overlay">
          <h1>SEJAM BEM-VINDOS AO OLIMPO!</h1>
          <ButtonGroup />
        </div>
      </section>

      <Section title="Força, foco, disciplina" content="A motivação está dentro de você!">
        <ImageGallery />
      </Section>

      <Section title="No OLIMPO, cada treino é um desafio" content="Se desafie e evolua com a gente!">
        <img src="imagem4.jpg" alt="Desafio no OLIMPO" className="section-image" />
      </Section>

      <Section title="Equipe OLIMPO">
        <TeamPhotos />
      </Section>

      <Section title="Motivação e Resultados" content="Conquiste o seu melhor com a nossa equipe de treinadores especializados!">
        <img src="imagem5.jpg" alt="Academia" className="full-width-image" />
      </Section>

      <footer />
    </div>
  );
}

export default Home;
