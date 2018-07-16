import React, { Component } from 'react';
import Nav from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Title from "./components/Title";
import initialFaces from "./faces.json";
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
    faces: [...initialFaces],
    score: 0,
    highestScore:0,
  };

  handleClick = (id, clicked) => {
    let currentState = {...this.state};
    if(clicked===true){
      this.setState({
        score: 0,
        highestScore: currentState.score> this.state.highestScore ? currentState.score : this.state.highestScore,
        faces: initialFaces.map(face=>{
          face.clicked = false;
          return face;
        })
      })
    }
    else{
      // eslint-disable-next-line
      currentState.faces.map((face, index)=>{
        if(face.id===id){
          currentState.faces[index].clicked = true;
        }
      })
      this.setState({
        score: currentState.score+1,
        highestScore: currentState.score> this.state.highestScore ? currentState.score : this.state.highestScore,
        faces: shuffleCards(currentState.faces)
      })
    }
  }
  render() {
    return (
      <div>
      <Nav />
      <Wrapper>
          <div className="App">
            <Container>
            <Title 
              score= {this.state.score}
              highestScore= {this.state.highestScore}
              />
            <Row>
            {this.state.faces.map( faces => (
                <Card
                shuffle={this.handleClick}
                key={faces.id}
                id={faces.id}
                image={faces.image}
                name= {faces.name}
                clicked= {faces.clicked}
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
