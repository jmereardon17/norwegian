const handleModal = (card, concepts) => {
  const overlay = document.querySelector('.overlay');
  const title = overlay.querySelector('.modal__title');
  const text = overlay.querySelector('.modal__text');
  const close = overlay.querySelector('.modal__close');
  const cardTitle = card.querySelector('.card__title').textContent;
  const content = concepts.filter(i => i.title === cardTitle);

  title.textContent = content[0].title;
  text.innerHTML = content[0].notes;
  close.addEventListener('click', () => overlay.style.display = '');
  overlay.style.display = 'block';
}

export default handleModal;