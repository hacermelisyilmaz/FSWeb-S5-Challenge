# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

- [x] Bu projenyi forklayarak bir kopyasını oluşturun.
- [x] Reponun kendi versiyonunuzu klonlayın.
- [x] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [x] Komut satırınızla projenin kök dizinine gidin.
- [x] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [x] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [x] Chrome'da `http://localhost:3000` konumuna gidin
- [x] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [x] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [x] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [x] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.

## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
   Tarayıcı, HTML ve CSS kodlarıyla sayfayı inşa ettikten sonra JavaScript kullanarak sayfanın görünümü ve eylemleri için, HTML kodundaki her ögeyi içeren obje tipli bir model inşa eder. Bu objeye Belge Nesne Modeli (Document Object Model) yani kısaca DOM denir. Çok basitleştirmek istersek: JavaScript içinden erişebilmek için JS içinde tanımladığımız HTML elementlerinin her biri DOM oluyor.
2. Bir event nedir?
   Tıklama, imleci hareket ettirme, sayfayı kaydırma, tuşa basma gibi kullanıcının internet sayfasıyla girebileceği her türlü etkileşim yoluna event denir.
3. Bir event dinleyici(listener) nedir?
   Event dinleyiciler bir kullanıcı interaction'ıyla bu interaction sonucunda çalışacak kodun ilişkilendirilmesi için kullanılır.
4. Neden bir NodeList'i Array'e dönüştürelim??
   NodeList, HTMLCollection gibi array-like bir objedir ve tüm array-like objeler spread operatörü ile array'e çevrilebilir:
   const array = [...arrayLikeObject];
5. Bileşen nedir?
