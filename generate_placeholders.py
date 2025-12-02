#!/usr/bin/env python3
"""
Genera placeholders de ejemplo para las imágenes de nominados
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(width, height, text, output_path, color):
    """Crea una imagen placeholder con texto"""
    # Crear imagen
    img = Image.new('RGB', (width, height), color=color)
    draw = ImageDraw.Draw(img)
    
    # Intentar usar una fuente, si no está disponible usar la default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()
    
    # Calcular posición del texto (centrado)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((width - text_width) // 2, (height - text_height) // 2)
    
    # Dibujar texto
    draw.text(position, text, fill='white', font=font)
    
    # Guardar
    img.save(output_path, 'JPEG', quality=85)
    print(f"✅ Creado: {output_path}")

def generate_placeholders():
    """Genera placeholders para todas las categorías"""
    base_path = "assets/nominees"
    
    # Categoría 1 - Gor más gracioso (personas - vertical)
    category_1_options = ["german", "gajas", "enzo", "delgado", "carlos", "colomino", "gaston", "oscar"]
    colors_vertical = ['#1a3a52', '#2a4a62', '#1a4a52', '#2a3a62', '#3a4a52', '#1a5a62', '#2a4a52', '#3a3a62']
    
    for i, option in enumerate(category_1_options):
        path = f"{base_path}/1/{option}.jpg"
        if not os.path.exists(path):
            create_placeholder(600, 800, option.upper(), path, colors_vertical[i % len(colors_vertical)])
    
    # Categoría 3 - Mejor clip (horizontal)
    category_3_options = ["clip-1", "clip-2", "clip-3", "clip-4"]
    colors_horizontal = ['#3a2a1a', '#4a3a2a', '#3a3a1a', '#4a2a2a']
    
    for i, option in enumerate(category_3_options):
        path = f"{base_path}/3/{option}.jpg"
        if not os.path.exists(path):
            create_placeholder(1280, 720, option.upper(), path, colors_horizontal[i % len(colors_horizontal)])
    
    print("\n✨ ¡Placeholders de ejemplo creados!")
    print("📝 Nota: Estos son solo ejemplos. Reemplázalos con fotos reales.")

if __name__ == "__main__":
    print("🎨 Generador de Placeholders - GOR2 Awards")
    print("=" * 50)
    
    # Verificar que existen las carpetas
    if not os.path.exists("assets/nominees/1"):
        print("❌ Error: Las carpetas de nominados no existen")
        print("   Ejecuta primero: mkdir -p assets/nominees/{1..21}")
        exit(1)
    
    generate_placeholders()
