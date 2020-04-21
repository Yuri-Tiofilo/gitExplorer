import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { shade } from 'polished';

interface PropsForm {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  margin-top: 60px;
  max-width: 450px;
  line-height: 56px;
`;

export const LogoImage = styled.img``;

export const Form = styled.form<PropsForm>`
  display: flex;
  margin-top: 30px;
  max-width: 700px;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #eee;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #eee;
  border-right: 0;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 70px;
  background: #04d361;
  border: 0;
  color: #fff;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.03, '#04d356')};
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;
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
