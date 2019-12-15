var cont = 0;
function onLoad() {
}

// device APIs are available
//
function onDeviceReady() {
    document.getElementById("getPosition").addEventListener("click", getPosition);
    document.getElementById("watchPosition").addEventListener("click", watchPosition);
    //    document.getElementById("register").addEventListener("click", onRegisterKeyDown);
    //    console.log('Config done');
    // Add similar listeners for other events
}

function deleteButton(btId, dbIndex) {
    document.getElementById(btId).remove();
    var storage = window.localStorage;
    storage.removeItem(dbIndex);
    showArray();
}

function showArray() {
    document.getElementById("taskList").innerHTML = "";
    var cont = 0;
    var storage = window.localStorage;
    var list = storage.length;
    while (list > cont) {
        var item = storage.key(cont);
        node = document.createElement("a");
        node.setAttribute("id", "task" + item);
        node.setAttribute("onClick", "deleteButton(" + "'" + "task" + item + "'" + "," + item + ")");
        node.className = "collection-item";
        node.innerHTML = storage.getItem(item);
        document.getElementById("taskList").appendChild(node);
        cont = cont + 1;
    }
}

function onRegisterKeyDown() {
    var storage = window.localStorage;
    var list = storage.length;
    storage.setItem(list, document.getElementById("tbTask").value);
    showArray();
}

// Add similar event handlers for other events

function getPosition() {
    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}

function watchPosition() {
    var options = {
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true,
    }
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

    function onSuccess(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}