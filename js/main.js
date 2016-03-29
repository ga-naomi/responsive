$(document).ready(pageReady);

	function pageReady() {
		$(".mobile-nav-button").click(toggleMobileNav);
		function toggleMobileNav() {
			$(".mobile-nav").slideToggle();
		}
	}
