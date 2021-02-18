import hamburgerMenu from './modules/hamburgerMenu.js';
import observerAnimation from './modules/observerAnimation.js';
import observerCounter from './modules/observerCounter.js';
import stickyHeader from './modules/stickyHeader.js';
import mobileScreen from './modules/mobileScreen.js';
import carousel from './modules/carousel.js';

function init() {
	mobileScreen();
	carousel();
	hamburgerMenu();
	observerAnimation();
	observerCounter();
	stickyHeader();
}

window.addEventListener('load', init);