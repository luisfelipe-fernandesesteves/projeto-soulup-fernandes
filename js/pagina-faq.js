const items = document.querySelectorAll('.item');

items.forEach(item => {
    const botao = item.querySelector('.toggle');

    botao.addEventListener('click', (e) => {
        e.stopPropagation();

        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('ativo');
                i.querySelector('.toggle').textContent = '+';
            }
        });

        item.classList.toggle('ativo');

        botao.textContent = item.classList.contains('ativo') ? '-' : '+';
    });
});