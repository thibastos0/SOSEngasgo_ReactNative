# 🚨 SOS Engasgo - React Native

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-57-000020?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/versions/v57.0.0/)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)](https://github.com/thibastos0/SOSEngasgo_ReactNative)

*Aplicativo mobile de apoio em situações de engasgo, desenvolvido como Projeto Integrador na **Fatec Indaiatuba** (Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma - DSM).*

</div>

---

## 💡 Sobre o projeto

O **SOS Engasgo** é um protótipo de suporte rápido para orientar o usuário durante uma emergência de engasgo. O aplicativo prioriza uma interface simples, botões de ação destacados e instruções objetivas para reduzir o tempo de resposta em uma situação crítica.

O fluxo atualmente implementado é:

1. Tela de boas-vindas, com acesso ao login ou ao cadastro.
2. Login demonstrativo, que direciona para a tela inicial.
3. Cadastro local demonstrativo, com validação de campos obrigatórios e confirmação de senha.
4. Tela inicial com o botão de acionamento de emergência.
5. Confirmação do local, representada atualmente por um mapa simulado.
6. Tela de socorro acionado, com instruções da Manobra de Heimlich.
7. Encerramento do atendimento com confirmação antes de retornar à tela inicial.

> **Nota:** o login, o cadastro, a localização e o mapa ainda são demonstrativos. Não há integração com backend, autenticação real, geolocalização, Google Maps ou acionamento efetivo de serviços de emergência.

## ✨ Funcionalidades implementadas

- **Fluxo de boas-vindas:** entrada para login e criação de cadastro.
- **Login demonstrativo:** campos de e-mail e senha e opção visual de login com Google.
- **Cadastro de usuário:** campos de nome, e-mail, senha e confirmação de senha.
- **Validação do cadastro:** impede o envio de campos vazios e senhas diferentes, exibindo mensagens de alerta.
- **Acionamento de emergência:** cartão de emergência com botão circular em destaque.
- **Confirmação antes do socorro:** tela com mapa simulado e opções para confirmar ou cancelar o acionamento.
- **Orientação de primeiros socorros:** cartão com instruções textuais da Manobra de Heimlich e espaço reservado para ilustração.
- **Cancelamento seguro:** confirma o cancelamento do acionamento e o encerramento do atendimento.
- **Compatibilidade multiplataforma:** execução prevista para Android, iOS e Web por meio do Expo.
- **Interface reutilizável:** botões, campos de entrada, cartões e estilos compartilhados.

## 🛠️ Tecnologias utilizadas

- **[Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)** - Plataforma e ferramentas para desenvolvimento React Native.
- **[React Native 0.86](https://reactnative.dev/)** - Framework para construção da interface nativa.
- **[React 19](https://react.dev/)** - Biblioteca base da interface.
- **[TypeScript 6](https://www.typescriptlang.org/)** - Tipagem estática do projeto.
- **[React Navigation 7](https://reactnavigation.org/)** - Navegação entre as telas.
- **[@expo/vector-icons](https://docs.expo.dev/guides/icons/)** - Ícones usados na interface.

## 🤖 Uso de IA e Antigravity

Durante o desenvolvimento, foram utilizadas ferramentas de inteligência artificial,
incluindo o **Antigravity**, como apoio à implementação e à revisão da interface do
aplicativo. A IA foi empregada principalmente para:

- auxiliar na definição e no refinamento da estilização das screens, incluindo
  cores, espaçamentos, tipografia, hierarquia visual e organização dos componentes; e
- apoiar a configuração e o emprego do `DrawerNavigator` do React Navigation,
  responsável pelo menu lateral que dá acesso às telas **Início**, **Treinamentos** e
  **Orientações**.

As sugestões geradas foram analisadas e adaptadas ao contexto do projeto pela equipe,
que permaneceu responsável pelas decisões de implementação, validação do fluxo de
navegação e revisão do código.

## 🚀 Como executar

### Pré-requisitos

- Node.js instalado (versão LTS recomendada).
- npm, instalado junto com o Node.js.
- Expo Go em um dispositivo físico ou um emulador Android/iOS configurado.

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

Para reiniciar o Metro limpando o cache:

```bash
npx expo start -c
```

## 📌 Estado atual

O aplicativo possui a navegação principal configurada no `App.tsx` com as seguintes rotas:

| Rota | Tela | Objetivo |
| --- | --- | --- |
| `Welcome` | Boas-vindas | Apresentar o app e oferecer login ou cadastro |
| `Login` | Login | Receber e-mail e senha de forma demonstrativa |
| `Register` | Cadastro | Validar e cadastrar os dados preenchidos localmente |
| `Home` | Início | Exibir o acionamento de emergência |
| `ConfirmLocation` | Confirmar localização | Exibir o endereço/mapa simulado e confirmar a chamada |
| `EmergencyScreen` | Socorro em andamento | Exibir orientações e permitir encerrar o atendimento |

As telas são funcionais no fluxo de navegação, mas as integrações externas ainda não foram conectadas.

## 📂 Estrutura do projeto

```text
SOSEngasgo_ReactNative/
├── assets/                         # Ícones, splash screen e favicon
├── src/
│   ├── components/                 # Componentes reutilizáveis
│   │   ├── CustomButton.tsx        # Botão primário e outline
│   │   ├── CustomEmergencyCard.tsx # Cartão de acionamento
│   │   ├── CustomInput.tsx         # Campo de entrada padronizado
│   │   ├── CustomMockMap.tsx       # Mapa ilustrativo para confirmação
│   │   └── ManeuverCard.tsx        # Cartão de instruções de primeiros socorros
│   ├── screens/                    # Telas e definição das exportações
│   │   ├── WelcomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ConfirmLocationScreen.tsx
│   │   ├── EmergencyScreen.tsx
│   │   └── index.ts
│   └── theme/                      # Cores e estilos compartilhados
│       ├── colors.ts
│       └── globalStyles.ts
├── App.tsx                         # Navegação principal
├── app.json                        # Configurações do Expo
├── index.ts                        # Registro da aplicação
├── package.json                    # Scripts e dependências
└── tsconfig.json                   # Configuração do TypeScript
```

## 🔜 Próximos passos

- Integrar autenticação e persistência de usuários.
- Adicionar geolocalização e mapa real.
- Integrar o acionamento com o serviço de emergência apropriado.
- Substituir os espaços reservados por ilustrações verificadas das manobras.
- Expandir as orientações para bebês, crianças e adultos.
- Adicionar testes automatizados para validações e fluxos de navegação.

## 🎯 Padronização de commits

Para manter o histórico de alterações organizado, seguimos o padrão de Conventional Commits:

- **feat:** criação de um novo recurso ou funcionalidade.
- **fix:** correção de um erro.
- **docs:** alteração apenas na documentação.
- **refactor:** alteração estrutural sem correção de erro ou novo recurso.
- **style:** alteração de formatação sem mudança de comportamento.
- **chore:** atualização de build, dependências ou configurações.
