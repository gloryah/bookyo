let currentIndex = 0; // Menyimpan index gambar yang aktif
const slides = document.querySelectorAll('.slider img'); // Mendapatkan semua gambar di dalam slider

// Fungsi untuk menggeser gambar (Next atau Prev)
function moveSlide(step) {
    currentIndex = (currentIndex + step + slides.length) % slides.length; // Menghitung index dengan langkah (step) dan memastikan index tetap dalam batas
    updateSlider(); // Memperbarui tampilan slider
}

// Fungsi untuk menampilkan gambar yang sesuai dengan currentIndex
function updateSlider() {
    slides.forEach((img, index) => img.style.display = index === currentIndex ? 'block' : 'none');
}

// Inisialisasi slider dengan menampilkan gambar pertama
updateSlider();

const textElement = document.getElementById("text");
const buttonElement = document.getElementById("tombol1");

const initialText = "\"BE ANYONE ELSE AND GIVE UP\"";
const changedText = "\"IF YOU CAN'T BE THE FIRST, BE THE LAST\"";

buttonElement.addEventListener("click", function() {

  if (textElement.innerHTML === initialText) {
    textElement.innerHTML = changedText;
  } else {
    textElement.innerHTML = initialText;
  }
});
