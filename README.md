WeatherApp

Uvodna animacija:

Prilikom učitavanja aplikacije, pokreće se glatka uvodna animacija. U ovoj animaciji, dva teksta (jedan s lijeve i jedan s desne strane) kreću se prema centru ekrana. Kada se spoje u centru, postepeno blijede, otkrivajući glavnu stranicu aplikacije za vremensku prognozu. Ova animacija daje dinamičan i atraktivan prvi dojam prije nego što korisnik počne koristiti aplikaciju.

Opis:

WeatherApp je jednostavna web aplikacija koja omogućava korisnicima da unesu ime grada i dobiju trenutne podatke o vremenu, uključujući temperaturu, vlažnost vazduha, brzinu vetra i vremenske uslove. Na osnovu vremenskih uslova, aplikacija dinamički prikazuje odgovarajuću sliku, npr. sunčano, oblačno, kišovito itd.

Sadržaj:

-Tehnologije
-Instalacija
-Upotreba
-Funkcionalnosti
-API
-Autor

Tehnologije:

Aplikacija je izrađena koristeći sledeće tehnologije:
HTML5
CSS3
TypeScript
JavaScript
OpenWeather API za dobijanje podataka o vremenu

Instalacija:

GitHub:

https://github.com/n-kojevic/Weather-Wise.git

Navigiraj u direktorijum projekta:

cd weather-app

Pokretanje aplikacije:
Otvori index.html u pretraživaču kako bi aplikacija radila lokalno.

Upotreba:

-Unesite ime grada u polje za pretragu.
-Kliknite na dugme za pretragu ili pritisnite Enter.
-Aplikacija će prikazati trenutne vremenske podatke za uneti grad, uključujući temperaturu, vlažnost vazduha i brzinu vetra.
-Na osnovu trenutnih vremenskih uslova, aplikacija će promeniti sliku u skladu sa vremenskom situacijom (npr. sunčano, oblačno, kiša, sneg).

Funkcionalnosti:

-Pretraga vremenskih podataka za bilo koji grad putem OpenWeather API-ja.
-Dinamička validacija unosa:
-Polje za pretragu mora sadržavati samo slova.
-Polje ne sme biti prazno.
-Ako se unese nevažeći grad, prikazuje se poruka o grešci.
-Prikaz vremenskih podataka, uključujući:
-Temperatura (°C)
-Vlažnost vazduha (%)
-Brzina vetra (Km/h)
-Dinamička promena slike na osnovu vremenskih uslova (npr. sunčano, oblačno, kišovito, snežno).

API:

Aplikacija koristi OpenWeather API za dohvaćanje vremenskih podataka. Da bi aplikacija ispravno radila, koristi se API ključ koji se poziva kroz HTTP GET zahtev.

API endpoint:
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric

Autor:
Ime autora: Nikola Kojević
GitHub: https://github.com/n-kojevic
