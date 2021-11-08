import styled from "styled-components";

export const Nav = styled.nav`
  padding: 2rem;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  padding: 2rem;

  a {
    color: #920844;
    font-size: 2rem;
    text-decoration: none;

    &:hover,
    &.active {
      text-decoration: underline;
    }
  }
`;
