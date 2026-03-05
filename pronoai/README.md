# 🔥 PronoAI — Déploiement sur Vercel

## Structure du projet
```
pronoai/
├── api/
│   └── odds.js        ← Proxy serveur (cache ta clé API)
├── public/
│   └── index.html     ← Le site complet
├── vercel.json        ← Config Vercel
├── package.json
└── README.md
```

---

## 🚀 Déploiement en 5 minutes

### Étape 1 — Créer un compte Vercel
→ Va sur https://vercel.com et connecte-toi avec GitHub (gratuit)

### Étape 2 — Installer Vercel CLI
```bash
npm install -g vercel
```

### Étape 3 — Déployer
Dans le dossier du projet :
```bash
vercel
```
Suis les instructions (projet nouveau, pas de framework, dossier public = `public`)

### Étape 4 — Ajouter ta clé API (IMPORTANT)
Dans le dashboard Vercel → ton projet → **Settings → Environment Variables**

Ajoute :
```
Name  : ODDS_API_KEY
Value : fcbba8a21922c53546f994dd424dafdf
```
Coche : ✅ Production  ✅ Preview  ✅ Development

### Étape 5 — Redéployer
```bash
vercel --prod
```

✅ Ton site est en ligne avec les vraies cotes !

---

## 🔑 Ta clé API The Odds API
- Dashboard : https://the-odds-api.com/account
- Quota gratuit : **500 requêtes/mois**
- Chaque chargement de matchs = ~2 requêtes
- Astuce : les cotes sont mises en cache 10 min pour économiser le quota

---

## 💰 Monétisation

### Affiliés bookmakers (le plus lucratif)
- **Unibet** : 50-80€ par inscription
- **Winamax** : 50€ par dépôt qualifiant  
- **Betclic** : 20-50€ par inscription
- **PMU** : 100€+ par joueur actif

Remplace les boutons "Passer Pro" par tes liens affiliés.

### Abonnements (Stripe)
- Plan Gratuit : 3 analyses/jour
- Plan Pro 19€/mois : illimité + 47 variables
- Plan Expert 49€/mois : API + alertes Telegram

### Google AdSense
Ajoute le script AdSense dans `<head>` pour les utilisateurs gratuits.

---

## 🛠 Domaine personnalisé
Dans Vercel → Settings → Domains → ajoute `pronoai.fr` ou ton domaine.
Namecheap propose des .com à ~10€/an.

---

## 📈 Prochaines fonctionnalités à ajouter
- [ ] Système de login (Clerk.dev — gratuit)
- [ ] Historique des pronostics en base de données (Supabase — gratuit)
- [ ] Alertes Telegram/Discord
- [ ] Vrai modèle IA (OpenAI API)
- [ ] Tracker de bankroll personnel
