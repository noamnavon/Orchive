const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (darkModeQuery.matches) {
  // System is in dark mode, apply dark theme
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById("logo").src = "./assets/images/dark-logo.png";
} else {
  // System is in light mode, apply light theme
  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById("logo").src = "./assets/images/light-logo.png";
}

// Listen for changes
darkModeQuery.addEventListener('change', (e) => {
  if (e.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("logo").src = "./assets/images/dark-logo.png";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("logo").src = "./assets/images/light-logo.png";
  }
});
