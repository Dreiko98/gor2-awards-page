#!/usr/bin/env python3
"""
Script para actualizar las categorías del archivo voting.js de manera segura
"""

import re
import json

# Leer el archivo actual
with open('voting.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Encontrar el array de categories
match = re.search(r'const categories = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("❌ No se encontró el array de categories")
    exit(1)

categories_text = match.group(1)

# Función para extraer todas las categorías
def extract_categories(text):
    categories = []
    depth = 0
    current_category = ""
    
    for char in text:
        if char == '{':
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0:
                current_category += char
                categories.append(current_category.strip())
                current_category = ""
                continue
        
        if depth > 0:
            current_category += char
    
    return categories

categories = extract_categories(categories_text)
print(f"✅ Encontradas {len(categories)} categorías")

# Ahora vamos a crear el nuevo archivo con las modificaciones
new_content = content

# 1. Actualizar MEJOR CLIP (categoría #3)
new_content = re.sub(
    r'(\{[\s\S]*?id: 3,[\s\S]*?title: "MEJOR CLIP",[\s\S]*?options: \[).*?(\],[\s\S]*?imageType: )"horizontal"',
    r'''\1"El gameplay mas random de fifa", "Vale bro, sabes algo de Python?", "Clip 3", "Clip 4"\2"horizontal",
        images: {
            "El gameplay mas random de fifa": "assets/mejor clip/video del fifa.jpg"
        }''',
    new_content,
    count=1
)

# 2. Actualizar MEJOR CLIP IRL (categoría #4)
new_content = re.sub(
    r'(\{[\s\S]*?id: 4,[\s\S]*?title: "MEJOR CLIP IRL",[\s\S]*?options: \[).*?(\],[\s\S]*?imageType: )"horizontal"',
    r'''\1"Los pibes cantando Superestrella", "Germán y Gajas bailan y Gajas se pica", "Oscar y Gajas carreando al futbolín en Oviedo", "Salsa buffalo"\2"horizontal",
        images: {
            "Los pibes cantando Superestrella": "assets/clip irl/superestrella.jpeg",
            "Germán y Gajas bailan y Gajas se pica": "assets/clip irl/gajas picao.jpeg",
            "Oscar y Gajas carreando al futbolín en Oviedo": "assets/clip irl/futbolin.jpeg",
            "Salsa buffalo": "assets/clip irl/salsa buffalo.jpeg"
        }''',
    new_content,
    count=1
)

# 3. Actualizar GOR2 QUOTES (categoría #7)
quotes_options = '''"\\"Estoy seguro en un 70% de que acabo de tener una cita\\" - Enzo",
            "\\"No es pajeable\\" - Germán ... \\"Pajeable es casi todo\\" - Gajas",
            "\\"Va bro pon tetas que me tengo que ir\\" - Gajas",
            "\\"No me gusta deber dinero a la gente\\" - Gaston",
            "\\"Estoy lleno\\" - Germán",
            "\\"¿Mafalda Cardenal esa es la del colegio?\\" - Óscar",
            "\\"¿Los mayores se emborrachan?\\" - Óscar"'''

new_content = re.sub(
    r'(\{[\s\S]*?id: 7,[\s\S]*?title: "GOR2 QUOTES",[\s\S]*?options: \[).*?(\],[\s\S]*?imageType: )"horizontal"',
    r'''\1''' + quotes_options + r'''\2"quote"''',
    new_content,
    count=1
)

# 4. Actualizar TOP HUEVITO STYLE (categoría #12)
huevito_options = '''"Pillar dos toallitas para lavarse las manos en el Moflete y dejar a Carlos sin",
            "Querer que carlos le lleve a la hamburguesería en coche y dejar a Pablo solo",
            "Plantarse en casa de Enzo sin avisar para jugar el nuevo God of War",
            "Decir que no quiere probar un juego nuevo porque se tiene que ir a dormir para estudiar y se tira jugando a brawlhalla 1 hora más",
            "Cuando le toca hacer la primera compra del viaje entero automaticamente se ensordece y desaparece esperando que lo haga otro",
            "Coger un plan, copiarlo con su otro grupo de amigos y no ir al plan original",
            "No subirse en un coche de 5 personas por ir en un coche de 4 personas aunque logísticamente fuera más cómodo lo otro"'''

new_content = re.sub(
    r'(\{[\s\S]*?id: 12,[\s\S]*?title: "TOP HUEVITO STYLE",[\s\S]*?description: )".*?"([\s\S]*?options: \[).*?(\],[\s\S]*?imageType: )"horizontal"',
    r'''\1"Las mejores anécdotas del Huevito"\2''' + huevito_options + r'''\3"anecdote"''',
    new_content,
    count=1
)

# 5. Eliminar MEJOR PERSONAJE SECUNDARIO (categoría #14) y renumerar
# Primero, eliminar la categoría #14
new_content = re.sub(
    r'\{[\s\S]*?id: 14,[\s\S]*?title: "MEJOR PERSONAJE SECUNDARIO",[\s\S]*?imageType: "vertical"[\s\S]*?\},\s*',
    '',
    new_content,
    count=1
)

# Renumerar las categorías posteriores
for old_id in range(15, 21):
    new_id = old_id - 1
    new_content = re.sub(
        rf'(\{{[\s\S]*?)id: {old_id},',
        rf'\1id: {new_id},',
        new_content,
        count=1
    )

# Guardar el archivo actualizado
with open('voting.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Archivo voting.js actualizado correctamente")
print("\nCambios realizados:")
print("  1. ✅ Actualizada categoría #3: MEJOR CLIP (+ imagen)")
print("  2. ✅ Actualizada categoría #4: MEJOR CLIP IRL (+ 4 imágenes)")
print("  3. ✅ Actualizada categoría #7: GOR2 QUOTES (7 frases)")
print("  4. ✅ Actualizada categoría #12: TOP HUEVITO STYLE (7 anécdotas)")
print("  5. ✅ Eliminada categoría #14: MEJOR PERSONAJE SECUNDARIO")
print("  6. ✅ Renumeradas categorías 15-20 → 14-19")
print("\nTotal de categorías: 19 (reducido desde 20)")
