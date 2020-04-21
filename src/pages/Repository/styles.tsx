import styled from 'styled-components';
import { FiChevronsLeft } from 'react-icons/fi';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b4;
    transition: color 0.02s;
    &:hover {
      color: ${shade(0.03, '#a8a8b4')};
    }
  }
  svg {
    margin-right: 4px;
  }
`;

export const LogoImage = styled.img``;

export const IconBack = styled(FiChevronsLeft).attrs({
  size: 20,
})``;
