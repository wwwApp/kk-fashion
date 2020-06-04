import React, { Component } from "react";
import { Card, Grid, Button } from "kk-design-system";
import styled from "styled-components";
import FeatureOne from "../assets/statement-feature.png";
import FeatureTwo from "../assets/heron-feature.png";
import FeatureThree from "../assets/shoe-feature.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <h1 className="u-sr-only">tota by kk</h1>
        <section className="page-section featured-section bg--blue">
        <h2 className="section-title title-feature">Hazure <div className="title-feature-s">Heat</div></h2>
        {/* <div className="text-feature f-heading-3--400">toto's newest summer collection presents bright snappy colors mixed with the essence of summer.</div> */}
          <div className="featured-items-grid">
            <Grid colClass="two-col">
              <div className="featured-items-grid__item featured-items-grid__item--left">
                <img className="" src={FeatureOne} />
                <div className="featured__item--text f-heading-2">Statement Tee | $40</div>
              </div>
              <div className="featured-items-grid__item featured-items-grid__item--right">
                <img className="" src={FeatureTwo} />
                <img className="" src={FeatureThree} />
                <div className="featured__item--text f-heading-2">Hazure Starfire</div>
              </div>
            </Grid>
          </div>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">The Collection</h2>
            <div className="more-item-grid">
              <Grid colClass="three-col">
                <Card noText 
                      tag="" 
                      title="Pretty Simple w/ Pockets" 
                      image="https://i.imgur.com/4ktQA4C.jpg" 
                      url="/detail" />
                <Card noText
                      tag=""
                      title="toto x timber"
                      image="https://i.imgur.com/URKPYYH.jpg" 
                      url="/detail" />
                <Card noText 
                      tag="On sale" 
                      title="toto stod"
                      image="https://i.imgur.com/12xPF5H.png"
                      url="/detail" />
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
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
    }
  }

  .featured__item--text {

    position: absolute;
    bottom: 0.5em;
    left: 0.5em;
    color: var(--kk-neutral)

  }



  .text-feature {

    width: 30%;
    position: absolute;
    right: 50%;
  }

  .title-feature {

    padding-left: 10%;
    font-size: 8em;
    
    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }

  }

  .title-feature-s {

    padding-left: 2em;
    color: var(--kk-orange);
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
