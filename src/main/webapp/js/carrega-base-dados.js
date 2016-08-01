/**
 * 
 */

function carregaHabilidadesTotal (){

var habilidades = 

	";;;area;blue;Conhecimentos relativos à produção científica e seus requerimentos;habilidades;1;blue;Acadêmica;0.2;;-12.131.927;-2.674.033.772;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Academia;@" +
	";;;area;blue;Estudo da organização humana e administração de organizações;habilidades;2;blue;Administração de empresas;0.2;;-1.037.440.249;-2.842.392.284;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_de_empresas;@" +
	";;;area;blue;Estudo de regras de contabilização de transações e propriedades;habilidades;3;blue;Ciências contábeis;0.2;;-8.586.896.904;-3843.5;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Contabilidade;@" +
	";;;area;blue;Estudo das normas que regem as relações humanas em sociedade;habilidades;4;blue;Direito;0.2;;-8.782.515.034;-2.078.644.165;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito;@" +
	";;;area;blue;Estudo das interações humanas de trocas e seus componentes;habilidades;5;blue;Economia;0.2;;-1.186.416.156;-3.203.999.157;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia;@" +
	";;;area;blue;Estudos sobre a consciência e condição humana, conhecimentos transcendentes à realidade;habilidades;6;blue;Filosofia;0.2;;-1.213.177.277;-2.556.387.988;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Filosofia;@" +
	";;;area;blue;Estudo das relações numéricas como medidas, variações e estatísticas;habilidades;7;blue;Matemática;0.2;;-1.193.731.327;-2768.5;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica;@" +
	";;;area;blue;Estudo do funcionamento da mente humana e seus padrões;habilidades;8;blue;Psicologia;0.2;;-8.682.111.005;-325.472.201;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Psicologia;@" +
	";;;area;blue;Conhecimentos e habilidades ligados a sistemas de informação digitais, computadores e redes;habilidades;9;blue;Tecnologia da informação;0.2;;-8714.75;-2716.5;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Tecnologia_da_informa%C3%A7%C3%A3o;@" +
	";;;area;blue;Competências emocionais, sociais e criativas;habilidades;10;blue;Soft Skills;0.2;;-1.081.821.351;-2.253.914.594;ellipse;;;;;nodes;70;;;@" +
	";;;area;blue;Estudo do comportamento e interações humanas;habilidades;11;blue;Sociologia;0.2;;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sociologia;@" +
	";;;area;blue;Comunicação em idiomas estrangeiros;habilidades;12;blue;Idiomas;1.2;;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_natural;@" +
	"Acadêmica;;;campo;blue;Academia;habilidades;100;blue;Academia;0.2;1;-12.131.927;-2.666.033.772;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;;;campo;blue;;habilidades;127;blue;Métodos de ensino;0.2;1;;;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;;;campo;blue;;habilidades;128;blue;Pesquisa;0.2;1;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Administração geral;habilidades;101;blue;Administração geral;0.2;2;-1.038.322.439;-2.137.986.342;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Comercial;habilidades;102;blue;Comercial;0.2;2;-1.047.105.011;-2.898.904.708;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Empreendedorismo;habilidades;103;blue;Empreendedorismo;0.2;2;-1.124.839.643;-2.321.567.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Estratégia;habilidades;104;blue;Estratégia;0.2;2;-9.544.646.433;-3.233.067.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Finanças;habilidades;105;blue;Finanças;0.2;2;-1.066.169.641;-3.458.822.704;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Logística;habilidades;106;blue;Logística;0.2;2;-9.664.303.626;-1.875.697.556;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Marketing;habilidades;107;blue;Marketing;0.2;2;-9.733.896.433;-2.755.067.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;;;campo;blue;Recursos humanos;habilidades;108;blue;Recursos humanos;0.2;2;-1.112.218.552;-2.790.988.912;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;;;campo;blue;Contabilidade;habilidades;109;blue;Contabilidade;0.2;3;-8.586.896.904;-3835.75;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Direito Civil;habilidades;110;blue;Direito civil;0.2;4;-872.439.307;-2.290.000.497;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Direito comercial;habilidades;111;blue;Direito comercial;0.2;4;-8.780.530.068;-1.944.538.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Direito constitucional;habilidades;112;blue;Direito constitucional;0.2;4;-8.682.985.993;-2.130.906.904;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Direito tributário;habilidades;113;blue;Direito tributário;0.2;4;-9010;-2230.25;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Direito trabalhista;habilidades;114;blue;Direito trabalhista;0.2;4;-8.774.348.466;-2.179.009.956;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;@" +
	"Direito;;;campo;blue;Regulações setoriais;habilidades;115;blue;Regulações setoriais;0.2;4;-8.597.779.232;-2.181.491.039;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;;habilidades;129;blue;Direito administrativo;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;;habilidades;130;blue;Direito econômico;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Conjunto de regras, instituições e suas jurisprudências, que regulam o processo jurídico;habilidades;131;blue;Direito processual;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;Conjunto de normas que regulam o funcionamento do mercado bancário no Brasil;habilidades;132;blue;Direito bancário;0.2;4;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_banc%C3%A1rio;@" +
	"Direito;;;campo;blue;;habilidades;134;blue;Direito Internacional;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;campo;blue;;habilidades;136;blue;Direito penal;0.2;4;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;@" +
	"Economia;;;campo;blue;Análise econômica;habilidades;116;blue;Análise econômica;0.2;5;-1.186.416.156;-3.106.012.945;ellipse;;;;;nodes;70;;;@" +
	"Economia;;;campo;blue;Economia comportamental;habilidades;117;blue;Economia comportamental;0.2;5;-1.174.174.096;-3.472.485.369;ellipse;;;;;nodes;70;;;@" +
	"Economia;;;campo;blue;;habilidades;137;blue;Pensamento economico;0.2;5;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;;;campo;blue;Ética;habilidades;118;blue;Ética;0.2;6;-1.213.177.277;-2.548.637.988;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;;;campo;blue;;habilidades;138;blue;Filosofia política;0.2;6;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Filosofia_pol%C3%ADtica;@" +
	"Idiomas;;;campo;blue;Comunicação na língua inglesa;habilidades;139;blue;Inglês;0.2;12;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;;;campo;blue;Comunicação na língua francesa;habilidades;144;blue;Francês;0.2;12;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;;;campo;blue;Comunicação na língua espanhola;habilidades;145;blue;Espanhol;0.2;12;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;;;campo;blue;Cálculo;habilidades;119;blue;Cálculo;0.2;7;-11862;-2766;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@" +
	"Matemática;;;campo;blue;Estatística;habilidades;120;blue;Estatística;0.2;7;-11683;-2755;ellipse;;;;;nodes;70;;;@" +
	"Matemática ;;;campo;blue;;habilidades;140;blue;Álgebra;0.2;7;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática ;;;campo;blue;;habilidades;141;blue;Probabilidade;0.2;7;;;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;;;campo;blue;Psicologia Freudiana;habilidades;121;blue;Psicologia Freudiana;0.2;8;-8960;-3236;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;;;campo;blue;Psicologia do trabalho;habilidades;122;blue;Psicologia do trabalho;0.2;8;-8.592.861.005;-324.697.201;ellipse;;;;;nodes;70;;;@" +
	"Sociologia;;;campo;blue;;habilidades;142;blue;Sociologia econômica;0.2;11;;;ellipse;;;;;nodes;70;;;@" +
	"Sociologia;;;campo;blue;;habilidades;143;blue;Sociologia jurídica;0.2;11;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;;;campo;blue;Computação geral;habilidades;123;blue;Computação geral;0.2;9;-8913.25;-2858.75;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;;;campo;blue;Infra estrutura tecnológica;habilidades;124;blue;Infra estrutura tecnológica;0.2;9;-8444;-2805.75;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;;;campo;blue;Programação e Desenvolvimento;habilidades;125;blue;Programação e Desenvolvimento;0.2;9;-8910;-2481.25;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;;;campo;blue;Sistemas e plataformas;habilidades;126;blue;Sistemas e plataformas;0.2;9;-8445;-2581.75;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;;;categoria;blue;Monografias;habilidades;1000;blue;Monografias;0.2;100;-1.193.731.327;-2768.5;ellipse;;;;;nodes;70;;;@" +
	"Álgebra;;;categoria;blue;;habilidades;1050;blue;Álgebra linear;0.2;140;;;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Gestão de instituição financeira;habilidades;1001;blue;Gestão de instituição financeira;0.2;101;-1.058.060.352;-2.050.062.003;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Gestão de projetos;habilidades;1002;blue;Gestão de projetos;0.2;101;-1.036.948.664;-2.288.945.118;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Gestão hospitalar;habilidades;1003;blue;Gestão hospitalar;0.2;101;-9.928.816.587;-2.114.220.107;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Governança corporativa;habilidades;1004;blue;Governança corporativa;0.2;101;-9.933.052.347;-2.286.517.399;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Operações;habilidades;1005;blue;Operações;0.2;101;-992.469.711;-1.959.118.954;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Sustentabilidade;habilidades;1007;blue;Sustentabilidade;0.2;101;-1.028.834.187;-2.050.854.914;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Tomada de decisões;habilidades;1008;blue;Tomada de decisões;0.2;101;-1.090.021.351;-235.535.373;ellipse;;;;;nodes;70;;;@" +
	"Administração geral;;;categoria;blue;Teoria da administração;habilidades;1009;blue;Teoria da administração;0.2;101;-1.087.566.246;-2.049.619.948;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;Macro economia;habilidades;1010;blue;Macroeconomia;0.2;116;-1.171.747.864;-2.954.262.945;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;Micro economia;habilidades;1011;blue;Microeconomia;0.2;116;-1.177.347.864;-3.217.262.945;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;Teoria do desenvolvimento econômico;habilidades;1012;blue;Teoria do desenvolvimento econômico;0.2;116;-1.198.784.448;-2.908.897.108;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;Teoria dos jogos;habilidades;1013;blue;Teoria dos jogos;0.2;116;-1.199.247.864;-3.002.262.945;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;;habilidades;1051;blue;Econometria;0.2;116;;;ellipse;;;;;nodes;70;;;@" +
	"Análise econômica;;;categoria;blue;;habilidades;1060;blue;Economia Internacional;0.2;116;;;ellipse;;;;;nodes;70;;;@" +
	"Comercial;;;categoria;blue;Negociações;habilidades;1014;blue;Negociações;0.2;102;-1.064.530.011;-2.882.154.708;ellipse;;;;;nodes;70;;;@" +
	"Comercial;;;categoria;blue;Relacionamento com clientes;habilidades;1015;blue;Relacionamento com clientes;0.2;102;-1.038.730.011;-2.891.154.708;ellipse;;;;;nodes;70;;;@" +
	"Computação geral;;;categoria;blue;Utilização MS Office;habilidades;1016;blue;Utilização MS Office;0.2;123;-8913.25;-2851;ellipse;;;;;nodes;70;;;@" +
	"Contabilidade;;;categoria;blue;Contabilidade empresarial;habilidades;1018;blue;Contabilidade empresarial;0.2;109;-8.823.910.979;-3.805.314.817;ellipse;;;;;nodes;70;;;@" +
	"Contabilidade;;;categoria;blue;Contabilidade financeira;habilidades;1019;blue;Contabilidade financeira;0.2;109;-8723.25;-3478.5;ellipse;;;;;nodes;70;;;@" +
	"Contabilidade;;;categoria;blue;Contabilidade Pessoal;habilidades;1020;blue;Contabilidade pessoal;0.2;109;-9062;-3996;ellipse;;;;;nodes;70;;;@" +
	"Direito Civil;;;categoria;blue;Código civil;habilidades;1021;blue;Código civil;0.2;110;-872.439.307;-2.282.250.497;ellipse;;;;;nodes;70;;;@" +
	"Direito Civil;;;categoria;blue;;habilidades;1052;blue;Direito da propriedade;0.2;110;;;ellipse;;;;;nodes;70;;;@" +
	"Direito Civil;;;categoria;blue;;habilidades;1053;blue;Direito da família;0.2;110;;;ellipse;;;;;nodes;70;;;@" +
	"Direito Civil;;;categoria;blue;;habilidades;1054;blue;Direito das sucessões;0.2;110;;;ellipse;;;;;nodes;70;;;@" +
	"Direito Comercial;;;categoria;blue;Contratos;habilidades;1022;blue;Contratos;0.2;111;-8.779.530.068;-1.842.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito Comercial;;;categoria;blue;Direito societário;habilidades;1024;blue;Direito societário;0.2;111;-8.780.530.068;-1.987.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito internacional;;;categoria;blue;;habilidades;1055;blue;Direito internacional público;0.2;134;;;ellipse;;;;;nodes;70;;;@" +
	"Direito internacional;;;categoria;blue;;habilidades;1056;blue;Direito internacional privado;0.2;134;;;ellipse;;;;;nodes;70;;;@" +
	"Direito tributário;;;categoria;blue;Tributação;habilidades;1025;blue;Tributação;0.2;113;-9010;-2222.5;ellipse;;;;;nodes;70;;;@" +
	"Direito tributário;;;categoria;blue;;habilidades;1057;blue;Planejamento tributário;0.2;113;;;ellipse;;;;;nodes;70;;;@" +
	"Economia comportamental;;;categoria;blue;Finanças comportamentais;habilidades;1026;blue;Finanças comportamentais;0.2;117;-1.174.174.096;-3.464.735.369;ellipse;;;;;nodes;70;;;@" +
	"Empreendedorismo;;;categoria;blue;Inovação;habilidades;1027;blue;Inovação;0.2;103;-1.124.539.643;-2.190.317.081;ellipse;;;;;nodes;70;;;@" +
	"Empreendedorismo;;;categoria;blue;Novos negócios;habilidades;1028;blue;Novos negócios;0.2;103;-1.127.539.643;-2.361.817.081;ellipse;;;;;nodes;70;;;@" +
	"Estratégia;;;categoria;blue;Análises estratégicas;habilidades;1029;blue;Análises estratégicas;0.2;104;-9.542.146.433;-3.155.317.081;ellipse;;;;;nodes;70;;;@" +
	"Estratégia;;;categoria;blue;Decisão estratégica;habilidades;1030;blue;Decisão estratégica;0.2;104;-9.544.646.433;-3.335.317.081;ellipse;;;;;nodes;70;;;@" +
	"Ética;;;categoria;blue;Ética Aplicada;habilidades;1031;blue;Ética Aplicada;0.2;118;-1.213.177.277;-2.540.637.988;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Finanças Bancárias;habilidades;1017;blue;Bancos;0.2;105;-8179;-3744.5;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Finanças corporativas;habilidades;1032;blue;Finanças corporativas;0.2;105;-1.022.410.492;-3.342.979.794;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Controladoria;habilidades;1033;blue;Controladoria;0.2;105;-1.029.364.643;-3.681.817.081;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Investimentos;habilidades;1034;blue;Investimentos;0.2;105;-1.093.797.924;-3.679.165.614;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Matemática financeira;habilidades;1035;blue;Matemática financeira;0.2;105;-1.135.040.854;-3.547.920.648;ellipse;;;;;nodes;70;;;@" +
	"Finanças;;;categoria;blue;Trading;habilidades;1036;blue;Trading;0.2;105;-1.104.662.788;-3.266.156.659;ellipse;;;;;nodes;70;;;@" +
	"Infra estrutura tecnológica;;;categoria;blue;Implementação de sistemas;habilidades;1037;blue;Implementação de sistemas;0.2;124;-8444;-2798;ellipse;;;;;nodes;70;;;@" +
	"Inglês;;;categoria;blue;;habilidades;1058;blue;Inglês de negócios;0.2;139;;;ellipse;;;;;nodes;70;;;@" +
	"Marketing;;;categoria;blue;Gestão de marketing;habilidades;1038;blue;Gestão de marketing;0.2;107;-9.625.396.433;-2.796.317.081;ellipse;;;;;nodes;70;;;@" +
	"Marketing;;;categoria;blue;Criação de estratégias mercadológicas;habilidades;1039;blue;Estratégia competitiva;0.2;107;-1.004.939.643;-2.788.817.081;ellipse;;;;;nodes;70;;;@" +
	"Marketing;;;categoria;blue;Propaganda;habilidades;1040;blue;Propaganda;0.2;107;-9.418.482.104;-2.528.817.081;ellipse;;;;;nodes;70;;;@" +
	"Marketing;;;categoria;blue;Publicidade;habilidades;1041;blue;Publicidade;0.2;107;-1.005.439.643;-2.673.817.081;ellipse;;;;;nodes;70;;;@" +
	"Marketing;;;categoria;blue;Utilização de canais digitais para a realização de comunicações e vendas;habilidades;1061;blue;Marketing digital;0.2;107;;;ellipse;;;;;nodes;70;;;@" +
	"Programação e Desenvolvimento;;;categoria;blue;Linguagens de programação;habilidades;1042;blue;Linguagens de programação;0.2;125;-8910;-2473.5;ellipse;;;;;nodes;70;;;@" +
	"Psicologia do trabalho;;;categoria;blue;Psicologia comportamental;habilidades;1043;blue;Psicologia comportamental;0.2;122;-8.592.861.005;-323.922.201;ellipse;;;;;nodes;70;;;@" +
	"Recursos humanos;;;categoria;blue;Gestão de recursos humanos;habilidades;1044;blue;Gestão de recursos humanos;0.2;108;-1.114.668.552;-2.788.238.912;ellipse;;;;;nodes;70;;;@" +
	"Recursos humanos;;;categoria;blue;Liderança corporativa;habilidades;1045;blue;Liderança corporativa;0.2;108;-1.105.043.552;-2.977.738.912;ellipse;;;;;nodes;70;;;@" +
	"Recursos humanos;;;categoria;blue;Organização empresarial;habilidades;1046;blue;Organização empresarial;0.2;108;-1.111.293.552;-2.590.238.912;ellipse;;;;;nodes;70;;;@" +
	"Regulações setoriais;;;categoria;blue;Regulação bancária;habilidades;1047;blue;Regulação bancária;0.2;115;-8.238.469.932;-2.087.867.383;ellipse;;;;;nodes;70;;;@" +
	"Sistemas e plataformas;;;categoria;blue;Bases de dados;habilidades;1048;blue;Bases de dados;0.2;126;-8440;-2656;ellipse;;;;;nodes;70;;;@" +
	"Sistemas e plataformas;;;categoria;blue;Sistemas de negociação;habilidades;1049;blue;Sistemas de negociação;0.2;126;-8445;-2526;ellipse;;;;;nodes;70;;;@" +
	"Sistemas e plataformas;;;categoria;blue;;habilidades;1059;blue;Software econométrico;0.2;126;;;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;Academia;Monografias;habilidade;blue;Utilização das regras da ABNT para formatação de trabalhos acadêmicos;habilidades;10000;blue;Formatação de trabalhos científicos;0.2;1000;-1.212.262.653;-2.765.457.822;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;Métodos de ensino;;habilidade;blue;Utilização da metodologia de ensino baseada em solução de problemas e em projetos (Problem based Learning);habilidades;10168;blue;PBL;0.2;127;;;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;Pesquisa;;habilidade;blue;Criação de projetos de pesquisa acadêmica;habilidades;10169;blue;Projetos de pesquisa;0.2;128;;;ellipse;;;;;nodes;70;;;@" +
	"Acadêmica;Academia;Monografias;habilidade;blue;Aprovação de trabalhos teóricos em banca de examinação;habilidades;10170;blue;Defesa de teses;0.2;1000;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Gestão de instituição financeira;habilidade;blue;Viabilizar o funcionamento de um fundo de investimento e gerar as informações necessárias para órgãos reguladores e investidores;habilidades;10001;blue;Administração de fundos de investimentos;0.2;1001;-1.058.060.352;-2.042.062.003;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Gestão de projetos;habilidade;blue;Dimensionamento dos benefícios e resultados esperados de projetos;habilidades;10002;blue;Análise de valor agregado de projetos;0.2;1002;-1.048.698.664;-2.208.445.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@" +
	"Administração de empresas;Administração geral;Gestão de projetos;habilidade;blue;Criação de planos de metas e definição do tempo necessário ao cumprimento das atividades ligadas a um projeto;habilidades;10003;blue;Desenvolvimento de cronogramas;0.2;1002;-1.025.398.664;-2.276.445.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@" +
	"Administração de empresas;Administração geral;Gestão de projetos;habilidade;blue;Identificação de obstáculos e riscos de projetos e definição de ações para a mitigação dos mesmos;habilidades;10004;blue;Gerênciamento de riscos de projetos;0.2;1002;-1.024.798.664;-2.351.445.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@" +
	"Administração de empresas;Administração geral;Gestão de projetos;habilidade;blue;Desenvolvimento de planos de projetos, incluindo Escopos, objetivos, cronogramas, orçamentos e avaliação do esforço necessário.;habilidades;10005;blue;Planejamento de projetos;0.2;1002;-1.049.198.664;-2.277.445.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@" +
	"Administração de empresas;Administração geral;Gestão de projetos;habilidade;blue;Gestão de todo o processo de um projeto, incluindo custos, qualidade, recursos humanos e comunicações;habilidades;10006;blue;Gerência de projeto;0.2;1002;-1.049.298.664;-2.353.445.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@" +
	"Administração de empresas;Administração geral;Gestão hospitalar;habilidade;blue;Garantir existência de recursos para o funcionamento de um hospital ou clínica e maximizar sua eficiência;habilidades;10007;blue;Administração de hospitais e clínicas;0.2;1003;-9.928.816.587;-2.106.220.107;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Governança corporativa;habilidade;blue;Atendimento a demandas e gestão de relacionamento com órgãos regulatórios;habilidades;10008;blue;Relacionamento com órgãos reguladores;0.2;1004;-9.933.052.347;-2.349.017.399;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Governança corporativa;habilidade;blue;Organização e condução de comitês e conselhos, criação de pautas e atas;habilidades;10009;blue;Gestão de comitês;0.2;1004;-9.928.052.347;-2.208.017.399;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Governança corporativa;habilidade;blue;Estruturação e definição das alçadas de tomada de decisões corporativas;habilidades;10010;blue;Alçadas de decisão;0.2;1004;-9.928.052.347;-2.275.017.399;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Governança corporativa;habilidade;blue;Gestão de empresas e criação de instrumentos para mitigação de conflitos entre acionistas e gestores;habilidades;10201;blue;Gestão fiduciária;0.2;1004;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Determinar passos e atividades necessárias para o atingimento de um objetivo;habilidades;10011;blue;Criação e revisão de processos;0.2;1005;-992.469.711;-2.012.118.954;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Processo;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Ajustar processos e recursos para a entrega de um nível de eficiência planejado;habilidades;10012;blue;Determinação de níveis de eficiência;0.2;1005;-992.469.711;-1.949.118.954;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Determinar e otimizar a quantidade de recursos necessários a uma operação, desenhar e encadear processos envolvidos;habilidades;10015;blue;Planejamento operacional;0.2;1005;-992.569.711;-1.890.118.954;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Planejamento_operacional;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Identificação e registro do fluxo de processos envolvidos nas diversas atividades da empresa;habilidades;10313;blue;Mapeamento de processos;0.2;1005;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Desenvolvimento e análise de índices representativos do desempenho de uma operação ou empresa;habilidades;10314;blue;Métricas de performance;0.2;1005;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Operações;habilidade;blue;Desenvolvimento de projetos de terceirização de processos;habilidades;10315;blue;Terceirização;0.2;1005;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Administração geral;Sustentabilidade;habilidade;blue;Interagir com steakholders de uma operação, minimizar seus impactos ambientais e maximizar os sociais ;habilidades;10013;blue;Gestão da sustentabilidade;0.2;1007;-1.028.834.187;-2.042.854.914;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sustentabilidade;@" +
	"Administração de empresas;Administração geral;Teoria da administração;habilidade;blue;Entender a evolução do estudo da organização humana e seus principais expoentes;habilidades;10021;blue;História da administração;0.2;1009;-1.087.566.246;-2.041.619.948;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o;@" +
	"Administração de empresas;Administração geral;Teoria da administração;habilidade;blue;Definição de melhor estrutura organizacional para cada modelo e momento de negócio;habilidades;10171;blue;Estrutura organizacional;0.2;1009;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrutura_organizacional;@" +
	"Administração de empresas;Administração geral;Teoria da administração;habilidade;blue;Condução de processos de mudança organizacional, levando em consideração seu tipo e o ambiente em que ocorrerá;habilidades;10172;blue;Gestão de mudanças;0.2;1009;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_mudan%C3%A7a;@" +
	"Administração de empresas;Comercial;Negociações;habilidade;blue;Utilização de técnicas e conceitos de negociação para maximização de resultados;habilidades;10022;blue;Negociação;0.2;1014;-1.064.530.011;-2.874.154.708;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Negocia%C3%A7%C3%A3o;@" +
	"Administração de empresas;Comercial;Negociações;habilidade;blue;Participação dos diversos tipo de leilão e realização de lances para aquisição de produtos e serviços de acordo com as regras estipuladas;habilidades;10199;blue;Leilões;0.2;1014;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Leil%C3%A3o;@" +
	"Administração de empresas;Comercial;Relacionamento com clientes;habilidade;blue;Manutenção de relacionamento com clientes com objetivo de maximizar vendas e capacidade de atendimento;habilidades;10023;blue;Gestão de relacionamento com clientes;0.2;1015;-1.038.730.011;-2.921.154.708;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Comercial;Relacionamento com clientes;habilidade;blue;Pesquisa e contato com novos clientes, fornacedores e parceiros;habilidades;10024;blue;Prospecção de mercado;0.2;1015;-1.038.530.011;-2.845.154.708;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Comercial;Relacionamento com clientes;habilidade;blue;Informação de preço de combinações de produtos e serviços para clientes individuais;habilidades;10319;blue;Cotação e orçamento;0.2;1015;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Comercial;Relacionamento com clientes;habilidade;blue;Redação de propostas comerciais, contendo seus termos e condições;habilidades;10320;blue;Criação de propostas ;0.2;1015;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Comercial;Relacionamento com clientes;habilidade;blue;Interação com clientes para entendimento de suas demandas e melhor forma de atendê-las com produtos e serviços ofertados;habilidades;10321;blue;Atendimento a clientes;0.2;1015;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Empreendedorismo;Inovação;habilidade;blue;Aplicação de conceitos de inovação e design para solução de problemas;habilidades;10026;blue;Design thinking;0.2;1027;-1.111.639.643;-2.181.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Empreendedorismo;Inovação;habilidade;blue;Identificação de lacunas de mercados ou criação de novas soluções para problemas e transformação de oportunidades em produtos ou serviços;habilidades;10028;blue;Inovação em produtos e serviços;0.2;1027;-1.131.139.643;-2.182.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Inova%C3%A7%C3%A3o;@" +
	"Administração de empresas;Empreendedorismo;Novos negócios;habilidade;blue;Condução do processo burocrático de abertura de uma nova pessoa jurídica;habilidades;10025;blue;Abertura de empresas;0.2;1028;-8.774.348.466;-2.179.009.956;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Empreendedorismo;Novos negócios;habilidade;blue;Criação de novos negócios com foco na criação eficiente de produtos com base na identificação de demandas;habilidades;10029;blue;Criação de negócio no modelo Lean Start-up;0.2;1028;-1.127.539.643;-2.277.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Lean_startup;@" +
	"Administração de empresas;Empreendedorismo;Novos negócios;habilidade;blue;Desenvolvimento de modelos de negócios adaptados a novos produtos, clientes e mercados;habilidades;10030;blue;Criação de novos modelos de negócios;0.2;1028;-1.127.439.643;-2.361.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Modelo_de_neg%C3%B3cio;@" +
	"Administração de empresas;Empreendedorismo;Novos negócios;habilidade;blue;Estruturação de operações e captação de recursos para viabilizar empresas em fase inicial de operação  ;habilidades;10031;blue;Financiamento de novos negócios;0.2;1028;-1.127.639.643;-2.429.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Empreendedorismo;Novos negócios;habilidade;blue;Criação de um plano de negócios contendo os objetivos, análise de mercado e as características da empresa e produto a serem criados;habilidades;10322;blue;Plano de negócios;0.2;1028;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Estratégia;Análises estratégicas;habilidade;blue;Criação de relatórios de estratégias de concorrentes, determinar seus pontos fortes e fracos e posicionar empresas no mercado;habilidades;10032;blue;Análise da concorrência;0.2;1029;-9.419.396.433;-3.105.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@" +
	"Administração de empresas;Estratégia;Análises estratégicas;habilidade;blue;Identificação de potenciais reações competitivas de uma decisão estratégica e adaptação a essas reações;habilidades;10033;blue;Análise de end game;0.2;1029;-9.627.845.052;-3.109.171.376;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Estratégia;Análises estratégicas;habilidade;blue;Identificação do ponto de vida de determinado produto e adoção de medidas ajustadas à situação;habilidades;10034;blue;Análise do ciclo de vida do produto;0.2;1029;-9.626.396.433;-3.185.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ciclo_de_vida_do_produto;@" +
	"Administração de empresas;Estratégia;Análises estratégicas;habilidade;blue;Construir o entendimento sobre uma indústria, sua cadeia de valor, tendências e distribuição de poderes;habilidades;10035;blue;Análise estrutural;0.2;1029;-9.420.396.433;-3.188.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@" +
	"Administração de empresas;Estratégia;Decisão estratégica;habilidade;blue;Definir estratégia geral ou especifica com base em dados de mercado e análises mercadológicas e estratégicas;habilidades;10036;blue;Construção de estratégias competitivas;0.2;1030;-9.437.396.433;-3.328.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@" +
	"Administração de empresas;Estratégia;Decisão estratégica;habilidade;blue;Desenvolvimento de objetivos de médio e longo prazo e identificação de ações necessárias a seu atingimento;habilidades;10037;blue;Planejamento estratégico;0.2;1030;-9.701.396.433;-3.325.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Cálculo dos índices de NSFR (Net Stable Funding Ratio) e LCR ( Liquidity Coverage Ratio);habilidades;10098;blue;Basiléia - Cálculos de liquidez e estabilidade de captação;0.2;1017;-8179;-3744;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Basileia_III;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Criação e divulgação de informações determinadas pelas normas de divulgação de informação e transparência para investidores de mercado (CVM/ Bolsas de valor) ;habilidades;10099;blue;Divulgação de informações a mercado;0.2;1017;-8181;-3821;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Determinação do índice de basiléia de um banco, a partir do cálculo do requerimento de capital por ativo ponderado por risco;habilidades;10100;blue;Basiléia - Cálculos de requerimento de capital;0.2;1017;-8187;-3652;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Basileia_III;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Avaliação do risco de não pagamento de dívidas por empresas;habilidades;10190;blue;Análise de crédito PJ;0.2;1017;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Avaliação do risco de não pagamento de dívidas por indivíduos;habilidades;10191;blue;Análise de crédito PF;0.2;1017;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Análise dos diversos riscos aos quais um banco está exposto e criação de estratégias de mitigação;habilidades;10192;blue;Análise de riscos;0.2;1017;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Análise das projeções de necessidades e disponibilidade de caixa no curto e médio prazo;habilidades;10193;blue;Análise de liquidez;0.2;1017;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Bancos;habilidade;blue;Avaliação e acompanhamento do valor de garantias prestadas em relação a uma dívida e tomada de ação em caso de desenquadramento;habilidades;10312;blue;Gestão de garantias;0.2;1017;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Controladoria;habilidade;blue;Criação de relatórios e demonstrativos gerenciais, de acordo com normas corporativas internas;habilidades;10049;blue;Relatórios gerenciais;0.2;1033;-1.018.639.643;-3.713.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Controladoria;habilidade;blue;Consolidação gerencial de demonstrativos de resultados de diversas unidades de negócio em agrupamentos;habilidades;10050;blue;Consolidação de resultados;0.2;1033;-1.018.139.643;-3.633.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Controladoria;habilidade;blue;Produção de informações conforme regulação visando o atendimento a investidores;habilidades;10051;blue;Relatórios para investidores;0.2;1033;-1.040.539.643;-3.713.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Controladoria;habilidade;blue;Criação de orçamentos de receitas e despesas e cálculo de necessidades de financiamento;habilidades;10198;blue;Planejamento financeiro;0.2;1033;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Controladoria;habilidade;blue;Acompanhamento de fluxos financeiros previstos e realizados, e tomada de ação para garantir a correta entrada e saída de recursos;habilidades;10306;blue;Gestão de contas a pagar/ receber;0.2;1033;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Renegociação de dívidas para readequação dos fluxos de pagamentos à geração de caixa da empresa;habilidades;10038;blue;Reestruturação de passivos;0.2;1032;-1.020.198.427;-3.152.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Estruturação de operações de captação de recursos por meio de venda e emissão de ações;habilidades;10040;blue;Captação a mercado via ações;0.2;1032;-1.046.572.557;-3.266.535.762;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_de_capitais;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Estruturação de operações de captação de recursos por meio de instrumentos de dívida, securitização e híbridos;habilidades;10041;blue;Captação a mercado de dívida;0.2;1032;-1.022.777.097;-3.267.165.116;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_de_capitais;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Análise vertical/ horizontal de balanços, DREs e fluxos de caixa;habilidades;10042;blue;Análise de demonstrativos financeiros;0.2;1032;-1.000.698.427;-3.201.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Criação de índices a partir de informações financeiras e interpretação de seus resultados;habilidades;10043;blue;Análise de índices financeiros;0.2;1032;-1.000.604.024;-3.266.535.762;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Cálculo do valor de opções reais e utilização na análise de investimentos;habilidades;10044;blue;Avaliação de opções reais;0.2;1032;-1.045.798.427;-3.150.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_op%C3%A7%C3%B5es_reais;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Cálculo e análise do valor de uma empresa/ ativos/ projetos via múltiplos ou descontos de fluxo de caixa;habilidades;10045;blue;Avaliação de empresas;0.2;1032;-1.046.298.427;-3.342.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Maximização do valor de uma empresa a partir da melhor composição de sua estrutura de financiamento ;habilidades;10046;blue;Otimização da estrutura de capital;0.2;1032;-1.000.798.427;-3.389.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Custo_do_capital;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Definição de estratégia e estruturação de operações de compra ou venda de negócios ou ativos;habilidades;10047;blue;Fusões e aquisições;0.2;1032;-1.025.398.427;-3.385.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Fus%C3%A3o_%28direito%29;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Garantir a disponibilidade de caixa, via a projeção de sua geração e de necessidades de financiamento;habilidades;10048;blue;Gestão de caixa;0.2;1032;-1.000.798.427;-3.138.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cash_management;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Determinação do custo de capital médio ponderado de uma empresa incluindo as componentes de capital próprio - CAPM -  e de terceiros;habilidades;10052;blue;Cálculo do custo de capital;0.2;1032;-1.040.739.643;-3.638.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Custo_do_capital;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Cálculo e análise das diversas medidas de alavancagem de uma empresa;habilidades;10185;blue;Alavancagem;0.2;1032;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Alavancagem_financeira;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Avaliação e seleção de modalidades de realização de investimentos em empresas;habilidades;10186;blue;Estratégias de saída;0.2;1032;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Determinação do valor presente de ativos a partir da sua capacidade de geração de resultados futuros;habilidades;10187;blue;Avaliação por desconto;0.2;1032;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Determinação do valor presente de ativos a partir da comparação de índices com empresas e transações semelhantes;habilidades;10188;blue;Avaliação por múltiplos;0.2;1032;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Estruturação de transações e veículos de securitização de ativos;habilidades;10189;blue;Securitização;0.2;1032;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Finanças corporativas;habilidade;blue;Determinação do valor presente de um projeto e sua sensibilidade a variáveis ligadas a esse projeto;habilidades;10307;blue;Avaliação de projetos;0.2;1032;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Análise básica do funcionamento de mercados financeiros com a visão de Risco e Retorno, Eficiência de mercado e Portfólio eficiente;habilidades;10039;blue;Teoria financeira;0.2;1034;-1.042.898.427;-3.531.479.794;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Finan%C3%A7as;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Determinação do preço de um ativo financeiro com base em análises estatisticas de componentes que o influenciam;habilidades;10053;blue;Análise quantitativa;0.2;1034;-1.102.522.924;-3.599.665.614;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Quantitative_analyst;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Determinação do preço de uma ação a partir de fluxos de caixa projetados com informações financeiras e de mercado;habilidades;10054;blue;Análise fundamentalista;0.2;1034;-1.174.174.096;-3.472.485.369;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_fundamentalista;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Determinação do preço de um ativo financeiro a partir do preço do ativo e seu comportamento histórico;habilidades;10055;blue;Análise técnica;0.2;1034;-1.081.622.924;-3.594.665.614;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_t%C3%A9cnica;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Gestão de carteira de renda fixa, execução de compra e venda de ativos para alinhamento do rendimento ao objetivo determinado;habilidades;10056;blue;Gestão de renda fixa;0.2;1034;-1.102.622.924;-3.677.665.614;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Renda_fixa;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Combinação dos diversos ativos financeiros disponíveis para a construção e manutenção de portfólio alinhado aos objetivos do investidor;habilidades;10057;blue;Gestão de portfólio;0.2;1034;-1.081.822.924;-3.747.665.614;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_moderna_do_portf%C3%B3lio;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Gestão de carteira de ativos imobiliários, execução de compra e venda de ativos e títulos de dívida lastreados em imóveis;habilidades;10058;blue;Gestão de ativos imobiliários;0.2;1034;-1.103.722.924;-3.747.665.614;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Gestão de portfólio de ações, execução de operações de compra e venda;habilidades;10059;blue;Gestão de ações;0.2;1034;-1.081.622.924;-3.665.665.614;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/A%C3%A7%C3%A3o_%28finan%C3%A7as%29;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Avaliação dos componentes e cálculo do valor justo de títulos de dívida pública ou corporativa;habilidades;10064;blue;Análise de títulos de renda fixa;0.2;1034;-1.131.628.642;-3.238.553.091;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Cálculo da taxa de juros justa para diferentes prazos e vencimentos, utilizando FRAs e projeções de mercados;habilidades;10063;blue;Curva a termo;0.2;1034;-1.131.828.642;-3.369.748.118;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Curva_a_termo;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Determinação de perfil de investidores a partir de seus objetivos e restrições, utilizando conceitos de gestão de portfólio;habilidades;10173;blue;Análise de perfil de investidor;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Análise de imóveis como investimentos;habilidades;10174;blue;Investimentos em imóveis;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Análise de investimento em empresas não listadas em bolsa de valores;habilidades;10175;blue;Capital de risco;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Análise de investimento em ativos não tradicionais e;habilidades;10176;blue;Hedge funds;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Análise de investimento em títulos de crédito securitizado;habilidades;10177;blue;Crédito securitizado;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Criação de estratégias de geração de valor com investimentos em ativos financeiros ou empresas de capital fechado;habilidades;10178;blue;Tese de investimento;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Criação de portfólio personalizado com diversificação de objetivos e orientação de longo prazo;habilidades;10179;blue;Gestão de fortunas;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Estruturação de veículos de investimento voltados à eficiência tributária na transmissão de bens entre gerações familiares;habilidades;10180;blue;Planejamento sucessório;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Criação de portfólio institucional, seguindo regras atuariais de retorno requerido e limitação de riscos;habilidades;10181;blue;Gestão institucional;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Avaliação de investimentos em títulos lastreados em contratos de seguros e resseguros;habilidades;10182;blue;Investimentos em seguros;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Determinação das exposições a serem tomadas e ajuste de portfólio para balanceamento destas exposições ;habilidades;10183;blue;Gestão de riscos;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Investimentos;habilidade;blue;Utilização de benchmarks e objetivos para avaliação do desempenho do portfolio;habilidades;10184;blue;Avaliação de performance;0.2;1034;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Matemática financeira;habilidade;blue;Cálculo do valor do dinheiro no tempo;habilidades;10060;blue;Valor do dinheiro no tempo;0.2;1035;-1.135.040.854;-3.580.420.648;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;@" +
	"Administração de empresas;Finanças;Matemática financeira;habilidade;blue;Capitalização de juros simples e juros compostos e variantes internacionais;habilidades;10061;blue;Cálculo de juros;0.2;1035;-1.135.040.854;-3.499.420.648;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de títulos de dívida e derivativos de juros em mercado ou balcão;habilidades;10062;blue;Negociação de juros;0.2;1036;-1.105.301.809;-3.249.918.929;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Cálculo do valor de derivativos como opções de compra e venda e futuros;habilidades;10065;blue;Precificação de derivativos;0.2;1036;-1.078.246.933;-3.254.565.199;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Derivativo;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Montagem de estratégias de hedge com swaps, opções, alguéis de ações e seguros;habilidades;10066;blue;Criação de estratégias de hedge;0.2;1036;-9.626.396.433;-3.185.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cobertura_%28finan%C3%A7as%29;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de moedas estrangeiras e seus derivativos para clientes ou empresas;habilidades;10067;blue;Negociação de moedas;0.2;1036;-1.078.046.933;-3.158.565.199;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Utilização de plataformas de negociação de ativos financeiros;habilidades;10068;blue;Operação de plataformas de negociação;0.2;1036;-1.104.246.933;-3.362.565.199;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de ações em mercados organizados ou balcão;habilidades;10069;blue;Negociação de ações;0.2;1036;-1.077.046.933;-3.366.565.199;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de commodities e seus derivativos em mercados ou balcão;habilidades;10070;blue;Negociação de commodities;0.2;1036;-1.131.946.933;-3.146.565.199;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Aplicação dos conceitos dos diversos tipos de derivativos em estruturas financeiras ou negociações;habilidades;10194;blue;Conceitos de derivativos;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Cálculo de ágios cobrados em transações de ativos e inclusão da informação na tomada de decisão de investimentos;habilidades;10195;blue;Spreads e prêmios;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de ativos com preço divergente de seu valor justo com a expectativa de ajuste para esse valor;habilidades;10196;blue;Arbitragem;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Avaliação dos componentes (letras gregas) do valor de uma opção de compra;habilidades;10197;blue;Opções de compra;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Combinação de ativos financeiros e derivativos com base em uma estratégia de resultado;habilidades;10308;blue;Estruturação de produtos;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de títulos de renda fixa e dívida corporativa em mercados organizados;habilidades;10309;blue;Negociação de derivativos;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Compra e venda de opções, futuros e contratos derivativos em bolsa ou balcão;habilidades;10310;blue;Negociação de renda fixa;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Finanças;Trading;habilidade;blue;Utilização de técnicas de negociação baseadas em estruturas de mercado, custos de transação e preferências estratégica;habilidades;10311;blue;Estratégias de negociação;0.2;1036;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Logística;;habilidade;blue;Redução dos custos e aumento da eficiência na movimentação de recursos e bens;habilidades;10071;blue;Otimização logística;0.2;106;-9.653.903.043;-1.793.901.571;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Estratégia competitiva;habilidade;blue;Análise da cadeia de fornecedores e de processos produtivos  para identificação de vantagens e desvantagens competitivas;habilidades;10072;blue;Análise de cadeia de valor;0.2;1039;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Estratégia competitiva;habilidade;blue;Definição de ações para melhora da posição competititva da empresa;habilidades;10075;blue;Criação de estratégia competitiva;0.2;1039;-9.782.396.433;-2.957.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia_competitiva;@" +
	"Administração de empresas;Marketing;Estratégia competitiva;habilidade;blue;Análise da distribuição de forças em um determinado mercado e mitigação dos riscos que essa distribuição apresenta;habilidades;10200;blue;Forças de mercado;0.2;1039;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Coleta e interpretação de dados sobre produtos e desejos dos consumidores;habilidades;10073;blue;Pesquisa mercadológica;0.2;1038;-9.781.396.433;-2.781.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Criação de estratégias para expansão de mercados e manutenção da base de clientes atuais;habilidades;10074;blue;Atração e retenção de clientes;0.2;1038;-9.498.396.433;-2.618.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Controle dos canais de comunicação e mensagens a serem enviadas aos clientes, fornecedores e mercado em geral;habilidades;10076;blue;Gestão de comunicação mercadológica;0.2;1038;-9.783.396.433;-2.624.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Definição e avaliação dos canais a serem empregados pela empresa para entregar seus produtos e serviços;habilidades;10077;blue;Gestão de canais;0.2;1038;-9.389.396.433;-2.953.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_%28log%C3%ADstica%29;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Gestão mercadológica dos produtos, levando em consideração seus atributos, o mercado, canais e concorrentes;habilidades;10078;blue;Gestão de produtos;0.2;1038;-9.495.396.433;-2.858.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Produto_%28marketing%29;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Desenvolvimento de campanhas de comunicação e propagandas institucionais ou de produtos;habilidades;10079;blue;Gestão de propaganda e publicidade;0.2;1038;-9.497.396.433;-2.697.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Propaganda;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Coleta e análise contínuas de dados sobre desempenho de produtos e concorrentes em um mercado e mapeamento das preferências dos consumidores;habilidades;10080;blue;Inteligência competitiva;0.2;1038;-9.786.396.433;-2.697.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_competitiva;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Criação de soluções (produtos e serviços) para demandas identificadas on mercado;habilidades;10081;blue;Desenvolvimento de novos produtos;0.2;1038;-9.780.396.433;-2.863.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Definição de preços com base em metodologias como mark-up ou disponibilidade a pagar dos consumidores por atributos;habilidades;10082;blue;Precificação de produtos e serviços;0.2;1038;-9.493.396.433;-2.764.817.081;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pre%C3%A7o;@" +
	"Administração de empresas;Marketing;Gestão de marketing;habilidade;blue;Criação de segmentos de clientes a partir da definição de suas características;habilidades;10083;blue;Segmentação de mercado;0.2;1038;-1.174.174.096;-3.472.485.369;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Segmenta%C3%A7%C3%A3o_de_mercado;@" +
	"Administração de empresas;Marketing;Propaganda;habilidade;blue;Criação de materiais de comunicação institucional para a divulgação da empresa;habilidades;10084;blue;Materiais institucionais;0.2;1040;-9.418.482.104;-2.520.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Publicidade;habilidade;blue;Comunicação com mercado e coordenação de ações de exposição de marca e de identidade corporativa;habilidades;10085;blue;Relacionamento Público;0.2;1041;-1.005.439.643;-2.697.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Publicidade;habilidade;blue;Realização de eventos com programação de atividades, emissão de convites e organização do local;habilidades;10086;blue;Organização de eventos;0.2;1041;-1.005.439.643;-2.633.817.081;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Marketing digital;habilidade;blue;Criação de campanhas em plataformas digitais de marketing, como Google Ads e Facewords;habilidades;10316;blue;Criação de campanhas;0.2;1061;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Marketing digital;habilidade;blue;Acompanhamento do desempenho de campanhas com índices e ações corretivas;habilidades;10317;blue;Gestão de campanhas;0.2;1061;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Marketing;Marketing digital;habilidade;blue;Desenvolvimento de iniciativas de otimização do desempenho de sites em sistemas de busca;habilidades;10318;blue;Otimização de sistemas de buscas;0.2;1061;;;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Controle e cálculos de valores para pagamentos de salários e benefícios a funcionários;habilidades;10087;blue;Gestão da folha de pagamentos;0.2;1044;-1.098.243.552;-2.683.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Desenvolvimento de estratégias de retenção, motivação e aumento de eficiência de funcionários;habilidades;10088;blue;Criação de estratégias de Recursos humanos;0.2;1044;-1.126.343.552;-2.871.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Acompanhamento individual de colaboradores e prestação de apoio ao seu desenvolvimento;habilidades;10089;blue;Coaching;0.2;1044;-1.099.143.552;-2.876.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Condução de processo de seleção de pessoas, da descrição da vaga à contratação;habilidades;10090;blue;Contratação de funcionários;0.2;1044;-1.096.743.552;-2.769.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Definição de pacotes de remuneração e benefícios a partir de estudos de mercado e interações com funcionários;habilidades;10091;blue;Gestão de remuneração e benefícios;0.2;1044;-1.126.243.552;-2.685.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Gestão de recursos humanos;habilidade;blue;Identificação de necessidade e criação de programas de capacitação de funcionários;habilidades;10092;blue;Treinamento de recursos humanos;0.2;1044;-1.125.943.552;-2.771.738.912;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Treinamento;@" +
	"Administração de empresas;Recursos humanos;Liderança corporativa;habilidade;blue;Utilização de técnicas de liderança para motivação;habilidades;10093;blue;Técnicas de liderança;0.2;1045;-1.105.043.552;-2.969.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Organização empresarial;habilidade;blue;Definição e acompanhamento de metas de cargos e funções;habilidades;10094;blue;Gestão de metas;0.2;1046;-1.134.643.552;-2.583.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Organização empresarial;habilidade;blue;Especificação de pacotes de remuneração para cargos e funções;habilidades;10095;blue;Remuneração;0.2;1046;-1.093.797.924;-3.679.165.614;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Organização empresarial;habilidade;blue;Especificação de mandatos de cargos e funções;habilidades;10096;blue;Definição de mandatos e cargos;0.2;1046;-1.093.343.552;-2.580.738.912;ellipse;;;;;nodes;70;;;@" +
	"Administração de empresas;Recursos humanos;Organização empresarial;habilidade;blue;Criação de mapas de cargos e funções de uma empresa;habilidades;10097;blue;Organogramas funcionais;0.2;1046;-1.115.843.552;-2.580.738.912;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Determinação e alocação dos custos de uma empresa de acordo com normativos pré determinados;habilidades;10101;blue;Contabilização de custos;0.2;1018;-8769;-3885;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Reconhecimento e alocação das receitas de uma empresa de acordo com normas e regimes determinados;habilidades;10102;blue;Contabilização de receitas;0.2;1018;-8.907.799.383;-3.709.629.634;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Determinação do resultado de uma empresa a partir de receitas e custos;habilidades;10103;blue;Contabilização de resultados;0.2;1018;-8.592.038.328;-371.149.345;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Realização de todas as rotinas contábeis como lançamento de notas fiscais, geração de demonstrativos e controle de contas a pagar/ receber;habilidades;10104;blue;Gestão Contábil;0.2;1018;-9.055.747.028;-3.883.436.509;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Determinação de impostos a serem pagos e créditos tributários gerados por uma empresa, partindo das bases de cálculo e alíquotas estipuladas na lei brasileira;habilidades;10105;blue;Contabilização fiscal brasileira;0.2;1018;-8.522.528.151;-3.883.633.756;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Utilização de conceitos contábeis básicos: ativo, passivo, contas T, demonstrativos contábeis;habilidades;10106;blue;Princípios de contabilidade;0.2;1018;-8.767.239.264;-380.901.922;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Fechamento de demonstrativos financeiros de uma empresa: Balanço, DRE, Fluxo de caixa;habilidades;10107;blue;Montagem de demonstrativos financeiros;0.2;1018;-9.051.793.808;-3.807.314.322;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Realização de lançamentos contábeis de acordo com as normas internacionais de contabilidade estipuladas pelo IASB;habilidades;10219;blue;Contabilidade em IFRS;0.2;1018;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/International_Financial_Reporting_Standards;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Realização de lançamentos contábeis de acordo com as normas de contabilidade geralmente aceitas nos EUA;habilidades;10220;blue;Contabilidade em US GAAP;0.2;1018;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Generally_Accepted_Accounting_Principles_(United_States);@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Realização de lançamentos contábeis de acordo com as normas geralmente aceitas no Brasil;habilidades;10221;blue;Contabilidade em BR GAAP;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Contabilização e tratamento correto de lançamentos de intangíveis, provisões e demais itens não recorrentes da operação de uma empresa;habilidades;10222;blue;Contabilização de itens extraordinários;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Contabilização de itens de ativo, circulante ou permanente, de acordo com as normas internas e regulações vigentes;habilidades;10223;blue;Contabilização de ativos;0.2;1018;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ativo;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Contabilização de ativos operacionais e sua transformação de acordo com métodos existentes (PEPS/UEPS);habilidades;10224;blue;Estoques;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Tratamento do valor contábil de ativos de acordo com sua utilização e com as regulações existentes;habilidades;10225;blue;Depreciação;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Contabilização e consolidação de ativos permanentes de acordo com seu valor e estrutura de investimento ;habilidades;10226;blue;Investimentos;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade empresarial;habilidade;blue;Contabilização de itens de fluxo de caixa e correta determinação de seu valor, utilizando os métodos direto ou indireto ;habilidades;10227;blue;Contabilização de fluxo de caixa;0.2;1018;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade financeira;habilidade;blue;Contabilização de empresas do setor bancário, contemplando as regras específicas por produto e empresa;habilidades;10108;blue;Contabilização bancária;0.2;1019;-8530;-3500;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade financeira;habilidade;blue;Cálculo e registro de operações de seguros, suas provisões e resultados;habilidades;10109;blue;Contabilização de seguros;0.2;1019;-8644;-3441;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade financeira;habilidade;blue;Cálculo e registro de operações de leasing, seus resultados e tributação;habilidades;10110;blue;Contabilização de operações de leasing;0.2;1019;-8860;-3489;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade financeira;habilidade;blue;Criação de provisões e ajustes para lançamentos com efetivação em data diferente de sua execução;habilidades;10323;blue;Conciliação contábil;0.2;1019;;;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade pessoal;habilidade;blue;Determinação do Imposto de Renda de Pessoa Física a ser pago ou restituído;habilidades;10111;blue;Contabilização de IRPF;0.2;1020;-9062;-3988;ellipse;;;;;nodes;70;;;@" +
	"Ciências contábeis;Contabilidade;Contabilidade pessoal;habilidade;blue;Contabilização do valor e benefício tributário do investimento nas diversas modalidades de planos de previdência;habilidades;10228;blue;Contabilização previdenciária;0.2;1020;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Leitura de casos e análise de suas seções, fontes de informação e direcionamentos das conclusões;habilidades;10229;blue;Análise de casos;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Leitura de textos jurídicos e análise de seu conteúdo e forma;habilidades;10230;blue;Interpretação de textos jurídicos;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Conhecimento dos órgãos e instituições que compoem o poder judiciário brasileiro e direcionamento de casos de acordo;habilidades;10231;blue;Organização do poder judiciário;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Compreensão do conceito e utilização de jurisprudências para resolução de casos com maior agilidade;habilidades;10232;blue;Introdução a jurisprudência;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Entendimento do desenvolvimento histórico das leis e contextualização das leis atuais;habilidades;10233;blue;Desenvolvimento jurídico;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Participação de um processo como árbitro, seguindo as regras comuns ao papel ;habilidades;10234;blue;Arbitragem;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Análise de situações com base nos direitos humanos universais;habilidades;10235;blue;Direitos humanos;0.2;4;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direitos_humanos;@" +
	"Direito;;;habilidade;blue;Redação de documentos jurídicos utilizando a terminologia e formatos apropriados ;habilidades;10236;blue;Peças jurídicas;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;;;habilidade;blue;Determinação do grau de responsabilidade de uma parte de acordo com a legislação brasileira;habilidades;10237;blue;Avaliação de responsabilidade;0.2;4;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito administrativo;;habilidade;blue;Análise da eficiência e do funcionamento de instituições públicas com relação a seu papel;habilidades;10238;blue;Análise institucional;0.2;129;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito administrativo;;habilidade;blue;Criação de normativos para regular o correto funcionamento de instituições públicas;habilidades;10239;blue;Desenho institucional;0.2;129;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito administrativo;;habilidade;blue;Análise do impacto de leis e normativos nas esferas a que dizem respeito;habilidades;10324;blue;Análise de políticas públicas;0.2;129;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Civil;Código civil;habilidade;blue;Caracterização de uma pessoa jurídica a partir de seus objetivos e identificação dos requisitos e direitos de cada modalidade;habilidades;10112;blue;Definição de pessoa jurídica;0.2;1021;-872.439.307;-2.274.250.497;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pessoa_jur%C3%ADdica;@" +
	"Direito;Direito civil;Direito da família;habilidade;blue;Criação de contratos de união de indivíduos nas modalidades previstas na legislação brasileira;habilidades;10240;blue;Uniões;0.2;1053;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;@" +
	"Direito;Direito civil;Direito da família;habilidade;blue;Utilização das leis que envolvem crianças nas famílias para resolução de situações e garantia de direitos previstos na constituição;habilidades;10241;blue;Direitos de menores;0.2;1053;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;@" +
	"Direito;Direito civil;Direito da família;habilidade;blue;Dissolucão de contratos de união de indivíduos nas modalidades previstas na legislação brasileira e tratamento da separação;habilidades;10242;blue;Dissolução de uniões;0.2;1053;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;@" +
	"Direito;Direito civil;Direito das sucessões;habilidade;blue;Criação de planos para minimizar o trabalho e a taxação da transferência bens na sucessão;habilidades;10243;blue;Planejamento sucessório;0.2;1054;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es;@" +
	"Direito;Direito civil;Direito das sucessões;habilidade;blue;Redação de documentos contendo a destinação de bens na sucessão de um indivíduo;habilidades;10244;blue;Criação de testamentos;0.2;1054;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es;@" +
	"Direito;Direito civil;Direito das sucessões;habilidade;blue;Condução de processos de transmissão de bens para sucessores inter vivo ou causa mortis;habilidades;10245;blue;Processo sucessório;0.2;1054;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Invent%C3%A1rio;@" +
	"Direito;Direito civil;Direito da propriedade;habilidade;blue;Análise dos direitos e deveres oriundos da propriedade de algo;habilidades;10246;blue;Caracterização da propriedade;0.2;1052;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@" +
	"Direito;Direito civil;Direito da propriedade;habilidade;blue;Condução de casos de defesa da propriedade com base nos normativos brasileiros;habilidades;10247;blue;Defesa da propriedade;0.2;1052;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@" +
	"Direito;Direito civil;Direito da propriedade;habilidade;blue;Condução de processos de desapropriação em conforme com a legislação brasileira;habilidades;10248;blue;Desapropriação;0.2;1052;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Coordenação do processo falimentar, definição do tipo de pedido de falência;habilidades;10113;blue;Processo falimentar;0.2;1024;-9.025.530.068;-1.830.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Criação e revisão de contratos para a mudança da composição acionária de uma empresa,  contemplando acionistas e credores;habilidades;10114;blue;Reestruturação societária;0.2;1024;-9.020.530.068;-2.027.288.331;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Criação de peças jurídicas e revisão do contrato social de uma empresa para emissão de novas ações;habilidades;10115;blue;Emissão de novas ações;0.2;1024;-8.537.530.068;-1.935.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Criação e revisão de contratos para a emissão de instrumentos de dívida corporativa;habilidades;10116;blue;Emissão de títulos de dívida;0.2;1024;-8.596.530.068;-2.020.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Criação de contratos sociais, acordos de acionistas e demais peças necessárias ao registro de uma Pessoa Jurídica;habilidades;10117;blue;Criação de sociedades;0.2;1024;-8.807.530.068;-2.024.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Criação de contratos e documentos para o registro e funcionamento de fundos de investimentos;habilidades;10118;blue;Estruturação de fundos de investimentos;0.2;1024;-8.967.530.068;-1.933.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Direito societário;habilidade;blue;Estruturação jurídica de operação de compra e venda de empresas ou ativos corporativos;habilidades;10119;blue;Fusões e aquisições;0.2;1024;-8.723.530.068;-1.931.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Contratos;habilidade;blue;Desenvolvimento de contratos de serviços bancários em conforme com as leis;habilidades;10120;blue;Contratos bancários;0.2;1022;-8.779.530.068;-1.834.288.331;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Contratos;habilidade;blue;Criação de instrumentos jurídicos de intermediação de relacionamentos e estabelecimento de obrigações;habilidades;10249;blue;Redação de contratos;0.2;1022;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito Comercial;Contratos;habilidade;blue;Redação de contratos padronizados de acordo com o tipo de relacionamento que se propõe;habilidades;10250;blue;Tipos de contratos;0.2;1022;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito constitucional;;habilidade;blue;Aplicação dos conceitos básicos da constituição brasileira em análises jurídicas;habilidades;10121;blue;Princípios constitucionais brasileiros;0.2;112;-833.139.307;-2.276.190.362;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito econômico;;habilidade;blue;Análise do papel econômico do sistema jurídico, suas ineficiências e  alavancas ;habilidades;10251;blue;Análise econômica do direito;0.2;130;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_econ%C3%B4mico;@" +
	"Direito;Direito econômico;;habilidade;blue;Criação de políticas públicas com o intuito de fortalecer o sistema econômico do país;habilidades;10252;blue;Políticas públicas econômicas;0.2;130;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito internacional;Direito internacional público;habilidade;blue;Análise de acordos internacionais e seus impactos;habilidades;10253;blue;Comunidades internacionais;0.2;1055;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_internacional;@" +
	"Direito;Direito internacional;Direito internacional público;habilidade;blue;Observância de regulamentações internacionais na confecção de peças jurídicas;habilidades;10254;blue;Regulação internacional;0.2;1055;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito internacional;Direito internacional privado;habilidade;blue;Análise e criação de normas para composição de acordos internacionais;habilidades;10255;blue;Acordos Internacionais;0.2;1056;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_internacional;@" +
	"Direito;Direito internacional;Direito internacional privado;habilidade;blue;Resolução de disputas internacionais com base nas normas locais e de direito internacional;habilidades;10256;blue;Solução de controvérsias;0.2;1056;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito penal;;habilidade;blue;Análise de casos com base na jurisprudência penal vigente ;habilidades;10262;blue;Jurisprudência penal;0.2;136;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;@" +
	"Direito;Direito penal;;habilidade;blue;Moção de processos com base em atestação de infringimento do código penal;habilidades;10263;blue;Promotoria penal;0.2;136;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;@" +
	"Direito;Direito penal;;habilidade;blue;Condução de defesa de réus com base na desconstrução de argumentos e limitações da lei penal;habilidades;10264;blue;Defesa penal;0.2;136;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;@" +
	"Direito;Direito penal;;habilidade;blue;Utilização de analogias e comparações entre sistemas jurídicos extrangeiros para avaliação de casos;habilidades;10265;blue;Direito penal comparativo;0.2;136;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;@" +
	"Direito;Direito penal;;habilidade;blue;Definição da classificação do crime de acordo com a legislação penal;habilidades;10266;blue;Tipificação de crime;0.2;136;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito penal;;habilidade;blue;Definição da participação de um indivíduo em um crime;habilidades;10267;blue;Atribuição de culpa;0.2;136;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito processual;;habilidade;blue;Conhecimento das instituições brasileiras envolvidas em processos jurídicos e suas jurisdições;habilidades;10257;blue;Princípios processuais brasileiros;0.2;131;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil;@" +
	"Direito;Direito processual;;habilidade;blue;Condução de um processo pelas instituições brasileiras de acordo com a legislação vigente;habilidades;10258;blue;Processo civil no Brasil;0.2;131;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil;@" +
	"Direito;Direito processual;;habilidade;blue;Garantir o cumprimento de uma sentença decorrente de um processo;habilidades;10259;blue;Execução de sentenças;0.2;131;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito processual;;habilidade;blue;Criação de recursos contra sentenças resultantes de processos;habilidades;10260;blue;Recursos;0.2;131;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito processual;;habilidade;blue;Criação de estratégias para a maximização da chance de obtenção de resultado favorável em processo;habilidades;10261;blue;Estratégia processual;0.2;131;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito trabalhista;;habilidade;blue;Atuação em negociações sindicais para discussão de melhores termos dentro da legislação trabalhista brasileira;habilidades;10268;blue;Negociações coletivas;0.2;114;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;@" +
	"Direito;Direito trabalhista;;habilidade;blue;Criação de contratos de trabalho nas modalidades disponíveis em conforme com a legislação trabalhista brasileira;habilidades;10269;blue;Contratações;0.2;114;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;@" +
	"Direito;Direito trabalhista;;habilidade;blue;Utilização dos conceitos e princípios das leis trabalhistas brasileiras em vigor na construção de relações de trabalho;habilidades;10122;blue;Consolidação das Leis do trabalho;0.2;114;-8.328.863.003;-2.192.769.414;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito tributário;Tributação;habilidade;blue;Determinação de base de cálculo e alíquotas de tributos municipais;habilidades;10123;blue;Cálculo de tributos Municipais;0.2;1025;-9010;-2149;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@" +
	"Direito;Direito tributário;Tributação;habilidade;blue;Determinação de base de cálculo e alíquotas de tributos estaduais;habilidades;10124;blue;Cálculo de tributos Estaduais;0.2;1025;-9011;-2216;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@" +
	"Direito;Direito tributário;Tributação;habilidade;blue;Determinação de base de cálculo e alíquotas de tributos federais;habilidades;10125;blue;Cálculo de tributos federais;0.2;1025;-9010;-2280;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@" +
	"Direito;Direito tributário;;habilidade;blue;Compreensão da evolução da legislação tributária brasileira;habilidades;10270;blue;Evolução tributária;0.2;113;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Direito tributário;Planejamento tributário;habilidade;blue;Criação de estratégias de redução dos tributos a serem pagos de acordo com a legislação vigente;habilidades;10271;blue;Elisão fiscal;0.2;1057;;;ellipse;;;;;nodes;70;;;@" +
	"Direito;Regulações setoriais;Regulação bancária;habilidade;blue;Conhecimento das normas de divulgação de informação de bancos para BACEN e outros órgãos reguladores;habilidades;10126;blue;Divulgação de informações regulatórias;0.2;1047;-8.238.469.932;-2.079.867.383;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;;habilidade;blue;Utilização dos conceitos básicos da economia na avaliação de situações;habilidades;10209;blue;Princípios econômicos;0.2;116;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Determinação da saúde financeira de uma unidade governamental a partir de suas contas;habilidades;10127;blue;Análise das contas públicas;0.2;1010;-1.171.747.864;-2.904.262.945;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Determinação de tendências econômicas a partir do conjunto de regras que regem o funcionamento do governo e do banco central;habilidades;10128;blue;Análise das políticas monetárias e fiscais;0.2;1010;-1.126.343.552;-2.871.738.912;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Análise das tendências econômicas de um país ou região a partir de dados econômicos disponíveis;habilidades;10129;blue;Análise macroeconômica;0.2;1010;-1.171.447.864;-2.988.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Macroeconomia;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Análise dos impactos dos diversos tipos de regime cambial;habilidades;10202;blue;Análise de regime cambial;0.2;1010;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Análise do impacto de um acordo de comércio internacional;habilidades;10203;blue;Análise de acordos internacionais;0.2;1010;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Projeção de dados economicos utilizando modelos teóricos e informações de mercado;habilidades;10205;blue;Projeções econômicas;0.2;1010;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Macroeconomia;habilidade;blue;Análise dos impactos econômicos e setoriais de legislações, estatutos e normas;habilidades;10336;blue;Análise regulatória;0.2;1010;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Microeconomia;habilidade;blue;Determinação do preço ótimo para maximização do resultado em função dos custos marginais de produção (teoria da firma);habilidades;10130;blue;Análise de custos e lucros;0.2;1011;-1.177.547.864;-3.211.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_da_firma;@" +
	"Economia;Análise econômica;Microeconomia;habilidade;blue;Determinação da sensibilidade da demanda de produtos à variação de preços  e avaliação de suas causas e relações ;habilidades;10131;blue;Cálculos de elasticidade;0.2;1011;-1.177.047.864;-3.276.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Elasticidade_%28economia%29;@" +
	"Economia;Análise econômica;Microeconomia;habilidade;blue;Análise da variação de preços potencial em função da regra de equilíbrio de oferta e demanda;habilidades;10132;blue;Análise dos agregados de oferta e demanda;0.2;1011;-1.177.347.864;-3.142.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_do_equil%C3%ADbrio_geral;@" +
	"Economia;Análise econômica;Microeconomia;habilidade;blue;Identificação e caracterização de mercados em termos de estrutura e competição;habilidades;10208;blue;Mercados;0.2;1011;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado;@" +
	"Economia;Análise econômica;Economia internacional;habilidade;blue;Análise das regras e instituições econômicas de determinado país;habilidades;10206;blue;Análise de sistemas econômicos;0.2;1060;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia#Economia_internacional;@" +
	"Economia;Análise econômica;Economia internacional;habilidade;blue;Avaliação dos termos de uma negociação internacional e suas implicações financeiras;habilidades;10207;blue;Incoterms;0.2;1060;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Incoterms;@" +
	"Economia;Análise econômica;Econometria;habilidade;blue;Criação de modelos lineares de explicação de fatores econômicos por variáveis;habilidades;10212;blue;Modelos lineares;0.2;1051;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Econometria;habilidade;blue;Criação de modelos  de explicação de fatores econômicos por variáveis dispostas em um painel balanceado ou não;habilidades;10213;blue;Modelos de painel;0.2;1051;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Teoria do desenvolvimento econômico;habilidade;blue;Análise do desenvolvimento econômico brasileiro a partir de sua história;habilidades;10210;blue;Formação econômica brasileira;0.2;1012;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Teoria do desenvolvimento econômico;habilidade;blue;Análise do desenvolvimento da ciência econômica humana;habilidades;10211;blue;História econômica;0.2;1012;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Análise econômica;Teoria do desenvolvimento econômico;habilidade;blue;Avaliação da capacidade de crescimento de uma economia a partir dos componentes de capital, mão de obra e tecnologia;habilidades;10133;blue;Modelo de Solow;0.2;1012;-1.171.747.864;-2.954.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Modelo_de_Solow;@" +
	"Economia;Análise econômica;Teoria do desenvolvimento econômico;habilidade;blue;Análise do potencial de crescimento econômico a partir dos componentes que o promovem ;habilidades;10204;blue;Análise da produtividade dos fatores;0.2;1012;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Produtividade;@" +
	"Economia;Análise econômica;Teoria dos jogos;habilidade;blue;Estruturação de situações conforme a teoria dos jogos e análise dos possíveis resultados;habilidades;10134;blue;Modelagem de jogos;0.2;1013;-1.199.247.864;-2.994.262.945;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;@" +
	"Economia;Economia comportamental;Finanças comportamentais;habilidade;blue;Determinação de preços de ativos com base em comportamentos de agentes de mercado;habilidades;10135;blue;Modelagem behaviorista de preços;0.2;1026;-1.174.174.096;-3.456.735.369;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia_comportamental;@" +
	"Economia;Economia comportamental;Finanças comportamentais;habilidade;blue;Tomada de decisão levando em consideração possiveis impactos emocionais e sua desconsideração ;habilidades;10214;blue;Viés emocional;0.2;1026;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Economia comportamental;Finanças comportamentais;habilidade;blue;Tomada de decisão levando em consideração viéses comportamentais e desconsiderando-os;habilidades;10215;blue;Viés comportamental;0.2;1026;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Pensamento econômico;;habilidade;blue;Avaliação da criação das teorias econômicas em seus contextos históricos e culturais;habilidades;10216;blue;Evolução do pensamento econômico;0.2;137;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Pensamento econômico;;habilidade;blue;Avaliação da economia através do instrumental clássico criado por Adam Smith;habilidades;10217;blue;Economia clássica;0.2;137;;;ellipse;;;;;nodes;70;;;@" +
	"Economia;Pensamento econômico;;habilidade;blue;Avaliação da economia através do instrumental desenvolvido pela escola Austríaca de pensamento econômico;habilidades;10218;blue;Economia austríaca;0.2;137;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Ética;Ética aplicada;habilidade;blue;Aplicação de valores éticos na conduta profissional;habilidades;10136;blue;Ética nos negócios;0.2;1031;-9010;-2230.25;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Ética;Ética aplicada;habilidade;blue;Conduta pautada pelo conhecimento das normas morais, pela responsabilidade individual e pelo senso de dever;habilidades;10272;blue;Profissionalismo;0.2;1031;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Ética;Ética aplicada;habilidade;blue;Atuação com capacidade de discernimento entre os diversos interesses presentes em uma situação e com a tomada das devidas precauções;habilidades;10273;blue;Conflito de interesses;0.2;1031;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Conflito_de_interesses;@" +
	"Filosofia;Ética;Ética aplicada;habilidade;blue;Consideração pelo mercado, pelos clientes e pela instituição empregadora na tomada de decisão;habilidades;10274;blue;Responsabilidade com terceiros;0.2;1031;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Ética;Ética aplicada;habilidade;blue;Não divulgação de informações consideradas confidenciais;habilidades;10275;blue;Confidencialidade;0.2;1031;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Filosofia política;;habilidade;blue;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e estado e seu relacionamento;habilidades;10276;blue;O indivíduo e o estado;0.2;138;;;ellipse;;;;;nodes;70;;;@" +
	"Filosofia;Filosofia política;;habilidade;blue;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e liberdade;habilidades;10277;blue;A liberdade do indivíduo;0.2;138;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Inglês;;habilidade;blue;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;habilidades;10294;blue;Inglês básico;0.2;139;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Inglês;;habilidade;blue;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;habilidades;10295;blue;Inglês intermediário;0.2;139;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Inglês;;habilidade;blue;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;habilidades;10296;blue;Inglês avançado;0.2;139;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Inglês;;habilidade;blue;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;habilidades;10297;blue;Inglês fluente;0.2;139;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Francês;;habilidade;blue;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;habilidades;10298;blue;Francês básico;0.2;144;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Francês;;habilidade;blue;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;habilidades;10299;blue;Francês intermediário;0.2;144;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Francês;;habilidade;blue;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;habilidades;10300;blue;Francês avançado;0.2;144;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Francês;;habilidade;blue;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;habilidades;10301;blue;Francês fluente;0.2;144;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Espanhol;;habilidade;blue;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;habilidades;10302;blue;Espanhol básico;0.2;145;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Espanhol;;habilidade;blue;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;habilidades;10303;blue;Espanhol intermediário;0.2;145;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Espanhol;;habilidade;blue;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;habilidades;10304;blue;Espanhol avançado;0.2;145;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Espanhol;;habilidade;blue;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;habilidades;10305;blue;Espanhol fluente;0.2;145;;;ellipse;;;;;nodes;70;;;@" +
	"Idiomas;Inglês;Inglês de negócios;habilidade;blue;Redação de peças jurídicas em inglês com a correta utilização dos termos e construção de lógica;habilidades;10278;blue;Inglês jurídico;0.2;1058;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Álgebra;;habilidade;blue;Cálculo do resultado de sistemas com uma componente variável de tempo;habilidades;10285;blue;Sistemas dinâmicos;0.2;140;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sistema_din%C3%A2mico;@" +
	"Matemática;Álgebra;Álgebra linear;habilidade;blue;Cálculos e análises de conjuntos de equações lineares;habilidades;10286;blue;Sistemas lineares;0.2;1050;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Álgebra;Álgebra linear;habilidade;blue;Análise de formas geométricas com base em planos cartesianos;habilidades;10287;blue;Geometria analítica;0.2;1050;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Cálculo;;habilidade;blue;Cálculo do resultado de operações derivadas;habilidades;10138;blue;Cálculo diferencial;0.2;119;-1.187.011.963;-2.584.342.025;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@" +
	"Matemática;Cálculo;;habilidade;blue;Cálculo do resultado de operações integrais;habilidades;10139;blue;Cálculo integral;0.2;119;-1.187.358.984;-2.660.943.525;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@" +
	"Matemática;Cálculo;;habilidade;blue;Cálculo do resultado de uma equação com icógnitas em forma de derivadas;habilidades;10283;blue;Equações diferenciais;0.2;119;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_diferencial;@" +
	"Matemática;Cálculo;;habilidade;blue;Cálculo de termos anteriores ou seguintes de relações matemáticas a partir de regras particulares;habilidades;10284;blue;Relação de recorrência;0.2;119;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Rela%C3%A7%C3%A3o_de_recorr%C3%AAncia;@" +
	"Matemática;Estatística;;habilidade;blue;Avaliação estatística básica de conjuntos de dados e sua comparação a uma distribuição normal ;habilidades;10137;blue;Princípios estatísticos;0.2;120;-1.168.955.774;-2660;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Estatística;;habilidade;blue;Realização de testes de hipótese, significância estatística, análise de resíduos e de variância;habilidades;10140;blue;Testes de hipótese;0.2;120;-116.862.451;-2584;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Estatística;;habilidade;blue;Realização de análises estatísticas para identificação de propriedades de conjuntos de dados, incluindo correlações com outros conjuntos;habilidades;10279;blue;Análise estatística;0.2;120;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estat%C3%ADstica_descritiva;@" +
	"Matemática;Estatística;;habilidade;blue;Aplicação de técnicas de regressão e testes de hipóteses para identificação de padrões e relações estatísticas;habilidades;10280;blue;Análise exploratória de dados;0.2;120;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Estatística;;habilidade;blue;Identificação de relações estatísticas entre duas ou mais variáveis e representação matemática desta relação;habilidades;10281;blue;Regressões;0.2;120;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Estatística;;habilidade;blue;Análise de dados resultantes de regressões para identificação de padrões que afetem a validade da relação estatística;habilidades;10282;blue;Análise de resíduos;0.2;120;;;ellipse;;;;;nodes;70;;;@" +
	"Matemática;Probabilidade;;habilidade;blue;Descrição de fenômenos a partir de probabilidades matemáticas;habilidades;10288;blue;Descrição probabilística;0.2;141;;;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;Psicologia do trabalho;Psicologia comportamental;habilidade;blue;Aplicação dos conceitos psicológicos da Liderança;habilidades;10141;blue;Psicologia da Liderança;0.2;1043;-843.772.201;-319.755.598;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;Psicologia do trabalho;Psicologia comportamental;habilidade;blue;Tomada de decisão com base no entendimento do impacto do trabalho e do estresse na psique humana;habilidades;10142;blue;Trabalho e estresse;0.2;1043;-8.686.498.091;-326.644.402;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;Psicologia do trabalho;Psicologia comportamental;habilidade;blue;Utilização dos conceitos psicológicos da autoridade e suas consequências na tomada de decisão;habilidades;10143;blue;Psicologia da autoridade;0.2;1043;-8.440.494.273;-326.616.603;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;Psicologia do trabalho;Psicologia comportamental;habilidade;blue;Aplicação dos conceitos de behaviorismo em situações de trabalho;habilidades;10144;blue;Aplicação do Behaviorismo aos negócios;0.2;1043;-8687;-3196;ellipse;;;;;nodes;70;;;@" +
	"Psicologia;Psicologia Freudiana;;habilidade;blue;Aplicação dos conceitos de Ego, supergo, id em análises psicológicas;habilidades;10145;blue;Estrutura psicológica Freudiana;0.2;121;-8934;-3101;ellipse;;;;;nodes;70;;;@" +
	"Sociologia;Sociologia econômica;;habilidade;blue;Análise da influência do meio no indivíduo e na construção de identidades;habilidades;10289;blue;Indivíduo na sociedade;0.2;142;;;ellipse;;;;;nodes;70;;;@" +
	"Sociologia;Sociologia jurídica;;habilidade;blue;Compreensão do direito na sociedade atual e seu impacto nas dinâmicas sociais;habilidades;10290;blue;Análise sociológica do direito;0.2;143;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Utilização de ferramentas e modelos psicológicos para apoiar a tomada de decisões;habilidades;10016;blue;Tomada de decisões;0.2;10;-1.073.003.059;-235.435.373;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Utilização de técnicas de narrativa em comunicações;habilidades;10017;blue;Narrativa;0.2;10;-1.073.080.497;-2.137.475.459;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Condução de apresentações utilizando ferramentas de comunicação;habilidades;10018;blue;Apresentações;0.2;10;-1.073.457.935;-2.200.871.892;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Entendimento das necessidades e utilização de comunicação efeitva para melhora do posicionamento profissional pessoal;habilidades;10019;blue;Relacionamentos profissionais;0.2;10;-1.131.828.642;-3.369.748.118;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Transmissão efetiva de conceitos e ideias via a utilização de práticas de comunicação oral ou escrita;habilidades;10020;blue;Comunicação;0.2;10;-1.073.339.643;-2.279.817.081;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Utilização de técnicas de influência em relacionamentos;habilidades;10014;blue;Influenciando pessoas;0.2;10;-1.090.039.643;-2.278.817.081;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Condução de sessões de geração de ideias e transformação dessas em conceitos utilizáveis;habilidades;10027;blue;Brainstorming;0.2;10;-1.089.348.184;-2.201.615.675;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Construção de raciocínios lógicos ou emocionais com o intuito de se provar determinado ponto de vista;habilidades;10160;blue;Argumentação;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Leitura e compreensão de textos e sua estrutura;habilidades;10161;blue;Interpretação de textos;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Contribuição para o desenvolvimento de uma tarefa com uma parte do trabalho e com apoio ao grupo;habilidades;10162;blue;Trabalho em equipe;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Desempenho de atividades com dedicação total da atenção por períodos prolongados;habilidades;10163;blue;Foco e Disciplina;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Trabalhar fora da zona de conforto, testando limites físicos e mentais para atingir resultados superiores;habilidades;10164;blue;Alto desempenho;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Utilização de modelos para definir problemas e procurar caminhos para sua solução;habilidades;10165;blue;Enquadramento de problemas;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Capacidade de transformação de ideias em ação com foco na resolução de problemas;habilidades;10166;blue;Execução;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft Skills;;;habilidade;blue;Identificação de tarefas a serem realizadas e alocação de tempo e esforço de maneira estruturada e eficiente para sua realização;habilidades;10167;blue;Organização;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft skills;;;habilidade;blue;Postura proativa de criação de soluções para problemas não estruturados;habilidades;10325;blue;Empreendedorismo;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft skills;;;habilidade;blue;Antecipação de problemas e situações e tomada de ação para mitigá-los ou resolvê-los;habilidades;10326;blue;Proatividade;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft skills;;;habilidade;blue;Avaliar situações utilizando conceitos de lógica;habilidades;10327;blue;Raciocínio lógico;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft skills;;;habilidade;blue;Suportar e superar desafios até que se atinja o resultado esperado;habilidades;10328;blue;Resiliência;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Soft skills;;;habilidade;blue;Coleta e avaliação de informações para construção de uma conclusão sobre determinado assunto;habilidades;10329;blue;Análise ;0.2;10;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;Utilização MS Office;habilidade;blue;Utilização de Powerpoint em nível avançado - animações, gráficos com links a arquivos, slide mestre;habilidades;10155;blue;Expertise MS Powerpoint;0.2;1016;-8802;-2763;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;Utilização MS Office;habilidade;blue;Utilização de MS Word em nível avançado - índices automáticos, objetos com links a arquivos;habilidades;10156;blue;Expertise MS Word;0.2;1016;-8789;-2847;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;Utilização MS Office;habilidade;blue;Utilização de MS Excel em nível avançado - Tabelas dinâmicas, fórmulas matriciais;habilidades;10157;blue;Expertise MS Excel;0.2;1016;-8809;-2923;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;Utilização MS Office;habilidade;blue;Utilização em nível básico das funcionalidades de MS Excel, powerpoint, Word e outlook;habilidades;10158;blue;Introdução ao pacote office;0.2;1016;-9018;-2849;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;Utilização MS Office;habilidade;blue;Programação em Visual Basic;habilidades;10330;blue;VBA ;0.2;1016;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;;habilidade;blue;Determinação de campos, tabelas e documentos e gestão de conteúdo de bases de dados;habilidades;10334;blue;Gestão de base de dados;0.2;123;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Computação geral;;habilidade;blue;Utilização de software para criação e treinamento de algoritmos e redes neurais.;habilidades;10335;blue;Ciência de dados;0.2;123;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Infra estrutura tecnológica;Implementação de sistemas;habilidade;blue;Desenho e implementação de databases em SQL;habilidades;10147;blue;Estruturação de databases em SQL;0.2;1037;-8444;-2790;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;;habilidade;blue;Conhecimento sobre a lógica da programação, recursos básicos e limitações da solução de problemas via programação;habilidades;10293;blue;Princípios da programação;0.2;125;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em Json em nível básico;habilidades;10148;blue;Json;0.2;1042;-8906;-2463;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em Ruby on Rails de nível básico;habilidades;10149;blue;Ruby on rails;0.2;1042;-8755;-2467;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em C+ de nível básico;habilidades;10150;blue;C+;0.2;1042;-9065;-2468;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em Python em nível básico;habilidades;10331;blue;Programação em Python;0.2;1042;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em Javascript em nível básico;habilidades;10332;blue;Programação em Javascript;0.2;1042;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;habilidade;blue;Programação em unity em nível básico;habilidades;10333;blue;Programação em Unity;0.2;1042;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Bases de dados;habilidade;blue;Programação de rotinas para consultas a dados em bases de dados SQL;habilidades;10146;blue;Construção de consultas em SQL;0.2;1048;-8440;-2648;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;habilidade;blue;Utilização de plataformas de negociação de ações (homebrokers);habilidades;10151;blue;Homebroker;0.2;1049;-1.081.821.351;-2.253.914.594;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;habilidade;blue;Utilização da plataforma e terminais Bloomberg de informações e negociação;habilidades;10152;blue;Bloomberg;0.2;1049;-8516;-2489;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;habilidade;blue;Utilização fluente de sistemas de informação de mercado (ex: Factiva);habilidades;10153;blue;Sistemas de informação de mercado;0.2;1049;-8445;-2552;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;habilidade;blue;Utilização da plataforma Thomson de informações;habilidades;10154;blue;Thomson;0.2;1049;-8368;-2484;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Software econométrico;habilidade;blue;Utilização do Eviews para a realização de análises econométricas ;habilidades;10291;blue;Matlab;0.2;1059;;;ellipse;;;;;nodes;70;;;@" +
	"Tecnologia da informação;Sistemas e plataformas;Software econométrico;habilidade;blue;Utilização do Matlab para a realização de análises econométricas ;habilidades;10292;blue;Eviews;0.2;1059;;;ellipse;;;;;nodes;70;;;@" +
	";;;;blue;;habilidades;90000;blue;ApresentaçõesXComunicação;0.2;;;;ellipse;10020;10018;;;edges;70;;;@" +
	";;;;blue;;habilidades;90001;blue;Análise de índices financeirosXAnálise de demonstrativos financeiros;0.2;;;;ellipse;10042;10043;;;edges;70;;;@" +
	";;;;blue;;habilidades;90002;blue;Análise das contas públicasXAnálise macro econômica;0.2;;;;ellipse;10129;10127;;;edges;70;;;@" +
	";;;;blue;;habilidades;90003;blue;Análise quantitativaXModelagem behaviorista de preços;0.2;;;;ellipse;10135;10053;;;edges;70;;;@" +
	";;;;blue;;habilidades;90004;blue;Análise fundamentaistaXAvaliação de empresas;0.2;;;;ellipse;10045;10054;;;edges;70;;;@" +
	";;;;blue;;habilidades;90005;blue;Análise fundamentaistaXPrecificação de títulos de renda fixa;0.2;;;;ellipse;10064;10054;;;edges;70;;;@" +
	";;;;blue;;habilidades;90006;blue;Análise das políticas monetárias e fiscaisXAnálise macro econômica;0.2;;;;ellipse;10129;10128;;;edges;70;;;@" +
	";;;;blue;;habilidades;90007;blue;Avaliação de opções reaisXPrecificação de derivativos;0.2;;;;ellipse;10065;10044;;;edges;70;;;@" +
	";;;;blue;;habilidades;90008;blue;Análise quantitativaXAvaliação de empresas;0.2;;;;ellipse;10045;10053;;;edges;70;;;@" +
	";;;;blue;;habilidades;90009;blue;Basiléia - Cálculos de requerimento de capital XContabilização bancária;0.2;;;;ellipse;10108;10100;;;edges;70;;;@" +
	";;;;blue;;habilidades;90010;blue;Cálculo do custo de capitalXTeoria financeira;0.2;;;;ellipse;10039;10052;;;edges;70;;;@" +
	";;;;blue;;habilidades;90011;blue;Basiléia - Cálculos de liquidez e estabilidade de captaçãoXContabilização bancária;0.2;;;;ellipse;10108;10098;;;edges;70;;;@" +
	";;;;blue;;habilidades;90012;blue;Curva a termo de jurosXCálculo de juros;0.2;;;;ellipse;10061;10063;;;edges;70;;;@" +
	";;;;blue;;habilidades;90013;blue;Captação a mercado de dívidaXDeterminação da estrutura de capital;0.2;;;;ellipse;10046;10041;;;edges;70;;;@" +
	";;;;blue;;habilidades;90014;blue;Captação a mercado via açõesXDeterminação da estrutura de capital;0.2;;;;ellipse;10046;10040;;;edges;70;;;@" +
	";;;;blue;;habilidades;90015;blue;Captação a mercado via açõesXAvaliação de empresas;0.2;;;;ellipse;10045;10040;;;edges;70;;;@" +
	";;;;blue;;habilidades;90016;blue;Construção de estratégias competitivasXAnálises econômicas;0.2;;;;ellipse;116;10036;;;edges;70;;;@" +
	";;;;blue;;habilidades;90017;blue;Análises estratégicas x decisão estratégica;0.2;;;;ellipse;1029;1030;;;edges;70;;;@" +
	";;;;blue;;habilidades;90018;blue;Consolidação de resultadosXMontagem de demonstrativos financeiros;0.2;;;;ellipse;10107;10050;;;edges;70;;;@" +
	";;;;blue;;habilidades;90019;blue;Contabilização de custosXPrincípios de contabilidade;0.2;;;;ellipse;10106;10101;;;edges;70;;;@" +
	";;;;blue;;habilidades;90020;blue;Contabilização bancáriaXContabilização de resultados;0.2;;;;ellipse;10103;10108;;;edges;70;;;@" +
	";;;;blue;;habilidades;90021;blue;Consolidação das Leis do trabalhoXprincípios constitucionais do direito;0.2;;;;ellipse;10121;10122;;;edges;70;;;@" +
	";;;;blue;;habilidades;90023;blue;Contabilização de IRPFXPrincípios de contabilidade;0.2;;;;ellipse;10106;10111;;;edges;70;;;@" +
	";;;;blue;;habilidades;90024;blue;Contabilização de receitasXPrincípios de contabilidade;0.2;;;;ellipse;10106;10102;;;edges;70;;;@" +
	";;;;blue;;habilidades;90025;blue;Contabilização bancáriaXContabilização fiscal;0.2;;;;ellipse;10105;10108;;;edges;70;;;@" +
	";;;;blue;;habilidades;90026;blue;Contabilização de operações de leasingXContabilização de receitas;0.2;;;;ellipse;10102;10110;;;edges;70;;;@" +
	";;;;blue;;habilidades;90027;blue;Contabilização fiscalXContabilização de receitas;0.2;;;;ellipse;10102;10105;;;edges;70;;;@" +
	";;;;blue;;habilidades;90028;blue;Contabilização fiscalXContabilização de custos;0.2;;;;ellipse;10101;10105;;;edges;70;;;@" +
	";;;;blue;;habilidades;90029;blue;Contratação de funcionáriosXNegociação;0.2;;;;ellipse;10022;10090;;;edges;70;;;@" +
	";;;;blue;;habilidades;90030;blue;Criação de estratégia competitivaXAnálise da concorrência;0.2;;;;ellipse;10032;10075;;;edges;70;;;@" +
	";;;;blue;;habilidades;90031;blue;Criação de estratégias de hedgeXPrecificação de derivativos;0.2;;;;ellipse;10065;10066;;;edges;70;;;@" +
	";;;;blue;;habilidades;90032;blue;Contabilização de resultadosXContabilização de custos;0.2;;;;ellipse;10101;10103;;;edges;70;;;@" +
	";;;;blue;;habilidades;90033;blue;Criação de estratégia competitivaXSegmentação de mercado;0.2;;;;ellipse;10083;10075;;;edges;70;;;@" +
	";;;;blue;;habilidades;90034;blue;Criação de estratégias de Recursos humanosXGestão de remuneração e benefícios;0.2;;;;ellipse;10091;10088;;;edges;70;;;@" +
	";;;;blue;;habilidades;90035;blue;Criação de negócio no modelo Lean Start-upXCriação de novos modelos de negócios;0.2;;;;ellipse;10030;10029;;;edges;70;;;@" +
	";;;;blue;;habilidades;90036;blue;Desenvolvimento de novos produtosXSegmentação de mercado;0.2;;;;ellipse;10083;10081;;;edges;70;;;@" +
	";;;;blue;;habilidades;90037;blue;Criação de estratégias de Recursos humanosXTreinamento de recursos humanos;0.2;;;;ellipse;10092;10088;;;edges;70;;;@" +
	";;;;blue;;habilidades;90038;blue;Definição de pessoa jurídicaXprincípios constitucionais do direito;0.2;;;;ellipse;10121;10112;;;edges;70;;;@" +
	";;;;blue;;habilidades;90039;blue;Desenvolvimento de novos produtosXPesquisa mercadológica;0.2;;;;ellipse;10073;10081;;;edges;70;;;@" +
	";;;;blue;;habilidades;90040;blue;Gerência de projetoXPlanejamento de projetos;0.2;;;;ellipse;10005;10006;;;edges;70;;;@" +
	";;;;blue;;habilidades;90041;blue;Design thinkingXBrainstorming;0.2;;;;ellipse;10027;10026;;;edges;70;;;@" +
	";;;;blue;;habilidades;90042;blue;Determinação de níveis de eficiênciaXCriação e revisão de processos;0.2;;;;ellipse;10011;10012;;;edges;70;;;@" +
	";;;;blue;;habilidades;90043;blue;Expertise MS PowerpointXIntrodução ao pacote office;0.2;;;;ellipse;10158;10155;;;edges;70;;;@" +
	";;;;blue;;habilidades;90044;blue;Fusões e aquisiçõesXDeterminação da estrutura de capital;0.2;;;;ellipse;10046;10047;;;edges;70;;;@" +
	";;;;blue;;habilidades;90045;blue;Determinação de níveis de eficiênciaXPlanejamento operacional;0.2;;;;ellipse;10015;10012;;;edges;70;;;@" +
	";;;;blue;;habilidades;90046;blue;Fusões e aquisiçõesXNegociação;0.2;;;;ellipse;10022;10047;;;edges;70;;;@" +
	";;;;blue;;habilidades;90047;blue;Determinação da estrutura de capitalXTeoria financeira;0.2;;;;ellipse;10039;10046;;;edges;70;;;@" +
	";;;;blue;;habilidades;90048;blue;Expertise MS WordXIntrodução ao pacote office;0.2;;;;ellipse;10158;10156;;;edges;70;;;@" +
	";;;;blue;;habilidades;90049;blue;Fusões e aquisiçõesXAvaliação de empresas;0.2;;;;ellipse;10045;10047;;;edges;70;;;@" +
	";;;;blue;;habilidades;90050;blue;Gerência de projetoXGerênciamento de riscos de projetos;0.2;;;;ellipse;10004;10006;;;edges;70;;;@" +
	";;;;blue;;habilidades;90051;blue;Gestão ContábilXPrincípios de contabilidade;0.2;;;;ellipse;10106;10104;;;edges;70;;;@" +
	";;;;blue;;habilidades;90052;blue;Criação de negócio no modelo Lean Start-upXInovação em produtos e serviços;0.2;;;;ellipse;10028;10029;;;edges;70;;;@" +
	";;;;blue;;habilidades;90053;blue;Gestão de açõesXAvaliação de empresas;0.2;;;;ellipse;10045;10059;;;edges;70;;;@" +
	";;;;blue;;habilidades;90054;blue;Gestão de açõesXOtimização de portfolio;0.2;;;;ellipse;10057;10059;;;edges;70;;;@" +
	";;;;blue;;habilidades;90055;blue;Gestão de produtosXGestão de canais;0.2;;;;ellipse;10077;10078;;;edges;70;;;@" +
	";;;;blue;;habilidades;90056;blue;Gestão de produtosXPrecificação de produtos e serviços;0.2;;;;ellipse;10082;10078;;;edges;70;;;@" +
	";;;;blue;;habilidades;90057;blue;Expertise MS ExcelXIntrodução ao pacote office;0.2;;;;ellipse;10158;10157;;;edges;70;;;@" +
	";;;;blue;;habilidades;90058;blue;Financiamento de novos negóciosXdeterminação da estrutura de capital;0.2;;;;ellipse;10046;10031;;;edges;70;;;@" +
	";;;;blue;;habilidades;90059;blue;Gestão de produtosXAnálise da concorrência;0.2;;;;ellipse;10032;10078;;;edges;70;;;@" +
	";;;;blue;;habilidades;90060;blue;Gestão de produtosXDesenvolvimento de novos produtos;0.2;;;;ellipse;10081;10078;;;edges;70;;;@" +
	";;;;blue;;habilidades;90061;blue;Gestão de caixaXAnálise de demonstrativos financeiros;0.2;;;;ellipse;10042;10048;;;edges;70;;;@" +
	";;;;blue;;habilidades;90062;blue;Materiais institucionaisXUtilização MS Office;0.2;;;;ellipse;1016;10084;;;edges;70;;;@" +
	";;;;blue;;habilidades;90063;blue;Gestão de renda fixaXPrecificação de títulos de renda fixa;0.2;;;;ellipse;10064;10056;;;edges;70;;;@" +
	";;;;blue;;habilidades;90064;blue;Negociação de açõesXAvaliação de empresas;0.2;;;;ellipse;10045;10069;;;edges;70;;;@" +
	";;;;blue;;habilidades;90065;blue;Modelagem behaviorista de preçosXPrecificação de títulos de renda fixa;0.2;;;;ellipse;10064;10135;;;edges;70;;;@" +
	";;;;blue;;habilidades;90066;blue;Montagem de demonstrativos financeirosXPrincípios de contabilidade;0.2;;;;ellipse;10106;10107;;;edges;70;;;@" +
	";;;;blue;;habilidades;90067;blue;Negociação de commoditiesXAnálise macro econômica;0.2;;;;ellipse;10129;10070;;;edges;70;;;@" +
	";;;;blue;;habilidades;90068;blue;Modelagem behaviorista de preçosXAvaliação de empresas;0.2;;;;ellipse;10045;10135;;;edges;70;;;@" +
	";;;;blue;;habilidades;90069;blue;Negociação de jurosXPrecificação de derivativos;0.2;;;;ellipse;10065;10062;;;edges;70;;;@" +
	";;;;blue;;habilidades;90070;blue;Negociação de jurosXCálculo da curva a termo de juros;0.2;;;;ellipse;10063;10062;;;edges;70;;;@" +
	";;;;blue;;habilidades;90071;blue;Negociação de moedas estrangeirasXPrecificação de derivativos;0.2;;;;ellipse;10065;10067;;;edges;70;;;@" +
	";;;;blue;;habilidades;90072;blue;Planejamento estratégicoXAnálises econômicas;0.2;;;;ellipse;116;10037;;;edges;70;;;@" +
	";;;;blue;;habilidades;90073;blue;Negociação de moedas estrangeirasXAnálise macro econômica;0.2;;;;ellipse;10129;10067;;;edges;70;;;@" +
	";;;;blue;;habilidades;90074;blue;Planejamento de projetosXAnálise de valor agregado de projetos;0.2;;;;ellipse;10002;10005;;;edges;70;;;@" +
	";;;;blue;;habilidades;90075;blue;Planejamento de projetosXDesenvolvimento de cronogramas;0.2;;;;ellipse;10003;10005;;;edges;70;;;@" +
	";;;;blue;;habilidades;90076;blue;Negociação de moedas estrangeirasXNegociação;0.2;;;;ellipse;10022;10067;;;edges;70;;;@" +
	";;;;blue;;habilidades;90077;blue;Reestruturação de passivosXDeterminação da estrutura de capital;0.2;;;;ellipse;10046;10038;;;edges;70;;;@" +
	";;;;blue;;habilidades;90078;blue;Precificação de derivativosXTeoria financeira;0.2;;;;ellipse;10039;10065;;;edges;70;;;@" +
	";;;;blue;;habilidades;90079;blue;Reestruturação de passivosXGestão de caixa;0.2;;;;ellipse;10048;10038;;;edges;70;;;@" +
	";;;;blue;;habilidades;90080;blue;Reestruturação de passivosXNegociação;0.2;;;;ellipse;10022;10038;;;edges;70;;;@" +
	";;;;blue;;habilidades;90081;blue;Precificação de títulos de renda fixaXCálculo da curva a termo de juros;0.2;;;;ellipse;10063;10064;;;edges;70;;;@" +
	";;;;blue;;habilidades;90082;blue;Reestruturação societáriaXCriação de sociedades;0.2;;;;ellipse;10117;10114;;;edges;70;;;@" +
	";;;;blue;;habilidades;90083;blue;Relatórios para investidoresXRelatórios gerenciais;0.2;;;;ellipse;10049;10051;;;edges;70;;;@" +
	";;;;blue;;habilidades;90085;blue;Relatórios gerenciaisXMontagem de demonstrativos financeiros;0.2;;;;ellipse;10107;10049;;;edges;70;;;@" +
	";;;;blue;;habilidades;90086;blue;Técnicas de liderançaXCoaching;0.2;;;;ellipse;10089;10093;;;edges;70;;;@" +
	";;;;blue;;habilidades;90087;blue;Técnicas de liderançaXGestão de recursos humanos;0.2;;;;ellipse;1044;10093;;;edges;70;;;@" +
	";;;;blue;;habilidades;90088;blue;Valor do dinheiro no tempoXCálculo de juros;0.2;;;;ellipse;10061;10060;;;edges;70;;;@" +
	";;;;blue;;habilidades;90089;blue;Montagem de demonstrativos financeiros x Análise de demonstrativos financeiros;0.2;;;;ellipse;10107;10042;;;edges;70;;;@" +
	";;;;blue;;habilidades;90090;blue;Definição de pessoa jurídica x criação de sociedades;0.2;;;;ellipse;10112;10117;;;edges;70;;;@" +
	";;;;blue;;habilidades;90091;blue;Princípios processuais brasileiros x Processo civil no Brasil;0.2;;;;ellipse;10257;10258;;;edges;70;;;@" +
	";;;;blue;;habilidades;90092;blue;Processo civil no Brasil x execução de sentenças;0.2;;;;ellipse;10258;10259;;;edges;70;;;@" +
	";;;;blue;;habilidades;90093;blue;Processo civil no Brasil x Recursos;0.2;;;;ellipse;10258;10260;;;edges;70;;;@" +
	";;;;blue;;habilidades;90094;blue;Tributação x elisão fiscal;0.2;;;;ellipse;1025;10271;;;edges;70;;;@";



	var arrayHabilidades = habilidades.split("@");
	var i = 0;
	while (i < arrayHabilidades.length) {
		console.log ("carregando habilidades:" + arrayHabilidades[i]);
		var arrayItensHabilidade = arrayHabilidades[i].split(";");
		var objJson  = 
			{
			    documento : {
			        diagrama : "habilidades",
			        type : arrayItensHabilidade[19],
			        idHabilidade : arrayItensHabilidade[7],
			        name : arrayItensHabilidade[9],
			        descricao : arrayItensHabilidade[5],
			        wiki : arrayItensHabilidade[22],
			        area : arrayItensHabilidade[0],
			        campo : arrayItensHabilidade[1],
			        categoria : arrayItensHabilidade[2],
			        parent : arrayItensHabilidade[11],
			        classes : arrayItensHabilidade[3],
			        weight : arrayItensHabilidade[20],
			        positionX : arrayItensHabilidade[12],
			        positionY : arrayItensHabilidade[13],
			        opacity : arrayItensHabilidade[10],
			        color : arrayItensHabilidade[4],
			        shape : arrayItensHabilidade[14],
			        width : arrayItensHabilidade[21],
			        lineColor : arrayItensHabilidade[8],
			        targetArrowColor : arrayItensHabilidade[17],
			        targetArrowShape : arrayItensHabilidade[18],
			        source : arrayItensHabilidade[15],
			        target : arrayItensHabilidade[16]
			    }	
			}
		rest_incluiHabilidades(objJson, semAcao, semAcao)
		i++;
	}
};

