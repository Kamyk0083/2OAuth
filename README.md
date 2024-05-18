Dokumentacja uruchomieniowa
postawiona aplikacja:
1. trzeba odpalić stornę: https://2-o-auth.vercel.app
2. klikamy start
3. logujemy sie jak mamy konto
4. jak nie mamy konta to się rejestrujemy i potem logujemy
5. klikamy wyślij kod 
6. wchodzimy na podanego w rejestracji maila i kopjujemy kod
7. wklejamy kod do okienka w aplikacji
8. klikamy sprawdź kod

lokalnie:
1. odpalamy terminal
2. wpisujemy "npm install i"
3. potem wpisujemy "npm run dev"
4. klikamy z controlem na adres który się wyświetla w konsoli

Dokumentacja techniczna:
Jest to system weryfikacji dwuetapowej zbudowany w Next.js. Aplikacja ta obejmuje funkcje logowania użytkownika, rejestracje użytkownika, wysyłanie kodów weryfikacyjnych emailer oraz weryfikacje tych kodów,

Struktura Projektu
- src/app/api: zawiera API które zawierają logikę logowania rejestracji, wysyłania kodów i weryfikacji kodu,
- src/app: Zawiera główne strony aplikacji
- src/lib: Zawiera funkcje pomocnicze np. Wysyłanie emaili
- db.ts: Konfiguracja połączenia z bazą danych

Endpointy API:

- Endpoint: /api/send-code
- Metoda: POST
- Body żądania: email: string
- Odpowiedź: success: true/false, message?: string

- Endpoint: /api/verify-code
- Metoda POST
- Body żadania: email string, code string
- odpowiedź: sucess: true/false, message?: string

- Endpoint: /api/login
- Metoda: POST
- Body żadania: username: string, password: string
- Odpowiedź: success: string, token?: string, message?: string

Strony:

- Stronga logowania
- ścieżka: /login
- obsługuje logowanie użytkownika i przekierowywuje do strony weryfikacji kodu

- Strona weryfikacji kody
- ścieżka /code
- Umożliwia użytkownikom wprowadzenie i weryfikację kodu wysłanego na ich adres email

- Strona główna
- ścieżka /main-page
- Główna strona, treść strony dostępna tylko po pomyślnej weryfikacji

Połączenie z bazdą danych
- funkcja: connect
- Łączy się z bazą danych za pomocą mongoose

Zmienne środowiskowe:

- SMTP_EMAIL Adress email używany do wysyłania emaili
- SMTP_PASSWORD Hasło umożliwiające wysyłanie emaili

