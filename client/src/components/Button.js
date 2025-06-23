// client/src/components/Button.js
import styled, { css } from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  transition: all ${props => props.theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${props => props.variant === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: white;

    &:hover {
      background: ${props => props.theme.colors.secondary};
      transform: translateY(-1px);
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background: transparent;
    color: ${props => props.theme.colors.text};

    &:hover {
      background: ${props => props.theme.colors.background};
    }
  `}

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
