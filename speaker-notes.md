# i18n in großen Angular Projekten

## Themen und Struktur

* Einleitung
  * Was ist i18n
    * W3C: If you internationalize, you develop your application in a way that ensures it will work well and can be easily adapted for users from any culture, region, or language.
    * Unterschied zu l10n
      * i18n: Technische Vorkehrung um l10n zu ermöglichen
      * l10n: Tatsächliche Anpassung an ein Locale
  * Formen der Anpassung (Funktionale Anforderungen)
    * Texte übersetzten
    * Formatierungen anpassen (Zahlen, Datum inkl Kalendersystem und Zeitzonen, Sortierung von Umlauten)
    * Grafische Darstellung
    * Druck (Papiergröße)
  * Nicht funktionale Anforderungen
    * Datenformate
      * Properties, JSON, XLIFF, XMB
    * Modularisierung & Wiederverwendbarkeit
      * Aufteilung auf mehrere Dateien pro Sprache
        * Komponenten-Bibliotheken mit Übersetzungen ausliefern?
        * https://github.com/angular/angular/issues/11431
      * Vererbung für Regionale Anpassungen wie de_at
    * Performance (jit vs aot)
      * Lazy Loading
      * jit: angular-translate (ng1), ngx-translate, ng-xi18n, ng2-translate
      * aot: ng-xi18n
* Texte übersetzten
  * IDs
    * fix vs generated
    * wiederverwendung aka common.yes
    * generated: keine wiederverwendung, original im code
    * fix: wiederverwendung, im code nur id (ggf platzhalter)
  * Interpolation
  * Pluralization
  * Fehlermeldungen -> Übersetzen im Code
  * Layout auf unterschiedlich lange Texte vorbereiten
  * Schriftarten müssen Zeichensatz unterstützen
    * font-family
    * web-fonts
* Grafische Darstellung
    * Right-To-Left und Top-To-Bottom -> Text-Align, Margins, Layout
    * Symbole und Farben können unterschiedliche Bedeutungen haben
    * extra Icon-Sets

* Angular 2
  * Text steht in Anwendungscode bzw. Template
     wird per i18n Attribute markiert (Attribute Wert als Hilfe für Übersetzer)
    * ng-container statt {{}}
    * i18n-x für Attribute z.B. i18n-title um title zu übersetzen
    * Pluralization: {object.value, plural, =0 {nothing}, =1 {something}, other {a lot}} (ICU Message Format)
    * Selection: {person.gender, select, m {He} f {She}}
  * Wird per Tool in Datei extrahiert (generierte IDs)
    * ng xi18n falls angular cli
  * Datei kann übersetzt werden
  * Compiler erzeugt spezielle Versionen der Software pro Sprache
  * Deployment
  * Probleme
    * Keine Übersetzung in TS-Code
    

# Angular Live-Demo

* ```ng new i18n-demo```
* edit app.component.html
* ```ng xi18n```
* copy src/messages.xlf to src/messages.es.xlf and translate (attention: edit target, not source)
* ```ng serve``` and open in browser
* ```ng build -aot -prod --environment=prod --i18n-file=src/messages.es.xlf i18n-format=xlf --locale=es -base-href=/es/ --output-path=dist/es```
* ```cd dist && static```
