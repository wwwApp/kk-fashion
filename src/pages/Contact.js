import React, { Component } from "react";
import { Card, Grid, Button, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";

class Contact extends Component {
  state = {};
  render() {
    return (
      <ContactContainer id="contact-page">
        <h1 className="u-sr-only">Contact Page</h1>
        contact us page with form
      </ContactContainer>
    );
  }
}

const ContactContainer = styled.div``;

export default Contact;
