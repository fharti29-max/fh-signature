# FH Signature

Site internet officiel de **FH Signature**, conciergerie & gestion locative courte durée au Maroc (Casablanca & Marrakech).

« Votre bien, notre priorité. »

## Structure du projet

```
index.html                 Page unique (toutes les sections, navigation par ancres)
css/style.css               Feuille de style (design system, palette, responsive)
js/main.js                  Logique interactive (menu, animations, simulateur, formulaire)
assets/favicon.png          Icône de l'onglet (recadrée depuis le logo officiel)
assets/logo.png              Logo officiel FH Signature, fichier source (1254×1254, fond crème)
assets/logo-og.jpg           Logo aplati en JPEG, utilisé pour le partage social (og:image)
assets/logo-badge.png        Logo détouré en cercle (fond transparent), grand format — hero
assets/logo-badge-sm.png     Logo détouré en cercle (fond transparent), petit format — header/footer
assets/patterns/            Motifs décoratifs zellige (SVG, répétés en arrière-plan)
assets/illustrations/       Arche décorative SVG (hero)
assets/photos/              Photographies FH Signature (Marrakech, Casablanca), en .jpg + .webp
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
   `https://www.fhsignature.ma/` à titre d'exemple ; à ajuster selon le nom de domaine réel.

Le logo officiel FH Signature (cercle doré, monogramme « FH », signature manuscrite, palmier et
maison, tagline « Votre bien, notre priorité ») est intégré tel que fourni dans le header, le
hero, le pied de page et le favicon — seul son détourage en cercle transparent (`logo-badge*.png`)
a été généré pour un affichage propre sur fond photo/foncé, sans aucune modification du design.

## Simulateur de rentabilité

Le simulateur (`#estimation`) calcule, entièrement côté navigateur :

- CA brut mensuel = prix moyen / nuit × nuits réservées / mois
- Commission FH Signature = CA brut × 20 %
- Frais Airbnb estimés = CA brut × taux Airbnb (curseur configurable, 3 % par défaut)
- Revenu estimé propriétaire = CA brut − commission − frais Airbnb
- Estimation annuelle = revenu mensuel estimé × 12

Il s'agit d'une **estimation indicative**, clairement présentée comme telle sur le site.