function carregaCarreirasTotal (){

	var carreiras = 

		'{"documento":{"nome":"Analista financeiro (jr. a sr.),","descricao":"Análise de informações financeiras, desenvolvimento de relatórios, extração de dados de bases ","wiki":"","salario":"2.6 - 9.8","salarioMedio":"4500","funcao":"","necessarios":["1035", "10039", "10043", "10042", "1018"],"recomendados":["1032"]}};' +
		'{"documento":{"nome":"Especialista financeiro,","descricao":"Análise de informações financeiras, desenvolvimento de relatórios, extração de dados de bases, realização de apresentações ","wiki":"","salario":"5.0 - 11.8","salarioMedio":"7000","funcao":"","necessarios":["1035", "10039", "10043", "10042", "1018"],"recomendados":["1032", "10022"]}};' +
		'{"documento":{"nome":"Coordenador financeiro,","descricao":"Análise de informações financeiras, desenvolvimento de relatórios, extração de dados de bases, apresentações para alta gestão, coordenação de equipe","wiki":"","salario":"6.6 - 15.2","salarioMedio":"10000","funcao":"","necessarios":["1035", "10039", "10043", "10042", "1018", "10089"],"recomendados":["1032", "10022", "10090"]}};' +
		'{"documento":{"nome":"Gerente financeiro,","descricao":"Gestão de equipe, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos na área, Interação intra-empresa ","wiki":"","salario":"8.8 - 25.8","salarioMedio":"14000","funcao":"","necessarios":["1035", "1032", "10090", "10089","10088","102", "10015", "1018"],"recomendados":["102", "109", "116", "10037"]}};' +
		'{"documento":{"nome":"Superintendente financeiro,","descricao":"Gestão de equipes de gerentes, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos em sua área, Interação intra-empresa e com alta gestão","wiki":"","salario":"12.3 - 43.6","salarioMedio":"20000","funcao":"","necessarios":["1035", "1032","1036", "10090","10089", "10088", "102", "10015", "1018"],"recomendados":["102", "109", "116", "10037", "1029"]}};' +
		'{"documento":{"nome":"Diretor financeiro,","descricao":"Gestão de departamento, Interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa","wiki":"","salario":"17.8 - 65.4","salarioMedio":"30000","funcao":"","necessarios":["1035", "1032", "1036", "10090", "10089", "10088", "102", "10037", "10015", "1018", "1029"],"recomendados":["102", "109", "1024", "116"]}};' +
		'{"documento":{"nome":"CFO,","descricao":"Gestão de departamento, Interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa","wiki":"","salario":"32.0 - 78.0","salarioMedio":"45000","funcao":"","necessarios":["1035", "1032", "1036", "10090", "10089", "10088", "102", "10037", "10015", "1018", "1029"],"recomendados":["102", "109", "1024", "116"]}};' +
		'{"documento":{"nome":"Analista IB,","descricao":"Avaliação de empresas e negócios, desenvolvimento de materiais e pitches para clientes, pesquisa de informações de mercado","wiki":"","salario":"7.0 - 12.0","salarioMedio":"9500","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "10116", "10115"],"recomendados":["116", "10022"]}};' +
		'{"documento":{"nome":"Associate IB,","descricao":"Supervisão de analistas, apresentação para clientes, avaliação de empresas e negócios, revisão de materiais e pitches para clientes","wiki":"","salario":"14.6 - 22.3","salarioMedio":"17000","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "10116", "10115", "10022", "10089"],"recomendados":["116", "10090"]}};' +
		'{"documento":{"nome":"Vice presidente IB,","descricao":"Alocação de equipes, gestão de equipes, apresentação para clientes","wiki":"","salario":"19.8 - 32.4","salarioMedio":"26200","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "10116", "10115", "102", "10089", "10090"],"recomendados":["116", "1029"]}};' +
		'{"documento":{"nome":"Director IB,","descricao":"Gestão de equipes, apresentação para clientes, negociação de mandatos","wiki":"","salario":"35.2 - 46.4","salarioMedio":"40000","funcao":"","necessarios":["1035", "1032", "1036", "10090", "10089", "10088", "102", "10037", "10015", "1018", "1029"],"recomendados":["102", "109", "1024", "116", "104"]}};' +
		'{"documento":{"nome":"Managing Director IB,","descricao":"Interação com clientes para negociação de mandatos, gestão da área","wiki":"","salario":"44.4 - 62.8","salarioMedio":"55000","funcao":"","necessarios":["1035", "1032", "1036", "10090", "10089", "10088", "102", "10037", "10015", "1018", "1029"],"recomendados":["102", "109", "1024", "116", "104"]}};' +
		'{"documento":{"nome":"Analista Private Equity,","descricao":"Análise de empresas e economica, análise de deals, pesquisa de mercado, acompanhamento de processos de due diligence","wiki":"","salario":"7.0 - 12.0","salarioMedio":"9500","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "1029"],"recomendados":["116", "10022"]}};' +
		'{"documento":{"nome":"Associate Private Equity,","descricao":"Análise de empresas e deals, originação de deals, coordenação de processos de due diligence, gestão de empresas do portfolio","wiki":"","salario":"14.6 - 22.3","salarioMedio":"17000","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "1029", "10022", "10089"],"recomendados":["116", "10090", "10037","10015"]}};' +
		'{"documento":{"nome":"Vice presidente Private Equity,","descricao":"Originação de deals, supervisão de processos de due diligence, gestão de empresas do portfolio, estruturação de operações financeiras","wiki":"","salario":"19.8 - 32.4","salarioMedio":"26200","funcao":"","necessarios":["1035", "1032", "10035", "10032", "10047", "10116", "10115", "102", "10089", "10090", "1029"],"recomendados":["116", "10037", "10015"]}};' +
		'{"documento":{"nome":"Diretor/ sócio Private Equity,","descricao":"Relacionamento com investidores, estruturação e captação de novos fundos, originação de deals","wiki":"","salario":"35.2 - 46.4","salarioMedio":"40000","funcao":"","necessarios":["1035", "1032", "1036", "10090", "10089", "10088", "102", "10037", "10015", "1018", "1029"],"recomendados":["102", "109", "1024", "116", "104"]}};' +
		'{"documento":{"nome":"Estagiário,","descricao":"Pesquisa de dados, montagem de apresentações, apoio aos consultores","wiki":"","salario":"1.1 - 2.3","salarioMedio":"1600","funcao":"","necessarios":["10060", "1029", "10080"],"recomendados":["10039", "10042", "10043"]}};' +
		'{"documento":{"nome":"Analista,","descricao":"Análise de informações, entrevistas com cliente, montagem de material","wiki":"","salario":"3.2 - 5.4","salarioMedio":"4300","funcao":"","necessarios":["10060", "1029", "10080", "10039", "10042", "10043"],"recomendados":["104", "10022", "1005"]}};' +
		'{"documento":{"nome":"Business analyst (sr.),","descricao":"Análise de informações, entrevistas com cliente, montagem de material","wiki":"","salario":"6.2 - 8.0","salarioMedio":"7100","funcao":"","necessarios":["10060", "1029", "10080", "10039", "10042", "10043"],"recomendados":["104", "10022", "1005"]}};' +
		'{"documento":{"nome":"Associate/Consultor (sr.),","descricao":"Análise de informações, entrevistas com cliente, desenvolvimento de soluções, revisão de material, apresentação de resultados","wiki":"","salario":"7.0 - 19.2","salarioMedio":"13000","funcao":"","necessarios":["104", "102", "1005", "10060", "1029", "10080", "10039", "10042", "10043", "10089"],"recomendados":["1032", "1018", "10114"]}};' +
		'{"documento":{"nome":"Gerente (sr.),","descricao":"Coordenação de equipe, relacionamento com clientes, desenvolvimento de soluções, revisão de material, apresentação de resultados","wiki":"","salario":"9.0 - 21.0","salarioMedio":"14400","funcao":"","necessarios":["104", "102", "1005 10060", "1029", "10080", "10039", "10042", "10043", "10089", "10073", "10032"],"recomendados":["1032", "1018", "10114"]}};' +
		'{"documento":{"nome":"Project leader,","descricao":"Coordenação de equipe, relacionamento com clientes, coordenação do desenvolvimento de soluções, revisão de material, apresentação de resultados","wiki":"","salario":"16.5 - 24.0","salarioMedio":"19800","funcao":"","necessarios":["104", "102", "1005", "10060", "1029", "10080", "10039", "10042", "10043", "10089", "10090", "10073", "10032"],"recomendados":["1032", "1018", "10114"]}};' +
		'{"documento":{"nome":"Engagement manager,","descricao":"Gestão de projetos, relacionamento com clientes, suporte em questões especificas, desenvolvimento de consultores mais juniores","wiki":"","salario":"27.0 - 32.6","salarioMedio":"30000","funcao":"","necessarios":["104", "102", "1005 10060", "1029", "10080", "10039", "10042", "10043", "10089", "10090", "10073", "10032"],"recomendados":["1032", "1018", "10114"]}};' +
		'{"documento":{"nome":"Principal,","descricao":"Desenvolvimento de negócios, gestão do relacionamento com clientes, liderança junto a equipes em clientes, suporte em assuntos específicos","wiki":"","salario":"27.0 - 32.6","salarioMedio":"30000","funcao":"","necessarios":["104, 102", "1005", "10060", "1029", "10080", "10039", "10042", "10043", "10089", "10090", "10073", "10032"],"recomendados":["1032", "1018", "10114"]}};' +
		'{"documento":{"nome":"Estagiário - Marketing,","descricao":"Coleta de informações de mercado","wiki":"","salario":"1.0 - 1.8","salarioMedio":"1400","funcao":"","necessarios":["10073"],"recomendados":["10083"]}};' +
		'{"documento":{"nome":"Analista de mercado,","descricao":"Pesquisas de mercado, análises e interpretação de dados, ","wiki":"","salario":"2.9 - 5.1","salarioMedio":"4000","funcao":"","necessarios":["10073", "10083", "10082"],"recomendados":["1038"]}};' +
		'{"documento":{"nome":"Gerente de produtos,","descricao":"Definição das estratégias de marketing e de desenvolvimento de produtos, desenvolvimento de pesquisas e estudos mercadológicos","wiki":"","salario":"3.5 - 7.2","salarioMedio":"5000","funcao":"","necessarios":["1038", "1029"],"recomendados":[]}};' +
		'{"documento":{"nome":"Gerente de marketing,","descricao":"Gestão de equipes e criação de estratégias corporativas  de marketing","wiki":"","salario":"8.0 - 23.7","salarioMedio":"14400","funcao":"","necessarios":["1038", "1029", "10089" , "10090", "10022", "1002"],"recomendados":["10015"]}};' +
		'{"documento":{"nome":"Diretor de marketing,","descricao":"Gestão do departamento de marketing e responsável pelas metas de marketing da empresa","wiki":"","salario":"21.0 - 33.0","salarioMedio":"27000","funcao":"","necessarios":["1038", "1029", "10089", "10090", "10022", "1005"],"recomendados":["10060", "10045"]}}';

		var arrayCarreiras = carreiras.split(";");

	var i = 0;

	while (i < arrayCarreiras.length) {
		var objJson = JSON.parse(arrayCarreiras[i]);
		rest_incluiCarreiras(objJson, semAcao, semAcao)
		i++;
	};
	
};

