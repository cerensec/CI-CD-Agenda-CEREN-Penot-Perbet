# CI-CD-Calculatrice-CEREN-Penot-Perbet

## Projet:

Dans ce projet, on trouvera une calculatrice sous la forme d'une application Express. On utilisera des endpoints de notre application pour effectuer des opérations simples comme des additions, des soustractions, multiplication ou encore des divisions.

Dans ce projet, on trouvera aussi une CI, qui sera expliquée plus en détail dans une partie à part.

## CI:

Dans la CI, on trouvera deux étapes :

### Build:

On va séparer le build en plusieurs étapes, chaque étape avec son propre nom.

1. **Checkout dans le repository**: on utilise une action existante pour faire un checkout dans le repo.
2. **Set up Node.js**: on va utiliser du node 19 dans ce projet et on utilise une action existante.
3. **Installation des dépendances**: on exécute un "npm install" dans la CI.
4. **Hadolint**: on fait une vérification de lint dans le Dockerfile du projet à l'aide de l'action hadolint.
5. **Lint**: on fait un passage de lint dans tous les fichiers .js du projet pour vérifier que tout est en ordre.
6. **Test Run**: on fait un run des tests unitaires disponibles dans l'application pour s'assurer que le code ajouté ne casse pas des comportements existants dans l'application.

### Deploy:

Le job de deploy est également séparé en plusieurs étapes, par contre, le deploy est fait que lorsque le job de build est en succès sinon la CI est en échec et le pull request est bloqué :

1. **Checkout Repository**: on utilise une action existante pour faire un checkout dans le repo.
2. **Login Dockerhub**: à l'aide de l'action docker/login-action@v1, on fait un login en accédant le repository de secrets pour récupérer l'username et le token de login de Dockerhub.
3. **Build Docker image**: on build notre image Docker à l'aide de la variable d'environnement créée au début du job de deploy.
4. **Tag image Docker**: on tag l'image buildée dans l'étape précédente pour ensuite faire le push.
5. **Push de l'image dans le Dockerhub**: on fait le push de l'image taguée dans l'étape précédente.
6. **Génération des notes de publication GitHub**: On génère automatiquement les notes de publication GitHub pour la version déployée.

### Livraison Continue (CD) pour les Tags
La livraison continue est déclenchée lorsqu'un nouveau tag Git est créé. Le pipeline CD est similaire au processus de déploiement continu, mais il est spécifique aux versions taguées.

### Convention de Déploiement
L'image Docker est déployée en fonction de la convention de version de la branche ou du tag :
- Pour la branche principale, l'image Docker est déployée comme la version la plus récente.
- Pour les tags Git, chaque tag correspond à une version spécifique de l'image Docker.

### Routes de l'API:

Ci-dessous les routes disponibles sur le port 3000 dans l'API de la calculatrice:

- `/` (GET): Renvoie un message de bienvenue dans l'API de la calculatrice.
- `/add` (POST): Permet d'effectuer une addition en envoyant les paramètres `a` et `b` dans le corps de la requête.
- `/subtract` (POST): Permet d'effectuer une soustraction en envoyant les paramètres `a` et `b` dans le corps de la requête.
- `/multiply` (POST): Permet d'effectuer une multiplication en envoyant les paramètres `a` et `b` dans le corps de la requête.
- `/divide` (POST): Permet d'effectuer une division en envoyant les paramètres `a` et `b` dans le corps de la requête.
