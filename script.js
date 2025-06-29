function playMusic() {
  const music = document.getElementById("bgm");
  music.play();

  // Tampilkan pertanyaan berikutnya dan tombol WA
  document.getElementById("nextQ").style.display = "block";

  // menuju ke wa
  const waNumber = "6283134000383"; // ← // nomerku 
  const message = encodeURIComponent("Aku sayang kamu juga❤️");
  const waLink = `https://wa.me/${waNumber}?text=${message}`;
  
  const waBtn = document.getElementById("waBtn");
  waBtn.href = waLink;
  waBtn.style.display = "inline-block";
}