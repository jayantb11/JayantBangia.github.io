(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var tabLinks = document.querySelectorAll('#experience .tab-link');

		function activate(link) {
			var target = link.getAttribute('data-tab');

			tabLinks.forEach(function (l) {
				var isActive = l === link;
				l.classList.toggle('active', isActive);
				l.setAttribute('aria-selected', isActive);
			});

			document.querySelectorAll('#experience .tab-panel').forEach(function (panel) {
				panel.classList.toggle('active', panel.id === target);
			});
		}

		tabLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				activate(link);
			});
			link.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					activate(link);
				}
			});
		});
	});
})();
