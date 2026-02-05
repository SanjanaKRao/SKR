# SKR — Personal Portfolio

The personal portfolio website of [Sanjana K Rao](https://sanjanakrao.com), built with vanilla HTML, CSS, and JavaScript. Deployed via GitHub Pages.

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page |
| About | `about.html` | Bio, achievements, and resume |
| Work | `work.html` | Project showcase |
| Experience | `experience.html` | Work history |
| Contact | `contact.html` | Contact links and info |

## Project Structure

```
SKR/
├── css/
│   └── styles.css              # Shared base styles (nav, footer)
├── images/
│   ├── cheers/                 # Achievement badge images
│   └── ...                     # Page-specific images and OG assets
├── js/
│   └── tracking.js             # Google Analytics custom events
├── index.html
├── about.html
├── work.html
├── experience.html
├── contact.html
├── SanjanaRao_WebResume.pdf    # Resume (linked from About page)
├── CNAME                       # GitHub Pages custom domain
└── README.md
```


## Analytics

Google Analytics 4 (GA4) is set up with the following custom events:

| Event | Fires When |
|---|---|
| `scroll_depth` | User scrolls past 25%, 50%, 75%, or 100% of a page |
| `resume_click` | User clicks "Open Resume" on the About page |

Page views are tracked automatically on every page.

## Deployment

Hosted on [GitHub Pages](https://docs.github.com/en/pages) with a custom domain configured via the `CNAME` file. Push to `main` to deploy.
