import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdi" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const headlineDiv = document.createElement("div");
  headlineDiv.className = "headline";
  headlineDiv.textContent = makale["anabaslik"];

  const authorDiv = document.createElement("div");
  authorDiv.className = "author";

  const imgDiv = document.createElement("div");
  imgDiv.className = "img-container";
  const img = document.createElement("img");
  img.setAttribute("src", makale["yazarFoto"]);
  imgDiv.appendChild(img);

  const yazarAdiSpan = document.createElement("span");
  yazarAdiSpan.textContent = `${makale["yazarAdi"]} tarafından`;

  authorDiv.append(imgDiv, yazarAdiSpan);

  cardDiv.append(headlineDiv, authorDiv);

  cardDiv.addEventListener("click", (event) => {
    const headlineContent = event.target.querySelector("div.headline");
    console.log(headlineContent.textContent);
  });

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const contDOM = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      const makaleler = response.data.makaleler;

      for (let tab in makaleler) {
        for (let makale of makaleler[tab]) {
          const card = Card(makale);
          contDOM.appendChild(card);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export { Card, cardEkleyici };
