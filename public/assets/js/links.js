var elisPubMobilePageURL = 'fb://profile/937307902955368';
var PhizzogMobilePageURL = 'fb://profile/104448929614076';


function onMobile() {
    console.log('!')
    if (typeof window.orientation !== 'undefined') {
        document.getElementById("phizzog-link").href = PhizzogMobilePageURL;
        document.getElementById("elisPub-link").href = elisPubMobilePageURL;
    }
};






