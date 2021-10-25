/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>Just another bored individual who plays video games.</small>
        {/* <small>{props.tagline}</small> */}
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/*<Logo img_src={`${baseUrl}img/undraw_video_streaming.svg`} />*/}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Intro = () => (
      <Block background="light">
        {[
          {
            content:
              `I like to record videos of my lousy gameplays.
              \nAlso, this is a WIP so watch this space!`,
            image: `${baseUrl}img/undraw_gaming.svg`,
            imageAlign: 'right',
            title: 'Hey, it\'s Pigster',
          },
        ]}
      </Block>
    );


    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    const MainBody = () => {
      return (
        <div className="container lightBackground paddingTop paddingBottom">
          <div className="wrapper">
            <div className="gridBlock">
              <div className="blockElement alignCenter imageAlignSide imageAlignRight twoByGridBlock">
                <div className="blockContent">
                  <h2>Hey, Pigster here.</h2>
                  <div className="blockText">
                    I'm a bored pig who started this site on a whim to document my lousy and boring video game plays.<br />
                    <br />
                    This site started because of this game:
                    <br /><br />
                    <div className="buttonRow">
                      <div className="pluginWrapper buttonWrapper">
                        <a className="button" href={docUrl('pdmm/pdmm-preface')}>
                          Project DIVA Mega Mix
                        </a>
                      </div>
                    </div>
                    <br />
                    Check out my other gameplays here:
                    <br /><br />
                    <div className="pluginWrapper buttonWrapper">
                      <a className="button" href='/games'>
                        Games
                      </a>
                    </div>
                    <br />
                    Lastly, I post random updates on this microblog:
                    <br /><br />
                    <div className="pluginWrapper buttonWrapper">
                      <a className="button" href={'https://pigsterchurn.tumblr.com/'}>
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blockImage">
                  <img src={"/img/undraw_gaming.svg"} alt="Project Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    };
    // <a href="/docs/pdmm/pdmm-preface">

    const Introduction = () => {
      return (
        <div className="container paddingBottom wrapper">
          <h2>Hey, Pigster here.</h2>
          <div className="blockText">
            <p>Welcome! This website is where I log my recorded video game plays. <br/>
            I also post about game related stuff on my Tumblr once in a while.</p>
            <div className="updates">
              <a className="button" href="/docs/me">About</a> <a className="button" href="/blog/">Reviews</a> 
              <a className="button" href="/docs/updates">Updates</a>
            </div>
            <br />
          </div>
        </div>
      )
    }

    const MainBody2 = () => {
      return (
        <div className="container whiteBackground paddingTop paddingBottom">
          <div className="wrapper">
          <h2>Stuff in here</h2>
            <div className="cols">
              <div className="game-card-body ripple extra">
                <a href="/rhythmgames">
                    <img src={'/img/pdmm.png'} />
                    <div className="game-card-segment">
                        <div className="title">Rhythm Games</div>
                        <div className="text">Collection of rhythm game plays.</div>
                    </div>
                </a>
              </div>
              <div className="game-card-body ripple extra">
                <a href="/games">
                    <img src={'/img/games.png'} />
                    <div className="game-card-segment">
                        <div className="title">Other Games</div>
                        <div className="text">Check out my other gameplays here.</div>
                    </div>
                </a>
              </div>
              <div className="game-card-body ripple extra">
                <a href="/blog/">
                    <img src={'/img/reviews2.png'} />
                    <div className="game-card-segment">
                        <div className="title">Reviews</div>
                        <div className="text">Short reviews of the video games played.</div>
                    </div>
                </a>
              </div>
              <div className="game-card-body ripple extra">
                <a href="https://pigsterchurn.tumblr.com/">
                    <img src={'/img/tumblr.png'} />
                    <div className="game-card-segment">
                        <div className="title">Tumblr</div>
                        <div className="text">I post random updates (mostly games related) on this microblog.</div>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div className="lightBackground">
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer shrink">
        <Introduction/>
        <MainBody2/>
        {/*<Intro />
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
        <Showcase />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
