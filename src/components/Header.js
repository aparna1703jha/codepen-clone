import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import logo from "../asset/Logo.png";

const Container = styled(AppBar)`
  background: #3c3e44;
`;

function Header() {
  return (
    <Container elevation={0}>
      <Toolbar>
        <img className="logo-text" src={logo} alt="" />
      </Toolbar>
    </Container>
  );
}

export default Header;
