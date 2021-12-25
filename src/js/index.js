import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../scss/styles.scss';

const concepts = [
  {
    type: 'numbers',
    title: '1 to 10',
    summary: 'Count from 1 to 10.',
    notes: `<ul class="modal__list">
      <li><span>1) én</span></li>
      <li><span>2) to</span></li>
      <li><span>3) tre <span class="hint">(tray)</span></span></li>
      <li><span>4) fire <span class="hint">(fear-uh)</span></span></li>
      <li><span>5) fem <span class="hint">(fam)</span></span></li>
      <li><span>6) seks <span class="hint">(sax)</span></span></li>
      <li><span>7) sju <span class="hint">(shoo)</span></span></li>
      <li><span>8) åtte <span class="hint">(ott-uh)</span></span></li>
      <li><span>9) ni <span class="hint">(nee)</span></span></li>
      <li><span>10) ti <span class="hint">(tee)</span></span></li>
    </ul>`,
    date: '23.12.21'
  },
  {
    type: 'greeting',
    title: 'Introductions',
    summary: 'Introducing yourself to others.',
    notes: `<ul class="modal__list">
      <li><span>Hi. I'm called Jamie.) Hei. Jeg heter Jamie.</span></li>
      <li><span>Hi. My name is Jamie.) Hei. Mitt navn er Jamie.</span></li>
      <li><span>(Pleased to meet you.) Hyggelig. <span class="hint">(Higg eler)</span></span></li>
    </ul>`,
    date: '23.12.21'
  },
  {
    type: 'conversation',
    title: 'Conversation Starters',
    summary: 'Basic conversational starters.',
    notes: '',
    date: '23.12.21'
  },
  {
    type: 'nouns',
    title: 'Places',
    summary: 'Learn the names of places.',
    notes: '',
    date: '23.12.21'
  },
  {
    type: 'verbs',
    title: 'Actions',
    summary: 'Learn some actions.',
    notes: '',
    date: '23.12.21'
  },
  {
    type: 'adjectives',
    title: 'Descriptive',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    notes: '',
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '11 to 20',
    summary: 'Count from 11 to 20.',
    notes: `<ul class="modal__list">
      <li><span>11) elleve <span class="hint">(elv-uh)</span></span></li>
      <li><span>12) tolv <span class="hint">(toll)</span></span></li>
      <li><span>13) tretten <span class="hint">(treti en)</span></span></li>
      <li><span>14) fjorten <span class="hint">(few-tun)</span></span></li>
      <li><span>15) femten <span class="hint">(famten)</span></span></li>
      <li><span>16) seksten <span class="hint">(sayzun)</span></span></li>
      <li><span>17) sytten <span class="hint">(sutt-un)</span></span></li>
      <li><span>18) atten <span class="hint">(ott-un)</span></span></li>
      <li><span>19) nitten</span></li>
      <li><span>20) tjue <span class="hint">(schew-uh)</span></span></li>
    </ul>`,
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '21 to 30',
    summary: 'Count from 21 to 30.',
    notes: '',
    date: '23.12.21'
  },
  {
    type: 'numbers',
    title: '41 to 50',
    summary: 'Count from 41 to 50.',
    notes: '',
    date: '23.12.21'
  }
];

ReactDOM.render(
  <App concepts={concepts} />,
  document.getElementById('content')
);
