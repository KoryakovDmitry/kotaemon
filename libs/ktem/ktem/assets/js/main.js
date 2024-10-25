function run() {
  let main_parent = document.getElementById("chat-tab").parentNode;

  main_parent.childNodes[0].classList.add("header-bar");
  main_parent.style = "padding: 0; margin: 0";
  main_parent.parentNode.style = "gap: 0";
  main_parent.parentNode.parentNode.style = "padding: 0";

  const version_node = document.createElement("p");
  version_node.innerHTML = "version: KH_APP_VERSION";
  version_node.style = "position: fixed; top: 10px; right: 10px;";
  main_parent.appendChild(version_node);

  // clpse
  globalThis.clpseFn = (id) => {
    var obj = document.getElementById('clpse-btn-' + id);
    obj.classList.toggle("clpse-active");
    var content = obj.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }

  // store info in local storage
  globalThis.setStorage = (key, value) => {
      localStorage.setItem(key, value)
  }
  globalThis.getStorage = (key, value) => {
    item = localStorage.getItem(key);
    return item ? item : value;
  }
  globalThis.removeFromStorage = (key) => {
      localStorage.removeItem(key)
  }
  // Function to load and render SVG into the specified container from a URL
  function loadSVGFromURL(url, containerId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(svgData => {
        document.getElementById(containerId).innerHTML = svgData;
      })
      .catch(error => console.error('Error loading SVG:', error));
  }

  // Create and append the CSS for the layout
  const style = document.createElement('style');
  style.textContent = `
    #logos-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px; /* Space between the logos */
      width: 100%; /* Ensure it takes full width */
      position: relative; /* Relative to allow normal flow */
      background-color: #000; /* Background color to match site theme */
      padding: 10px 0; /* Padding for aesthetics */
    }

    #img-1-container,
    #img-2-container {
      height: 85px; /* Set height for consistency */
      display: flex;
      align-items: center;
    }

    svg {
      height: 100%;
      width: auto;
    }
  `;
  document.head.appendChild(style);

  // Create container for logos
  const logos = document.createElement("div");
  logos.id = "logos-container";

  // Create divs for individual logos
  const optiNode = document.createElement("div");
  const moniNode = document.createElement("div");
  optiNode.id = "img-1-container";
  moniNode.id = "img-2-container";

  // Append logo containers to logos div
  logos.appendChild(optiNode);
  logos.appendChild(moniNode);

  // Insert the logos container at the beginning of the main parent
  main_parent.insertBefore(logos, main_parent.firstChild);

  // Call the function to load SVGs
  const svgURLOpti = "https://raw.githubusercontent.com/KoryakovDmitry/kotaemon/refs/heads/main/libs/ktem/ktem/assets/img/opti-e-full.svg";
  const svgURLMoni = "https://raw.githubusercontent.com/KoryakovDmitry/kotaemon/refs/heads/main/libs/ktem/ktem/assets/img/moniflo-full.svg";
  loadSVGFromURL(svgURLOpti, optiNode.id);
  loadSVGFromURL(svgURLMoni, moniNode.id);
}
