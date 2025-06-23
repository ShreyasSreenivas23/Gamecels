// client/src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: calc(100vh - 70px);
`;

const Hero = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <HeroTitle>Welcome to Gamecels</HeroTitle>
          <HeroSubtitle>
            Your ultimate destination for the latest and greatest games
          </HeroSubtitle>
          <Button as={Link} to="/catalog" variant="secondary">
            Browse Games
          </Button>
        </HeroContent>
      </Hero>

      <FeaturedSection>
        <h2>Why Choose Gamecels?</h2>
        <GridContainer>
          <FeatureCard>
            <h3>Huge Selection</h3>
            <p>Thousands of games across all platforms</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Best Prices</h3>
            <p>Competitive prices and regular sales</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Instant Delivery</h3>
            <p>Get your games instantly after purchase</p>
          </FeatureCard>
        </GridContainer>
      </FeaturedSection>
    </HomeContainer>
  );
}

export default Home;
