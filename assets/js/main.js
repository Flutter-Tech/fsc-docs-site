window.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const mobileMenu = document.querySelector('[role="mobile-menu"]');
  const mobileMenuBtn = document.querySelector("#open-mobile-menu");
  const mobileMenuCloseBtn = document.querySelector("#close-mobile-menu");

  mobileMenuBtn.addEventListener("click", handleMobileMenu);
  mobileMenuCloseBtn.addEventListener("click", handleMobileMenu);

  function handleMobileMenu() {
    mobileMenu.hidden = !mobileMenu.hidden;
  }

  // Tooltips
  const tooltips = document.querySelectorAll('[role="tooltip"]');

  if (tooltips != undefined) {
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", handleTooltip);
      tooltip.addEventListener("mouseout", handleTooltip);
    });
  }
  function handleTooltip(event) {
    event.currentTarget.nextElementSibling.hidden =
      !event.currentTarget.nextElementSibling.hidden;
  }

  // VERTICAL NAVIGATION
  //Adds css class to open element
  const toggleVerticalMenu = (el) => {
    var parentEl = el.parentNode;
    parentEl.classList.toggle("block");
    if (parentEl.getElementsByTagName("ul").length > 0) {
      parentEl.getElementsByTagName("UL")[0].classList.toggle("hidden");
    }
    parentEl.getElementsByTagName("DIV")[0].classList.toggle("block");
  };

  //Marks the menu that points to the current URL
  const markMenu = (menuElements) => {
    for (let linkMenu of menuElements) {
      linkMenuHref = linkMenu.getAttribute("href");
      if (linkMenuHref === window.location.pathname) {
        linkMenuParent = linkMenu.parentNode;
      }
    }
  };

  //Checks if is child menu and opens parents
  const openMenus = (menuElements) => {
    for (var i = 0; i < menuElements.length; i++) {
      while (!menuElements[i].classList.contains("root-menu")) {
        menuElements[i] = menuElements[i].parentNode;
        // Check if the element has to be marked and mark it
        if (menuElements[i].classList.contains("nav-parent")) {
          menuElements[i].classList.add("nav-open");
          if (menuElements[i].getElementsByTagName("ul").length > 0) {
            menuElements[i]
              .getElementsByTagName("ul")[0]
              .classList.toggle("hidden");
          }
          menuElements[i]
            .getElementsByTagName("div")[0]
            .classList.toggle("block");
        }
      }
    }
  };

  // Finds element by class that match URL
  const findElementByClassUrl = (cssclass, url) => {
    var elements = document.getElementsByClassName(cssclass);
    var found = [];
    for (var i = 0; i < elements.length; i++) {
      // Check if element is the one that points to the passed url
      if (
        elements[i].href === url &&
        elements[i].classList.contains(cssclass)
      ) {
        found.push(elements[i]);
      }
    }
    return found;
  };

  // Navigation control
  // Adds toggle to parent menus
  const menuIconToggleEls = document.getElementsByClassName("parent-icon");
  for (let toggleEl of menuIconToggleEls) {
    toggleEl.addEventListener("click", function () {
      toggleVerticalMenu(toggleEl);
    });
  }
  // Adds marking class to current page menu
  const linkMenusEl = document.getElementsByClassName("menu-link");
  markMenu(linkMenusEl);
  // Opens parent menus
  const menuElements = findElementByClassUrl("menu-link", window.location.href);
  openMenus(menuElements);

  // TOGGLER
  const togglers = document.querySelectorAll("[data-toggler]");

  togglers.forEach(function (toggler) {
    toggler.nextElementSibling.classList.toggle("hidden");
    toggler.addEventListener("click", function () {
      toggler.nextElementSibling.classList.toggle("hidden");
    });
  });

  // IMAGE LAZY LOAD
  // Lazy load images
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }

  // CLIPBOARD COPY
  const pageHeadings = document.querySelectorAll("h2, h3, h4, h5, h6");

  pageHeadings.forEach((heading) => {

    // Ignore specific headings that should not have the copy button
    if (heading.classList.contains("no-copy")) {
      return;
    }
    const headingId = heading.getAttribute("id");
    // Add relative class to heading for positioning of child button
    heading.classList.add("relative");

    // Create button
    let clipboardBtn = document.createElement("button");
    clipboardBtn.setAttribute("type", "button");
    clipboardBtn.setAttribute("id", headingId + "-clip-btn");
    clipboardBtn.setAttribute("title", "Copy link to clipboard");
    clipboardBtn.classList.add("hidden", "absolute", "clipboardBtn");
    heading.prepend(clipboardBtn);

    // Create feedback div
    const feedback = document.createElement("div");
    const feedbackId = headingId + "-clip-feedback";
    feedback.setAttribute("id", feedbackId);
    feedback.innerHTML = "URL copied successfully to clipboard!";
    feedback.classList.add("hidden", "absolute", "feedbackContainer");
    clipboardBtn.before(feedback);

    clipboardBtn.addEventListener("click", () => {
      const elementId = heading.getAttribute("id");
      copyCodeTextToClipboard(getAnchorUrl(elementId));

      if (document.getElementById(feedbackId)) {
        const feedback = document.getElementById(feedbackId);
        feedback.classList.remove("hidden");
        setTimeout(() => {
          feedback.classList.add("hidden");
        }, 1500);
        location.hash = "#" + elementId;
      }
    });

    // Show button on mouseover
    heading.addEventListener(
      "mouseover",
      () => {
        if (document.getElementById(headingId + "-clip-btn")) {
          clipboardBtn = document.getElementById(headingId + "-clip-btn");
          clipboardBtn.classList.remove("hidden");
        }
      },
      false
    );

    // Hide button on mouseout
    heading.addEventListener(
      "mouseout",
      () => {
        if (document.getElementById(headingId + "-clip-btn")) {
          clipboardBtn = document.getElementById(headingId + "-clip-btn");
          clipboardBtn.classList.add("hidden");
        }
      },
      false
    );
  });

  const copyTextToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  // Function to get the full URL with anchor
  const getAnchorUrl = (anchorId) => {
    const currentDomain = document.domain;
    const currentPathname = location.pathname;
    const selectedId = anchorId;
    const fullUrl = currentDomain + currentPathname + "#" + selectedId;

    return fullUrl;
  };

  // Function to create and attach the copy button
  function attachCopyButton() {
    console.log("running attachCopyButton");
    // Select all target divs
    const targetDivs = document.querySelectorAll(
      ".highlighter-rouge div.highlight"
    );

    targetDivs.forEach((targetDiv) => {
      const copyButton = createCopyButton();
      ensureRelativePosition(targetDiv);
      targetDiv.appendChild(copyButton);
      addCopyEventListener(copyButton, targetDiv);
    });
  }
  
  function createCopyButton() {
    const copyButton = document.createElement("button");
    copyButton.textContent = "copy";
    copyButton.style.cursor = "pointer";
    copyButton.style.padding = "1px 8px";
    copyButton.style.backgroundColor = "#c7c8c6";
    copyButton.style.borderRadius = "0.375rem";
    copyButton.style.position = "absolute";
    copyButton.style.top = "10px";
    copyButton.style.right = "10px";
    copyButton.style.zIndex = "10";
    copyButton.style.fontSize = "0.8em";
    copyButton.style.fontWeight = "bold";
    return copyButton;
  }
  
  function ensureRelativePosition(targetDiv) {
    if (getComputedStyle(targetDiv).position === "static") {
      targetDiv.style.position = "relative";
    }
  }

  function addCopyEventListener(copyButton, targetDiv) {
    copyButton.addEventListener("click", function () {
      const textToCopy = getTextToCopy(targetDiv, copyButton);
      copyCodeTextToClipboard(textToCopy);
      provideFeedback(copyButton);
    });
  }

  function getTextToCopy(targetDiv, copyButton) {
    return Array.from(targetDiv.childNodes)
      .filter((node) => node !== copyButton)
      .map((node) => node.textContent)
      .join("");
  }

  function copyCodeTextToClipboard(text) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
  }

  function provideFeedback(copyButton) {
    copyButton.textContent = "copied!";
    setTimeout(() => {
      copyButton.textContent = "copy";
    }, 2000);
  }

  // Call the function to attach copy buttons
  attachCopyButton();

  const backToTopButton = document.getElementById('back-to-top');

  // Ensure the button is initially hidden
  if (backToTopButton) {
    backToTopButton.style.display = 'none';
  
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.body.scrollHeight;
  
      if (scrollPosition > (documentHeight / 6)) {
        console.log('Showing button');
        backToTopButton.style.display = 'block';
      } else {
        console.log('Hiding button');
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Dark mode manage
  // const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  // const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   themeToggleLightIcon.classList.remove('hidden');
  // } else {
  //   themeToggleDarkIcon.classList.remove('hidden');
  // }

  // const themeToggleBtn = document.getElementById('theme-toggle');

  // themeToggleBtn.addEventListener('click', function () {

  // toggle icons inside button
  // themeToggleDarkIcon.classList.toggle('hidden');
  // themeToggleLightIcon.classList.toggle('hidden');

  // if set via local storage previously
  // if (localStorage.getItem('color-theme')) {
  //   if (localStorage.getItem('color-theme') === 'light') {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('color-theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('color-theme', 'light');
  //   }

  // if NOT set via local storage previously
  //   } else {
  //     if (document.documentElement.classList.contains('dark')) {
  //       document.documentElement.classList.remove('dark');
  //       localStorage.setItem('color-theme', 'light');
  //     } else {
  //       document.documentElement.classList.add('dark');
  //       localStorage.setItem('color-theme', 'dark');
  //     }
  //   }

  // });
  // if (
  //   localStorage.getItem('color-theme') === 'dark' ||
  //   (!('color-theme' in localStorage) &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches)
  // ) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark');
  // }
});
