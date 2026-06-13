import os
import glob

replacements = [
    ("border border-border", ""),
    ("border-border/50", ""),
    ("border-border", ""),
    (" border-b ", " "),
    (" border-t ", " "),
    (" border-y ", " "),
    (" border ", " "),
    ("mix-blend-multiply dark:mix-blend-overlay opacity-90", ""),
    ("mix-blend-multiply", ""),
    ("dark:mix-blend-overlay", ""),
    ("opacity-90", ""),
    ("bg-black/5", "bg-transparent"),
    ("bg-muted/20", "bg-transparent"),
    ("bg-muted/30", "bg-transparent"),
    ("bg-muted/40", "bg-transparent")
]

for filepath in glob.glob("src/**/*.jsx", recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Done replacing styles!")
