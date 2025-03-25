# Personal Portfolio Website

This is my personal portfolio website built with Pelican, a static site generator written in Python. The site features a clean, modern design and includes sections for projects, about me, contact information, and an interactive Tic Tac Toe game.

## Features

- Responsive design that works on all devices
- Clean, minimalist aesthetic
- Project showcase with descriptions and links
- About section with professional background
- Contact form for inquiries
- Interactive Tic Tac Toe game
- Social media integration
- Blog support (if needed)

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required packages:
```bash
pip install -r requirements.txt
```

## Development

To build and serve the site locally:

```bash
pelican content
pelican --listen
```

The site will be available at `http://localhost:8000`.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To manually deploy:

1. Build the site for production:
```bash
pelican content -s publishconf.py
```

2. Push the changes to GitHub:
```bash
git add .
git commit -m "Update website content"
git push origin main
```

## Project Structure

```
yourusername.github.io/
├── content/
│   ├── pages/           # Static pages
│   └── images/          # Image assets
├── themes/
│   └── notmyidea/       # Custom theme
├── output/             # Generated site (not in repo)
├── pelicanconf.py      # Development settings
├── publishconf.py      # Production settings
└── requirements.txt    # Python dependencies
```

## Customization

1. Edit `pelicanconf.py` to modify site settings
2. Update content in the `content/pages/` directory
3. Modify the theme in `themes/notmyidea/`
4. Add new features by editing templates and CSS

## License

This project is licensed under the MIT License - see the LICENSE file for details. 