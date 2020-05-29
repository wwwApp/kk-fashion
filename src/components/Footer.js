import React, { Component } from "react";
import styled from "styled-components";
import { Footer } from "kk-design-system";

const KFFooter = (props) => {
  return (
    <FooterWrapper className="footer-wrapper">
      <Footer
        title="Subscribe to our newsletter!"
        description="Make sure you subscribe and receive latest information on upcoming
            festivals and perks!"
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
