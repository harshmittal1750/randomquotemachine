import React, { useState, useEffect } from "react";
import { getQuoteCategory } from "../api/axios";
import { Card } from "react-bootstrap";
const CardList = () => {
  const [getImgURL, setImgURL] = useState();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getQuoteCategory()
      .then((res) => {
        console.log(res.contents.categories);
        setCards(res.contents.categories);
        setImgURL(res.baseurl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(cards);
  return (
    <div className="container mx-auto row">
      {cards.map((card) => {
        return (
          <div className="col  ">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${getImgURL}${card.background}`} />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
