# 🚨 SOS Engasgo - React Native

<div align="center">

[![React Native](https://img.shields.io/badge/React%20Native-0.88.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-58-000020?style=for-the-badge&logo=expo&logoColor=white)](https://docs.expo.dev/versions/v58.0.0/)
[![Firebase](https://img.shields.io/badge/Firebase-13.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge)](https://github.com/thibastos0/SOSEngasgo_ReactNative)

*Aplicativo mobile de apoio em situações de engasgo, desenvolvido como Projeto Integrador na **Fatec Indaiatuba** (Curso Superior de Tecnologia em Desenvolvimento de Software Multiplataforma - DSM).*

</div>

---

## 💡 Sobre o projeto

O **SOS Engasgo** é um aplicativo de suporte rápido desenvolvido para orientar o usuário e agilizar o pedido de ajuda durante uma emergência de engasgo. A aplicação prioriza acesso imediato sem obrigatoriedade de login, botões de ação destacados, instruções visuais animadas e suporte por voz assistido por inteligência artificial para reduzir o tempo de resposta em situações críticas.

O fluxo principal atualmente implementado é:

1. **Acesso direto à tela inicial (`Home`):** ao abrir o aplicativo, o usuário já visualiza o botão central de emergência, sem barreira de login obrigatório, além do menu lateral (`Drawer`) e atalho opcional para autenticação no cabeçalho.
2. **Confirmação de localização (`ConfirmLocation`):** solicita permissão de GPS em primeiro plano, centraliza o mapa na posição atual e permite ajustar o marcador manualmente (com fallback informativo na Web).
3. **Identificação anônima e disparo do socorro:** gera/recupera um `deviceId` seguro no dispositivo, cria um protocolo único (`SOC-YYYYMMDD-HHMMSS`) e envia o chamado com coordenadas geográficas para o backend (proxy na Vercel integrado a automação/WhatsApp).
4. **Socorro em andamento (`Emergency`):** acompanha em tempo real o status do atendimento via **Firebase Realtime Database** (`SENT`, `DELIVERED`, `IN_PROGRESS`, `COMPLETED`) e exibe instruções de primeiros socorros com ilustrações animadas (GIFs).
5. **Assistente de voz com IA (*Hold to talk*):** permite gravar áudio pressionando e segurando o microfone e enviá-lo em Base64 ao endpoint de IA, que atualiza dinamicamente no Firebase o texto de orientação, o passo a passo e a ilustração correspondente ao caso (adulto, gestante, criança ou lactente).
6. **Encerramento seguro:** solicita confirmação antes de finalizar o atendimento e retornar à tela inicial.
7. **Fluxo secundário de conta (demonstrativo):** telas de Login e Cadastro com validação local de campos obrigatórios e confirmação de senha.

> **Nota sobre o estado das funcionalidades:** o fluxo de emergência já conta com integração real de localização, persistência segura de `deviceId`, envio de alerta via API/WhatsApp, gravação/envio de áudio para IA, ilustrações animadas e escuta em tempo real via Firebase Realtime Database. Já os módulos de **Login**, **Cadastro** (incluindo login com Google), **Treinamentos** e **Orientações** permanecem demonstrativos ou em desenvolvimento, sem persistência de contas de usuário.

---

## ✨ Funcionalidades implementadas

- **Acionamento rápido sem login:** abertura direta na tela inicial com cartão de emergência em destaque.
- **Identificação anônima persistente:** geração de UUID v4 (`expo-crypto`) armazenado com segurança no `expo-secure-store` e criação de protocolo `SOC-YYYYMMDD-HHMMSS`.
- **Geolocalização e mapa interativo:** captura da posição atual (`expo-location`) com pino arrastável em Android/iOS (`react-native-maps`) e componente de fallback dedicado para Web (`CustomMap.web.tsx`).
- **Disparo real de emergência via API:** envio de protocolo, `deviceId` e coordenadas para proxy HTTP na Vercel (`/api/whatsapp`) autenticado via cabeçalho `X-App-Local-Token`.
- **Monitoramento em tempo real:** assinatura no Firebase Realtime Database (`emergencies/{deviceId}/{protocolId}`) para atualizar automaticamente o status do socorro e o retorno da IA.
- **Suporte por voz com IA (*Push-to-Talk*):** gravação de áudio em alta qualidade (`expo-audio`), conversão para Base64 (`expo-file-system`) e envio ao endpoint `/api/ai` para triagem e instrução dinâmica.
- **Ilustrações animadas de manobras:** exibição de GIFs com `expo-image` contemplando Manobra de Heimlich, desobstrução de vias aéreas e RCP para adultos, gestantes, crianças e lactentes (`maneuverAssets.ts`).
- **Cancelamento e encerramento seguros:** diálogos de confirmação (nativos em Android/iOS e `window.confirm` na Web) antes de cancelar o acionamento ou encerrar o socorro.
- **Navegação híbrida (`Stack` + `Drawer`):** pilha principal combinada com menu lateral para acesso às seções **Início**, **Treinamentos** e **Orientações**.
- **Telas demonstrativas de autenticação:** interface de Login e formulário de Cadastro com validação de preenchimento e igualdade de senhas.
- **Interface padronizada e reutilizável:** cabeçalho adaptativo, rodapé com link para o GitHub, cartões, inputs e botões com suporte a `ActivityIndicator`.

---

## 🛠️ Tecnologias utilizadas

- **[Expo SDK 58](https://docs.expo.dev/versions/v58.0.0/)** — Plataforma e ferramentas para desenvolvimento React Native multiplataforma.
- **[React Native 0.88](https://reactnative.dev/)** — Framework para construção de interfaces nativas Android e iOS.
- **[React 19.3](https://react.dev/)** — Biblioteca base para construção de componentes e gerenciamento de estado.
- **[TypeScript 6.0](https://www.typescriptlang.org/)** — Tipagem estática com `strict: true` e alias de caminho `@/*`.
- **[React Navigation 7](https://reactnavigation.org/)** — Roteamento com `Native Stack` e `Drawer Navigator`.
- **[Firebase 13.1](https://firebase.google.com/docs/database)** — Sincronização em tempo real do status da emergência e respostas da IA via Realtime Database.
- **[react-native-maps 1.29](https://github.com/react-native-maps/react-native-maps)** — Renderização de mapa nativo e marcador ajustável.
- **[expo-location](https://docs.expo.dev/versions/v58.0.0/sdk/location/)** — Solicitação de permissão e leitura de coordenadas GPS.
- **[expo-audio](https://docs.expo.dev/versions/v58.0.0/sdk/audio/)** & **[expo-file-system](https://docs.expo.dev/versions/v58.0.0/sdk/filesystem/)** — Gravação de voz e codificação do arquivo de áudio em Base64.
- **[expo-image](https://docs.expo.dev/versions/v58.0.0/sdk/image/)** — Renderização performática de imagens e GIFs animados das manobras.
- **[expo-secure-store](https://docs.expo.dev/versions/v58.0.0/sdk/securestore/)** & **[expo-crypto](https://docs.expo.dev/versions/v58.0.0/sdk/crypto/)** — Geração e armazenamento seguro do identificador anônimo da instalação.
- **[@expo/vector-icons](https://docs.expo.dev/guides/icons/)** — Ícones (`MaterialCommunityIcons` e `MaterialIcons`).
- **[react-native-reanimated 4.7](https://docs.swmansion.com/react-native-reanimated/)** & **[react-native-gesture-handler 3.3](https://docs.swmansion.com/react-native-gesture-handler/)** — Gestos e animações da navegação.

### Dependências principais (`package.json`)

| Dependência | Versão no projeto | Finalidade |
| --- | --- | --- |
| `expo` | `^58.0.17` | Núcleo do Expo SDK 58 |
| `react` / `react-dom` | `19.3.0` | Biblioteca base de UI (nativo e Web) |
| `react-native` | `0.88.0` | Runtime e componentes nativos |
| `react-native-web` | `^0.21.4` | Compatibilidade de execução no navegador |
| `@react-navigation/native` | `^7.3.18` | Núcleo de navegação entre telas |
| `@react-navigation/native-stack` | `^7.18.10` | Navegação em pilha (`RootStack`) |
| `@react-navigation/drawer` | `^7.14.4` | Menu de navegação lateral (`DrawerNavigator`) |
| `firebase` | `^13.1.0` | Cliente do Firebase Realtime Database |
| `react-native-maps` | `1.29.11` | Mapa nativo em Android e iOS |
| `expo-location` | `~58.0.18` | Permissões e captura de geolocalização |
| `expo-audio` | `~58.0.10` | Captura de áudio no botão *Hold to talk* |
| `expo-file-system` | `~58.0.13` | Conversão do áudio gravado para Base64 |
| `expo-image` | `~58.0.18` | Exibição de GIFs animados das manobras |
| `expo-secure-store` | `~58.0.2` | Persistência criptografada do `deviceId` |
| `expo-crypto` | `~58.0.7` | Geração de UUID aleatório (`randomUUID`) |
| `expo-font` | `~58.0.9` | Carregamento de fontes e ícones |
| `expo-status-bar` | `~58.0.4` | Controle da barra de status |
| `@expo/vector-icons` | `^15.0.2` | Biblioteca de ícones da interface |
| `react-native-reanimated` | `4.7.1` | Animações nativas do Drawer/UI |
| `react-native-gesture-handler` | `~3.3.0` | Reconhecimento nativo de gestos |
| `react-native-safe-area-context` | `~5.10.1` | Tratamento de áreas seguras de tela |
| `react-native-screens` | `~4.30.0` | Otimização nativa de contêineres de tela |
| `typescript` *(dev)* | `~6.0.3` | Verificação estática de tipos |

---

## ⚙️ Variáveis de ambiente e configuração

### 1. Arquivo `.env`

Na raiz do projeto há um arquivo `.env.example` com todas as chaves utilizadas pela aplicação e suas integrações. Crie seu arquivo `.env` local a partir dele:

```bash
cp .env.example .env
```

Preencha as variáveis conforme o ambiente:

| Variável | Onde é utilizada | Descrição |
| --- | --- | --- |
| `GOOGLE_MAPS_API_KEY` | `app.json` (`react-native-maps`) | Chave de API do Google Maps para renderização do mapa nativo no Android e iOS |
| `EXPO_PUBLIC_VERCEL_PROXY_URL` | `src/services/api.ts` | URL base do proxy na Vercel que expõe as rotas `/api/whatsapp` e `/api/ai` |
| `EXPO_PUBLIC_APP_VALIDATION_TOKEN` | `src/services/api.ts` | Token enviado no header `X-App-Local-Token` para autenticar chamadas ao proxy |
| `EXPO_PUBLIC_FIREBASE_DATABASE_URL` | `src/services/firebase.ts` | URL do Firebase Realtime Database para escuta em tempo real do atendimento |
| `WHATSAPP_ID_GROUP` | Configuração de integração | Identificador de referência do grupo de destino das notificações no WhatsApp |

> **Importante:** nunca versione o arquivo `.env` com credenciais reais (ele já está listado no `.gitignore`). Na versão Web, o `react-native-maps` não é carregado e o componente `CustomMap.web.tsx` exibe automaticamente um painel simulado.

### 2. Plugins nativos (`app.json`)

O `app.json` já declara e configura os plugins nativos exigidos pelos recursos do aplicativo:

- `expo-status-bar` e `expo-font`;
- `react-native-maps` (permissão de localização e leitura de `GOOGLE_MAPS_API_KEY` para Android e iOS);
- `expo-location` (mensagens de permissão de localização em português);
- `expo-secure-store` (backup do Android habilitado e mensagem de permissão para Face ID);
- `expo-audio` (permissão de uso do microfone para envio de áudio à IA);
- `expo-image` (`disableLibdav1d: true`).

Sempre que alterar plugins nativos ou variáveis injetadas no manifesto nativo (como `GOOGLE_MAPS_API_KEY`), regenere as pastas nativas antes de compilar:

```bash
npx expo prebuild
npx expo run:android
# ou
npx expo run:ios
```

### 3. Identificação do dispositivo e protocolo de emergência

Para permitir o acionamento rápido sem exigir cadastro prévio ou dados pessoais, o serviço `src/services/device.ts` gerencia um identificador anônimo de instalação (`deviceId`):

1. `getOrCreateDeviceId()` consulta a chave `device_id` no `expo-secure-store`.
2. Caso exista, reutiliza o UUID salvo; caso contrário, gera um novo UUID com `Crypto.randomUUID()` (`expo-crypto`) e o persiste.
3. Ao acionar o socorro, `generateEmergencyProtocol(deviceId)` retorna:
   - `deviceId`: UUID persistente da instalação;
   - `protocol`: código legível no formato `SOC-YYYYMMDD-HHMMSS`;
   - `createdAt`: carimbo de data/hora em formato ISO 8601.

Esse identificador não coleta IMEI, número de série ou dados de hardware, servindo exclusivamente como chave técnica para vincular o chamado e o canal em tempo real no Firebase (`emergencies/{deviceId}/{protocol}`).

---

## 🚀 Como executar

### Pré-requisitos

- **Node.js** (versão LTS recomendada) e **npm**.
- Emulador Android/iOS configurado, dispositivo físico com **Expo Go** ou build nativa gerada localmente.
- Arquivo `.env` configurado com as URLs/chaves do backend e Firebase para testar o fluxo completo de emergência.

### Instalação

Na raiz do repositório, instale as dependências:

```bash
npm install
```

### Execução em desenvolvimento

Inicie o servidor Metro do Expo:

```bash
npm start
# ou
npx expo start
```

Atalhos disponíveis nos scripts do `package.json`:

```bash
npm run android   # expo start --android
npm run ios       # expo start --ios
npm run web       # expo start --web
```

Para iniciar limpando o cache do bundler:

```bash
npx expo start -c
```

---

## 📌 Estado atual e navegação

A navegação está configurada em `App.tsx` combinando um `NativeStackNavigator` raiz (`RootStack`, iniciado em `DrawerRoot`) e um `DrawerNavigator` lateral (iniciado em `Home`):

### Rotas do Menu Lateral (`DrawerNavigator`)

| Rota | Título no Menu | Componente | Estado / Objetivo |
| --- | --- | --- | --- |
| `Home` | Início | `HomeScreen` | **Funcional.** Tela inicial com botão de emergência, abertura do menu lateral e acesso ao login. |
| `Training` | Treinamentos | `TrainingScreen` | **Em desenvolvimento.** Estrutura inicial reservada para o módulo de capacitação. |
| `Orientations` | Orientações | `OrientationsScreen` | **Em desenvolvimento.** Estrutura inicial reservada para o guia estático de primeiros socorros. |

### Rotas da Pilha Principal (`RootStack`)

| Rota | Componente | Estado / Objetivo |
| --- | --- | --- |
| `DrawerRoot` | `DrawerNavigator` | **Funcional.** Contêiner inicial que hospeda as rotas do menu lateral (`Home`, `Training`, `Orientations`). |
| `ConfirmLocation` | `ConfirmLocationScreen` | **Funcional (integrado).** Obtém GPS, permite ajustar o pino no mapa, gera protocolo e aciona `/api/whatsapp`. |
| `Emergency` | `EmergencyScreen` | **Funcional (integrado).** Monitora status via Firebase, exibe manobras animadas e envia áudio para `/api/ai`. |
| `Login` | `LoginScreen` | **Demonstrativo.** Formulário visual de login com e-mail/senha e botão reservado para Google. |
| `Register` | `RegisterScreen` | **Demonstrativo.** Cadastro com validação local de campos vazios e confirmação de senha. |

> **Observação:** o arquivo `src/screens/WelcomeScreen.tsx` permanece disponível e exportado em `src/screens/index.ts`, mas atualmente **não está registrado** no fluxo de rotas do `App.tsx`, pois o aplicativo prioriza a abertura direta na tela de emergência (`Home`).

---

## 📂 Estrutura do projeto

```text
SOSEngasgo_ReactNative/
├── .claude/
│   └── settings.json                # Configurações locais do assistente Claude
├── assets/                          # Recursos estáticos, ícones e splash screens
│   ├── images/                      # GIFs animados das manobras (Heimlich, RCP, desobstrução) e imagens de apoio
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── icon2.png
│   ├── splash-icon.png
│   └── splash.gif
├── src/
│   ├── components/                  # Componentes visuais reutilizáveis
│   │   ├── CustomButton.tsx         # Botão padrão (variantes primary e outline)
│   │   ├── CustomButtonConfirm.tsx  # Botão de ação com suporte a loading (ActivityIndicator) e disabled
│   │   ├── CustomEmergencyCard.tsx  # Cartão central com botão circular de acionamento
│   │   ├── CustomInput.tsx          # Campo de texto padronizado
│   │   ├── CustomMap.tsx            # Mapa interativo nativo (Android/iOS) com marcador arrastável
│   │   ├── CustomMap.web.tsx        # Fallback visual do mapa para ambiente Web
│   │   ├── Footer.tsx               # Rodapé institucional com link para o repositório no GitHub
│   │   ├── Header.tsx               # Cabeçalho dinâmico (voltar, menu Drawer e atalho de login)
│   │   └── ManeuverCard.tsx         # Cartão de primeiros socorros com exibição de GIF animado e instruções
│   ├── constants/
│   │   └── maneuverAssets.ts        # Dicionário estático e helper getManeuverAsset() para os GIFs das manobras
│   ├── screens/                     # Telas da aplicação
│   │   ├── ConfirmLocationScreen.tsx
│   │   ├── EmergencyScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── OrientationsScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── TrainingScreen.tsx
│   │   ├── WelcomeScreen.tsx        # Tela de boas-vindas (atualmente fora das rotas ativas)
│   │   └── index.ts                 # Barrel file de exportação das telas
│   ├── services/                    # Integrações externas e regras de infraestrutura
│   │   ├── api.ts                   # Chamadas HTTP ao proxy Vercel (/api/whatsapp e /api/ai)
│   │   ├── device.ts                # Persistência do deviceId (SecureStore) e geração de protocolo
│   │   └── firebase.ts              # Inicialização do Firebase e instância do Realtime Database
│   └── theme/                       # Identidade visual compartilhada
│       ├── colors.ts                # Paleta de cores semânticas e de estado
│       └── globalStyles.ts          # Folha de estilos global
├── .env.example                     # Modelo das variáveis de ambiente necessárias
├── .gitignore                       # Arquivos e pastas ignorados pelo Git
├── AGENTS.md                        # Diretrizes de contexto para agentes de IA
├── App.tsx                          # Configuração raiz de navegação (Stack + Drawer)
├── CLAUDE.md                        # Referência de instruções para o Claude (@AGENTS.md)
├── README.md                        # Documentação principal do projeto
├── app.json                         # Manifesto, permissões e plugins nativos do Expo
├── index.ts                         # Ponto de entrada (registerRootComponent)
├── instalando_dependencias.txt      # Notas históricas de instalação e evolução de pacotes
├── package.json                     # Scripts e dependências do projeto
└── tsconfig.json                    # Configuração do TypeScript e path alias (@/*)
```

---

## 🤖 Uso de IA e Antigravity

Durante o desenvolvimento, foram utilizadas ferramentas de inteligência artificial, incluindo o **Antigravity**, como apoio à implementação, documentação e revisão da interface do aplicativo. A IA foi empregada principalmente para:

- auxiliar na definição e no refinamento da estilização das telas, incluindo cores, espaçamentos, tipografia, hierarquia visual e organização dos componentes; e
- apoiar a configuração e o emprego do `DrawerNavigator` do React Navigation, responsável pelo menu lateral que dá acesso às telas **Início**, **Treinamentos** e **Orientações**.

As sugestões geradas foram analisadas e adaptadas ao contexto do projeto pela equipe, que permaneceu responsável pelas decisões de arquitetura, integração de serviços, validação do fluxo de navegação e revisão do código.

---

## 🔜 Próximos passos

- Implementar autenticação real e persistência de usuários nas telas `LoginScreen` e `RegisterScreen` (incluindo login social com Google).
- Desenvolver o conteúdo educativo completo dos módulos **Treinamentos** (`TrainingScreen`) e **Orientações** (`OrientationsScreen`), atualmente com telas *placeholder*.
- Adicionar contingência offline e atalho de discagem rápida para serviços públicos de emergência (SAMU `192` / Corpo de Bombeiros `193`) caso o dispositivo esteja sem conexão com o servidor.
- Definir o destino da `WelcomeScreen` (reintegrá-la como *onboarding* opcional ou removê-la do código).
- Adicionar suíte de testes automatizados para validações de formulário, serviços (`api.ts` e `device.ts`) e fluxos de navegação.

---

## 🎯 Padronização de commits

Para manter o histórico de alterações organizado, seguimos o padrão de **Conventional Commits**:

- **feat:** criação de um novo recurso ou funcionalidade.
- **fix:** correção de um erro.
- **docs:** alteração apenas na documentação.
- **refactor:** alteração estrutural sem correção de erro ou novo recurso.
- **style:** alteração de formatação sem mudança de comportamento.
- **chore:** atualização de build, dependências ou configurações.
