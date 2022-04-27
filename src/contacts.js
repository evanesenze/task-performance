const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let timeout = null;
let items = [];

function addContacts() {
  items = new Array(50000).fill(null).map((_, i) => {
    const child = document.createElement("div");
    child.textContent = Number(i);
    child.classList.add("contact");
    return child;
  });
  contacts.append(...items);
}

contacts.addEventListener("scroll", (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    const itemOffsets = items.map((item) => item.offsetTop);
    const topItemIndex = itemOffsets.findIndex(
      (offset) => contacts.scrollTop - offset <= -18
    );
    if (topItemIndex !== -1) {
      stickyHeader.textContent = items[topItemIndex].textContent;
    }
    timer = null;
  });
});

addContacts();