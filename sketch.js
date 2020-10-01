const base10input = document.querySelector('#base10input');
const base16input = document.querySelector('#base16input');

base10input.addEventListener('input', () => {
    const base10num = parseFloat(base10input.value);
    const base16num = base10num.toString(16);
    base16input.value = base16num;
})

base16input.addEventListener('input', () => {
    const base16num = parseInt(base16input.value, 16);
    const base10num = base16num;
    base10input.value = base10num;
})

