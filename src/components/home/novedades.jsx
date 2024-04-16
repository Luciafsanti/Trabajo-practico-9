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

`;

const Novedad = styled.div`
  background-color: var(--WhiteSmoke);
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  color: var(--Reseda-green);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    border-radius: 4px;
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
    }
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
      {/* Mostrar la tarjeta actual */}
      <NovedadContainer>
        <Novedad>
          <img src={cards[currentCardIndex].image} alt={cards[currentCardIndex].title} />
          <h3>{cards[currentCardIndex].title}</h3>
          <p>{cards[currentCardIndex].description}</p>
        </Novedad>
      </NovedadContainer>
    </div>
  );
};

export default Novedades;
