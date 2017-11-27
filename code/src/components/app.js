import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <header>
            <ul>
              <li>Creativity</li>
              <li>Entrepreneurship</li>
              <li>Self</li>
              <li>Culture</li>
              <li>Digital design</li>
              <li>Popular in Medium</li>
              <li>Politics</li>
              <li>More</li>
              <button id="get-started-1" type="button-get-started" >Get started!</button>
            </ul>
        </header>

        <section className="first-box">
          <div className="text1">
            <h1>Interesting ideas that set your mind in motion</h1>
            <p>Hear dirctly from the people that know it best. From tech to politics to creativity and more - whatever your intrested in we´have you covered.</p>
            <div className="buttons">
              <button id="get-started-2" type="button-get-started" >Get started!</button>
              <button id="learn-more" type="button-learn-more" >Learn more!</button>
            </div>
          </div>
          <div className="image-one garden-graphic">

          </div>
        </section>


        <section className="container">

          <div className="box">
            <div className="box-image-puff image-slide"></div>


              <div className="box-text-all">
                  <h3>The boy who tamed the sea</h3>
                  <p className="box-text">At 5.30 am, on any morning I can handle it, I’ll slip out of the dark mouth of my covers and greet through the silver.</p>


                  <div className="byline">
                    <div className="image-circle-1"></div>
                    <div className="byline-writer">
                     <div className="name"><span>Carl Moore </span></div>
                     <div className="date">Oct 27 | 8 min read </div>
                    </div>
                    <div className="bookmark">
                      <img src="/images/bookmark.png"/>
                    </div>

                  </div>
              </div>

          </div>






          <div className="box">
            <div className="box-image-puff image-map"></div>

            <div className="box-text-all">
                <h3>The role of Human Emotions in the Future of Transport</h3>
                <p className="box-text">At 5.30 am, on any morning I can handle it, I’ll slip out of the dark mouth of my covers and greet through the silver.</p>


                <div className="byline">
                  <div className="image-circle-2"></div>
                  <div className="byline-writer">
                   <div className="name"><span>Ben Bland </span></div>
                   <div className="date">Nov 1 | 7 min read </div>
                  </div>
                  <div className="bookmark">
                    <img src="/images/bookmark.png"/>
                  </div>

                </div>
            </div>
          </div>

          <div className="box">
            <div className="box-image-puff image-graphic"></div>
            <div className="box-text-all">
                <h3>The Burning Season</h3>
                <p className="box-text">At 5.30 am, on any morning I can handle it, I’ll slip out of the dark mouth of my covers and greet through the silver.</p>
                <div className="byline">
                  <div className="image-circle-3"></div>
                  <div className="byline-writer">
                   <div className="name"><span>Lindsey Smith </span></div>
                   <div className="date">Nov 9 | 31 min read </div>
                  </div>
                  <div className="bookmark">
                    <img src="/images/bookmark.png"/>
                  </div>

                </div>
            </div>
          </div>

          <div className="box">
            <div className="box-image-puff image-demonstration"></div>
            <div className="box-text-all">
                <h3>The March of the Losers</h3>
                <p className="box-text">At 5.30 am, on any morning I can handle it, I’ll slip out of the dark mouth of my covers and greet through the silver.</p>
                <div className="byline">
                  <div className="image-circle-4"></div>
                  <div className="byline-writer">
                   <div className="name"><span>Henry Wismayer </span></div>
                   <div className="date">Nov 10 | 8 min read </div>
                  </div>
                  <div className="bookmark">
                    <img src="/images/bookmark.png"/>
                  </div>

                </div>
            </div>
          </div>

          

      </section>


      </div>
    )
  }

}

export default App
