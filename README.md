# Horizonte de Risco

## Descrição da Solução

O Horizonte de Risco é um aplicativo mobile desenvolvido em React Native com Expo que permite visualizar eventos naturais e alertas de risco ambiental em tempo real.

A aplicação consome uma API desenvolvida em Java Spring Boot, responsável por integrar dados de eventos naturais e classificá-los por nível de risco (LOW, MEDIUM e CRITICAL).

O objetivo da solução é auxiliar no monitoramento de possíveis desastres naturais, permitindo uma visualização simples e acessível dos eventos registrados e dos alertas gerados.

---

# Funcionalidades

- Login de acesso
- Visualização de eventos naturais
- Visualização de alertas de risco
- Navegação entre telas utilizando React Navigation
- Consumo de API REST hospedada no Render
- Persistência de dados utilizando AsyncStorage
- Interface mobile desenvolvida em React Native

---

# Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- AsyncStorage
- Java Spring Boot
- MySQL
- Render

---

# Integrantes

| Nome | RM |
|--------|--------|
| Mohamed Afif Smaili | RM 554445|


---

# Como Executar o Projeto

## 1. Instalar as dependências

```bash
npm install
```

## 2. Iniciar a aplicação

```bash
npx expo start
```

---

# Credenciais para Teste

**Login**

```text
fiap@teste.com
```

**Senha**

```text
123456
```

---

# Estrutura da Solução

O aplicativo possui as seguintes telas:

1. Login
2. Home
3. Eventos Naturais
4. Alertas
5. Perfil

Os dados são obtidos através de uma API própria desenvolvida pelo grupo e hospedada na plataforma Render.

---

# Observação

A API está hospedada no plano gratuito do Render.

Por esse motivo, a primeira consulta pode levar até 3 minutos para responder, pois o serviço pode entrar em modo de espera quando não está sendo utilizado.