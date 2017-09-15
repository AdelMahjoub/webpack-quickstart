window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  const title = document.createElement('h1');

  title.textContent = 'It Works !';

  root.appendChild(title);
});

