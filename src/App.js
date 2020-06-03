import React from 'react';
import Scrollspy from 'react-scrollspy'
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto&display=swap" rel="stylesheet"/>
        </head>
        <nav className="navbar">
          <Button className="nav_link" href="#section-1">What is happening?</Button>
          <Button className="nav_link" href="#section-2">Why is it happening?</Button>
          <Button className="nav_link" href="#section-3">What can be done?</Button>
          <Button className="nav_link" href="#section-4">How can I help?</Button>
        </nav>
        <div className="general">
          <div className="intro">
            <img height="500px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/1200px-Fist.svg.png" alt="raised fist"></img>
            <h1>Black Lives Matter:</h1>
            <h3>A quick synopsis of the 2020 protests for white people</h3>
          </div>
          <div>
            <div>
              <section className="section1" id="section-1">
                <div>
                  <h1>What is happening?</h1>
                </div>
                <div>
                  <blockquote cite="https://www.naacp.org/latest/naacp-issues-statement-events-surrounding-murder-george-floyd/">
                    The uprising spreading across this country is fueled by systemic racial issues that have been ingrained in the fabric of this nation for decades. As we’ve seen over the last few days, these issues have now manifested into anger, sadness, fear, and confusion. Many throughout the country are left to consider at this moment after watching the horrific footage of George Floyd: When is enough, enough?
                </blockquote>
                </div>
              </section>

              <section className="section2" id="section-2">
                <div>
                  <h1>Why is it happening?</h1>
                </div>
              </section>

              <section className="section1" id="section-3">
                <div>
                  <h1>What do protestors want?</h1>
                </div>
              </section>

              <section className="section2" id="section-4">
                <div>
                  <h1>How can I help?</h1>
                </div>
              </section>

            </div>
            <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4']} currentClassName="is-current">
            </Scrollspy>
          </div>
        </div>
      </div>
    )
  }
}


export default App;