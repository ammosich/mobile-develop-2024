import os

# Список файлов для копирования (относительные пути)
files_to_copy = [
    "android/build.gradle",
    "android/app/build.gradle",
    "android/settings.gradle",
    "android/gradle.properties",
    "android/gradle/wrapper/gradle-wrapper.properties",
    "App.js",
    "screens/Home.js",
    "screens/Lab1.js",
    "screens/Lab2.js",
    "screens/Lab3.js",
    "package.json",
    "index.js",
    "app.json",
    ".eslintrc.js"
]

# Путь к выходному файлу (относительный)
output_file = "сохраненные_файлы.txt"

# Открываем выходной файл в режиме записи
with open(output_file, 'w', encoding='utf-8') as output:
    for file in files_to_copy:
        if os.path.exists(file):
            # Записываем имя файла
            output.write(f"file: {file}\n\n")
            # Читаем содержимое файла и записываем его
            with open(file, 'r', encoding='utf-8') as input_file:
                output.write(input_file.read())
            # Добавляем 3 пустых абзаца
            output.write("\n\n\n")
        else:
            # Если файл не существует, записываем соответствующее сообщение
            output.write(f"file: {file}\nФайл не найден.\n\n\n")

print("Файлы скопированы успешно.")