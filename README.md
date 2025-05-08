# socket-io
Apredendo sobre WebSockets com curso do freeCodeCampo 'WebSocets Beginners Tutorial with Socket.IO'

HTTP é o protocolo de comunicação
Quando fazemos uma solicitação ao back-end para obter alguns dados, usamos o protocolo HTTP, usamos  REST APIs este basicamente obtém os dados do back-end usando a solicitação (através do método GET) ou envia dados para o back-end (usando a solicitação POST)

Um exemplo de conexão é um cliente fazer uma requisição post ao servidor e o servidor devolver uma resposta se a requisição foi efetuada com sucesso ou não. Isto é uma comunicação unidirecional, este protocolo é sem estado

Quando usamos um WebSocket fazemos uma conexão entre o servidor e o cliente que é semelhante ao http,  mas tem uma grande diferença, quando usamos um websocket fazemos uma solicitação de conexão entre o servidor e o cliente ou o cliente e o servidor, então inicialmente o que fazemos é fazer uma solicitação.

Então inicialmente fazemos uma solicitação de conexão do cliente para o servidor, isto é conhecido como uma verificação manual da conexão inicial(handshake), isto é a solicitação de conexão inicial do cliente para o servidor inicialmente, então quando isso acontece quando o cliente enviar uma solicitação de verificação manual para o servidor, o servidor verificará todas as coisas como cabeçalhos, cookies de origens e tudo como fazemos em uma solicitação HTTP como em API REST, mas a questão é que isso ocorrerá só uma vez no início, basicamente o que eu quero dizer é que com websockets não precisamos continuar fazendo conexões cada vez que o cliente precisa  de algo do servidor ou o servidor precisar de algo do cliente, a conexão é como uma conexão permanente entre o servidor e o cliente ou entre o cliente e o servidor até fecharmos a conexão. Então quando fizermos uma solicitação que é conhecida como verificação manual, se for bem-sucedida, receberemos algo chamado mensagem de sucesso, que significa que a conexão foi estabelecida com sucesso.

É como se o websocket fosse uma via de mão dupla permitindo a troca de dados entre o servidor e o cliente  simultaneamente, em outras palavras, o cliente e o servidor podem enviar dados um ao outro independentemente a qualquer momento

Porque e quando precismaos usar websocket?
Digamos que existem servidores na vida real onde você quer ter dados em tempo real, entãoo há uma ferramenta chamada Google Docs que basicamente é um editor de documentos do Google que usa dados em tempo real, o que quero dizer é se você abrir uma aba e usar o Google Docs e abrir outra aba e usar o Google Docs ambis no mesmo usuário, se você edita em uma extremidade estará na outra extremidade, então isso refletirá na outra extremidade sem qualquer latência. Se o Google Docs usasse HTTP teriamos que atualizar nossa página toda vez que fazemos uma alteração em um documento.
