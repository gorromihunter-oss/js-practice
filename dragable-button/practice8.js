  const button = document.querySelector('button');
  let isDragging = false;
  let moved = false;
  let offsetX;
  let offsetY;


  button.addEventListener('pointerdown', (event) => {
    isDragging = true;
    moved = false;
    offsetX = event.clientX - button.getBoundingClientRect().left;
    offsetY = event.clientY - button.getBoundingClientRect().top;
    button.setPointerCapture(event.pointerId);
  });

  button.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    moved = true;
    button.style.left = `${event.clientX - offsetX}px`;
    button.style.top = `${event.clientY - offsetY}px`;
  });

  button.addEventListener('pointerup', (event) => {
    isDragging = false;
    button.releasePointerCapture(event.pointerId);
  });

  button.addEventListener('click', () => {
    alert('You clicked the button!');
  });