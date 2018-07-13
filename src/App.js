import React, { Component } from 'react';
import Nav from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import faces from "./faces.json";
import Container from "./Container";
import Row from "./Row";

function shuffleCards(faces) {
  for (let i = faces.length -1 ; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [faces[i], faces[j]] = [faces[j], faces[i]];
  }
  return faces;
};

class App extends Component {
  state = {
    faces
  };

  render() {
    return (
      <div>
      <Nav />
      <Wrapper>
        
          <div className="App">
            <Container>
            <Row>
            {this.state.faces.map( faces => (
                <Card
                key={faces.id}
                id={faces.id}
                image={faces.image}
                name= {faces.name}
                />
              ))}
                </Row>
             </Container>
          </div>
          </Wrapper>
          </div>
    );
  }
}

export default App;
