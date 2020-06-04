import React, { Component } from "react";
import { Card, Grid, Button, BgHero } from "kk-design-system";
import styled from "styled-components";
import FeatureOne from "../assets/statement-feature.png";
import FeatureTwo from "../assets/heron-feature.png";
import FeatureThree from "../assets/shoe-feature.png";
import { items } from "./../assets/data";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeContainer id="home-page">
        <h1 className="u-sr-only">tota by kk</h1>
        <section className="page-section featured-section">
          <BgHero bgColor={`var(--kk-blue)`} bgSize={90}>
            <h2 className="section-title title-feature">
              Hazure <div className="title-feature-s">Heat</div>
            </h2>
            <div className="featured-items-grid">
              <Grid colClass="two-col">
                <div className="featured-items-grid__item featured-items-grid__item--left">
                  <a href="/detail/statement-tee">
                    <img className="" src={FeatureOne} />
                    <div className="featured__item--text f-heading-2">
                      statement tee | $40
                    </div>
                  </a>
                </div>
                <div className="featured-items-grid__item featured-items-grid__item--right">
                  <a href="/detail/hazure-starfire">
                    <img className="" src={FeatureTwo} />
                  </a>
                  <a href="/detail/hazure-starfire">
                    <img className="" src={FeatureThree} />
                    <div className="featured__item--text f-heading-2">
                      hazure starfire
                    </div>
                  </a>
                </div>
              </Grid>
            </div>
          </BgHero>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">The Collection</h2>
            <div className="more-item-grid">
              <Grid colClass="three-col">
                {Object.keys(items)
                  .slice(2)
                  .map((item) => {
                    return (
                      <Card
                        noText
                        url={`/detail/${item}`}
                        tag={items[item].onSale ? "on sale" : ""}
                        title={items[item].name}
                        description={items[item].price}
                        image={items[item].image}
                      />
                    );
                  })}
              </Grid>
            </div>
            <div className="more-btn-wrapper">
              <Button>more items</Button>
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
    color: var(--kk-neutral);
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
    > * {
      height: 100%;

      img {
        height: 100%;
      }
    }
  }

  .featured-items-grid__item--right {
    > * {
      height: 50%;

      img {
        height: 100%;
      }

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
