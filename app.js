import { projects } from './data.js';
const ul = document.querySelector('#project-list');
const tpl = document.querySelector('#project-card');
const bar = document.querySelector('#filters');
function render(list) {
  ul.textContent = '';
  for (const p of list) {
    const li = tpl.content.cloneNode(true);
    li.querySelector('h3').textContent = p.title;
    li.querySelector('.tags').textContent = p.tags.join(', ');
    ul.append(li);
  }
}
render(projects);
bar.addEventListener('click', (e) => {
  const tag = e.target.dataset.tag;
  if (!tag) return;

  const filtered = tag === 'all'
    ? projects
    : projects.filter((p) =>
        p.tags.includes(tag));

  render(filtered);
});