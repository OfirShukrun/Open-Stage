var elisPubMobilePageURLAndroid = 'intent://#Intent;package=com.facebook.katana;scheme=fb://page/937307902955368?referrer=app_link;end';
var phizzogMobilePageURLAndroid = 'intent://#Intent;package=com.facebook.katana;scheme=fb://page/104448929614076?referrer=app_link;end';
var elisPubMobilePageURLIphone = 'fb://profile/937307902955368';
var phizzogMobilePageURLIphone = 'fb://profile/104448929614076';

function onMobile() {
    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("phizzog-link").href = phizzogMobilePageURLAndroid;
        document.getElementById("elisPub-link").href = elisPubMobilePageURLAndroid;
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.getElementById("phizzog-link").href = phizzogMobilePageURLIphone;
        document.getElementById("elisPub-link").href = elisPubMobilePageURLIphone;
    }
};






