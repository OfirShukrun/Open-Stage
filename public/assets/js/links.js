var elisPubMobilePageURL = 'http://m.facebook.com/pages/elis.pub/937307902955368';
var PhizzogMobilePageURL = 'http://m.facebook.com/pages/phizzogband/104448929614076';


function onMobile() {
    console.log('!')
    if (typeof window.orientation !== 'undefined') {
        document.getElementById("phizzog-link").href = PhizzogMobilePageURL;
        document.getElementById("elisPub-link").href = PhizzogMobilePageURL;
    }
};






