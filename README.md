# Portfolio NC3D

## Intro

Site en Astro 5.8 et Tailwind 4.2.
Module @astro/mdx

## Installation

- npm install

## Commandes

- npm run dev : Lance la version de developpement
- npm run build : Construit la version html css dans le dossier dist.
- npm serv /dist: test du build.

## Structure

### Base

BaseLayout.astro

### Footer

/common/Footer.astro

- Liens RS
- Lien mentions légales

### Pages

#### Home

HomeLayout.astro

**Banner**

Composant: /home/HomeBanner

- Image

**Hero**

Composant: /home/HomeIntro

- Logo
- Titre
- Description

**Description des services**

Composant: /home/Services

- Visible que en desktop
- 3 cases avec logo + h3

**Galerie**

Composant: /common/Gallery

- Listes de projets en mobile, lien vers projets en desktop

#### Projects

GalerieLayout.astro

- Liste des projets.
- Liens vers projet correspondant

#### Project

ProjectLayout.astro

- gestion des projets avec content collection, utilise des fichiers md ou mdx
  - Frontmatter
    - title string
    - slug string
    - tags arrray
    - date string
    - cover string
    - coverAlt string
- MDX
  - Sections definies par un composant: /common/Section
  - integration video Youtube via composant: /common/Youtube

- creation de config.ts dans /content pour valider les types
  - defineCollection pour creer la collection des variables du frontmatter
  - helper image pour gestion thumbnail
  - zod pour la validation

#### Mentions Legales
