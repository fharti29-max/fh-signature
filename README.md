# FH Héritage

Site internet officiel de **FH Héritage**, conciergerie & gestion locative courte durée au Maroc (Casablanca & Marrakech).

« Votre bien, notre priorité. »

## Structure du projet

```
index.html                 Page unique (toutes les sections, navigation par ancres)
css/style.css               Feuille de style (design system, palette, responsive)
js/main.js                  Logique interactive (menu, animations, simulateur, formulaire)
assets/favicon.png          Icône de l'onglet (recadrée sur le seul monogramme, sans le mot « Héritage »)
assets/logo-og.jpg           Logo aplati en JPEG, utilisé pour le partage social (og:image)
assets/logo-mark.png         Logo officiel FH Héritage (monogramme FH + « Héritage » en doré,
                            fond transparent, sans slogan), header et footer
assets/logo-mark.webp        Même fichier, en WebP (plus léger)
assets/patterns/            Motifs décoratifs zellige (SVG, répétés en arrière-plan)
assets/illustrations/       Arche décorative SVG (hero)
assets/photos/              Photographies FH Héritage (Marrakech, Casablanca), en .jpg + .webp
```

Aucune dépendance ni build : le site s'ouvre directement dans un navigateur ou se déploie sur
n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, OVH, o2switch, etc.).

## Éléments à personnaliser avant mise en ligne

1. **Coordonnées** — dans `js/main.js`, bloc `CONTACT` en haut du fichier :
   - `email` : adresse email officielle
   - `whatsappNumber` : numéro WhatsApp Business (actuellement +33 7 81 21 67 31, format international
     sans « + »)
   - `phoneDisplay` : numéro de téléphone affiché
2. **Formulaire de contact** — branché sur **Netlify Forms** (`data-netlify="true"` sur le
   formulaire `#contactForm`, champ caché `form-name`, honeypot anti-spam `bot-field`). Aucune
   configuration côté code n'est nécessaire : dès que le site est déployé sur Netlify, les
   demandes apparaissent automatiquement dans *Site → Forms* du tableau de bord Netlify.
   Pour recevoir une notification email à chaque nouvelle demande, à activer manuellement dans
   Netlify : *Site settings → Forms → Form notifications → Add notification → Email notification*,
   puis renseigner l'adresse de réception (ex. `contact@fhheritage.com`). Le message de
   confirmation ne s'affiche que si l'envoi réseau a réellement réussi ; en cas d'échec, un
   message d'erreur s'affiche et les champs saisis sont conservés.
3. **Domaine** — les balises `canonical` et Open Graph dans `index.html` utilisent
   `https://www.fhheritage.ma/` à titre d'exemple ; à ajuster selon le nom de domaine réel.

Le logo apparaît dans le header et dans le footer (`assets/logo-mark.png`, dérivé du fichier
officiel fourni par FH Héritage — monogramme FH et « Héritage » en doré, fond rendu transparent,
slogan retiré pour cette version). Le hero n'affiche pas de logo — il commence directement par la
mention « Conciergerie & gestion locative ». Le favicon est un recadrage serré sur le seul
monogramme, fond transparent.

## Simulateur de rentabilité

Le simulateur (`#estimation`) calcule, entièrement côté navigateur, sur une base annuelle :

- Revenus bruts estimés = prix moyen / nuit × nombre de nuits louées / an
- Commission FH Héritage = revenus bruts × 20 % HT (taux fixe, non modifiable)
- Revenus estimés pour le propriétaire = revenus bruts − commission

Il s'agit d'une **estimation indicative**, clairement présentée comme telle sur le site. FH Héritage
facture 20 % HT des revenus générés par le bien au titre de ses prestations de gestion locative :
cette mention doit rester identique partout sur le site (services, simulateur, FAQ) et ne doit
jamais être présentée comme TTC ni remplacée par un autre taux.

## Structure des sections (page unique)

Accueil (hero) → Positionnement → Comment ça fonctionne (4 étapes) → Nos services (8, en liste
sobre) → Simulateur → Pourquoi FH Héritage (4 points) → Votre interlocutrice → Zone d'intervention
→ FAQ (accordéon, natif `<details>/<summary>`, sans JavaScript) → Contact → Pied de page.

Il n'y a pas de bouton WhatsApp flottant : le contact WhatsApp se fait via le bouton discret
« Nous contacter sur WhatsApp → » de la section Contact, ainsi que via un lien dédié dans le menu
mobile (hamburger), pour rester facilement accessible sur téléphone sans surcharger l'en-tête.

La section « Votre interlocutrice » affiche une photo professionnelle de Fatiha
(`assets/photos/fatiha-portrait.jpg` / `.webp`).
