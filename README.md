# Prova Prática Saber<a name="top"></a>

[![Build Status](https://travis-ci.org/pcstl/app-saber.svg?branch=master)](https://travis-ci.org/pcstl/app-saber)
![[Dependencies](https://david-dm.org/pcstl/app-saber)](https://david-dm.org/pcstl/app-saber.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

* [English version](#en)

## Sobre o App 

Este repositório contém um aplicativo mobile (iOS e Android) desenvolvido para a
prova prática aplicada pelo Grupo SABER como parte de uma seleção para 
desenvolvedor mobile.

O desafio proposto foi fazer um aplicativo que consumisse a API REST 
disponibilizada em http://jsonplaceholder.typicode.com/.

Escolhi desenvolver minha solução utilizando o framework híbrido 
[React Native](https://facebook.github.io/react-native/), e seguindo o padrão
arquitetural [Flux](https://facebook.github.io/flux/).

A arquitetura Flux foi implementada utilizando o framework 
[Redux](http://redux.js.org/).

O app foi escrito em JavaScript moderno (ES6 com algumas features de ES7 que são
disponibilizadas pelo React Native), adicionado de anotações de tipo do 
[Flow](https://flowtype.org/) para facilitar o processo de descoberta de bugs.

Além disso, foi utilizada a ferramenta [ESLint](http://eslint.org/) para
padronizar o código fonte, e o framework de testes [Jest](https://facebook.github.io/jest/)
para testar algumas partes mais críticas do aplicativo. Finalmente, o 
[Travis CI](https://travis-ci.org/) foi utilizado para possibilitar o 
desenvolvimento em um estilo de [Integração Contínua](https://aws.amazon.com/pt/devops/continuous-integration/).

## Compilando e instalando

É necessário ter as ferramentas de desenvolvimento [React Native](https://facebook.github.io/react-native/)
instaladas. Com as ferramentas instaladas e um dispositivo Android conectado ao computador ou um emulador Android
rodando, na pasta do projeto rode os seguintes comandos:

```npm install```
```react-native run-android```

Já para gerar um APK, o comandos são:

```npm install```
```cd android && ./gradlew assembleRelease```

O APK será gerado na pasta ```android/app/build/outputs/apk```.

## Entendendo o código

O ponto de entrada do aplicativo é, de acordo com a plataforma, o arquivo
```index.android.js``` ou ```index.ios.js```. A partir daí, em cada arquivo
foram adicionados comentários no cabeçalho do arquivo explicando o fluxo de
execução. As pastas estão organizadas de acordo com a convenção usual da 
arquitetura Flux, e o código do aplicativo está todo dentro da pasta ```app/```.

# English version<a name="en"></a>

* [Back to top](#top)

## About this app

This repository contains a mobile application (iOS and Android) which is being
developed as a practical test, as part of the selection process for a mobile
developer job at Grupo SABER.

The proposed challenge was to build an app to consume the REST API available
at http://jsonplaceholder.typicode.com/.

The app is being developed using 
[React Native](https://facebook.github.io/react-native/) and following the
[Redux](http://redux.js.org/) pattern. The language is ES6 JavaScript with
some ES7 features which are supported by React Native, plus [Flow](https://flowtype.org/)
type annotations.

This project uses [ESLint](http://eslint.org/) for source code standardization 
and [Jest](https://facebook.github.io/jest/) for testing. 

## Compiling and installing

You must have the [React Native](https://facebook.github.io/react-native/) 
command-line tools installed. Then, with an Android emulator running or an 
Android device connected to your computer, run the following commands:

```npm install```
```react-native run-android```

If you just want to generate an APK, run the following:

```npm install```
```cd android && ./gradlew assembleRelease```

The APK will be generated in the folder ```android/app/build/outputs/apk```.

## Understanding the code

The application's entry point is, according to platform of execution, either
```index.android.js``` ou ```index.ios.js```. From there on, each file's 
header comment explains the app's flow of execution. The app's code is 
within the ```app``` folder, and the folders have been set up according to the
Flux architecture's conventions.

