(function () {
  var year = document.getElementById("y");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var btn = document.querySelector(".menu-toggle");
  var panel = document.getElementById("mobile-nav");
  if (btn && panel) {
    btn.addEventListener("click", function () {
      var open = panel.hasAttribute("hidden");
      if (open) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        panel.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var personaButtons = document.querySelectorAll("[data-persona]");
  var personaOutput = document.querySelector("[data-persona-output]");
  var personaCopy = {
    embedded: {
      title: "Embedded / Test Engineer",
      text: "Lead with embedded systems, Python/C, sensor integration, Linux, structured testing, debugging, and Furhat Robotics validation work."
    },
    dataops: {
      title: "Customer + Data Operations",
      text: "Lead with digital banking support, customer data accuracy, system-query troubleshooting, process compliance, and technical collaboration with product/engineering teams."
    },
    ai: {
      title: "AI / Technical Analyst",
      text: "Lead with MSc Embedded Systems, Python, ML/audio projects, data interpretation, automation curiosity, and practical system validation."
    }
  };

  personaButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var key = button.getAttribute("data-persona");
      var item = personaCopy[key];
      if (!item || !personaOutput) return;

      personaButtons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      personaOutput.innerHTML = "<strong>" + item.title + "</strong><span>" + item.text + "</span>";
    });
  });

  var filters = document.querySelectorAll("[data-filter]");
  var projectCards = document.querySelectorAll("[data-tags]");
  filters.forEach(function (filter) {
    filter.addEventListener("click", function () {
      var tag = filter.getAttribute("data-filter");
      filters.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      filter.classList.add("is-active");
      filter.setAttribute("aria-pressed", "true");

      projectCards.forEach(function (card) {
        var tags = card.getAttribute("data-tags") || "";
        var show = tag === "all" || tags.indexOf(tag) !== -1;
        card.hidden = !show;
      });
    });
  });

  document.querySelectorAll("[data-copy-link]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy-link");
      if (!navigator.clipboard || !text) return;
      navigator.clipboard.writeText(text).then(function () {
        var original = button.textContent;
        button.textContent = "Copied";
        window.setTimeout(function () {
          button.textContent = original;
        }, 1400);
      });
    });
  });
})();
