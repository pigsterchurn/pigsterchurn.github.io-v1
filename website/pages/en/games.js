const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;



class HelloWorld extends React.Component {
    render() {
        const completedGames = [];
        populateGames();

        function populateGames() {
            completedGames.push({
                title: "A Short Hike",
                text: 'PC (Steam)',
                image: 'a-short-hike.png',
                link: '/docs/games/a-short-hike'
            });
            completedGames.push({
                title: "Celeste",
                text: 'PC (Steam)',
                image: 'celeste.png',
                link: '/docs/games/celeste'
            });
            completedGames.push({
                title: "Crash Bandicoot N. Sane Trilogy",
                text: 'PlayStation 4',
                image: 'crash.png',
                link: '/docs/games/crash-bandicoot'
            });
            completedGames.push({
                title: "Final Fantasy VII Remake",
                text: 'PlayStation 4',
                image: 'ffviir.png',
                link: '/docs/games/ffviir'
            });
            completedGames.push({
                title: "Final Fantasy X HD Remaster",
                text: 'PlayStation 4',
                image: 'ffx.png',
                link: '/docs/games/ffx'
            });
            completedGames.push({
                title: "Final Fantasy X-2 HD Remaster",
                text: 'PlayStation 4',
                image: 'ffx.png',
                link: '/docs/games/ffx2'
            });
            completedGames.push({
                title: "Monster Hunter Stories 2",
                text: 'Nintendo Switch',
                image: 'mhst2.jpg',
                link: '/docs/games/mhst2'
            });
            completedGames.push({
                title: "Spiritfarer",
                text: 'Nintendo Switch',
                image: 'spiritfarer.jpg',
                link: '/docs/games/spiritfarer'
            });
            completedGames.push({
                title: "The Alliance Alive",
                text: 'Nintendo Switch',
                image: 'the-alliance-alive.png',
                link: '/docs/games/the-alliance-alive'
            });
            completedGames.push({
                title: "The Great Ace Attorney Chronicles",
                text: 'Nintendo Switch',
                image: 'tgaac.jpg',
                link: '/docs/games/tgaac'
            });
        }

        const completedGamesList = completedGames.map((game) =>
            <GameCard key={game.title}
                title={game.title}
                text={game.text}
                image={game.image}
                link={game.link}>
            </GameCard>
        );
        return (
            <div className="docMainWrapper wrapper">
              <Container className="mainContainer documentContainer postContainer gamesContainer">
                <h1>Games</h1>
                <ul>
                    <li>Listed here are all the games that I have recorded/streamed.</li>
                    <li>All the streamed playthroughs are not edited at all.</li>
                    <li>My playthroughs will mostly 
                    only cover the main story/campaign (i.e. not 100% playthroughs).</li>
                </ul>

                <h2>Ongoing Playthroughs</h2>
                <div className="game-grid">
                    <GameCard title="NEO: The World Ends with You" 
                        text="Nintendo Switch"
                        image="ntwewy.jpg"
                        link="/docs/games/ntwewy">
                    </GameCard>
                </div>

                <h2>Completed Playthroughs</h2>
                <div className="game-grid">
                    {completedGamesList}
                </div>

                <h2>Paused Playthroughs</h2>
                <p>Incomplete playthroughs that are put on hiatus temporarily.</p>
                <div className="game-grid">
                    <GameCard title="Crash Bandicoot 4: It's About Time" 
                        text="Playstation 4"
                        image="crash-4.jpg"
                        link="/docs/games/crash-bandicoot-4">
                    </GameCard>
                    <GameCard title="Hollow Knight" 
                        text="Steam"
                        image="hollow-knight.jpg"
                        link="/docs/games/hollow-knight">
                    </GameCard>

                    <GameCard title="Mario + Rabbids Kingdom Battle" 
                        text="Nintendo Switch"
                        image="mario-rabbids.png"
                        link="/docs/games/mario-rabbids">
                    </GameCard>
                    
                    <GameCard title="Splatoon 2" 
                        text="Nintendo Switch"
                        image="splatoon-2.png"
                        link="/docs/games/splatoon-2">
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