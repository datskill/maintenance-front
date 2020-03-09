# OpenData Paris API

## Intégration continue

Notre intégration continue se compose des outils suivants : 

- Docker
- Jenkins
- SonarQube


[Instalation et configuration d'un environnement de développement](docs/conf-env.md)


[Instalation et configuration de Jenkins](docs/conf-jenkins.md)


[Instalation et configuration de SonarQube](docs/conf-sonar.md)

## Installation et configuration d'un environnement de développement


### Docker

Pour installer Docker sur Windows, il faut obligatoirement Windows 10 professionnel, sinon il faudra télécharger Docker ToolBox.

Pour l’installation de Docker ou Docker ToolBox il est nécessaire d’avoir accès à un terminal de ligne de commande type “shell bash Linux”. Pour linux et Mac, utiliser le terminal natif. Si vous êtes sur Windows et qu’il ne l’embarque pas déjà, suivez le guide suivant ou équivalent : https://www.zebulon.fr/astuces/divers/executer-linux-sous-windows-10.html.

Si vous ne pouvez pas installer le shell bash pour Windows, installer et utiliser le bash github : https://git-scm.com/download/win.

### Windows 10 PRO :

Ce rendre sur le site de Docker : https://www.docker.com/get-started
Cliquer sur le bouton “Download Desktop and Take a Tutorial”
Créer un compte Docker
Télécharger l'exécutable pour Windows
Double-cliquez sur "Docker Desktop Installateur.exe" pour lancer l'installateur
Suivez l'assistant d'installation : acceptez la licence, autorisez l'installateur et procédez à l'installation
Cliquez sur "Close" pour terminer l'installation
Dans un nouveau terminal lancer docker -v , si le terminal vous donne la version actuelle de docker alors l’installation est réussi
docker-v

Vous pouvez maintenant lancer Docker Desktop en le recherchant dans la barre de recherche de Windows et en cliquant dessus
Exécuter le tutoriel Docker Hello-World pour apprendre les commandes de bases de docker et vérifier l'installation docker run hello-world .

### Pour Windows 10 (Standard, Famille..) ou < 10 :

Ce rendre sur le GitHub Docker ToolBox : https://github.com/docker/toolbox/releases
Télécharger le dernier exécutable stable disponible (“DockerToolbox-XX.XX.X.exe”)
Suivre les instructions d’installations du launcher
Une fois fini vous devriez avoir un nouveau programme “Docker QuickStart”
Exécuter “Docker QuickStart”
Un terminal s’ouvre, s’il demande un “User Account Control”, répondre par “Yes”
Quand l’initialisation est terminée, le terminal affichera un “$”
Dans un nouveau terminal lancer docker -v si le terminal vous donne la version actuelle de docker alors l’installation est réussi
docker-v

Exécuter le tutoriel Docker Hello-World pour apprendre les commandes de bases de docker et vérifier l'installation.docker run hello-world

### Pour MacOS:

Ce rendre sur le Docker : https://docs.docker.com/docker-for-mac/install/ et cliquer sur “Download from Docker Hub”
Créer un compte Docker
Exécuter le fichier “docker.dmg”
Suivre l’installateur comme pour toute application Mac, déplacer l'éxécutable dans le dossier “Application”
Exécuter Docker Desktop mac

-1
Vous devriez voir apparaître l'icone de Docker dans la TopBar mac

-2
Cliquer sur l’icone docker de la TopBar 

-3
Une fenêtre vous affichera le statut d'installation de votre docker et aussi un formulaire pour vous connecter avec votre compte Docker.


Dans un nouveau terminal lancer docker -v si le terminal vous donne la version actuelle de Docker, alors l’installation est réussi docker-v

Exécuter le tutoriel Docker Hello-World pour apprendre les commandes de bases de docker et vérifier l'installation ```docker run hello-world```.


### Pour Ubuntu Disco 19.04 / Cosmic 18.10 / Bionic 18.04 (LTS) / Xenial 16.04 (LTS) :

#### METTRE EN PLACE LE DÉPÔT

Ouvrez un terminal natif et updater les packages : ```sudo apt-get update```

Installer des paquets pour permettre à apt d'utiliser un référentiel sur HTTPS : ```sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common```

Ajoutez la clé GPG officiel de Docker : ```curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -```

Vérifiez que vous avez maintenant la clé avec l'empreinte digitale **9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88**,  en recherchant les 8 derniers caractères de l'empreinte digitale. ```sudo apt-key fingerprint 0EBFCD88```

Utilisez la commande suivante pour mettre en place le dépôt stable : ```sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
INSTALLER DOCKER ENGINE - COMMUNITY```

Une fois le dépôt bien ajouté, lancer la commande suivante : `sudo apt-get update`

Installer la dernière version de Docker Engine - Community : `sudo apt-get install docker-ce docker-ce-cli containerd.io`

Dans un nouveau terminal lancer `docker -v` si le terminal vous donne la version actuelle de docker alors l’installation est réussi 

Exécuter le tutoriel Docker Hello-World pour apprendre les commandes de bases de docker et vérifier l'installation 

I**NSTALLER DOCKER COMPOSE**

Cette commande permet de télécharger la version stable actuelle de Docker Compose : ```sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose```

Appliquer les permissions d'exécution au binaire : `sudo chmod +x /usr/local/bin/docker-compose`
Tester l'installation: `docker-compose --version`

 Cela devrait afficher : ???
 

Vous avez maintenant finis de configurer Docker, et pouvez désormais installer Jenkins et SonarQube


## Jenkins

Dans un soucis d'automatisation et de rapidité, nous avons crée notre propre image Jenkins qui sera construit dans un Docker-Compose qui est aussi produit par nos soins.

Vous retrouverez dans le répertoire front, dans le dossier "CI", un fichier **Dockerfile**, c'est ce fichier qui permet de construire l'image Jenkins. 

Pour constuire l'image, placez vous dans le répertoire "CI" du projet Front et tapez la commande suivante

- `docker build -t custom/jenkins .`

Une image sous le nom "custom/jenkins" sera créée

L'image est maintenant créée, il faut crée un container avec cette image Jenkins, pour celà, vous avez à votre disposition un fichier "**Docker-compose.yml**" qui permet d'automatiser la création du container Jenkins. Pour éxécuter le Docker-compose, il faudra rentrer la commande suivante : 

- `docker-compose up -d`

(L'éxécution du docker compose cré era aussi un container SonarQube mais nous y reviendrons plus tard)

Vous pouvez maintenant vous rendre à l'adresse suivante "http://localhost:8181". Il vous faudra attendre quelques minutes que Jenkins se lance. 

Vous pouvez vous connecter avec les identifiants suivants : 

**Nom d'utilisateur** : `admin` 

**Mots de passe** : `admin`

Jenkins est automatiquement configuré avec les plugins nécessaire au front (nodeJS + SonarQube). 

Maintenant, il faut créer un build Jenkins qui analyse le code. 

Dans le menu principal de Jenkins, cliquez sur "**New Item**" dans le bandeau de gauche

Entrez le nom du build

Cliquez sur "**Pipeline**"

Cliquez sur "**Ok**"

Dans la configuration du build, allez dans la section "**Pipeline**"

Choissiez "**Pipeline script from SCM**"

Dans SCM, choissisez  "**Git**"

Dans Repositories : entrez le lien de votre repository 

Laissez les credential vident s si votre repository est public, sinon ajouter vos crédentials Github/Gitlab

Dans Branches to Build, laissez "**Master**"

Dans Script Path, éctivez "**Jenkinsfile**"

Cliquez sur Save puis Apply

Votre build Jenkins est maintenant configuré car le Jenkinsfile s'occupera de définir les différentes étapes de votre build

Le build Jenkins éxécutera les étapes suivantes : 

- Installation des dépendances du projet
- Analyse du code sur SonarQube (le build s'arrêtera si une erreur apparait sur Sonar)
- Build de l'application
- Exécution des tests


Nous allons maintenant préparer la configuration de SonarQube sur Jenkins

Rendez-vous dans la page d'accueil de Jenkins

Cliquez sur "**Manage Jenkins**" dans le bandeau de gauche

Cliquez sur "**Configure System**"

Recherchez la section "**SonarQube servers**"

Cochez la case "**Enable injection of SonarQube server configuration as build environment variables**"

Dans "**Name**", rentrez "**sonar-scanne**r"

Dans "**Server URL"**, rentrez "http://sonarqube:9000/"

Cliquez sur "**Save**" puis "**Apply**"


## SonarQube

Normalement, le container SonarQube est déjà lancé à l'adresse suivante : http://localhost:9000/. Si ce n'est pas le cas, éxécuter "docker-compose up -d"

Rendez-vous à l'adresse : http://localhost:9000/

Connectez vous avec les identifiants par défauts

**Nom d'utilisateur** : `admin`

**Mots de passe** : `admin`

Nous allons installer les plugins **SonarJS** & **SonarTS** pour que Sonar puisse analyser notre code React - Typescript

Dans la barre de navigation, cliquez sur "**Administration**"

Dans la barre, au dessous de la barre de navigationn cliquez sur "'**Marketplace**"

Dans le barre de recherche du Marketplace, recherchez "**SonarJS**" (SonarTS est inclus dans SonarJS)

Cliquez sur "**Installer**", attendez que l'installation finisse puis rendez-vous sur la page d'accueil de SonarQube

Cliquez sur "**Create New Project**"

Dans "**project Key**", rentrez "**maintenance-front**"

Cliquez sur le bouton "**Set up**"


Dans "**Generate a token**", entrez "**maintenance-front"**

Pour la question "**What's your project's main language**", répondez "**Other**"

Sélectionner l'**OS** correspondant au votre

Copier/Coller la commande SonarQube et éxécuter la à la racine du projet. (Il vous faudra avoir **Sonar-Scanner** d'installer sur votre ordinateur)

Aprés avoir éxécuter avec succés la commande de SonarQube, le projet devrait apparaitre sur la page d'accueil de SonarQube. 


SonarQube est maintenant configuré. Nous allons créer un Token sur Sonar pour que Jenkins et Sonar puissent communiquer entre eux. 

Dans la barre de navigation, sur la gauche, cliquez sur votre profil, puis cliquez sur "**My Account**"

Cliquez sur "'**Security**"

Générez un nouveau token qui a pour label "**sonar-scanner**". **Copiez** la clé secréte fournit par Sonar

Retournez dans Jenkins

Retournez à la configuration d'un SonarQube Server (**Manage Jenkins --> Manage System**)

Dans "**Server authentication token**", cliquez sur le bouton "**Add**"

Dans "'**Kind**", mettez "**Secret Text**"

Dans "**Secret**", coller la clé précédemment copié sur Sonar

Dans "**Id**", rentrez "**maintenance-front**"

Laissez "Description" vide

Cliquez sur "[Add](http://sonarqube:9000/)'

Dans la liste déroulante, sélectionnez le token vous avez créez

Cliquez sur "**Save**" puis "**Apply**"

Maintenant, SonarQube pourra envoyer le résultat de l'analyse de code à Jenkins. 

Jenkins et SonarQube sont maintenant configurés. Si vous voulez en savoir plus concernant le Dockerfile, Docker-Compose, JenkinsFile, Sonar-Properties, vous pouvez vous rendre dans l'annexe pour une description des fichiers.




