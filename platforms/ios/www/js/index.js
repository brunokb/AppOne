var inAppBrowserRef;
var cont = 0;
var node;
function onLoad() {

    document.addEventListener("deviceready", onDeviceReady, false);

    $('#login-form').submit(function (event) {
        event.preventDefault();
        var input = document.getElementById("tbName").value;
        var user = document.getElementById("tbPassword").value;
        if (input == "admin" && user == "admin") {
            window.location = "newlist.html";
        }
        //localStorage.setItem("number", input.value);
        //localStorage.setItem("username", user.value);
        //window.location.pathname = data.redirect;
    })
}

// device APIs are available
//
function onDeviceReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    navigator.splashscreen.show();

    //    document.getElementById("register").addEventListener("click", onRegisterKeyDown);
    //    console.log('Config done');
    // Add similar listeners for other events
}

function onPause() {
    // Handle the pause event
}

function onResume() {
    // Handle the resume event
}

function onRegisterKeyDown() {
}

// Add similar event handlers for other events