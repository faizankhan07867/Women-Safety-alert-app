function sendAlert() {
    const status = document.getElementById("status");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const locationLink = `https://www.google.com/maps?q=${lat},${lon}`;

                status.innerHTML = "⚠️ Emergency Alert Sent!<br>Location: " + locationLink;

                status.style.color = "red";

                alert("Emergency Alert Sent with Location!");
            },
            function() {
                status.innerHTML = "Unable to access location.";
            }
        );
    } else {
        status.innerHTML = "Geolocation not supported.";
    }
}
