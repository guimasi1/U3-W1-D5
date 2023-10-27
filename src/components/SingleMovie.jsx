import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleMovie extends Component {
  render() {
    return (
      <Col className="mb-3 ">
        <img
          className="single-movie cursor"
          src={this.props.movie.Poster}
          alt="tv-show"
          style={{ height: "100%", width: "100%" }}
        />
      </Col>
    );
  }
}

export default SingleMovie;
