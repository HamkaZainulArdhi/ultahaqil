new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/1.jpg",
          img2: "images/2.jpg",
          img3: "images/3.jpg",
          title: "Muncak(S3 nih bozz)",
          isOpen: false,
        },
        {
          img1: "images/6.jpg",
          img2: "images/7.jpg",
          img3: "images/10.jpg",
          title: "Ngabdi",
          isOpen: false,
        },
        {
          img1: "images/4.jpg",
          img2: "images/8.jpg",
          img3: "images/11.jpg",
          title: "OTW UIN jakarta",
          isOpen: false,
        },
        {
          img1: "images/9.jpg",
          img2: "images/17.jpg",
          img3: "images/20.jpg",
          title: "TURUUUU",
          isOpen: false,
        },
        {
          img1: "images/15.jpg",
          img2: "images/16.jpg",
          img3: "images/22.jpeg",
          title: "p balaaap",
          isOpen: false,
        },
        {
          img1: "images/5.jpg",
          img2: "images/14.jpg",
          img3: "images/19.jpg",
          title: "p daki",
          isOpen: false,
        },
        {
          img1: "images/24.jpg",
          img2: "images/23.jpg",
          img3: "images/25.jpg",
          title: "p nyari nasi tahlilan",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});

const audio = document.getElementById("backgroundMusic");

// Menetapkan sumber audio
audio.src = "when.mp3"; // Ganti dengan path file MP3 Anda

// Mengatur properti autoplay dan loop
audio.autoplay = true;
audio.loop = true;

// Memulai pemutaran (diperlukan di beberapa browser)
audio.play().catch((error) => {
  console.error("Autoplay mungkin diblokir oleh browser: ", error);
});
