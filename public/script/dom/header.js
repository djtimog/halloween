export const Header = (activeLink) => {
  const classByLink = (activeLink, Link) => {
    if (activeLink === Link) return "nav-link nav-link-active";
    return "nav-link";
  };

  return `
      <nav>
        <div class="logo-container">
          <img src="/assets/images/logo.png" alt="logo" class="logo-img" />
          <p>Halloween</p>
        </div>

        <div class="nav-link-container">
          <a href="/" class="${classByLink(activeLink, "/")}">Home</a>
          <a href="/read.html" class="${classByLink(
            activeLink,
            "/read.html"
          )}">Read</a>
          <a href="/upload.html" class="${classByLink(
            activeLink,
            "/upload.html"
          )}">Upload</a>
        </div>
      </nav>
   `;
};
