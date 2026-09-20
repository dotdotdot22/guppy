const meta = {
  features: { title: "Features", pm: "What Guppy can do.", image: "assets/features.png" },
  privacy:  { title: "Privacy",  pm: "Encryption and privacy.", image: "assets/privacy.png" },
  updates:  { title: "Updates",  pm: "Releases and downloads.", image: "assets/updates.png" },
  source:   { title: "Source",   pm: "GitHub and licence.", image: "assets/source.png" },
  devlog:   { title: "Devlog",   pm: "Development notes.", image: "assets/devlog.png" },
  about:    { title: "Guppy",    pm: "download and read more about this app", image: "assets/guppy-avatar.png" }
};

const pages = [...document.querySelectorAll(".page")];
const contacts = [...document.querySelectorAll(".contact")];
const windowTitle = document.getElementById("window-title");
const contactTitle = document.getElementById("contact-title");
const contactPM = document.getElementById("contact-pm");
const chatAvatarImage = document.getElementById("chat-avatar-image");
const transcript = document.getElementById("transcript");
const messageBox = document.getElementById("message-box");

function openPage(name) {
  const item = meta[name] || meta.features;
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === name));
  contacts.forEach(contact => contact.classList.toggle("active", contact.dataset.page === name));
  windowTitle.textContent = item.title;
  contactTitle.textContent = item.title;
  contactPM.textContent = item.pm;
  chatAvatarImage.src = item.image;
  chatAvatarImage.alt = item.title;
  transcript.scrollTop = 0;
  if (window.innerWidth <= 760) document.body.classList.add("show-chat");
  history.replaceState(null, "", "#" + name);
}

contacts.forEach(contact => {
  contact.addEventListener("click", event => {
    event.preventDefault();
    openPage(contact.dataset.page);
  });
});

document.querySelectorAll(".about-trigger").forEach(el => {
  el.addEventListener("click", event => {
    event.preventDefault();
    openPage("about");
  });
});

document.querySelector(".mobile-back").addEventListener("click", () => {
  document.body.classList.remove("show-chat");
});

messageBox.addEventListener("click", () => {
  messageBox.textContent = "Download the app to send messages :)";
});

const initial = location.hash.slice(1);
openPage(meta[initial] ? initial : "about");
