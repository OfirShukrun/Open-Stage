var elisPubMobilePageURL = 'fb://profile/937307902955368';
var PhizzogMobilePageURL = 'intent://#Intent;package=com.facebook.katana;scheme=fb://page/104448929614076?referrer=app_link;end';


function onMobile() {
    console.log('!')
    if (typeof window.orientation !== 'undefined') {
        document.getElementById("phizzog-link").href = PhizzogMobilePageURL;
        document.getElementById("elisPub-link").href = elisPubMobilePageURL;
    }
};






