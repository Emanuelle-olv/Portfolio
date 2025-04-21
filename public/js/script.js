function openModal(fileSrc) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const iframe = document.getElementById("modal-frame");
  const sidebar = document.querySelector(".sidebar-menu");

  modal.classList.add("show");
  sidebar?.classList.add("sidebar-hidden");

  if (fileSrc.endsWith(".pdf")) {
    iframe.src = fileSrc + "#view=FitH";
    iframe.style.display = "block";
    img.style.display = "none";
  } else {
    img.src = fileSrc;
    img.style.display = "block";
    iframe.style.display = "none";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const iframe = document.getElementById("modal-frame");
  const sidebar = document.querySelector(".sidebar-menu");

  modal.classList.remove("show");
  img.src = "";
  iframe.src = "";
  sidebar?.classList.remove("sidebar-hidden");
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
