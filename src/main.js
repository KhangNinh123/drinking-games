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
            // Ẩn luôn slider 3D khi modal đóng
            document.getElementById('card-slider').classList.add('hidden');
        }
    };
    // Thêm sự kiện click cho icon cart
    var cartImg = document.querySelector('.cart-img');
    if(cartImg) {
        cartImg.addEventListener('click', function() {
            window.open('https://shopee.vn/masoi.vn?categoryId=100639&entryPoint=ShopByPDP&itemId=23668389652', '_blank');
        });
    }
    // Đảm bảo slider 3D luôn ẩn khi modal bị ẩn
    const modal = document.getElementById('modal-bg');
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                if (!modal.classList.contains('active')) {
                    document.getElementById('card-slider').classList.add('hidden');
                }
            }
        });
    });
    if (modal) {
        observer.observe(modal, { attributes: true });
    }

    const charImage = document.querySelector('.char-animation');
    if (charImage) {
        setTimeout(() => {
            charImage.classList.add('fade-complete');
        }, 3000); // Đợi fade hoàn thành
    }
});

// Render 50 slides cho Swiper
const swiperWrapper = document.querySelector('#swiper-cards .swiper-wrapper');
const CARD_COUNT = 50;
if (swiperWrapper && swiperWrapper.children.length === 0) {
  for (let i = 0; i < CARD_COUNT; i++) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide flex items-center justify-center';
    const img = document.createElement('img');
    img.src = '../public/card.jpg';
    img.style.width = '325px';
    img.style.height = '440px';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '18px';
    img.style.boxShadow = '0 4px 32px rgba(0,0,0,0.18)';
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  }
}

// Khởi tạo Swiper Coverflow
let swiperInstance = null;
function initSwiper() {
  if (swiperInstance) return;
  swiperInstance = new Swiper('#swiper-cards', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 1200,
      disableOnInteraction: false,
    },
  });
}

// Khi modal hiện, hiện Swiper
const modal = document.getElementById('modal-bg');
const cardSlider = document.getElementById('card-slider');
const modalObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === 'class') {
      if (modal.classList.contains('active')) {
        cardSlider.classList.remove('hidden');
        initSwiper();
        if (swiperInstance) swiperInstance.autoplay.start();
      } else {
        cardSlider.classList.add('hidden');
        if (swiperInstance) swiperInstance.autoplay.stop();
      }
    }
  });
});
if (modal) {
  modalObserver.observe(modal, { attributes: true });
}