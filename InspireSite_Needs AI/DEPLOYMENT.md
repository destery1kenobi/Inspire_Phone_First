# INSPIRE Clinical AI Assistant - Deployment Checklist

## Files Ready for Deployment

Your outputs folder now contains:

✅ **AI Health Tool.html** - Main website file
✅ **logo_INSPIRE_2.png** - Logo image (8.9 KB)
✅ **README.md** - Setup documentation

## Deployment Steps

### Option 1: Local Testing
1. Download all 3 files to a folder on your computer
2. Keep them all in the same folder (e.g., "AI HealthCare")
3. Double-click `AI Health Tool.html` to open in your browser
4. The logo should load correctly

### Option 2: Server Deployment
1. Upload all 3 files to your web server
2. Keep them in the same directory
3. Access via: `https://your-domain.com/AI Health Tool.html`

## Troubleshooting

**If logo doesn't appear:**
- ✓ Check that `logo_INSPIRE_2.png` is in the SAME folder as the HTML file
- ✓ Check file name is exactly: `logo_INSPIRE_2.png` (case-sensitive)
- ✓ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**File Requirements:**
- Both files must be in the same directory
- No subfolders needed
- File names are case-sensitive on some servers

## Current Image References

The HTML file references the logo as:
```html
<img src="logo_INSPIRE_2.png" alt="INSPIRE Logo">
```

This works when both files are in the same folder.

## Next Steps

1. ✅ Download all files
2. ✅ Keep them together in one folder
3. ✅ Test locally first
4. ✅ Upload to server when ready
5. ⏳ Integrate AI assistant (see README.md)
