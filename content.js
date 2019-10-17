// content.js
// chrome.runtime.onMessage.addListener(
//     function (request, sender, sendResponse) {
//         if (request.message === "clicked_browser_action") {
//             var firstHref = $("a[href^='http']").eq(0).attr("href");

//             console.log(firstHref);
//         }
//     }
// );

// Skip Ad
setInterval(function () {
	var _z_skipBtn1 = document.getElementsByClassName('videoAdUiSkipButton')[0];
	var _z_skipBtn2 = document.getElementsByClassName('ytp-ad-skip-button')[0];
	if (!!_z_skipBtn1) {
		_z_skipBtn1.click();
	} else if (!!_z_skipBtn2) {
		_z_skipBtn2.click();
	}
	// var _z_adList = document.querySelectorAll('[id$="-ad"],[id^="-ad"],[id$="ad-"],[id^="ad-"], [class*=-ad], [class*=ad-]');
	var _z_adList = document.querySelectorAll('[id$="-ad"],[id^="-ad"],[id$="ad-"],[id^="ad-"], [id$="-ads"],[id^="-ads"],[id$="ads-"],[id^="ads-"], .ytp-ad-module');
	_z_adList.forEach(function (ele) {
		if (!ele.hasAttribute('_z_')) {
			ele.setAttribute('style', 'display: none !important;');
			ele.setAttribute('_z_', 'active')
		}
	});
}, 1000);

// Annotation
var _z_annotationStatus = "inactive";
let _z_settingsBtn = document.getElementsByClassName('ytp-settings-button')[0];
_z_settingsBtn.click();
_z_settingsBtn.click();
setInterval(function () {
	var _z_annotationLabel = document.getElementsByClassName('ytp-menuitem-label');
	Array.from(_z_annotationLabel).forEach(ele => {
		if (ele.innerHTML == "Annotations") {
			// console.log(!((ele.parentElement.getAttribute('aria-checked') == "false" && _z_annotationStatus == "inactive") || (ele.parentElement.getAttribute('aria-checked') == "true" && _z_annotationStatus == "active")))
			if (!((ele.parentElement.getAttribute('aria-checked') == "false" && _z_annotationStatus == "inactive") || (ele.parentElement.getAttribute('aria-checked') == "true" && _z_annotationStatus == "active"))) {
				ele.click()
			}
		}
	});
}, 1000);

// Autoplay
var _z_autoplayStatus = "inactive";
let _z_autoplayBtn = document.getElementById('toggle');
const _z_autoplay = () => {
	if (!((!_z_autoplayBtn.hasAttribute('checked') && _z_autoplayStatus == "inactive") || (_z_autoplayBtn.hasAttribute('checked') && _z_autoplayStatus == "active"))) {
		_z_autoplayBtn.click();
	}
}
