🚀 QA Automation Framework

Framework de automatización para pruebas UI, API y BDD del sistema bancario ParaBank.

El proyecto integra las siguientes herramientas:

Playwright → Automatización UI

TypeScript → Lenguaje principal

Postman → Pruebas de API

Newman → Ejecución CLI de API tests

Cucumber → BDD con Gherkin

📋 Tabla de Contenidos

Descripción

Estructura del Proyecto

Instalación

Ejecución de pruebas

Scripts disponibles

Problemas conocidos

Recomendaciones

📌 Descripción

Este framework permite:

Automatizar flujos críticos de negocio

Ejecutar pruebas UI y API

Usar BDD para escenarios funcionales

Ejecutar pruebas localmente o en CI/CD

🏗 Estructura del Proyecto
qa-automation-framework
│
├── tests
│   ├── ui
│   │   ├── login.spec.ts
│   │   └── transferFunds.spec.ts
│   │
│   └── api
│       └── parabank_collection.json
│
├── features
│   └── login.feature
│
├── step-definitions
│   └── login.steps.ts
│
├── pages
│   ├── base.page.ts
│   ├── login.page.ts
│   └── transfer.page.ts
│
├── environments
│   └── parabank_env.json
│
├── playwright.config.ts
├── package.json
└── README.md

⚙️ Instalación
1. Clonar repositorio
git clone <repository_url>
cd qa-automation-framework

2. Instalar dependencias
npm install

3. Instalar navegadores de Playwright
npx playwright install

4. Instalar Newman
npm install -g newman

▶️ Ejecución de pruebas
Ejecutar pruebas UI
npx playwright test


Modo visual:

npx playwright test --headed


Ejecutar un test específico:

npx playwright test login.spec.ts

🧪 Ejecutar pruebas BDD
npm run test:bdd


Ejemplo de escenario:

Feature: User authentication

Scenario: Successful login
Given the user navigates to the login page
When the user enters valid credentials
Then the user should access the account overview

🔌 Ejecutar pruebas API
newman run tests/api/parabank_collection.json \
-e environments/parabank_env.json

📊 Generar reporte HTML
newman run tests/api/parabank_collection.json \
-e environments/parabank_env.json \
-r cli,html

📜 Scripts disponibles

En package.json:

{
  "scripts": {
    "test": "playwright test",
    "test:headed": "playwright test --headed",
    "test:bdd": "cucumber-js",
    "test:api": "newman run tests/api/parabank_collection.json -e environments/parabank_env.json"
  }
}


Ejemplo de uso:

npm run test
npm run test:api
npm run test:bdd

⚠️ Problemas conocidos
Problema	Descripción
Inestabilidad del entorno	El sistema de pruebas puede fallar ocasionalmente
Datos dinámicos	Algunas cuentas cambian entre ejecuciones
Dependencia de estado	Algunos tests requieren saldo disponible
Latencia variable	Puede afectar tiempos de respuesta
💡 Recomendaciones
Usar datos de prueba controlados

Utilizar cuentas dedicadas para evitar interferencias entre ejecuciones.

Priorizar flujos críticos

Ejecutar primero:

Login

Consulta de cuentas

Transferencias

Pago de facturas

Integración CI/CD

El framework puede integrarse con:

Jenkins

GitHub Actions

Docker

🤝 Contribución

Crear una rama nueva

Implementar cambios

Ejecutar todas las pruebas

Crear Pull Request