const input = document.querySelector('input');

const p = document.querySelector('p')

input.addEventListener('input', function (e) {
    p.innerText = e.target.value
})
