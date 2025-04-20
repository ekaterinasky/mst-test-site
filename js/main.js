document.addEventListener('DOMContentLoaded', function() {
	const mainNav = document.querySelector('.main-nav');
	const pageHeader = document.querySelector('.page-header');
	const burgerBtn = document.querySelector('.burger-btn');
	const siteNav = document.querySelector('.site-navigation');

	// Функция для управления фиксированной навигацией
	function handleFixedNav() {
	  // Только для десктопов (шире 1024px)
	  if (window.innerWidth > 1024) {
		const navHeight = mainNav.offsetHeight;

		if (window.scrollY > navHeight) {
		  mainNav.classList.add('fixed-nav');
		  pageHeader.style.paddingTop = navHeight + 'px';
		} else {
		  mainNav.classList.remove('fixed-nav');
		  pageHeader.style.paddingTop = '0';
		}
	  } else {
		// На планшетах и мобильных убираем фиксированную навигацию
		mainNav.classList.remove('fixed-nav');
		pageHeader.style.paddingTop = '0';
	  }
	}

	// Функция для управления бургер-меню
	function handleBurgerMenu() {
	  // Только для мобильных (до 768px)
	  if (window.innerWidth <= 768) {
		if (!burgerBtn) return;

		burgerBtn.addEventListener('click', function() {
		  this.classList.toggle('active');
		  siteNav.classList.toggle('active');

		  // Блокировка скролла при открытом меню
		  document.body.style.overflow = siteNav.classList.contains('active') ? 'hidden' : '';
		});

		// Закрытие меню при клике на ссылку
		document.querySelectorAll('.site-navigation__link').forEach(link => {
		  link.addEventListener('click', () => {
			burgerBtn.classList.remove('active');
			siteNav.classList.remove('active');
			document.body.style.overflow = '';
		  });
		});
	  } else {
		// На планшетах и десктопах убираем классы бургера
		if (burgerBtn) burgerBtn.classList.remove('active');
		if (siteNav) siteNav.classList.remove('active');
		document.body.style.overflow = '';
	  }
	}

	// Инициализация при загрузке
	handleFixedNav();
	handleBurgerMenu();

	// Обработчики событий
	window.addEventListener('scroll', function() {
	  handleFixedNav();

	  // На мобильных закрываем меню при скролле
	  if (window.innerWidth <= 768 && siteNav.classList.contains('active')) {
		burgerBtn.classList.remove('active');
		siteNav.classList.remove('active');
		document.body.style.overflow = '';
	  }
	});

	window.addEventListener('resize', function() {
	  handleFixedNav();
	  handleBurgerMenu();
	});

	// Закрытие меню при клике вне области
	document.addEventListener('click', function(e) {
	  if (window.innerWidth <= 768 && burgerBtn && siteNav) {
		const isClickInside = burgerBtn.contains(e.target) || siteNav.contains(e.target);

		if (!isClickInside && siteNav.classList.contains('active')) {
		  burgerBtn.classList.remove('active');
		  siteNav.classList.remove('active');
		  document.body.style.overflow = '';
		}
	  }
	});
  });
