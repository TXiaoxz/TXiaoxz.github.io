# Zack & Benben companions

Current avatar: `public/companions/zack-jhu.png` (built-in image_gen edit; subtle tonal JHU chest embroidery in every pose). The original `zack.png` is preserved. Benben remains `public/companions/benben.png`.

Behavior: no walking control or visible text. After 8 seconds without character interaction, both switch to the quiet pose. Clicking a character wakes the pair; quiet is preserved when switching browser tabs.

## JHU embroidery edit prompt

Use case: precise-object-edit / identity-preserve.
Edit target: image 1 is the existing production RGBA sprite atlas of Zack, FOUR poses in a 2x2 grid. Image 2 is a reference for Johns Hopkins University identity, specifically the shield at its left.
Make ONLY one small change to image 1: add a subtle tiny JHU chest embroidery to the taupe hoodie in EACH of its four poses. The mark should consist of a small simplified Johns Hopkins shield beside the letters "JHU", on the wearer's left upper chest (viewer right), adjusted naturally to fabric folds/pose. It should be a tasteful understated tonal embroidered logo, warm gray-brown just slightly darker than the hoodie, low contrast, about 14% of the hoodie chest width. The user's request is "浅浅的、不用刻意" — faint and understated. No blue, no high contrast, no large branding; small gently visible mark. The full Whiting School text is NOT needed.
STRICT INVARIANTS: preserve the original exact 2x2 quadrant layout, relative positions, figure sizes, margins, all four existing poses, hair, glasses, facial expressions, clothing color, pants, shoes, illustration style, outlines and transparent negative space. Do not change face or character proportions. Keep the hoodie otherwise unchanged. Do not add any background, shadows, labels, new objects, extra figures, or other text. Preserve genuine transparent background/alpha, not a checkerboard. Keep each sprite in its existing quadrant with no spill across cell boundaries. Retain source square canvas proportions and resolution when possible. This is a surgical clothing-logo edit, not a redesign.


Generated with the built-in image_gen tool using the site's existing `public/about-media/portrait.webp` and `public/about-media/stormy.webp` as visual references. Original alpha is preserved.

Assets: `public/companions/zack.png` and `public/companions/benben.png`. Each is a 2×2 sprite atlas: idle, greeting, happy, quiet (row-major). Displayed using CSS background positioning.

## Zack prompt

Use case: stylized-concept. Asset type: production transparent PNG 2x2 sprite atlas for a tiny interactive website companion. Reference image 1 is the person whose likeness should be captured, reference image 2 shows his cat and is only for shared cozy palette; do not draw the cat in this atlas.
Create exactly FOUR separate full-body depictions of the SAME cute chibi version of the reference person, arranged as a mathematically equal 2-column 2-row sprite atlas on a genuinely TRANSPARENT square background, no visible checkerboard, no frame borders. Every quadrant is a square sprite cell. No overlap across quadrant boundaries. Each figure stays centered within its cell, with 12% margin on all sides and feet consistently at 88% of cell height. Same character scale in all four cells.
Character: young adult man with tousled short dark hair, black rectangular glasses, friendly soft face, warm taupe hoodie like reference, charcoal pants, simple white sneakers. Charming polished hand-drawn 2D chibi illustration with subtle soft shading, smooth crisp dark-brown outlines, big head about half of figure height, warm natural colors, friendly expression. Not photorealistic, not pixel art, not 3D plastic. Preserve recognizable glasses/hair/outfit rather than generic mascot.
Cell top-left: neutral standing relaxed smile, arms down, FRONT VIEW.
Cell top-right: FRONT VIEW standing smiling, one hand lifted waving.
Cell bottom-left: FRONT VIEW happy closed-eye grin, both hands making peace signs like the reference.
Cell bottom-right: quietly sitting cross-legged, cozy expression, same character size; head lower naturally but body stays above baseline.
No text, no logos, no labels, no props, no ground, no floor shadow, no decorative background, no background fill. True alpha transparency. The four quadrants must be clean isolated game sprites, perfectly usable with background-position 0/100 percent.

## Benben prompt

Use case: stylized-concept. Asset type: production transparent PNG 2x2 sprite atlas for a tiny interactive website companion. Reference image 1 is the Siamese cat Benben / Stormy whose appearance and outfit must be captured. Create exactly FOUR separate full-body depictions of the SAME cute chibi cat, arranged as a mathematically equal 2-column 2-row sprite atlas on a genuinely TRANSPARENT square background, no visible checkerboard, no frame borders. Every quadrant is a square sprite cell. No overlap across quadrant boundaries. Each figure centered within its cell, 12% margin on all sides; bottom paws consistently at 88% of cell height. Same character scale in all four cells.
Character: distinctive seal-point Siamese cat, deep brown nearly black face mask, dark ears paws and tail, warm cream/tan body, large gentle blue eyes, wears reference's cozy brown fleece hoodie with ivory fluffy trim and cuffs, hood DOWN so ears visible. Polished hand-drawn 2D chibi illustration, smooth crisp dark-brown outlines, subtle soft shading, big rounded head about half of character height, warm muted cozy palette matching a cream personal website. Cute feline proportions, retain real feline paws not human hands. Not photorealistic, not pixel art, not plastic 3D.
Cell top-left: sits upright FRONT VIEW with paws together, eyes open, relaxed, tail curled alongside.
Cell top-right: sits upright FRONT VIEW, one front paw raised in greeting, curious head tilt.
Cell bottom-left: playful crouch with a tiny happy open-mouth expression, tail raised curled, front three-quarter view.
Cell bottom-right: curled up asleep, visible face and ears, dark tail curled along brown fleece body, peaceful closed eyes. Keep large sprite silhouette despite lying pose.
No person, no text, no labels, no hearts, no props, no ground, no floor shadow, no decorative background, no background fill. True alpha transparency. Four clean isolated game sprites, perfectly usable with background-position 0/100 percent.
