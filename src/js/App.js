import React, { useEffect } from 'react';
import handleModal from './handleModal';
import Card from './Card/Card';

const App = (props) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', () => handleModal(card, props.concepts)));
  }, []);

  return (
    <div className="container">
      <section id="recent">
          <h2 className="heading">Random Concepts</h2>
          <div className="row">
            {props.concepts.sort(() => 0.5 - Math.random()).slice(0, 6).map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="numbers">
          <h2 className="heading">Numbers</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'numbers').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="greetings">
          <h2 className="heading">Greetings</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'greeting').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="conversation">
          <h2 className="heading">Conversation</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'conversation').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="verbs">
          <h2 className="heading">Verbs</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'verbs').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="nouns">
          <h2 className="heading">Nouns</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'nouns').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
        <section id="adjectives">
          <h2 className="heading">Adjectives</h2>
          <div className="row">
            {props.concepts.filter(concept => concept.type === 'adjectives').map(concept => (
              <Card
                key={concept.type}
                type={concept.type}
                title={concept.title}
                summary={concept.summary}
                date={concept.date}
              />
            ))}
          </div>
        </section>
      <section className="overlay">
        <section className="modal">
          <i className="modal__close fas fa-times"></i>
          <h4 className="modal__title"></h4>
          <section className="modal__text" />
        </section>
      </section>
    </div>
  );
}

export default App;