#  Desafio front-end-teste
## Felipe Henrique Freire:[LinkedIn](https://www.linkedin.com/in/felipe-freire-ab458a8b/) & [GitHub](https://github.com/felipehfreire)
## Descrição Geral
Crie uma Single Page Application de uma loja de quadrinhos utilizando a API da Marvel para todos os consumos de dados.
https://github.com/willyvianalinked/front-end-teste
# ApiMarvel

## Como Usar
- ### Requisitos de sofwares
  - Foi tuilizado Visual Studio Code.
  - Link para Download https://code.visualstudio.com/download

- ### Deploy da aplicação
  - ## Build 
     - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
  - ## Development server
     - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tecnologias Utilizadas
- Este projeto foi gerado utilziando o Angular CLI version 9.0.7. (https://cli.angular.io/)
-  Angular CLI: 9.0.7
-  Foi habilitado o novo compilador do angular IVY (https://angular.io/guide/ivy)
-  Node: 12.16.1
-  OS: win32 x64
-  Angular: 9.0.7
-  Packages
    - Package                           /`Version`
    - @angular-devkit/architect         `0.900.7`
    - @angular-devkit/build-angular     `0.900.7`
    - @angular-devkit/build-optimizer   `0.900.7`
    - @angular-devkit/build-webpack     `0.900.7`
    - @angular-devkit/core              `9.0.7`
    - @angular-devkit/schematics        `9.0.7`
    - @ngtools/webpack                  `9.0.7`
    - @schematics/angular               `9.0.7`
    - @schematics/update                `0.900.7`
    - rxjs                              `6.5.4`
    - typescript                        `3.7.5`
    - webpack                           `4.41.2`


## Arquitetura
- Foi separado em pastas Navigation e Pages
  - ***navigation*** Comtempla os componetnes de menu e footer da aplicação
  - ***pages*** Comtempla todos componentes de tela (Listagem de Comics, Carrinho de compra etc)
- para este projeto foi criado um arquivo de rota e não um módulo, devido a simplicidade `app.routes.ts`
- Foi utilizado Bootstrap com framework padrão de CSS (https://getbootstrap.com.br/docs/3.3/a)

## Pacotes Utilzados 
- import { HttpClientModule } from '@angular/common/http';
- import { FormsModule }   from '@angular/forms';
- import { rootRouterConfig } from './app.routes';
- import { APP_BASE_HREF } from '@angular/common';
- https://bootswatch.com/darkly/
- https://www.npmjs.com/package/ngx-spinner#stackblitz-demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Para mais ajuda

Para conbseguir mais ajuda com o Angular CLI use `ng help` ou visite a documentação [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Sobre
Este projeto foi desenvolvido por Felipe Henrique Freire: [LinkedIn](https://www.linkedin.com/in/felipe-freire-ab458a8b/) & [GitHub](https://github.com/felipehfreire) 