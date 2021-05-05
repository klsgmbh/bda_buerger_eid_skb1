# bda_buerger_eid_skb1

Hinweis:	Zur Nutzung dieses Bausteins ist mindestens die cit intelliForm Composer Version 2020.12 notwendig. 

<h2>Elemente</h2>
 
SKB/eID-Personendaten, - Kontaktdaten, - Adressdaten und ggf. Angaben zum Bezirk und zum Ortsteil (Berlin)

Hilfsfelder sind im Antragsassistenten nicht sichtbar und werden für die Berechnung oder das Speichern/Abrufen von Werten verwendet.

<h2>Varianten</h2>

Der Baustein kann ohne die Felder ""Hausnummer (bis)"",  ""Adresszusatz"", ""Anrede"", ""Titel"", ""Geburtsdtaum"", ""Geburtsname"", ""Telefon"", ""E-Mail-Adresse"" integriert werden.

Die Variante ""geo-bezogen"" hat momentan keine Relevanz.

Varianten zur umsetzung von RBS-Szenarien:

Die nachfolgenden Validierungen beziehen sich nur auf berliner Anschriften. Nicht-berliner Anschriften müssen (im Bedarfsfall) außerhalb des Bausteins gem. den antragsspezifischen Vorgaben validiert werden. 

Mit Auswahl der Variante ""varRBSregel_streng"" erfolgt eine harte RBS-Validierung der Adressdaten. Ist die Anschrift ungültig, kann der Nutzer die Antragstellung im Formular-Assistenten nicht fortsetzen. 

Bei Auswahl der Variante ""varRBSregel_locker"" erfolgt eine weiche Validierung der Adressdaten. Ist die Anschrift ungültig, werden über den integrierten Baustein ""rbs_bez"" Angaben zum Bezirk und zum Ortsteil abgefragt. 


<h2>Verwendung</h2>

Dieser Baustein wird zum Abruf von SKB/eiD-Kontaktdaten, -Personendaten, und -Adressdaten in Antragsassistenten eingebaut. Der Baustein zur Umsetzung des RBS-Szenarios mit weicher Validierung ist bereits in den Baustein integriert.

Folgende Schritte sind zur Integration des Bausteins durchzuführen:

1. Anpassung des Modellverzeichnisses (Plugin-Dateien, XML-Dateien und Java-Script-Datei)

Dazu müssen die Bausteindateien im Modellverzeichnis, idealerweise in einem separaten Bausteinordner, abgelegt werden. 
Anschließend den Ordner „ui-rbs2“ aus dem Bausteinverzeichnis buerger_skb1_baustein/Ressourcen/plugins in das Modellverzeichnis <Modellname-Assistent>-Ressourcen/plugins kopieren. 

Die Dateien „staat_2019_04_01.xml“, ""rbs-bez-liste-xml.xml"" und ""rbs_url.xml"" aus dem Bausteinordner buerger_skb1_baustein-Dateien/WEB-INF/data in das Modellverzeichnis <Modellname-Assistent>-Dateien/WEB-INF/data kopieren.

Die Java-Script-Funktion ""onlyBerlin()"" der Java-Script-Datei im Baustein buerger_eid_skb1_baustein mit dem Namen „buerger_eid_skb1.js“ in die Java-Script-Datei des Modells zu kopieren.


2. Anpassung der Java-Script-Datei Optionale Konfiguration bei berliner Adressen 

Wird im Assistenten oder an ausgewählten Stellen ausschließlich mit berliner Anschriften gearbeitet, sollte die zuvor kopierte Java-Script-Funktion „onlyBerlin()“ in der Java-Script-Datei des Modells angepasst werden, damit auf der jeweiligen Dialogseite im Feld „Ort“ der Text „Berlin“ fix hinterlegt wird (d.h. er kann vom Nutzer nicht überschrieben werden) und das Feld „Land“ ausgeblendet wird.

Den Namen der Dialogseite erhält man auf der jeweiligen Dialogseite im gestarteten Assistenten über den Browser bzw. über die Entwicklertools des Browsers. 

Bsp. Firefox:
Menü aufrufen: Web-Entwickler/Werkzeuge ein- ausblenden
Auf dem Reiter „Inspektor“ kann nun dem Tag <body id> der Name der Dialogseite entnommen werden.

Den Namen der Dialogseite nun der Variablen „res“ innerhalb der vorab kopierten Funktion „onlyBerlin()“ in der Java-Script-Datei des Modells  zuordnen. (Hier können beliebig viele Dialogseitennamen hinterlegt werden.)

Wird der Titel nicht über die Relation angepasst, kann der Name des Bausteins verwendet werden. 

3. Anpassung der Modellattribute (Erweiterungen und ScriptEngine)

Mit der Integration des Bausteins ist eine Anpassung der folgenden Modellattribute erforderlich:

Attribut „Erweiterungen“: hier wird der Wert „ui-rbs2“ hinterlegt
Attribut „ScriptEngine“: hier wird der Wert „rhino“ hinterlegt

4. Composer-Datei des Antragsassistenten öffnen und den Baustein ""buerger_skb1_baustein"" als Referenz einfügen

5. Den Baustein mit den entsprechenden Satz mit einer Relation des Typs ""Association"" verbinden und eine Gliederungsnummer vergeben

6. Einbindung des xml-Feldes ""urlrbs"" (Umgehungslösung)

Das im Baustein enthaltene xml-Feld ""urlrbs"" muss, trotz des im Attribut hinterlegten Wertes ""CONTEXT"", aus dem Baustein kopiert und an den zum Baustein gehörenden Satz angebunden werden (siehe Abbildung rechts).

<h2>Anmerkungen:</h2>

Bei der Übernahme von eID-Adressdaten ist im Gegensatz zu den SKB1-Adressdaten, eine Anpassung durch den Nutzer im Antragsassistenten nicht möglich. Die eID-Adressdaten können technisch nicht aus dem Antrag gelöscht werden. Zur Vermeidung des visuellen Verlustes der Adressdaten nach einem Rücksprung im Assistenten zur eID-Funktion, sollte im Modell ein separates eID-Feld mit der Funktion ""js:{iseID()}"" hinterlegt werden.
"										
			
