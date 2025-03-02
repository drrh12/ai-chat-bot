import React from "react";
import Controller from "./components/Controller";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: hsl(var(--background));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Controller />
    </AppWrapper>
  );
}

export default App;
