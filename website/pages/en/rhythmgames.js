const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;



class HelloWorld extends React.Component {
    render() {
        return (
            <div className="docMainWrapper wrapper">
              <Container className="mainContainer documentContainer postContainer gamesContainer">
                <h1>Rhythm Games</h1>
                <ul>
                    <li>Listed here are all the rhythm games that I have recorded.</li>
                    <li>Aside from Project Diva Mega Mix, the other games will just be a random incomplete compilation.</li>
                </ul>

                <br></br>
                <div className="game-grid">
                    <GameCard title="Project Diva Mega Mix" 
                        text="Nintendo Switch"
                        image="pdmm.png"
                        link="/docs/pdmm/pdmm-preface">
                    </GameCard>
                    <GameCard title="Beat Saber" 
                        text="Oculus Quest 2"
                        image="beat-saber.jpg"
                        link="/docs/games/beat-saber">
                    </GameCard>
                    <GameCard title="Cytus II" 
                        text="iOS"
                        image="cytus2.jpg"
                        link="/docs/games/cytus2">
                    </GameCard>
                    <GameCard title="Groove Coaster: Wai Wai Party" 
                        text="Nintendo Switch"
                        image="groove-coaster.jpg"
                        link="/docs/games/groove-coaster">
                    </GameCard>
                    <GameCard title="Taiko no Tatsujin: Nintendo Switch Version" 
                        text="Nintendo Switch"
                        image="taiko-switch.jpg"
                        link="/docs/games/taiko-switch">
                    </GameCard>
                </div>
                
              </Container>
            </div>
          );
    }
}

class GameCard extends React.Component {
    render() {
        return (
            <div className="game-card-body ripple">
                <a href={this.props.link}>
                    <img src={'/img/games/' + this.props.image} />
                    <div className="game-card-segment">
                        <div className="title">{this.props.title}</div>
                        <div className="text">Platform: {this.props.text}</div>
                    </div>
                </a>
            </div>
        );
    }
}
  
module.exports = HelloWorld;