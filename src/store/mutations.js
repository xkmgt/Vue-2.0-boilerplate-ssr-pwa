export default {
	TOGGLE_MAIN_MENU_MOBILE (state) {
		state.mainMenuMobile = !state.mainMenuMobile
		document.body.classList.toggle("mainmenu-mobile")
	}
};
