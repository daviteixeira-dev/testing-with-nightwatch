# testing-with-nightwatch

Neste projeo, vamos trabalhar com a versão 1.7.12 do nightwatch.js

## Comandos

1. npm install nightwatch@1.7.12 --save-dev

2. npx nightwatch --init

3. Drive do Chrome: npm install chromedriver@90 --save-dev

4. Drive do Mozilla: npm install geckodriver@3.0.0 --save-dev

## Site

O projeto que vai ser automatizado: http://www.automationpractice.pl/index.php

## Comandos do nightwatch

Esse comando exibe uma lista detalhada de todos os argumentos e opções que podem ser utilizados com o Nightwatch.

- npx nightwatch --help

### Executa um único teste específico.

Para rodar apenas um único teste no Nightwatch, você pode utilizar a opção --test seguida do caminho do arquivo do teste. Exemplo:

- npx nightwatch --test tests/login.test.js

### Executa um caso de teste específico dentro de uma suíte

Esse comando é usado em conjunto com o --test para rodar apenas um caso específico dentro de um arquivo de testes. Por exemplo, se você tem várias funções de teste em um arquivo e só quer rodar uma delas.

- npx nightwatch --test tests/login.test.js --testcase "Teste de Login"

### Habilita a execução em paralelo

Se você deseja rodar múltiplos testes ao mesmo tempo (em paralelo), esse comando pode ser usado para acelerar o processo de execução de testes, especialmente útil em projetos maiores.

- npx nightwatch --parallel

Isso rodará seus testes em paralelo, dependendo da configuração de workers no arquivo de configuração.

### Executa os testes em modo "headless"

Este comando permite que você execute os testes sem abrir uma janela de navegador visualmente, o que pode ser útil em servidores ou ambientes de CI (integração contínua).

- npx nightwatch --headless

Executará os testes no navegador em modo "headless", economizando recursos e tempo.

### Mostra logs detalhados dos comandos HTTP durante a execução

Quando você precisa depurar um teste, o modo verbose pode ajudar fornecendo informações detalhadas sobre as requisições HTTP feitas pelo Nightwatch.

- npx nightwatch --verbose

Isso exibirá mais informações no console, o que pode ajudar a encontrar problemas mais facilmente.

### Executa um grupo de testes (diretório)

Se você organizou seus testes em diferentes pastas (grupos), pode usar este comando para rodar apenas um grupo específico.

- npx nightwatch --group tests/grupoLogin

Aqui, todos os testes na pasta grupoLogin serão executados.

- npx nightwatch --group "login-tests"

Executa todos os testes dentro do grupo (pasta) chamado "login-tests".

### Executa apenas testes com uma tag específica

É possível marcar testes com tags e depois usar esse comando para rodar apenas os testes que possuem uma tag específica.

- npx nightwatch --tag login

Neste caso, todos os testes que possuem a tag login serão executados.

### Pular a execução de um ou mais grupos de testes especificados.

- npx nightwatch --skipgroup "regression-tests,smoke-tests"

 Ignora os grupos de testes "regression-tests" e "smoke-tests" durante a execução.

### Define o local de saída dos relatórios

Caso você queira salvar os resultados dos testes em um arquivo de relatório específico, você pode usar essa opção.

- npx nightwatch --output reports/testResults.xml

Isso salvará o resultado do teste no arquivo testResults.xml na pasta reports.

- npx nightwatch --output "./reports/junit.xml"

Salva os relatórios de teste em ./reports/junit.xml.

### Especificar um filtro (expressão glob) para selecionar arquivos de teste a serem executados com base no nome do arquivo.

- npx nightwatch --filter "*login*"

Executa apenas os arquivos de teste cujo nome contém "login".

### Especifica o nome de um "reporter" ou caminho de um arquivo de "reporter" personalizado

Se você deseja usar um formato específico de relatório, como JUnit, pode usar esse comando.

- npx nightwatch --reporter junit

Aqui, os resultados dos testes serão formatados como relatórios JUnit.

- npx nightwatch --reporter "json" --output "./reports/json-report.json"

Utiliza o repórter JSON e salva o relatório em ./reports/json-report.json.

### Reexecuta casos de teste com falhas ou erros

Esse comando permite reexecutar um caso de teste que falhou um número específico de vezes.

- npx nightwatch --retries 2

Neste exemplo, qualquer teste que falhar será reexecutado até 2 vezes.

### Pular a execução dos testes que possuem as tags especificadas.

- npx nightwatch --skiptags "regression,slow"

Ignora os testes marcados com as tags "regression" e "slow".

### Reexecuta uma suíte de testes inteira em caso de falha

Se você quiser reexecutar uma suíte inteira em caso de falha, use esse comando.

- npx nightwatch --suiteRetries 1

Neste exemplo, se uma suíte inteira falhar, ela será reexecutada uma vez.

### Exibir informações sobre o ambiente, como sistema operacional, CPU, versão do Node.js e navegadores instalados.

- npx nightwatch --info

Fornece detalhes do ambiente de execução atual, útil para depuração e verificação de compatibilidade.

### Exibir a versão atual do Nightwatch instalada.

- npx nightwatch --version

Mostra a versão do Nightwatch que está sendo utilizada no projeto.

## Exemplos Práticos de Uso Combinado

### Executar Testes em Modo Headless com Ambiente Específico:

- npx nightwatch --env staging --headless

Executa todos os testes no ambiente staging utilizando o navegador em modo headless.

### Executar Testes em Paralelo com Tags Específicas e Relatório JSON:

- npx nightwatch --parallel --tag "smoke" --reporter "json" --output "./reports/smoke-report.json"

Executa os testes marcados com a tag "smoke" em paralelo e salva o relatório no formato JSON em ./reports/smoke-report.json.

### Executar um Teste Específico com Timeout Personalizado:

- npx nightwatch --test tests/login.test.js --timeout 15000

Executa apenas o teste login.test.js com um tempo de espera global de 15 segundos para as asserções.

## Dicas Adicionais

1. Organização dos Testes:

- Organize seus testes em pastas agrupadas por funcionalidade ou módulo. Isso facilita o uso de opções como --group para executar grupos específicos de testes.

2. Uso de Tags:

- Utilize tags nos seus testes para categorizar diferentes tipos de testes (por exemplo, smoke, regression, login). Isso permite maior flexibilidade na execução dos testes conforme a necessidade.

3. Relatórios Personalizados:

- Explore diferentes repórteres para obter os tipos de relatórios que melhor atendem às suas necessidades. Você pode criar ou utilizar repórteres personalizados para integrações específicas ou formatos de relatório.

4. Integração com CI/CD:

- Utilize opções como --headless e --parallel para otimizar a execução dos testes em pipelines de CI/CD, garantindo que os testes sejam executados de forma rápida e eficiente.

5. Depuração:

- Use a opção --verbose para obter logs detalhados durante a execução dos testes, o que pode ajudar na identificação e resolução de problemas.