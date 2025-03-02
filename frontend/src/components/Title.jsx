import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background-color: hsl(var(--background));
  border-bottom: 1px solid hsl(var(--border));
`;

const TitleText = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  color: hsl(var(--foreground));
  margin: 0;
`;

function Title() {
  return (
    <HeaderContainer>
      <TitleText>AI Chatbot Application</TitleText>
    </HeaderContainer>
  );
}

export default Title;
