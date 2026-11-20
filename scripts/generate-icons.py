from pathlib import Path

from PIL import Image

src = Path(r"g:\Flynkup\flynkup-website\public\brand\icon-main.png")
app = Path(r"g:\Flynkup\flynkup-website\src\app")
public = Path(r"g:\Flynkup\flynkup-website\public")

img = Image.open(src).convert("RGBA")
alpha = img.split()[-1]
bbox = alpha.getbbox()
if bbox:
    pad = 8
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(img.width, right + pad)
    bottom = min(img.height, bottom + pad)
    cropped = img.crop((left, top, right, bottom))
else:
    cropped = img

side = max(cropped.width, cropped.height)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(
    cropped,
    ((side - cropped.width) // 2, (side - cropped.height) // 2),
)


def save_png(path: Path, size: int) -> None:
    out = square.resize((size, size), Image.Resampling.LANCZOS)
    out.save(path, format="PNG", optimize=True)
    print(f"{path.name}: {path.stat().st_size} bytes ({size}x{size})")


save_png(app / "icon.png", 32)
save_png(app / "apple-icon.png", 180)
save_png(public / "favicon-32.png", 32)
save_png(public / "favicon-16.png", 16)
save_png(public / "apple-touch-icon.png", 180)
save_png(public / "brand" / "icon-512.png", 512)

square.save(app / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
square.save(public / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"favicon.ico: {(app / 'favicon.ico').stat().st_size} bytes")

og = Image.new("RGB", (1200, 630), "#0c0b0b")
tag = Image.open(public / "brand" / "logo-tagline-reverse.png").convert("RGBA")
max_w = 900
ratio = max_w / tag.width
tw, th = int(tag.width * ratio), int(tag.height * ratio)
tag = tag.resize((tw, th), Image.Resampling.LANCZOS)
og.paste(tag, ((1200 - tw) // 2, (630 - th) // 2), tag)
og_path = app / "opengraph-image.png"
og.save(og_path, format="PNG", optimize=True)
og.save(public / "og.png", format="PNG", optimize=True)
print(f"opengraph-image.png: {og_path.stat().st_size} bytes")
