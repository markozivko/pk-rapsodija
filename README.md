# Padel Klub Rapsodija — Website

Službena web stranica Padel Kluba Rapsodija. Izrađena kao responzivna HTML/CSS/JS stranica bez build procesa ili dodatnih ovisnosti.

## Tehnologije

- HTML5
- CSS3
- JavaScript (vanilla)
- [Poppins](https://fonts.google.com/specimen/Poppins) — Google Fonts
- [Formspree](https://formspree.io/) — servis za kontakt formu

## Struktura projekta

```
pk-rapsodija/
├── index.html              # Glavna stranica
├── style.css               # Stilovi
├── main.js                 # JavaScript
├── assets/
│   └── images/
│       ├── logo-horizontal.jpg   # Horizontalni logo (hero sekcija)
│       ├── vertical.png          # Vertikalni logo (navigacija)
│       ├── padel_rapsodija.jpg   # Slika u O Nama sekciji
│       └── padelRaps.jpg         # Dodatna slika
├── CNAME                   # Custom domena za GitHub Pages
└── README.md               # Ovaj fajl
```

## Sadržaj stranice

- **Hero** — naslovni blok s logotipom i CTA gumbima
- **O Nama** — informacije o klubu
- **Brojevi** — animirani counter (članovi, turniri, tereni)
- **Zašto Mi** — prednosti kluba
- **Rapsodija** — priča o porijeklu imena i tradiciji turnira
- **Liga & Turniri** — integracija s HPS platformom
- **Kontakt** — kontakt podaci i obrazac

## Kontakt forma (Formspree)

Forma koristi [Formspree](https://formspree.io/) za slanje poruka bez backend servera.

- Servis: `https://formspree.io/f/mnjgdeln`
- Poruke se dostavljaju na registriranu email adresu
- Besplatni plan: do 50 poruka/mj
- Dashboard za pregled poruka: [formspree.io/forms](https://formspree.io/forms)

> **Napomena:** Prva poruka zahtijeva potvrdu email adrese putem linka koji Formspree šalje.

## Pokretanje lokalno

Bez build procesa — samo otvori `index.html` u pregledniku:

```bash
open index.html
```

Ili koristi **Live Server** ekstenziju u VS Codeu.

## Deployment

Stranica je hostana putem **GitHub Pages**. Svaki push na `main` granu automatski objavljuje promjene unutar 1-2 minute.

```bash
git add .
git commit -m "Opis promjene"
git push
```

## Kontakt

**Padel Klub Rapsodija**
- Email: info@padel-rapsodija.hr
- Instagram: [@padel.rapsodija](https://instagram.com/padel.rapsodija)
- Lokacija: Zagreb, Hrvatska
