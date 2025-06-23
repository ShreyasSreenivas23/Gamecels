// client/src/pages/GameCatalog.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const CatalogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  width: 300px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const GameCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GameImage = styled.div`
  height: 200px;
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.md};
  margin-bottom: 1rem;
`;

const GameTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.heading};
`;

const GamePrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

function GameCatalog() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <CatalogContainer>
      <h1>Game Catalog</h1>
      
      <FilterSection>
        <SearchInput 
          type="text"
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FilterSection>

      <GamesGrid>
        {games.map((game) => (
          <GameCard key={game._id}>
            <GameImage />
            <GameTitle>{game.title}</GameTitle>
            <GamePrice>${game.price}</GamePrice>
            <Button variant="primary" fullWidth>
              Add to Cart
            </Button>
          </GameCard>
        ))}
      </GamesGrid>
    </CatalogContainer>
  );
}

export default GameCatalog;
