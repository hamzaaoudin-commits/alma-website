# 🌿 ALMA — Site Web

**Site officiel d'ALMA, l'application de rencontre qui rend les gens à la vie réelle.**

*Quelqu'un, pas quelque chose.*

---

## Vue d'ensemble

Site statique multi-pages construit en HTML/CSS/JS vanilla, conçu pour un déploiement instantané sur Vercel.

**Pages incluses :**
- `/` — Accueil
- `/manifeste.html` — Manifeste fondateur
- `/vision.html` — Vision et 6 refus fondateurs
- `/produit.html` — Présentation de l'application
- `/fondateur.html` — Récit personnel d'Hamza
- `/presse.html` — Espace presse
- `/investisseurs.html` — Espace investisseurs

---

## Structure du projet

```
alma-website/
├── index.html              # Page d'accueil
├── manifeste.html          # Manifeste fondateur
├── vision.html             # Vision et 6 refus
├── produit.html            # Présentation produit
├── fondateur.html          # Récit fondateur
├── presse.html             # Espace presse
├── investisseurs.html      # Espace investisseurs
├── css/
│   ├── main.css            # Design system global
│   ├── home.css            # Styles spécifiques accueil
│   └── pages.css           # Styles pages secondaires
├── js/
│   └── main.js             # JavaScript partagé
├── assets/
│   ├── alma-maquettes.html # 18 écrans visuels
│   └── alma-presentation.html # Présentation animée
├── README.md               # Ce fichier
├── vercel.json             # Configuration Vercel
└── .gitignore              # Fichiers à ignorer
```

---

## 🚀 Déploiement étape par étape

### Étape 1 : Créer un compte GitHub (si nécessaire)

1. Va sur [github.com](https://github.com)
2. Inscris-toi gratuitement
3. Choisis ton nom d'utilisateur (recommandation : `hamza-aljawahiry` ou similaire)

### Étape 2 : Créer le dépôt GitHub

1. Clique sur le `+` en haut à droite → "New repository"
2. Nom du dépôt : `alma-website`
3. Description : "Site officiel d'ALMA — quelqu'un, pas quelque chose"
4. Sélectionne **Public** (recommandé) ou **Private**
5. Coche "Add a README file"
6. Clique sur "Create repository"

### Étape 3 : Uploader les fichiers

**Méthode simple (par interface web) :**

1. Sur la page du dépôt, clique sur "Add file" → "Upload files"
2. Glisse-dépose **tous les fichiers et dossiers** de ce projet
3. Message de commit : "Initial commit — ALMA website v1.0"
4. Clique sur "Commit changes"

**Méthode avancée (par ligne de commande) :**

```bash
# Dans le dossier alma-website
git init
git add .
git commit -m "Initial commit — ALMA website v1.0"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/alma-website.git
git push -u origin main
```

### Étape 4 : Connecter Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Inscris-toi gratuitement avec ton compte GitHub
3. Clique sur "Add New..." → "Project"
4. Sélectionne ton dépôt `alma-website`
5. Vercel détecte automatiquement la configuration → clique sur "Deploy"
6. **Ton site est en ligne en 30 secondes** sur une URL en `.vercel.app`

### Étape 5 : Configurer le domaine alma.app

**Si tu as déjà acheté alma.app :**

1. Sur Vercel, ouvre ton projet
2. Va dans "Settings" → "Domains"
3. Ajoute `alma.app` et `www.alma.app`
4. Vercel te donne 2 enregistrements DNS à configurer chez ton registrar (où tu as acheté le domaine)
5. Configure ces enregistrements dans l'interface de ton registrar
6. **Attends 5 à 60 minutes** la propagation DNS
7. Vercel active automatiquement le HTTPS

**Tu n'as pas encore acheté alma.app :**

Va sur [namecheap.com](https://namecheap.com) ou [gandi.net](https://gandi.net) ou [ovh.com](https://ovh.com) et achète le domaine. Coût : ~15-25€/an pour `.app`.

---

## ✏️ Modifier le site

### Pour modifier du texte

Ouvre simplement le fichier `.html` correspondant dans un éditeur de texte (VSCode recommandé, ou même TextEdit / Notepad++) et modifie le contenu entre les balises.

### Pour modifier les couleurs

Ouvre `/css/main.css` et modifie les variables CSS au début du fichier (section `:root`).

### Pour déployer les modifications

**Méthode interface GitHub :**
1. Va sur le fichier modifié dans GitHub
2. Clique sur le crayon (✏️) pour éditer
3. Fais tes modifications
4. Clique sur "Commit changes" en bas
5. Vercel redéploie automatiquement en 30 secondes

**Méthode ligne de commande :**
```bash
git add .
git commit -m "Description de la modification"
git push
```

---

## 🔧 Configuration du formulaire d'inscription

Le formulaire de la liste d'attente est actuellement **non connecté** à un backend.

Pour le connecter à un vrai service :

### Option 1 — Brevo (recommandé, gratuit jusqu'à 9000 contacts)

1. Inscris-toi sur [brevo.com](https://brevo.com)
2. Crée une liste "ALMA — Liste d'attente"
3. Récupère l'URL du formulaire API
4. Dans `/js/main.js`, remplace le `console.log` par un vrai `fetch()` vers cette URL

### Option 2 — Airtable

1. Crée une base "ALMA Waitlist" sur [airtable.com](https://airtable.com)
2. Récupère l'API key et l'URL de la base
3. Configure le `fetch()` dans `main.js`

### Option 3 — Formspree (le plus simple, 50 emails/mois gratuits)

1. Inscris-toi sur [formspree.io](https://formspree.io)
2. Crée un formulaire
3. Copie l'URL fournie
4. Modifie le `action="..."` du formulaire dans `index.html`

---

## 📊 Analytics et tracking

**À ajouter quand le site est en ligne :**

### Google Analytics 4

1. Crée un compte sur [analytics.google.com](https://analytics.google.com)
2. Récupère ton code de tracking
3. Colle-le dans le `<head>` de chaque page HTML

### Plausible (alternative respectueuse RGPD)

1. Inscris-toi sur [plausible.io](https://plausible.io) (9€/mois)
2. Ajoute le script dans le `<head>` de chaque page

---

## 🛡️ Sécurité et conformité

**Avant publication publique :**

- [ ] Vérifie qu'aucune information confidentielle ne fuite (chiffres financiers précis, stratégie de cold start)
- [ ] Ajoute les mentions légales (à créer avec ton avocat — voir `alma-brief-juridique.docx`)
- [ ] Ajoute une politique de confidentialité conforme RGPD
- [ ] Configure les cookies (probablement pas nécessaire si pas d'analytics)
- [ ] Vérifie que les emails (`hamza@alma.app`, `presse@alma.app`, `hello@alma.app`) fonctionnent

---

## 🎨 Crédits design

- **Typographies** : Fraunces (display), Cormorant Garamond (italic), Inter (UI)
- **Palette** : Crème (#F4EFE6), Encre profonde (#1A1814), Bordeaux (#6B1F2A), Or (#A88B5A)
- **Inspiration** : esthétique éditoriale, minimalisme premium, sobriété assumée

---

## 📞 Support

Pour toute question sur le code, écris à `hamza@alma.app`.

---

*Site ALMA · Version 1.0 · Mai 2026*
*Quelqu'un, pas quelque chose.*
