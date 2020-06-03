import React from 'react';
import Scrollspy from 'react-scrollspy'
import { Button, Card, Row, Col } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import { InfoCircleOutlined, VideoCameraOutlined, DollarCircleOutlined } from '@ant-design/icons';
const { Meta } = Card;

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
          <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto&display=swap" rel="stylesheet" />
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
                <div className="section_inner">
                  <div>
                    <h1>What is happening?</h1>
                  </div>
                  <div>
                    <blockquote cite="https://www.naacp.org/latest/naacp-issues-statement-events-surrounding-murder-george-floyd/">
                      The uprising spreading across this country is fueled by systemic racial issues that have been ingrained in the fabric of this nation for decades. As we’ve seen over the last few days, these issues have now manifested into anger, sadness, fear, and confusion. Many throughout the country are left to consider at this moment after watching the horrific footage of George Floyd: When is enough, enough?
                </blockquote>
                    <div>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Card
                            hoverable
                            cover={<img alt="George Floyd" height="300" src="https://static01.nyt.com/images/2020/05/27/us/27georgefloyd/27georgefloyd-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />}
                            style={{overflow:'hidden'}}
                            actions={[
                              <a title="Learn more" href="https://en.wikipedia.org/wiki/Killing_of_George_Floyd" target="_blank"><InfoCircleOutlined /></a>,
                              <a title="Watch Video (GRAPHIC CONTENT)" href="https://www.youtube.com/watch?v=vksEJR9EPQ8" target="_blank"><VideoCameraOutlined /></a>,
                              <a title="Donate" href="https://www.gofundme.com/f/georgefloyd" target="_blank"><DollarCircleOutlined /></a>,
                            ]}
                          >
                            <Meta title="George Floyd" description="On May 25, 2020, George Floyd, a 46-year-old black man, died in Minneapolis, Minnesota after Derek Chauvin, a white officer, pressed his knee to Floyd's neck for almost nine minutes while Floyd was handcuffed face down on the ground." />
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card
                            hoverable
                            cover={<img alt="Breonna Taylor" height="300" src="https://www.gannett-cdn.com/presto/2020/03/16/PLOU/80f13613-aaa9-489c-ab65-4fe24dbdb258-Breonna_Taylor_1.jpg?crop=479,639,x0,y0&quality=50&width=640" />}
                            actions={[
                              <a title="Learn more" href="https://en.wikipedia.org/wiki/Shooting_of_Breonna_Taylor" target="_blank"><InfoCircleOutlined /></a>,
                              <a title="Donate" href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor" target="_blank"><DollarCircleOutlined /></a>,
                            ]}
                          >
                            <Meta title="Breonna Taylor" description="On March 13, 2020, Breonna Taylor, a 26-year-old African American woman, was fatally shot by Louisville Metro Police Department (LMPD) officers who entered her apartment in plainclothes in Louisville, Kentucky, while serving a 'no-knock warrant'. Gunfire was exchanged between Taylor's boyfriend, Kenneth Walker, and LMPD officers who entered the apartment. Taylor was shot eight times, and Mattingly was injured by gunfire. No drugs were found in the apartment" />
                          </Card>
                        </Col>
                        <Col span={8}>
                          <Card
                            hoverable
                            cover={<img alt="Ahmaud Arbery" src="https://cbsnews3.cbsistatic.com/hub/i/r/2020/05/14/9993eaeb-706b-488b-ae6f-dbce120c699c/thumbnail/640x754/c41bc05f250cafe80a1599f3b0ebb9ef/ahmaud-arbery.jpg" />}
                            actions={[  
                              <a title="Learn more" href="https://en.wikipedia.org/wiki/Shooting_of_Ahmaud_Arbery" target="_blank"><InfoCircleOutlined /></a>,
                              <a title="Watch Video (GRAPHIC CONTENT)" href="https://www.youtube.com/watch?time_continue=3&v=VzPL82QxCks&feature=emb_title" target="_blank"><VideoCameraOutlined /></a>,
                              <a title="Donate" href="https://www.gofundme.com/f/i-run-with-maud" target="_blank"><DollarCircleOutlined /></a>,
                            ]}
                          >
                            <Meta title="Ahmaud Arbery" description="On February 23, 2020, Ahmaud Marquez Arbery, an unarmed 25-year-old African-American man, was fatally shot near Brunswick in Glynn County, Georgia, while jogging on Holmes Road just before entering its intersection with Satilla Drive in the Satilla Shores neighborhood. Arbery had been pursued and confronted by two white residents, Travis McMichael and his father Gregory, who were armed and driving a pickup truck." />
                          </Card>
                        </Col>
                      </Row>


                    </div>
                  </div>
                </div>
              </section>

              <section className="section2" id="section-2">
                <div className="section_inner">
                  <div>
                    <h1>Why is it happening?</h1>
                  </div>
                </div>
              </section>

              <section className="section1" id="section-3">
                <div className="section_inner">
                  <div>
                    <h1>What do protestors want?</h1>
                  </div>
                </div>
              </section>

              <section className="section2" id="section-4">
                <div className="section_inner">
                  <div>
                    <h1>How can I help?</h1>
                  </div>
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