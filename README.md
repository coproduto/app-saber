# Prova Prática Saber<a name="top"></a>

![This repository is a work-in-progress project. Use the code contained here at your own risk.](https://img.shields.io/badge/project%20status-WIP-red.svg)
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
arquitetural [Redux](http://redux.js.org/).

## Entendendo o código

O ponto de entrada do aplicativo é, de acordo com a plataforma, o arquivo
```index.android.js``` ou ```index.ios.js```. A partir daí, em cada arquivo
foram adicionados comentários no cabeçalho do arquivo explicando o fluxo de
execução.


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
[Redux](http://redux.js.org/) pattern.

## Understanding the code

The application's entry point is, according to platform of execution, either
```index.android.js``` ou ```index.ios.js```. From there on, each file's 
header comment explains the app's flow of execution.

