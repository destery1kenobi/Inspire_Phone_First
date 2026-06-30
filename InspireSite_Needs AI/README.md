# INSPIRE Clinical AI Assistant - Setup Guide

## Folder Structure

Your website is organized as follows:

```
/AI HealthCare/
├── AI Health Tool.html          (main website file)
├── logo_INSPIRE_2.png          (INSPIRE logo)
└── (other images/assets)
```

## File Locations

- **Main HTML File**: `AI Health Tool.html`
- **Logo**: `logo_INSPIRE_2.png` (in the same folder)
- **Additional Assets**: Place any other images in the same `AI HealthCare` folder

## Setup Instructions

1. Keep all files in the `AI HealthCare` folder together
2. `AI Health Tool.html` and `logo_INSPIRE_2.png` should be in the same directory
3. Add any additional images or assets to the same folder

## Updating Image Paths

All images are referenced relative to the HTML file location (same folder):
- Logo images: `logo_INSPIRE_2.png`
- Add new images: `your-image-name.png`

## AI Integration

The AI assistant integration area is marked in the HTML with:
```html
<!-- AI INTEGRATION BLOCK -->
```

Your integration partner will provide the script to insert in this section.

## Notes

- The website is fully responsive and works on all devices
- All styling is embedded in the HTML file (no external CSS required)
- The accordion menu for Key Principles uses vanilla JavaScript (no dependencies)
- HIPAA compliance and privacy measures should be configured during AI integration
- All files are contained in one folder for easy deployment
