import React from 'react';

const icons = {
  'numbers': 'fas fa-sort-numeric-up-alt',
  'greeting': 'fas fa-comment',
  'conversation': 'fas fa-comments',
  'nouns': 'fas fa-poll-h',
  'adjectives': 'fab fa-adversal',
  'verbs': 'fas fa-align-right'
}

const Card = (props) => (
  <div className="col-12 col-md-4 mb-4">
    <section className={`card card--${props.type}`}>
      <header className="card__header">
        <i className={`card__icon ${icons[props.type]}`} />
        <h2 className="card__title">{props.title}</h2>
      </header>
      <p className="card__text">{props.text}</p>
      <footer className="card__footer">
        <p>Learned on <span className="card__date">{props.date}</span></p>
      </footer>
    </section>
  </div>
);

export default Card;