# i18n in großen Angular Projekten

## Angular Live-Demo

* ```ng new i18n-demo```
* edit app.component.html
* ```ng xi18n```
* copy src/messages.xlf to src/messages.es.xlf and translate (attention: edit target, not source)
* ```ng serve``` and open in browser
* ```ng build -aot -prod --environment=prod --i18n-file=src/messages.es.xlf i18n-format=xlf --locale=es -base-href=/es/ --output-path=dist/es```
* ```cd dist && static```
