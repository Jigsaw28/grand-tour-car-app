import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
max-width: 1440px;
margin-right: auto;
margin-left: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-family: ManropeMedium;
  font-weight: 500;
  line-height: 1.33;
  color: ${props => (props.$active ? '#3470ff' : '#121417')};
  text-decoration: ${props => (props.$active ? 'underline' : 'none')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);;

  &:focus, &:hover {
    color: #3470ff;
    text-decoration: underline;
  }
`;
