# Personal Photos & About Section Assets

This folder contains personal photos and images for the About section of Jesús G. Stiles Amezcua's portfolio website.

## Planned Images (Based on your upload plan)

### Japan Trip & Travel Photos
- `fujipic.jpg` - Mount Fuji photo
- `gardenjp.jpg` - Japanese garden scene  
- `inoshima.jpg` - Inoshima location photo
- `japanpic.jpg` - General Japan travel photo
- `robotpic.jpg` - Robot/technology photo from Japan

### Outdoor Activities
- `fishingpic.jpg` - Fishing activity photo

### Current Setup
Your Japan photos are currently in HEIC format, which needs conversion for web compatibility.

## File Format Guidelines

### ⚠️ HEIC Format Issue
- **Problem**: HEIC files (.HEIC) are not supported by all web browsers
- **Solution**: Convert to JPG or WebP format before uploading
- **How to Convert**:
  - **Mac**: Open in Preview → Export As → JPEG/PNG
  - **Windows**: Use Photos app → Edit & Create → Resize → Save copy
  - **Online**: Use services like CloudConvert, iLoveIMG, or similar

### Recommended File Formats
- ✅ **WebP**: Best compression and quality (modern browsers)
- ✅ **JPG**: Universal compatibility, good for photos
- ✅ **PNG**: Good for screenshots or images with transparency
- ❌ **HEIC**: Limited browser support

### File Size Optimization
- **Target**: Keep under 2MB per image for fast loading
- **Tools for compression**:
  - TinyPNG.com (online)
  - ImageOptim (Mac)
  - RIOT (Windows)
  - Squoosh.app (Google's web tool)

## Naming Conventions

### Current Planned Names (After Conversion)
```
fujipic.jpg         → Mount Fuji photo
gardenjp.jpg        → Japanese garden
inoshima.jpg        → Inoshima location  
japanpic.jpg        → Japan travel photo
robotpic.jpg        → Robot/tech photo
fishingpic.jpg      → Fishing activity
```

### Optional Renaming Suggestions
For better organization, consider descriptive names:
```
fuji-mountain-view.jpg
kyoto-garden-visit.jpg  
inoshima-island-trip.jpg
tokyo-street-scene.jpg
robot-museum-visit.jpg
fishing-trip-outdoors.jpg
```

## Integration with Website

### Current Integration
These photos are not yet integrated into the AboutSection component.

### Planned Integration Options
1. **Photo Gallery**: Add a personal photo carousel to About section
2. **Background Images**: Use select photos as section backgrounds
3. **Inline Photos**: Sprinkle photos throughout the personal story

### Usage in Code
Once uploaded, reference photos like:
```astro
<img src={`${import.meta.env.BASE_URL}/assets/about/fujipic.jpg`} alt="Mount Fuji view from Japan trip" />
```

## Upload Checklist

Before uploading your 7 personal photos:

- [ ] Convert all .HEIC files to .jpg format
- [ ] Compress images to under 2MB each  
- [ ] Verify file names match your planned structure
- [ ] Test that images display correctly in browser
- [ ] Consider adding alt text descriptions for accessibility

## Future Enhancements

- Add lazy loading for performance
- Implement photo gallery component
- Add image captions with context
- Create photo filtering by category (travel, outdoors, etc.)

**Ready for your 7 personal photos!** 📸