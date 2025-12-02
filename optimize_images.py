#!/usr/bin/env python3
"""
Script de optimización de imágenes para GOR2 Awards
Uso: python3 optimize_images.py [ruta_imagen] [calidad]
"""

import sys
import os
from PIL import Image

def optimize_image(input_path, quality=75, max_width=1920):
    """
    Optimiza una imagen reduciendo su tamaño y peso
    
    Args:
        input_path: Ruta de la imagen original
        quality: Calidad JPEG (1-100, recomendado 70-85)
        max_width: Ancho máximo en píxeles
    """
    if not os.path.exists(input_path):
        print(f"❌ Error: El archivo {input_path} no existe")
        return
    
    # Obtener info del archivo original
    original_size = os.path.getsize(input_path) / 1024 / 1024
    print(f"📁 Archivo original: {input_path}")
    print(f"📊 Tamaño original: {original_size:.2f} MB")
    
    # Abrir imagen
    img = Image.open(input_path)
    print(f"📐 Dimensiones originales: {img.size[0]}x{img.size[1]}")
    
    # Redimensionar si es necesario
    if img.size[0] > max_width:
        ratio = max_width / img.size[0]
        new_height = int(img.size[1] * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        print(f"🔄 Redimensionado a: {max_width}x{new_height}")
    
    # Generar nombre de salida
    base_name = os.path.splitext(input_path)[0]
    output_path = f"{base_name}-optimized.jpg"
    
    # Guardar optimizada
    img.convert('RGB').save(output_path, 'JPEG', quality=quality, optimize=True)
    
    # Mostrar resultados
    optimized_size = os.path.getsize(output_path) / 1024 / 1024
    reduction = ((original_size - optimized_size) / original_size) * 100
    
    print(f"\n✅ Imagen optimizada guardada: {output_path}")
    print(f"📊 Tamaño optimizado: {optimized_size:.2f} MB")
    print(f"🎯 Reducción: {reduction:.1f}% ({original_size/optimized_size:.1f}x más ligera)")
    print(f"💾 Espacio ahorrado: {original_size - optimized_size:.2f} MB")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python3 optimize_images.py [imagen] [calidad(opcional)]")
        print("Ejemplo: python3 optimize_images.py assets/background.png 75")
        sys.exit(1)
    
    input_path = sys.argv[1]
    quality = int(sys.argv[2]) if len(sys.argv) > 2 else 75
    
    print("🎨 GOR2 Awards - Optimizador de Imágenes")
    print("=" * 50)
    
    optimize_image(input_path, quality)
    
    print("\n" + "=" * 50)
    print("✨ ¡Optimización completada!")
