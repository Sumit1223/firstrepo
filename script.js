function changeColor() {
  const colors = ['#f0f0f0', '#ffcccb', '#c1f0f6', '#d1ffd6', '#ffffcc'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
