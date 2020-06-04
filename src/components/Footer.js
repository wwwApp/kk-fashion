import React, { Component } from "react";
import styled from "styled-components";
import { Footer } from "kk-design-system";

const KFFooter = (props) => {
  return (
    <FooterWrapper className="footer-wrapper">
      <Footer
        title="Subscribe to our e-mail updates"
        description="Subscribe and receive latest information on new drops and limited time offers."
        btnText="subscribe"
      />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: var(--kk-black);
  color: var(--kk-white);
`;

export default KFFooter;
