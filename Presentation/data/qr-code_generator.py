import qrcode
from PIL import Image

# The data to encode into the QR code
data = "https://github.com/Rin-Ha-n/AppliedAI/blob/development/Presentation/Presentation.pdf"

# Create the QR code object
qr = qrcode.QRCode(
    version=3,
    box_size=20,
    border=10,
    error_correction=qrcode.constants.ERROR_CORRECT_L
)

# Add data and generate the QR code
qr.add_data(data)
qr.make(fit=True)

# Render the QR code as a transparent PNG using the theme's purple
# Purple pulled from gradient.css (heading color: #842174)
THEME_PURPLE = (0x84, 0x21, 0x74)  # RGB

# Generate base image with purple foreground and white background
img = qr.make_image(fill_color=THEME_PURPLE, back_color="white")

# Convert to RGBA and make white background transparent
img = img.convert("RGBA")
pixels = img.load()
width, height = img.size

for y in range(height):
    for x in range(width):
        r, g, b, a = pixels[x, y]
        # If the pixel is white (background), make it transparent
        if (r, g, b) == (255, 255, 255):
            pixels[x, y] = (255, 255, 255, 0)

# Save the image as PNG (preserves transparency)
img.save("qrcode.png")