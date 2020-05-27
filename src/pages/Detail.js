import React, { Component } from "react";
import { Grid, Button, Card, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";

class Detail extends Component {
  state = {};
  render() {
    return (
      <DetailContainer id="contact-page">
        <h1 className="u-sr-only">Detail Page</h1>
        <section className="page-section">
          <h2 className="section-title u-sr-only">Item view</h2>
          <div className="bg--neutral">
            <TwoColumnHero btnText="add to cart" />
          </div>
          <div className="o-container">
            <h3 className="u-sr-only">Details shots of item</h3>
            <div className="detail-image-list">
              <img className="" src="https://picsum.photos/500/500" />
              <img className="" src="https://picsum.photos/500/500" />
              <img className="" src="https://picsum.photos/500/500" />
              <img className="" src="https://picsum.photos/500/500" />
            </div>
          </div>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">others viewed...</h2>
          </div>
          <Grid colClass="three-col">
            <Card noText={true} tag="" url="/detail" />
            <Card noText={true} tag="" url="/detail" />
            <Card noText={true} tag="On sale" url="/detail" />
            <Card noText={true} tag="" url="/detail" />
            <Card noText={true} tag="" url="/detail" />
            <Card noText={true} tag="" url="/detail" />
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
