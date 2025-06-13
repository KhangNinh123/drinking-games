function showModalWithOverlay() {
    const overlay = document.getElementById('bg-sg-overlay');
    const modal = document.getElementById('modal-bg');
    const desc = document.querySelector('.modal-desc');
    
    // Show overlay first
    overlay.classList.add('active');
    // Show modal after a short delay
    setTimeout(() => {
        modal.classList.add('active');
        setTimeout(() => {
            if (desc) desc.style.opacity = 1;
        }, 500);
    }, 600); // 600ms delay for overlay
}

function showModalWithVtOverlay() {
    const overlay = document.getElementById('bg-vt-overlay');
    const modal = document.getElementById('modal-bg');
    const desc = document.querySelector('.modal-desc');
    
    // Show overlay first
    overlay.classList.add('active');
    // Show modal after a short delay
    setTimeout(() => {
        modal.classList.add('active');
        setTimeout(() => {
            if (desc) desc.style.opacity = 1;
        }, 500);
    }, 600); // 600ms delay for overlay
}

function showModal() {
    // Show background immediately
    document.getElementById('modal-bg').classList.add('active');
    
    // Make description visible after the animation completes
    setTimeout(() => {
        const desc = document.querySelector('.modal-desc');
        if (desc) desc.style.opacity = 1;
    }, 400);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('art1').onclick = showModalWithOverlay;
    document.getElementById('art2').onclick = showModalWithVtOverlay;
    document.getElementById('modal-bg').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.getElementById('bg-sg-overlay').classList.remove('active');
            document.getElementById('bg-vt-overlay').classList.remove('active');
            document.querySelector('.modal-desc').style.opacity = 0;
        }
    };
    // Thêm sự kiện click cho icon cart
    var cartImg = document.querySelector('.cart-img');
    if(cartImg) {
        cartImg.addEventListener('click', function() {
            window.open('https://shopee.vn/masoi.vn?categoryId=100639&entryPoint=ShopByPDP&itemId=23668389652', '_blank');
        });
    }
});