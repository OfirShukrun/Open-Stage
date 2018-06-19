function validateForm() {
    var dropdown = document.forms["myForm"]['instrument'].value;
    if (dropdown !== "") {
        alert('שימו לב! יש להביא את הכלי שאיתו אתם מופיעים. למתופפים: יש מערכת תופים בפאב, אפשר להביא מצילות וסנייר.');
    }
    var name = document.forms["myForm"]["name"].value;
    var song = document.forms["myForm"]["song"].value;
    var artist = document.forms["myForm"]["artist"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "") {
        document.getElementById("name_alert").innerHTML = 'יש לרשום שם מלא!';
    } else {
        document.getElementById("name_alert").innerHTML = '';
    }
    if (song == "") {
        document.getElementById("song_alert").innerHTML = 'יש למלא את שם השיר!';
    } else {
        document.getElementById("song_alert").innerHTML = '';
    }
    if (artist == "") {
        document.getElementById("artist_alert").innerHTML = 'יש למלא את שם האומן!';
    } else {
        document.getElementById("artist_alert").innerHTML = '';
    }
    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    if (email == "" || validateEmail(email) === false) {
        document.getElementById("email_alert").innerHTML = 'יש למלא מייל תקין ליצירת קשר!';
    } else {
        document.getElementById("email_alert").innerHTML = '';
    }
    if (name && song && artist && email !== "") {
        return true;
    } else {
        return false;
    }
}








