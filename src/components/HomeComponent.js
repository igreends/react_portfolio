import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  BreadcrumbItem,
} from "reactstrap";
import Slider from "./SliderComponent";

class Home extends React.Component {
  render() {
    const directory = this.props.campsites.map((item) => {
      return (
        <Card key={item.id} className="col m-3">
          <CardImg src={item.image} alt={item.name} className="mt-3" />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <Slider />
          </div>
        </div>
        <div className="row my-5">{directory}</div>
      </div>
    );
  }
}

export default Home;
