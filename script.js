
document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        const parent = el.offsetParent;
        const newLeft = Math.random() * (parent.offsetWidth - el.offsetWidth);
        const newTop = Math.random() * (parent.offsetHeight - el.offsetHeight);
        el.style.left = newLeft + 'px';
        el.style.top = newTop + 'px';
    });
});

document.querySelectorAll('.foo').forEach(function (el) {
    function moveToRandomInHouse() {
        const parent = el.offsetParent; 
        const minX = parent.offsetWidth * 0.23;
        const maxX = parent.offsetWidth * 0.61 - el.offsetWidth;
        const minY = parent.offsetHeight * 0.21;
        const maxY = parent.offsetHeight * 0.43 - el.offsetHeight;

        el.style.left = (minX + Math.random() * (maxX - minX)) + 'px';
        el.style.top = (minY + Math.random() * (maxY - minY)) + 'px';
    }
    el.addEventListener('mouseover', moveToRandomInHouse);
    moveToRandomInHouse();
});
