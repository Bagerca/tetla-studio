import os
import glob
import re

# Пути
ICONS_DIR = 'icons'
OUTPUT_FILE = 'js/utils/icons.js'

def build_icons():
    # Создаем папку icons, если её нет
    if not os.path.exists(ICONS_DIR):
        os.makedirs(ICONS_DIR)
        print(f"Папка {ICONS_DIR} создана. Положите туда .svg файлы и запустите скрипт снова.")
        return

    svg_files = glob.glob(os.path.join(ICONS_DIR, '*.svg'))
    
    js_content = "/* Этот файл сгенерирован автоматически скриптом build_icons.py */\n\n"
    js_content += "export const Icons = {\n"

    for file_path in svg_files:
        filename = os.path.basename(file_path)
        icon_name = os.path.splitext(filename)[0]
        
        with open(file_path, 'r', encoding='utf-8') as f:
            svg_content = f.read().strip()
            
            # Убираем переносы строк для красивого JS-файла
            svg_content = svg_content.replace('\n', ' ').replace('\r', '')
            
            # МАГИЯ: Автоматически меняем жесткие цвета на currentColor, чтобы работал CSS
            svg_content = re.sub(r'stroke="#[a-zA-Z0-9]+"', 'stroke="currentColor"', svg_content)
            svg_content = re.sub(r'fill="#[a-zA-Z0-9]+"', 'fill="currentColor"', svg_content)
            
            # Добавляем иконку в объект
            js_content += f"    '{icon_name}': `{svg_content}`,\n"

    js_content += "};\n"

    # Создаем папки для выходного файла, если их нет
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Успешно собрано {len(svg_files)} иконок в файл {OUTPUT_FILE}")

if __name__ == '__main__':
    build_icons()