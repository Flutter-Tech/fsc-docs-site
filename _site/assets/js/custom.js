// Custom scripts
document.addEventListener("DOMContentLoaded", function (event) {
  menuElements = findElementByClassUrl("menu-link", window.location.href);

  if (menuElements.length == 0) return;

  openMenus(menuElements);
});

// Find element that is currently pointing to the passed url by css class
const findElementByClassUrl = function (cssclass, url) {
  var elements = document.getElementsByClassName(cssclass);
  var found = [];
  for (var i = 0; i < elements.length; i++) {
    // Check if element is the one that points to the passed url
    if (elements[i].href === url && elements[i].classList.contains(cssclass)) {
      found.push(elements[i]);
    }
  }

  return found;
};

const openMenus = function (menuElements) {
  for (var i = 0; i < menuElements.length; i++) {
    while (!menuElements[i].classList.contains("menu-root")) {
      menuElements[i] = menuElements[i].parentNode;
      // Check if the element has to be marked and mark it
      if (menuElements[i].classList.contains("uk-parent")) {
        menuElements[i].classList.add("uk-open");
      }
    }
  }
};
