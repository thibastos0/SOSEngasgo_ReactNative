# 🚨 SOS Engasgo - React Native

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)](https://github.com/thibastos0/SOSEngasgo_ReactNative)

*Aplicativo mobile de orientações de primeiros socorros para casos de engasgo, desenvolvido como Projeto Integrador na **Fatec Indaiatuba** (Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma - DSM).*

</div>

---

## 💡 Sobre o Projeto

O **SOS Engasgo** é uma ferramenta de suporte rápido e acessível criada para orientar qualquer pessoa a agir de forma correta e imediata em situações de engasgo (obstrução de vias aéreas por corpo estranho - OVACE). Em momentos críticos, cada segundo conta; por isso, o aplicativo foi projetado com foco em **clareza, rapidez e acessibilidade visual**, atendendo diferentes faixas etárias (bebês, crianças e adultos).

Este repositório contém o aplicativo mobile desenvolvido em **React Native**, integrado ao ecossistema moderno de desenvolvimento mobile.

---
## ✨ Principais Funcionalidades

- **👶 Guia por Faixa Etária:** Instruções específicas e diferenciadas para bebês (lactentes), crianças e adultos.
- **⏱️ Passo a Passo Visual:** Sequências claras de procedimentos (Manobra de Heimlich, tapenagens nas costas, etc.) ilustradas para fácil compreensão sob pressão.
- **📞 Acesso Rápido à Emergência:** Botão de discagem direta para serviços de socorro médico (SAMU - 192).
- **♿ Foco em Acessibilidade:** Interface intuitiva com alto contraste, fontes legíveis e navegação simplificada.
- **🌐 Arquitetura Multiplataforma:** Desenvolvido com React Native e Expo para garantir alta performance no Android e iOS.

---

## 🛠️ Tecnologias Utilizadas

Este projeto faz parte do stack de desenvolvimento multiplataforma do curso de DSM da Fatec Indaiatuba:

* **[React Native](https://reactnative.dev/)** - Framework principal para construção da interface nativa.
* **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript para maior robustez e tipagem estática.
* **[Expo](https://expo.dev/)** - Plataforma e conjunto de ferramentas para fluxo de desenvolvimento em React Native.
* **[React Navigation](https://reactnavigation.org/)** - Gerenciamento de rotas e navegação entre telas.

---

## 📂 Estrutura do Projeto

SOSEngasgo_ReactNative/
├── src/
│   ├── assets/       # Ícones, imagens e recursos visuais
│   ├── components/   # Componentes reutilizáveis (botões, cards, modais)
│   ├── screens/      # Telas principais do aplicativo (Home, Guias, Emergência)
│   ├── navigation/   # Configuração de rotas e navegação
│   └── styles/       # Estilos globais e temas
├── App.tsx           # Ponto de entrada da aplicação
└── app.json          # Configurações do Expo

---

## 🎯 Orientações para Padronização de Commits

Para manter o histórico de alterações limpo e organizado, seguimos o padrão de Conventional Commits:

- **feat:** Criação de um novo recurso ou funcionalidade.
- **fix:** Correção de um erro (bug).
- **docs:** Mudanças apenas na documentação. 
- **refactor:** Alteração de código que não corrige erros nem cria recursos (ex: limpeza).
- **style:** Mudanças de formatação (espaços, ponto e vírgula, etc.) sem alterar o código.
- **chore:** Atualizações de tarefas de build, dependências ou configurações.
