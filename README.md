Framework de automatización diseñado para validar flujos críticos del sistema bancario ParaBank utilizando pruebas UI, API y BDD.

El proyecto combina herramientas modernas de automatización:

Playwright para pruebas UI

TypeScript como lenguaje principal

Postman para pruebas de API

Newman para ejecución de colecciones en CLI

Cucumber para BDD usando Gherkin

Este framework está diseñado para:

Validar flujos críticos financieros

Permitir ejecución local o en CI/CD

Facilitar mantenimiento y escalabilidad

1. Estructura del Proyecto
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

2. Dependencias

Este proyecto requiere las siguientes herramientas instaladas:

Herramienta	Uso
Node.js	Runtime para ejecutar el framework
Playwright	Automatización de UI
Postman	Creación de colecciones API
Newman	Ejecución CLI de colecciones
Cucumber	BDD con Gherkin
3. Instalación
1. Clonar el repositorio
git clone <repository_url>
cd qa-automation-framework

2. Instalar dependencias del proyecto
npm install

3. Instalar navegadores de Playwright
npx playwright install

4. Instalar Newman globalmente
npm install -g newman

4. Ejecución de pruebas
Ejecutar pruebas UI

Las pruebas UI están implementadas con Playwright.

Ejecutar todos los tests:

npx playwright test


Ejecutar en modo visual:

npx playwright test --headed


Ejecutar un test específico:

npx playwright test login.spec.ts

Ejecutar pruebas BDD

Los escenarios están escritos en Gherkin y automatizados con Cucumber.

Ejecutar escenarios:

npm run test:bdd


Ejemplo de escenario:

Feature: User authentication

Scenario: Successful login
Given the user navigates to the login page
When the user enters valid credentials
Then the user should access the account overview

Ejecutar pruebas API

Las pruebas API se ejecutan utilizando Newman.

Ejecutar colección:

newman run tests/api/parabank_collection.json \
-e environments/parabank_env.json

Ejecutar pruebas con reporte
newman run tests/api/parabank_collection.json \
-e environments/parabank_env.json \
-r cli,html

5. Scripts disponibles

En package.json:

"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:bdd": "cucumber-js",
  "test:api": "newman run tests/api/parabank_collection.json -e environments/parabank_env.json"
}


Uso:

npm run test
npm run test:api
npm run test:bdd

6. Problemas conocidos
Problema	Descripción
Inestabilidad del entorno de pruebas	El sistema de prueba puede presentar intermitencias
Datos dinámicos	Algunas cuentas cambian entre ejecuciones
Dependencia de estado	Algunos tests requieren cuentas con saldo disponible
Tiempo de respuesta variable	Puede afectar pruebas de UI en entornos compartidos
7. Recomendaciones
1. Usar datos controlados

Siempre que sea posible, utilizar cuentas de prueba dedicadas para evitar interferencias entre ejecuciones.

2. Ejecutar pruebas críticas primero

Priorizar:

Login

Consulta de cuentas

Transferencias

Estos representan los flujos críticos de negocio.

3. Integrar en CI/CD

Se recomienda ejecutar las pruebas automáticamente en pipelines usando:

Jenkins

GitHub Actions

Docker

4. Mantener Page Object Model

Las pruebas UI deben seguir el patrón Page Object Model para:

mejorar mantenibilidad

reducir duplicación

facilitar cambios de UI

8. Contribución

Para contribuir:

Crear una rama nueva

Implementar cambios

Ejecutar todas las pruebas

Crear Pull Request

9. Contacto

Para dudas o soporte del framework, contactar al equipo de QA Automation.