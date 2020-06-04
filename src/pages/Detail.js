import React, { Component } from "react";
import { Grid, Button, Card, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";
import FeatureOne from "../assets/statement-feature.png";

class Detail extends Component {
  state = {};
  render() {
    return (
      <DetailContainer id="contact-page">
        <h1 className="u-sr-only">Detail Page</h1>
        <section className="page-section">
          <h2 className="section-title u-sr-only">Item view</h2>
          <div className="bg--neutral">
            <TwoColumnHero 
              image={FeatureOne}
              title="Hazure Statement Tee $40" 
              description="This limited edition tee features the word Hazure, meaning failure. 
              toto design has a close connection with this word, as it was toto's founding member's first song, which ironically was a huge success."
              btnText="add to cart" />
          </div>
          <div className="o-container">
            <h3 className="u-sr-only">Details shots of item</h3>
          </div>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">You Might Like...</h2>
          </div>
          <Grid colClass="three-col">
          <Card noText 
                      tag=""
                      title="toto sole"
                      image="https://i.imgur.com/3a72oZW.jpg" 
                      url="/detail" />
                <Card noText
                      tag="" 
                      title="kk fan coords"
                      image="https://i.imgur.com/0crgomF.jpg"
                      url="/detail" />
                <Card noText={true} 
                      tag="" 
                      title="cargo waders"
                      image="https://i.imgur.com/nYH42oK.jpg"
                      url="/detail" />
          </Grid>
        </section>
      </DetailContainer>
    );
  }
}

const DetailContainer = styled.div`
  .detail-image-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;

    img {
      margin-bottom: 2rem;
      width: 100%;

      @media only screen and (min-width: 768px) {
        max-width: 60%;
      }
    }
  }
`;

export default Detail;
