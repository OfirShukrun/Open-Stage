function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["song"].value;
    var z = document.forms["myForm"]["artist"].value;
    if (x == "") {
        document.getElementById("name_alert").innerHTML = 'יש לרשום שם מלא!';

    } else {
        document.getElementById("name_alert").innerHTML = '';
    }
    if (y == "") {
        document.getElementById("song_alert").innerHTML = 'יש לרשום את שם השיר!';

    } else {
        document.getElementById("song_alert").innerHTML = '';
    }
    if (z == "") {
        document.getElementById("artist_alert").innerHTML = 'יש למלא את שם האומן!';
    } else {
        document.getElementById("artist_alert").innerHTML = '';
    }

    if (x !== "" && y !== "" && z !== "") {
        return true
    } else {
        return false;
    }
}