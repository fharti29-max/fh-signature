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
assets/logo-mark.png         Logo officiel FH Héritage (monogramme + « Héritage »), fond transparent — header
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
   - `whatsappNumber` : numéro WhatsApp Business (format international sans « + »)
   - `phoneDisplay` : numéro de téléphone affiché
2. **Formulaire de contact** — actuellement le formulaire valide les champs et affiche un message
   de confirmation, mais n'envoie nulle part (voir commentaire `TODO` dans `js/main.js`,
   fonction de soumission). Branchez-le sur votre service d'envoi d'email, votre CRM ou l'API
   WhatsApp Business lors de la mise en production.
3. **Domaine** — les balises `canonical` et Open Graph dans `index.html` utilisent
   `https://www.fhheritage.ma/` à titre d'exemple ; à ajuster selon le nom de domaine réel.

Le logo n'apparaît qu'une seule fois sur toute la page, dans le header (`assets/logo-mark.png`,
fichier officiel fourni par FH Héritage — monogramme FH, palmier/maison, « Héritage » en script
doré — utilisé tel quel, simplement recadré à son contenu réel, marge transparente incluse). Le
hero n'affiche pas de logo — il commence directement par la mention « Conciergerie & gestion
locative ». Le pied de page affiche le nom « FH Héritage » en texte (pas d'image, pour ne pas
dupliquer le logo). Le favicon est un recadrage carré du même fichier.

## Simulateur de rentabilité

Le simulateur (`#estimation`) calcule, entièrement côté navigateur, sur une base annuelle :

- Revenus bruts estimés = prix moyen / nuit × nombre de nuits louées / an
- Commission FH Héritage = revenus bruts × 20 % TTC (taux fixe, non modifiable)
- Revenus estimés pour le propriétaire = revenus bruts − commission

Il s'agit d'une **estimation indicative**, clairement présentée comme telle sur le site. FH Héritage
facture 20 % TTC des revenus générés par le bien : cette mention doit rester identique partout sur
le site (services, simulateur, FAQ) et ne doit jamais être remplacée par un autre taux.

## Structure des sections (page unique)

Accueil (hero) → Positionnement → Comment ça fonctionne (4 étapes) → Nos services (6, en liste
sobre) → Simulateur → Pourquoi FH Héritage (4 points) → Votre interlocutrice → Zone d'intervention
→ FAQ (accordéon, natif `<details>/<summary>`, sans JavaScript) → Contact → Pied de page.

Il n'y a pas de bouton WhatsApp flottant : le contact WhatsApp se fait uniquement via le bouton
discret « Écrire sur WhatsApp → » intégré à la section Contact.

La section « Votre interlocutrice » affiche une photo professionnelle de Fatiha
(`assets/photos/fatiha-portrait.jpg` / `.webp`).
