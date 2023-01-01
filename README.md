# carsharing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Рефактор проекта + обновление апи и логики из-за не работающего оригинального апи.
Улучшения:
1. Проект был переведен с версии vue 2.7 на актуаьную
2. Была улчеша логика разделения по компонентам
3. Повторяющеся логика вынесена в одтельные файлы
4. Новое АПИ написано с помощью JSON-server из-за чего немного изменилась логика:
- Раньше фильтры по классу машины, тянулись с бэка - сейчас классы машин фиксированы

