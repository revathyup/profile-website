# Professional profile website

Three pages:


| File                    | Use                                                                               |
| ----------------------- | --------------------------------------------------------------------------------- |
| `index.html`            | **Home** - short intro + two big links to the profiles                            |
| `technical.html`        | **Technical** - embedded, ML, robotics, GitHub, projects                          |
| `customer-success.html` | **Customer success** - banking, CRM, retention, KYC/AML (sales alignment in copy) |


Shared styling: `styles.css`

## Git (this folder is a repo)

Git is initialized here with branch `**main`** and an initial commit. To put it on **your GitHub** (`revathyup`):

1. On GitHub: **New repository** -> name e.g. `**profile-website`** -> **Public** -> create **without** README (this folder already has files).
2. In PowerShell:

```powershell
cd "c:\Users\upill\OneDrive\resumes and certificates\profile-website"
git remote add origin https://github.com/revathyup/profile-website.git
git push -u origin main
```

(Replace `profile-website` if you chose another repo name.)

1. Enable **Pages**: repo **Settings -> Pages ->** Deploy from branch `**main`**, folder `**/ (root)**`.

## Preview locally

Open `index.html` in your browser, or run a local server from this folder:

```bash
npx --yes serve .
```

## Publish (GitHub Pages)

Upload **all three HTML files** plus `styles.css` to the repo root, then enable Pages on branch `main`, folder `/ (root)`.

**URLs you can share**

- Home: `https://YOUR_USER.github.io/YOUR_REPO/`
- Technical only: `https://YOUR_USER.github.io/YOUR_REPO/technical.html`
- Customer success: `https://YOUR_USER.github.io/YOUR_REPO/customer-success.html`

## Edit

- Text: each `.html` file
- Colours: `styles.css` (`page-tech` vs `page-cs` use different accent colours)


