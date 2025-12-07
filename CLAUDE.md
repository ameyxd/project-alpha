# Project: Amey Ambade's Personal Website

> Forked from Rafael Conde's portfolio (rafa.design) and transformed into a personal website for Amey Ambade, Lead Data Scientist.

## Project Overview

This is a personal website built with **11ty (Eleventy)** static site generator, featuring:
- Technical blog (data science, industry opinions, hobby explorations)
- Publications & research showcase
- Open source contributions
- Community & volunteering highlights
- Aspirational bucket lists (hobbies, skills, places)
- Future podcast section (placeholder)

**Inspiration Credit:** This site's structure and design approach is inspired by [Rafael Conde's portfolio](https://rafa.design).

---

## Owner Identity

| Field | Value |
|-------|-------|
| **Name** | Amey Ambade |
| **Email** | `contact [at] heyamey [dot] com` |
| **Domain** | heyamey.com (assumed) |
| **Role** | Lead Data Scientist |

### Social Links (Active)

| Platform | Type | URL Placeholder |
|----------|------|-----------------|
| Bluesky | Professional | `https://bsky.app/profile/[handle]` |
| LinkedIn | Professional | `https://linkedin.com/in/[handle]` |
| Hugging Face | Professional | `https://huggingface.co/[handle]` |
| Google Scholar | Professional | `https://scholar.google.com/citations?user=[id]` |
| ORCID | Professional | `https://orcid.org/[id]` |
| Substack | Content | `https://[handle].substack.com` |
| Letterboxd | Personal | `https://letterboxd.com/[handle]` |
| Spotify | Personal | `https://open.spotify.com/user/[id]` |
| PlayStation | Personal | PSN: `[handle]` |
| Twitch | Personal | `https://twitch.tv/[handle]` |
| Discord | Personal | Discord: `[handle]` |

### Social Links (Commented Placeholders for Future)

- GitHub (if separate from Hugging Face presence)
- Kaggle
- Twitter/X
- Mastodon
- YouTube
- Goodreads
- Steam
- Nintendo Switch Friend Code

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Static Site Generator | 11ty (Eleventy) v0.12.1 |
| Templating | Nunjucks (.njk), Markdown |
| Styling | PostCSS (precss, autoprefixer, postcss-import) |
| JavaScript | Vanilla JS (no framework) |
| Build Optimization | UglifyJS, html-minifier |
| Hosting | Netlify |
| Package Manager | Yarn |

### Key Commands

```bash
# Development (with live reload)
yarn start

# Production build
yarn build
```

### Directory Structure

```
/src/site/
├── index.njk                    # Main page
├── _includes/
│   ├── layouts/
│   │   ├── base.njk             # Base HTML template
│   │   └── blog.njk             # Blog post template
│   ├── js/
│   │   └── scripts.js           # Client-side functionality
│   └── postcss/
│       ├── _variables.css       # CSS custom properties
│       ├── _themes.css          # Light/dark mode
│       ├── _typography.css      # Font system
│       ├── _animations.css      # Scroll animations
│       ├── _cards.css           # Section cards
│       ├── _signature.css       # Signature elements
│       └── [section styles]     # Per-section styling
├── blog/
│   └── [posts].njk              # Blog posts
├── css/
│   └── styles.11ty.js           # CSS compilation
└── assets/
    ├── fonts/                   # Web fonts
    └── images/                  # Media files
```

---

## Design System

### Philosophy

- **Clean, modern, personal** - Not a corporate portfolio, but a personal presence
- **Scroll-triggered animations** with section cards
- **Two accent colors** for cohesion
- **Modern serif typography** (the "renaissance" of flattened serifs)
- **Apple aesthetic foundation** with unique personal flair

### Color System

```css
:root {
  /* Accent Colors */
  --accent-primary: #[TBD];
  --accent-secondary: #[TBD];

  /* Light Mode */
  --bg-primary: #fafafa;
  --bg-secondary: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;

  /* Signature Elements */
  --paper-texture: url('/assets/textures/paper-grain.png');
  --selection-color: var(--accent-primary);
}

[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #f0f0f0;
  --text-secondary: #a0a0a0;
}
```

### Typography

| Element | Font | Fallback |
|---------|------|----------|
| Headings | Modern serif (Fraunces, Newsreader, or Spectral) | Georgia, serif |
| Body | System sans-serif stack | -apple-system, BlinkMacSystemFont, etc. |
| Code | JetBrains Mono or Fira Code | monospace |

### Signature Elements

1. **Paper texture** - Subtle grain overlay in light mode
2. **Animated checkboxes** - Distinctive, satisfying animation for bucket lists
3. **Reading progress bar** - Thin bar at top showing scroll position
4. **Custom text selection** - Accent color highlight

### Theme Toggle Behavior

1. **Default:** Respects `prefers-color-scheme` system preference
2. **Override:** User can toggle manually
3. **Persistence:** Choice saved to `localStorage`
4. **Transition:** Smooth 200ms color transition on toggle

---

## Content Structure

### Active Sections

1. **Hero/About**
   - Name, role, one-liner tagline
   - Brief intro paragraph

2. **Blog Preview**
   - 3 most recent posts
   - Link to full blog archive
   - Categories: Technical, Opinions, Hobbies

3. **Publications & Research**
   - Academic papers with links
   - Citations/impact metrics (optional)
   - Research interests

4. **Open Source**
   - Featured GitHub repositories
   - Contributions to notable projects

5. **Community & Volunteering**
   - Organizations involved with
   - Causes supported
   - Impact highlights

6. **Hobbies Bucket List** (Primary aspirational section)
   - Unchecked: Want to try
   - Checked: Tried it (links to blog post if written)

7. **Connect**
   - Social links grid (professional + personal)
   - Contact information

8. **Footer**
   - Attribution: "Site inspired by Rafael Conde's portfolio"
   - Copyright

### Commented Sections (Uncomment When Ready)

```njk
{# SPEAKING & TALKS
   - Conference presentations
   - Talk recordings/slides
#}

{# PODCAST
   - Podcast name and description
   - Episode embeds or links
   - Subscribe links
#}

{# SKILLS I'M LEVELING UP
   - Languages, frameworks, techniques
   - Progress indicators
#}

{# PLACES I WANT TO VISIT
   - Travel bucket list
   - Checked = visited (link to travel post)
#}

{# BOOKS I'M READING
   - Current reads
   - Want to read
   - Favorites
#}
```

---

## Blog Configuration

### Post Frontmatter

```yaml
---
title: "Post Title"
date: 2024-01-15
updated: 2024-01-20  # Optional
category: technical  # technical | opinions | hobbies
tags:
  - machine-learning
  - python
description: "Brief description for SEO and previews"
draft: false
---
```

### Categories

| Category | Content Type |
|----------|--------------|
| `technical` | Deep dives, tutorials, code walkthroughs |
| `opinions` | Industry takes, hot takes, predictions |
| `hobbies` | Hobby explorations, bucket list experiences |

---

## Execution Plan

### Phase 1: Foundation & Identity

- [x] Create CLAUDE.md (this document)
- [ ] Update `package.json` with new identity
- [ ] Update/remove `.nova/` configuration
- [ ] Update `netlify.toml` (remove Rafael's redirects)
- [ ] Remove Rafael-specific assets

### Phase 2: Design System

- [ ] Create `_variables.css` with CSS custom properties
- [ ] Create `_themes.css` with light/dark mode
- [ ] Create `_typography.css` with font system
- [ ] Create `_animations.css` with scroll utilities
- [ ] Create `_cards.css` for section cards
- [ ] Create `_signature.css` for signature elements
- [ ] Implement theme toggle in `scripts.js`
- [ ] Add progress bar functionality

### Phase 3: Structure & Layout

- [ ] Rebuild `index.njk` with new section structure
- [ ] Create section card component pattern
- [ ] Add commented placeholder sections
- [ ] Update `base.njk` layout with theme support

### Phase 4: Components & Interactivity

- [ ] Implement Intersection Observer for scroll animations
- [ ] Create animated checkbox component
- [ ] Add theme toggle button to header
- [ ] Implement progress bar
- [ ] Add paper texture for light mode

### Phase 5: Content & Templates

- [ ] Update `blog.njk` template
- [ ] Create placeholder blog posts
- [ ] Set up social links (active + commented)
- [ ] Add all placeholder content
- [ ] Add Rafael attribution in footer

### Phase 6: Polish & Testing

- [ ] Test light/dark themes
- [ ] Verify responsive design
- [ ] Check accessibility (contrast, focus, reduced motion)
- [ ] Performance audit
- [ ] Create `?theme=` preview parameter
- [ ] Final commit and push

---

## Files to Modify

### Identity Updates

| File | Changes |
|------|---------|
| `package.json` | name, description, author, repository |
| `.nova/Configuration.json` | workspace.name |
| `netlify.toml` | Remove/replace redirects |
| `src/site/_includes/layouts/base.njk` | Meta tags, title, OG data |

### Content Overhauls

| File | Changes |
|------|---------|
| `src/site/index.njk` | Complete restructure |
| `src/site/blog/*.njk` | Remove Rafael's posts, add placeholders |
| `src/site/404.njk` | Update branding |

### Asset Cleanup

| Directory | Action |
|-----------|--------|
| `src/site/assets/` | Remove Rafael's project images/videos |
| `src/site/files/` | Remove large video files |
| `src/site/assets/fonts/` | Evaluate font licensing, possibly replace |

---

## Future Considerations

### Podcast Setup (When Ready)

1. Create `/podcast/` directory with episode template
2. Add podcast section to index
3. Include subscribe buttons (Apple, Spotify, RSS)
4. Embed audio player or link to hosting platform

### Theme Expansion

Consider additional themes beyond light/dark:
- `?theme=terminal` - Hacker aesthetic
- `?theme=paper` - Full paper/academic aesthetic
- `?theme=minimal` - Ultra-minimal black/white

### Performance Optimizations

- Lazy load images below fold
- Preload critical fonts
- Consider image optimization pipeline
- Evaluate video vs. GIF for animations

---

## Attribution

This website's structure, design philosophy, and several interaction patterns are inspired by [Rafael Conde's personal portfolio](https://rafa.design). Rafael's innovative approach to personal web presence—particularly the scrolling color themes and aspirational "People I'd Like to Meet" checklist—served as the foundation for this project.

The code has been substantially modified and personalized for Amey Ambade's use case as a data scientist, with different content focus, color schemes, typography, and interactive elements.
