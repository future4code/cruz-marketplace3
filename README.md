## FutureNinjas 3

Projeto de Market Place para a oferta e procura de serviços para profissionais autônomos (FutureNinjas). 
Link criado por meio so surge: ***INSERIR LINK DO SURGE AQUI***
Os membros do grupo são:

- Janaylla Firmino
- José Isaac Barreiro Campos
- Kelvia Kelline dos Santos Sousa
- Leonardo Federmann
- Pedro Cysne

### Organização do site
O site possui:
- Uma página de apresentação da empresa, contendo uma slogan e um resumo dos propósitos do site. Contém também dois botões para direcionamento às demais páginas.
- Uma página de cadastro de serviços, na qual um contratante poderá preencher um formulário que criará um novo serviço para o qual deseja contratar alguém. Deverão ser inseridas as informações: título; descrição; valor do serviço; métodos de pagamento (selecionados por meio de checkbox, sendo as opções: crédito, débito, pix, à vista e à prazo); e prazo de entrega.

Há também um botão "enviar", que enviará o serviço criado à seguinte API: https://documenter.getpostman.com/view/9133542/TzCJfVAT
Encontram-se também nessa página um header com um logotipo que, caso clicado, conduzirá à página de apresentação; e um footer com informações fictícias da empresa, como hiperlinks para as redes sociais (que NÃO funcionam), bandeiras de cartões aceitos, endereços, dentre outros.

- Uma página destinada aos prestadores de serviços, na qual são apresentados todos os trabalhos disponíveis. Cada trabalho está disposto em um card contendo as mesmas informações inseridas no formulário, junto de um botão "enviar proposta", que, caso apertado, permitirá que o profissional se candidate para aquele serviço. Nesse caso, o botão passará a ser "cancelar proposta" e, se pressionado novamente, permitirá que o profissional desista daquele serviço.
A página também contém, na lateral esquerda, uma seção de filtros, na qual o usuário poderá filtrar os serviços apresentados de acordo com:
-- Caracteres que estejam no título ou na descrição do serviço;
-- Valor mínimo e máximo do valor esperado paara remuneração.

Nessa mesma seção, encontra-se a opção de ordenar os serviços apresentados em ordem crescente de:
-- Valor de remuneração;
-- Prazo de entrega do serviço;
-- Título (ordem alfabética).

Ademais, nessa mesma página, encontram-se os mesmos header e footer anteriormente citados, tendo o header a mesma funcionalidade de direcionamento à página de apresentação.

### O que funciona

Todos os requisitos técnicos exigidos no Notion estão sendo atendidos, o que inclui: direcionamento às páginas de cadastro e lista de serviços; envio do serviço criado no formulário à API; resgate de todos os serviços na API de modo a formar a lista de serviços, organizados e apresentados em cards; e os filtros supracitados.

### O que não funciona

Link com as redes sociais por meio do footer (inserido somente com objetivos ilustrativos). 
