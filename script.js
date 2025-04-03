function updateClocks() {

    const now = new Date();

    // Panama
    const PanamaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Panama" }));
    const panamaDate = PanamaTime.toLocaleDateString("en-US", {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });

    // Korea
    const KoreaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
    const koreaDate = KoreaTime.toLocaleDateString("en-US", {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });

    document.querySelector("#Panama-clock .clock").textContent = PanamaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.querySelector("#Korea-clock .clock").textContent = KoreaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.querySelector("#Panama-date").textContent = panamaDate;
    document.querySelector("#Korea-date").textContent = koreaDate;

}


// Start everything when the page loads
document.addEventListener("DOMContentLoaded", function () {
    updateClocks();
    setInterval(updateClocks, 1000);
});
