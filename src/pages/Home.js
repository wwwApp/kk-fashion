import React, { Component } from "react";
import { Card, Grid, Button } from "kk-design-system";
import styled from "styled-components";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <h1 className="u-sr-only">KK Fashion</h1>
        <section className="page-section featured-section bg--neutral">
          <h2 className="section-title u-sr-only">Featured items</h2>
          <div className="featured-items-grid">
            <Grid colClass="two-col">
              <div className="featured-items-grid__item featured-items-grid__item--left">
                <img className="" src="https://picsum.photos/500/500" />
              </div>
              <div className="featured-items-grid__item featured-items-grid__item--right">
                <img className="" src="https://picsum.photos/500/500" />
                <img className="" src="https://picsum.photos/500/500" />
              </div>
            </Grid>
          </div>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">Trending items</h2>
            <div className="more-item-grid">
              <Grid colClass="three-col">
                <Card noText={true} tag="" url="/detail" />
                <Card noText={true} tag="" url="/detail" />
                <Card noText={true} tag="On sale" url="/detail" />
                <Card noText={true} tag="" url="/detail" />
                <Card noText={true} tag="" url="/detail" />
                <Card noText={true} tag="" url="/detail" />
              </Grid>
            </div>
            <div className="more-btn-wrapper">
              <Button>More items</Button>
            </div>
          </div>
        </section>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .featured-items-grid__item {
    max-height: 50rem;
    display: flex;
    flex-direction: column;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .featured-items-grid__item--left {
    img {
      height: 100%;
    }
  }

  .featured-items-grid__item--right {
    img {
      height: 50%;

      &:first-child {
        padding-bottom: 2rem;
      }
    }
  }

  .more-btn-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default Home;
