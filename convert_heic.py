#!/usr/bin/env python3
"""
Script para convertir archivos HEIC a JPG
Los archivos HEIC no son compatibles con navegadores web
"""

import os
from pathlib import Path

try:
    from PIL import Image
    from pillow_heif import register_heif_opener
    register_heif_opener()
    HEIF_AVAILABLE = True
except ImportError:
    HEIF_AVAILABLE = False
    print("⚠️  pillow-heif no está instalado. Instalando...")
    os.system("pip3 install pillow-heif")
    try:
        from pillow_heif import register_heif_opener
        register_heif_opener()
        HEIF_AVAILABLE = True
    except:
        print("❌ No se pudo instalar pillow-heif")
        exit(1)

def convert_heic_to_jpg(heic_path, quality=85):
    """Convierte un archivo HEIC a JPG"""
    heic_file = Path(heic_path)
    jpg_file = heic_file.with_suffix('.jpg')
    
    try:
        # Abrir imagen HEIC
        img = Image.open(heic_file)
        
        # Convertir a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        
        # Guardar como JPG
        img.save(jpg_file, 'JPEG', quality=quality, optimize=True)
        
        print(f"✅ Convertido: {heic_file.name} → {jpg_file.name}")
        return jpg_file
    except Exception as e:
        print(f"❌ Error al convertir {heic_file.name}: {e}")
        return None

def main():
    # Buscar archivos HEIC en la carpeta assets/fiesta
    fiesta_dir = Path(__file__).parent / 'assets' / 'fiesta'
    
    if not fiesta_dir.exists():
        print(f"❌ La carpeta {fiesta_dir} no existe")
        return
    
    heic_files = list(fiesta_dir.glob('*.HEIC')) + list(fiesta_dir.glob('*.heic'))
    
    if not heic_files:
        print("✅ No se encontraron archivos HEIC para convertir")
        return
    
    print(f"📸 Encontrados {len(heic_files)} archivos HEIC:")
    for heic_file in heic_files:
        print(f"   - {heic_file.name}")
    
    print("\n🔄 Convirtiendo archivos...")
    converted = 0
    for heic_file in heic_files:
        if convert_heic_to_jpg(heic_file):
            converted += 1
    
    print(f"\n✨ Conversión completada: {converted}/{len(heic_files)} archivos convertidos")
    
    if converted > 0:
        print("\n📝 Archivos convertidos disponibles en assets/fiesta/")
        print("   Ahora puedes usar las versiones .jpg en tu código")

if __name__ == '__main__':
    main()
