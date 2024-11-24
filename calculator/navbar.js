class Navbar extends HTMLElement {
  constructor() {
    super();

    // Attach shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Create the template for the navbar
    shadow.innerHTML = `
        <style>
          /* Navigation bar styling */
          .navbar {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 60px;
              background-color: #333;
              display: flex;
              align-items: center;
              padding: 0 20px;
              color: white;
          }

          /* Menu button styling */
          .menu-button {
              width: 40px;
              height: 30px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              cursor: pointer;
          }

          /* Lines for the hamburger icon */
          .menu-button .line {
              width: 100%;
              height: 4px;
              background-color: white;
              border-radius: 2px;
          }

          h1 {
              margin-left: 15px;
          }

          /* Sidebar styling */
          .sidebar {
              position: fixed;
              top: 0;
              left: 0;
              width: 300px;
              height: 100vh;
              /* Full height */
              background-color: #2c3e50;
              /* Dark background color */
              color: #ecf0f1;
              /* Light text color */
              border-right: 2px solid #34495e;
              /* Right border for separation */
              padding: 20px;
              box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);
              /* Subtle shadow effect */
              transition: opacity 0.5s ease, visibility 0s linear 0.5s;
          }

          /* Text styling for the sidebar */
          .sidebar h3 {
              font-size: 1.8em;
              margin-top: 25px;
              margin-bottom: 2px;
              border-top: solid 2px white;
              color: #ecdbff;
              /* Lighter color for the header */
          }

          .links {
              display: flex;
              flex-direction: column;
              /* Ensures equal space between elements */
              height: 100vh;
              /* Full height of the viewport */
              padding: 20px;
          }

          .sidebar a {
              font-size: 1.2em;
              border: solid 2px white;
              margin-top: 10px;
              /* Reset margin to maintain even spacing */
              cursor: pointer;
              padding: 10px;
              border-radius: 5px;
              transition: background-color 0.3s ease;
              text-decoration: none;
              /* Remove underline */
              color: white;
              /* Text color */
          }

          .sidebar a:hover {
              background-color: #34495e;
              /* Slightly darker color on hover */
          }

          /* Initially hidden */
          .invisible {
              opacity: 0;
              visibility: hidden;
              transition: opacity 0.5s ease, visibility 0s linear 0.5s;
              /* 0.5s delay for visibility */
          }

          /* Visible state with fade-in */
          .visible {
              opacity: 1;
              visibility: visible;
              transition: opacity 0.5s ease, visibility 0s linear 0s;
          }

        </style>
        <div class="navbar">
          <div class="menu-button" onclick="ToggleSidebar()">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
          </div>
          <h1>Standard</h1>
        </div>
        <div class="sidebar invisible" id="myDiv">
            <div class="menu-button" onclick="ToggleSidebar()">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <h3>Calculator</h3><br>
            <div class="links">
                <a href="index.html">Standard</a>
                <a href="programming.html">Scientific</a>
                <a href="programming.html">Graphic</a>
                <a href="programming.html">Programming</a>
                <a href="dateTime.html">Date calculation</a>
                <a href="programming.html">Currency</a>
                <a href="programming.html">Volume</a>
                <a href="programming.html">Length</a>
                <a href="programming.html">Weight and mass</a>
                <a href="programming.html">Tempreture</a>
            </div>
        </div>
      `;
  }

  connectedCallback() {
    // Get attributes for title and links
    const title = this.getAttribute('title') || 'Website';
    const links = JSON.parse(this.getAttribute('links') || '[]');

    // Populate the navbar content
    const titleElement = this.shadowRoot.querySelector('.navbar-title');
    const linksContainer = this.shadowRoot.querySelector('.navbar-links');

    titleElement.textContent = title;

    links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.textContent = link.text;
      linksContainer.appendChild(anchor);
    });
  }
  ToggleSidebar() {
    const myDiv = document.getElementById('myDiv');
    console.log(myDiv)
    if (myDiv.classList.contains('invisible')) {
      myDiv.classList.remove('invisible');
      myDiv.classList.add('visible');
    } else {
      myDiv.classList.remove('visible');
      myDiv.classList.add('invisible');
    }
  }
}

// Define the custom element
customElements.define('custom-navbar', Navbar);
