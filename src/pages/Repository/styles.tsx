import styled from 'styled-components';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

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

export const RepositoriesInfo = styled.section`
  margin-top: 60px;
  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
      strong {
        font-size: 36px;
        color: #3d3d5d;
      }
      p {
        font-size: 18px;
        color: #3d3d5d;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      & + li {
        margin-left: 60px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #3d3d4d;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;
`;

export const LinkPage = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  display: flex;
  align-items: center;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(20px);
  }

  svg {
    margin-left: auto;
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const Infos = styled.div`
  margin-left: 0 16px;
  flex: 1;
`;

export const TitleRepo = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
`;

export const IconMoreDetails = styled(FiChevronRight).attrs({
  size: 20,
})`
  color: #a8a8b3;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
