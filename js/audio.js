document.addEventListener("DOMContentLoaded", () => {
  const audioFrame = document.getElementById("audio-frame");

  if (audioFrame) {
    audioFrame.addEventListener("load", () => {
      const audio =
        audioFrame.contentWindow.document.getElementById("background-audio");

      if (audio) {
        // Saat halaman dimuat, cek waktu terakhir
        const savedTime = localStorage.getItem("audioTime");
        const lastVisit = localStorage.getItem("lastVisit");

        // 300000;
        const now = Date.now();
        if (lastVisit && now - parseInt(lastVisit) > 60000) {
          // Jika lebih dari 5 menit sejak terakhir kali halaman ditutup, hapus audioTime
          localStorage.removeItem("audioTime");
          console.log("terhapus");
        }

        if (savedTime) {
          audio.currentTime = parseFloat(savedTime);
        }

        audio.play().catch((error) => {
          console.log("Autoplay blocked: ", error);
        });

        // Simpan waktu audio sebelum meninggalkan halaman
        window.addEventListener("beforeunload", () => {
          localStorage.setItem("audioTime", audio.currentTime);
          localStorage.setItem("lastVisit", Date.now());
          console.log("unload");
        });
      } else {
        console.error("Audio element not found inside iframe.");
      }
    });
  } else {
    console.error("Iframe element not found.");
  }
});
