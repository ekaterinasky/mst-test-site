document.addEventListener('DOMContentLoaded', function() {
	const mainNav = document.querySelector('.main-nav');
	const pageHeader = document.querySelector('.page-header');

	// Вычисляем высоту навигации
	const navHeight = mainNav.offsetHeight;

	// Делаем навигацию фиксированной при скролле
	window.addEventListener('scroll', function() {
	  if (window.scrollY > navHeight) {
		mainNav.classList.add('fixed-nav');
		// Добавляем отступ для основного контента, равный высоте навигации
		pageHeader.style.paddingTop = navHeight + 'px';
	  } else {
		mainNav.classList.remove('fixed-nav');
		pageHeader.style.paddingTop = '0';
	  }
	});
  });
