const pages = {
  features: {
    title: "Features",
    status: "Explore what Guppy can do."
  },
  privacy: {
    title: "Privacy",
    status: "Encryption and privacy information."
  },
  updates: {
    title: "Updates",
    status: "Releases and download information."
  },
  source: {
    title: "Source",
    status: "Source code and licence information."
  },
  devlog: {
    title: "Devlog",
    status: "Development notes and progress."
  },
  about: {
    title: "Guppy",
    status: "download and read more about this app"
  }
};

const links = document.querySelectorAll("[data-page]");
const conversationPages = document.querySelectorAll(".conversation-page");
const title = document.getElementById("conversation-title");
const contactName = document.getElementById("contact-name");
const contactStatus = document.getElementById("contact-status");
const scrollArea = document.getElementById("conversation-scroll");
const messageBox = document.getElementById("message-box");

function openPage(page) {
  const data = pages[page] || pages.features;

  conversationPages.forEach(panel => {
    panel.classList.toggle("active", panel.dataset.page === page);
  });

  document.querySelectorAll(".contact-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });

  title.textContent = data.title;
  contactName.textContent = data.title;
  contactStatus.textContent = data.status;

  scrollArea.scrollTop = 0;

  if (window.innerWidth <= 760) {
    document.body.classList.add("show-conversation");
  }
}

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openPage(link.dataset.page);
  });
});

const backButton = document.querySelector(".actionbar span:first-child");

if (backButton) {
  backButton.addEventListener("click", () => {
    if (window.innerWidth <= 760) {
      document.body.classList.remove("show-conversation");
    }
  });
}

messageBox.addEventListener("click", () => {
  messageBox.textContent = "Download the app to send messages :)";
});
