// Animasi untuk progress bar saat scroll
function animateProgressBars() {
  var skillsDiv = document.getElementById("skills");
  var webDevProgress = document.getElementById("webDevProgress");
  var networkEngProgress = document.getElementById("networkEngProgress");

  // Fungsi untuk memeriksa apakah elemen berada dalam viewport
  function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  // Fungsi untuk mengupdate nilai progress bar
  function updateProgress(progressBar, targetWidth) {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= targetWidth) {
        clearInterval(id);
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }
  }

  // Fungsi untuk menganimasikan progress bar saat masuk ke viewport
  function checkProgressBars() {
    if (isInViewport(skillsDiv)) {
      updateProgress(webDevProgress, 50); // Nilai 80% hanya contoh, sesuaikan dengan kemampuan Anda
      updateProgress(networkEngProgress, 60); // Nilai 70% hanya contoh, sesuaikan dengan kemampuan Anda
      window.removeEventListener("scroll", checkProgressBars);
    }
  }

  window.addEventListener("scroll", checkProgressBars);
}

// Panggil fungsi animateProgressBars untuk memulai animasi saat dokumen dimuat
document.addEventListener("DOMContentLoaded", animateProgressBars);
