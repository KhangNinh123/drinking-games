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
    // Danh sách file cụ thể cho slider Sài Gòn
    const saigonFiles = [
        'labai-02.png', 'labai-03.png', 'labai-04.png', 'labai-05.png', 'labai-06.png',
        'labai-07.png', 'labai-08.png', 'labai-09.png', 'labai-10.png', 'labai-11.png',
        'labai-12.png', 'labai-13.png', 'labai-14.png', 'labai-15.png', 'labai-16.png',
        'labai-17.png', 'labai-18.png', 'labai-19.png', 'SÀIGON-02-02.png', 'SÀIGON-02-03.png'
    ];

    // Danh sách file cụ thể cho slider Vũng Tàu
    const vungtauFiles = [
        'Thẻ Bài Vũng Tàu 60x89mm-01.png', 'Thẻ Bài Vũng Tàu 60x89mm-02.png', 'Thẻ Bài Vũng Tàu 60x89mm-03.png',
        'Thẻ Bài Vũng Tàu 60x89mm-04.png', 'Thẻ Bài Vũng Tàu 60x89mm-05.png', 'Thẻ Bài Vũng Tàu 60x89mm-06.png',
        'Thẻ Bài Vũng Tàu 60x89mm-07.png', 'Thẻ Bài Vũng Tàu 60x89mm-08.png', 'Thẻ Bài Vũng Tàu 60x89mm-09.png',
        'Thẻ Bài Vũng Tàu 60x89mm-10.png', 'Thẻ Bài Vũng Tàu 60x89mm-11.png', 'Thẻ Bài Vũng Tàu 60x89mm-12.png',
        'Thẻ Bài Vũng Tàu 60x89mm-13.png', 'Thẻ Bài Vũng Tàu 60x89mm-14.png', 'Thẻ Bài Vũng Tàu 60x89mm-15.png',
        'Thẻ Bài Vũng Tàu 60x89mm-16.png', 'Thẻ Bài Vũng Tàu 60x89mm-17.png', 'Thẻ Bài Vũng Tàu 60x89mm-18.png',
        'Thẻ Bài Vũng Tàu 60x89mm-19.png', 'Thẻ Bài Vũng Tàu 60x89mm-20.png', 'Thẻ Bài Vũng Tàu 60x89mm-21.png',
        'Thẻ Bài Vũng Tàu 60x89mm-22.png', 'Thẻ Bài Vũng Tàu 60x89mm-23.png', 'Thẻ Bài Vũng Tàu 60x89mm-24.png',
        'Thẻ Bài Vũng Tàu 60x89mm-25.png', 'Thẻ Bài Vũng Tàu 60x89mm-26.png', 'Thẻ Bài Vũng Tàu 60x89mm-27.png',
        'Thẻ Bài Vũng Tàu 60x89mm-28.png', 'Thẻ Bài Vũng Tàu 60x89mm-29.png', 'Thẻ Bài Vũng Tàu 60x89mm-30.png',
        'Thẻ Bài Vũng Tàu 60x89mm-31.png', 'Thẻ Bài Vũng Tàu 60x89mm-32.png', 'Thẻ Bài Vũng Tàu 60x89mm-33.png',
        'Thẻ Bài Vũng Tàu 60x89mm-34.png', 'Thẻ Bài Vũng Tàu 60x89mm-35.png', 'Thẻ Bài Vũng Tàu 60x89mm-36.png',
        'Thẻ Bài Vũng Tàu 60x89mm-37.png', 'Thẻ Bài Vũng Tàu 60x89mm-38.png', 'Thẻ Bài Vũng Tàu 60x89mm-39.png',
        'Thẻ Bài Vũng Tàu 60x89mm-40.png', 'Thẻ Bài Vũng Tàu 60x89mm-41.png', 'Thẻ Bài Vũng Tàu 60x89mm-42.png',
        'Thẻ Bài Vũng Tàu 60x89mm-43.png', 'Thẻ Bài Vũng Tàu 60x89mm-44.png', 'Thẻ Bài Vũng Tàu 60x89mm-45.png',
        'Thẻ Bài Vũng Tàu 60x89mm-46.png', 'Thẻ Bài Vũng Tàu 60x89mm-47.png', 'Thẻ Bài Vũng Tàu 60x89mm-48.png',
        'Thẻ Bài Vũng Tàu 60x89mm-49.png', 'Thẻ Bài Vũng Tàu 60x89mm-50.png', 'Thẻ Bài Vũng Tàu 60x89mm-51.png'
    ];

    let swiperInstance = null;

    function destroySwiper() {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }

    function renderCardsFromList(folder, fileList) {
        const swiperWrapper = document.querySelector('#swiper-cards .swiper-wrapper');
        if (!swiperWrapper) return;
        swiperWrapper.innerHTML = '';
        for (const file of fileList) {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide flex items-center justify-center';
            const img = document.createElement('img');
            img.src = `../${folder}/${file}`;
            img.style.width = '325px';
            img.style.height = '440px';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '32px';
            img.style.boxShadow = '0 4px 32px rgba(0,0,0,0.18)';
            slide.appendChild(img);
            swiperWrapper.appendChild(slide);
        }
        destroySwiper();
        setTimeout(() => {
            initSwiper();
            if (swiperInstance) {
                swiperInstance.update();
                swiperInstance.slideTo(0);
                if (swiperInstance.autoplay) swiperInstance.autoplay.start();
            }
        }, 0);
    }

    function initSwiper() {
        // Luôn khởi tạo mới
        swiperInstance = new Swiper('#swiper-cards', {
            slidesPerView: 3,
            spaceBetween: 6,
            centeredSlides: false,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    document.getElementById('art1').onclick = function() {
        showModalWithOverlay();
        renderCardsFromList('public/cart_saigon', saigonFiles);
        setTimeout(() => {
            const desc = document.querySelector('.modal-desc');
            if (desc) desc.style.opacity = 1;
        }, 500);
    };
    document.getElementById('art2').onclick = function() {
        showModalWithVtOverlay();
        renderCardsFromList('public/cart_vungtau', vungtauFiles);
        setTimeout(() => {
            const desc = document.querySelector('.modal-desc');
            if (desc) desc.style.opacity = 1;
        }, 500);
    };
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
    img.style.borderRadius = '32px';
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
    slidesPerView: 3,
    spaceBetween: 6,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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