# Efe Özaslan — Kişisel Portfolyo

Saf HTML, CSS ve JavaScript ile geliştirilmiş kişisel portfolyo sitesi.

## Proje Yapısı

```
portfolio/
├── index.html              # Ana sayfa
├── README.md               # Bu dosya
├── pages/
│   ├── about.html          # Hakkında sayfası
│   ├── projeler.html       # Projeler sayfası
│   └── contact.html        # İletişim sayfası (+ haftalık rapor linki)
└── assets/
    ├── css/
    │   └── style.css       # Responsive stil + media query'ler
    └── js/
        └── main.js         # Hamburger menü + animasyonlar
```

## Özellikler

- ✅ Birden fazla HTML sayfası (index, about, projeler, contact)
- ✅ Responsive tasarım — mobil, tablet, masaüstü
- ✅ CSS Media Query kullanımı (@media max-width: 768px / 1024px / 480px)
- ✅ Görseller taşmıyor (max-width: 100%, overflow-x: hidden)
- ✅ Hamburger menü (mobilde nav linkleri gizlenir, ≡ butonu çıkar)
- ✅ viewport meta etiketi

## Kullanılan Teknolojiler

- HTML5 + Semantic markup
- CSS3 (Grid, Flexbox, CSS Variables, Media Query)
- Vanilla JavaScript (IntersectionObserver, DOM API)
- Google Fonts

## Kurulum

Herhangi bir kurulum gerekmez. `index.html` dosyasını tarayıcıda açman yeterli.
