## Branching Workflow

Each member should work on their own feature branch for their assigned component.

### Steps:

1. Make sure you’re in the project root:
   ```bash
   cd ~/my-projects/scholarmatch


Update your local main branch:

git checkout main
git pull origin main


Create a new branch for your component:

git checkout -b feature/<name>-<component>


Example:

git checkout -b feature/Kess-header


Do your coding inside your assigned component file.

Stage, commit, and push your changes:

git add .
git commit -m "Implemented Header component"
git push origin feature/alice-header