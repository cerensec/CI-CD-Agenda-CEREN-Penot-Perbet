# CI-CD-Calculatrice-CEREN-Penot-Perbet

## Projet:

Dans ce projet on trouvera une calculatrice sous la forme d'une application express. On utilisera des endpoints de notre application pour faire des opérations simples comme des additions, soustractions, etc.

Dans ce projet on trouvera aussi une CI, qui elle sera expliqué plus en détail dans une partie à part.

## CI:

Dans la CI on trouvera deux étapes : 

##### Build:

On va séparer le build dans plusieurs étapes, chaque étape avec son propre nom.

1. Checkout dans le repository: on utilise une action existant pour faire un checkout dans le repo
2. On va set up node: on va utiliser du node 19 dans ce projet et on utilise une action existante
3. Install des dépendances: on va exécuter un "npm install" dans la CI
4. Hadolint: on fait une vérification de lint dans le dockerfile du projet à l'aide de l'action hadolint
5. Lint: on fait un passage de lint dans tous les fichiers .js du projet pour vérifier que tout est en ordre.
6. Test run: on fait un run des tests unitaires disponibles dans l'application pour assurer que le code ajouté ne casse pas des comportements existant dans l'application.

##### Deploy:

Le job de deploy est aussi séparé dans plusieurs étapes, par contre le deploy est fait que quand le job de build est en succès sinon le CI est en échec et le pull request est bloqué:

1. Checkout Repository: on utilise une action existant pour faire un checkout dans le repo
2. Login Dockerhub: à l'aide de l'action docker/login-action@v1 on fait un login en accédant le repository de secrets pour récupérer l'username et le token de login de dockerhub
3. Build Docker image: on build notre image docker à l'aide de la variable d'environnement crée au début du job de deploy
4. Tag image Docker: on tag l'image buildé dans l'étape précédente pour ensuite faire le push
5. Push de l'image dans le Dockerhub: on fait le push de l'image taggué dans l'étape précédente
