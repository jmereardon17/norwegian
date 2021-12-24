import React from 'react';
import Card from './Card/Card';

const App = (props) => (
  <>
    <header className="main-header">
      <div className="container">
        <div className="row align-items-center">
          <h1 className="title col-12 col-md-6">Norwegian</h1>
          <nav className="col-12 col-md-6">
            <ul className="main-nav">
              <li className="col"><a className="main-nav__link" href="/">Home</a></li>
              <li className="col"><a className="main-nav__link" href="#">Numbers</a></li>
              <li className="col"><a className="main-nav__link" href="#">Greetings</a></li>
              <li className="col"><a className="main-nav__link" href="#">Conversation</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main>
      <div className="container">
        <div className="row">
          {props.concepts.map(concept => (
            <Card
              key={concept.type}
              type={concept.type}
              title={concept.title}
              text={concept.text}
              date={concept.date}
            />
          ))}
        </div>
      </div>
    </main>
    <footer className="main-footer">
      <div className="container"></div>
    </footer>
  </>
);

export default App;