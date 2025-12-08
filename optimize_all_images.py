#!/usr/bin/env python3
"""
Script para optimizar todas las imágenes de categorías del GOR2
Optimiza clips, casas, fiestas, juegos, vlogs, etc.
"""

import os
from PIL import Image

def optimize_image(input_path, output_path=None, quality=85, max_width=1200):
    """
    Optimiza una imagen para web
    
    Args:
        input_path: Ruta de la imagen original
        output_path: Ruta de salida (si es None, sobrescribe la original)
        quality: Calidad JPEG (85 es excelente para web)
        max_width: Ancho máximo en píxeles
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
        
        # Redimensionar si es necesario (manteniendo aspecto)
        if max(img.size) > max_width:
            ratio = max_width / max(img.size)
            new_size = (int(img.size[0] * ratio), int(img.size[1] * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"  🔄 Redimensionado: {original_dims} → {new_size}")
        
        # Convertir a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            if img.mode in ('RGBA', 'LA'):
                background.paste(img, mask=img.split()[-1])
            else:
                background.paste(img)
            img = background
        
        # Determinar ruta de salida
        if output_path is None:
            output_path = input_path
        
        # Guardar optimizada
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        # Mostrar resultados
        optimized_size_kb = os.path.getsize(output_path) / 1024
        
        if optimized_size_kb < original_size_kb:
            reduction = ((original_size_kb - optimized_size_kb) / original_size_kb) * 100
            print(f"  ✅ {original_size_kb:.1f}KB → {optimized_size_kb:.1f}KB ({reduction:.1f}% reducción)")
        else:
            print(f"  ✅ {optimized_size_kb:.1f}KB (ya estaba optimizada)")
        
        return True
        
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return False

def main():
    """Optimiza todas las imágenes de categorías"""
    
    # Directorios a procesar
    directories = [
        "assets/clip irl",
        "assets/mejor clip",
        "assets/casa",
        "assets/fiesta",
        "assets/juegodelano",
        "assets/vlog"
    ]
    
    print("🎨 OPTIMIZANDO IMÁGENES DE CATEGORÍAS PARA WEB")
    print("=" * 60)
    
    total_original = 0
    total_optimized = 0
    success_count = 0
    total_files = 0
    
    for directory in directories:
        if not os.path.exists(directory):
            print(f"\n⚠️  Directorio no encontrado: {directory}")
            continue
        
        print(f"\n📁 Procesando: {directory}")
        print("-" * 60)
        
        # Obtener todos los archivos de imagen
        for filename in os.listdir(directory):
            if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
                input_path = os.path.join(directory, filename)
                total_files += 1
                
                print(f"\n📸 {filename}")
                
                original_kb = os.path.getsize(input_path) / 1024
                total_original += original_kb
                
                if optimize_image(input_path):
                    optimized_kb = os.path.getsize(input_path) / 1024
                    total_optimized += optimized_kb
                    success_count += 1
    
    # Resumen final
    print("\n" + "=" * 60)
    print("📊 RESUMEN DE OPTIMIZACIÓN")
    print("=" * 60)
    print(f"✅ Imágenes procesadas: {success_count}/{total_files}")
    print(f"📦 Peso total original: {total_original:.1f} KB ({total_original/1024:.2f} MB)")
    print(f"📦 Peso total optimizado: {total_optimized:.1f} KB ({total_optimized/1024:.2f} MB)")
    
    if total_original > 0:
        total_reduction = ((total_original - total_optimized) / total_original) * 100
        print(f"🎯 Reducción total: {total_reduction:.1f}%")
        print(f"💾 Espacio ahorrado: {(total_original - total_optimized):.1f} KB ({(total_original - total_optimized)/1024:.2f} MB)")
    
    print("\n✨ ¡Optimización completada!")

if __name__ == "__main__":
    main()
