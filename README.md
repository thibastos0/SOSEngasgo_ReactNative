# 🚨 SOS Engasgo - React Native

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-57-000020?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/versions/v57.0.0/)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)](https://github.com/thibastos0/SOSEngasgo_ReactNative)

*Aplicativo mobile de orientações de primeiros socorros para casos de engasgo, desenvolvido como Projeto Integrador na **Fatec Indaiatuba** (Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma - DSM).*

</div>

---

## 💡 Sobre o Projeto

O **SOS Engasgo** é uma ferramenta de suporte rápido e acessível criada para orientar qualquer pessoa a agir de forma correta e imediata em situações de engasgo (obstrução de vias aéreas por corpo estranho - OVACE). Em momentos críticos, cada segundo conta; por isso, o aplicativo foi projetado com foco em **clareza, rapidez e acessibilidade visual**, atendendo diferentes faixas etárias (bebês, crianças e adultos).

Este repositório contém o aplicativo mobile desenvolvido em **React Native** com **Expo SDK 57**. O projeto está em desenvolvimento e, neste momento, apresenta a tela inicial e a base de navegação.

---
## ✨ Objetivos do Aplicativo

- **👶 Guia por Faixa Etária:** Instruções específicas e diferenciadas para bebês (lactentes), crianças e adultos.
- **⏱️ Passo a Passo Visual:** Sequências claras de procedimentos (Manobra de Heimlich, tapenagens nas costas, etc.) ilustradas para fácil compreensão sob pressão.
- **📞 Acesso Rápido à Emergência:** Botão de discagem direta para serviços de socorro médico (SAMU - 192).
- **♿ Foco em Acessibilidade:** Interface intuitiva com alto contraste, fontes legíveis e navegação simplificada.
- **🌐 Arquitetura Multiplataforma:** Desenvolvido com React Native e Expo para garantir alta performance no Android e iOS.

---

## 🛠️ Tecnologias Utilizadas

Este projeto faz parte do stack de desenvolvimento multiplataforma do curso de DSM da Fatec Indaiatuba:

* **[Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)** - Plataforma e conjunto de ferramentas para desenvolvimento React Native.
* **[React Native 0.86](https://reactnative.dev/)** - Framework para construção da interface nativa.
* **[React 19](https://react.dev/)** - Biblioteca base da interface.
* **[TypeScript 6](https://www.typescriptlang.org/)** - Tipagem estática para o projeto.
* **[React Navigation 7](https://reactnavigation.org/)** - Navegação entre telas.
* **[@expo/vector-icons](https://docs.expo.dev/guides/icons/)** - Ícones da interface.

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão LTS recomendada).
- npm, instalado junto com o Node.js.
- Expo Go no dispositivo físico ou um emulador Android/iOS configurado.

### Instalação

Na raiz do projeto, instale as dependências:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor do Expo:

```bash
npx expo start
```

Também é possível iniciar diretamente em uma plataforma:

```bash
npm run android
npm run ios
npm run web
```

Se o Metro apresentar algum cache desatualizado após uma alteração de dependências, reinicie-o com:

```bash
npx expo start -c
```

## 📌 Estado Atual

- A tela `WelcomeScreen` está registrada na navegação principal.
- O componente reutilizável `CustomButton` e o tema de cores estão disponíveis.
- As telas de login e cadastro ainda estão em implementação.
- Os guias de primeiros socorros e o acesso rápido ao SAMU fazem parte do escopo planejado.

---

## 📂 Estrutura do Projeto
```
SOSEngasgo_ReactNative/
├── assets/                   # Ícones, splash screen e favicon
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   └── CustomButton.tsx
│   ├── screens/              # Telas do aplicativo
│   │   └── WelcomeScreen.tsx
│   └── theme/                # Cores e estilos compartilhados
│       └── colors.ts
├── App.tsx                   # Navegação principal e ponto de entrada
├── app.json                  # Configurações do Expo
├── index.ts                  # Registro da aplicação
├── package.json              # Scripts e dependências
└── tsconfig.json             # Configuração do TypeScript
```
---

## 🎯 Orientações para Padronização de Commits

Para manter o histórico de alterações limpo e organizado, seguimos o padrão de Conventional Commits:

- **feat:** Criação de um novo recurso ou funcionalidade.
- **fix:** Correção de um erro (bug).
- **docs:** Mudanças apenas na documentação. 
- **refactor:** Alteração de código que não corrige erros nem cria recursos (ex: limpeza).
- **style:** Mudanças de formatação (espaços, ponto e vírgula, etc.) sem alterar o código.
- **chore:** Atualizações de tarefas de build, dependências ou configurações.
