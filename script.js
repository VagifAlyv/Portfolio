/**
 * Vagif Aliyev - Portfolio Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  setupCopyEmail();
  setupSmoothScroll();
});

// Copy Email & Toast Notification
function setupCopyEmail() {
  const copyButtons = document.querySelectorAll(".copy-email-btn");
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");

  function showToast(msg) {
    if (!toast) return;
    if (toastText) toastText.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const email = btn.getAttribute("data-email") || "v.aliyev2380@gmail.com";
      navigator.clipboard.writeText(email)
        .then(() => showToast(`Copied ${email} to clipboard`))
        .catch(() => showToast(`Email: ${email}`));
    });
  });
}

// Smooth Anchor Scroll
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}
