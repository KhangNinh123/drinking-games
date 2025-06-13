function showModalWithOverlay() {
    const overlay = document.getElementById('bg-sg-overlay');
    const modal = document.getElementById('modal-bg');
    const desc = document.querySelector('.modal-desc');
    overlay.classList.add('active');
    setTimeout(() => {
        modal.classList.add('active');
        setTimeout(() => {
            desc.style.opacity = 1;
        }, 800);
    }, 500);
}

function showModal() {
    document.getElementById('modal-bg').classList.add('active');
    setTimeout(() => {
        document.querySelector('.modal-desc').style.opacity = 1;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('art1').onclick = showModalWithOverlay;
    document.getElementById('art2').onclick = showModal;
    document.getElementById('modal-bg').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('bg-sg-overlay').classList.remove('active');
            document.querySelector('.modal-desc').style.opacity = 0;
        }
    };
});