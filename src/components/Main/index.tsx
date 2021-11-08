import Menu from "components/Menu";
import React from "react";

import * as S from "./styles";

const Main = ({ description = "Initial Value" }) => (
  <S.Wrapper>
    <Menu />
    <S.Description>{description}</S.Description>   
  </S.Wrapper>
);

export default Main;
