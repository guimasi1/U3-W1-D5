import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleMovie from "./SingleMovie";

class RowOfMovies extends Component {
  state = {
    arrayOfMovies: [],
  };

  getMovies = () => {
    fetch(this.props.urlToUSe)
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          return res.json();
        } else {
          console.log("not ok ");
          throw new Error("not ok");
        }
      })
      .then((data) => {
        this.setState({ arrayOfMovies: data.Search });
      })
      .catch((err) => {
        console.log(err, "Something went wrong");
      });
  };

  componentDidMount = () => {
    this.getMovies();
  };

  render() {
    const arrayOfOnlySixMovies = this.state.arrayOfMovies.slice(0, 6);
    return (
      <Row xs={1} sm={2} md={3} lg={6} className="text-center text-md-start ">
        {/* Qua mettere un map per stampare diversi singlemovie */}
        {arrayOfOnlySixMovies.map((movie) => (
          <SingleMovie key={movie.imdbID} movie={movie} />
        ))}
      </Row>
    );
  }
}

export default RowOfMovies;
