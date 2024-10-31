// Function to load HTML content into a specified element
function loadContent(elementId, content) {
    document.getElementById(elementId).innerHTML = content;
}

// Toolbar content
const toolbarHTML = `
    <div class="toolbar">
        <div class="toolbar-content">
            <div class="logo-title" onclick="window.location.href='index.html'">
                <img src="images/logo_no_background.png" alt="App Logo" class="logo">
                <h1>KosherWeb - דפדפן כשר</h1>
            </div>
            <div class="btn-container">
                <button class="advertise-btn" onclick="window.location.href='advertise.html'">לפרסם איתנו</button>
                <button class="contact-btn"  onclick="window.location.href='contact.html'">צור קשר</button>
                <a href="https://play.google.com/store/apps/details?id=com.mz.SmartApps.KosherWeb" class="play-store-btn" style="width: 110px; height: 40px;"></a>
            </div>
        </div>
    </div>
`;

// Footer content
const footerHTML = `
    <footer>
        <p>© 2024 MZ SmartApps</p>
    </footer>
`;

// Load the toolbar, footer, and CSS into the page
window.addEventListener('DOMContentLoaded', () => {
    loadContent('toolbar', toolbarHTML);
    loadContent('footer', footerHTML);
});
