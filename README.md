div align="center">

# TechStory

> E-commerce de periféricos gamer feito com HTML, CSS e JavaScript puro.

---

</div>

<details open>
<summary>🇧🇷 Português</summary>

Projeto fictício de loja online para portfólio front-end, simulando produtos, carrinho e favoritos.

---

## 📁 Estrutura de pastas
TechStory/ │ ├── index.html ← Página principal ├── style.css ← Todos os estilos (tema claro/escuro) ├── script.js ← Orquestrador principal (inicializa módulos) │ └── src/ ← Módulos de lógica ├── products.js ← Lista de produtos e renderização ├── cart.js ← Lógica do carrinho ├── favorites.js ← Favoritos do usuário ├── theme.js ← Toggle tema claro/escuro └── lang.js ← Toggle idioma PT/EN


---

## ✨ Funcionalidades

| Feature | Descrição |
|---|---|
| 🛍️ Lista de produtos | Catálogo de periféricos gamer renderizado dinamicamente |
| 🛒 Carrinho funcional | Adicionar, remover e atualizar quantidade |
| ❤️ Favoritos | Marcar e gerenciar produtos favoritos |
| 🌞/🌙 Tema claro/escuro | Alterna com preferência salva no navegador |
| 🌍 PT / EN | Troca de idioma ao vivo, sem recarregar |

---

## 🔧 Tecnologias

| Categoria | Ferramentas |
|---|---|
| Linguagens | HTML5, CSS3, JavaScript (ES6+) |
| Armazenamento | localStorage |

---

## 📱 Responsividade

| Tela | Colunas de produto |
|---|---|
| Desktop (>1024px) | 4 colunas |
| Tablet (720–1024px) | 3 colunas |
| Tablet pequeno (480–720px) | 2 colunas |
| Mobile (<480px) | 1 coluna |

---

## 🎯 Objetivo

Praticar JavaScript puro, manipulação de DOM, organização de código e persistência no navegador.

---

## ▶️ Rodando localmente

```bash
git clone https://github.com/HillaryVieira/TechStory
cd TechStory
Abra o index.html no navegador.

🧠 Desafios e lições aprendidas
Estruturar o código em módulos dentro de /src foi o maior desafio, já que JavaScript puro não tem um sistema de módulos nativo no navegador
Aprendi a importância de separar responsabilidades entre arquivos mesmo sem frameworks
Foi necessário reorganizar a lógica do carrinho e dos favoritos para evitar duplicidade de código
A implementação do tema claro/escuro exigiu atenção ao CSS e ao localStorage para manter a preferência do usuário
📌 Próximos passos
 Novos filtros de produtos por categoria e preço
 Checkout simulado com resumo de pedido
 Responsividade aprimorada para mobile
🇺🇸 English
Feito com 💙 por Hillary Vieira