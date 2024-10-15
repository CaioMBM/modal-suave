# modal-suave
    - Está é uma maneira de fazer um modal aparecer e desaparecer de maneira suave e com uma pequena animação.

# Link:
    - https://caiombm.github.io/modal-suave/ 

# Tecnologias:
    - HTML: Utilizei pra criar a estrutura da página.
    - CSS: Utilizei pra estilizar e posicionar os elementos HTML na página e para criar o efeito de animação de aparecer e desaparecer o modal.
    - JavaScript: Utilizei para aplicar ou retirar as classes do CSS refente da animação.

# Como baixar e acessar esse repositório localmente no computador:
    1. No site do repositório, clique em "Code".
    2. Após clicar em "Code", clique em "Download Zip" para baixar o zip contendo todos os arquivos.
    3. Selecione onde você vai armazenar no seu computador.
    4. Descompacte o Zip e você verá uma pasta com o nome do projeto.
    5. Após descompactar, procure pelo arquivo "index.html" dentro da pasta do projeto e clique duas vezes neles para acessar.

# Funcionalidades:
    - Modal aparecer: Ao clicar no botão "Mostrar", será feito a animação do modal aparecendo na tela.
    - Modal desaparecer: Ao clicar no botão "Fechar", será feito a animação do modal desaparecendo na tela.

    Obs: Não fiz uma estrutura condicional para só deixar possível clicar em "Mostrar" quando o elemento não estivesse aparecendo na tela, ou o contrário, porque eu quis deixar apenas a estrutura básica do modal.

# Como funciona:
    - Ao clicar no botão, será acionado uma function() que vai adicionar uma classe ao modal e remover outra, se for para desaparecer então será adicionado a classe refente e irá remover a classe que exibe o modal. E vice-versa.