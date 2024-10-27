# Pesquisa sobre C++

- Quais as vantagens de uma linguagem compilada em relação a uma interpretada?
R-Desempenho: Linguagens compiladas costumam ser mais rápidas na execução, pois o código-fonte é transformado diretamente em código de maquinapelo compilador. Eficiência no uso de recursos: Como o código é convertido para instruções de máquina, ele pode ser otimizado pelo compilador para usar melhor a cpu e a memória. Segurança do código-fonte: Em uma linguagem compilada, o código-fonte não é distribuído junto com o executáve, ou seja , o usuário recebe um executável binário, não o código fone original.

- Quais os tipos de comentários em C++?
R-//: Comentário de linha única.       */ ... */**: Comentário de múltiplas linhas.

- O include é um comando para o compilador ou para o pré-processador?
R-É um comando para o pré-processador, isso inclui o conteúdo do arquivo na posição do #include antes da compilação

- O que é o pre-processador? Todos os comandos iniciados por # são para o pré-processador?
R-O pré-processador executa instruções antes da compilação, como inclusão de arquivos e definição de macros. Sim, todos os comandos com # (como #define e #include) são instruções para o pré-processador.

- O que é um namespace? Cite outras linguagens que possuem algo similar.
R- Um namespace é um agrupador para evitar conflitos de nomes (como std em C++). Linguagens com algo semelhante: C# (namespaces), Python (módulos), Java (pacotes).

- Qual o conceito de escopo em uma linguagem de programação?
R- Escopo é o contexto onde uma variável ou função pode ser acessada (por exemplo, dentro de uma função, bloco {} ou no escopo global).

- Qual a diferença entre uma variável local e uma global?
R- Local: Declarada dentro de funções ou blocos e só é acessível ali. Global: Declarada fora de funções e acessível em todo o programa.

- Quando uma variável é alocada na Stack e quando é alocada na Heap?
R- Stack: Variáveis locais e temporárias. Heap: Variáveis alocadas dinamicamente com new ou malloc

- Quais as formas de se inicializar uma variável em C++? Qual a mais recomendada?
R- Inicialização direta: int x = 10; Inicialização por lista (uniforme): int x{10}; A inicialização por lista é mais recomendada, pois evita conversões implícitas.

- O que é o buffer de entrada e saída padrão? Como manipular esses buffers?
R- São áreas temporárias para armazenar dados de entrada/saída (como cin e cout). Podem ser manipulados com flush, getline, ou redirecionamento.

- O buffer de entrada sempre são sempre teclado e tela ou podem ser redirecionados?
R- Podem ser redirecionados para arquivos ou outros dispositivos usando operadores (<, >).

- Quais os tipos primivos de dados em C++?
R- Inteiros: int, long, short. Ponto flutuante: float, double. Caracteres: char. Booleano: bool

- Quais os principais modificadores de tipo em C++?
R- unsigned (sem sinal), signed (com sinal), const (constante), volatile (modificável fora do programa).

- Como funciona a palavra reservada auto?
R- auto permite que o compilador deduza o tipo da variável automaticamente: auto x = 10;

- Como fazer a conversão entre tipos primivos em C e com é a sintaxe do static_cast? Qual a diferença entre static_cast e reinterpret_cast?
- Qual a diferença entre o ++ antes e depois de uma variável?
- Reescreva o seguinte código sem sem usar os operadores unários ++ e -- [LINK](#corrija)
- Na sintaxe de if, else, existe algum padrão que defina quando usar chaves ou não? Não apenas sobre a sintaxe, mas sobre a legibilidade e boas práticas de programação?
- C++ aceita inicialização de variáveis dentro de um if? No modelo `if (int x = 5; x < value) { ... }`?
- Como funciona um operador ternário? Quando vale a pena substituir um if else por um operador ternário?
- Em c++ função são elementos de primeira classe? O que isso significa?
- Qual seria a sintaxe para uma função lambda que recebe dois inteiros e retorna a soma deles?
- Para que serve um return em função função que não retorna nada?
- Em uma função, melhor criar vários ifs, elses ou múltiplos pontos de return?
- A passagem de parâmetros em C++ pode ser cópia, ponteiro ou referência. Qual a diferença entre cada uma delas?
- O que é um parâmetro default em uma função?
- O que é uma função inline? Quando vale a pena usar uma função inline?
- O que seria uma sobrecarga de função? Como o compilador diferencia duas funções com o mesmo nome?
- Qual a diferença entre passar um parâmetro por cópia ou por referência constante? Quando usar cada um?
- Qual a diferença entre declaração e definição de uma função?
- O que é a tabela de símbolos de um programa? Como ela é usada pelo compilador?
- Qual o tipo padrão de um texto "Hello World" em C++?
- Quais as formas de se criar um laço de repetição em C++?
- O que faz o continue e o break em um laço de repetição?
- Pesquise onde o C++ é mais utilizado e quais as vantagens de se usar essa linguagem em relação a outras.
- Quais são as principais linguagens com concorrem com C++ e quais as vantagens de cada uma delas?

## Corrija

```cpp
int a = 5;
int b = a++;
int c = ++a + --b;
std::cout << a << " " << b << " " << c << '\n';
```
