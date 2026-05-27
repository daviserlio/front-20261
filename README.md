# front-20261

🎓 FRONT: Construção de Frontend
Repositório destinado às aulas teóricas e às atividades práticas da disciplina.

🛠️ Ambiente de Desenvolvimento
Para acompanhar a disciplina, você precisará das seguintes ferramentas:

Ferramenta	O que é?	Recomendação
Editor de código	Ambiente onde você escreverá seu código.	Visual Studio Code
Plataforma de Containerização	Responsável por executar aplicações em containers.	Docker Desktop
Versionador	Controla e registra o histórico de alterações do código.	Git
📂 Estrutura de Pastas
Este repositório está organizado da seguinte forma:

aulas/: Contém os códigos utilizados nas aulas teóricas.
praticas/aluno-online-vanilla/: Contém o projeto de um portal utilizando HTML5, CSS3 e JavaScript puro.
praticas/aluno-online-react/: Contém o projeto de um portal utilizando React.js + Vite.
🐳 Como Rodar o Projeto
Siga os passos:

Acesse a pasta do projeto:
cd pasta-do-projeto
Suba o container e instale as dependências:
docker compose up -d
docker compose exec app npm install
Inicie o servidor de desenvolvimento:
docker compose exec app npm run dev
Acesse no navegador: http://localhost:5173
🚀 Fluxo de Trabalho Acadêmico
Todas as atividades seguem o fluxo de trabalho baseado em GitFlow.

1. Configuração Inicial (realizar apenas uma vez)
Execute estes passos para preparar seu ambiente:

Criar Repositório: Clique no botão Use this template, no topo da página, para criar uma cópia deste repositório na sua conta GitHub.
Clonar Repositório: Faça o clone do seu repositorio para a sua máquina local:
git clone https://github.com/SEU_USUARIO/front-SEMESTRE.git
Configurar Identificação: Certifique-se que seu nome e email estejam configurados no Git:
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
2. Entrega de Atividades (repetir para cada prática)
Para cada nova atividade, siga o fluxo abaixo:

Crie uma Issue: Acesse a aba Issues no GitHub e clique no botão New issue para criar a prática usando o template correspondente.
Crie uma branch: Acesse a branch de referência da prática e crie uma nova branch.
Desenvolva e teste: Implemente os arquivos na pasta do projeto e realize os testes.
Envie para o GitHub: Salve suas alterações e envie para o seu repositório.
Solicite a revisão: Acesse o seu repositório no GitHub e crie um Pull Request direcionando para a sua branch develop.
⚠️ Atenção!
Se o check ✅ não aparecer no Pull Request, há erros de compilação ou sintaxe que precisam ser corrigidos.

3. Feedback e Avaliação
Envie o link do seu Pull Request pela plataforma de ensino. A avaliação do código será feita usando o sistema de Code Review:

Approve (Aprovado): Seu código cumpre os requisitos e o "Check" está verde.
Request Changes (Solicitação de Ajustes): Foram encontrados pontos de melhoria ou erros. Você deve corrigir na sua máquina, fazer o push e avisar no comentário do PR para uma nova revisão.
