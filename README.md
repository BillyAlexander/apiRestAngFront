# apiRestAngFront
This is an app to ilustrate  front to interact with core app back

# 🧾 Project Angular + ASP.NET Core: CRUD example

## 🔧 Commands

```bash
ng new factura-app --routing --style=scss
cd factura-app
```
## 📁 Models

(create model)

## 🌐 Create routes 
if it didn't create at init
```bash
ng generate module app-routing --flat --module=app
```

## 🔌 Create services and componets
```bash
ng generate service services/factura

ng generate component components/factura-list
ng generate component components/factura-form
```

##  🧭  Config routes
In `app-routing.module.ts`

## 📡 Implement service

`factura.service.ts`
```
constructor(private http: HttpClient) {}
```
In `app.module.ts`, import

```
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule
]
```

## 📋  Show list

in `factura-list.component.ts`

## 🖼️ HTML para listar y eliminar
in `factura-list.component.html`

## 📝 Form to create and edit
file `factura-form.component.ts`

## 🖼️ HTML form

file `factura-form.component.html`

## 🧩 Config  app.module.ts
(Config modules & imports, showing before)
