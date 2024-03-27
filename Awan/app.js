const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

forward.onclick = function () {
	document.getElementById("row").scrollLeft += 100;
};
backward.onclick = function () {
	document.getElementById("row").scrollLeft -= 100;
};

const wordpress = document.getElementById("WordPress");
const magento = document.getElementById("Magento");
const laravel = document.getElementById("Laravel");
const php = document.getElementById("PHP");

wordpress.onclick = function () {
	document.getElementById("change1").innerHTML =
		"The Best Managed Could Hosting for WordPress";

	document.getElementById("change2").innerHTML =
		"We live and breathe WordPress. Our managed hosting for WordPress and WooCommerce takes away cloud server related hassles so you can scale your website the way you want.";
};
magento.onclick = function () {
	document.getElementById("change1").innerHTML =
		"The Best Managed Could Hosting for Magento";

	document.getElementById("change2").innerHTML =
		"We live and breathe Magento. Our managed hosting for Magento and WooCommerce takes away cloud server related hassles so you can scale your website the way you want.";
};
laravel.onclick = function () {
	document.getElementById("change1").innerHTML =
		"The Best Managed Could Hosting for Laravel";

	document.getElementById("change2").innerHTML =
		"We live and breathe Laravel. Our managed hosting for Laravel and WooCommerce takes away cloud server related hassles so you can scale your website the way you want.";
};
php.onclick = function () {
	document.getElementById("change1").innerHTML =
		"The Best Managed Could Hosting for PHP";

	document.getElementById("change2").innerHTML =
		"We live and breathe PHP. Our managed hosting for PHP and WooCommerce takes away cloud server related hassles so you can scale your website the way you want.";
};
