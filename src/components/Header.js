import React, { Component } from "react";
import styled from "styled-components";
import { Header } from "kk-design-system";
import logoSvg from "./../assets/logo.svg";
import { Link } from "react-router-dom";

const KFHeader = (props) => {
  const logo = (
    <Link to=".">
      <LogoWrapper className="logo">
        <img src={logoSvg} alt="Logo" />
      </LogoWrapper>
    </Link>
  );

  return (
    <HeaderWrapper>
      <Header logo={logo} />
    </HeaderWrapper>
  );
};

const LogoWrapper = styled.div`
  img {
    width: 35px;
  }
`;

const HeaderWrapper = styled.div``;

export default KFHeader;
