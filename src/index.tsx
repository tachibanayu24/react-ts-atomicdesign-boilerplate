import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { ThemeProvider, GlobalStyle } from "@rtab/components/utils";
import { Spacer } from "@rtab/components/atoms";
import { Header, ForkMe } from "@rtab/components/molecules";
import { Home } from "@rtab/components/pages";

const Index = () => (
  <>
    <GlobalStyle />
    <ThemeProvider>
      <Header />
      <ForkMe />
      <Spacer variant="horizontal" size={48} />
      <HomeLayout>
        <Home />
      </HomeLayout>
    </ThemeProvider>
  </>
);

type Props = {
  children: React.ReactNode;
};

const HomeLayout = (props: Props) => <StyledDiv>{props.children}</StyledDiv>;

const StyledDiv = styled.div`
  margin: 24px 48px;
`;

ReactDOM.render(<Index />, document.getElementById("index"));
