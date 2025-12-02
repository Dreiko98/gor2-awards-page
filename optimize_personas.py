#!/usr/bin/env python3
"""
Script para optimizar las fotos de las personas del GOR2
Optimiza todas las imágenes en assets/personas/ para uso web
"""

import os
from PIL import Image

def optimize_persona_image(input_path, output_path, quality=80, max_size=800):
    """
    Optimiza imagen de persona para web
    
    Args:
        input_path: Ruta de la imagen original
        output_path: Ruta de salida
        quality: Calidad JPEG (80 es buena para web)
        max_size: Tamaño máximo de lado más largo en píxeles
    """
    if not os.path.exists(input_path):
        print(f"❌ Error: {input_path} no existe")
        return False
    
    try:
        # Obtener tamaño original
        original_size_kb = os.path.getsize(input_path) / 1024
        
        # Abrir imagen
        img = Image.open(input_path)
        original_dims = img.size
        
        # Redimensionar manteniendo aspecto
        if max(img.size) > max_size:
            ratio = max_size / max(img.size)
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"  🔄 Redimensionado: {original_dims} → {new_size}")
        
        # Convertir a RGB si es necesario (para PNG con transparencia)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Guardar optimizada
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        # Mostrar resultados
        optimized_size_kb = os.path.getsize(output_path) / 1024
        reduction = ((original_size_kb - optimized_size_kb) / original_size_kb) * 100
        
        print(f"  ✅ {original_size_kb:.1f}KB → {optimized_size_kb:.1f}KB ({reduction:.1f}% reducción)")
        return True
        
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return False

def main():
    """Optimiza todas las imágenes de personas"""
    
    personas_dir = "assets/personas"
    nominees_dir = "assets/nominees"
    
    # Crear directorio de nominados si no existe
    os.makedirs(nominees_dir, exist_ok=True)
    
    # Mapeo de nombres de archivo a nombres de carpetas
    personas = {
        "carlos.jpeg": "carlos",
        "colomino.jpeg": "colomino",
        "delgado.jpeg": "delgado",
        "enzo.jpeg": "enzo",
        "gajas.jpeg": "gajas",
        "gaston.jpeg": "gaston",
        "german.jpeg": "german",
        "oscar.png": "oscar"
    }
    
    print("🎨 OPTIMIZANDO FOTOS DE PERSONAS PARA WEB")
    print("=" * 50)
    
    total_original = 0
    total_optimized = 0
    success_count = 0
    
    for filename, folder_name in personas.items():
        input_path = os.path.join(personas_dir, filename)
        
        # Crear carpeta para cada persona en nominees si no existe
        person_folder = os.path.join(nominees_dir, folder_name)
        os.makedirs(person_folder, exist_ok=True)
        
        # Nombre de salida (siempre .jpg)
        output_filename = f"{folder_name}.jpg"
        output_path = os.path.join(person_folder, output_filename)
        
        print(f"\n📸 Procesando: {filename}")
        
        if os.path.exists(input_path):
            original_kb = os.path.getsize(input_path) / 1024
            total_original += original_kb
            
            if optimize_persona_image(input_path, output_path):
                optimized_kb = os.path.getsize(output_path) / 1024
                total_optimized += optimized_kb
                success_count += 1
        else:
            print(f"  ⚠️  No encontrado: {input_path}")
    
    # Resumen final
    print("\n" + "=" * 50)
    print("📊 RESUMEN DE OPTIMIZACIÓN")
    print("=" * 50)
    print(f"✅ Imágenes procesadas: {success_count}/{len(personas)}")
    print(f"📦 Peso total original: {total_original:.1f} KB ({total_original/1024:.2f} MB)")
    print(f"📦 Peso total optimizado: {total_optimized:.1f} KB ({total_optimized/1024:.2f} MB)")
    
    if total_original > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"🎯 Reducción total: {total_reduction:.1f}%")
        print(f"💾 Espacio ahorrado: {(total_original - total_optimized):.1f} KB")
    
    print("\n✨ Las imágenes optimizadas están en: assets/nominees/[nombre]/")

if __name__ == "__main__":
    main()
