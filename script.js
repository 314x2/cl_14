document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        const newLeft = Math.random() * (window.innerWidth - 80);
        const newTop = Math.random() * (window.innerHeight - 80);
        el.style.left = newLeft + 'px';
        el.style.top = newTop + 'px';
    });
});

document.querySelectorAll('.foo').forEach(function (el) {
    function moveToRandomInHouse() {
        const minX = window.innerWidth * 0.54;
        const maxX = window.innerWidth * 0.83 - 40;
        const minY = window.innerHeight * 0.47;
        const maxY = window.innerHeight * 0.73 - 40;

        const newLeft = minX + Math.random() * (maxX - minX);
        const newTop = minY + Math.random() * (maxY - minY);

        el.style.left = newLeft + 'px';
        el.style.top = newTop + 'px';
    }

    el.addEventListener('mouseover', moveToRandomInHouse);

    moveToRandomInHouse();
});
