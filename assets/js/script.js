document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // ハンバーガーメニューの開閉
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      // ハンバーガーアイコン→Xに変形
      menuBtn.classList.toggle('open');
      
      // スライドダウン/アップ
      mobileMenu.classList.toggle('show');
      
      // hiddenクラスで display:none; の切り替え
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
      } else if (!mobileMenu.classList.contains('show')) {
        // 閉じるアニメ終了後に hiddenを付与
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 400);
      }
    });
  }
});

// ===== スライドショー =====
let currentSlide = 0;
const slideShow = () => {
  const slides = document.querySelectorAll('#slider .slide > div');
  const slideContainer = document.querySelector('#slider .slide');
  const slideBtns = document.querySelectorAll('.slide-btn');

  if (!slides.length) return;

  const activateButton = (index) => {
    slideBtns.forEach((btn, i) => {
      btn.classList.remove('bg-red-600');
      if (i === index) {
        btn.classList.add('bg-red-600');
      }
    });
  };

  const moveSlide = (index) => {
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    activateButton(index);
  };

  slideBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      moveSlide(idx);
    });
  });

  // 初期表示
  moveSlide(0);

  // 必要に応じて自動スライド
  // setInterval(() => {
  //   let nextSlide = (currentSlide + 1) % slides.length;
  //   moveSlide(nextSlide);
  // }, 5000);
};

document.addEventListener('DOMContentLoaded', slideShow);
