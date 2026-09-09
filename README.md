# FH Signature

Site internet officiel de **FH Signature**, conciergerie & gestion locative courte durée au Maroc (Casablanca & Marrakech).

« Votre bien, notre priorité. »

## Structure du projet

```
index.html                 Page unique (toutes les sections, navigation par ancres)
css/style.css               Feuille de style (design system, palette, responsive)
js/main.js                  Logique interactive (menu, animations, simulateur, formulaire)
assets/favicon.svg          Icône de l'onglet
assets/patterns/            Motifs décoratifs zellige (SVG, répétés en arrière-plan)
assets/illustrations/       Illustrations SVG (arches, riad, villa, Casablanca, Marrakech...)
```

Aucune dépendance ni build : le site s'ouvre directement dans un navigateur ou se déploie sur
n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, OVH, o2switch, etc.).

## Éléments à personnaliser avant mise en ligne

Certains éléments ont été créés comme **placeholders** faute d'accès réseau lors du
développement (voir note ci-dessous) et doivent être remplacés par les vrais éléments FH Signature :

1. **Logo** — le header/footer utilisent actuellement un monogramme typographique « FH · Signature »
   codé en HTML/CSS (`.logo` dans `index.html`). Remplacez-le par le vrai logo fourni par FH Signature
   (fichier image dans `assets/`, ex. `assets/logo.png`, à intégrer dans les balises `.logo`).
2. **Photos** — les visuels (hero, destinations, gestion locative, propriétaires, voyageurs) sont
   actuellement des illustrations SVG dessinées sur-mesure dans la palette de marque (zellige,
   arches, palmiers), car l'environnement de développement n'avait pas accès aux banques d'images
   en ligne. Remplacez les `<img src="assets/illustrations/...">` par de vraies photographies
   professionnelles (Marrakech, Casablanca, riads, villas, piscines...) dans le même format.
3. **Coordonnées** — dans `js/main.js`, bloc `CONTACT` en haut du fichier :
   - `email` : adresse email officielle
   - `whatsappNumber` : numéro WhatsApp Business (format international sans « + »)
   - `phoneDisplay` : numéro de téléphone affiché
4. **Formulaire de contact** — actuellement le formulaire valide les champs et affiche un message
   de confirmation, mais n'envoie nulle part (voir commentaire `TODO` dans `js/main.js`,
   fonction de soumission). Branchez-le sur votre service d'envoi d'email, votre CRM ou l'API
   WhatsApp Business lors de la mise en production.
5. **Domaine** — les balises `canonical` et Open Graph dans `index.html` utilisent
   `https://www.fhsignature.ma/` à titre d'exemple ; à ajuster selon le nom de domaine réel.

## Simulateur de rentabilité

Le simulateur (`#estimation`) calcule, entièrement côté navigateur :

- CA brut mensuel = prix moyen / nuit × nuits réservées / mois
- Commission FH Signature = CA brut × 20 %
- Frais Airbnb estimés = CA brut × taux Airbnb (curseur configurable, 3 % par défaut)
- Revenu estimé propriétaire = CA brut − commission − frais Airbnb
- Estimation annuelle = revenu mensuel estimé × 12

Il s'agit d'une **estimation indicative**, clairement présentée comme telle sur le site.
