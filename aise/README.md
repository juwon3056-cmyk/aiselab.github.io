# AISE Lab Website

AI & Structural Engineering Laboratory website for Sejong University.

## Design

- **Style**: Clean, modern, CMU-inspired design
- **Primary Color**: #2C4E5E (logo color)
- **Framework**: Pure HTML + CSS (no external dependencies)
- **Responsive**: Mobile-friendly design

## Structure

```
aise-lab-website/
├── index.html          # Main homepage
├── research.html       # Research areas with details
├── publications.html   # Links to academic profiles
├── people.html         # Professor + undergraduate researcher
├── projects.html       # Research projects
├── contact.html        # Contact information
├── images/
│   ├── logo.svg       ✅ Lab logo (provided)
│   ├── professor.png  📷 Need to add
│   ├── juwon-choi.png 📷 Need to add
│   ├── research-1.png 📷 Need to add (AI Surrogate Analysis)
│   ├── research-2.png 📷 Need to add (AI Automated Design)
│   └── research-3.png 📷 Need to add (AI Robot Operations)
└── README.md
```

## Required Images

### Essential
1. **professor.png** - Professor Seunghye Lee profile photo (square/circle recommended)
2. **juwon-choi.png** - Undergraduate researcher photo (square/circle recommended)

### Research Images
3. **research-1.png** - AI-based Surrogate Structural Analysis visualization
4. **research-2.png** - AI-based Automated Structural Design visualization
5. **research-3.png** - AI-based Construction Robot Operations visualization

### Optional
- News/update images (can be added later)

## How to Add Images

1. Save images in the `images/` folder
2. Use the exact filenames listed above
3. **Format**: SVG for logo, PNG for all photos
4. Recommended size: 
   - Profile photos: 400x400px minimum
   - Research images: 800x600px minimum

## Updating Content

### Adding News/Updates (index.html)

Find the "Latest Updates" section and edit:

```html
<div class="news-card">
    <div class="news-image">
        <img src="images/your-news-image.jpg" alt="News Title">
    </div>
    <div class="news-content">
        <p class="news-date">January 2026</p>
        <h3>Your News Title</h3>
        <p>Your news description here.</p>
    </div>
</div>
```

### Adding Projects (projects.html)

Copy the project card template:

```html
<div class="project-card">
    <div class="project-header">
        <span class="project-status status-active">Active</span>
        <h3>Project Title</h3>
    </div>
    <div class="project-meta">
        <div class="meta-item">
            <div class="meta-label">Funding Agency</div>
            <div class="meta-value">Agency Name</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Period</div>
            <div class="meta-value">Start - End</div>
        </div>
        <div class="meta-item">
            <div class="meta-label">Role</div>
            <div class="meta-value">Your Role</div>
        </div>
    </div>
    <div class="project-description">
        <p>Project description here.</p>
    </div>
</div>
```

## Deployment

### Local Testing

Option 1: Double-click `index.html`

Option 2: Python server
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

Option 3: Node.js
```bash
npx http-server
```

### School Server Deployment

1. Connect via FTP/SFTP
2. Upload all files to web directory
3. Set permissions:
   - Directories: 755
   - Files: 644

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Contact

- Email: seunghye@sejong.ac.kr
- Location: Room 229, Chungmu Building, Sejong University
- Phone: 02-6935-2618

## License

© 2026 AISE Lab, Sejong University
