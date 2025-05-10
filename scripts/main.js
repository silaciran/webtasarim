// 📝 Bilet Kayıt - salon.html sayfası
const biletForm = document.getElementById("biletForm");

if (biletForm) {
  biletForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const adsoyad = document.getElementById("adsoyad").value;
    const salon = document.getElementById("salon").value;
    const koltuk = document.querySelector('input[name="koltuk"]:checked')?.value;
    const tarih = document.getElementById("tarih").value;
    const koltukno = document.getElementById("koltukno").value;

    const bilet = { adsoyad, salon, koltuk, tarih, koltukno };

    localStorage.setItem("biletKaydi", JSON.stringify(bilet));

    // Bilet kaydedildikten sonra kontrol sayfasına yönlendir
    window.location.href = "biletkontrol.html";
  });
}

// 🔍 Bilet Kontrol - biletkontrol.html sayfası
const kontrolForm = document.getElementById("kontrolForm");

if (kontrolForm) {
  kontrolForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const girilenAd = document.getElementById("kontrolAd").value.trim().toLowerCase();
    const girilenTarih = document.getElementById("kontrolTarih").value;
    const sonucAlani = document.getElementById("sonucAlani");

    const bilet = JSON.parse(localStorage.getItem("biletKaydi"));

    if (
      bilet &&
      bilet.adsoyad.trim().toLowerCase() === girilenAd &&
      bilet.tarih === girilenTarih
    ) {
      sonucAlani.innerHTML = `
        <h3>✅ Bilet Bulundu:</h3>
        <p><strong>Ad Soyad:</strong> ${bilet.adsoyad}</p>
        <p><strong>Salon:</strong> ${bilet.salon}</p>
        <p><strong>Koltuk Tipi:</strong> ${bilet.koltuk}</p>
        <p><strong>Tarih:</strong> ${bilet.tarih}</p>
        <p><strong>Koltuk No:</strong> ${bilet.koltukno}</p>
      `;
    } else {
      sonucAlani.innerHTML = `<p style="color: red;">🚫 Bilet bulunamadı. Lütfen bilgileri kontrol edin.</p>`;
    }
  });
}
