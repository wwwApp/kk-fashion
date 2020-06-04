import React, { Component } from "react";
import { Grid, Button, Card, TwoColumnHero } from "kk-design-system";
import styled from "styled-components";
import { items } from "./../assets/data";

class Detail extends Component {
  state = {
    name: "",
    image: "",
    price: "",
  };

  componentDidMount() {
    const url = window.location.href.split("/");
    const currentItemKey = url[url.length - 1];

    this.setState({
      name: items[currentItemKey].name,
      image: items[currentItemKey].image,
      price: items[currentItemKey].price,
    });
  }

  render() {
    return (
      <DetailContainer id="contact-page">
        <h1 className="u-sr-only">Detail Page</h1>
        <section className="page-section">
          <h2 className="section-title u-sr-only">Item view</h2>
          <div className="bg--neutral">
            <TwoColumnHero
              image={this.state.image}
              title={this.state.name}
              description="This limited edition tee features the word Hazure, meaning failure. 
              toto design has a close connection with this word, as it was toto's founding member's first song, which ironically was a huge success."
              btnText="add to cart"
            />
          </div>
        </section>
        <section className="page-section more-item-section">
          <div className="o-container">
            <h2 className="section-title">You Might Like...</h2>
          </div>
          <Grid colClass="three-col">
            {Object.keys(items)
              .slice(5)
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
