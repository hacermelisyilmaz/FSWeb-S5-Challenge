const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDiv = document.createElement("div");
  headerDiv.className = "header";

  const dateSpan = document.createElement("span");
  dateSpan.className = "date";
  dateSpan.textContent = tarih;

  const baslikH1 = document.createElement("h1");
  baslikH1.textContent = baslik;

  const tempSpan = document.createElement("span");
  tempSpan.className = "temp";
  tempSpan.textContent = yazi;

  headerDiv.append(dateSpan, baslikH1, tempSpan);

  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const headerDOM = Header(
    "Teknoloji Zamanı",
    "28 Temmuz 2023",
    "sağdaki yazı"
  );

  const contDOM = document.querySelector(secici);

  contDOM.append(headerDOM);
};

export { Header, headerEkleyici };
