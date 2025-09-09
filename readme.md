# Instagram Takipçi Kontrol
Sizin takip ettiğiniz ama sizi takip etmeyen kullanıcıları çıkarmak için script.

# Kullanış
İlk önce instagram takipçi sayfasına gidip takipçileri açıp (en aşağı kadar giderek bütün takipçilerin yüklenmesini sağlayın) konsola şu kodu yazın.

```javascript
var element = document.querySelectorAll('._ap3a._aaco._aacw._aacx._aad7._aade');

var arr = [];
element.forEach(element => arr.push(element.innerHTML));
console.log(arr);
```

# Bu kod sayesinde takipçilerin hepsi bir array içerisinde konsola yazdırılacak. Daha sonra sağ tık "nesneyi kopyala" butonu ile arrayı konsoldan kopyalayın.
# Kopyalanan arrayı `.\followers.json` dosyasına yapıştırın.

# Aynı işlemi takip edilenler içinde tekrarlayın ve bu sefer arrayı `.\follow.json` dosyasına yapıştırın.

# Artık kodu çalıştırındığınızda sizin takip ettiğiniz fakat sizi geri takip etmeyen bütün hesaplar konsolda yazıyor :)
