# Agenda de Contatos - Aplicação Moderna React

Uma aplicação web moderna para gerenciamento de contatos, construída com React e JSON Server.

## 🌟 Características

- ✅ Interface moderna e responsiva
- ✅ Tema claro/escuro
- ✅ Busca em tempo real
- ✅ Validação de formulários avançada
- ✅ Animações e transições suaves
- ✅ Feedback visual para todas as ações
- ✅ Design de cards com avatares de contatos
- ✅ Layout em grid para melhor visualização
- ✅ Totalmente acessível (ARIA)
- ✅ Operações CRUD completas

## 🚀 Tecnologias

- **React 19** - A mais recente versão do React
- **Vite** - Build tool ultrarrápida
- **JSON Server** - API REST fake para desenvolvimento
- **CSS Moderno** - Design system com variáveis CSS
- **Feather Icons** - Ícones SVG elegantes
- **Validação de Formulários** - Validação client-side robusta
- **Animações CSS** - Transições e animações suaves

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/agenda-contatos.git
cd agenda-contatos
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação e o JSON Server simultaneamente:
```bash
npm run start
```

Alternativamente, você pode iniciar o JSON Server e a aplicação em terminais separados:

```bash
# Terminal 1 - Inicie o JSON Server
npm run server

# Terminal 2 - Inicie a aplicação React
npm run dev
```

4. Acesse a aplicação em seu navegador:
```
http://localhost:5173
```

> **Importante**: O JSON Server deve estar em execução para que você possa adicionar, editar ou excluir contatos. Se você vir a mensagem "Não foi possível adicionar o contato", verifique se o JSON Server está rodando corretamente.

## 📱 Funcionalidades

### Gerenciamento de Contatos

- **Listar Contatos**: Visualize todos os seus contatos em um layout moderno de cards
- **Adicionar Contato**: Crie novos contatos com validação em tempo real
- **Editar Contato**: Atualize informações de contatos existentes
- **Excluir Contato**: Remova contatos com confirmação de segurança
- **Buscar Contatos**: Encontre contatos rapidamente com busca em tempo real

### Interface Moderna

- **Tema Claro/Escuro**: Alterne entre temas para melhor conforto visual
- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Animações**: Feedback visual com animações suaves
- **Acessibilidade**: Totalmente navegável por teclado e compatível com leitores de tela

## 🏗️ Estrutura do Projeto

```
agenda-contatos/
├── public/
│   └── contact-icon.svg      # Ícone da aplicação
├── src/
│   ├── components/           # Componentes React
│   │   ├── ContactForm.jsx   # Formulário de contato
│   │   ├── ContactForm.css   # Estilos do formulário
│   │   ├── ContactList.jsx   # Lista de contatos
│   │   ├── ContactList.css   # Estilos da lista
│   │   ├── ContactItem.jsx   # Item de contato individual
│   │   └── ContactItem.css   # Estilos do item
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globais da aplicação
│   ├── index.css            # Estilos base e variáveis CSS
│   └── main.jsx             # Ponto de entrada React
├── db.json                  # Banco de dados JSON Server
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
└── README.md                # Documentação
```

## 🔍 Recursos Avançados

### Design System

A aplicação utiliza um design system completo com:

- Paleta de cores consistente
- Tipografia escalável
- Sistema de espaçamento
- Sombras e elevação
- Bordas arredondadas
- Transições e animações

### Validação de Formulários

- Validação em tempo real
- Feedback visual imediato
- Formatação automática de telefone
- Validação de email
- Mensagens de erro contextuais

### Estado da Aplicação

- Gerenciamento de estado com React Hooks
- Feedback de carregamento
- Tratamento de erros
- Persistência de dados com JSON Server

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/gabriellagodinho)
