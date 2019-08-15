import styled from 'styled-components';

export const NavIcon = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  height: 40px;
  right: 5%;
  outline: 0;
  position: absolute;
  top: 32px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  width: 35px;
  @media (min-width: 560px) {
    top: 35px;
  }

  @media (min-width: 710px) {
    display: none;
  }
`;
export const NavIconSpan = styled.span`
  background: ${({ theme }) => theme.primaryColorTwo};
  height: 3px;
  left: 0;
  opacity: 1;
  outline: 0;
  position: absolute;
  transform: rotate(0deg);
  transition: .3s ease-in-out;
  width: 100%;

  &:nth-child(1) {
    top: 0px;
    transform-origin: left center;
    ${({ isToggled }) => isToggled &&`
      transform: rotate(45deg);
      top: 0px;
      left: 0px;
    `};
  }

  &:nth-child(2) {
    top: 10px;
    transform-origin: left center;
    ${({ isToggled }) => isToggled &&`
      opacity: 0;
      transform: translateX(-20px);
      width: 0%;
    `};
  }

  &:nth-child(3) {
    top: 20px;
    transform-origin: left center;
    ${({ isToggled }) => isToggled &&`
      transform: rotate(-45deg);
      top: 25px;
      left: 0px;
    `};
  }
`;

export const Nav = styled.nav`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all .3s ease-out;
  text-align: center;
  ${({ isToggled }) => isToggled &&`
    max-height: 600px;
    opacity: 1;
    overflow: hidden;
    transform: translateY(40px);
  `}
  @media (min-width: 710px) {
    display: flex;
    max-height: 100px;
    opacity: 1;
    padding-top: 10px;
    text-align: right;
    transform: translate(0);
  }

`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 710px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  font-size: 22px;
  text-transform: uppercase;
  ${({ isToggled }) => isToggled &&`
    width: 100%;
    @media (min-width: 710px) {
      width: auto;
    }
  `};

  &::nth-last-child(1) {
    padding-bottom: 100px;
    @media (min-width: 710px) {
      padding-bottom: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 710px) {
    display: inline;
    font-size: 16px;
    text-transform: none;
  }

  @media (min-width: 710px) {
    font-size: 20px;
  }
`;