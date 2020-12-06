import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, GlobalStyle } from "@rtab/components/utils";
import { Spacer } from "@rtab/components/atoms";
import { Header, Footer, ForkMe } from "@rtab/components/molecules";
import { Home } from "@rtab/components/pages";

const Index = () => (
  <>
    <GlobalStyle />
    <ThemeProvider>
      <Header />
      <ForkMe />
      <Spacer variant="horizontal" size={48} />
      <HomeLayout>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </HomeLayout>
      <Footer />
    </ThemeProvider>
  </>
);

type Props = {
  children: React.ReactNode;
};

const HomeLayout = (props: Props) => <StyledDiv>{props.children}</StyledDiv>;

const StyledDiv = styled.div`
  padding: 24px 48px;
`;

ReactDOM.render(<Index />, document.getElementById("index"));
