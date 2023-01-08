const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
  .split('')//split into array
  .map((letter, i)=> `<span style="transition-delay: ${i * 50}ms">${letter}</span>`) //mapping to create array or letter with span
  .join('') //convert back to string
})