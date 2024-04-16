import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  && h2 {
    color: var(--Reseda-green);
    font-size: 1rem;
  }
`;

const NovedadContainer = styled.div`
  overflow: hidden;
  width: 100%; // Ajusta el ancho del contenedor si es necesario
  height: auto; // Ajusta la altura del contenedor si es necesario
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Duración y estilo de la transición
  transform: translateX(${props => props.translateX}%); // Controla la posición de la animación
`;

const Novedad = styled.div`
  min-width: 100%; // Ajusta el ancho de cada tarjeta
  background-color: var(--WhiteSmoke);
  padding: 0rem;
  margin: 0.5rem;
  color: var(--Reseda-green);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
  }
  
  h3 {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const Novedades = () => {
  // Lista de tarjetas (puedes personalizar estas tarjetas con tus propios datos)
  const cards = [
    {
      id: 1,
      image: "https://lalibrearteylibros.files.wordpress.com/2020/07/ya-estamso.png",
      title: "Card Title 1",
      description: "Description of Card 1",
    },
    {
      id: 2,
      image: "./assets/Novedad2.png",
      title: "Card Title 2",
      description: "Description of Card 2",
    },
    // Agrega más tarjetas según sea necesario
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Función para rotar a la siguiente tarjeta
  const rotateCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Usar un efecto para rotar las tarjetas automáticamente a intervalos regulares
  useEffect(() => {
    const interval = setInterval(rotateCard, 3000); // Cambia la tarjeta cada 3 segundos

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Título del componente */}
      <Title><h2>Novedades</h2></Title>
      {/* Contenedor para las tarjetas */}
      <NovedadContainer>
        {/* Contenedor de las tarjetas con el efecto de movimiento */}
        <SlideContainer translateX={-currentCardIndex * 100}>
          {cards.map((card) => (
            <Novedad key={card.id}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Novedad>
          ))}
        </SlideContainer>
      </NovedadContainer>
    </div>
  );
};

export default Novedades;