function carregaCursosTotal (){
	/**
	 * 	carrega lista de cursos
	 */
	
	var cursos =
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Atividades Planejadas I                /////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Introdução ao Marketing           /10073,10072////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Sociologia I                   /////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Matemática I               /10138 ,10139////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Introdução à Tecnologia da Informação  /10158,10146////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Matemática Financeira                /10061,10060////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Gestão de Projetos /1002////;' +
		'FGV EAESP/Graduação em administração de empresas/Aprovação no vestibular FGV EAESP - Adm. Empresas/Introdução à Gestão                      /10021////;' +
		'FGV EAESP/Graduação em administração de empresas//Experiência Empreendedora/10030////;' +
		'FGV EAESP/Graduação em administração de empresas//Filosofia/6////;' +
		'FGV EAESP/Graduação em administração de empresas//Psicologia I/10145////;' +
		'FGV EAESP/Graduação em administração de empresas/Sociologia I/Sociologia II/////;' +
		'FGV EAESP/Graduação em administração de empresas//Direito Privado na Empresa/113,10117////;' +
		'FGV EAESP/Graduação em administração de empresas/Matemática I/Matemática II/////;' +
		'FGV EAESP/Graduação em administração de empresas//Contabilidade Financeira/10106////;' +
		'FGV EAESP/Graduação em administração de empresas//Estatística I/10137////;' +
		'FGV EAESP/Graduação em administração de empresas//Estratégia Mercadológica/10075,10076////;' +
		'FGV EAESP/Graduação em administração de empresas/Psicologia I/Psicologia II/122////;' +
		'FGV EAESP/Graduação em administração de empresas//Ciência Política/////;' +
		'FGV EAESP/Graduação em administração de empresas//Controladoria/1033////;' +
		'FGV EAESP/Graduação em administração de empresas/Estatística I/Estatística II/10140////;' +
		'FGV EAESP/Graduação em administração de empresas//Gestão de Operações/1005////;' +
		'FGV EAESP/Graduação em administração de empresas//Análise Estratégica/1029////;' +
		'FGV EAESP/Graduação em administração de empresas//Oficina em Organizações/1046////;' +
		'FGV EAESP/Graduação em administração de empresas/Atividades planejadas I/Atividades Planejadas II/////;' +
		'FGV EAESP/Graduação em administração de empresas//Pesquisa de Mercado/1039////;' +
		'FGV EAESP/Graduação em administração de empresas//Microeconomia Intermediária Aplicada/1011////;' +
		'FGV EAESP/Graduação em administração de empresas//Finanças Corporativas I/10042,10043////;' +
		'FGV EAESP/Graduação em administração de empresas//Modelagem para apoio à Tomada de Decisão/10016////;' +
		'FGV EAESP/Graduação em administração de empresas//Organizações/////;' +
		'FGV EAESP/Graduação em administração de empresas//Marketing Mix/1038////;' +
		'FGV EAESP/Graduação em administração de empresas//Direito Tributário/113////;' +
		'FGV EAESP/Graduação em administração de empresas//Macroeconomia Intermediária Aplicada/1010////;' +
		'FGV EAESP/Graduação em administração de empresas/Finanças Corporativas I/Finanças Corporativas II/10046,10052////;' +
		'FGV EAESP/Graduação em administração de empresas//Logística Empresarial e SCM/10071////;' +
		'FGV EAESP/Graduação em administração de empresas//Direito Trabalhista/114////;' +
		'FGV EAESP/Graduação em administração de empresas//Administração da Tecnologia da Informação/124////;' +
		'FGV EAESP/Graduação em administração de empresas//Oficina Comunicação/10019,10020////;' +
		'FGV EAESP/Graduação em administração de empresas//Gestão de Pessoas/1044////;' +
		'FGV EAESP/Graduação em administração de empresas//Orientação de Trabalho de Conclusão de Curso/10000////;' +
		'FGV EAESP/Graduação em administração de empresas/Atividades Planejadas II/Atividades Planejadas III/////;' +
		'FGV EAESP/Graduação em administração de empresas//Operações e Competitividade/1005////;' +
		'FGV EAESP/Graduação em administração de empresas//Gestão Estratégica/10035,10037////;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Pessoas na organização/10092,10088,10089/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Consumidores e produtos/10074,10078/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Fontes e aplicações de recursos/10048,10060/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Processos e sistemas/1005/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Análise de oportunidades de mercado/10032,10035/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Visão economica do mercado/1010/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Análise mercadológica/10072,10073/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Ética e sociedade/6/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Relações com o Governo/10022/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/A Empresa e sua cadeia de valor/10072/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Indicadores de desempenho da empresa/10043/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Análise de empreendimentos/10045/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Inteligência de negócios/10080/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Geração de valor na Empresa/10038,10046/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/Inovação e sustentabilidade/1007,1027/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/MBM (Master in business management)/Graduação, inglês/TCC - Trabalho de conclusão de curso/10000/Curso total 436 horas, 3 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Estatística aplicada/120/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Matemática financeira/1035/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Habilidades computacionais/10158,10146/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Comunicação para gestores/10020/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Relações interpessoais/10019/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Negociação Empresarial/10022/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Contabilidade/109/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Gestão de pessoas/1044/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Gestão de finanças/10043,10048,10045,10052/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Gestão de operações/1005/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Gestão de Marketing /1038/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Estratégia empresarial/104/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Aspectos jurídicos da Empresa/1024/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Economia aplicada/1010/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAG (Curso de especialização em administração para graduados)/Graduação, 3 anos experiência, inglês/Administração de Tecnologia de Informação/10158,10146/Curso total 512 horas, 4 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Mercado de saúde/10073,10083,10075/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Ética e Aspectos Jurídicos/118/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Economia da saúde/1011/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Comunicação para gestores/10020/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Negociação Empresarial/10022/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Processos e sistemas em Saúde/10011/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Produtos e serviços em Saúde/10078/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Pessoas na organização de saúde/1044/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Contabilidade e Matemática financeira/109,1035/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Análise exploratória//Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Habilidades computacionais/10158,10146/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Relações interpessoais e Gestão de pessoas/10092,10088,10089,10019/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Competitividade na Saúde/10080/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Resultados na Saúde/10043/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Operações em Saúde/1005/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Gestão da Informação em Saúde//Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Marketing para área de saúde/1038/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/Tópicos Emergentes//Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde)/Graduação, 3 anos experiência (saúde)/TCC - Trabalho de conclusão de curso/10000/Curso total 528 horas, 3 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Contabilidade e Análise financeira/109,10043/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Análise Estatística/120/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Microeconomia/1011/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Finanças corporativas/1032/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Economia de Empresas/1010/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Estratégia de Marketing/10073,10083,10075,/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Comportamento Organizacional/10088,10019/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Estratégia empresarial/104/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Gestão de Operações/1005/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Macroeconomia/1010/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Investimentos/1034/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Fusões e Aquisições/10047/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Mapeando Decisões complexas/10016/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Negociação/10022/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Inovação em Tecnologia da Informação/1027/Curso total 666 horas, 6 semestres///;' +
		'FGV EAESP/MPA (Mestrado Profissional em Administração)/Graduação, 5 anos de experiência/Comportamento humano/10089,10092/Curso total 666 horas, 6 semestres///;';
	
	var arrayCursos = cursos.split(";");
	var i = 0;
	while (i < arrayCursos.length) {
		console.log ("carregando curso:" + arrayCursos[i]);
		var objJson  = JSON.parse(
				'{' +
					'"documento": {' +
				    	'"idCurso" : "",' +
					    '"nome" : "",' +
					    '"descricao" : "",' +
					    '"tempo" : "",' +
					    '"custo" : "",' +
					    '"escola" : "",' +
					    '"eletiva" : "",' +
					    '"preRequisito" : "",' +
						'"materias" : [],' +
						'"habilidades" : []' +
						'}' +
					'}'
		);
		var arrayCurso = arrayCursos[i].split("/");
		objJson.documento.idCurso = i;
		objJson.documento.nome = arrayCurso[1];
		objJson.documento.descricao = "";
//		objJson.documento.tempo = arrayCurso[5];
//		objJson.documento.custo = arrayCurso[6];
		objJson.documento.escola = arrayCurso[0];
//		objJson.documento.eletiva = arrayCurso[7];
		objJson.documento.preRequisito = arrayCurso[2];
		if (arrayCurso[4]){
			var arrayHabilidades = arrayCurso[4].split(",");
			var w = 0;
			while (w < arrayHabilidades.length) {
				objJson.documento.habilidades.push(arrayHabilidades[w]);
				w++;
			};
		};
		if (arrayCurso[3]){
			var arrayMaterias = arrayCurso[3].split(",");
			var w = 0;
			while (w < arrayMaterias.length) {
				objJson.documento.materias.push(arrayMaterias[w]);
				w++;
			};
		};
		
		rest_incluiCursos(objJson, semAcao, semAcao);

		i++;
	};
};
