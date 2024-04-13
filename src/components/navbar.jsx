import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Reseda-green);
  padding: 1rem 2rem;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  color: var(--WhiteSmoke);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 0.25rem;
  font-size: 0.75rem;

  &:hover {
    background-color: var(--Reseda-green);
  }
  @media (min-width: 768px){
    padding: 1rem 0.5rem;
    font-size: 1rem;
  }
`;

const Logo = styled.div`
  color: var(--WhiteSmoke);
  font-family: var(--logofont);
  font-size: 20px;
  font-weight: lighter;

  @media (min-width: 768px){
    font-size: 30px;
    font-weight: normal;
}
`;

const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius:100%;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px){
    
}
`;

const SearchInput = styled.input`
  border-radius: 4px;
  border: 1px solid #ccc;
  hidden: true;

  @media (min-width: 768px){
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const SearchButton = styled.button`
  color: var(--WhiteSmoke);
  background-color: var(--Reseda-green), 75%;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--Reseda-green);
  }
`;

const FilterButton = styled.button`
  color: var(--WhiteSmoke);
  background-color: var(--Reseda-green), 75%;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background-color: var(--Reseda-green);
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <LogoImg src="/LogoImg.jfif" alt="Logo" />
        </Link>
        Aromito Librería
      </Logo>
      <SearchContainer>
        <SearchInput type="text" placeholder="Buscar..." />
        <SearchButton>Buscar</SearchButton>
        <FilterButton>Filtro</FilterButton>
      </SearchContainer>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Iniciar sesión</NavLink>
        <NavLink to="/register">Registrarse</NavLink>
        <NavLink to="/cart">Carrito</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;