# 🚀 Installation et Déploiement

## ✅ Votre dossier `papillon-Guadeloupe` est presque prêt !

Ce dossier contient tous les fichiers **racine** et **public** nécessaires pour déployer votre site.

### ⚠️ IMPORTANT - Fichiers Manquants

Pour que le site fonctionne, vous devez **copier manuellement** ces dossiers depuis votre projet actuel :

#### 📁 Dossiers à Copier

1. **`components/`** (tout le dossier avec ses 61 fichiers)
   - Depuis : `/components/`
   - Vers : `/papillon-Guadeloupe/components/`

2. **`pages/`** (tout le dossier avec ses 12 fichiers)
   - Depuis : `/pages/`
   - Vers : `/papillon-Guadeloupe/pages/`

### 📋 Comment Copier

**Option 1 - Interface Figma Make** :
Si vous pouvez voir les fichiers dans Figma Make, sélectionnez les dossiers `components/` et `pages/` et copiez-les dans ce dossier `papillon-Guadeloupe/`.

**Option 2 - Manuellement** :
1. Ouvrez votre explorateur de fichiers
2. Naviguez vers le dossier de votre projet actuel
3. Copiez le dossier `components/` entier
4. Collez-le dans `papillon-Guadeloupe/`
5. Répétez pour le dossier `pages/`

### ✅ Structure Finale Attendue

Après avoir copié ces dossiers, votre dossier `papillon-Guadeloupe/` devrait contenir :

```
papillon-Guadeloupe/
├── components/          ✅ À COPIER (61 fichiers)
│   ├── BackButton.tsx
│   ├── ImageConfig.tsx
│   ├── Layout.tsx
│   ├── ScrollToTop.tsx
│   ├── VideoPlayer.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       └── (55 fichiers Shadcn)
│
├── pages/              ✅ À COPIER (12 fichiers)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── EntretienPaysager.tsx
│   ├── FAQ.tsx
│   ├── Galerie.tsx
│   ├── Home.tsx
│   ├── LocationMotoculteur.tsx
│   ├── MentionsLegales.tsx
│   ├── NotFound.tsx
│   ├── Processus.tsx
│   ├── Realisations.tsx
│   └── Services.tsx
│
├── public/             ✅ DÉJÀ CRÉÉ
│   ├── images/
│   │   └── README.md
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
│
├── styles/             ✅ DÉJÀ CRÉÉ
│   └── globals.css
│
├── .gitignore          ✅ DÉJÀ CRÉÉ
├── App.tsx             ✅ DÉJÀ CRÉÉ
├── index.html          ✅ DÉJÀ CRÉÉ
├── LICENSE             ✅ DÉJÀ CRÉÉ
├── main.tsx            ✅ DÉJÀ CRÉÉ
├── package.json        ✅ DÉJÀ CRÉÉ
├── README.md           ✅ DÉJÀ CRÉÉ
├── tsconfig.json       ✅ DÉJÀ CRÉÉ
├── vercel.json         ✅ DÉJÀ CRÉÉ
└── vite.config.ts      ✅ DÉJÀ CRÉÉ
```

### 🧪 Tester le Dossier

Une fois que vous avez copié les dossiers `components/` et `pages/` :

```bash
# 1. Ouvrir un terminal dans le dossier papillon-Guadeloupe
cd papillon-Guadeloupe

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site devrait s'ouvrir sur http://localhost:5173

### 🚀 Déployer sur GitHub + Vercel

Une fois que le test local fonctionne :

1. **GitHub** :
   - Créez un nouveau repository "papillon-guadeloupe"
   - Uploadez TOUT le contenu de ce dossier `papillon-Guadeloupe/`
   - N'oubliez PAS `package.json` !

2. **Vercel** :
   - Connectez-vous avec GitHub
   - Importez le projet "papillon-guadeloupe"
   - Deploy
   - Site en ligne en 2-3 minutes !

### 💰 Coût

**0€** - Tout est gratuit (GitHub + Vercel)

### 📊 Checklist Finale

- [ ] Dossier `components/` copié (61 fichiers)
- [ ] Dossier `pages/` copié (12 fichiers)
- [ ] Total : ~88 fichiers dans `papillon-Guadeloupe/`
- [ ] `npm install` fonctionne
- [ ] `npm run dev` fonctionne
- [ ] Site s'affiche sur http://localhost:5173
- [ ] Uploadé sur GitHub
- [ ] Déployé sur Vercel

---

**🎉 Une fois ces étapes terminées, votre site sera en ligne !**

📖 Consultez `README.md` pour plus d'informations sur le projet.
