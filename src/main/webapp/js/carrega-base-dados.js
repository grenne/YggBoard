/**
 * 
 */

function carregaHabilidadesTotal (){

var habilidades = 

	'documento.idHabilidade;documento.classes;documento.area;documento.campo;documento.categoria;documento.name;documento.parent;documento.descricao;documento.color;documento.diagrama;documento.lineColor;documento.opacity;documento.positionX;documento.positionY;documento.shape;documento.source;documento.target;documento.targetArrowColor;documento.targetArrowShape;documento.type;documento.width;documento.weight;documento.wiki;tags@' +
	'1;area;Acadêmica;;;Acadêmica;;Estudos e técnicas relativos à produção e transmissão de conhecimento;blue;habilidades;blue;0,2;-7480;3240;ellipse;;;;;nodes;1470;720;https://pt.wikipedia.org/wiki/Academia;Acadêmico@' +
	'2;area;Administração de empresas;;;Administração de empresas;;Organização de recursos para a criação e entrega de produtos e serviços alinhados às demandas de mercado;blue;habilidades;blue;0,2;-560;770;ellipse;;;;;nodes;5880;4580;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_de_empresas;Business, MBA, gestão@' +
	'3;area;Ciências contábeis;;;Ciências contábeis;;Estudo, avaliação e checagem de regras de registro de transações e de direitos e deveres;blue;habilidades;blue;0,2;4030;1830;ellipse;;;;;nodes;2970;1860;https://pt.wikipedia.org/wiki/Contabilidade;Contabilidade@' +
	'4;area;Direito;;;Direito;;Estudo, aplicação e criação das normas que regem as relações humanas em sociedade;blue;habilidades;blue;0,2;-2380;-2750;ellipse;;;;;nodes;7980;1860;https://pt.wikipedia.org/wiki/Direito;Law, LLM, advogado@' +
	'5;area;Economia;;;Economia;;Estudo da ação humana inserida em sistemas econômicos para a produção distribuição e consumo de bens e serviços;blue;habilidades;blue;0,2;4480;3840;ellipse;;;;;nodes;3720;1900;https://pt.wikipedia.org/wiki/Economia;Economics@' +
	'6;area;Filosofia;;;Filosofia;;Estudos sobre a consciência e condição humana, conhecimentos transcendentes à realidade;blue;habilidades;blue;0,2;-5175;-650;ellipse;;;;;nodes;2100;1650;https://pt.wikipedia.org/wiki/Filosofia;@' +
	'7;area;Matemática;;;Matemática;;Estudo das relações numéricas como medidas, variações e estatísticas;blue;habilidades;blue;0,2;4600;180;ellipse;;;;;nodes;2630;960;https://pt.wikipedia.org/wiki/Matem%C3%A1tica;@' +
	'8;area;Psicologia;;;Psicologia;;Estudo do funcionamento da mente humana e seus padrões;blue;habilidades;blue;0,2;4150;-3080;ellipse;;;;;nodes;1340;1090;https://pt.wikipedia.org/wiki/Psicologia;@' +
	'10;area;Soft Skills;;;Soft Skills;;Competências emocionais, sociais, criativas e intelectuais não técnicas;blue;habilidades;blue;0,2;-3130;3790;ellipse;;;;;nodes;3240;1160;https://en.wikipedia.org/wiki/Soft_skills;Competências emocionais,@' +
	'11;area;Sociologia;;;Sociologia;;Estudo do comportamento e interações humanas;blue;habilidades;blue;0,2;-5360;1210;ellipse;;;;;nodes;1980;700;https://pt.wikipedia.org/wiki/Sociologia;@' +
	'12;area;Idiomas;;;Idiomas;;Comunicação em idiomas estrangeiros;blue;habilidades;blue;0,2;-5000;2440;ellipse;;;;;nodes;2460;1080;https://pt.wikipedia.org/wiki/L%C3%ADngua_natural;Línguas@' +
	'13;area;Profissional;;;Profissional;;Planejamento profissional,  e aquisição de experiência profissional;blue;habilidades;blue;0,2;-5760;3550;ellipse;;;;;nodes;1430;840;https://pt.wikipedia.org/wiki/Trabalhador;trabalho@' +
	'14;area;Ciência Política;;;Ciência Política;;Estudo da organização política humana, seus processos e sistemas;blue;habilidades;blue;0,2;-5080;440;ellipse;;;;;nodes;1260;240;https://pt.wikipedia.org/wiki/Ci%C3%AAncia_pol%C3%ADtica;@' +
	'100;campo;Acadêmica;;;Produção científica;1;Criação de trabalhos acadêmicos de acordo com as normas;blue;habilidades;blue;0,2;-7780;3190;ellipse;;;;;nodes;570;600;https://pt.wikipedia.org/wiki/Academia;@' +
	'127;campo;Acadêmica;;;Pedagogia;1;Estudo e criação de métodos visando a transmissão de conhecimento entre pessoas;blue;habilidades;blue;0,2;-7060;3190;ellipse;;;;;nodes;570;600;https://pt.wikipedia.org/wiki/Pedagogia;Aulas, professores, Ensino@' +
	'101;campo;Administração de empresas;;;Gestão;2;Coordenação e direção das atividades da empresa basedas na interação com acionistas e stakeholders;blue;habilidades;blue;0,2;810;410;ellipse;;;;;nodes;1980;720;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o;@' +
	'102;campo;Administração de empresas;;;Comercial;2;Execução de transações de compra e venda baseadas em processos de relacionamento, negociação e senso comercial;blue;habilidades;blue;0,2;-2500;2710;ellipse;;;;;nodes;1690;480;https://pt.wikipedia.org/wiki/Com%C3%A9rcio;@' +
	'103;campo;Administração de empresas;;;Empreendedorismo;2;Identificação de oportunidades, criação de modelos de negócios e implementação de novas empresas;blue;habilidades;blue;0,2;-2580;2070;ellipse;;;;;nodes;1560;600;https://pt.wikipedia.org/wiki/Empreendedorismo;@' +
	'104;campo;Administração de empresas;;;Estratégia;2;Planejamento, execução e iteração de iniciativas com o intuito de maximizar o sucesso competitivo da empresa;blue;habilidades;blue;0,2;-2640;1130;ellipse;;;;;nodes;1430;1080;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@' +
	'105;campo;Administração de empresas;;;Finanças;2;Gestão dos recursos financeiros da companhia, com o objetivo da redução de seu custo, a otimização da sua aplicação e sua plena disponibilidade;blue;habilidades;blue;0,2;435;1960;ellipse;;;;;nodes;3790;2000;https://pt.wikipedia.org/wiki/Finan%C3%A7as;finance, grana@' +
	'107;campo;Administração de empresas;;;Marketing;2;Interação com mercado para a criação de soluções e de uma marca, suas ofertas e gestão de seus desempenhos;blue;habilidades;blue;0,2;-1860;-60;ellipse;;;;;nodes;3000;1040;https://pt.wikipedia.org/wiki/Marketing;@' +
	'108;campo;Administração de empresas;;;Recursos humanos;2;Identificação, atração, retenção e desenvolvimento de pessoas para viabilizar a execução da visão da organização;blue;habilidades;blue;0,2;810;-630;ellipse;;;;;nodes;1980;940;https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_recursos_humanos;RH@' +
	'146;campo;Administração de empresas;;;Operações;2;Planejamento e execução de processos, determinando recursos e ferramentas necessários para a disponibilização eficiente de produtos e serviços;blue;habilidades;blue;0,2;-1950;-1100;ellipse;;;;;nodes;2820;800;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_da_produ%C3%A7%C3%A3o;operations, produção@' +
	'109;campo;Ciências contábeis;;;Contabilidade;3;Manutenção de registros contábeis de uma operação ou negócio;blue;habilidades;blue;0,2;4060;2070;ellipse;;;;;nodes;2760;1160;https://pt.wikipedia.org/wiki/Contabilidade;Contabilidade@' +
	'167;campo;Ciências contábeis;;;Auditoria;3;Avaliação de documentos, processos e contas com o objetivo de garantir o correto funcionamento de uma organização;blue;habilidades;blue;0,2;3630;1220;ellipse;;;;;nodes;1680;360;https://pt.wikipedia.org/wiki/Auditoria;@' +
	'110;campo;Direito;;;Direito civil;4;Estudo, criação e aplicação de normas que regulam as relações jurídicas entre particulares em relação de equilíbrio;blue;habilidades;blue;0,2;-2380;-2510;ellipse;;;;;nodes;1680;1180;https://pt.wikipedia.org/wiki/Direito_civil;@' +
	'111;campo;Direito;;;Direito empresarial;4;Estudo, criação e aplicação de normas reguladoras da atividade negocial do empresário, e de qualquer pessoa física ou jurídica, destinada a fins de natureza econômica;blue;habilidades;blue;0,2;-4060;-2920;ellipse;;;;;nodes;1410;600;https://pt.wikipedia.org/wiki/Direito_comercial;@' +
	'112;campo;Direito;;;Direito constitucional;4;Estudo, criação e aplicação das normas constitucionais que regulam uma nação;blue;habilidades;blue;0,2;-4150;-2120;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Direito_constitucional;@' +
	'113;campo;Direito;;;Direito tributário;4;Regras e normas que regulam a cobrança de taxas e impostos de pessoas físicas e jurídicas;blue;habilidades;blue;0,2;-670;-2810;ellipse;;;;;nodes;1430;580;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;Impostos, taxas@' +
	'114;campo;Direito;;;Direito trabalhista;4;Regulação das relações trabalhistas entre pessoas físicas e jurídicas;blue;habilidades;blue;0,2;-5580;-2820;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Direito_do_trabalho;emprego@' +
	'115;campo;Direito;;;Regulações setoriais;4;Regulações específicas que regem o funcionamento de setores econômicos;blue;habilidades;blue;0,2;-4330;-3430;ellipse;;;;;nodes;570;220;;@' +
	'129;campo;Direito;;;Direito administrativo;4;Direito das relações entre cidadãos e o governo;blue;habilidades;blue;0,2;-4150;-2460;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Direito_administrativo;@' +
	'130;campo;Direito;;;Direito econômico;4;Regulação das relações econômicas, produtivas e de circulação de bens;blue;habilidades;blue;0,2;-5580;-3040;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Direito_econ%C3%B4mico;@' +
	'131;campo;Direito;;;Direito processual;4;Conjunto de regras, instituições e suas jurisprudências, que regulam o processo jurídico;blue;habilidades;blue;0,2;880;-2610;ellipse;;;;;nodes;1430;1060;https://pt.wikipedia.org/wiki/Direito_processual;@' +
	'134;campo;Direito;;;Direito internacional;4;Regulação das relações internacionais entre países e organizações;blue;habilidades;blue;0,2;-2710;-3420;ellipse;;;;;nodes;990;480;https://pt.wikipedia.org/wiki/Direito_internacional;@' +
	'136;campo;Direito;;;Direito penal;4;Estudo, criação e aplicação de normas relacionadas ao tratamento e à repressão conferidos aos delitos penais;blue;habilidades;blue;0,2;-760;-2180;ellipse;;;;;nodes;1260;480;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'170;campo;Direito;;;Direito geral;4;Estudo, criação e aplicação de normas de conduta visando à regulação da sociedade, de suas instituições e de todos seus componentes  em suas mais diversas interações;blue;habilidades;blue;0,2;-5580;-2300;ellipse;;;;;nodes;1260;720;https://pt.wikipedia.org/wiki/Direito;@' +
	'171;campo;Direito;;;Direito do consumidor;4;Estudo, criação e aplicação de normas relacionadas às relações de consumo e às garantias do cidadão comum nesse contexto;blue;habilidades;blue;0,2;-5580;-3380;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'137;campo;Economia;;;Pensamento econômico;5;Análise da evolução dos modelos de pensamento econômico e suas respectivas escolas ;blue;habilidades;blue;0,2;3420;3240;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;@' +
	'116;campo;Economia;;;Microeconomia;5;Estudo do comportamento econômico de indivíduos e firmas;blue;habilidades;blue;0,2;3420;3750;ellipse;;;;;nodes;1260;480;https://pt.wikipedia.org/wiki/Microeconomia;@' +
	'117;campo;Economia;;;Macroeconomia;5;Estudo do comportamento econômico em nível regional, nacional e global;blue;habilidades;blue;0,2;3700;4370;ellipse;;;;;nodes;1850;600;https://pt.wikipedia.org/wiki/Macroeconomia;@' +
	'155;campo;Economia;;;Modelos e ténicas econômicas;5;Ferramentas para o estudo, projeção e tomada de decisão econômicas;blue;habilidades;blue;0,2;4690;3580;ellipse;;;;;nodes;990;800;https://pt.wikipedia.org/wiki/C%C3%B3digos_de_classifica%C3%A7%C3%A3o_JEL#matem.C3.A1tica_e_m.C3.A9todos_quantitativos_JEL:_C_Subcategorias;@' +
	'156;campo;Economia;;;Economia aplicada;5;Aplicação de ferramental econômico para a tomada de decisão específica e criação de regulações;blue;habilidades;blue;0,2;5820;3870;ellipse;;;;;nodes;1010;1600;https://pt.wikipedia.org/wiki/Economia_aplicada;@' +
	'118;campo;Filosofia;;;Ética;6;Estudo dos bons hábitos necessários à vida em comunidade;blue;habilidades;blue;0,2;-5550;-770;ellipse;;;;;nodes;990;480;https://pt.wikipedia.org/wiki/%C3%89tica;@' +
	'138;campo;Filosofia;;;Filosofia política;6;Estudo da necessidade de importância da política na humanidade;blue;habilidades;blue;0,2;-4350;-60;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Filosofia_pol%C3%ADtica;@' +
	'164;campo;Filosofia;;;Epistemologia;6;Estudo do conhecimento humano;blue;habilidades;blue;0,2;-4900;-180;ellipse;;;;;nodes;420;480;https://pt.wikipedia.org/wiki/Epistemologia;Gnose@' +
	'165;campo;Filosofia;;;Metafísica;6;Estudo da estrutura básica da realidade e do universo;blue;habilidades;blue;0,2;-5450;-60;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Metaf%C3%ADsica;@' +
	'169;campo;Filosofia;;;Filosofia Jurídica;6;Investigação filosófica que tem por objeto o Direito;blue;habilidades;blue;0,2;-5220;-1280;ellipse;;;;;nodes;1680;360;https://pt.wikipedia.org/wiki/Filosofia_do_direito;@' +
	'139;campo;Idiomas;;;Inglês;12;Comunicação na língua inglesa;blue;habilidades;blue;0,2;-4995;2510;ellipse;;;;;nodes;2270;240;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;@' +
	'144;campo;Idiomas;;;Francês;12;Comunicação na língua francesa;blue;habilidades;blue;0,2;-5270;2240;ellipse;;;;;nodes;1680;120;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;@' +
	'145;campo;Idiomas;;;Espanhol;12;Comunicação na língua espanhola;blue;habilidades;blue;0,2;-5270;2000;ellipse;;;;;nodes;1680;120;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;@' +
	'147;campo;Idiomas;;;Português;12;Comunicação na língua portuguesa;blue;habilidades;blue;0,2;-5900;2800;ellipse;;;;;nodes;420;120;https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa;@' +
	'119;campo;Matemática;;;Cálculo;7;Estudo das taxas de variação e crescimento de grandezas;blue;habilidades;blue;0,2;5450;440;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@' +
	'120;campo;Matemática;;;Estatística;7;Análise do relacionamento entre dados e sua descrição;blue;habilidades;blue;0,2;4330;80;ellipse;;;;;nodes;1680;240;https://pt.wikipedia.org/wiki/Estat%C3%ADstica;@' +
	'140;campo;Matemática ;;;Álgebra;7;Manipulação de operações e equações matemáticas;blue;habilidades;blue;0,2;4185;440;ellipse;;;;;nodes;1430;240;https://pt.wikipedia.org/wiki/%C3%81lgebra;@' +
	'141;campo;Matemática ;;;Probabilidade;7;Estudo da incerteza matemática;blue;habilidades;blue;0,2;3700;-220;ellipse;;;;;nodes;420;120;https://pt.wikipedia.org/wiki/Probabilidade;@' +
	'150;campo;Matemática ;;;Matemática financeira;7;Estudo das relações matemáticas de números financeiros;blue;habilidades;blue;0,2;4460;-220;ellipse;;;;;nodes;840;120;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;@' +
	'157;campo;Profissional;;;Experiência setorial;13;Conhecimento específico sobre o funcionamento de diferentes setores econômicos;blue;habilidades;blue;0,2;-5720;3440;ellipse;;;;;nodes;1260;600;;@' +
	'121;campo;Psicologia;;;Psicologia Freudiana;8;Psicologia Freudiana;blue;habilidades;blue;0,2;4580;-2800;ellipse;;;;;nodes;420;120;;@' +
	'122;campo;Psicologia;;;Psicologia do trabalho;8;Psicologia do trabalho;blue;habilidades;blue;0,2;3950;-2950;ellipse;;;;;nodes;590;600;;@' +
	'148;campo;Psicologia;;;Psicanálise;8;Psicanálise;blue;habilidades;blue;0,2;4580;-3080;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Psican%C3%A1lise;@' +
	'166;campo;Psicologia;;;Psicologia da personalidade;8;Estudo psicológico da personalidade não patológica humana;blue;habilidades;blue;0,2;4210;-3470;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Psicologia_da_personalidade;@' +
	'142;campo;Sociologia;;;Sociologia econômica;11;Análise dos impactos dos sistemas econômicos na vida em sociedade;blue;habilidades;blue;0,2;-4590;1280;ellipse;;;;;nodes;420;360;;@' +
	'143;campo;Sociologia;;;Sociologia jurídica;11;Estudo das relações humanas intermediadas por sistemas criados a partir de leis e normas jurídicas;blue;habilidades;blue;0,2;-5370;940;ellipse;;;;;nodes;1680;120;;@' +
	'149;campo;Soft Skills;;;Habilidades sociais;10;Capacidade de interação social e de criação de relacionamentos;blue;habilidades;blue;0,2;-2380;4100;ellipse;;;;;nodes;1680;360;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_social;Inteligência emocional@' +
	'151;campo;Soft Skills;;;Pensamento crítico;10;Avaliação e reflexão lógica;blue;habilidades;blue;0,2;-3980;3640;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Pensamento_cr%C3%ADtico;@' +
	'152;campo;Soft Skills;;;Pensamento abstrato;10;Avaliação de observações e experiências pelos seus componentes;blue;habilidades;blue;0,2;-3980;3300;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o;@' +
	'153;campo;Soft Skills;;;Comunicação;10;Transmissão e recepção de informações;blue;habilidades;blue;0,2;-3980;4100;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o;@' +
	'154;campo;Soft Skills;;;Postura;10;Auto controle do comportamental para atingimento de objetivos;blue;habilidades;blue;0,2;-2800;3640;ellipse;;;;;nodes;840;360;;@' +
	'1091;categoria;Acadêmica;Pedagogia;;Didática;127;Transformação de conteúdos com o objetivo de facilitação do ensino;blue;habilidades;blue;0,2;-7000;3020;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Did%C3%A1tica;@' +
	'1000;categoria;Acadêmica;Produção científica;;Monografias;100;Monografias;blue;habilidades;blue;0,2;-7720;3020;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Monografia;TCC, tese, doutorado, mestrado@' +
	'1095;campo;Acadêmica;Produção científica;;Pesquisa;100;Técnicas e métodos de pesquisa;blue;habilidades;blue;0,2;-7720;3300;ellipse;;;;;nodes;420;120;https://pt.wikipedia.org/wiki/Pesquisa;Tese, mestrado, doutorado@' +
	'1014;categoria;Administração de empresas;Comercial;;Negociações;102;Troca de informações com clientes e discussão de termos para realização de acordo;blue;habilidades;blue;0,2;-3000;2740;ellipse;;;;;nodes;420;240;;@' +
	'1015;categoria;Administração de empresas;Comercial;;Relacionamento com clientes;102;Criação de relacionamentos com objetivos de maximizar a eficiência comercial de longo prazo do negócio;blue;habilidades;blue;0,2;-1900;2680;ellipse;;;;;nodes;420;360;;@' +
	'1065;categoria;Administração de empresas;Comercial;;Transações comerciais;102;Condução de transações comerciais completas, do orçamento à entrega do produto ou serviço;blue;habilidades;blue;0,2;-2450;2680;ellipse;;;;;nodes;420;360;;@' +
	'1027;categoria;Administração de empresas;Empreendedorismo;;Inovação;103;Identificação de oportunidades e lacunas de mercado e construção de soluções para suprir esta necessidade;blue;habilidades;blue;0,2;-3000;2160;ellipse;;;;;nodes;420;240;https://pt.wikipedia.org/wiki/Inova%C3%A7%C3%A3o;@' +
	'1028;categoria;Administração de empresas;Empreendedorismo;;Novos negócios;103;Criação de modelos de negócios e implantação de organizações para desenvolvê-los;blue;habilidades;blue;0,2;-2240;2040;ellipse;;;;;nodes;840;480;https://pt.wikipedia.org/wiki/Empreendedorismo;@' +
	'1029;categoria;Administração de empresas;Estratégia;;Formulação estratégica;104;Análises do mercado, sua conjuntura competitiva, de empresas e produtos para a criação de planos e políticas de ação;blue;habilidades;blue;0,2;-2580;1330;ellipse;;;;;nodes;1260;480;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#A_intelig.C3.AAncia_e_o_planejamento;@' +
	'1030;categoria;Administração de empresas;Estratégia;;Decisão estratégica;104;Criação, seleção e execução de iniciativas estratégicas condicionadas às respostas competitivas observadas;blue;habilidades;blue;0,2;-2580;810;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#Dire.C3.A7.C3.A3o_Estrat.C3.A9gica;@' +
	'1017;categoria;Administração de empresas;Finanças;;Finanças bancárias;105;Controle e aplicação de recursos financeiros dentro de instituições financeiras;blue;habilidades;blue;0,2;-50;1100;ellipse;;;;;nodes;2520;240;https://pt.wikipedia.org/wiki/Banco;@' +
	'1032;categoria;Administração de empresas;Finanças;;Finanças corporativas;105;Análise e otimização da estrutura de capital de uma empresa para maximização do seu valor;blue;habilidades;blue;0,2;500;2500;ellipse;;;;;nodes;2520;720;https://pt.wikipedia.org/wiki/Finan%C3%A7as_corporativas;@' +
	'1033;categoria;Administração de empresas;Finanças;;Controladoria;105;Geração de informações financeiras para implementação de controles e realização de planejamento;blue;habilidades;blue;0,2;2100;2500;ellipse;;;;;nodes;420;720;https://pt.wikipedia.org/wiki/Controladoria;@' +
	'1034;categoria;Administração de empresas;Finanças;;Investimentos;105;Avaliação e aplicação de recursos em ativos financeiros para a maximização do retorno a determinado nível de risco;blue;habilidades;blue;0,2;-260;1680;ellipse;;;;;nodes;2100;720;https://pt.wikipedia.org/wiki/Investimento;@' +
	'1035;categoria;Administração de empresas;Finanças;;Finanças pessoais;105;Organização e maximização dos recursos financeiros pessoais em função das necessidades individuais;blue;habilidades;blue;0,2;-1100;2680;ellipse;;;;;nodes;420;360;https://pt.wikipedia.org/wiki/Finan%C3%A7as_pessoais;@' +
	'1036;categoria;Administração de empresas;Finanças;;Trading;105;Estruturação e execução de transações a mercado;blue;habilidades;blue;0,2;1680;1740;ellipse;;;;;nodes;1260;600;https://pt.wikipedia.org/wiki/Mercado_financeiro;@' +
	'1002;categoria;Administração de empresas;Gestão;;Gestão de projetos;101;Planejamento, implementação e controle de projetos de mudança;blue;habilidades;blue;0,2;810;540;ellipse;;;;;nodes;1680;240;https://pt.wikipedia.org/wiki/Ger%C3%AAncia_de_projetos;@' +
	'1004;categoria;Administração de empresas;Gestão;;Governança corporativa;101;Criação de estruturas de controle e direção dos negócios pelos acionistas e condução desses mecanismos;blue;habilidades;blue;0,2;390;140;ellipse;;;;;nodes;840;360;https://pt.wikipedia.org/wiki/Governan%C3%A7a_corporativa;@' +
	'1007;categoria;Administração de empresas;Gestão;;Gestão sustentável;101;Interação e comunicação com stakeholders para a adaptação das atividades da empresa e criação de iniciativas alinhadas a seus interesses;blue;habilidades;blue;0,2;1360;200;ellipse;;;;;nodes;840;240;;@' +
	'1038;categoria;Administração de empresas;Marketing;;Gestão de produto;107;Desenho e desenvolvimento de soluções alinhadas às necessidades dos consumidores, e gestão de seus atributos;blue;habilidades;blue;0,2;-1820;130;ellipse;;;;;nodes;840;480;;@' +
	'1039;categoria;Administração de empresas;Marketing;;Análise mercadológica;107;Coleta e análise de informações de mercado e de uso dos produtos e serviços da empresa para reforçar o valor da sua oferta;blue;habilidades;blue;0,2;-2790;250;ellipse;;;;;nodes;840;240;;@' +
	'1040;categoria;Administração de empresas;Marketing;;Comunicação mercadológica;107;Criação e gestão de canais de comunicação para a transmissão de informações sobre a empresa e suas ofertas;blue;habilidades;blue;0,2;-2580;-390;ellipse;;;;;nodes;1260;360;;@' +
	'1041;categoria;Administração de empresas;Marketing;;Decisão mercadológica;107;Planejamento e gestão da oferta de produtos e serviços, agregando valor ao negócio com o pleno atendimento dos clientes;blue;habilidades;blue;0,2;-850;190;ellipse;;;;;nodes;840;360;;@' +
	'1061;categoria;Administração de empresas;Marketing;;Marketing digital;107;Utilização de canais digitais para a realização de comunicações e vendas;blue;habilidades;blue;0,2;-1190;-390;ellipse;;;;;nodes;1260;360;;@' +
	'1005;categoria;Administração de empresas;Operações;;Gestão de operações;146;Desenvolvimento e controle de processos, visando a utilização eficiente de recursos na produção de bens e serviços;blue;habilidades;blue;0,2;-2370;-920;ellipse;;;;;nodes;1680;240;;@' +
	'1062;categoria;Administração de empresas;Operações;;Administração de sistemas;146;Dimensionamento, operação e controle de ferramentas tecnológicas para a operação eficiente de negócios;blue;habilidades;blue;0,2;-2580;-1420;ellipse;;;;;nodes;1260;120;;@' +
	'1063;categoria;Administração de empresas;Operações;;Logística;146;Dimensionamento, armazenamento e movimentação de recursos pela empresa, garantindo o fluxo constante e eficiente de sua operação;blue;habilidades;blue;0,2;-980;-980;ellipse;;;;;nodes;840;360;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos;Supply chain, SCM, Gestão da cadeia de suprimentos@' +
	'1064;categoria;Administração de empresas;Operações;;Técnicas de gestão operacional;146;Técnicas de controle e desenvolvimento de operações;blue;habilidades;blue;0,2;-2580;-1200;ellipse;;;;;nodes;1260;120;;@' +
	'1046;categoria;Administração de empresas;Recursos humanos;;Estruturação organizacional;108;Determinação das funções e criação de desenho estrutural da organização baseados no dimensionamento das suas necessidades de recursos humanos;blue;habilidades;blue;0,2;390;-380;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Estrutura_organizacional;Organograma@' +
	'1045;categoria;Administração de empresas;Recursos humanos;;Recrutamento e seleção;108;Identificação e triagem de candidatos e condução de processos seletivos para garantir a aderência dos profissionais recrutados às necessidades técnicas e culturais da organização;blue;habilidades;blue;0,2;1360;-840;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Provis%C3%A3o_de_recursos_humanos#Recrutamento_e_sele.C3.A7.C3.A3o;Headhunter@' +
	'1044;categoria;Administração de empresas;Recursos humanos;;Atração e retenção;108;Desenvolvimento de pacotes de compensação e planos de carreira alinhados às expectativas dos funcionários e ao mercado, maximizando o capital humano da organização;blue;habilidades;blue;0,2;1360;-440;ellipse;;;;;nodes;840;360;;Retenção de talentos, talentos, gestão de talentos@' +
	'1066;categoria;Administração de empresas;Recursos humanos;;Treinamento e desenvolvimento;108;Estruturação de metas e disponibilização de recursos educacionais para colaboradores de maneira a a garantir a oferta de habilidades para a evolução da organização;blue;habilidades;blue;0,2;390;-900;ellipse;;;;;nodes;840;360;;@' +
	'1018;categoria;Ciências contábeis;Contabilidade;;Contabilidade empresarial;109;Contabilidade empresarial;blue;habilidades;blue;0,2;3840;2260;ellipse;;;;;nodes;2100;600;;@' +
	'1019;categoria;Ciências contábeis;Contabilidade;;Contabilidade financeira;109;Contabilidade financeira;blue;habilidades;blue;0,2;3630;1800;ellipse;;;;;nodes;1680;120;;@' +
	'1020;categoria;Ciências contábeis;Contabilidade;;Contabilidade pessoal;109;Contabilidade Pessoal;blue;habilidades;blue;0,2;3210;1580;ellipse;;;;;nodes;840;120;;@' +
	'1092;categoria;Ciências contábeis;Contabilidade;;Aplicações contábeis;109;Aplicação dos conceitos e práticas contábeis a casos específicos;blue;habilidades;blue;0,2;5230;2080;ellipse;;;;;nodes;420;960;;@' +
	'1052;categoria;Direito;Direito Civil;;Direito da propriedade;110;Estudo, aplicação e criação de normas de regulação do acesso de bens e ativos pelo seu titular;blue;habilidades;blue;0,2;-2440;-2400;ellipse;;;;;nodes;1260;240;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'1053;categoria;Direito;Direito Civil;;Direito da família;110;Estudo, aplicação e criação de normas de regulação da estrutura e dos direitos de uma família;blue;habilidades;blue;0,2;-2440;-2740;ellipse;;;;;nodes;1260;240;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;@' +
	'1054;categoria;Direito;Direito Civil;;Direito das sucessões;110;Estudo, aplicação e criação de normas de regulação da transmissão de bens entre titulares e seus sucessores;blue;habilidades;blue;0,2;-2440;-3020;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es;@' +
	'1024;categoria;Direito;Direito empresarial;;Direito societário;111;Estudo e aplicação das normas que regem o funcionamento de sociedades empresarias;blue;habilidades;blue;0,2;-4000;-3020;ellipse;;;;;nodes;1260;360;;@' +
	'1055;categoria;Direito;Direito internacional;;Direito internacional público;134;Estudo, aplicação e criação de normas para regular a interação entre entes públicos internacionais;blue;habilidades;blue;0,2;-2650;-3340;ellipse;;;;;nodes;840;120;https://pt.wikipedia.org/wiki/Direito_internacional;@' +
	'1095;categoria;Direito;Direito internacional;;Direito internacional privado;134;Estudo, aplicação e criação de normas para regular a interação entrepessoas e empresas em âmbito internacional;blue;habilidades;blue;0,2;-2650;-3560;ellipse;;;;;nodes;840;120;https://pt.wikipedia.org/wiki/Direito_internacional_privado;@' +
	'1025;categoria;Direito;Direito tributário;;Tributação;113;Estudo, aplicação e criação de regras de tributação da atividade econômica na esfera competente;blue;habilidades;blue;0,2;-610;-3020;ellipse;;;;;nodes;1260;120;https://pt.wikipedia.org/wiki/Tributo;@' +
	'1057;categoria;Direito;Direito tributário;;Planejamento tributário;113;Criação de estratégias para manusear o fluxo de pagamentos de tributos da maneira mais conveniente possivel;blue;habilidades;blue;0,2;-610;-2800;ellipse;;;;;nodes;1260;120;;@' +
	'1047;categoria;Direito;Regulações setoriais;;Regulação bancária;115;Estudo, aplicação e criação de normas para a regulação da atividade bancária em determinada região;blue;habilidades;blue;0,2;-4270;-3460;ellipse;;;;;nodes;420;120;;@' +
	'1093;categoria;Direito;Direito Processual;;Direito Processual Civil;131;Estudo, criação e aplicação de normas relacionadas à atividade de jurisdição do Estado no direito civil e diversos outros ramos do direito pátrio, à exclusão do penal;blue;habilidades;blue;0,2;940;-2340;ellipse;;;;;nodes;1260;360;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'1094;categoria;Direito;Direito Processual;;Direito Processual Penal;131;Estudo, criação e aplicação de normas relacionadas à atividade de jurisdição do Estado no julgamento do acusado de praticar delitos penais;blue;habilidades;blue;0,2;940;-2860;ellipse;;;;;nodes;1260;480;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'1010;categoria;Economia;Economia aplicada;;Economia comportamental;156;Análise da influência do comportamento humano nas decisões econômicas;blue;habilidades;blue;0,2;5880;3880;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Economia_comportamental;@' +
	'1060;categoria;Economia;Economia aplicada;;Economia Internacional;156;Estudo do fluxo de pessoas, bens e serviços entre países;blue;habilidades;blue;0,2;5880;4340;ellipse;;;;;nodes;840;480;https://pt.wikipedia.org/wiki/Economia_internacional;@' +
	'1069;categoria;Economia;Economia aplicada;;Economia Industrial;156;Análise e regulação do comportamento de empresas e mercados complexos;blue;habilidades;blue;0,2;5880;3600;ellipse;;;;;nodes;840;120;https://pt.wikipedia.org/wiki/Organiza%C3%A7%C3%A3o_industrial;@' +
	'1071;categoria;Economia;Economia aplicada;;Economia da informação;156;Estudo da informação como mercadoria e insumo econômico;blue;habilidades;blue;0,2;5880;3220;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Economia_da_informa%C3%A7%C3%A3o;@' +
	'1068;categoria;Economia;Macroeconomia;;Análise governamental e pública;117;Estudo do comportamento econômico de instituições governamentais;blue;habilidades;blue;0,2;4390;4340;ellipse;;;;;nodes;420;480;;@' +
	'1012;categoria;Economia;Modelos e Técnicas econômicas;;Matriz insumo-produto;155;Ferramental para a avaliação do potencial de crescimento econômico de uma região;blue;habilidades;blue;0,2;4750;3260;ellipse;;;;;nodes;840;120;;@' +
	'1013;categoria;Economia;Modelos e Técnicas econômicas;;Teoria dos jogos;155;Modelagem de situações e decisões baseada no ferramental de jogos;blue;habilidades;blue;0,2;4750;3480;ellipse;;;;;nodes;840;120;;@' +
	'1051;categoria;Economia;Modelos e Técnicas econômicas;;Econometria;155;Aplicação de técnicas estatísticas para a criação de modelos preditivos econômicos;blue;habilidades;blue;0,2;4750;3760;ellipse;;;;;nodes;840;240;https://pt.wikipedia.org/wiki/Econometria;@' +
	'1031;categoria;Filosofia;Ética;;Ética Aplicada;118;Ética Aplicada;blue;habilidades;blue;0,2;-5490;-800;ellipse;;;;;nodes;840;360;;@' +
	'1058;categoria;Idiomas;Inglês;;Inglês de negócios;139;Jargões de inglês utilizados em negócios;blue;habilidades;blue;0,2;-4090;2480;ellipse;;;;;nodes;420;120;;@' +
	'1050;categoria;Matemática ;Álgebra;;Álgebra linear;140;Cálculo de expressões algébricas simples e lineares;blue;habilidades;blue;0,2;4460;400;ellipse;;;;;nodes;840;120;;@' +
	'1043;categoria;Psicologia;Psicologia do trabalho;;Psicologia comportamental;122;Psicologia comportamental;blue;habilidades;blue;0,2;4000;-2980;ellipse;;;;;nodes;420;480;;@' +
	'10168;habilidade;Acadêmica;Pedagogia;;Criação de cursos em PBL;127;Utilização da metodologia de ensino baseada em solução de problemas e em projetos (Problem based Learning);blue;habilidades;blue;0,2;-7000;3300;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Projeto_de_aprendizagem;Project based learning@' +
	'10651;habilidade;Acadêmica;Pedagogia;;Criação de cursos e treinamentos;127;Desenvolvimento de conteúdo programático e estrutura de cursos, criação de materiais de aula e testes.;blue;habilidades;blue;0,2;-7000;3420;ellipse;;;;;nodes;;70;;@' +
	'10652;habilidade;Acadêmica;Pedagogia;Didática;Condução de aulas expositivas;1091;Apresentação de conteúdo educativo de maneira a expor teorias e fatos ao corpo discente;blue;habilidades;blue;0,2;-7000;3080;ellipse;;;;;nodes;;70;;@' +
	'10653;habilidade;Acadêmica;Pedagogia;Didática;Criação de currículo educacional;1091;Definição dos conteúdos a serem transmitidos de acordo com os objetivos de um curso;blue;habilidades;blue;0,2;-7000;2960;ellipse;;;;;nodes;;70;;@' +
	'10169;habilidade;Acadêmica;Produção científica;Pesquisa;Projetos de pesquisa;1095;Criação de projetos de pesquisa acadêmica;blue;habilidades;blue;0,2;-7720;3300;ellipse;;;;;nodes;;70;;@' +
	'10000;habilidade;Acadêmica;Produção científica;Monografias;Formatação de trabalhos científicos;1000;Utilização das regras da ABNT para formatação de trabalhos acadêmicos;blue;habilidades;blue;0,2;-7720;3080;ellipse;;;;;nodes;;70;;@' +
	'10170;habilidade;Acadêmica;Produção científica;Monografias;Defesa de teses;1000;Aprovação de trabalhos teóricos em banca de examinação;blue;habilidades;blue;0,2;-7720;2960;ellipse;;;;;nodes;;70;;@' +
	'10022;habilidade;Administração de empresas;Comercial;Negociações;Negociação;1014;Utilização de técnicas e conceitos de negociação para maximização de resultados;blue;habilidades;blue;0,2;-3000;2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Negocia%C3%A7%C3%A3o;@' +
	'10199;habilidade;Administração de empresas;Comercial;Negociações;Participação de leilões;1014;Participação dos diversos tipo de leilão e realização de lances para aquisição de produtos e serviços de acordo com as regras estipuladas;blue;habilidades;blue;0,2;-3000;2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Leil%C3%A3o;@' +
	'10353;habilidade;Administração de empresas;Comercial;Transações comerciais;Realização de Road Show;1065;Condução de sequência de reuniões e encontros com potenciais investidores para a apresentação de uma oportunidade de investimento e coleta de ofertas indicativas ou firmes.;blue;habilidades;blue;0,2;-2450;2800;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Financial_roadshows;Road show, IPO, Structured finance, follow-on, emissão secundária, emissão primária, abertura de capital@' +
	'10319;habilidade;Administração de empresas;Comercial;Transações comerciais;Cotação e orçamento;1065;Informação de preço de combinações de produtos e serviços para clientes individuais;blue;habilidades;blue;0,2;-2450;2680;ellipse;;;;;nodes;;70;;@' +
	'10320;habilidade;Administração de empresas;Comercial;Transações comerciais;Criação de propostas;1065;Redação de propostas comerciais, contendo seus termos e condições;blue;habilidades;blue;0,2;-2450;2560;ellipse;;;;;nodes;;70;;@' +
	'10769;habilidade;Administração de empresas;Comercial;Transações comerciais;Importação e exportação;1065;Estruturação de transações comerciais internacionais de compra e venda de acordo com as normas vigentes ;blue;habilidades;blue;0,2;-3000;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Com%C3%A9rcio_internacional;@' +
	'10023;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Gestão de relacionamento com clientes;1015;Manutenção de relacionamento com clientes com objetivo de maximizar vendas e capacidade de atendimento;blue;habilidades;blue;0,2;-1900;2800;ellipse;;;;;nodes;;70;;@' +
	'10024;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Prospecção de mercado;1015;Pesquisa e contato com novos clientes, fornacedores e parceiros;blue;habilidades;blue;0,2;-1900;2680;ellipse;;;;;nodes;;70;;@' +
	'10321;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Atendimento a clientes;1015;Interação com clientes para entendimento de suas demandas e melhor forma de atendê-las com produtos e serviços ofertados;blue;habilidades;blue;0,2;-1900;2560;ellipse;;;;;nodes;;70;;@' +
	'10026;habilidade;Administração de empresas;Empreendedorismo;Inovação;Design thinking;1027;Criação de soluções baseada na interação com usuários e foco em design e inovação;blue;habilidades;blue;0,2;-3000;2220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Design_thinking;@' +
	'10028;habilidade;Administração de empresas;Empreendedorismo;Inovação;Inovação em produtos e serviços;1027;Identificação de lacunas de mercados ou criação de novas soluções para problemas e transformação de oportunidades em produtos ou serviços;blue;habilidades;blue;0,2;-3000;2100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Inova%C3%A7%C3%A3o;@' +
	'10025;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Abertura de empresas;1028;Condução do processo burocrático de abertura de uma nova pessoa jurídica;blue;habilidades;blue;0,2;-2450;1980;ellipse;;;;;nodes;;70;;@' +
	'10029;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Empreendimento com metodologia Lean Start-up;1028;Criação de novos negócios com foco na criação eficiente de produtos com base na identificação de demandas;blue;habilidades;blue;0,2;-2450;1860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Lean_startup;Lean@' +
	'10030;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Criação de modelos de negócios;1028;Desenvolvimento de modelos de negócios baseados em novos produtos, clientes e mercados;blue;habilidades;blue;0,2;-2450;2100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Modelo_de_neg%C3%B3cio;Business model@' +
	'10031;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Financiamento de novos negócios;1028;Estruturação de operações e captação de recursos para viabilizar empresas em fase inicial de operação;blue;habilidades;blue;0,2;-2030;2220;ellipse;;;;;nodes;;70;;@' +
	'10322;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Criação de plano de negócios;1028;Criação de um plano de negócios contendo os objetivos, análise de mercado e as características da empresa e produto a serem criados;blue;habilidades;blue;0,2;-2450;2220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Plano_de_neg%C3%B3cios;BP, business plan@' +
	'10367;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Empreendedorismo social;1028;Criação de empresa com modelo de negócios focado na criação de benefícios sociais e não diretamente ligado à obtenção de lucro;blue;habilidades;blue;0,2;-2030;2100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Empreendedorismo_social;CSR, Empresa social, setor dois e meio, setor 2.5, Inclusão@' +
	'10407;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Aceleração de empreendimentos;1028;Apoio a projetos e empresas para que estes possam atingir a fase de produção e comercialização de maneira mais rápida;blue;habilidades;blue;0,2;-2030;1980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Aceleradora;Incubadora, angel, investidor anjo@' +
	'10072;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de cadeia de valor;1029;Análise da cadeia de fornecedores e de processos produtivos para identificação de vantagens e desvantagens competitivas;blue;habilidades;blue;0,2;-3000;1510;ellipse;;;;;nodes;;70;;@' +
	'10200;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise das forças de mercado;1029;Análise da distribuição de forças em um determinado mercado e mitigação dos riscos que essa distribuição apresenta;blue;habilidades;blue;0,2;-3000;1390;ellipse;;;;;nodes;;70;;@' +
	'10033;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de end game;1029;Identificação de potenciais reações competitivas de uma decisão estratégica e adaptação a essas reações;blue;habilidades;blue;0,2;-3000;1270;ellipse;;;;;nodes;;70;;@' +
	'10034;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise do ciclo de vida do produto;1029;Identificação do ponto de vida de determinado produto e de ações específicas para maximizar seu retorno;blue;habilidades;blue;0,2;-3000;1150;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ciclo_de_vida_do_produto;@' +
	'10032;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise da concorrência;1029;Criação de relatórios de estratégias de concorrentes, determinar seus pontos fortes e fracos e posicionar empresas no mercado;blue;habilidades;blue;0,2;-2580;1510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@' +
	'10035;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise estrutural;1029;Construir o entendimento sobre uma indústria, sua cadeia de valor, tendências e distribuição de poderes;blue;habilidades;blue;0,2;-2580;1390;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@' +
	'10364;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de jogos;1029;Análise do comportamento de participantes de situações baseada na teoria dos jogos;blue;habilidades;blue;0,2;-2580;1270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;John nash, dilema do prisoneiro@' +
	'10417;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise SWOT;1029;Realização de análise sobre as forças, fraquezas, oportunidades e ameaças ligadas ao negócio da empresa;blue;habilidades;blue;0,2;-2580;1150;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_SWOT;FOFA@' +
	'10037;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Planejamento estratégico;1029;Desenvolvimento de objetivos de médio e longo prazo e identificação de ações necessárias a seu atingimento;blue;habilidades;blue;0,2;-2160;1510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico;@' +
	'10432;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de competências organizacionais;1029;Determinação das principais competências operacionais de uma empresa com relação ao mercado que está inserida;blue;habilidades;blue;0,2;-2160;1390;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Compet%C3%AAncia_(administra%C3%A7%C3%A3o);Competências essenciais@' +
	'10433;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Visão baseada em recursos;1029;Análise dos recursos disponíveis a uma empresa para identificação de atributos capazes de gerar vantagens competititvas;blue;habilidades;blue;0,2;-2160;1270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Vis%C3%A3o_baseada_em_recursos;@' +
	'10419;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Direção estratégica;1030;Definição do norte estratégico da empresa com missão, visão e valores;blue;habilidades;blue;0,2;-3000;930;ellipse;;;;;nodes;;70;;Missão, visão@' +
	'10420;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Criação de plano de ação;1030;Listagem das ações necessárias ao atingimento dos objetivos estratégicos e determinação da ordem em que serão realizadas;blue;habilidades;blue;0,2;-3000;810;ellipse;;;;;nodes;;70;;@' +
	'10036;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Construção de estratégia corporativa;1030;Definir estratégia geral ou especifica com base em dados de mercado e análises mercadológicas e estratégicas;blue;habilidades;blue;0,2;-3000;690;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;@' +
	'10434;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Criação de estratégia de entrada e saída;1030;Criação de estratégia de inserção em novos mercados para maximização de seu sucesso, ou de saída com os menores custos e impactos negativos ;blue;habilidades;blue;0,2;-2580;930;ellipse;;;;;nodes;;70;;@' +
	'10436;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Implantação de Balanced Scorecard;1030;Desenho e aplicação de ferramenta de gestão baseada em controle de metas específicas ligadas à estratégia da empresa;blue;habilidades;blue;0,2;-2580;810;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Balanced_scorecard;BSC@' +
	'10435;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Utilização de vantagem competitiva;1030;Criação de estratégia baseada no reforço de competências distintivas da companhia;blue;habilidades;blue;0,2;-2160;930;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Vantagem_competitiva;@' +
	'10366;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Criação de estratégia global;1030;Desenho da estratégia da empresa levando em consideração os diversos países onde atua e buscando maximizar seu retorno em cada mercado, aproveitando oportunidades e mitigando riscos de cada região;blue;habilidades;blue;0,2;-2160;810;ellipse;;;;;nodes;;70;;Globalização,@' +
	'10049;habilidade;Administração de empresas;Finanças;Controladoria;Criação de relatórios gerenciais;1033;Criação de relatórios e demonstrativos gerenciais, de acordo com normas corporativas internas;blue;habilidades;blue;0,2;2100;2680;ellipse;;;;;nodes;;70;;@' +
	'10050;habilidade;Administração de empresas;Finanças;Controladoria;Consolidação de demonstrativos;1033;Consolidação gerencial de demonstrativos financeiros de diversas unidades de negócio;blue;habilidades;blue;0,2;2100;2800;ellipse;;;;;nodes;;70;;@' +
	'10051;habilidade;Administração de empresas;Finanças;Controladoria;Relatórios para investidores;1033;Produção de informações conforme regulação visando o atendimento a investidores;blue;habilidades;blue;0,2;2100;2560;ellipse;;;;;nodes;;70;;@' +
	'10198;habilidade;Administração de empresas;Finanças;Controladoria;Planejamento financeiro;1033;Criação de orçamentos de receitas e despesas e cálculo de necessidades de financiamento;blue;habilidades;blue;0,2;2100;2440;ellipse;;;;;nodes;;70;;@' +
	'10306;habilidade;Administração de empresas;Finanças;Controladoria;Gestão de contas a pagar/ receber;1033;Acompanhamento de fluxos financeiros previstos e realizados, e tomada de ação para garantir a correta entrada e saída de recursos;blue;habilidades;blue;0,2;2100;2320;ellipse;;;;;nodes;;70;;@' +
	'10339;habilidade;Administração de empresas;Finanças;Controladoria;Criação de controles internos;1033;Desenvolvimento de normas e processos para garantir a confiabilidade das informações financeiras geradas;blue;habilidades;blue;0,2;2100;2200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Controle_interno;Auditoria interna@' +
	'10349;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de garantias;1017;Análise de ativos oferecidos em garantias de operações de crédito, seu valor e instrumento jurídico utilizado para a dação;blue;habilidades;blue;0,2;-680;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Garantia;Garantias, alienação fiduciária@' +
	'10099;habilidade;Administração de empresas;Finanças;Finanças bancárias;Divulgação de informações bancárias;1017;Criação e divulgação de informações determinadas pelas normas de divulgação de informação e transparência para investidores de mercado (CVM/ Bolsas de valor);blue;habilidades;blue;0,2;-680;1040;ellipse;;;;;nodes;;70;;@' +
	'10190;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de crédito PJ;1017;Avaliação do risco de não pagamento de dívidas por empresas;blue;habilidades;blue;0,2;-1100;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;@' +
	'10191;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de crédito PF;1017;Avaliação do risco de não pagamento de dívidas por indivíduos;blue;habilidades;blue;0,2;-1100;1040;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;@' +
	'10312;habilidade;Administração de empresas;Finanças;Finanças bancárias;Gestão de garantias;1017;Avaliação e acompanhamento do valor de garantias prestadas em relação a uma dívida e tomada de ação em caso de desenquadramento;blue;habilidades;blue;0,2;-260;1160;ellipse;;;;;nodes;;70;;@' +
	'10348;habilidade;Administração de empresas;Finanças;Finanças bancárias;Definição de política de crédito;1017;Definição de variáveis a serem analisadas e valores a serem observados para a aprovação de operações de crédito;blue;habilidades;blue;0,2;-260;1040;ellipse;;;;;nodes;;70;;Crédito@' +
	'10192;habilidade;Administração de empresas;Finanças;Finanças bancárias;Gestão de riscos bancários;1017;Avaliação dos riscos aos quais um banco está exposto e criação de estratégias de mitigação;blue;habilidades;blue;0,2;160;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerenciamento_de_risco;Risco de mercado, risco operacional, risco de liquidez@' +
	'10193;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de liquidez;1017;Análise das projeções de necessidades e disponibilidade de caixa no curto e médio prazo;blue;habilidades;blue;0,2;160;1040;ellipse;;;;;nodes;;70;;@' +
	'10100;habilidade;Administração de empresas;Finanças;Finanças bancárias;Cálculo de requerimento de capital de BIS III;1017;Determinação do índice de basiléia de um banco, a partir do cálculo do requerimento de capital por ativo ponderado por risco;blue;habilidades;blue;0,2;580;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Basileia_III;@' +
	'10098;habilidade;Administração de empresas;Finanças;Finanças bancárias;Cálculos de LCR e NSFR - BIS III;1017;Cálculo dos índices de NSFR (Net Stable Funding Ratio) e LCR ( Liquidity Coverage Ratio);blue;habilidades;blue;0,2;580;1040;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Basileia_III;@' +
	'10803;habilidade;Administração de empresas;Finanças;Finanças bancárias;Estruturação de produtos financeiros;1017;Criação de produtos financeiros para os segmentos de atacado e varejo, utilizando crédito, serviços e/ou investimentos;blue;habilidades;blue;0,2;1000;1160;ellipse;;;;;nodes;;70;;@' +
	'10038;habilidade;Administração de empresas;Finanças;Finanças corporativas;Reestruturação de passivos;1032;Renegociação de dívidas para readequação dos fluxos de pagamentos à geração de caixa da empresa;blue;habilidades;blue;0,2;1130;2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;@' +
	'10040;habilidade;Administração de empresas;Finanças;Finanças corporativas;Captação a mercado via ações;1032;Estruturação de operações de captação de recursos por meio de venda de ações;blue;habilidades;blue;0,2;1130;2440;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado_de_capitais;@' +
	'10041;habilidade;Administração de empresas;Finanças;Finanças corporativas;Captação a mercado com dívida;1032;Estruturação de operações de captação de recursos por meio de instrumentos de dívida;blue;habilidades;blue;0,2;1130;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado_de_capitais;@' +
	'10042;habilidade;Administração de empresas;Finanças;Finanças corporativas;Análise de demonstrativos financeiros;1032;Análise vertical/ horizontal de balanços, DREs e fluxos de caixa;blue;habilidades;blue;0,2;-550;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;@' +
	'10043;habilidade;Administração de empresas;Finanças;Finanças corporativas;Análise de índices financeiros;1032;Criação de índices a partir de informações financeiras e interpretação de seus resultados;blue;habilidades;blue;0,2;-550;2440;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;@' +
	'10044;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação de opções reais;1032;Cálculo do valor de opções reais e utilização na análise de investimentos;blue;habilidades;blue;0,2;710;2200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_op%C3%A7%C3%B5es_reais;@' +
	'10046;habilidade;Administração de empresas;Finanças;Finanças corporativas;Otimização da estrutura de capital;1032;Maximização do valor de uma empresa a partir da melhor composição de sua estrutura de financiamento;blue;habilidades;blue;0,2;1550;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Custo_do_capital;@' +
	'10047;habilidade;Administração de empresas;Finanças;Finanças corporativas;Estruturação de fusões e aquisições;1032;Definição de estratégia e estruturação de operações de compra ou venda de negócios ou ativos;blue;habilidades;blue;0,2;1130;2200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Fus%C3%A3o_%28direito%29;@' +
	'10048;habilidade;Administração de empresas;Finanças;Finanças corporativas;Gestão de caixa;1032;Garantir a disponibilidade de caixa, via a projeção de sua geração e de necessidades de financiamento;blue;habilidades;blue;0,2;-130;2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cash_management;@' +
	'10052;habilidade;Administração de empresas;Finanças;Finanças corporativas;Cálculo do custo de capital;1032;Determinação do custo de capital médio ponderado de uma empresa incluindo as componentes de capital próprio - CAPM - e de terceiros;blue;habilidades;blue;0,2;-130;2440;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Custo_do_capital;Beta, Wacc@' +
	'10186;habilidade;Administração de empresas;Finanças;Finanças corporativas;Criação de estratégias de saída;1032;Avaliação e seleção de modalidades de realização de investimentos em empresas;blue;habilidades;blue;0,2;1550;2440;ellipse;;;;;nodes;;70;;@' +
	'10187;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação por desconto;1032;Determinação do valor presente de ativos a partir da sua capacidade de geração de resultados futuros;blue;habilidades;blue;0,2;290;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;DCF, DDM, NOPLAT, EBITDA@' +
	'10188;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação por múltiplos;1032;Determinação do valor de ativos a partir de índices financeiros de empresas e transações comparáveis;blue;habilidades;blue;0,2;290;2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;P/E, Market to book, price to earnings@' +
	'10189;habilidade;Administração de empresas;Finanças;Finanças corporativas;Securitização de ativos;1032;Estruturação de transações e veículos de securitização de ativos;blue;habilidades;blue;0,2;1130;2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o;FIDC, CDO, CRI, CRA@' +
	'10307;habilidade;Administração de empresas;Finanças;Finanças corporativas;Análise de sensibilidade;1032;Determinação do impacto da variação das premissas de projeção de resultados no valor presente de um ativo;blue;habilidades;blue;0,2;710;2320;ellipse;;;;;nodes;;70;;NPV@' +
	'10350;habilidade;Administração de empresas;Finanças;Finanças corporativas;Criação de covenants financeiros;1032;Criação de mecanismos de alinhamento de interesses entre investidores e empresas em operações financeiras estruturadas;blue;habilidades;blue;0,2;710;2680;ellipse;;;;;nodes;;70;;Covenants, finanças estruturadas@' +
	'10351;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação da geração de valor;1032;Cálculo de métricas de geração de valor e interpretação de seus resultados;blue;habilidades;blue;0,2;290;2440;ellipse;;;;;nodes;;70;;EVA, GVA, MVA@' +
	'10352;habilidade;Administração de empresas;Finanças;Finanças corporativas;Projeção financeira;1032;Criação de projeções de demonstrativos financeiros a partir de resultados passados e premissas de evolução dos números;blue;habilidades;blue;0,2;-130;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_financeira;Forecasting, avaliação financeira@' +
	'10346;habilidade;Administração de empresas;Finanças;Finanças corporativas;Financiamento de projetos;1032;Criação de estruturas de financiamento de projetos conforme sua necessidade e projeção de geração de caixa;blue;habilidades;blue;0,2;1130;2320;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Project_finance;Project finance@' +
	'10421;habilidade;Administração de empresas;Finanças;Finanças pessoais;Planejamento financeiro pessoal;1035;Criação de planos de investimento para garantir fluxo de renda futuro;blue;habilidades;blue;0,2;-1100;2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Previd%C3%AAncia_privada;aposentadoria, PGBL, VGBL, seguros@' +
	'10422;habilidade;Administração de empresas;Finanças;Finanças pessoais;Orçamento doméstico;1035;Construção de plano financeiro para tomada de decisão de consumo doméstico;blue;habilidades;blue;0,2;-1100;2800;ellipse;;;;;nodes;;70;;@' +
	'10423;habilidade;Administração de empresas;Finanças;Finanças pessoais;Avaliação de seguros;1035;Avaliação do risco a ser corrido em relação ao custo da contratação de um seguro para tomada de decisão;blue;habilidades;blue;0,2;-1100;2560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Seguro;@' +
	'10039;habilidade;Administração de empresas;Finanças;Investimentos;Análise dos mercados financeiros;1034;Análise básica do funcionamento de mercados financeiros com a visão de Risco e Retorno, Eficiência de mercado e Portfólio eficiente;blue;habilidades;blue;0,2;-1100;1980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Finan%C3%A7as;Risco e retorno, eficiência de mercado@' +
	'10063;habilidade;Administração de empresas;Finanças;Investimentos;Análise da curva a termo;1034;Cálculo da taxa de juros justa para diferentes prazos e vencimentos, utilizando FRAs e projeções de mercados;blue;habilidades;blue;0,2;-1100;1860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Curva_a_termo;@' +
	'10173;habilidade;Administração de empresas;Finanças;Investimentos;Análise de perfil de investidor;1034;Determinação de perfil de investidores a partir de seus objetivos e restrições, utilizando conceitos de gestão de portfólio;blue;habilidades;blue;0,2;-260;1380;ellipse;;;;;nodes;;70;;@' +
	'10178;habilidade;Administração de empresas;Finanças;Investimentos;Criação de tese de investimento;1034;Criação de estratégias de geração de valor com investimentos em ativos financeiros ou empresas de capital fechado;blue;habilidades;blue;0,2;-1100;1380;ellipse;;;;;nodes;;70;;@' +
	'10342;habilidade;Administração de empresas;Finanças;Investimentos;Avaliação de riscos;1034;Avaliação da sensibilidade do preço de ativos financeiros e seus derivados a eventos como pré pagamento, inadimplência e oscilações de mercado;blue;habilidades;blue;0,2;-1100;1500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Value_at_Risk;Pré pagamento, crédito, mercado, V@R@' +
	'10343;habilidade;Administração de empresas;Finanças;Investimentos;Estruturação de fundos de investimentos;1034;Criação de um fundo de investimentos envolvendo seus documentos constitutivos bem como processos operacionais e atribuição de responsabilidades;blue;habilidades;blue;0,2;-680;1380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Fundo_de_investimento;Fundo de investimentos, FIDC, Hedge fund, FII, FIA, FIP.@' +
	'10064;habilidade;Administração de empresas;Finanças;Investimentos;Análise de títulos de renda fixa;1034;Avaliação dos componentes e cálculo do valor justo de títulos de dívida pública ou corporativa;blue;habilidades;blue;0,2;-680;1860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Renda_fixa;@' +
	'10054;habilidade;Administração de empresas;Finanças;Investimentos;Análise fundamentalista;1034;Determinação do preço de uma ação a partir de fluxos de caixa projetados com informações financeiras e de mercado;blue;habilidades;blue;0,2;-680;1740;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_fundamentalista;Research@' +
	'10055;habilidade;Administração de empresas;Finanças;Investimentos;Análise técnica;1034;Determinação do preço de um ativo financeiro a partir do preço do ativo e seu comportamento histórico;blue;habilidades;blue;0,2;-680;1980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_t%C3%A9cnica;Análise gráfica@' +
	'10053;habilidade;Administração de empresas;Finanças;Investimentos;Análise quantitativa;1034;Determinação do preço de um ativo financeiro com base em análises estatisticas de componentes que o influenciam;blue;habilidades;blue;0,2;-680;1620;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Quantitative_analyst;@' +
	'10341;habilidade;Administração de empresas;Finanças;Investimentos;Teste de estresse;1034;Realização de simulação financeira com cenários extremamente negativos para identificação de riscos sistêmicos e limites operacionais de empresas;blue;habilidades;blue;0,2;-680;1500;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Stress_test_(financial);Stress testing, crise financeira, basiléia@' +
	'10345;habilidade;Administração de empresas;Finanças;Investimentos;Investimento em empresas de capital fechado;1034;Avaliação e investimento em empresas sem ações negociadas em bolsas de valores;blue;habilidades;blue;0,2;-260;1980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Private_equity;Private Equity, venture capital@' +
	'10174;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos em ativos imobiliários;1034;Análise de imóveis como investimentos;blue;habilidades;blue;0,2;-260;1860;ellipse;;;;;nodes;;70;;@' +
	'10176;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos alternativos;1034;Análise de investimento em ativos não tradicionais e de alto risco;blue;habilidades;blue;0,2;160;1860;ellipse;;;;;nodes;;70;;Hedge funds@' +
	'10177;habilidade;Administração de empresas;Finanças;Investimentos;Investimento em ativos securitizados;1034;Avaliação e investimento em ativos financeiros decorrentes de processos de securitização;blue;habilidades;blue;0,2;-260;1740;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o;FIDC, CRI, CRA@' +
	'10182;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos em seguros;1034;Avaliação de investimentos em títulos lastreados em contratos de seguros e resseguros;blue;habilidades;blue;0,2;-260;1620;ellipse;;;;;nodes;;70;;@' +
	'10340;habilidade;Administração de empresas;Finanças;Investimentos;Classificação de risco;1034;Classificação de capacidade de pagamento das dívidas de determinada empresa ou instituição;blue;habilidades;blue;0,2;-260;1500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Classifica%C3%A7%C3%A3o_de_cr%C3%A9dito;Rating, nota de crédito@' +
	'10057;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de portfólio;1034;Combinação dos diversos ativos financeiros disponíveis para a construção e manutenção de portfólio alinhado aos objetivos do investidor;blue;habilidades;blue;0,2;580;1740;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_moderna_do_portf%C3%B3lio;@' +
	'10184;habilidade;Administração de empresas;Finanças;Investimentos;Avaliação de performance;1034;Utilização de benchmarks e objetivos para avaliação do desempenho do portfolio;blue;habilidades;blue;0,2;160;1740;ellipse;;;;;nodes;;70;;@' +
	'10179;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de fortunas;1034;Criação de portfólio personalizado com diversificação de objetivos e orientação de longo prazo;blue;habilidades;blue;0,2;580;1380;ellipse;;;;;nodes;;70;;@' +
	'10180;habilidade;Administração de empresas;Finanças;Investimentos;Planejamento sucessório;1034;Estruturação de veículos de investimento voltados à eficiência tributária na transmissão de bens entre gerações familiares;blue;habilidades;blue;0,2;160;1380;ellipse;;;;;nodes;;70;;@' +
	'10181;habilidade;Administração de empresas;Finanças;Investimentos;Gestão institucional;1034;Criação de portfólio institucional, seguindo regras atuariais de retorno requerido e limitação de riscos;blue;habilidades;blue;0,2;580;1860;ellipse;;;;;nodes;;70;;@' +
	'10183;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de risco de portfólio;1034;Determinação das exposições a serem tomadas e ajuste de portfólio para balanceamento destas exposições;blue;habilidades;blue;0,2;160;1500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_moderna_do_portf%C3%B3lio;Equalização de posição, Delta@' +
	'10802;habilidade;Administração de empresas;Finanças;Investimentos;Criação de estratégias de investimentos;1034;Criação de estratégias de investimentos utilizando instrumentos de renda fixa e variável;blue;habilidades;blue;0,2;580;1980;ellipse;;;;;nodes;;70;;@' +
	'10338;habilidade;Administração de empresas;Finanças;Trading;Emissão de ordem de negociação;1036;Emissão de ordens de compra e venda, nas diversas modalidades de ordens praticadas em bolsas de valores;blue;habilidades;blue;0,2;1260;1980;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Order_(exchange);Stop loss, stop, realização@' +
	'10068;habilidade;Administração de empresas;Finanças;Trading;Operação de plataformas de negociação;1036;Utilização de plataformas de negociação de ativos financeiros;blue;habilidades;blue;0,2;1260;1860;ellipse;;;;;nodes;;70;;@' +
	'10195;habilidade;Administração de empresas;Finanças;Trading;Cálculo de spreads e prêmios;1036;Cálculo de ágios cobrados em transações de ativos e inclusão da informação na tomada de decisão de investimentos;blue;habilidades;blue;0,2;1260;1620;ellipse;;;;;nodes;;70;;@' +
	'10347;habilidade;Administração de empresas;Finanças;Trading;Conciliação de posições;1036;Verificação do saldo de contas e posições financeiras após um período de movimentacões, comparando saldos finais com as somas dos valores movimentados;blue;habilidades;blue;0,2;1260;1500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Concilia%C3%A7%C3%A3o_banc%C3%A1ria;@' +
	'10062;habilidade;Administração de empresas;Finanças;Trading;Negociação em mercado organizado;1036;Compra e venda de ativos financeiros em bolsa de valores ou mercado de balcão;blue;habilidades;blue;0,2;1680;1980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado_financeiro;@' +
	'10194;habilidade;Administração de empresas;Finanças;Trading;Negociação de derivativos;1036;Compra e venda das diversas modalidades de derivativos (termos, futuros, opções, swaps, etc.);blue;habilidades;blue;0,2;2100;1860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Derivativo;@' +
	'10065;habilidade;Administração de empresas;Finanças;Trading;Precificação de derivativos;1036;Cálculo do valor justo de negociação das diversas modalidades de derivativos;blue;habilidades;blue;0,2;1680;1740;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Derivativo;@' +
	'10197;habilidade;Administração de empresas;Finanças;Trading;Avaliação de opções;1036;Avaliação do impacto dos componentes (letras gregas) do valor de uma opção em seu preço;blue;habilidades;blue;0,2;1680;1860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado_de_op%C3%A7%C3%B5es;Black & Scholes@' +
	'10337;habilidade;Administração de empresas;Finanças;Trading;Aluguel de ações;1036;Execução de transações de aluguel de ações e utilização em estruturas e estratégias;blue;habilidades;blue;0,2;1680;1500;ellipse;;;;;nodes;;70;;Stock renting, venda a descoberto@' +
	'10066;habilidade;Administração de empresas;Finanças;Trading;Criação de estratégias de hedge;1036;Montagem de estratégias de hedge com derivativos, alguéis de ações e seguros;blue;habilidades;blue;0,2;2100;1740;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cobertura_%28finan%C3%A7as%29;@' +
	'10196;habilidade;Administração de empresas;Finanças;Trading;Arbitragem financeira;1036;Compra e venda de ativos com preço divergente de seu valor justo com a expectativa de ajuste para esse valor;blue;habilidades;blue;0,2;1680;1620;ellipse;;;;;nodes;;70;;@' +
	'10308;habilidade;Administração de empresas;Finanças;Trading;Estruturação de produtos;1036;Combinação de ativos financeiros e derivativos com base em uma estratégia de resultado;blue;habilidades;blue;0,2;2100;1980;ellipse;;;;;nodes;;70;;@' +
	'10311;habilidade;Administração de empresas;Finanças;Trading;Estratégias de negociação;1036;Utilização de técnicas de negociação baseadas em estruturas de mercado, custos de transação e preferências estratégica;blue;habilidades;blue;0,2;2100;1620;ellipse;;;;;nodes;;70;;@' +
	'10002;habilidade;Administração de empresas;Gestão;Gestão de projetos;Análise de valor agregado de projetos;1002;Dimensionamento dos benefícios e resultados esperados de projetos;blue;habilidades;blue;0,2;180;600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@' +
	'10003;habilidade;Administração de empresas;Gestão;Gestão de projetos;Desenvolvimento de cronogramas;1002;Criação de planos de metas e definição do tempo necessário ao cumprimento das atividades ligadas a um projeto;blue;habilidades;blue;0,2;180;480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@' +
	'10005;habilidade;Administração de empresas;Gestão;Gestão de projetos;Planejamento de projetos;1002;Desenvolvimento de planos de projetos, incluindo Escopos, objetivos, cronogramas, orçamentos e avaliação do esforço necessário.;blue;habilidades;blue;0,2;600;600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@' +
	'10006;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gerência de projeto;1002;Gestão de todo o processo de um projeto, incluindo custos, qualidade, recursos humanos e comunicações;blue;habilidades;blue;0,2;1020;600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@' +
	'10004;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gerênciamento de riscos de projetos;1002;Identificação de obstáculos e riscos de projetos e definição de ações para a mitigação dos mesmos;blue;habilidades;blue;0,2;1020;480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gerência_de_projetos;@' +
	'10368;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gestão de crises;1002;Criação de planos para mitigação de eventuais crises e situações adversas com que a empresa possa se deparar;blue;habilidades;blue;0,2;1440;600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Plano_de_conting%C3%AAncia;Gestão de crises@' +
	'10172;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gestão de mudanças;1002;Condução de processos de mudança organizacional, integrando novos processos e levando em consideração suas características e o ambiente em que ocorrerá;blue;habilidades;blue;0,2;1440;480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_mudan%C3%A7a;@' +
	'10008;habilidade;Administração de empresas;Gestão;Governança corporativa;Relacionamento com órgãos reguladores;1004;Atendimento a demandas e gestão de relacionamento com órgãos regulatórios;blue;habilidades;blue;0,2;180;260;ellipse;;;;;nodes;;70;;@' +
	'10009;habilidade;Administração de empresas;Gestão;Governança corporativa;Gestão de comitês;1004;Organização e condução de comitês e conselhos, criação de pautas e atas;blue;habilidades;blue;0,2;180;140;ellipse;;;;;nodes;;70;;@' +
	'10010;habilidade;Administração de empresas;Gestão;Governança corporativa;Definição de alçadas de decisão;1004;Estruturação e definição das alçadas de tomada de decisões corporativas;blue;habilidades;blue;0,2;600;260;ellipse;;;;;nodes;;70;;@' +
	'10201;habilidade;Administração de empresas;Gestão;Governança corporativa;Gestão fiduciária;1004;Gestão de empresas e criação de instrumentos para mitigação de conflitos entre acionistas e gestores;blue;habilidades;blue;0,2;600;140;ellipse;;;;;nodes;;70;;@' +
	'10789;habilidade;Administração de empresas;Gestão;Governança corporativa;Estruturação de programa de compliance;1004;Definição de regras e processos de controle operacional em acordo com a legislação vigente;blue;habilidades;blue;0,2;180;20;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Compliance;lavagem de dinheiro, corrupção, auditoria interna, controles internos@' +
	'10408;habilidade;Administração de empresas;Gestão;Sustentabilidade;Identificação de impactos;1007;Identificação e mensuração dos impactos causados pela operação de uma empresa;blue;habilidades;blue;0,2;1150;260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Impacto_ambiental;Impacto@' +
	'10371;habilidade;Administração de empresas;Gestão;Sustentabilidade;Criação de políticas de responsabilidade;1007;Definição das normas e valores a serem seguidos pela empresa e seus funcionários, visando a não infração de direitos humanos e a promoção do bem estar social;blue;habilidades;blue;0,2;1150;140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Responsabilidade_social_corporativa;CSR, RSC@' +
	'10365;habilidade;Administração de empresas;Gestão;Sustentabilidade;Criação de estratégia sustentável;1007;Desenho de estratégia de negócios baseada nos impactos causados pela atividade no ambiente, nas comunidades que atua e na economia.;blue;habilidades;blue;0,2;1570;260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Desenvolvimento_sustent%C3%A1vel;CSR, Sustentabilidade@' +
	'10013;habilidade;Administração de empresas;Gestão;Sustentabilidade;Gestão da sustentabilidade;1007;Interagir com steakholders de uma operação para minimizar seus impactos ambientais e maximizar os econômico-sociais;blue;habilidades;blue;0,2;1570;140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sustentabilidade;@' +
	'10073;habilidade;Administração de empresas;Marketing;Análise mercadológica;Pesquisa mercadológica;1039;Coleta e interpretação de dados sobre produtos e desejos dos consumidores;blue;habilidades;blue;0,2;-3000;310;ellipse;;;;;nodes;;70;;@' +
	'10423;habilidade;Administração de empresas;Marketing;Análise mercadológica;Análise do comportamento de clientes;1039;Avaliação do processo de tomada de decisão de compra dos clientes para criação de ofertas adaptadas a este comportamento;blue;habilidades;blue;0,2;-3000;190;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Comportamento_do_consumidor;comportamento do consumidor@' +
	'10083;habilidade;Administração de empresas;Marketing;Análise mercadológica;Segmentação de mercado;1039;Criação de segmentos de clientes a partir da definição de suas características;blue;habilidades;blue;0,2;-2580;310;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Segmenta%C3%A7%C3%A3o_de_mercado;Público-alvo@' +
	'10080;habilidade;Administração de empresas;Marketing;Análise mercadológica;Criação de inteligência competitiva;1039;Coleta e análise contínuas de dados sobre desempenho de produtos e concorrentes em um mercado e mapeamento das preferências dos consumidores;blue;habilidades;blue;0,2;-2580;190;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_competitiva;@' +
	'10085;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Relacionamento Público;1040;Comunicação com mercado e coordenação de ações de exposição de marca e de identidade corporativa;blue;habilidades;blue;0,2;-3000;-270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Rela%C3%A7%C3%B5es_p%C3%BAblicas;Engajamento@' +
	'10362;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de material promocional;1040;Criação de material de promoção da empresa e sua oferta, incentivandoa aquisição de produtos e serviços;blue;habilidades;blue;0,2;-3000;-390;ellipse;;;;;nodes;;70;;promoção, banner, panfleto, tickets, vouchers@' +
	'10086;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Organização de eventos;1040;Realização de eventos com programação de atividades, emissão de convites e organização do local;blue;habilidades;blue;0,2;-3000;-510;ellipse;;;;;nodes;;70;;@' +
	'10363;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Desenvolvimento de marca;1040;Criação e gestão de uma marca alinhada aos objetivos da empresa através da definição de sua identidade visual e verbal e de seus atributos mercadológicos;blue;habilidades;blue;0,2;-2580;-270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Branding;Branding, logo, slogan, identidade visual@' +
	'10076;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de plano de comunicação;1040;Estruturação de estratégia para se transmitir uma mensagem específica ao público alvo da empresa utilizando canais de comunicação adequados;blue;habilidades;blue;0,2;-2580;-390;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Plano_de_comunica%C3%A7%C3%A3o;@' +
	'10357;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de campanhas publicitárias;1040;Desenvolvimento de objetivos, seleção de mídias e estruturação das ações que comporão uma campanha;blue;habilidades;blue;0,2;-2580;-510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Campanha_publicit%C3%A1ria;propaganda, veiculação, mídia digital@' +
	'10441;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Marketing de relacionamento;1040;Criação de estrutra para gestão do relacionamento mercadológico com clientes;blue;habilidades;blue;0,2;-2160;-270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Marketing_de_relacionamento;Engajamento@' +
	'10442;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Marketing global;1040;Criação de estratégia mercadológica em nível global, integrando demandas, produção e concorrência em cada mercado para determinação da oferta e poscionamento da empresa;blue;habilidades;blue;0,2;-2160;-390;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Marketing_global;@' +
	'10656;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Implantação de plataforma CRM;1040;Implantação de ferramentas de gestão do relacionamento com clientes;blue;habilidades;blue;0,2;-2160;-510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Customer_relationship_management;@' +
	'10081;habilidade;Administração de empresas;Marketing;Gestão de produto;Desenvolvimento de novos produtos e serviços;1038;Criação de soluções com atributos para suprir demandas identificadas no mercado;blue;habilidades;blue;0,2;-2030;310;ellipse;;;;;nodes;;70;;@' +
	'10424;habilidade;Administração de empresas;Marketing;Gestão de produto;Desesenho de produtos;1038;Criação da identidade visual de produtos, seu aspecto e de sua embalagem;blue;habilidades;blue;0,2;-2030;190;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Design;Design@' +
	'10440;habilidade;Administração de empresas;Marketing;Gestão de produto;Diferenciação de produtos e serviços;1038;Criação de atributos em produtos e serviços que permitam o atendimento a demandas específicas de grupos de consumidores  ;blue;habilidades;blue;0,2;-2030;70;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Diferencia%C3%A7%C3%A3o_(marketing);@' +
	'10082;habilidade;Administração de empresas;Marketing;Gestão de produto;Precificação de produtos e serviços;1038;Definição de preços com base em metodologias como mark-up ou disponibilidade a pagar dos consumidores por atributos;blue;habilidades;blue;0,2;-1610;310;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Pre%C3%A7o;@' +
	'10356;habilidade;Administração de empresas;Marketing;Gestão de produto;Criação de promoções;1038;Desenvolvimento de ações de redução de preços para alavancar as vendas de produtos e serviços;blue;habilidades;blue;0,2;-1610;190;ellipse;;;;;nodes;;70;;Desconto, queima de estoque, sales@' +
	'10361;habilidade;Administração de empresas;Marketing;Gestão de produto;Gamificação de produtos e serviços;1038;Utilização de conceitos de jogos no desenvolvimento dos produtos e serviços da empresa, visando o aumento do engajamento e retenção de clientes;blue;habilidades;blue;0,2;-1610;70;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ludifica%C3%A7%C3%A3o;Gamification, ludificação@' +
	'10654;habilidade;Administração de empresas;Marketing;Gestão de produto;Projeção de vendas;1038;Criação de modelos de projeção de vendas baseados em premissas qualitativas e quantitativas;blue;habilidades;blue;0,2;-1610;-50;ellipse;;;;;nodes;;70;;@' +
	'10439;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Definição de posicionamento;1041;Definição da posição relativa da empresa e sua oferta no mercado, com base nas características da empresa e do mercado;blue;habilidades;blue;0,2;-1060;310;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Diferencia%C3%A7%C3%A3o_(marketing);@' +
	'10074;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Atração e retenção de clientes;1041;Criação de estratégias para expansão de mercados e manutenção da base de clientes atuais;blue;habilidades;blue;0,2;-1060;190;ellipse;;;;;nodes;;70;;@' +
	'10360;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Criação de plano de marketing;1041;Criação de plano listando e fundamentando os objetivos mercadológicos de uma empresa e as ações necessárias para atingi-los;blue;habilidades;blue;0,2;-1060;70;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Plano_de_marketing;Estratégia de marketing@' +
	'10077;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de canais;1041;Definição e controle dos canais a serem empregados pela empresa para distribuir seus produtos e serviços;blue;habilidades;blue;0,2;-640;310;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_%28log%C3%ADstica%29;@' +
	'10078;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de mix de produtos;1041;Determinação do mix de ofertas da empresa, com foco de atender a todos os segmentos selecionados e maximizar o valor dos negócios;blue;habilidades;blue;0,2;-640;190;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Produto_%28marketing%29;@' +
	'10317;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de campanhas;1041;Acompanhamento do desempenho de campanhas e criação de ações corretivas;blue;habilidades;blue;0,2;-640;70;ellipse;;;;;nodes;;70;;@' +
	'10316;habilidade;Administração de empresas;Marketing;Marketing digital;Criação de campanhas digitais;1061;Criação de campanhas em plataformas digitais de marketing, como Google Ads e Facewords;blue;habilidades;blue;0,2;-770;-270;ellipse;;;;;nodes;;70;;@' +
	'10354;habilidade;Administração de empresas;Marketing;Marketing digital;Análise do uso de sites;1061;Utilização de plataformas de análise do comportamento de usuários de websites para obtenção de informações sobre conversão e identificação de ações de melhora;blue;habilidades;blue;0,2;-1610;-270;ellipse;;;;;nodes;;70;;Google analytics, SEO@' +
	'10355;habilidade;Administração de empresas;Marketing;Marketing digital;Otimização para sistema de busca;1061;Utilização de estratégias para aumento da relevância de um site como resultado de uma busca baseadas nos critérios de classificação utilizados pelos sistemas de buscas;blue;habilidades;blue;0,2;-1610;-390;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Otimiza%C3%A7%C3%A3o_para_motores_de_busca;SEO@' +
	'10358;habilidade;Administração de empresas;Marketing;Marketing digital;Marketing de sistemas de busca;1061;Criação de planos de marketing baseados em aumento da relevância da oferta em sistemas de busca;blue;habilidades;blue;0,2;-1190;-270;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Palavra-chave_(marketing_de_pesquisa);SEM, adwords@' +
	'10359;habilidade;Administração de empresas;Marketing;Marketing digital;Marketing de redes sociais;1061;Criação de planos de marketing baseados em ofertas direcionadas a perfis de clientes identificados em redes sociais;blue;habilidades;blue;0,2;-1190;-390;ellipse;;;;;nodes;;70;;Faceads@' +
	'10437;habilidade;Administração de empresas;Marketing;Marketing digital;Marketing de conteúdo;1061;Criação de conteúdo para reforçar a propsota de valor e o poscionamento de uma marca ou produto e aumentar o engajamento de clientes;blue;habilidades;blue;0,2;-1190;-510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Marketing_de_conte%C3%BAdo;Blog, youtuber@' +
	'10438;habilidade;Administração de empresas;Marketing;Marketing digital;Growth Hacking;1061;Criação e teste de iniciativas de alavancagem do crescimento e utilização de um produto;blue;habilidades;blue;0,2;-770;-390;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Growth_hacking;hacker de crescimento@' +
	'10655;habilidade;Administração de empresas;Marketing;Marketing digital;Mobile marketing;1061;Desenvolvimento de ações de marketing focadas em seu consumo em aparelhos celulares;blue;habilidades;blue;0,2;-770;-510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mobile_marketing;@' +
	'10768;habilidade;Administração de empresas;Marketing;Marketing digital;Monetização de produtos;1061;Criação de estratégias para geração de receita por produtos e serviços até então gratuitos;blue;habilidades;blue;0,2;-1610;-510;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Monetiza%C3%A7%C3%A3o;monetization@' +
	'10398;habilidade;Administração de empresas;Operações;Administração de sistemas;Planejamento de sistemas;1062;Planejamento do uso eficiente de recursos técnológicos garantindo o funcionamento pleno da operação da empresa;blue;habilidades;blue;0,2;-2580;-1420;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico_de_sistemas_de_informa%C3%A7%C3%A3o;sistemas de informação, estratégia@' +
	'10399;habilidade;Administração de empresas;Operações;Administração de sistemas;Dimensionamento de infraestrutura técnológica;1062;Determinação da quantidade e qualidade de recursos técnológicos a serem utilizados na operação da empresa;blue;habilidades;blue;0,2;-3000;-1420;ellipse;;;;;nodes;;70;;Banda, Projeto de rede, projeto de informática@' +
	'10400;habilidade;Administração de empresas;Operações;Administração de sistemas;Implantação de sistema de gestão integrado;1062;Implantação e operação de sistema integrado de informações de gestão;blue;habilidades;blue;0,2;-2160;-1420;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial;ERP@' +
	'10011;habilidade;Administração de empresas;Operações;Gestão de operações;Criação e revisão de processos;1005;Determinar passos e atividades necessárias para o atingimento de um objetivo;blue;habilidades;blue;0,2;-3000;-860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo;@' +
	'10313;habilidade;Administração de empresas;Operações;Gestão de operações;Mapeamento de processos;1005;Identificação e registro do fluxo de processos envolvidos nas diversas atividades da empresa;blue;habilidades;blue;0,2;-3000;-980;ellipse;;;;;nodes;;70;;@' +
	'10012;habilidade;Administração de empresas;Operações;Gestão de operações;Determinação de níveis de eficiência;1005;Ajustar processos e recursos para a entrega de um nível de eficiência planejado;blue;habilidades;blue;0,2;-2580;-860;ellipse;;;;;nodes;;70;;@' +
	'10314;habilidade;Administração de empresas;Operações;Gestão de operações;Métricas de performance;1005;Desenvolvimento e análise de índices representativos do desempenho de uma operação ou empresa;blue;habilidades;blue;0,2;-2580;-980;ellipse;;;;;nodes;;70;;KPI, Performance metrics, Indicadores chave de performance, métrica@' +
	'10015;habilidade;Administração de empresas;Operações;Gestão de operações;Planejamento operacional;1005;Determinar e otimizar a quantidade de recursos necessários a uma operação, desenhar e encadear processos envolvidos;blue;habilidades;blue;0,2;-2160;-860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Planejamento_operacional;@' +
	'10443;habilidade;Administração de empresas;Operações;Gestão de operações;Planejamento de produção;1005;Definição do nível ótimo de produção a partir de informações de demanda e custo;blue;habilidades;blue;0,2;-2160;-980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Produ%C3%A7%C3%A3o;@' +
	'10315;habilidade;Administração de empresas;Operações;Gestão de operações;Terceirização de mão de obra;1005;Desenvolvimento de projetos de terceirização de processose de pessoal;blue;habilidades;blue;0,2;-1740;-980;ellipse;;;;;nodes;;70;;@' +
	'10370;habilidade;Administração de empresas;Operações;Gestão de operações;Gestão de resíduos;1005;Determinação dos tipos de resíduos gerados pelos processos da empresa e da maneira mais economicamente sustentável de dispor deles;blue;habilidades;blue;0,2;-1740;-860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_integrada_de_res%C3%ADduos_s%C3%B3lidos;Reciclagem, sustentabilidade, pegada de carbono, lixo@' +
	'10401;habilidade;Administração de empresas;Operações;Logística;Gestão de estoques;1063;Determinação de níveis de estoques a serem mantidos e tamanho dos armazéns a serem utilizados para garantir a operação da empresa;blue;habilidades;blue;0,2;-1190;-860;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estoque;WMS, Warehouse management@' +
	'10402;habilidade;Administração de empresas;Operações;Logística;Gestão de transportes;1063;Definição de rotas e carregamentos para reduzir os custos do processo de entrega de mercadorias;blue;habilidades;blue;0,2;-1190;-980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos;@' +
	'10403;habilidade;Administração de empresas;Operações;Logística;Planejamento de recursos;1063;Dimensionamento da necessidade de insumos para a produção;blue;habilidades;blue;0,2;-1190;-1100;ellipse;;;;;nodes;;70;;ERP, Resource planning@' +
	'10071;habilidade;Administração de empresas;Operações;Logística;Otimização logística;1063;Redução dos custos e aumento da eficiência na movimentação de recursos e bens;blue;habilidades;blue;0,2;-770;-860;ellipse;;;;;nodes;;70;;@' +
	'10369;habilidade;Administração de empresas;Operações;Logística;Planejamento de produção global;1063;Criação de plano de produção e logística global, aproveitando benefícios e vantagens comparativas regionais para maximização da competitividade da empresa;blue;habilidades;blue;0,2;-770;-980;ellipse;;;;;nodes;;70;;Mundial, otimização@' +
	'10404;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de linha de montagem;1064;Criação e implantação de processos produtivos baseados em linha de montagem;blue;habilidades;blue;0,2;-3000;-1200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Linha_de_produ%C3%A7%C3%A3o;Ford, assembly line, linha de produção@' +
	'10405;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de Kanban;1064;Criação e implantação de controle de processos produtivos utilizando Kanbans;blue;habilidades;blue;0,2;-2580;-1200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Kanban;Toyota@' +
	'10406;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de modelo de produção JIT;1064;Criação e implantação de processos produtivos baseados na metodologia Just in Time;blue;habilidades;blue;0,2;-2160;-1200;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Just_in_time;Just in time@' +
	'10087;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Gestão da folha de pagamentos;1044;Cálculo e controle de pagamentos de vencimentos, e geração de demonstrativos dos valores;blue;habilidades;blue;0,2;1150;-320;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Folha_de_pagamento;Holerite@' +
	'10088;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Criação de planos de carreiras;1044;Desenvolvimento de planos de progressão de carreira vinculados a metas;blue;habilidades;blue;0,2;1150;-440;ellipse;;;;;nodes;;70;;plano de carreira@' +
	'10095;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Avaliação de clima interno;1044;Pesquisa e determinação da satisfação dos funcionários com o ambiente de trabalho;blue;habilidades;blue;0,2;1150;-560;ellipse;;;;;nodes;;70;;Qualidade de vida, satisfação profissional@' +
	'10091;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Gestão de remuneração e benefícios;1044;Definição de pacotes de remuneração e benefícios por cargos a partir de estudos de mercado e interações com funcionários;blue;habilidades;blue;0,2;1570;-320;ellipse;;;;;nodes;;70;;salário@' +
	'10410;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Criação de estratégia de atração e retenção;1044;Criação de plano para oferta de condições mais competitivas de trabalho para maximização do capital humano;blue;habilidades;blue;0,2;1570;-440;ellipse;;;;;nodes;;70;;@' +
	'10412;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Seleção de candidatos;1045;Divulgação de vagas, pesquisa e triagem incial de candidatos;blue;habilidades;blue;0,2;1150;-780;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;@' +
	'10090;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Realização de processos seletivos;1045;Condução de atividades de processo de seleção de pessoas, como aplicação de provas, dinâmicas de grupo e entrevistas;blue;habilidades;blue;0,2;1150;-900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;@' +
	'10413;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Contratação;1045;Condução de processos burocráticos de contratação de funcionários;blue;habilidades;blue;0,2;1570;-780;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;Contratação@' +
	'10414;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Desligamento;1045;Condução de processos burocráticos de desligamento de funcionários;blue;habilidades;blue;0,2;1570;-900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;Demissão, justa causa@' +
	'10096;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Definição de mandatos e cargos;1046;Especificação de mandatos de cargos e funções;blue;habilidades;blue;0,2;180;-320;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrutura_organizacional;@' +
	'10097;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Criação de organogramas;1046;Criação de mapas de cargos e funções de uma empresa;blue;habilidades;blue;0,2;180;-440;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrutura_organizacional;@' +
	'10171;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Definição de estrutura organizacional;1046;Definição de melhor estrutura organizacional para cada modelo e momento de negócio;blue;habilidades;blue;0,2;600;-320;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrutura_organizacional;@' +
	'10657;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Análise organizacional;1046;Avaliação da estrutura hierárquica e da organização de responsabilidades e funções de uma empresa;blue;habilidades;blue;0,2;600;-440;ellipse;;;;;nodes;;70;;@' +
	'10092;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Treinamento de recursos humanos;1066;Identificação de necessidade e criação de programas de capacitação de funcionários;blue;habilidades;blue;0,2;180;-780;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Treinamento;@' +
	'10089;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Coaching;1066;Acompanhamento individual de colaboradores e prestação de apoio ao seu desenvolvimento;blue;habilidades;blue;0,2;180;-900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Coaching;@' +
	'10094;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Gestão de metas;1066;Definição e acompanhamento de metas de cargos e funções;blue;habilidades;blue;0,2;180;-1020;ellipse;;;;;nodes;;70;;@' +
	'10415;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Avaliação de performance;1066;Condução de processos de avaliação do desempenho de funcionários;blue;habilidades;blue;0,2;600;-780;ellipse;;;;;nodes;;70;;@' +
	'10416;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Gestão por competências;1066;Criação de planos de desenvolvimento individual baseados na identificação de competências necessárias e a desenvolver;blue;habilidades;blue;0,2;600;-900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_por_compet%C3%AAncias;@' +
	'10658;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Gestão de conhecimento;1066;Mapeamento e desenvolvimento do conhecimento organizacional de maneira a facilitar a operação da empresa;blue;habilidades;blue;0,2;600;-1020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_do_conhecimento;@' +
	'10659;habilidade;Ciências contábeis;Auditoria;;Auditoria interna;167;Avaliação contínua de controles, contas e processos com intuito de identificação de fraudes e confiabilidade dos números gerados pela companhia;blue;habilidades;blue;0,2;3840;1340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Auditoria_interna;@' +
	'10660;habilidade;Ciências contábeis;Auditoria;;Auditoria externa;167;Avaliação periódica de demonstrativos financeiros e das informações que os geraram com intuito de detecção de fraudes;blue;habilidades;blue;0,2;3840;1220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Auditoria_externa;@' +
	'10661;habilidade;Ciências contábeis;Auditoria;;Avaliação de controles internos;167;Avaliação da capacidade de geração de informações dos processos e políticas contábeis de uma empresa, em acordo com as normas aceitas ;blue;habilidades;blue;0,2;3420;1340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Controle_interno;@' +
	'10662;habilidade;Ciências contábeis;Auditoria;;Redação de pareceres contábeis;167;Criação de documentos atestando ou não a confiabilidade das informações financeiras geradas por determinada empresa;blue;habilidades;blue;0,2;3840;1100;ellipse;;;;;nodes;;70;;@' +
	'10663;habilidade;Ciências contábeis;Auditoria;;Análise de plano de contas;167;Avaliação dos critérios de classificação de contas contábeis;blue;habilidades;blue;0,2;3000;1340;ellipse;;;;;nodes;;70;;@' +
	'10664;habilidade;Ciências contábeis;Auditoria;;Criação de matriz de riscos;167;Criação de modelo de avaliação de riscos contábeis em função de sua frequência e severidade;blue;habilidades;blue;0,2;3420;1220;ellipse;;;;;nodes;;70;;@' +
	'10665;habilidade;Ciências contábeis;Auditoria;;Definição de amostragem contábil;167;Criação de critérios técnicos para a avaliação de uma amostra de demonstrativos que possa ser considerado como representativo da totalidade das demonstrações financeiras de uma empresa;blue;habilidades;blue;0,2;3000;1220;ellipse;;;;;nodes;;70;;@' +
	'10666;habilidade;Ciências contábeis;Auditoria;;Estratificação de informações contábeis;167;Criação de subdivisões de informações com o intuito de compartimentalizar possiveis fraudes e distorções contábeis;blue;habilidades;blue;0,2;3000;1100;ellipse;;;;;nodes;;70;;@' +
	'10667;habilidade;Ciências contábeis;Auditoria;;Perícia contábil;167;Realização de análise técnica de demonstrativos e da legislação utilizada para sua criação com objetivo de tomada de decisão;blue;habilidades;blue;0,2;4260;1340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Per%C3%ADcia_cont%C3%A1bil;@' +
	'10668;habilidade;Ciências contábeis;Auditoria;;Auditoria Contábil;167;Avaliação dos processos e dos registros para geração de informações contábeis;blue;habilidades;blue;0,2;4260;1220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Auditoria_cont%C3%A1bil;@' +
	'10669;habilidade;Ciências contábeis;Auditoria;;Auditoria Fiscal;167;Avaliação das fontes de informações, processos,  cálculos e pagamentos de tributos de acordo com as regras vigentes ;blue;habilidades;blue;0,2;4260;1100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Auditoria_fiscal;@' +
	'10674;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Consultoria contábil;1092;Avaliação de processos e práticas contábeis e sugestão de melhoria;blue;habilidades;blue;0,2;5230;2500;ellipse;;;;;nodes;;70;;@' +
	'10675;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade agropecuária;1092;Contabilização específica de ativos e passivos rurais, seguindo normas específicas;blue;habilidades;blue;0,2;5230;2380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_rural;Pastoril, criacional, agrária@' +
	'10676;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade ambiental;1092;Contabilização de bens, obrigações e direitos ambientais em termos monetários;blue;habilidades;blue;0,2;5230;2260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_ambiental;@' +
	'10677;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade pública;1092;Contabilização do patrimônio sob responsabilidade de organizações públicas, em acordo com as regras vigentes de gestão pública;blue;habilidades;blue;0,2;5230;2140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_p%C3%BAblica;@' +
	'10678;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade financeira;1092;Contabilização de bens, direitos e obrigações com o objetivo da realização do controle financeiro de uma empresa;blue;habilidades;blue;0,2;5230;2020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_financeira;Controladoria@' +
	'10679;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade imobiliária;1092;Contabilização de ativos imóveis, sua valorização e registros de alterações;blue;habilidades;blue;0,2;5230;1900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_imobili%C3%A1ria;@' +
	'10680;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade internacional;1092;Contabilização de ativos localizados internacionalmente em acordo com as regulamentações locais e criação de regras de consolidação dessas demonstrações;blue;habilidades;blue;0,2;5230;1780;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_internacional;@' +
	'10681;habilidade;Ciências contábeis;Contabilidade;Aplicações contábeis;Contabilidade tributária;1092;Contabilização dos tributos devidos pelas empresas a partir dos lançamentos dos fatos geradores da tributação e das aliquotas de imposto;blue;habilidades;blue;0,2;5230;1660;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_tribut%C3%A1ria;@' +
	'10670;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade societária;1018;Determinação de valores detidos por cada integrante da sociedade após reestruturações;blue;habilidades;blue;0,2;4680;2500;ellipse;;;;;nodes;;70;;@' +
	'10671;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Cálculo de equivalência patrimonial;1018;Atualização dos valores derivados de investimentos em companhias e seu impacto em demonstrativos de resultados;blue;habilidades;blue;0,2;4260;2500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/M%C3%A9todo_da_equival%C3%AAncia_patrimonial;@' +
	'10672;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Criação de relatórios de administração;1018;Criação de relatórios executivos apresentando as demonstrações financeiras de um período bem como os comentários do corpo executivo da empresa sobre a sua situação;blue;habilidades;blue;0,2;4680;2380;ellipse;;;;;nodes;;70;;@' +
	'10673;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade de extinção;1018;Contabilização de eventos de extinção de sociedades como dissolução, liquidação e incorporação;blue;habilidades;blue;0,2;4680;2260;ellipse;;;;;nodes;;70;;@' +
	'10101;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de custos;1018;Determinação e alocação dos custos de uma empresa de acordo com normativos pré determinados;blue;habilidades;blue;0,2;3420;2380;ellipse;;;;;nodes;;70;;@' +
	'10102;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de receitas;1018;Reconhecimento e alocação das receitas de uma empresa de acordo com normas e regimes determinados;blue;habilidades;blue;0,2;3420;2500;ellipse;;;;;nodes;;70;;@' +
	'10103;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de resultados;1018;Determinação do resultado de uma empresa a partir de receitas e custos;blue;habilidades;blue;0,2;3840;2500;ellipse;;;;;nodes;;70;;@' +
	'10104;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Gestão Contábil;1018;Realização de todas as rotinas contábeis como lançamento de notas fiscais, geração de demonstrativos e controle de contas a pagar/ receber;blue;habilidades;blue;0,2;4680;2020;ellipse;;;;;nodes;;70;;@' +
	'10105;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização fiscal brasileira;1018;Determinação de impostos a serem pagos e créditos tributários gerados por uma empresa, partindo das bases de cálculo e alíquotas estipuladas na lei brasileira;blue;habilidades;blue;0,2;3420;2020;ellipse;;;;;nodes;;70;;@' +
	'10106;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização básica;1018;Utilização de conceitos contábeis básicos: ativo, passivo, contas T, demonstrativos contábeis;blue;habilidades;blue;0,2;3000;2500;ellipse;;;;;nodes;;70;;@' +
	'10107;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Montagem de demonstrativos financeiros;1018;Fechamento de demonstrativos financeiros de uma empresa: Balanço, DRE, Fluxo de caixa;blue;habilidades;blue;0,2;3000;2380;ellipse;;;;;nodes;;70;;@' +
	'10219;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em IFRS;1018;Realização de lançamentos contábeis de acordo com as normas internacionais de contabilidade estipuladas pelo IASB;blue;habilidades;blue;0,2;4260;2140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/International_Financial_Reporting_Standards;@' +
	'10220;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em US GAAP;1018;Realização de lançamentos contábeis de acordo com as normas de contabilidade geralmente aceitas nos EUA;blue;habilidades;blue;0,2;4260;2260;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Generally_Accepted_Accounting_Principles_(United_States);@' +
	'10221;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em BR GAAP;1018;Realização de lançamentos contábeis de acordo com as normas geralmente aceitas no Brasil;blue;habilidades;blue;0,2;4260;2380;ellipse;;;;;nodes;;70;;@' +
	'10222;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de itens extraordinários;1018;Contabilização e tratamento correto de lançamentos de intangíveis, provisões e demais itens não recorrentes da operação de uma empresa;blue;habilidades;blue;0,2;3840;2260;ellipse;;;;;nodes;;70;;@' +
	'10223;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de ativos;1018;Contabilização de itens de ativo, circulante ou permanente, de acordo com as normas internas e regulações vigentes;blue;habilidades;blue;0,2;3000;2260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ativo;@' +
	'10224;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de estoques;1018;Contabilização de ativos operacionais e sua transformação de acordo com métodos existentes (PEPS/UEPS);blue;habilidades;blue;0,2;3000;2020;ellipse;;;;;nodes;;70;;@' +
	'10225;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de depreciação;1018;Tratamento do valor contábil de ativos de acordo com sua utilização e com as regulações existentes;blue;habilidades;blue;0,2;3420;2140;ellipse;;;;;nodes;;70;;@' +
	'10226;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de investimentos;1018;Contabilização e consolidação de ativos permanentes de acordo com seu valor e estrutura de investimento;blue;habilidades;blue;0,2;3000;2140;ellipse;;;;;nodes;;70;;@' +
	'10227;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de fluxo de caixa;1018;Contabilização de itens de fluxo de caixa e correta determinação de seu valor, utilizando os métodos direto ou indireto;blue;habilidades;blue;0,2;3840;2500;ellipse;;;;;nodes;;70;;@' +
	'10108;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização bancária;1019;Contabilização de empresas do setor bancário, contemplando as regras específicas por produto e empresa;blue;habilidades;blue;0,2;4260;1800;ellipse;;;;;nodes;;70;;@' +
	'10109;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização de seguros;1019;Cálculo e registro de operações de seguros, suas provisões e resultados;blue;habilidades;blue;0,2;3420;1800;ellipse;;;;;nodes;;70;;@' +
	'10110;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização de operações de leasing;1019;Cálculo e registro de operações de leasing, seus resultados e tributação;blue;habilidades;blue;0,2;3840;1800;ellipse;;;;;nodes;;70;;@' +
	'10323;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Conciliação contábil;1019;Criação de provisões e ajustes para lançamentos com efetivação em data diferente de sua execução;blue;habilidades;blue;0,2;3000;1800;ellipse;;;;;nodes;;70;;@' +
	'10111;habilidade;Ciências contábeis;Contabilidade;Contabilidade pessoal;Contabilização de IRPF;1020;Determinação do Imposto de Renda de Pessoa Física a ser pago ou restituído;blue;habilidades;blue;0,2;3000;1580;ellipse;;;;;nodes;;70;;@' +
	'10228;habilidade;Ciências contábeis;Contabilidade;Contabilidade pessoal;Contabilização previdenciária;1020;Contabilização do valor e benefício tributário do investimento nas diversas modalidades de planos de previdência;blue;habilidades;blue;0,2;3420;1580;ellipse;;;;;nodes;;70;;@' +
	'10392;habilidade;Ciência política;;;Análise política;14;Análise da conjuntura política de um país, identificando tendências, oportunidades e riscos para empresas e cidadãos;blue;habilidades;blue;0,2;-5500;500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ci%C3%AAncia_pol%C3%ADtica;risco político, revolução, eleições@' +
	'10393;habilidade;Ciência política;;;Análise de política externa;14;Análise das políticas e relações externas de um governo, identificando tendências e potenciais impactos decorrentes;blue;habilidades;blue;0,2;-5080;500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ci%C3%AAncia_pol%C3%ADtica;@' +
	'10394;habilidade;Ciência política;;;Análise política global;14;Análise das relações entre governos e seus respectivos sistemas políticos, identificando tendências, oportunidades e riscos;blue;habilidades;blue;0,2;-4660;500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ci%C3%AAncia_pol%C3%ADtica;risco político, revolução, eleições@' +
	'10682;habilidade;Ciência política;;;Análise de risco político;14;Avaliação do cenário político e potenciais riscos de descontinuidade ou de impactos de manutenção de politicas;blue;habilidades;blue;0,2;-5500;380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Risco-pa%C3%ADs#Risco_pol.C3.ADtico;@' +
	'10683;habilidade;Ciência política;;;Análise de sistema político;14;Avaliação das intituições de representação da sociedade nas esferas políticas;blue;habilidades;blue;0,2;-5080;380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Forma_de_governo;@' +
	'10684;habilidade;Ciência política;;;Projeção de cenário político;14;Criação de cenários de desenvolvimento de políticas e seus impactos;blue;habilidades;blue;0,2;-4660;380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Pol%C3%ADtica;@' +
	'10238;habilidade;Direito;Direito administrativo;;Análise institucional;129;Análise da eficiência e do funcionamento de instituições públicas com relação a seu papel;blue;habilidades;blue;0,2;-4570;-2460;ellipse;;;;;nodes;;70;;@' +
	'10239;habilidade;Direito;Direito administrativo;;Desenho institucional;129;Criação de normativos para regular o correto funcionamento de instituições públicas;blue;habilidades;blue;0,2;-4150;-2460;ellipse;;;;;nodes;;70;;@' +
	'10324;habilidade;Direito;Direito administrativo;;Análise de políticas públicas;129;Análise do impacto de leis e normativos nas esferas a que dizem respeito;blue;habilidades;blue;0,2;-3730;-2460;ellipse;;;;;nodes;;70;;@' +
	'10699;habilidade;Direito;Direito civil;;Análise de capacidade civil;111;Análise da capacidade de fato dos envolvidos de acordo com o direito civil e suas consequências fáticas e jurídicas em cada caso;blue;habilidades;blue;0,2;-2590;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Capacidade_jur%C3%ADdica;@' +
	'10700;habilidade;Direito;Direito civil;;Análise de negócios jurídicos;111;Análise de conformidade jurídica dos mais diversos negócios jurídicos (estipulações de vontade com consequências jurídicas), tais quais manifestações de vontade unilaterais (doação),  bilaterais (contratos em geral) e plurilaterais em todas as suas formas, englobando os planos de existência, validade e eficácia, incluindo todos princípios e regras aplicáveis;blue;habilidades;blue;0,2;-2590;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Neg%C3%B3cio_jur%C3%ADdico;@' +
	'10701;habilidade;Direito;Direito civil;;Estruturação de negócios jurídicos;111;Estruturação e alteração jurídica dos mais diversos negócios jurídicos, tais quais manifestações de vontade unilaterais (doação, etc),  bilaterais (contratos em geral, etc) e plurilaterais em todas as suas formas, com atenção aos planos de existência, validade e eficácia, obtendo segurança jurídica e atendimento pleno dos interesses buscados com o negócio;blue;habilidades;blue;0,2;-3010;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Neg%C3%B3cio_jur%C3%ADdico;@' +
	'10702;habilidade;Direito;Direito civil;;Análise de responsabilidade civil;111;Análise de responsabilização civil, desde a correta atribuição da mesma, até sua quantificação, identificação da responsabilização cabível por dano patrimonial, extrapatrimonial, perda de uma chance, dano social, ou quaisquer outros cabíveis;blue;habilidades;blue;0,2;-3010;-2120;ellipse;;;;;nodes;;70;;@' +
	'10703;habilidade;Direito;Direito civil;;Análise de obrigações civís;111;Análise de normas que regem as relações jurídicas de ordem patrimonial, dos vínculos entre credor e devedor, excluindo de sua órbita relações de uma pessoa para com uma coisa, inclusive as relações jurídicas de natureza pessoal, incluindo regras de transmissão, extinção, perdas e danos, efeitos, direitos e deveres dos obrigados;blue;habilidades;blue;0,2;-2170;-2000;ellipse;;;;;nodes;;70;;@' +
	'10704;habilidade;Direito;Direito civil;;Análise de registros públicos;111;Avaliação da validade e do conteúdo dos registros públicos a respeito de uma pessoa ou entidade;blue;habilidades;blue;0,2;-2170;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Registro_civil;@' +
	'10705;habilidade;Direito;Direito civil;;Análise de prescrição e decadência cível;111;Análise das circunstâncias influenciadoras do cálculo da prescrição e decadência, as hipóteses de ocorrência, seus prazos e causas de suspensão e interrupção previstas na lei civil;blue;habilidades;blue;0,2;-1750;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Prescri%C3%A7%C3%A3o;@' +
	'10706;habilidade;Direito;Direito civil;;Análise dos direitos da personalidade;111;Análise dos direitos decorrentes da personalidade, sua aquisição, extinção, proteção, princípios e regras aplicáveis, bem como possibilidade de disposição;blue;habilidades;blue;0,2;-1750;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direitos_da_personalidade;@' +
	'10240;habilidade;Direito;Direito civil;Direito das famílias;Análise de situação conjugal;1053;Análise da situação conjugal dos cônjuges ou companheiros, tendo em vista a regularidade da união, conformidade com a lei, ausência de impedimentos e causas suspensivas, constituição de união estável ou civil, documentação, bem como eventuais alterações na situação da união,  como a separação conjugal;blue;habilidades;blue;0,2;-2020;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estado_civil;@' +
	'10241;habilidade;Direito;Direito civil;Direito das famílias;Análise do regime de bens conjugal;1053;Análise específica dos regimes de bens aplicáveis às mais diversas situações conjugais, com a obtenção de todas as informações relevantes no caso concreto para identificação do regime de bens vigente, e de todas suas consequências e efeitos legais;blue;habilidades;blue;0,2;-2440;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Casamento_civil#Regime_de_bens;@' +
	'10242;habilidade;Direito;Direito civil;Direito das famílias;Estruturação do vínculo conjugal;1053;Realização dos trâmites legais afetos à realização da união conjugal, bem como à alterações no mesmo, como a dissolução do vínculo conjugal;blue;habilidades;blue;0,2;-2860;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Casamento_civil;@' +
	'10243;habilidade;Direito;Direito civil;Direito das famílias;Análise do direto à obtenção de alimentos;1053;Análise dos princípios, regras, pressupostos aplicáveis e das hipóteses em que se pode obter  alimentos, instituto afeto ao direito de família;blue;habilidades;blue;0,2;-2860;-2800;ellipse;;;;;nodes;;70;;@' +
	'10244;habilidade;Direito;Direito civil;Direito das sucessões;Análise de sucessão civil;1054;Análise sucessória de acordo com as regras do direito civil, no que diz respeito à sucessões legais e testamentárias, a sucessão do ausente, e todas regras e princípios aplicáveis aos institutos, vocação hereditária entre os herdeiros, transmissão, aceitação e exclusão do direito à renúncia;blue;habilidades;blue;0,2;-2860;-3020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_civil;@' +
	'10245;habilidade;Direito;Direito civil;Direito da propriedade;Análise dos direitos decorrentes da propriedade;1052;Análise dos direitos decorrentes da propriedade privada, sua aquisição, extinção, proteção, princípios e regras aplicáveis, bem como formas de intervenção na propriedade;blue;habilidades;blue;0,2;-2860;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'10246;habilidade;Direito;Direito civil;Direito da propriedade;Análise de direitos da vizinhança;1052;Análise dos direitos e deveres decorrentes da vizinhança civil, compreendendo os atos ilegais, abusivos, lesivos, permitidos, passagens forçadas, ambientes divisórios, direitos de construção, etc.;blue;habilidades;blue;0,2;-2440;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'10247;habilidade;Direito;Direito civil;Direito da propriedade;Análise de relações condominiais;1052;Análise das regras e princípios nas relações entre condôminos, incluindo condomínio voluntário, edilício e necessário, sua constituição, extinção e modificação;blue;habilidades;blue;0,2;-2020;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'10248;habilidade;Direito;Direito civil;Direito da propriedade;Aplicação dos direitos reais de garantia;1052;Utilização dos direitos reais de garantia, tais quais penhor, hipoteca, anticrese, alienação fiduciária, suas regras, princípios e aplicação;blue;habilidades;blue;0,2;-2860;-2460;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'10707;habilidade;Direito;Direito civil;Direito da propriedade;Análise de direitos autorais;1052;Análise do conjunto de prerrogativas conferidas por lei à pessoa física ou jurídica criadora da obra intelectual, para que ela possa gozar dos benefícios morais e patrimoniais resultantes da exploração de suas criações, e sua proteção de acordo com o direito brasileiro, suas regras e princípios;blue;habilidades;blue;0,2;-2440;-2460;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_de_propriedade;@' +
	'10725;habilidade;Direito;Direito do consumidor;;Análise das relações de consumo;171;Análise das relações de consumo, suas definições  e  características, habilitando-se a indentificá-las e nelas atuar;blue;habilidades;blue;0,2;-6000;-3260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10726;habilidade;Direito;Direito do consumidor;;Análise consumerista da qualidade dos produtos e serviços;171;Análise da qualidade de produtos e serviços ofertados, tendo em vista a proteção oferecida pelo direito do consumidor;blue;habilidades;blue;0,2;-5580;-3260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10727;habilidade;Direito;Direito do consumidor;;Análise consumerista das práticas comerciais de empresas;171;Análise das práticas comerciais, tendo em vista aquelas protegidas e/ou vedadas pelo direito consumerista;blue;habilidades;blue;0,2;-5140;-3260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10728;habilidade;Direito;Direito do consumidor;;Análise consumerista das práticas contratuais de empresas;171;Análise das práticas contratuais, tendo em vista as protegidas e vedadas pelo direito consumerista;blue;habilidades;blue;0,2;-6000;-3380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10729;habilidade;Direito;Direito do consumidor;;Atuação administrativa no Direito do Consumidor;171;Capacidade de atuar administrativamente na defesa dos direitos das partes envolvidas, seja consumidor, fornecedor, vendedor, ou qualquer entidade;blue;habilidades;blue;0,2;-6000;-3500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10730;habilidade;Direito;Direito do consumidor;;Atuação em juízo no Direito do Consumidor;171;Capacidade de atuar judicialmente  na defesa dos direitos das partes envolvidas, seja consumidor, fornecedor, vendedor, ou qualquer entidade;blue;habilidades;blue;0,2;-5580;-3500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10731;habilidade;Direito;Direito do consumidor;;Tutela penal do consumidor;171;Utilização dos tipos penais previstos com o fim de tutelar as relações de consumo;blue;habilidades;blue;0,2;-5580;-3380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10732;habilidade;Direito;Direito do consumidor;;Tutelas coletivas no direito do consumidor;171;Utilização das ações coletivas na dialética jurídica consumerista;blue;habilidades;blue;0,2;-5140;-3380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_consumidor;@' +
	'10121;habilidade;Direito;Direito constitucional;;Análise de constitucionalidade;112;Confrontar leis ou quaisquer atos e fatos jurídicos com os princípios constitucionais diversos, avaliando a aderência  à Carta Maior.;blue;habilidades;blue;0,2;-4570;-2000;ellipse;;;;;nodes;;70;;@' +
	'10692;habilidade;Direito;Direito constitucional;;Análise de aderência às regras constitucionais;112;Confrontar leis ou quaisquer atos e fatos jurídicos com as regras previstas na constituição, tais como competências, atribuições, trâmites, avaliando a aderência  à Carta Maior;blue;habilidades;blue;0,2;-4150;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Constitui%C3%A7%C3%A3o_brasileira_de_1988;@' +
	'10693;habilidade;Direito;Direito constitucional;;Manejo de ações de controle de constitucionalidade;112;Elaboração e condução dos instrumentos de controle de constitucionalidade: ADI, ADC, ADPF;blue;habilidades;blue;0,2;-3730;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Controle_de_constitucionalidade;@' +
	'10694;habilidade;Direito;Direito constitucional;;Reforma das leis;112;Proceder à reforma legislativa de maneira legítima e compatível com as regras constitucionais;blue;habilidades;blue;0,2;-4570;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Constitui%C3%A7%C3%A3o_brasileira_de_1988;@' +
	'10695;habilidade;Direito;Direito constitucional;;Aplicação dos direitos e garantias fundamentais;112;Utilizar os direitos e garantias fundamentais nos mais diversos ramos de direito como paradigmas orientadores de  interpretação de normas, elaboração de defesas processuais, julgamentos, bem como quaisquer outras relevantes condutas, jurídicas ou não;blue;habilidades;blue;0,2;-3730;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direitos_e_Garantias_Fundamentais_na_Constitui%C3%A7%C3%A3o_do_Brasil;@' +
	'10696;habilidade;Direito;Direito constitucional;;Aplicação dos demais princípios e garantias constitucionais;112;Utilizar os princípios e garantias constitucionais em geral nos mais diversos ramos de direito como paradigmas orientadores de  interpretação de normas, elaboração de defesas processuais, julgamentos, bem como quaisquer outras relevantes condutas, jurídicas ou não;blue;habilidades;blue;0,2;-4570;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direitos_e_Garantias_Fundamentais_na_Constitui%C3%A7%C3%A3o_do_Brasil;@' +
	'10697;habilidade;Direito;Direito constitucional;;Manejo das ações constitucionais;112;Elaboração e condução dos remédios constitucionais em qualquer ramo do direito: Habeas Corpus, Mandado de Segurança, Habeas Data e Mandado de Injunção;blue;habilidades;blue;0,2;-4150;-2120;ellipse;;;;;nodes;;70;;@' +
	'10698;habilidade;Direito;Direito constitucional;;Obtenção e perdimento de nacionalidade;112;Atuação em ações afetas à nacionalidade e naturalização;blue;habilidades;blue;0,2;-4150;-2240;ellipse;;;;;nodes;;70;;@' +
	'10395;habilidade;Direito;Direito empresarial;;Estruturação de parcerias;111;Definição das responsabilidades e direitos das partes em um processo de parceria corporativa;blue;habilidades;blue;0,2;-3730;-2680;ellipse;;;;;nodes;;70;;Joint venture, partnership@' +
	'10733;habilidade;Direito;Direito empresarial;;Análise societária;111;Avaliação dos intrumentos reguladores de uma pessoa jurídica e das normas que regem a sociedade;blue;habilidades;blue;0,2;-4570;-2680;ellipse;;;;;nodes;;70;;@' +
	'10734;habilidade;Direito;Direito empresarial;;Constituição legal de pessoas jurídicas;111;Constituição jurídica de pessoas jurídicas abrangendo todos os trâmites legais exigíveis e a produção da documentação necessária;blue;habilidades;blue;0,2;-4150;-2680;ellipse;;;;;nodes;;70;;@' +
	'10113;habilidade;Direito;Direito empresarial;Direito societário;Condução de processo falimentar;1024;Coordenação do processo falimentar, definição do tipo de pedido de falência;blue;habilidades;blue;0,2;-4000;-3020;ellipse;;;;;nodes;;70;;@' +
	'10114;habilidade;Direito;Direito empresarial;Direito societário;Reestruturação societária;1024;Criação e revisão de contratos para a mudança da composição acionária de uma empresa, contemplando acionistas e credores;blue;habilidades;blue;0,2;-4000;-2900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;@' +
	'10115;habilidade;Direito;Direito empresarial;Direito societário;Emissão de novas ações;1024;Criação de peças jurídicas e revisão do contrato social de uma empresa para emissão de novas ações;blue;habilidades;blue;0,2;-3580;-2900;ellipse;;;;;nodes;;70;;@' +
	'10116;habilidade;Direito;Direito empresarial;Direito societário;Emissão de títulos de dívida;1024;Criação e revisão de contratos para a emissão de instrumentos de dívida corporativa;blue;habilidades;blue;0,2;-4000;-3140;ellipse;;;;;nodes;;70;;@' +
	'10117;habilidade;Direito;Direito empresarial;Direito societário;Criação de sociedades;1024;Criação de contratos sociais, acordos de acionistas e demais peças necessárias ao registro de uma Pessoa Jurídica;blue;habilidades;blue;0,2;-4420;-2900;ellipse;;;;;nodes;;70;;@' +
	'10118;habilidade;Direito;Direito empresarial;Direito societário;Estruturação de fundos de investimentos;1024;Criação de contratos e documentos para o registro e funcionamento de fundos de investimentos;blue;habilidades;blue;0,2;-4420;-3140;ellipse;;;;;nodes;;70;;@' +
	'10119;habilidade;Direito;Direito empresarial;Direito societário;Estruturação de fusões e aquisições;1024;Estruturação jurídica de operação de compra e venda de empresas ou ativos corporativos;blue;habilidades;blue;0,2;-4420;-3020;ellipse;;;;;nodes;;70;;@' +
	'10396;habilidade;Direito;Direito empresarial;Direito societário;Estruturação de empresa de capital aberto;1024;Revisão de contratos e instrumentos constitutivos para permitir o funcionamento de uma empresa em regime de capital aberto;blue;habilidades;blue;0,2;-3580;-3140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Empresa_de_capital_aberto;IPO, corporate finance, abertura de capital@' +
	'10397;habilidade;Direito;Direito empresarial;Direito societário;Internacionalização de empresas;1024;Abertura de subsidiárias e revisão de instrumentos constitutivos para permitir o funcionamento de uma empresa em países estrangeiros;blue;habilidades;blue;0,2;-3580;-3020;ellipse;;;;;nodes;;70;;Globalização, expansão internacional@' +
	'10229;habilidade;Direito;Direito geral;;Investigação de casos;170;Obtenção de provas, indícios, e demais informações relevantes sobre um caso concreto, de maneira compatível com os princípios do direito aplicável, de forma a utilizá-las no processo e/ou formular estratégias;blue;habilidades;blue;0,2;-5580;-2360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Pesquisa;@' +
	'10230;habilidade;Direito;Direito geral;;Condução de entrevistas pessoais;170;Obtenção de informações relevantes por meio de entrevistas pessoais com partes, testemunhas, informantes, etc;blue;habilidades;blue;0,2;-5160;-2360;ellipse;;;;;nodes;;70;;@' +
	'10231;habilidade;Direito;Direito geral;;Pesquisa normativa;170;Identificação, apresentação e aplicação das leis e normas pertinentes ao caso concreto, de maneira atualizada e intertemporal e considerando sua contextualização histórica ;blue;habilidades;blue;0,2;-5580;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Norma_jur%C3%ADdica;@' +
	'10232;habilidade;Direito;Direito geral;;Pesquisa jurisprudencial;170;Identificação e aplicação da  jurisprudência pertinente ao caso concreto, de maneira atualizada e considerando sua contextualização histórica;blue;habilidades;blue;0,2;-5160;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Jurisprud%C3%AAncia;@' +
	'10233;habilidade;Direito;Direito geral;;Pesquisa doutrinária;170;Identificação e aplicação da  doutrina pertinente ao caso concreto, de maneira atualizada e considerando sua contextualização histórica;blue;habilidades;blue;0,2;-6000;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Doutrina_jur%C3%ADdica;@' +
	'10234;habilidade;Direito;Direito geral;;Análise normativa;170;Análise crítica das normas aplicáveis, bem como sua aplicação lógica e temporal ao caso concreto;blue;habilidades;blue;0,2;-5580;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Norma_jur%C3%ADdica;@' +
	'10235;habilidade;Direito;Direito geral;;Análise jurisprudencial;170;Análise crítica da jurisprudência aplicável, bem como sua aplicação lógica e temporal ao caso concreto;blue;habilidades;blue;0,2;-5160;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Jurisprud%C3%AAncia;@' +
	'10236;habilidade;Direito;Direito geral;;Análise doutrinária;170;Análise crítica da doutrina pertinente, bem como sua aplicação ao caso concreto, de forma a enriquecer e fundamentar a análise jurídica;blue;habilidades;blue;0,2;-6000;-2360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Doutrina_jur%C3%ADdica;@' +
	'10237;habilidade;Direito;Direito geral;;Elaboração de peças jurídicas;170;Redação de peças jurídicas para manifestação nos processos tais como petições, recursos, entre outros, de forma organizada, compatível com o ordenamento jurídico pátreo, seus princípios e suas peculiaridades;blue;habilidades;blue;0,2;-6000;-2480;ellipse;;;;;nodes;;70;;@' +
	'10685;habilidade;Direito;Direito geral;;Elaboração de legislação;170;Redação de textos normativos coerentes de forma organizada, compatível com o ordenamento jurídico pátreo, seus princípios e suas peculiaridades;blue;habilidades;blue;0,2;-5580;-2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Lei;@' +
	'10686;habilidade;Direito;Direito geral;;Elaboração de sentenças, decisões interlocutórias e despachos;170;Redação das manifestações de um juiz em um processo, de maneira compatível com o ordenamento jurídico pátreo, seus princípios e suas peculiaridades;blue;habilidades;blue;0,2;-5160;-2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Senten%C3%A7a;@' +
	'10687;habilidade;Direito;Direito geral;;Elaboração de contratos;170;Redação de contratos nas suas mais diversas formas, obedecendo às formalidades legais e de forma compatível com os princípios aplicáveis;blue;habilidades;blue;0,2;-6000;-2600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contrato;@' +
	'10688;habilidade;Direito;Direito geral;;Estruturação de acordos jurídicos;170;Estruturação de acordos jurídicos através da obtenção da composição e do consenso entre as partes envolvidas, no contexto da situação jurídica encontrada;blue;habilidades;blue;0,2;-6000;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Acordo;@' +
	'10689;habilidade;Direito;Direito geral;;Raciocínio jurídico;170;Avaliação de situações inseridas no contexto de um processo ou não, pelo hábil cruzamento de dados concretos, legais e jurídicos, com vistas a obtenção de diagnósticos precisos e/ou soluções jurídicas;blue;habilidades;blue;0,2;-6000;-2000;ellipse;;;;;nodes;;70;;Estratégia de formulação de perguntas às testemunhas, otimização da estratégia processual, otimização da estratégia jurídica, interpretação de textos jurídicos, elaboração de artigos jurídicos, identificação de riscos jurídicos, relatórios sobre a situação jurídica,  pareceres e textos jurídicos diversos, fundamentação das decisões e/ou pedidos, julgamento, entre outros.@' +
	'10690;habilidade;Direito;Direito geral;;Prática jurídica;170;Reconhecimento das diferenças entre o teórico e a realidade, adaptando-se a esse contexto;blue;habilidades;blue;0,2;-5580;-2000;ellipse;;;;;nodes;;70;;@' +
	'10691;habilidade;Direito;Direito geral;;Condução processual;170;Atuar durante o trâmite processual de forma compatível com sua posição dentro da relação processual e os princípios aplicáveis, com atenção aos diversos prazos, peças e manifestações cabíveis, medidas processuais, incidentes processuais, produção de provas,  possibilidades e vedações;blue;habilidades;blue;0,2;-5160;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10251;habilidade;Direito;Direito econômico;;Análise econômica do direito;130;Análise do papel econômico do sistema jurídico, suas ineficiências e alavancas;blue;habilidades;blue;0,2;-6000;-3040;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/An%C3%A1lise_econ%C3%B4mica_do_direito;@' +
	'10252;habilidade;Direito;Direito econômico;;Criação de políticas públicas econômicas;130;Criação de políticas públicas com o intuito de fortalecer o sistema econômico do país;blue;habilidades;blue;0,2;-5580;-3040;ellipse;;;;;nodes;;70;;@' +
	'10253;habilidade;Direito;Direito internacional;Direito internacional público;Análise de comunidades internacionais;1055;Análise de acordos internacionais e seus impactos;blue;habilidades;blue;0,2;-2440;-3340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_internacional;@' +
	'10254;habilidade;Direito;Direito internacional;Direito internacional público;Análise de regulação internacional;1055;Observância de regulamentações internacionais na confecção de peças jurídicas;blue;habilidades;blue;0,2;-2860;-3340;ellipse;;;;;nodes;;70;;@' +
	'10255;habilidade;Direito;Direito internacional;Direito internacional privado;Estruturação de acordos Internacionais;1056;Análise e criação de normas para composição de acordos internacionais;blue;habilidades;blue;0,2;-2440;-3560;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_internacional;@' +
	'10256;habilidade;Direito;Direito internacional;Direito internacional privado;Solução de controvérsias;1056;Resolução de disputas internacionais com base nas normas locais e de direito internacional;blue;habilidades;blue;0,2;-2860;-3560;ellipse;;;;;nodes;;70;;@' +
	'10262;habilidade;Direito;Direito penal;;Identificação de tipos penais;136;Identificar as condutas penalmente relevantes perante a sociedade;blue;habilidades;blue;0,2;-1180;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10263;habilidade;Direito;Direito penal;;Tipificação penal;136;Enquadramento adequado do caso concreto ao tipo penal correspondente, em todas suas variáveis;blue;habilidades;blue;0,2;-760;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10264;habilidade;Direito;Direito penal;;Condenação ou internação penal;136;Enquadramento da condenação ou internação penal do(s) acusado(s), no que diz respeito a todos os seus requisitos, as modalidades de pena, seus efeitos penais e extrapenais, efeitos processuais, bem como eventuais efeitos específicos de legislações extravagentes;blue;habilidades;blue;0,2;-340;-2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10265;habilidade;Direito;Direito penal;;Defesa penal;136;Elaboração da defesa penal do acusado, através da aplicação do raciocínio jurídico, doutrina, jurisprudência, legislação penal e seus princípios, processo penal, bem como interpretações diversas e teorias aplicáveis, de forma a obter o melhor resultado;blue;habilidades;blue;0,2;-1180;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10266;habilidade;Direito;Direito penal;;Acusação penal;136;Elaboração e/ou auxílio (assistência) na acusação penal, através da aplicação do raciocínio jurídico, doutrina, jurisprudência, legislação penal e seus princípios, processo penal, bem como interpretações diversas e teorias aplicáveis, de forma a obter o melhor resultado;blue;habilidades;blue;0,2;-760;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10267;habilidade;Direito;Direito penal;;Análise de prescrição e decadência penal;136;Análise das circunstâncias influenciadoras do cálculo da prescrição (pretensão punitiva e executória) e decadência, as hipóteses de ocorrência, seus prazos e causas de suspensão e interrupção previstas na lei penal;blue;habilidades;blue;0,2;-340;-2120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10720;habilidade;Direito;Direito penal;;Análise de punibilidade;136;Análise da possibilidade jurídica do Estado aplicar a sanção penal (pena ou medida de segurança) ao autor do ilícito, considerando as regras e preincípios aplicáveis ao direito penal;blue;habilidades;blue;0,2;-1180;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10721;habilidade;Direito;Direito penal;;Análise de imputabilidade penal;136;Avaliação da condição ou qualidade que possui o agente de sofrer a aplicação de pena e, nos casos de inimputabilidade, semi-imputabilidade e/ou imputabilidade, a correta identificação das consequências jurídicas e regras aplicáveis;blue;habilidades;blue;0,2;-760;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10722;habilidade;Direito;Direito penal;;Análise de concurso de agentes e de crimes;136;Análise dos casos de múltiplos agentes e crimes, as regras e princípios aplicáveis, e as consequências jurídicas de sua configuração para as partes interessadas;blue;habilidades;blue;0,2;-340;-2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10723;habilidade;Direito;Direito penal;;Análise de erros no crime ou na execução;136;Identificação e análise das consequências jurídicas de eventuais erros de tipo ou de proibição;blue;habilidades;blue;0,2;-1180;-2360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10724;habilidade;Direito;Direito penal;;Análise de excludentes penais;136;Identificação e análise das causas legais excludentes de ilicitude, culpabilidade ou de tipicidade, capazes de interferir no deslinde do caso, bem como suas consequências jurídicas;blue;habilidades;blue;0,2;-760;-2360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_penal;@' +
	'10708;habilidade;Direito;Direito processual;Direito processual civil;Atuação recursal no processo civil;1093;Elaborar e conduzir os recursos previstos no processo civil, de acordo com seus requisitos, cabimentos, prazos, formalidades, princípios, regulamentação, jurisprudência e doutrinas correlatas;blue;habilidades;blue;0,2;520;-2460;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10709;habilidade;Direito;Direito processual;Direito processual civil;Atuação em cooperação no processo civil;1093;Oferecer e/ou obter Cooperação Nacional e Internacional de acordo com os trâmites previstos pelo Processo Civil, de acordo com a posição ocupada;blue;habilidades;blue;0,2;1360;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10710;habilidade;Direito;Direito processual;Direito processual civil;Atuação no procedimento comum no processo civil;1093;Atuação durante todo o  procedimento comum, considerando o processo de conhecimento e o cumprimento de sentença, de acordo com seus princípios e regras, levando-se em consideração requisitos da petição, incidentes, regras dejulgamento, de resposta, de saneamento, de produção, interpretação e valoração de provas, sentença e efeitos da sentença, entre outras afetas ao tema;blue;habilidades;blue;0,2;520;-2220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10711;habilidade;Direito;Direito processual;Direito processual civil;Atuação no procedimento cautelar no processo civil;1093;Atuação nos procedimentos cautelares previstos, de acordo com seus princípios e regras, compreendendo as tutelas de urgência e de evidência;blue;habilidades;blue;0,2;940;-2220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10712;habilidade;Direito;Direito processual;Direito processual civil;Atuação nos procedimentos especiais no processo civil;1093;Atuação em todos os  procedimentos especiais, de acordo com seus princípios e regras, entre eles: ação de consignação em pagamento, de exigir contas, possessórias, divisão e demarcação de terras, dissolução parcial de sociedade, inventário e partilha, ação monitória, ação de família, entre outras previstas em lei;blue;habilidades;blue;0,2;1360;-2220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10713;habilidade;Direito;Direito processual;Direito processual civil;Atuação nos procedimentos especiais de jurisdição voluntária ;1093;Atuação em todos os procedimentos de jurisdição voluntária, de acordo com seus princípios e regras, entre eles: notificação e interpelação, alienação judicial, divórcio e separação consensuais, alteração de regime de bens, herança jacente, testamentos e codicilos, interdição, tutela e curatela, entre outros previstos em lei;blue;habilidades;blue;0,2;520;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10714;habilidade;Direito;Direito processual;Direito processual civil;Atuação em processos de execução no processo civil;1093;Atuação nos processos de execução, de acordo com seus princípios e regras, entre eles: a execução para a entrega de coisa, a execução das obrigações de fazer e não fazer, a execução por quantia certa contra devedor solvente, a execução contra a Fazenda Pública, e qualquer outra execução civil prevista em lei;blue;habilidades;blue;0,2;940;-2340;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Processo_(direito);@' +
	'10257;habilidade;Direito;Direito processual;Direito processual penal;Atuação recursal no direito penal;1094;Capacidade de aplicar todos os recursos cabíveis no direito penal, com compreensão de todos seus requisitos, cabimentos, prazos, formalidades, princípios, regulamentação, jurisprudência e doutrinas correlatas;blue;habilidades;blue;0,2;940;-2920;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10258;habilidade;Direito;Direito processual;Direito processual penal;Condução de investigação penal;1094;Capacidade de conduzir e/ou atuar diante de uma investigação criminal, em suas mais diversas formas previstas pelo ordenamento pátrio, quer seja via inquérito policial, procedimento investigatório do Ministério Público ou inquéritos extrapoliciais. Compreensão de suas características, fases, e todos seus elementos, bem como normas, jurisprudência e doutrina correlatas;blue;habilidades;blue;0,2;520;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10259;habilidade;Direito;Direito processual;Direito processual penal;Atuação no procedimento ordinário penal;1094;Atuação no procedimento ordinário penal diante de todas as suas características e incidentes;blue;habilidades;blue;0,2;940;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10260;habilidade;Direito;Direito processual;Direito processual penal;Atuação no procedimento sumário penal;1094;Atuação no procedimento sumário penal diante de todas as suas características e incidentes;blue;habilidades;blue;0,2;1360;-2680;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10261;habilidade;Direito;Direito processual;Direito processual penal;Atuação no procedimento sumaríssimo penal;1094;Atuação no procedimento sumaríssimo penal diante de todas as suas características e incidentes;blue;habilidades;blue;0,2;520;-2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10715;habilidade;Direito;Direito processual;Direito processual penal;Atuação no procedimento do Tribunal do Júri;1094;Atuação no procedimento do Tribunal do Júri diante de todas as suas características e incidentes;blue;habilidades;blue;0,2;940;-2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10716;habilidade;Direito;Direito processual;Direito processual penal;Atuação nos procedimentos em legislação especial penal;1094;Atuação nos procedimentos penais especiais diante de todas as suas características e incidentes;blue;habilidades;blue;0,2;1360;-2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10717;habilidade;Direito;Direito processual;Direito processual penal;Dosimetria da pena;1094;Utilização das regras e cálculos relacionados à aplicação da pena de forma a obter o seu montante adequado e/ou analisar o montante aplicado, habilitando-se a contestá-lo;blue;habilidades;blue;0,2;520;-2920;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10718;habilidade;Direito;Direito processual;Direito processual penal;Execução das penas e medidas de segurança;1094;Atuação na execução penal, com a compreensão ampla de seus conceitos, normas, jurisprudência, doutrina aplicável, bem como legislação especial correlata, como o instituto de remição, e demais institutos aplicáveis;blue;habilidades;blue;0,2;520;-3040;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10719;habilidade;Direito;Direito processual;Direito processual penal;Atuação em procedimentos disciplinares penais;1094;Atuação nos procedimentos administrativos disciplinares no contexto da execução penal;blue;habilidades;blue;0,2;1360;-2920;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_processual_penal;@' +
	'10268;habilidade;Direito;Direito trabalhista;;Negociações coletivas;114;Atuação em negociações sindicais para discussão de melhores termos dentro da legislação trabalhista brasileira;blue;habilidades;blue;0,2;-6000;-2820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_trabalho;@' +
	'10269;habilidade;Direito;Direito trabalhista;;Criação de contratos de trabalho;114;Criação de contratos de trabalho nas modalidades disponíveis em conforme com a legislação trabalhista brasileira;blue;habilidades;blue;0,2;-5580;-2820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_do_trabalho;@' +
	'10122;habilidade;Direito;Direito trabalhista;;Criação de relações de trabalho no Brasil;114;Utilização dos conceitos e princípios das leis trabalhistas brasileiras em vigor na construção de relações de trabalho;blue;habilidades;blue;0,2;-5160;-2820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho;CLT@' +
	'10270;habilidade;Direito;Direito tributário;;Debate da evolução tributária brasileira;113;Compreensão da evolução da legislação tributária brasileira;blue;habilidades;blue;0,2;-1180;-2580;ellipse;;;;;nodes;;70;;@' +
	'10123;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos Municipais;1025;Determinação de base de cálculo e alíquotas de tributos municipais;blue;habilidades;blue;0,2;-1030;-3020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@' +
	'10124;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos Estaduais;1025;Determinação de base de cálculo e alíquotas de tributos estaduais;blue;habilidades;blue;0,2;-610;-3020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@' +
	'10125;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos federais;1025;Determinação de base de cálculo e alíquotas de tributos federais;blue;habilidades;blue;0,2;-190;-3020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;@' +
	'10271;habilidade;Direito;Direito tributário;Planejamento tributário;Elisão fiscal;1057;Criação de estratégias de redução dos tributos a serem pagos de acordo com a legislação vigente;blue;habilidades;blue;0,2;-1030;-2800;ellipse;;;;;nodes;;70;;@' +
	'10126;habilidade;Direito;Regulações setoriais;Regulação bancária;Divulgação de informações regulatórias;1047;Conhecimento das normas de divulgação de informação de bancos para BACEN e outros órgãos reguladores;blue;habilidades;blue;0,2;-4270;-3460;ellipse;;;;;nodes;;70;;@' +
	'10206;habilidade;Economia;Economia aplicada;Economia internacional;Análise de sistemas econômicos;1060;Análise das regras e instituições econômicas de determinado país;blue;habilidades;blue;0,2;5670;4520;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia#Economia_internacional;@' +
	'10471;habilidade;Economia;Economia aplicada;Economia internacional;Avaliação dos termos de troca;1060;Cálculo e análise do impacto dos termos de troca de uma economia;blue;habilidades;blue;0,2;5670;4280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Termos_de_troca;@' +
	'10472;habilidade;Economia;Economia aplicada;Economia internacional;Análise de estabilidade financeira global;1060;Avaliação de potenciais riscos e bolhas de ativos formadas pela interdependência dos mercados globais;blue;habilidades;blue;0,2;6090;4520;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_internacional#Estabilidade_financeira_internacional;@' +
	'10473;habilidade;Economia;Economia aplicada;Economia internacional;Análise de blocos econômicos;1060;Análise de tratados e relações comerciais nacionais derivadas de acordos comerciais multinacionais;blue;habilidades;blue;0,2;6090;4400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Bloco_econ%C3%B4mico;@' +
	'10474;habilidade;Economia;Economia aplicada;Economia internacional;Análise de acordos comerciais;1060;Análise de tratados e relações comerciais setoriais derivadas de acordos comerciais internacionais;blue;habilidades;blue;0,2;6090;4280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Acordo_comercial;@' +
	'10462;habilidade;Economia;Economia aplicada;Economia internacional;Avaliação de vantagens comparativas;1060;Avaliação de fatores econômicos que conferem vantagens comparativas a regiões e seus impactos para o crescimento econômico;blue;habilidades;blue;0,2;5670;4400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Vantagem_comparativa;@' +
	'10796;habilidade;Economia;Economia aplicada;Economia internacional;Contextualização econômica global;1060;Análise do contexto e das tendências econômicas de globais a partir de informações disponíveis;blue;habilidades;blue;0,2;5670;4160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_internacional;@' +
	'10797;habilidade;Economia;Economia aplicada;Economia comportamental;Análise de decisão prospectiva;1010;Análise da tomada de decisão por agentes emocionais e não 100% racionais ;blue;habilidades;blue;0,2;5670;3820;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Prospect_theory;@' +
	'10798;habilidade;Economia;Economia aplicada;Economia comportamental;Análise intertemporal;1010;Análise do impacto da proximidade temporal na tomada de decisão econômica;blue;habilidades;blue;0,2;6090;3820;ellipse;;;;;nodes;;70;https://en.wikipedia.org/wiki/Intertemporal_choice;@' +
	'10135;habilidade;Economia;Economia aplicada;Economia comportamental;Modelagem behaviorista de preços;1010;Determinação de preços de ativos com base em comportamentos de agentes de mercado;blue;habilidades;blue;0,2;6090;3940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_comportamental;@' +
	'10214;habilidade;Economia;Economia aplicada;Economia comportamental;Análise de viés comportamental;1010;Análise do impacto de emoções e cultura na tomada de decisão econômica;blue;habilidades;blue;0,2;5670;3940;ellipse;;;;;nodes;;70;;@' +
	'10208;habilidade;Economia;Economia aplicada;Economia Industrial;Análise de estrutura mercados;1011;Caracterização de mercados em função de sua estrutura competitiva e avaliação da influência no equilíbrio desta estrutura;blue;habilidades;blue;0,2;5670;3600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado;@' +
	'10463;habilidade;Economia;Economia aplicada;Economia industrial;Análise de barreiras competitivas;1069;Avaliação das dificuldades competitivas impostas por barreiras de entrada e saída de mercados;blue;habilidades;blue;0,2;6090;3600;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Mercado_secund%C3%A1rio;@' +
	'10468;habilidade;Economia;Economia aplicada;Economia da informação;Criação de estratégia de informação;1071;Desenvolvimento de estratégia de transmissão de informação de acordo com os objetivos a serem atingidos;blue;habilidades;blue;0,2;6090;3280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_da_informa%C3%A7%C3%A3o;@' +
	'10469;habilidade;Economia;Economia aplicada;Economia da informação;Análise do fluxo de informação;1071;Avaliação da qualidade da comunicação e integridade da mensagem transmitida e das externalidades geradas por esse fluxo;blue;habilidades;blue;0,2;5670;3280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_da_informa%C3%A7%C3%A3o;@' +
	'10470;habilidade;Economia;Economia aplicada;Economia da informação;Avaliação de informação como produto;1071;Modelagem do valor do componente informação na oferta de uma empresa;blue;habilidades;blue;0,2;5670;3160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Economia_da_informa%C3%A7%C3%A3o;@' +
	'10799;habilidade;Economia;Economia aplicada;Economia da informação;Análise da economia em rede;1071;Análise dos impactos da economia interconectada pela tecnologia e impacto dessas redes nos negócios e governos;blue;habilidades;blue;0,2;6090;3160;ellipse;;;;;nodes;;70;;@' +
	'10129;habilidade;Economia;Macroeconomia;;Análise de conjuntura econômica;117;Análise do contexto e das tendências econômicas de um país ou região a partir de dados econômicos disponíveis;blue;habilidades;blue;0,2;3840;4520;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Macroeconomia;@' +
	'10203;habilidade;Economia;Macroeconomia;;Análise de acordos internacionais;117;Análise do impacto de um acordo de comércio internacional;blue;habilidades;blue;0,2;3840;4280;ellipse;;;;;nodes;;70;;@' +
	'10205;habilidade;Economia;Macroeconomia;;Projeções econômicas;117;Projeção de dados economicos utilizando modelos teóricos e informações de mercado;blue;habilidades;blue;0,2;3420;4520;ellipse;;;;;nodes;;70;;@' +
	'10390;habilidade;Economia;Macroeconomia;;Análise de contas nacionais;117;Análise das principais contas economicas como produção, crescimento, renda, investimento e poupança.;blue;habilidades;blue;0,2;3000;4520;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Contabilidade_nacional;PIB, Gini, Sazonalidade@' +
	'10391;habilidade;Economia;Macroeconomia;;Análise de modelos de crescimento;117;Avaliação dos impactos das iniciativas de desenvolvimento no crescimento econômico de um país com modelos econômicos;blue;habilidades;blue;0,2;3840;4160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Crescimento_econ%C3%B4mico;Solow, Keynes@' +
	'10456;habilidade;Economia;Macroeconomia;;Análise de IS/LM;117;Avaliação da dinâmica econômica através do equilibrio entre poupança e investimentos contra consumo e moeda em circulação;blue;habilidades;blue;0,2;3000;4400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Modelo_IS/LM;Savings, consumption, Hicks-Hansen@' +
	'10457;habilidade;Economia;Macroeconomia;;Avaliação de indicadores sócio econômicos;117;Avaliação do grau de desenvolvimento social através de informações como distribuição de renda e expectativa de vida  ;blue;habilidades;blue;0,2;3420;4400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Indicador_social;Schumpeter@' +
	'10458;habilidade;Economia;Macroeconomia;;Análise de sistema financeiro;117;Avaliação da influência do sistema financeiro, sua organização e características, no desenvolvimento econômico de um país;blue;habilidades;blue;0,2;3420;4280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sistema_financeiro;@' +
	'10460;habilidade;Economia;Macroeconomia;;Análise de ciclos econômicos;117;Avaliação do estado de uma economia em relação aos ciclos econômicos e identificação de tendências;blue;habilidades;blue;0,2;3840;4400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ciclo_econ%C3%B4mico;Choque @' +
	'10461;habilidade;Economia;Macroeconomia;;Avaliação da produtividade total dos fatores;117;Cálculo da variação da produtividade do capital e da força de trabalho e seu impacto no nível de produção de uma região;blue;habilidades;blue;0,2;3000;4280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Produtividade;@' +
	'10202;habilidade;Economia;Macroeconomia;Análise governamental e pública;Análise de regime cambial;1068;Análise dos impactos dos diversos tipos de regime cambial;blue;habilidades;blue;0,2;4390;4160;ellipse;;;;;nodes;;70;;@' +
	'10127;habilidade;Economia;Macroeconomia;Análise governamental e pública;Análise das contas públicas;1068;Determinação da saúde financeira de uma unidade governamental a partir de suas contas;blue;habilidades;blue;0,2;4390;4520;ellipse;;;;;nodes;;70;;@' +
	'10128;habilidade;Economia;Macroeconomia;Análise governamental e pública;Análise das políticas monetárias e fiscais;1068;Determinação de tendências econômicas a partir do conjunto de regras que regem o funcionamento do governo e do banco central;blue;habilidades;blue;0,2;4390;4400;ellipse;;;;;nodes;;70;;@' +
	'10336;habilidade;Economia;Macroeconomia;Análise governamental e pública;Análise regulatória;1068;Análise dos impactos econômicos e setoriais de legislações, estatutos e normas;blue;habilidades;blue;0,2;4390;4280;ellipse;;;;;nodes;;70;;@' +
	'10130;habilidade;Economia;Microeconomia;;Arbitragem;116;Compra e venda de bens para exploração de precificações diferentes e realização de lucros;blue;habilidades;blue;0,2;3840;3940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Arbitragem_(economia);@' +
	'10131;habilidade;Economia;Microeconomia;;Cálculo de elasticidade;116;Determinação da sensibilidade da demanda de produtos à variação de preços e avaliação de suas causas e relações;blue;habilidades;blue;0,2;3000;3820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Elasticidade_%28economia%29;@' +
	'10132;habilidade;Economia;Microeconomia;;Análise dos agregados de oferta e demanda;116;Análise da variação de preços potencial em função da regra de equilíbrio de oferta e demanda;blue;habilidades;blue;0,2;3000;3940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Equil%C3%ADbrio_de_mercado;Equilíbrio de mercado@' +
	'10449;habilidade;Economia;Microeconomia;;Discriminação de preços;116;Precificação de produtos e serviços em diferentes níveis de maneira a capturar o excedente de diferentes camadas de consumidores;blue;habilidades;blue;0,2;3420;3700;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Discrimina%C3%A7%C3%A3o_de_pre%C3%A7os;primeiro grau, terceiro grau, willingness to pay@' +
	'10450;habilidade;Economia;Microeconomia;;Determinação de custo de oportunidade;116;Avaliação do custo envolvido na utilização de recursos como comparação a outras oportunidades de aplicação;blue;habilidades;blue;0,2;3420;3820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Custo_de_oportunidade;@' +
	'10451;habilidade;Economia;Microeconomia;;Avaliação de preferência e maximização de utilidade;116;Determinação de curvas de indiferença para avaliação da preferência de consumidores por bens e serviços e maximização de sua utilidade;blue;habilidades;blue;0,2;3000;3700;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Utilidade_(economia);@' +
	'10452;habilidade;Economia;Microeconomia;;Cálculo de custo marginal;116;Determinação do custo de produçãode uma unidade adicional de um bem ou serviço;blue;habilidades;blue;0,2;3420;3940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Custo_marginal;@' +
	'10453;habilidade;Economia;Microeconomia;;Determinação da produção;116;Avaliação e maximização da eficiência de produção baseadas na Fronteira de produção possível;blue;habilidades;blue;0,2;3840;3820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Fronteira_de_possibilidades_de_produ%C3%A7%C3%A3o;FPP, CPP@' +
	'10454;habilidade;Economia;Microeconomia;;Determinação de preços;116;Precificação econômica de bens e serviços para maximização do lucro;blue;habilidades;blue;0,2;3420;3580;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_da_firma;Transfer pricing, pricing@' +
	'10455;habilidade;Economia;Microeconomia;;Avaliação de externalidades;116;Avaliação dos impactos de uma ação para os agentes econômicos, a sociedade e o ambiente;blue;habilidades;blue;0,2;3840;3700;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Externalidades;Bens Públicos@' +
	'10791;habilidade;Economia;Microeconomia;;Análise do equilíbrio geral;116;Avaliação do impacto de variáveis em mercados específicos no equilíbrio do mercado geral;blue;habilidades;blue;0,2;3840;3580;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_do_equil%C3%ADbrio_geral;@' +
	'10792;habilidade;Economia;Microeconomia;;Análise de estrutura corporativa;116;Avaliação do impacto da estrutura organizacional e de produção nos resultados do negócio;blue;habilidades;blue;0,2;3000;3580;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estrutura_organizacional;Verticalização da produção, produção horizontal, hierarquia, pirâmide@' +
	'10212;habilidade;Economia;Modelos e Técnicas econômicas;Econometria;Criação de modelos cross-section;1051;Criação de modelos lineares de representação de diversos agentes econômicos em um instante no tempo;blue;habilidades;blue;0,2;4540;3820;ellipse;;;;;nodes;;70;;@' +
	'10213;habilidade;Economia;Modelos e Técnicas econômicas;Econometria;Criação de modelos de painel;1051;Criação de modelos de avaliação de diversos agentes econômicos ao longo do tempo;blue;habilidades;blue;0,2;4540;3700;ellipse;;;;;nodes;;70;;@' +
	'10794;habilidade;Economia;Modelos e Técnicas econômicas;Econometria;Modelagem de escolha;1051;Criação de modelos para avaliação da preferência e escolha de consumidores ;blue;habilidades;blue;0,2;4960;3820;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Escolha_discreta;@' +
	'10800;habilidade;Economia;Modelos e Técnicas econômicas;Econometria;Criação de modelos de série de tempo;1051;Criação de modelos de representação econômica de um agente com evolução no tempo;blue;habilidades;blue;0,2;4960;3700;ellipse;;;;;nodes;;70;;@' +
	'10795;habilidade;Economia;Modelos e Técnicas econômicas;Teoria dos jogos;Definição de jogada;1013;Criação de estratégia para obtenção de melhor resultado a partir da modelagem de decisão dos competidores;blue;habilidades;blue;0,2;4960;3480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;@' +
	'10134;habilidade;Economia;Modelos e Técnicas econômicas;Teoria dos jogos;Modelagem de jogos;1013;Estruturação de situações conforme a teoria dos jogos e análise dos possíveis resultados;blue;habilidades;blue;0,2;4540;3480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;@' +
	'10801;habilidade;Economia;Modelos e Técnicas econômicas;Matriz insumo-produto;Avaliação de Matrizes Insumo-Produto;1012;Avaliação do impacto econômico de variações em cadeias produtivas a partir de matrizes de input-output;blue;habilidades;blue;0,2;4540;3260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Modelo_input-output;@' +
	'10464;habilidade;Economia;Modelos e Técnicas econômicas;Matriz insumo-produto;Análise de interligação econômica;1012;Avaliação da interdependência entre inputs e outputs de diferentes setores econômicos;blue;habilidades;blue;0,2;4960;3260;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Modelo_input-output;@' +
	'10210;habilidade;Economia;Pensamento econômico;;Análise da formação econômica brasileira;137;Análise do desenvolvimento econômico brasileiro a partir de sua história;blue;habilidades;blue;0,2;3000;3360;ellipse;;;;;nodes;;70;;@' +
	'10217;habilidade;Economia;Pensamento econômico;;Análise econômica clássica;137;Avaliação da economia através do instrumental clássico criado pelos economistas clássicos, como Adam Smith;blue;habilidades;blue;0,2;3000;3240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;Adam Smith, Turgot@' +
	'10218;habilidade;Economia;Pensamento econômico;;Análise econômica austríaca;137;Avaliação da economia através do instrumental desenvolvido pela escola austríaca, como Hayek e Mises;blue;habilidades;blue;0,2;3420;3360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;Hayek, Mises, praxeologia, Schumpeter, Murray Rothbard@' +
	'10444;habilidade;Economia;Pensamento econômico;;Análise econômica pré-clássica;137;Avaliação da economia através do instrumental criado pelos pensadores antigos e mercantilistas, como Tomás de Aquino e Thomas Mun;blue;habilidades;blue;0,2;3000;3120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;Aristóteles, John Locke@' +
	'10445;habilidade;Economia;Pensamento econômico;;Análise econômica marxiana;137;Avaliação da economia através do instrumental desenvolvido por Karl Marx;blue;habilidades;blue;0,2;3840;3240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;Karl Marx@' +
	'10446;habilidade;Economia;Pensamento econômico;;Análise econômica keynesiana;137;Avaliação da economia através do instrumental desenvolvido John Maynard Keynes;blue;habilidades;blue;0,2;3840;3120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;John Maynard Keynes@' +
	'10447;habilidade;Economia;Pensamento econômico;;Análise econômica monetarista;137;Avaliação da economia através do instrumental desenvolvido pela escola de Chicago;blue;habilidades;blue;0,2;3420;3240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hist%C3%B3ria_do_pensamento_econ%C3%B3mico;Escola de Chicago, Milton Friedman@' +
	'10790;habilidade;Economia;Pensamento econômico;;Análise economica utilitarista;137;Análise da economia através do ferramental utilitarista;blue;habilidades;blue;0,2;3420;3120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Utilitarismo;@' +
	'10736;habilidade;Filosofia;;;Análise positivista;6;Avaliação de fenômenos a partir da experiência sensível e dados concretos;blue;habilidades;blue;0,2;-6000;100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Positivismo;@' +
	'10737;habilidade;Filosofia;;;Análise estruturalista;6;Avaliação de fenômenos levando em consideração a estrutura nos quais estes estão inseridos;blue;habilidades;blue;0,2;-6000;-20;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estruturalismo;@' +
	'10647;habilidade;Filosofia;Epistemologia;;Avaliação de conhecimento;164;Determinar se uma teoria ou estudo possui validade através de um estudo de seus métodos e lógica.;blue;habilidades;blue;0,2;-4900;0;ellipse;;;;;nodes;;70;;@' +
	'10738;habilidade;Filosofia;Epistemologia;;Interpretação hermenêutica;164;Interpretação de comunicações para posterior explicação de seu conteúdo;blue;habilidades;blue;0,2;-4900;-120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hermen%C3%AAutica;@' +
	'10739;habilidade;Filosofia;Epistemologia;;Criação de hipótese;164;Formular uma teoria sobre causa e efeito a fim de testar sua validade;blue;habilidades;blue;0,2;-4900;-240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Hip%C3%B3tese;@' +
	'10740;habilidade;Filosofia;Epistemologia;;Crítica;164;Criação de opinião a respeito de determinado ente ou evento a partir do conhecimento e crenças pessoais de um indivíduo;blue;habilidades;blue;0,2;-4900;-360;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cr%C3%ADtica;@' +
	'10136;habilidade;Filosofia;Ética;Ética aplicada;Ética nos negócios;1031;Aplicação de valores éticos na conduta profissional;blue;habilidades;blue;0,2;-5280;-680;ellipse;;;;;nodes;;70;;@' +
	'10273;habilidade;Filosofia;Ética;Ética aplicada;Mitigação de conflito de interesses;1031;Atuação com capacidade de discernimento entre os diversos interesses presentes em uma situação e com a tomada das devidas precauções;blue;habilidades;blue;0,2;-5700;-920;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Conflito_de_interesses;@' +
	'10274;habilidade;Filosofia;Ética;Ética aplicada;Responsabilidade com terceiros;1031;Consideração pelo mercado, pelos clientes e pela instituição empregadora na tomada de decisão;blue;habilidades;blue;0,2;-5700;-680;ellipse;;;;;nodes;;70;;@' +
	'10275;habilidade;Filosofia;Ética;Ética aplicada;Confidencialidade;1031;Não divulgação de informações consideradas confidenciais;blue;habilidades;blue;0,2;-5700;-800;ellipse;;;;;nodes;;70;;@' +
	'10735;habilidade;Filosofia;Ética;Ética aplicada;Ética no direito;1031;Aplicação dos princípios éticos no direito;blue;habilidades;blue;0,2;-5280;-800;ellipse;;;;;nodes;;70;;@' +
	'10743;habilidade;Filosofia;Filosofia jurídica;;Investigação da norma jurídica;169;Avaliação da estrutura de validade formal das normas e princípios  jurídico e a consequente valoração dos ideais de justiça;blue;habilidades;blue;0,2;-5850;-1160;ellipse;;;;;nodes;;70;;@' +
	'10744;habilidade;Filosofia;Filosofia jurídica;;Investigação crítica do direito;169;Identificação das contradições e críticas ao direito de forma a identificá-las e atuação frente a essa realidade;blue;habilidades;blue;0,2;-5850;-1280;ellipse;;;;;nodes;;70;;@' +
	'10745;habilidade;Filosofia;Filosofia jurídica;;Pensamento jurídico;169;Compreensão da evolução histórica do pensamento jurídico, que compreende as correntes jusnaturalistas, positivistas e pós positivistas, e a construção de raciocínios com esses conceitos;blue;habilidades;blue;0,2;-5430;-1400;ellipse;;;;;nodes;;70;;@' +
	'10746;habilidade;Filosofia;Filosofia jurídica;;Pensamento jusnaturalista;169;Avaliação do direito a partir da prática do que é razoável e importante ao direito;blue;habilidades;blue;0,2;-5010;-1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_natural;@' +
	'10747;habilidade;Filosofia;Filosofia jurídica;;Pensamento positivista;169;Avaliação do direito em função das leis criadas pelo homem e em vigência, com influência sobre as pessoas;blue;habilidades;blue;0,2;-5010;-1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direito_positivo;@' +
	'10748;habilidade;Filosofia;Filosofia jurídica;;Pensamento pós-positivista;169;Avaliação do direito com base em hipóteses de sua validade, levando em consideração a garantia de alguns direitos básicos;blue;habilidades;blue;0,2;-4590;-1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/P%C3%B3s-positivismo;@' +
	'10749;habilidade;Filosofia;Filosofia jurídica;;Constitucionalização do direito;169;Avaliação do direito com base em um documento base de valores que regem todo o arcabouço legal e seu impacto na prática jurídica e em todos os ramos do direito pátreo;blue;habilidades;blue;0,2;-4590;-1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Constitucionalismo;@' +
	'10750;habilidade;Filosofia;Filosofia jurídica;;Avaliação hermenêutica do Direito;169;Aplicação da hermenêutica filosófica na compreensão, aplicação e interpretação do direito;blue;habilidades;blue;0,2;-5430;-1160;ellipse;;;;;nodes;;70;;@' +
	'10751;habilidade;Filosofia;Filosofia jurídica;;Discussão dos limites do direito;169;Debate filosófico sobre ativismo judicial e seus impactos na sociedade e no direito;blue;habilidades;blue;0,2;-5850;-1400;ellipse;;;;;nodes;;70;;@' +
	'10276;habilidade;Filosofia;Filosofia política;;Debate sobre o indivíduo e o estado;138;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e estado e seu relacionamento;blue;habilidades;blue;0,2;-4350;0;ellipse;;;;;nodes;;70;;@' +
	'10277;habilidade;Filosofia;Filosofia política;;Debate sobre a liberdade do indivíduo;138;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e liberdade;blue;habilidades;blue;0,2;-4350;-120;ellipse;;;;;nodes;;70;;@' +
	'10741;habilidade;Filosofia;Metafísica;;Análise ontológica;165;Análise e estudo dos entes e dos seres, sua essência e propriedades;blue;habilidades;blue;0,2;-5450;0;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Ontologia;@' +
	'10742;habilidade;Filosofia;Metafísica;;Análise cosmológica;165;Análise e estudo do universo, sua essência, estrutura e propriedades;blue;habilidades;blue;0,2;-5450;-120;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cosmologia;@' +
	'10389;habilidade;Idiomas;Português;;Comunicação em Libras;147;Comunicação em Libras - língua brasileira de sinais;blue;habilidades;blue;0,2;-5900;2800;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais;surdo, mudo@' +
	'10294;habilidade;Idiomas;Inglês;;Inglês básico;139;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0,2;-5900;2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;@' +
	'10295;habilidade;Idiomas;Inglês;;Inglês intermediário;139;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0,2;-5480;2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;@' +
	'10296;habilidade;Idiomas;Inglês;;Inglês avançado;139;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0,2;-5060;2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;@' +
	'10297;habilidade;Idiomas;Inglês;;Inglês fluente;139;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0,2;-4640;2480;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;@' +
	'10298;habilidade;Idiomas;Francês;;Francês básico;144;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0,2;-5900;2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;@' +
	'10299;habilidade;Idiomas;Francês;;Francês intermediário;144;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0,2;-5480;2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;@' +
	'10300;habilidade;Idiomas;Francês;;Francês avançado;144;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0,2;-5060;2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;@' +
	'10301;habilidade;Idiomas;Francês;;Francês fluente;144;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0,2;-4640;2240;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;@' +
	'10302;habilidade;Idiomas;Espanhol;;Espanhol básico;145;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0,2;-5900;2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;@' +
	'10303;habilidade;Idiomas;Espanhol;;Espanhol intermediário;145;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0,2;-5480;2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;@' +
	'10304;habilidade;Idiomas;Espanhol;;Espanhol avançado;145;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0,2;-5060;2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;@' +
	'10305;habilidade;Idiomas;Espanhol;;Espanhol fluente;145;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0,2;-4640;2000;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;@' +
	'10278;habilidade;Idiomas;Inglês;Inglês de negócios;Inglês jurídico;1058;Redação de peças jurídicas em inglês com a correta utilização dos termos e construção de lógica;blue;habilidades;blue;0,2;-4090;2480;ellipse;;;;;nodes;;70;;@' +
	'10285;habilidade;Matemática;Álgebra;;Cálculo de sistemas dinâmicos;140;Cálculo do resultado de sistemas com uma componente variável de tempo;blue;habilidades;blue;0,2;3700;400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sistema_din%C3%A2mico;@' +
	'10286;habilidade;Matemática;Álgebra;Álgebra linear;Cálculo de sistemas lineares;1050;Cálculos e análises de conjuntos de equações lineares;blue;habilidades;blue;0,2;4250;400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sistema_de_equa%C3%A7%C3%B5es_lineares;@' +
	'10287;habilidade;Matemática;Álgebra;Álgebra linear;Análise geométrica;1050;Análise de formas geométricas com base em planos cartesianos;blue;habilidades;blue;0,2;4670;400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Geometria_anal%C3%ADtica;Geometria analítica@' +
	'10138;habilidade;Matemática;Cálculo;;Cálculo diferencial;119;Cálculo do resultado de operações derivadas;blue;habilidades;blue;0,2;5240;500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@' +
	'10139;habilidade;Matemática;Cálculo;;Cálculo integral;119;Cálculo do resultado de operações integrais;blue;habilidades;blue;0,2;5240;380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/C%C3%A1lculo;@' +
	'10283;habilidade;Matemática;Cálculo;;Cálculo de equações diferenciais;119;Cálculo do resultado de uma equação com icógnitas em forma de derivadas, seja linear, seja parcial;blue;habilidades;blue;0,2;5660;500;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_diferencial;@' +
	'10284;habilidade;Matemática;Cálculo;;Determinação de relação de recorrência;119;Cálculo de termos anteriores ou seguintes de relações matemáticas a partir de regras particulares;blue;habilidades;blue;0,2;5660;380;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Rela%C3%A7%C3%A3o_de_recorr%C3%AAncia;@' +
	'10137;habilidade;Matemática;Estatística;;Análise estatística básica;120;Avaliação estatística básica de conjuntos de dados e sua comparação a uma distribuição normal;blue;habilidades;blue;0,2;3700;140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estat%C3%ADstica;Princípios estatíesticos, moda, média, desvio padrão@' +
	'10140;habilidade;Matemática;Estatística;;Testes de hipótese;120;Realização de testes de hipótese, significância estatística, análise de resíduos e de variância;blue;habilidades;blue;0,2;4120;20;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Testes_de_hip%C3%B3teses;@' +
	'10279;habilidade;Matemática;Estatística;;Análise estatística;120;Realização de análises estatísticas para identificação de propriedades de conjuntos de dados, incluindo correlações com outros conjuntos;blue;habilidades;blue;0,2;4120;140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Estat%C3%ADstica_descritiva;@' +
	'10280;habilidade;Matemática;Estatística;;Análise exploratória de dados;120;Aplicação de técnicas de regressão e testes de hipóteses para identificação de padrões e relações estatísticas;blue;habilidades;blue;0,2;4540;140;ellipse;;;;;nodes;;70;;@' +
	'10281;habilidade;Matemática;Estatística;;Criação de regressões;120;Identificação de relações estatísticas entre duas ou mais variáveis e representação matemática desta relação;blue;habilidades;blue;0,2;4540;20;ellipse;;;;;nodes;;70;;@' +
	'10282;habilidade;Matemática;Estatística;;Análise de resíduos;120;Análise de dados resultantes de regressões para identificação de padrões que afetem a validade da relação estatística;blue;habilidades;blue;0,2;4960;20;ellipse;;;;;nodes;;70;;@' +
	'10288;habilidade;Matemática;Probabilidade;;Descrição probabilística;141;Descrição de fenômenos a partir de probabilidades matemáticas;blue;habilidades;blue;0,2;3700;-220;ellipse;;;;;nodes;;70;;@' +
	'10060;habilidade;Matemática;Matemática financeira;;Valor do dinheiro no tempo;150;Cálculo do valor do dinheiro no tempo;blue;habilidades;blue;0,2;4670;-220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;Atualização monetária@' +
	'10061;habilidade;Matemática;Matemática financeira;;Cálculo de juros;150;Capitalização de juros simples e juros compostos e variantes internacionais;blue;habilidades;blue;0,2;4250;-220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;@' +
	'10381;habilidade;Profissional;;;Gestão de carreira;13;Identificação de prioridades para tomada de decisão e planejamento de ações para possibilitar a evolução da carreira de acordo comos valores e interesses pessoais;blue;habilidades;blue;0,2;-5720;3900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_carreira;career services@' +
	'10428;habilidade;Profissional;;;Construção de Currículo;13;Estruturação e listagem de experiências educacionais e profissionais em documento voltado a recrutamento;blue;habilidades;blue;0,2;-6140;3900;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Curriculum_vit%C3%A6;CV, Curriculum vitae@' +
	'10546;habilidade;Profissional;Experiência setorial;;Trabalho no setor de varejo;157;Análise do funcionamento do mercado e de negócios no setor varejista;blue;habilidades;blue;0,2;-5300;3680;ellipse;;;;;nodes;;70;;@' +
	'10547;habilidade;Profissional;Experiência setorial;;Trabalho no setor de serviços;157;Análise do funcionamento do mercado e de negócios no setor de serviços;blue;habilidades;blue;0,2;-5300;3560;ellipse;;;;;nodes;;70;;@' +
	'10548;habilidade;Profissional;Experiência setorial;;Trabalho no setor de agronegócio;157;Análise do funcionamento do mercado e de negócios no setor do agronegócio;blue;habilidades;blue;0,2;-5300;3440;ellipse;;;;;nodes;;70;;@' +
	'10549;habilidade;Profissional;Experiência setorial;;Trabalho no setor de tecnologia;157;Análise do funcionamento do mercado e de negócios no setor de tecnologia;blue;habilidades;blue;0,2;-5720;3680;ellipse;;;;;nodes;;70;;@' +
	'10550;habilidade;Profissional;Experiência setorial;;Trabalho no setor de saúde;157;Análise do funcionamento do mercado e de negócios no setor de saúde;blue;habilidades;blue;0,2;-5720;3560;ellipse;;;;;nodes;;70;;@' +
	'10551;habilidade;Profissional;Experiência setorial;;Trabalho no setor de indústria;157;Análise do funcionamento do mercado e de negócios industriais;blue;habilidades;blue;0,2;-5720;3440;ellipse;;;;;nodes;;70;;@' +
	'10552;habilidade;Profissional;Experiência setorial;;Trabalho no setor de educação;157;Análise do funcionamento do mercado e de negócios no setor educacional;blue;habilidades;blue;0,2;-5720;3320;ellipse;;;;;nodes;;70;;@' +
	'10553;habilidade;Profissional;Experiência setorial;;Trabalho no setor de energia;157;Análise do funcionamento do mercado e de negócios no setor de energia;blue;habilidades;blue;0,2;-5720;3200;ellipse;;;;;nodes;;70;;@' +
	'10554;habilidade;Profissional;Experiência setorial;;Trabalho no setor de serviços financeiros;157;Análise do funcionamento do mercado e de negócios de serviços financeiros;blue;habilidades;blue;0,2;-6140;3680;ellipse;;;;;nodes;;70;;@' +
	'10555;habilidade;Profissional;Experiência setorial;;Trabalho no setor de telecom;157;Análise do funcionamento do mercado e de negócios no setor de telecomunicações;blue;habilidades;blue;0,2;-6140;3560;ellipse;;;;;nodes;;70;;@' +
	'10556;habilidade;Profissional;Experiência setorial;;Trabalho no setor de construção;157;Análise do funcionamento do mercado e de negócios no setor de construções;blue;habilidades;blue;0,2;-6140;3440;ellipse;;;;;nodes;;70;;@' +
	'10557;habilidade;Profissional;Experiência setorial;;Trabalho no setor de infra estrutura;157;Análise do funcionamento do mercado e de negócios no setor de infra estrutura;blue;habilidades;blue;0,2;-6140;3320;ellipse;;;;;nodes;;70;;utilities, concessionárias, estradas@' +
	'10558;habilidade;Profissional;Experiência setorial;;Trabalho no setor público/ terceiro setor;157;Análise do funcionamento do mercado e de negócios no setor público ou terceiro setor;blue;habilidades;blue;0,2;-6140;3200;ellipse;;;;;nodes;;70;;@' +
	'10141;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Psicologia da Liderança;1043;Aplicação dos conceitos psicológicos da Liderança;blue;habilidades;blue;0,2;4000;-2800;ellipse;;;;;nodes;;70;;@' +
	'10142;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Debate sobre trabalho e estresse;1043;Tomada de decisão com base no entendimento do impacto do trabalho e do estresse na psique humana;blue;habilidades;blue;0,2;4000;-2920;ellipse;;;;;nodes;;70;;@' +
	'10143;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Análise psicológica da autoridade;1043;Utilização dos conceitos psicológicos da autoridade e suas consequências na tomada de decisão;blue;habilidades;blue;0,2;4000;-3040;ellipse;;;;;nodes;;70;;@' +
	'10144;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Aplicação do Behaviorismo aos negócios;1043;Aplicação dos conceitos de behaviorismo em situações de trabalho;blue;habilidades;blue;0,2;4000;-3160;ellipse;;;;;nodes;;70;;@' +
	'10145;habilidade;Psicologia;Psicologia Freudiana;;Análise psicológica Freudiana;121;Aplicação dos conceitos de Ego, supergo, id em análises psicológicas;blue;habilidades;blue;0,2;4580;-2800;ellipse;;;;;nodes;;70;;@' +
	'10384;habilidade;Psicologia;Psicanálise;;Aplicação da livre associação;148;Aplicação de método de investigação psíquica baseado na livre exploração do paciente por tópicos que lhe façam sentido;blue;habilidades;blue;0,2;4580;-3020;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Livre_associa%C3%A7%C3%A3o;divã, Freud@' +
	'10385;habilidade;Psicologia;Psicanálise;;Investigação da psique;148;Identificaçãode desvios de personalidade e traumas a partir de técnicas investigativas;blue;habilidades;blue;0,2;4580;-3140;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Psican%C3%A1lise;Freud@' +
	'10648;habilidade;Psicologia;Psicologia da personalidade;;Mapeamento de perfil psicológico;166;Aplicaçãode testes e questionários para identificação de padrões e perfis de comportamento;blue;habilidades;blue;0,2;4000;-3410;ellipse;;;;;nodes;;70;;@' +
	'10752;habilidade;Psicologia;Psicologia da personalidade;;Medição de QI;166;Avaliação do nível de inteligência através da medição de Quociente de Inteligência;blue;habilidades;blue;0,2;4000;-3530;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Quociente_de_intelig%C3%AAncia;@' +
	'10753;habilidade;Psicologia;Psicologia da personalidade;;Descrição dimensional de personalidade;166;Aplicação de testes de personalidade para avaliação dimensional de características pessoais;blue;habilidades;blue;0,2;4420;-3410;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Psicologia_da_personalidade;@' +
	'10754;habilidade;Psicologia;Psicologia da personalidade;;Análise de inteligências múltiplas;166;Avaliação da capacidade de um indivíduo nos diversos tipo de inteligência;blue;habilidades;blue;0,2;4420;-3530;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Intelig%C3%AAncias_m%C3%BAltiplas;Howard Gardner@' +
	'10649;habilidade;Sociologia;;;Análise sociológica contemporanea;11;Avaliação das relações humanas nos dias de hoje, com base nas mudanças tecnolócias e culturais mais recentes;blue;habilidades;blue;0,2;-5160;1160;ellipse;;;;;nodes;;70;;@' +
	'10388;habilidade;Sociologia;;;Análise cultural brasileira;11;Análise dos componentes culturais brasileiros e suas interações, criando um panomara cultural do país;blue;habilidades;blue;0,2;-5580;1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Cultura_do_Brasil;Brasilianismo, tupi-guarani@' +
	'10755;habilidade;Sociologia;;;Análise da evolução da sociedade;11;Avaliação do desenvolvimento das estruturas da sociedade e seu impacto nos indivíduo;blue;habilidades;blue;0,2;-5580;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Evolucionismo_social;@' +
	'10756;habilidade;Sociologia;;;Análise de construções sociais;11;Avaliação do impacto das estruturas sociais na criação de conhecimentos e teorias;blue;habilidades;blue;0,2;-5580;1400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Construtivismo_social;@' +
	'10757;habilidade;Sociologia;;;Debate da tolerância;11;Avaliação das regras de aceitação utilizadas por indivíduos e instituições e suas consequências para a sociedade;blue;habilidades;blue;0,2;-5160;1400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Toler%C3%A2ncia;@' +
	'10758;habilidade;Sociologia;;;Análise sociológica de organizações ;11;Avaliação do impacto nos indivíduos da sua participação em uma organização e da influência do meio em uma organização;blue;habilidades;blue;0,2;-5160;1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sociologia_das_organiza%C3%A7%C3%B5es;@' +
	'10759;habilidade;Sociologia;;;Análise funcionalista;11;Análise da eficiência da sociedade em desempenhar funções que venham a suprir as necessidades dos indivíduos;blue;habilidades;blue;0,2;-6000;1400;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Funcionalismo_(ci%C3%AAncias_sociais);@' +
	'10760;habilidade;Sociologia;;;Análise interacional;11;Avaliação do impacto da interação do indivíduo em seu meio social e cultural;blue;habilidades;blue;0,2;-6000;1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Interacionismo;@' +
	'10761;habilidade;Sociologia;;;Análise etnográfica;11;Avaliação do impacto da relação entre observador  e observado, seja indivíduo ou grupo social;blue;habilidades;blue;0,2;-6000;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Etnografia;@' +
	'10289;habilidade;Sociologia;Sociologia econômica;;Debate sobre o indivíduo na sociedade;142;Análise da influência do meio no indivíduo e na construção de identidades;blue;habilidades;blue;0,2;-4590;1400;ellipse;;;;;nodes;;70;;@' +
	'10386;habilidade;Sociologia;Sociologia econômica;;Debate do neoliberalismo;142;Debate sobre o modelo economico neoliberalista e seus impactos na vida dos indivíduos e na comunidade;blue;habilidades;blue;0,2;-4590;1280;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Neoliberalismo;liberalismo@' +
	'10387;habilidade;Sociologia;Sociologia econômica;;Debate da cultura de consumo;142;Debate sobre os impactos da cultura do consumo na sociedade;blue;habilidades;blue;0,2;-4590;1160;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Consumo;consumismo@' +
	'10762;habilidade;Sociologia;Sociologia jurídica;;Análise do direito como instrumento social;143;Avaliação dos mecanismos pelos quais o direito atua na sociedade, a possibilitando e também a transformando;blue;habilidades;blue;0,2;-6000;940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Sociologia_do_direito;@' +
	'10763;habilidade;Sociologia;Sociologia jurídica;;Análise dos direitos humanos na democracia;143;Avaliação das relações entre os direitos humanos e uma sociedade democrática;blue;habilidades;blue;0,2;-5580;940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Direitos_humanos;@' +
	'10764;habilidade;Sociologia;Sociologia jurídica;;Criminologia;143;Análise das causas do comportamento antissocial do homem, da estrutura e da personalidade do indivíduo ;blue;habilidades;blue;0,2;-5160;940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Criminologia;@' +
	'10765;habilidade;Sociologia;Sociologia jurídica;;Análise da punição;143;Avaliação das relações entre a punição e a sociedade moderna, bem como dos impactos na sua forma de organização ;blue;habilidades;blue;0,2;-4740;940;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Puni%C3%A7%C3%A3o;@' +
	'10425;habilidade;Soft Skills;Pensamento abstrato;;Abstração;152;Exercício intelectual de avaliação de conceitos e experiências separando componentes e os avaliando independentemente;blue;habilidades;blue;0,2;-4400;3300;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o;@' +
	'10027;habilidade;Soft Skills;Pensamento abstrato;;Ideação;152;Geração de ideias livres sobre temas específicos e refinamento dessas em conceitos utilizáveis;blue;habilidades;blue;0,2;-3980;3300;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Brainstorming;@' +
	'10382;habilidade;Soft Skills;Pensamento abstrato;;Criatividade;152;Geração de ideias e conceitos autonomos e alternativos, ou aplicação destes de maneira não usual, buscando novas maneiras de se atingir um objetivo;blue;habilidades;blue;0,2;-3560;3300;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Criatividade;Criação, inovação@' +
	'10016;habilidade;Soft Skills;Pensamento crítico;;Tomada de decisões;151;Utilização de ferramentas e modelos psicológicos para apoiar a tomada de decisões;blue;habilidades;blue;0,2;-3560;3520;ellipse;;;;;nodes;;70;;@' +
	'10161;habilidade;Soft Skills;Pensamento crítico;;Interpretação de textos;151;Leitura e compreensão de textos e sua estrutura;blue;habilidades;blue;0,2;-4400;3640;ellipse;;;;;nodes;;70;;@' +
	'10165;habilidade;Soft Skills;Pensamento crítico;;Enquadramento de problemas;151;Utilização de modelos para definir problemas e procurar caminhos para sua solução;blue;habilidades;blue;0,2;-3980;3760;ellipse;;;;;nodes;;70;;@' +
	'10329;habilidade;Soft skills;Pensamento crítico;;Análise;151;Coleta e avaliação de informações para construção de uma conclusão sobre determinado assunto;blue;habilidades;blue;0,2;-3980;3640;ellipse;;;;;nodes;;70;;@' +
	'10327;habilidade;Soft skills;Pensamento crítico;;Raciocínio lógico;151;Avaliar situações utilizando conceitos de lógica;blue;habilidades;blue;0,2;-4400;3760;ellipse;;;;;nodes;;70;;@' +
	'10163;habilidade;Soft Skills;Pensamento crítico;;Foco em resultado;151;Identificação e priorização das entregas agregadoras de valor;blue;habilidades;blue;0,2;-3560;3760;ellipse;;;;;nodes;;70;;@' +
	'10166;habilidade;Soft Skills;Pensamento crítico;;Execução;151;Capacidade de transformação de ideias em ação com foco na resolução de problemas;blue;habilidades;blue;0,2;-3560;3640;ellipse;;;;;nodes;;70;;@' +
	'10017;habilidade;Soft Skills;Comunicação;;Narrativa;153;Utilização de técnicas de narrativa em comunicações;blue;habilidades;blue;0,2;-3980;4100;ellipse;;;;;nodes;;70;;@' +
	'10018;habilidade;Soft Skills;Comunicação;;Apresentação;153;Condução de apresentações utilizando ferramentas de comunicação;blue;habilidades;blue;0,2;-3980;4220;ellipse;;;;;nodes;;70;;@' +
	'10409;habilidade;Soft Skills;Comunicação;;Entrevista;153;Condução de conversa com realização de perguntas pré definidas para obtenção de informações e conhecimento de opiniões de indivíduos;blue;habilidades;blue;0,2;-3560;3980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Entrevista;Jornalismo, interview@' +
	'10160;habilidade;Soft Skills;Comunicação;;Argumentação;153;Construção de raciocínios lógicos ou emocionais com o intuito de se provar determinado ponto de vista;blue;habilidades;blue;0,2;-3560;4220;ellipse;;;;;nodes;;70;;@' +
	'10020;habilidade;Soft Skills;Comunicação;;Comunicação oral;153;Transmissão efetiva de conceitos e ideias via a utilização de melhores práticas de comunicação oral;blue;habilidades;blue;0,2;-4400;4220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/L%C3%ADngua_falada;@' +
	'10426;habilidade;Soft Skills;Comunicação;;Comunicação escrita;153;Transmissão efetiva de conceitos e ideias via a utilização de ténicas de comunicação escrita;blue;habilidades;blue;0,2;-4400;4100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Escrita;@' +
	'10427;habilidade;Soft Skills;Comunicação;;Comunicação corporal;153;Reforço da transmissão de informações via a utilização de gestos e expressões corporais;blue;habilidades;blue;0,2;-4400;3980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Linguagem_corporal;@' +
	'10272;habilidade;Soft Skills;Postura;;Profissionalismo;154;Conduta pautada pelo conhecimento das normas morais, pela responsabilidade individual e pelo senso de dever;blue;habilidades;blue;0,2;-2590;3760;ellipse;;;;;nodes;;70;;@' +
	'10167;habilidade;Soft Skills;Postura;;Organização;154;Identificação de tarefas a serem realizadas e alocação de tempo e esforço de maneira estruturada e eficiente para sua realização;blue;habilidades;blue;0,2;-2590;3640;ellipse;;;;;nodes;;70;;@' +
	'10325;habilidade;Soft skills;Postura;;Empreender;154;Postura proativa de criação de soluções para problemas não estruturados;blue;habilidades;blue;0,2;-2590;3520;ellipse;;;;;nodes;;70;;@' +
	'10326;habilidade;Soft skills;Postura;;Agir Proativamente;154;Antecipação de problemas e situações e tomada de ação para mitigá-los ou resolvê-los;blue;habilidades;blue;0,2;-3010;3640;ellipse;;;;;nodes;;70;;@' +
	'10328;habilidade;Soft skills;Postura;;Resiliência;154;Suportar e superar desafios até que se atinja o resultado esperado;blue;habilidades;blue;0,2;-3010;3760;ellipse;;;;;nodes;;70;;@' +
	'10383;habilidade;Soft Skills;Postura;;Tolerância;154;Aptidão em se colocar na posição de outras pessoas e aceitar diferentes pontos de vista;blue;habilidades;blue;0,2;-3010;3520;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Toler%C3%A2ncia;Diversidade@' +
	'10429;habilidade;Soft Skills;Habilidades sociais;;Empatia;149;Colocar-se no lugar de outros e entender o que eles estão sentido com o intuito de reforço do relacionamento;blue;habilidades;blue;0,2;-3010;4220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Empatia;@' +
	'10430;habilidade;Soft Skills;Habilidades sociais;;Persuasão;149;Convencimento de pessoas através da comunicação lógica, emocional e simbólica;blue;habilidades;blue;0,2;-2170;4220;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Persuas%C3%A3o;@' +
	'10431;habilidade;Soft Skills;Habilidades sociais;;Auto-percepção;149;Se perceber e a seu impacto num ambiente ou contexto;blue;habilidades;blue;0,2;-3010;4100;ellipse;;;;;nodes;;70;;@' +
	'10014;habilidade;Soft Skills;Habilidades sociais;;Influenciar pessoas;149;Utilização de técnicas de influência em relacionamentos;blue;habilidades;blue;0,2;-2590;4220;ellipse;;;;;nodes;;70;;@' +
	'10162;habilidade;Soft Skills;Habilidades sociais;;Trabalho em equipe;149;Contribuição para o desenvolvimento de uma tarefa com uma parte do trabalho e com apoio ao grupo;blue;habilidades;blue;0,2;-2170;4100;ellipse;;;;;nodes;;70;;@' +
	'10019;habilidade;Soft Skills;Habilidades sociais;;Construção de relacionamentos;149;Construção de relacionamentos profissionais baseadas em confiança, harmonia e recriprocidade;blue;habilidades;blue;0,2;-3010;3980;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Relacionamento;Rapport@' +
	'10093;habilidade;Soft Skills;Habilidades sociais;;Liderança;149;Utilização de técnicas de liderança para facilitação do atingimento de objetivos por equipes;blue;habilidades;blue;0,2;-1750;4220;ellipse;;;;;nodes;;70;;@' +
	'10379;habilidade;Soft Skills;Habilidades sociais;;Articulação política;149;Construção de grupos de interesse e afinidade para viabilização institucional de interesses;blue;habilidades;blue;0,2;-1750;4100;ellipse;;;;;nodes;;70;https://pt.wikipedia.org/wiki/Pol%C3%ADtica;Lobby@' +
	'10650;habilidade;Soft Skills;Habilidades sociais;;Resolução de conflitos;149;Mediação de situações conflituosas para sua resolução e retomada das atividades em prol dos objetivos definidos;blue;habilidades;blue;0,2;-2590;3980;ellipse;;;;;nodes;;70;;@' +
	'10770;habilidade;Soft Skills;Habilidades sociais;;Delegação de tarefas;149;Transmitir a responsabilidade pela execução de uma tarefa para outra pessoa e garantir a execução desta tarefa;blue;habilidades;blue;0,2;-2170;3980;ellipse;;;;;nodes;;70;;gestão, liderança@' +
	'90000;;;;;ApresentaçõesXComunicação;;;blue;habilidades;blue;0,2;;;ellipse;10020;10018;;;edges;;70;;@' +
	'90001;;;;;Análise de índices financeirosXAnálise de demonstrativos financeiros;;;blue;habilidades;blue;0,2;;;ellipse;10042;10043;;;edges;;70;;@' +
	'90002;;;;;Análise das contas públicasXAnálise macro econômica;;;blue;habilidades;blue;0,2;;;ellipse;10129;10127;;;edges;;70;;@' +
	'90004;;;;;Análise fundamentaistaXAvaliação de empresas;;;blue;habilidades;blue;0,2;;;ellipse;10045;10054;;;edges;;70;;@' +
	'90005;;;;;Análise fundamentaistaXPrecificação de títulos de renda fixa;;;blue;habilidades;blue;0,2;;;ellipse;10064;10054;;;edges;;70;;@' +
	'90006;;;;;Análise das políticas monetárias e fiscaisXAnálise macro econômica;;;blue;habilidades;blue;0,2;;;ellipse;10129;10128;;;edges;;70;;@' +
	'90007;;;;;Avaliação de opções reaisXPrecificação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10065;10044;;;edges;;70;;@' +
	'90012;;;;;Curva a termo de jurosXCálculo de juros;;;blue;habilidades;blue;0,2;;;ellipse;10061;10063;;;edges;;70;;@' +
	'90013;;;;;Captação a mercado de dívidaXDeterminação da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10046;10041;;;edges;;70;;@' +
	'90014;;;;;Captação a mercado via açõesXDeterminação da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10046;10040;;;edges;;70;;@' +
	'90015;;;;;Captação a mercado via açõesXAvaliação de empresas;;;blue;habilidades;blue;0,2;;;ellipse;10045;10040;;;edges;;70;;@' +
	'90017;;;;;Análises estratégicas x decisão estratégica;;;blue;habilidades;blue;0,2;;;ellipse;1029;1030;;;edges;;70;;@' +
	'90019;;;;;Contabilização de custosXPrincípios de contabilidade;;;blue;habilidades;blue;0,2;;;ellipse;10106;10101;;;edges;;70;;@' +
	'90021;;;;;Consolidação das Leis do trabalhoXprincípios constitucionais do direito;;;blue;habilidades;blue;0,2;;;ellipse;10121;10122;;;edges;;70;;@' +
	'90024;;;;;Contabilização de receitasXPrincípios de contabilidade;;;blue;habilidades;blue;0,2;;;ellipse;10106;10102;;;edges;;70;;@' +
	'90027;;;;;Contabilização fiscalXContabilização de receitas;;;blue;habilidades;blue;0,2;;;ellipse;10102;10105;;;edges;;70;;@' +
	'90028;;;;;Contabilização fiscalXContabilização de custos;;;blue;habilidades;blue;0,2;;;ellipse;10101;10105;;;edges;;70;;@' +
	'90030;;;;;Criação de estratégia competitivaXAnálise da concorrência;;;blue;habilidades;blue;0,2;;;ellipse;10032;10075;;;edges;;70;;@' +
	'90031;;;;;Criação de estratégias de hedgeXPrecificação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10065;10066;;;edges;;70;;@' +
	'90032;;;;;Contabilização de resultadosXContabilização de custos;;;blue;habilidades;blue;0,2;;;ellipse;10101;10103;;;edges;;70;;@' +
	'90033;;;;;Criação de estratégia competitivaXSegmentação de mercado;;;blue;habilidades;blue;0,2;;;ellipse;10083;10075;;;edges;;70;;@' +
	'90034;;;;;Criação de estratégias de Recursos humanosXGestão de remuneração e benefícios;;;blue;habilidades;blue;0,2;;;ellipse;10091;10088;;;edges;;70;;@' +
	'90035;;;;;Criação de negócio no modelo Lean Start-upXCriação de novos modelos de negócios;;;blue;habilidades;blue;0,2;;;ellipse;10030;10029;;;edges;;70;;@' +
	'90038;;;;;Definição de pessoa jurídicaXprincípios constitucionais do direito;;;blue;habilidades;blue;0,2;;;ellipse;10121;10112;;;edges;;70;;@' +
	'90040;;;;;Gerência de projetoXPlanejamento de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10005;10006;;;edges;;70;;@' +
	'90041;;;;;Design thinkingXBrainstorming;;;blue;habilidades;blue;0,2;;;ellipse;10027;10026;;;edges;;70;;@' +
	'90042;;;;;Determinação de níveis de eficiênciaXCriação e revisão de processos;;;blue;habilidades;blue;0,2;;;ellipse;10011;10012;;;edges;;70;;@' +
	'90044;;;;;Fusões e aquisiçõesXDeterminação da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10046;10047;;;edges;;70;;@' +
	'90045;;;;;Determinação de níveis de eficiência -> Planejamento operacional;;;blue;habilidades;blue;0,2;;;ellipse;10012;10015;;;edges;;70;;@' +
	'90049;;;;;Fusões e aquisiçõesXAvaliação de empresas;;;blue;habilidades;blue;0,2;;;ellipse;10045;10047;;;edges;;70;;@' +
	'90050;;;;;Gerência de projetoXGerênciamento de riscos de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10004;10006;;;edges;;70;;@' +
	'90052;;;;;Criação de negócio no modelo Lean Start-upXInovação em produtos e serviços;;;blue;habilidades;blue;0,2;;;ellipse;10028;10029;;;edges;;70;;@' +
	'90056;;;;;Gestão de produtosXPrecificação de produtos e serviços;;;blue;habilidades;blue;0,2;;;ellipse;10082;10078;;;edges;;70;;@' +
	'90058;;;;;Financiamento de novos negóciosXdeterminação da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10046;10031;;;edges;;70;;@' +
	'90059;;;;;Gestão de produtosXAnálise da concorrência;;;blue;habilidades;blue;0,2;;;ellipse;10032;10078;;;edges;;70;;@' +
	'90060;;;;;Gestão de produtosXDesenvolvimento de novos produtos;;;blue;habilidades;blue;0,2;;;ellipse;10081;10078;;;edges;;70;;@' +
	'90061;;;;;Gestão de caixaXAnálise de demonstrativos financeiros;;;blue;habilidades;blue;0,2;;;ellipse;10042;10048;;;edges;;70;;@' +
	'90062;;;;;Materiais institucionaisXUtilização MS Office;;;blue;habilidades;blue;0,2;;;ellipse;1016;10084;;;edges;;70;;@' +
	'90066;;;;;Montagem de demonstrativos financeirosXPrincípios de contabilidade;;;blue;habilidades;blue;0,2;;;ellipse;10106;10107;;;edges;;70;;@' +
	'90069;;;;;Negociação de jurosXPrecificação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10065;10062;;;edges;;70;;@' +
	'90070;;;;;Negociação de jurosXCálculo da curva a termo de juros;;;blue;habilidades;blue;0,2;;;ellipse;10063;10062;;;edges;;70;;@' +
	'90071;;;;;Negociação de moedas estrangeirasXPrecificação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10065;10067;;;edges;;70;;@' +
	'90074;;;;;Planejamento de projetosXAnálise de valor agregado de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10002;10005;;;edges;;70;;@' +
	'90075;;;;;Planejamento de projetosXDesenvolvimento de cronogramas;;;blue;habilidades;blue;0,2;;;ellipse;10003;10005;;;edges;;70;;@' +
	'90076;;;;;Negociação de moedas estrangeirasXNegociação;;;blue;habilidades;blue;0,2;;;ellipse;10022;10067;;;edges;;70;;@' +
	'90077;;;;;Reestruturação de passivosXDeterminação da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10046;10038;;;edges;;70;;@' +
	'90079;;;;;Reestruturação de passivosXGestão de caixa;;;blue;habilidades;blue;0,2;;;ellipse;10048;10038;;;edges;;70;;@' +
	'90081;;;;;Precificação de títulos de renda fixaXCálculo da curva a termo de juros;;;blue;habilidades;blue;0,2;;;ellipse;10063;10064;;;edges;;70;;@' +
	'90082;;;;;Reestruturação societáriaXCriação de sociedades;;;blue;habilidades;blue;0,2;;;ellipse;10117;10114;;;edges;;70;;@' +
	'90083;;;;;Relatórios para investidoresXRelatórios gerenciais;;;blue;habilidades;blue;0,2;;;ellipse;10049;10051;;;edges;;70;;@' +
	'90088;;;;;Valor do dinheiro no tempoXCálculo de juros;;;blue;habilidades;blue;0,2;;;ellipse;10061;10060;;;edges;;70;;@' +
	'90090;;;;;Definição de pessoa jurídica x criação de sociedades;;;blue;habilidades;blue;0,2;;;ellipse;10112;10117;;;edges;;70;;@' +
	'90091;;;;;Princípios processuais brasileiros x Processo civil no Brasil;;;blue;habilidades;blue;0,2;;;ellipse;10257;10258;;;edges;;70;;@' +
	'90092;;;;;Processo civil no Brasil x execução de sentenças;;;blue;habilidades;blue;0,2;;;ellipse;10258;10259;;;edges;;70;;@' +
	'90093;;;;;Processo civil no Brasil x Recursos;;;blue;habilidades;blue;0,2;;;ellipse;10258;10260;;;edges;;70;;@' +
	'90094;;;;;Tributação x elisão fiscal;;;blue;habilidades;blue;0,2;;;ellipse;1025;10271;;;edges;;70;;@' +
	'90095;;;;;Custo de capital x otimização da estrutura de capital;;;blue;habilidades;blue;0,2;;;ellipse;10052;10046;;;edges;;70;;@' +
	'90096;;;;;Emissão de ordem de negociação x negociação em mercado;;;blue;habilidades;blue;0,2;;;ellipse;10338;10062;;;edges;;70;;@' +
	'90097;;;;;Spreads e premios x arbitragem;;;blue;habilidades;blue;0,2;;;ellipse;10195;10196;;;edges;;70;;@' +
	'90098;;;;;Arbitragem x estratégias de negociação;;;blue;habilidades;blue;0,2;;;ellipse;10196;10311;;;edges;;70;;@' +
	'90099;;;;;Abstração x criatividade;;;blue;habilidades;blue;0,2;;;ellipse;10425;10382;;;edges;;70;;@' +
	'90100;;;;;Comunicação oral x narrativa;;;blue;habilidades;blue;0,2;;;ellipse;10020;10017;;;edges;;70;;@' +
	'90101;;;;;Comunicação corporal x narrativa;;;blue;habilidades;blue;0,2;;;ellipse;10427;10017;;;edges;;70;;@' +
	'90102;;;;;pesquisa de mercado x segmentação;;;blue;habilidades;blue;0,2;;;ellipse;10073;10083;;;edges;;70;;@' +
	'90103;;;;;análise de mercado x gestão de produto;;;blue;habilidades;blue;0,2;;;ellipse;1039;1038;;;edges;;70;;@' +
	'90104;;;;;Criação plano de negócios -> empreendedorismo social;;;blue;habilidades;blue;0,2;;;ellipse;10322;10367;;;edges;;70;;@' +
	'90105;;;;;Criação de modelo de negócios -> criação de plano de negócios;;;blue;habilidades;blue;0,2;;;ellipse;10030;10322;;;edges;;70;;@' +
	'90106;;;;;Criação de plano de negócios -> aceleração de empreendimentos;;;blue;habilidades;blue;0,2;;;ellipse;10322;10407;;;edges;;70;;@' +
	'90107;;;;;Análise da concorrência -> Planejamento estratégico;;;blue;habilidades;blue;0,2;;;ellipse;10032;10037;;;edges;;70;;@' +
	'90108;;;;;Análise estrutural -> Planejamento estratégico;;;blue;habilidades;blue;0,2;;;ellipse;10035;10037;;;edges;;70;;@' +
	'90109;;;;;Análise SWOT -> Planejamento estratégico;;;blue;habilidades;blue;0,2;;;ellipse;10417;10037;;;edges;;70;;@' +
	'90110;;;;;Planejamento estratégico -> Criação de estratégia corporativa;;;blue;habilidades;blue;0,2;;;ellipse;10037;10036;;;edges;;70;;@' +
	'90111;;;;;Criação de estratégia corporativa -> criação de plano de ação;;;blue;habilidades;blue;0,2;;;ellipse;10036;10420;;;edges;;70;;@' +
	'90112;;;;;Análise de garantias - > gestão de garantias;;;blue;habilidades;blue;0,2;;;ellipse;10349;10312;;;edges;;70;;@' +
	'90113;;;;;Criação de relatórios gerenciais -> criação de relatórios para investidores;;;blue;habilidades;blue;0,2;;;ellipse;10049;10051;;;edges;;70;;@' +
	'90114;;;;;Contabilidade empresarial -> controladoria;;;blue;habilidades;blue;0,2;;;ellipse;1018;1033;;;edges;;70;;@' +
	'90115;;;;;Fusões e aquisições -> criação de estratégia de saída;;;blue;habilidades;blue;0,2;;;ellipse;10047;10186;;;edges;;70;;@' +
	'90116;;;;;Captação a mercado via ações -> criação de estratégia de saída;;;blue;habilidades;blue;0,2;;;ellipse;10040;10186;;;edges;;70;;@' +
	'90117;;;;;Avaliação de projetos -> avaliação de opções reais;;;blue;habilidades;blue;0,2;;;ellipse;10307;10044;;;edges;;70;;@' +
	'90118;;;;;Projeção financeira - > avaliação por desconto;;;blue;habilidades;blue;0,2;;;ellipse;10352;10187;;;edges;;70;;@' +
	'90119;;;;;Avaliação por desconto -> avaliação de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10187;10307;;;edges;;70;;@' +
	'90120;;;;;Análise da curva a termo -> investimentos alternativos;;;blue;habilidades;blue;0,2;;;ellipse;10063;10176;;;edges;;70;;@' +
	'90121;;;;;Análise de títulos de renda fixa - > investimentos alternativos;;;blue;habilidades;blue;0,2;;;ellipse;10064;10176;;;edges;;70;;@' +
	'90122;;;;;Avaliação de performance -> gestão de portfólio;;;blue;habilidades;blue;0,2;;;ellipse;10184;10057;;;edges;;70;;@' +
	'90123;;;;;Avaliação de performance -> gestão institucional;;;blue;habilidades;blue;0,2;;;ellipse;10184;10181;;;edges;;70;;@' +
	'90124;;;;;Teste de estresse -> Classificação de risco;;;blue;habilidades;blue;0,2;;;ellipse;10341;10340;;;edges;;70;;@' +
	'90125;;;;;Análise de títulos de renda fixa - > classificação de risco;;;blue;habilidades;blue;0,2;;;ellipse;10064;10340;;;edges;;70;;@' +
	'90126;;;;;Identificação de impactos -> criação de estratégia sustentável;;;blue;habilidades;blue;0,2;;;ellipse;10408;10365;;;edges;;70;;@' +
	'90127;;;;;Criação de estratégia sustentável -> gestão sustentável;;;blue;habilidades;blue;0,2;;;ellipse;10365;10013;;;edges;;70;;@' +
	'90128;;;;;Marketing de sistemas de busca -> criação de campanhas digitais;;;blue;habilidades;blue;0,2;;;ellipse;10358;10316;;;edges;;70;;@' +
	'90129;;;;;Marketing de redes sociais-> criação de campanhas digitais;;;blue;habilidades;blue;0,2;;;ellipse;10359;10316;;;edges;;70;;@' +
	'90130;;;;;Dimensionamento de infraestrutura técnológica - > Planejamento de sistemas;;;blue;habilidades;blue;0,2;;;ellipse;10399;10398;;;edges;;70;;@' +
	'90131;;;;;Determinação de níveis de eficiência -> métricas de performance;;;blue;habilidades;blue;0,2;;;ellipse;10012;10314;;;edges;;70;;@' +
	'90132;;;;;Gestão de estoques -> otimização logística;;;blue;habilidades;blue;0,2;;;ellipse;10401;10071;;;edges;;70;;@' +
	'90133;;;;;Gestão de transportes -> otimização logística;;;blue;habilidades;blue;0,2;;;ellipse;10402;10071;;;edges;;70;;@' +
	'90134;;;;;Planejamento de recursos -> otimização logística;;;blue;habilidades;blue;0,2;;;ellipse;10403;10071;;;edges;;70;;@' +
	'90135;;;;;Otimização logística -> planejamento de produção global;;;blue;habilidades;blue;0,2;;;ellipse;10071;10369;;;edges;;70;;@' +
	'90136;;;;;Avaliação de performance -> gestão por competências;;;blue;habilidades;blue;0,2;;;ellipse;10415;10416;;;edges;;70;;@' +
	'90137;;;;;Criação de planos de carreiras -> criação de estratégias de atração e retenção;;;blue;habilidades;blue;0,2;;;ellipse;10088;10410;;;edges;;70;;@' +
	'90138;;;;;Gestão de remuneração e benefícios - > criação de estratégias de atração e retenção;;;blue;habilidades;blue;0,2;;;ellipse;10091;10410;;;edges;;70;;@' +
	'90139;;;;;Definição de mandatos e cargos - > definição de estrutura organizacional;;;blue;habilidades;blue;0,2;;;ellipse;10096;10171;;;edges;;70;;@' +
	'90140;;;;;Criação de organogramas -> Definição de estrutura organizacional;;;blue;habilidades;blue;0,2;;;ellipse;10097;10171;;;edges;;70;;@' +
	'90141;;;;;Agir Proativamente -> Empreender;;;blue;habilidades;blue;0,2;;;ellipse;10326;10325;;;edges;;70;;@' +
	'90142;;;;;Empatia -> Influenciar pessoas;;;blue;habilidades;blue;0,2;;;ellipse;10429;10014;;;edges;;70;;@' +
	'90143;;;;;Influenciar pessoas -> Persuasão;;;blue;habilidades;blue;0,2;;;ellipse;10014;10430;;;edges;;70;;@' +
	'90144;;;;;Persuasão -> articulação política;;;blue;habilidades;blue;0,2;;;ellipse;10430;10379;;;edges;;70;;@' +
	'90145;;;;;Trabalho em equipe -> Liderança;;;blue;habilidades;blue;0,2;;;ellipse;10162;10093;;;edges;;70;;@' +
	'90146;;;;;Persuasão -> Liderança;;;blue;habilidades;blue;0,2;;;ellipse;10430;10093;;;edges;;70;;@' +
	'90147;;;;;Raciocínio lógico -> Enquadramento de problemas;;;blue;habilidades;blue;0,2;;;ellipse;10327;10165;;;edges;;70;;@' +
	'90148;;;;;Raciocínio lógico -> Analisar;;;blue;habilidades;blue;0,2;;;ellipse;10327;10329;;;edges;;70;;@' +
	'90149;;;;;Pesquisa -> Trabalhos acadêmicos;;;blue;habilidades;blue;0,2;;;ellipse;128;100;;;edges;;70;;@' +
	'90150;;;;;Contabilização de investimentos -> contabilização de depreciação;;;blue;habilidades;blue;0,2;;;ellipse;10226;10225;;;edges;;70;;@' +
	'90151;;;;;Contabilidade empresarial -> Finanças corporativas;;;blue;habilidades;blue;0,2;;;ellipse;1018;1032;;;edges;;70;;@' +
	'90152;;;;;Cálculo do custo de capital -> Avaliação por múltiplos;;;blue;habilidades;blue;0,2;;;ellipse;10052;10187;;;edges;;70;;@' +
	'90153;;;;;Cálculo do custo de capital -> Avaliação da geração de valor;;;blue;habilidades;blue;0,2;;;ellipse;10052;10351;;;edges;;70;;@' +
	'90154;;;;;Análise de demonstrativos financeiros -> projeção financeira;;;blue;habilidades;blue;0,2;;;ellipse;10042;10352;;;edges;;70;;@' +
	'90155;;;;;Avaliação de projetos -> financiamento de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10307;10346;;;edges;;70;;@' +
	'90156;;;;;Avaliação por desconto -> avaliação de empresas;;;blue;habilidades;blue;0,2;;;ellipse;10187;10045;;;edges;;70;;@' +
	'90157;;;;;Avaliação por múltiplos -> avaliação de empresas;;;blue;habilidades;blue;0,2;;;ellipse;10188;10045;;;edges;;70;;@' +
	'90158;;;;;Gestão de riscos -> gestão de portfólio;;;blue;habilidades;blue;0,2;;;ellipse;10183;10057;;;edges;;70;;@' +
	'90159;;;;;Visão baseada em recursos -> Análise de competências organizacionais;;;blue;habilidades;blue;0,2;;;ellipse;10433;10432;;;edges;;70;;@' +
	'90160;;;;;Alavancagem -> geração de valor;;;blue;habilidades;blue;0,2;;;ellipse;10185;10351;;;edges;;70;;@' +
	'90161;;;;;geração de valor -> avaliação de projetos;;;blue;habilidades;blue;0,2;;;ellipse;10351;10307;;;edges;;70;;@' +
	'90162;;;;;Criação de covenants financeiros -> Reestruturação;;;blue;habilidades;blue;0,2;;;ellipse;10350;10038;;;edges;;70;;@' +
	'90163;;;;;Criação de covenants financeiros -> Securitização;;;blue;habilidades;blue;0,2;;;ellipse;10350;10189;;;edges;;70;;@' +
	'90164;;;;;Criação de covenants financeiros -> Captação de dívida;;;blue;habilidades;blue;0,2;;;ellipse;10350;10041;;;edges;;70;;@' +
	'90165;;;;;Negociação em mercado organizado -> negociação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10062;10194;;;edges;;70;;@' +
	'90166;;;;;Avaliação de opções -> negociação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10197;10194;;;edges;;70;;@' +
	'90167;;;;;Precificação de opções -> negociação de derivativos;;;blue;habilidades;blue;0,2;;;ellipse;10065;10194;;;edges;;70;;@';



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
			        idHabilidade : arrayItensHabilidade[0],
			        name : arrayItensHabilidade[5],
			        descricao : arrayItensHabilidade[7],
			        wiki : arrayItensHabilidade[22],
			        area : arrayItensHabilidade[2],
			        campo : arrayItensHabilidade[3],
			        categoria : arrayItensHabilidade[4],
			        parent : arrayItensHabilidade[6],
			        classes : arrayItensHabilidade[1],
			        weight : arrayItensHabilidade[21],
			        positionX : arrayItensHabilidade[12],
			        positionY : arrayItensHabilidade[13],
			        opacity : arrayItensHabilidade[11],
			        color : arrayItensHabilidade[8],
			        shape : arrayItensHabilidade[14],
			        width : arrayItensHabilidade[20],
			        lineColor : arrayItensHabilidade[10],
			        targetArrowColor : arrayItensHabilidade[17],
			        targetArrowShape : arrayItensHabilidade[18],
			        source : arrayItensHabilidade[15],
			        target : arrayItensHabilidade[16],
			        tags: [],
			        cursos: [],
			        objetivos: [],
			        preRequisitos: []
			    }	
			}
		if (arrayItensHabilidade[23]){
			var array = arrayItensHabilidade[23].split(",");
			var w = 0;
			while (w < array.length) {
				objJson.documento.tags.push(array[w].replace (" ",""));
				w++;
			};
		};
		rest_incluiHabilidades(objJson, semAcao, semAcao)
		i++;
	}
};

function carregaCarreirasTotal (){
	
	rest_obterHabilidades(carregaCarreirasProcess, semAcao);

};

function carregaCarreirasProcess (elementos){
	
	localStorage.setItem("elements", JSON.stringify(elementos));

	var carreiras = 

		'Estagiário - Análise investimentos;Serviços financeiros;Finanças;Apoie a recomendação de investimentos em ações ou empresas para clientes investidores ou tomadores de decisão internos. ;Análise de demonstrativos financeiros e índices, modelagem financeira e avaliação de empresas. Acompanhamento do desempenho de ações. Pesquisa e análise econômica. Criação de bancos de dados, estudos, relatórios e apresentações para investidores. ; 1.200 ; 2.500 ; 1.700 ;Equity Research, valuation, mercado financeiro, bolsa de valores;Office, inglês, valuation (DCF, multiplos);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10042, 10043;matemática financeira, análise econômica, empreendedorismo;150, 1010, 1011,1012, 10018, 10325@' +
		'Estagiário - Equity research;Serviços financeiros;Finanças;Apoie a criação de recomendações de investimentos em ações e de estratégias de investimentos em bolsas de valores.;Preparo de apresentações e suporte a analistas, analise setorial e de ações, modelagem financeira, pesquisa e análise economica, criação de modelos econômicos, automatização de rotinas.; 1.200 ; 2.500 ; 1.700 ;Mercado financeiro, bolsa de valores,;inglês, proatividade, finanças, economia;10155, 10156, 10157, 10158, 10296, 10187, 10188, 10042, 10043;VBA;10330, 10146,116, 117, 1032@' +
		'Estagiário - Back-office;Serviços financeiros;Finanças;Crie e gerencie controles operacionais e financeiros de fundos de investimento. Acompanhe seu desempenho e apresente seu resultado.;Conciliação de carteiras, construção de demonstrativos de resultados e análises de resultados. Atendimento a clientes, cadastro de novos clientes e criação de materiais de apresentação.; 1.200 ; 1.800 ; 1.500 ;Back-office, asset management, fundos de investimentos, P&L;Excel, power point, analítico, comunicação, inglês;10155, 10156, 10157, 10158, 10296, 10020, 10107, 10329;Conciliação;10347@' +
		'Estagiário - Banco de investimentos;Serviços financeiros;Finanças;Apoie a originação e execução de operações de fusões e aquisições e de captação de recursos via dívida ou venda ações.;Pesquisa de mercado e econômica, análise financeira de projetos e empresas, avaliação por desconto de fluxo de caixa e por múltiplos, criação de apresentações e pitches; 1.600 ; 2.600 ; 2.100 ;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Office, inglês, valuation (DCF, multiplso);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;;10018@' +
		'Estagiário - Fusões e aquisições;Serviços financeiros;Finanças;Apoie a originação, estruturação e execução de operações de fusões e aquisições;Modelagem financeira, análise por múltiplos, criação de apresentações, Acompanhamento de due diligence; 1.400 ; 2.500 ; 1.750 ;M&A, Valuation, MBO;Office, inglês, finanças corporativas, contabilidade;10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;;10018@' +
		'Estagiário - Finanças estruturadas;Serviços financeiros;Finanças;Estruture operações de captação de recursos e otimização financeira para clientes corporativos.;Pesquisa econômica e análise de setores econômicos, análise de crédito e carteira, criação de propostas de negócios, estruturação de operações, acompanhamento de garantias e criação de relatórios.; 1.200 ; 2.200 ; 1.700 ;FIDC, structured finance, securitização;contabilidade/ finanças, analítico, office, inglês;10155, 10156, 10157, 10158, 10296, 10089, 10073, 10129;mercado de commodities;10070@' +
		'Estagiário - Private equity;Serviços financeiros;Finanças;Apoie a originação, modelagem, estruturação e execução de investimentos privados em empresas.;Criação de teses de investimentos, modelagem e análise financeira de empresas, criação de apresentações e relatórios, gestão de empresas investidas. Análise de indicadores econômicos.; 1.200 ; 2.200 ; 1.700 ;PE, VC, Angel, capital de risco, impact investing, sustentabilidade;Analitico, empreendedor, empatia, inglês, office, pro atividade;10155, 10156, 10157, 10158, 10296, 10014;Valuation;10187, 10188, 10018@' +
		'Estagiário - Trading;Serviços financeiros;Finanças;Apoie a execução de transações realizadas em mercados organizados e controle seus resultados.;Atualizar banco de dados, elaboração de relatórios, apresentações, analisar relatórios de vendas, boletagem de operações; 1.100 ; 1.800 ; 1.400 ;Call, Put, short, long;inglês, excel (intermadiários);10155, 10156, 10157, 10158, 10296, 10062, 10338;VBA;10330@' +
		'Estagiário - Produtos;Serviços financeiros;Finanças;Acompanhe o desempenho de produtos financeiros e apoie o desenvolvimento de ações para melhorar seu desempenho.;Controle de gastos, acompanhamento de KPIs, acompanhamento de reclamações e de risco operacional, relacionamento com outras áreas.; 1.000 ; 2.000 ; 1.500 ;Cartões, renda fixa local, renda fixa moeda estrangeira;inglês, espanhol,  excel (intermadiários);10155, 10156, 10157, 10158, 10296, 10019,  10314;;@' +
		'Estagiário - Inteligência de mercado;Serviços financeiros;Marketing;Apoie a criação de ferramentas de informação de competidores e clientes, acompanhe métricas de desempenho e sugira melhorias.;Pesquisa de mercado, análise de competidores, prospecção de clientes, criação de índices e KPIs, revisão de processos, criação de diferenciais competitivos; 1.200 ; 1.800 ; 1.600 ;Business Inteligence, inteligência competitiva, BI;Office, access, inglês, relacionamento interpessoal, raciocinio lógico;10155, 10156, 10157, 10158, 10296, 10019,  10314, 10024, 10440;;@' +
		'Estagiário - Atendimento;Serviços financeiros;Comercial;Seja o ponto de contato entre a empresa e seus clientes, melhore a experiência dos clientes e ofereça produtos adaptados a suas necessidades.;Atendimento a clientes, explicação de produtos, boletagem de operações, definição de perfil de investidor; 1.000 ; 1.600 ; 1.400 ;call center;comunicação, inglês, office;10155, 10156, 10157, 10158, 10296, 10019, 10321, 10023;;@' +
		'Estagiário - Private Banking;Serviços financeiros;Comercial;Apoie a construção do relacionamento com clientes de alta renda, oferencendo serviços e informações customizados.;Atendimento a clientes, cadastramento e operacionalização de contas, gestão de patrimonio, preparação de materiais; 1.200 ; 2.200 ; 1.700 ;wealth management;Inglês, Office, ;10155, 10156, 10157, 10158, 10296, 10019, 10321, 10023;Setor financeiro;10554, 10039, 10057, 10173@' +
		'Estagiário - Contabilidade;Serviços financeiros;Contabilidade;Apoie o controle contábil dos negócios, garanta a qualidade e abrangência das informações geradas. ;Conciliação de posições, contabilização de operações, validação de sistemas, ; 1.000 ; 1.600 ; 1.300 ;ciências contábeis;;10155, 10156, 10157, 10158, 10296, 10323, 10101, 10102, 10103, 10227;;10293, 1018, 1019@' +
		'Estagiário - Riscos;Serviços financeiros;Administrativo;Avalie e crie mecanismos de avaliação de riscos, desenvolva estudos prospectivos e sugira melhorias de controle.;Análise exploratória, criação de metodologia de análise de riscos, desenvolvimento de estudos, criação de relatórios e controles gerenciais, gestão do processo de crédito, ; 1.000 ; 1.700 ; 1.400 ;Risk, liquidez, casamento taxas;Ferramentas estatísticas, programação básica, inglês espanhol;10155, 10156, 10157, 10158, 10296, 120, 10293;;1059, 10330, 10331, 10590, 10591@' +
		'Estagiário - Operações e programação;Serviços financeiros;Administrativo;Avalie, crie e mantenha sistemas estatísticos de análise de dados de investimentos.;Análise exploratória, programação de soluções, análise de investimentos e gestão de riscos, automatização de rotinas; 1.000 ; 1.600 ; 1.300 ;Desenvolvimento, Matlab;programação estatística, ;120, 10293;Python, Matlab, R, Excel, VBA, C#;1059, 10330, 10331, 10590, 10591@' +
		'Estagiário - Controladoria;Todas;Finanças;Faça o planejamento financeiro, acompanhe os resultados e gere análises financeiras sobre o negócio.;Planejamento financeiro e orçamentário, criação e consolidação de demonstrativos gerenciais, criação de e relatórios gerenciais, acompanhamento de resultados e condução de análises financeiras.; 1.200 ; 1.800 ; 1.500 ;Controladoria, Orçamento, Planejamento financeiro, FP&A;Inglês, pacote office, raciocínio lógico;10155, 10156, 10157, 10158, 10296, 10049, 10050, 10198, 10327;VBA;10042, 10043, 10330@' +
		'Estagiário - Novos negócios;Todas;Finanças;Apoie o crescimento do negócio através de projetos, novas parcerias, captações e aquisições.;Análise econômico-financeira de projetos e empresas, criação de relatórios e apresentações, negociação com bancos e investidores para captação de recursos.; 1.000 ; 2.200 ; 1.600 ;BizDev, Business development, Fundraising, strategy;Inglês,Office;10155, 10156, 10157, 10158, 10296, 10042, 10043, 10022, 10049;Valuation;10187, 10188, 10018@' +
		'Estagiário - Relacionamento com Investidores;Todas;Finanças;Seja o interlocutor da empresa com o mercado e apoie a sua transparência.;Consolidação de informações e análise financeira do negócio, criação de apresentações, comunicados e relatórios, atendimento a órgãos reguladores e investidores.; 1.200 ; 2.300 ; 1.700 ;RI, Investor relations, Bolsa de valores, IPO;Inglês, Office;10155, 10156, 10157, 10158, 10296, 10042, 10043, 10049;;10018, 10008@' +
		'Estagiário - Administrativo;Todas;Administrativo;Garanta o correto funcionamento da empresa e seus processos. Controle o fluxo de pagamentos e recebimentos.;Controle de contas a pagar e contas a receber, controle de processos, apoio ao processo orçamentário, acompanhamento de projetos, elaboração de documentação e relatórios; 1.200 ; 1.600 ; 1.400 ;Admin, manager, business;Comunicação, Office;10155, 10156, 10157, 10158, 10020, 10042, 10049;análise financeira;10042, 10043@' +
		'Estagiário - Comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Prospecção de mercado, manutenção de pipeline e desenvolvimento de material de vendas, gestão de informação de CRM, elaboração de propostas, criação e acompanhamento de indicadores de performance; 1.000 ; 2.000 ; 1.500 ;Vendas, Sales, Growth;Inglês, office, comunicação, relacionamento interpessoal, trabalho em equipe;10155, 10156, 10157, 10158, 10162, 10020, 10019, 10024;foco em resultado, mídias digitais, criação de propostas;10358, 10359, 10320@' +
		'Estagiário - Estratégia;Todas;Estratégia;Crie um plano de longo prazo para o sucesso da companhia e direcione a empresa na trajetória identificada.;Planejamento estratégico, análise da cadeia de valor, estudos econômicos e setoriais, análise de mercado, avaliação de projetos, criação de planos de negócios.; 1.400 ; 1.800 ; 1.600 ;Strategy;Office, inglês, comunicação;10155, 10156, 10157, 10158, 10296, 10020, 10032, 10035, 10036, 10037;análise de projetos;10307@' +
		'Estagiário - Operações;Todas;Operações;Melhore a eficiência dos processos da empresa e reduza seus custos de produção.;Mapeamento e melhoria de processos, análises operacionais, gestão de bases de dados, desenvolvimento e acompanhamento de KPIs, apoio a projetos estratégicos, pesquisa e análise de dados, desenvolvimento de relatórios.; 1.000 ; 1.800 ; 1.400 ;CPC, operations, logística;Office, solução de problemas, empatia, foco em resultados;10155, 10156, 10157, 10158, 10165, 10011, 10012, 10073, 10163, 10429;;10049@' +
		'Estagiário - Desenvolvimento;Todas;Tecnologia;Apoie o desenvolvimento do produto e a criação de funcionalidades para solucionar problemas de seus clientes.;Desenvolvimento de produtos, atendimento a clientes para identificação de soluções, melhoria de processos.; 1.000 ; 1.200 ; 1.100 ;Development, coding, programação, desenvolvimento;Office, comunicação;10155, 10156, 10157, 10158, 10020, 10293, 10011;Programação;10293@' +
		'Estagiário - Marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Pesquisa de mercado, gestão de campanhas, organização de eventos, criação e gestão de KPIs, gestão de canais.; 1.000 ; 1.600 ; 1.300 ;Marketing, Intern;Office, inglês;10155, 10156, 10157, 10158, 10296, 10073, 10086;;10082, 10083@' +
		'Estagiário - Recursos humanos;Todas;Recursos humanos;Atraia, gerencie e retenha os melhores talentos do mercado para atuar na empresa.;Cadastro de currículos, divulgação de vagas, criação de relatórios e apresentações, criação e manutenção de indicadores, recrutamento de funcionários, pesquisa de mercado, gestão e treinamento de recursos humanos.; 1.000 ; 1.600 ; 1.300 ;Treinamento e desenvolvimento, RH;Inglês, Excel;10155, 10156, 10157, 10158, 10296, 10019, 10412, 10413, 10414;;10049, 10090, 10096, 10091, 10092, 10073@' +
		'Estagiário - Consultor;Serviços;Consultoria;Crie melhorias e eficiências nos negócios de seus clientes.;Pesquisa de mercado, criação de propostas e apresentações, criação de apresentações, análise de mercado e financeira, mapeamento de processos, modelagem financeira, planejamento estratégico; 1.200 ; 2.200 ; 1.600 ;Consulting, capacity building, outsourcing;Comunicação, Office, finanças, trabalho em equipe;10060, 1029, 10080, 10155, 10156, 10157, 10158, 10162, 10020, 10073;;10039, 10042, 10043, 10018@' +
		'Estagiário - Consultor financeiro;Serviços;Finanças;Maximize o desempenho financeiro de seus clientes, reduzindo custo de capital e maximizando seu fluxo de caixa.;Pesquisa de mercado,  Análise econômico-financeira e valuation, assessoria em leilões e due diligences, estruturação de operações de captação e aquisições, criação de planos de negocios.; 1.400 ; 1.800 ; 1.600 ;Boutique de M&A;Office, inglês, valuation (DCF, multiplso);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;leilões;10199@' +
		'Estagiário - Consultor TI;Serviços;Tecnologia;Construa novos sistemas e soluções digitais para melhorar os negócios de seus clientes.;Apoiar projetos de desenvolvimento, atendimento a clientes, análise de políticas públicas, análise estratégica.; 1.000 ; 1.200 ; 1.100 ;Outsourcing;Office, inglês;10155, 10156, 10157, 10158, 10296, 10032, 10035;Programação;10293@' +
		'Estagiário - Comunicação;Serviços;Marketing;Apoie a criação de conteúdo da empresa, para utilização com clientes e funcionários e para fins mercadológicos de atração de clientes e desenvolvimento da marca.;Criação de conteúdo, suporte, criação de treinamentos para analistas de investimentos; 1.200 ; 1.800 ; 1.500 ;;Comunicação oral e escrita, relacionamento, senso crítico;10155, 10156, 10157, 10158, 10019, 10161, 10329, 10020, 10426;;10092@' +
		'Estagiário - Operações;Serviços;Operações;Apoie a gestão da produção, e do desenvolvimento de produtos novos e atuais.;Implementação e manutenção de produtos, acompanhamento de projetos e criação de promoções; 1.200 ; 1.700 ; 1.450 ;;office, google analytics, inglês, criação websites;10155, 10156, 10157, 10158, 10296, 10354;;10592@' +
		'Estagiário - CRM;Serviços;Administrativo;Apoie a construção de relacionamento com clientes através de plataformas de relacionamento, e gerencie seu desempenho.;Desenvolvimento de campanhas de vendas e de comunicações com clientes, acompanhamento de processos e campanhas, criação de métricas, criação de apresentações e índices, projeção de vendas.; 1.000 ; 1.600 ; 1.300 ;;solução de problemas, trabalho em equipe, ingles, analitico, excel;10155, 10156, 10157, 10158, 10296, 10019, 10162, 10165, 10020, 10426;;10356, 10314@' +
		'Estagiário - Gestão de produtos;Indústria, Tecnologia, Telecom;Marketing;Crie soluções aos problemas de seus consumidores com produtos e serviços, alavanque as vendas dos produtos.;Monitoramento de desempenho de vendas, precificação, relatórios gerenciais, estratégia de precificação, planejamento de canais.; 1.000 ; 1.600 ; 1.300 ;Vendas, Sales, Growth;Office, inglês, solução de problemas;10155, 10156, 10157, 10158, 10296, 10165, 10049, 10077, 10082;;10083@' +
		'Estagiário - Administrativo;Indústria;Administrativo;Apoie a execução dentro da empresa, controle o desempenho de projetos e dos custos de operação da empresa. Apoie a implementação de parcerias.;Projeção e controle de custos, criação de indicadores, acompanhamento de projetos, implantação de projetos, criação de cotações e contratos, pesquisa de mercado; 1.000 ; 1.600 ; 1.300 ;;office, relacionamento interpessoal, inglês;10155, 10156, 10157, 10158, 10296, 10314, 10073;setor elétrico;10006, 10172, 10553@' +
		'Estagiário - Finanças;Energia;Finanças;Apoiar as rotinas de controle e planejamento financeiro, acompanhamento do contas a pagar ;Acompanhamento de orçamento e P&L, gestão contas a receber, acompanhamento de dívidas e crédito com clientes, criação de apresentações e materiais para funding; 1.100 ; 1.700 ; 1.500 ;;Office, matemática financeira, contabilidade, ;10155, 10156, 10157, 10158, 10296, 10323, 10101, 10102, 10103, 10227;setor financeiro, energia, vba;10330, 10553, 10554@' +
		'Estagiário - Planejamento estratégico;Agronegócio;Estratégia;Apoie a criação de planejamentos de longo prazo da empresa, levando em consideração o mercado que ela está inserida, seus competidores e produtos.;Apoio ao desenvolvimento de planejamento estratégico; 1.200 ; 1.800 ; 1.500 ;;;10155, 10156, 10157, 10158, 10296, 10072, 10200, 10032, 10033, 10034, 10035, 10364, 10037;;1029, 1030@' +
		'Estagiário - Administração pública;ONG/ Setor público;Administrativo;Apoie a criação de programas sociais e culturais, controle a eficiência operacional das operações.;Apoio à coordenação de programas, controlar report de colaboradores, criar e monitorar índices, criar apresentações, apoio ao desenvolvimento de novos projetos; 1.000 ; 1.500 ; 1.300 ;;;10155, 10156, 10157, 10158, 10019, 10005, 10006, 10314;;@' +
		'Estagiário - Inteligência competitiva;Varejo;Tecnologia;Desenvolva novas informações para apoiar a tomada de decisão estratégica e de vendas.;Criação e automatização de relatórios, extração de dados, desenvolvimento de estudos e projeções econômicas. ; 1.200 ; 1.600 ; 1.400 ;Business Inteligence, inteligência competitiva, BI;Office, inglês, organização;10155, 10156, 10157, 10158, 10296, 10049, 10146;Marketing digital;1061@' +
		'Estagiário - Marketing de performance;Varejo;Marketing;Desenvolva e gerencie campanhas digitais para alavancar as vendas da companhia.;Criação e gestão de campanhas, iniciativas de SEO, criação de relatórios, qualificaçãoe conversão de leads, criação e acompanhamento de índices e KPIs.; 1.000 ; 1.600 ; 1.300 ;Digital marketing, Google, adwords, faceads;Excel, inglês, analítico;10155, 10156, 10157, 10158, 10296, 10049, 10329;Google analytics, VBA, marketing digital;1061, 10330@' +
		'Analista de recursos humanos;Todas;Recursos humanos;Atraia, retenha e desenvolva os melhores talentos do mercado para atuar na empresa.;Cadastro de currículos, divulgação de vagas, criação de relatórios e apresentações, criação e manutenção de indicadores, recrutamento de funcionários, pesquisa de mercado, gestão e treinamento de recursos humanos.; 2.000 ; 6.000 ; 4.000 ;RH, HR;Seleção candidatos, processo seletivo, contratação desligamento, treinamento;10155, 10156, 10157, 10158, 1045, 10092, 10415;atração retenção;1044@' +
		'Analista comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Prospecção de mercado e manutenção de pipeline, revisão de materiais de vendas e relatórios, revisão de contratos, elaboração e acompanhamento de projetos, faturamento de vendas.; 3.000 ; 6.500 ; 4.800 ;Vendas, Sales, Growth;Comunicação, atendimento, inglês e espanhol, organização, proatividade, apresentações;10296, 10020, 10018, 10024, 10249, 10084, 10321, 10326;;10023@' +
		'Analista de planejamento comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Elaboração de materiais, orçamentos e propostas, validação e acompanhamento de pedidos, acompanhamento de P&L, criação de ações para alavancagem de vendas e otimização de estoques, criação de estratégias com base em análise de dados de comportamento de clientes; 2.800 ; 6.000 ; 4.200 ;Vendas, Sales, Growth;Office, comunicação;10155, 10156, 10157, 10158, 10020, 10084, 10036, 10319, 10320, 10423, 10321;Estratégia corporativa;10036@' +
		'Analista comercial institucional;ONG/ Setor público;Comercial;Aumente o número de clientes e parceiros da organização, garanta sua sustentabilidade com ações comerciais.;Pesquisa de mercado, criação de pipeline, desenho de estratégia de captação e prospecção, gerenciamento de projetos de novas vendas, pitch de projetos e propostas, representar a empresa em eventos.; 2.200 ; 5.000 ; 3.800 ;Vendas, Sales, Growth;comunicação, negociação, relacionamento interpessoal, gestão de processos, inglês;10296, 10020, 10073, 10129, 10024, 10036;;10018@' +
		'Analista de e-commerce;Varejo;Comercial;Garanta o fluxo de vendas por canais digitais. Seja o responsável pelo conteúdo on-line de produtos e da empresa e apoie o desenvolvimento de campanhas digitais. Analise o mercado e identifique oportunidades.;Acompanhamento de transações, avaliação de estoques, planejamento de campanhas digitais, criação de conteúdo online. Análise da concorrência e do mercado.; 2.000 ; 4.500 ; 3.300 ;varejo digital, vendas online;Ätendimento a clientes, gestão de estoques, criação campanhas digitais, gestão de campanhas, Análise de sites, SEO, MKT sistemas de busca, MKT de conteudo;10321, 10401, 10316, 10317, 10354, 10355, 10358, 10437;MKT Digital, construção relacionamento, apresentação;1061, 10019, 10018@' +
		'Analista de desenvolvimento de negócios;Todas;Comercial;Crie novas parcerias e encontre novos clientes para garantir o desenvolvimento dos negócios da empresa. Expanda a atuação da empresa para novas regiões.;Prospecção de clientes e de parceiros, negociação de novas vendas, negociação de parcerias. Abertura de novos escritórios.; 4.000 ; 9.500 ; 7.000 ;Business development;;1015, 10022, 10272, 10020, 10018, 10165, 10163, 10307, 10359, 10326;;@' +
		'Analista sales trader ;Serviços financeiros;Comercial;Estruture e venda produtos financeiros complexos via relacionamento com agentes de mercado.;Desenho, cotação e estruturação de produtos, relacionamento e atendimento a assessores e parceiros, venda de swaps, opções e notas estruturadas; 4.200 ; 9.600 ; 6.300 ;Vendas, Sales, Growth;Persistência;10024, 10062, 10065, 10066, 10328, 10308;;10018, 1036@' +
		'Analista de planejamento de vendas;Bens de consumo;Comercial;Maximize as vendas da equipe comercial criando iniciativas, controlando seu desempenho e sugerindo melhorias aos processos comerciais.;Controle de custos, acompanhamento de projetos e parcerias comerciais, suporte à equipe de vendas, interação com áreas internas para garantir execução dos planos, criação de relatórios e métricas de performance, melhoria de processos.; 3.000 ; 6.500 ; 4.800 ;Suporte vendas;Excel, inglês;10314, 10155, 10156, 10157, 10011, 10296, 10018, ";VBA;10330@' +
		'Analista consultor;Consultoria;Consultoria;Desenvolva projetos de mudança estratégica, melhoria de processos e redução de custos para seus clientes.;Análises setoriais e de empresas, estruturação e desenvolvimento de projetos estratégicos, criação de processos de planejamento estratégico, criação de apresentações, atendimento a clientes.; 3.800 ; 8.000 ; 6.000 ;Consulting, strategic planning, outsourcing, business analyst;Inglês, Office, analítico, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros;10060, 1029, 10080, 10039, 10042, 10043, 10020, 10073, 10129, 10018;Estratégia, negociação, operações;104, 10022, 1005, 10036@' +
		'Analista de gestão;Todas;Administrativo;Seja responsável pela continuidade e evolução dos negócios da companhia.;Criação e manutenção de relatórios, revisão de contratos, elaboração e acompanhamento de projetos, criação e condução de apresentações; 3.500 ; 5.000 ; 4.200 ;Management, analyst, ;Office, redação de contratos, gestão de projetos, operações;10155, 10156, 10157, 10158, 10249, 10018, 1002, 10011, 10015;;[]@' +
		'Analista contábil;Todas;Contabilidade;Crie e seja responsável pelo sistema de controle contábil e pelas demonstrações financeiras da empresa. Mantenha os registros contábeis da empresa em ordem realizando os lançamentos corretos e calculando impostos e tributos devidos.;Realização de lançamentos contábeis, cálculo de impostos e tributos,  conciliação contabil e do contas a pagar/ receber, determinação do fluxo de caixa e resultados do exercício.; 2.600 ; 7.000 ; 4.600 ;Accounting, analyst, ;Office, contabilidade empresarial, contas a pagar/ receber;10107, 10101, 10102, 10103, 10122, 10123, 10124, 10125, 10126, 10127;;1018@' +
		'Analista de operações;Agronegócio;Operações;Garanta o fluxo operacional da empresa, revisando processos e buscando ganhos de eficiência.;Elaboração de análises e relatórios para tomada de decisão, elaboração e manutenção de KPIs.; 2.800 ; 6.800 ; 4.600 ;Operations;Excel, inglês intermediario, relacionamento interpessoal, tomada de decisão, foco resultado, solução de problemas.;10155, 10156, 10157, 10158, 10296, 10020, 10165, 10011, 10015;;1005@' +
		'Analista de desenvolvimento;Todas;Tecnologia;Desenvolva soluções tecnológicas para a companhia, teste e melhore seu desempenho;Desenvolvimento e manutenção de sistemas, criação de ferramentas e indicadores, mapeamento e melhoria de processos, criação de apresentações.; 3.200 ; 10.200 ; 4.600 ;TI;Principios de programação (falta base de dados);10293, 10018, 10011, 10146, 10372;desenvolver em ASP, SQL, JAVA PL SQ;10332, 10376@' +
		'Analista de marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Criação e gestão de indicadores mercadológicos, Análise de ferramentas de marketing e criação de orçamentos de campanhas; 2.900 ; 5.100 ; 4.000 ;Business Inteligence, inteligência competitiva, BI;Analítico, office, marketing, inglês;10073, 10083, 10082;Analista de mercado;1038@' +
		'Analista de trade marketing;Bens de consumo;Marketing;Maximize as vendas da empresa com a criação de campanhas em pontos de venda e de parcerias com varejistas para promoções.;Criação de campanhas, análise de mercado, análise de vendas, análise do comportamento do consumidor, criação de relatórios e apresentações.; 3.000 ; 6.000 ; 4.500 ;;Análise mercadológica, criação de campanhas, office, relatórios ;1039, 10356, 10357, 10316, 10049, 10018, 10155, 10156;Gestão de produtos;1038@' +
		'Analista de marketing de performance;Varejo;Marketing;Desenvolva e gerencie campanhas digitais para alavancar as vendas da companhia;Criação e gestão de campanhas, iniciativas de SEO, criação de relatórios, qualificação e conversão de leads, criação e acompanhamento de índices e KPIs.; 3.000 ; 6.500 ; 4.200 ;Marketing digital, performance;Excel, inglês, analítico;10155, 10156, 10157, 10158, 10296, 10049, 10329, 10355;Google analytics, VBA, marketing digital, analista de mercado;1061, 10330, 10080@' +
		'Analista de business inteligence;Bens de consumo;Marketing;Suporte a equipe de marketing e estimule vendas através da geração de informações a partir de dados gerados pela operação da empresa e por plataformas digitais.;Estruturação de bases de dados e criação de consultas. Realização de estudos e análises dos dados das bases e de ferramentas de marketing digital, criação de métricas e dashboards. Revisão de processos e criação de apresentações.; 3.000 ; 4.200 ; 7.100 ;BI, Big data, SEO, Faceads, adwords;SQL, Tableau, excel, análise exploratória, business inteligence, análise de websites;10146, 10636, 10638, 10137, 10140, 10279, 10280, 10281, 10314, 10155, 10156, 10011;varejo, bens de consumo;10546@' +
		'Analista de produtos;Indústria, Tecnologia, Telecom;Marketing;Crie soluções aos problemas de seus consumidores com produtos e serviços, desenvolva essa solução e alavanque as vendas dos produtos existentes.;Monitoramento e análise de desempenho de vendas, criação de relatórios gerenciais, definição de estratégia e precificação de produtos, planejamento de canais e de portfólio de produtos, desenvolvimento de produtos e negociação com fornecedores e distribuidores.; 2.900 ; 5.100 ; 4.000 ;Vendas, Sales, Growth;Office, inglês, solução de problemas;10155, 10156, 10157, 10158, 10165, 10296, 10049, 10073, 10075, 10077, 10078, 10082;Gestão de marketing, estratégia competitva;1038, 1039@' +
		'Analista de risco;Serviços financeiros;Finanças;Gerencie as exposições de investimento e seu risco, crie ações para otimizar a exposição conforme os interesses de sua empresa e clientes.;Controlar posições de investimentos, calcular VaR, backtest, estresse e liquidez, gerar relatórios, contolar movimentações financeiras, criação de métricas de risco, controlar posições de clientes individuais; 2.200 ; 9.800 ; 5.200 ;Asset management risk;SQL, VBA;10146, 10636, 10638, 10375, 10334, 10137, 10140, 10279, 10280, 10281, 10341, 10342, 10183, 10314;mercado financiro;10554,10039, 1034@' +
		'Analista financeiro;Todas;Finanças;Analise as informações financeiras da empresa para gerar valiosas informações e apoiar a tomada de decisão. Controle custos e apoie a maximização das receitas.;Controle de contas a pagar/ receber e gestão de fluxo de caixa, criação e manutenção de planilhas financeiras, negociação com fornecedores, extração de dados de bases. Análise financeira, criação de métricas, apresentações e relatórios.; 2.600 ; 9.800 ; 4.500 ;Finance, financeiro;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial;150, 10039, 10043, 10042, 1018, 10146, 10022, 10306, 10314, 10155, 10156] ";Finanças corporativas, excel;1032, 10157@' +
		'Analista de planejamento financeiro;Todas;Finanças;Fundamente a tomada de decisão com a criação do orçamento da companhia. Projete receitas e custos do negócio para prever os resultados do exercício futuro e crie controles para garantir a execução desses números.;Análise de demonstrativos financeiros, planejmento financeiro, criação de apresentações e relatórios. Criação de métricas.; 3.300 ; 9.800 ; 5.800 ;FP, orçamento;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial;10198, 150, 10039, 10043, 10042, 1018, 10146, 10022, 10306, 10314, 10155, 10156] ";Controladoria, excel;1033, 10157@' +
		'Analista de planejamento;Serviços;Finanças;Alavanque o resultado do negócio através de análises e criação de planos para  otimização de custos e desenvolvimento de negócios.;Análise de índices financeiros, projeção financeira, criação de relatórios e apresentações, estruturação de bases de dados, criação de planos de negócios; 3.000 ; 6.500 ; 4.200 ;planejamento financeiro, planejamento estratégico;Office, inglês, apresentações;10155, 10156, 10157, 10158, 10296, 10018, 10042, 10043, 10307, 10352, 10365, 10366, 10322; finanças, estratégia;1029, 1032@' +
		'Consultor de planejamento;Serviços;Finanças;Alavanque o resultado do negócio executando planos estratégicos para otimização de custos e desenvolvimento de negócios.;Análise de índices financeiros, projeção financeira, criação de relatórios e apresentações, estruturação de bases de dados, criação de planos de negócios, análises estratégicas e interação com áreas parcerias para implantação de projetos.; 4.200 ; 9.100 ; 6.700 ;planejamento financeiro, planejamento estratégico;Office, inglês, apresentações, finanças, estratégia;10155, 10156, 10157, 10158, 10296, 10018, 10042, 10043, 10307, 10352, 10365, 10366, 10322, 1029, 1032;relacionamento institucional, economia;116, 117, 10019, 10379@' +
		'Trader;Serviços financeiros;Finanças;Execute operações em mercados organizados e crie estruturas financeiras para maximizar o resultado de seus clientes e do seu banco.;Negociação de ativos financeiros, boletagem de operações, relacionamento com clientes, desenvolvimento de produtos, criação de cotações, criação de relatórios, melhoria de processos.; 3.500 ; 10.000 ; 6.500 ;Trader;mercado financeiro, derivativos, inglês, excel.;10155, 10156, 10157, 10158, 10296, 10554, 10039, 10065, 10066, 10062, 10068, 10194, 10308, 10311, 10011, 10319;;1036@' +
		'Analista de tesouraria;Todas;Finanças;Garanta o fluxo de caixa e maximize o resultado financeiro da empresa com investimentos e operações de hedge;Realização de investimentos e controle de posições, captação de recursos e negociação de dívidas, criação de estratégias de hedge e derivativos; 2.300 ; 9.000 ; 4.500 ;Cash flow;Persistência, comunicação, analítico;10020, 10057, 10178, 10066, 10068, 10181, 150, 10041;Investimentos, trading;1034, 1036@' +
		'Analista de relacionamento com investidores;Todas;Finanças;Seja o interlocutor da empresa com o mercado e apoie a sua transparência.;Elaboração de apresentações, relatórios e releases para investidores, desenvolvimento de estudos setoriais, elaboração de demonstrativos financeiros, análise de indicadores e demonstrativos financeiros, realização de reuniões, atendimento a investidores e órgãos regulatórios; 2.300 ; 9.000 ; 4.500 ;Investor relations, Investidores, Companhia aberta;Apresentações, relatórios gerenciais;10018, 10049, 10107, 10129, 10042, 10043, 10051;comunicação, apresentação;10020, 10008@' +
		'Analista de banco de investimentos;Serviços financeiros;Finanças;Desenvolva pitches e execute operações de fusões e aquisições e de captação de recursos via dívida ou venda ações.;Pesquisa de mercado e econômica, análise financeira de projetos e empresas, avaliação por desconto de fluxo de caixa e por múltiplos, criação de apresentações e pitches; 5.000 ; 12.000 ; 8.000 ;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, analitico, quatitativo, inglês, office;150, 1032, 10035, 10032, 10047, 10116, 10115, 10187, 10188, 10018;Análises econômicas, negociação, Valuation;116, 10022, 10187, 10188, 1049@' +
		'Analista em finanças estruturadas;Serviços financeiros;Finanças;Estruture operações de captação de recursos e otimização financeira para clientes corporativos.;Pesquisa econômica e análise de setores econômicos, análise de crédito e carteira, criação de propostas de negócios, estruturação de operações, acompanhamento de garantias e criação de relatórios.; 5.000 ; 12.000 ; 8.000 ;FIDC, structured finance, securitização;contabilidade/ finanças, analítico, office, inglês;10155, 10156, 10157, 10158, 10049, 10042, 10043, 10190, 10191, 10192, 10312, 10320;mercado de commodities;10018, 10189, 1049@' +
		'Analista em private equity;Serviços financeiros;Finanças;Origine, modele, estruture e execute e gerencie investimentos em empresas.;Criação de teses de investimentos, modelagem e análise financeira de empresas, criação de apresentações e relatórios, gestão de empresas investidas, pesquisa e análise de mercado, acompanhamento de processos de due diligence. ; 6.200 ; 12.000 ; 8.800 ;PE, VC, Angel, capital de risco, impact investing, sustentabilidade; Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, análises estratégicas, Analitico, empreendedor, empatia, inglês, office,;150, 1032, 10035, 10032, 10047, 1029, 10187, 10188, 10018, 10049, 10042, 10043;Análises econômicas, negociação,Valuation;116, 10022, 10187, 10188, 1049@' +
		'Analista de novos negócios;Todas;Finanças;Apoie o crescimento do negócio através de projetos, novas parcerias, captações e aquisições.;Análise econômico-financeira de projetos e empresas, criação de relatórios e apresentações, negociação com bancos e investidores para captação de recursos.; 2.600 ; 9.800 ; 4.500 ;BizDev, Business development, Fundraising, strategy;Inglês,Office;10155, 10156, 10157, 10158, 10018, 10049, 10042, 10043, 10041;Valuation;10187, 10188@' +
		'Analista de crédito;Serviços financeiros;Finanças;Avalie a saúde financeira de uma empresa para determinar sua capacidade de repagamento de dívidas. Obtenha as melhores informações possíveis através de relacionamentos com os clientes.;Análise de crédito PJ, relacionamento profissional, avaliação de empresas, revisão de políticas de crédito.; 2.500 ; 8.000 ; 4.300 ;Crédito, análise, bancos;;10349, 10190, 10191, 10192, 10193, 10312, 10348, 10045, 10019;;10045@' +
		'Consultor interno;Todas;Finanças;Crie eficiências, identifique e transforme oportunidades em resultados dentro de sua empresa.;Realização de análises financeiras e estratégicas, revisão de processos e modelagem de problemas, construção de bases de dados, realização de apresentações; 4.500 ; 9.200 ; 6.800 ;Consultoria, business development;analitico, solução de problemas, curiosidade, excel, powerpoint;10155, 10156, 10157, 10158, 10018, 10042, 10043, 10165;access;10049, 10374@' +
		'Consultor outsourcing;Consultoria;Consultoria;Crie melhorias e eficiências na cadeia de valor de seus clientes.;Revisão e melhoria de processos, criação de metodologia de acompanhamento de processos, negociação e revisão de fornecedores, elaboração e implementação de projetos estratégicos.; 4.500 ; 9.200 ; 6.800 ;Consultoria;analitico, relacionamento, office;10155, 10156, 10157, 10158, 10005, 10006, 10036, 10037, 10172, 10314;MBA;10018, 10049@' +
		'Especialista em Tecnologia;Tecnologia;Tecnologia;Crie, teste e implante soluções digitais para empresas e clientes.;Elaboração de arquitetura, modelagem e desenvolvimento de sistemas. Planejamento, especificação e realização de testes de performance, avaliação de riscos e impactos de testes, criação de scripts e de registros de não conformidade, ; 7.100 ; 12.300 ; 9.700 ;TI;TI, vivência em testes de desempenho e performance, troubleshooting, HP Loadrunner;10293, 1037, 1042, 10378, 10377] ";;125@' +
		'Especialista de marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Criação e implantação de ações e campanhas de comunicação, criação e gestão de indicadores mercadológicos, análise de ferramentas de marketing e acompanhamento do road map de evolução da área. Realização de apresentações e representação da empesa em eventos.; 5.100 ; 11.800 ; 7.600 ;Propaganda;ppt, excel;10155, 10156, 10157, 10158, 10018, 10073, 10086, 10049, 10296, 10082, 10083;;1038, 1039@' +
		'Especialista financeiro;Todas;Finanças;Analise as informações financeiras da empresa para gerar valiosas informações e apoiar a tomada de decisão.;Análise de informações financeiras, desenvolvimento de relatórios, extração de dados de bases, realização de apresentações.; 5.000 ; 11.800 ; 7.000 ;;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial;150, 10039, 10043, 10042, 1018, 10049;Finanças corporativas, negociação ;1032, 10022@' +
		'Especialista de reestruturação;Serviços financeiros;Finanças;Reestruture empresas para evitar sua falência, interaja com credores e assessores jurídicos para identificar as melhorer estruturas societária e de capital para permitir a operação da nova empresa. Negocie com bancos e investidores instrumentos que permitam o alivio do fluxo de caixa da companhia.;Negociação, avaliação de empresas, otimização da estrutura de capital.; 10.000 ; 32.000 ; 18.000 ;;;10019, 10022, 10038, 10046, 10045, 10041, 10040, 10189, 10307, 10192, 10193;;1032, 10554@' +
		'Especialista em logística;Bens de consumo;Operações;Aumente a eficiência operacional da empresa otimizando processos de estocagem e distribuição de produtos. Identifique gargalos logísticos e otimize os canais de distribuição.;Revisão de processos, otimização logística, gestão de canais, criação de materiais e apresentações.; 4.500 ; 11.000 ; 8.200 ;;Office, comunicação, gestão de projetos, Mapeamento e criação de processos, logistica;10155, 10156, 10157, 10158, 10020, 10005, 10006, 10313, 10011, 1063;Gestãode operações;1005@' +
		'Coordenador de recursos humanos;Todas;Recursos humanos;Coordene times de recursos humanos para a realização das rotinas de gestão de pessoal da empresa. Garanta o atendimento dos funcionários com relação a sua relação de trabalho. Atraia, retenha e desenvolva os melhores talentos do mercado para atuar na empresa.;Gestão de equipes, gestão de folha de pagamentos, contratação e demissão de funcionários, criação de planos de carreira, atendimento a funcionários.; 5.000 ; 9.000 ; 7.000 ;RH, HR;;10155, 10156, 10157, 10158, 1044, 1045, 10092, 10415, 10020, 10018, 10426, 10016, 10093, 10162, 10019, 10089;treinamento desenv.;1066@' +
		'Coordenador de desenvolvimento;Todas;Tecnologia;Cooredene equipe de desenvolvimento de soluções tecnológicas para a companhia, estruturando testes e ações de melhoria de desempenho;Melhoria de processos, criação e gestão de dashboard de indicadores, apresentações, suporte a unidades de negócio.; 8.000 ; 12.800 ; 10.000 ;;gestão de peossoas, gestão de projetos, relacionamento, excel, ppt;10155, 10156, 10157, 10158, 10293, 1037, 1042, 10019, 10020, 10005, 10006, 10089, 10314;;10049, 1002@' +
		'Coordenador de estoque;Indústria, Varejo, Agronegócio;Operações;Coordene equipe de gestão de estoque, buscando alternativas para aumento de eficiência e otimização de seu tamanho;Gestão de sistema de estoque, gestão e apresentação do andamento de projetos de melhorias de estoques, mapeamento e melhoria de processos, otimizacão dos níveis de estoques.; 6.400 ; 11.600 ; 8.500 ;;liderança, tomada de decisões, negociação, trabalho sob pressão. Excel, comunicação, inglês;10155, 10156, 10157, 10158, 10020, 10005, 10006, 10089, 10093;;10049@' +
		'Coordenador financeiro;Todas;Finanças;Cooredene equipe de analistas financeiros, organizando a geração de informações e sua análise.;Análise de informações financeiras, desenvolvimento e revisão de relatórios, extração de dados de bases, apresentações para alta gestão, coordenação de equipe, alocação de investimentos, desenvolvimento de planejamento financeiro.; 6.600 ; 15.200 ; 10.000 ;;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial, coaching;150, 10039, 10043, 10042, 1018, 10089, 10018;Finanças corporativas, negociação, contratação de funcionários;1032, 10022, 10090@' +
		'Consultor associado;Serviços;Consultoria;Conheça os negócios e desenvolva soluções para aumentar a eficiência de seus clientes.;Análise de informações, entrevistas com cliente, desenvolvimento de projetos de consultoria e soluções, revisão de material, apresentação de resultados.; 7.000 ; 19.200 ; 13.000 ;Associate, consultant;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114@' +
		'Associate em Banco de investimentos;Serviços financeiros;Finanças;Interaja com executivos e coordene equipe de analistas no desenvolvimento de pitches e execução de operações. Interaja com clientes para apresentar e estruturar trabalhos.;Supervisão de analistas e interlocução com executivos, apresentação para clientes, avaliação de empresas e negócios, revisão e apresentação de materiais para clientes.; 14.600 ; 22.300 ; 17.000 ;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, negociação, coaching;150, 1032, 10035, 10032, 10047, 10116, 10115, 10022, 10089, 10018, 10187, 10188;Análises econômicas, contratação de funcionários, Comunicação, negociação;116, 10090, 10020, 1049@' +
		'Associate em Private Equity;Serviços financeiros;Finanças;Prospecte o mercado para originar investimentos e coordene analistas para modelar, estruturar e executar operações. Assuma posições executivas em empresas do portfólio.;Análise de empresas e deals, originação de deals, coordenação de processos de due diligence, gestão de empresas do portfolio.; 14.600 ; 22.300 ; 17.000 ;M&A, Equity, Empresas capital fechado, valuation, mercado financeiro, mercado de capitais, IPO;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, análises estratégicas, negociação, coaching;150, 1032, 10035, 10032, 10047, 1029, 10022, 10089, 10187, 10188, 10042, 10043;Análises econômicas, contratação de funcionários, planejamento estratégico, planejamento operacional;116, 10090, 10037,10015, 10018, 1049@' +
		'Gerente de recursos humanos;Todas;Recursos humanos;Gerencie equipes de recursos humanos para a realização das rotinas de gestão de pessoal da empresa. Garanta o atendimento dos funcionários com relação a sua relação de trabalho. Atraia, retenha e desenvolva os melhores talentos do mercado para atuar na empresa.;Gestão de equipes, gestão de folha de pagamentos, contratação e demissão de funcionários, criação de planos de carreira, atendimento a funcionários.; 7.000 ; 15.000 ; 12.000 ;RH, HR;;10155, 10156, 10157, 10158, 1044, 1045, 1066, 10092, 10415, 10020, 10018, 10426, 10016, 10093, 10162, 10019, 10089;Estruturação organizacional;1046@' +
		'Gerente de impostos;Todas;Administrativo;Gerencie equipes de tributos para controlar e executar operações de impostos. Defina amelhor estratégia de pagamento e cálculo para gerar economias e evitar atuações.;Gestão de equipes, cálculo de tributos, criação de estratégia de elisão fiscal, controle de contas de fatos geradores de tributação, apresentação para executivos.; 4.500 ; 20.000 ; 11.800 ;fiscal, tributos;Tributação, planejamento tributário, contabilidade fiscal, apresentações, contabilidade empresarial;1025, 1057, 10018, 10681, 1018, 10016, 10093, 10162, 10019, 10089;;@' +
		'Gerente de contas;Serviços;Comercial;Crie e gerencie relacionamentos corporativos com clientes, alavanque vendas e garanta o alinhamento da oferta da empresa às necessiadades dos clientes.;Prospeção de clientes, desenvolvimento de estudos e projetos, criação de relacionamentos com clientes e parceiros, apoio ao desenvolvimento dos produtos. Criação de apresentações e relatórios, criação e manutenção de métricas de performance.; 5.000 ; 12.000 ; 7.500 ;Account manager;Vendas, gestão de contas, relacionamento, software de investimentos;10023, 10024, 10319, 10320, 10022, 10005, 10019, 10153, 10314, 10155, 10156, 10157;software de CRM, mercado financeiro;10081, 1049, 10554@' +
		'Gerente de planejamento comercial;Todas;Comercial;Gerencie equipes de planejamento comercial para desenvolver a estratégia de abordagem de mercado e garantir os objetivos de vendas da empresa. Controle o desempenho de vendas e sugira melhorias aos processos comerciais.;Gestão de equipes, controle de custos, acompanhamento de projetos e parcerias comerciais,  interação com áreas internas para garantir execução dos planos, criação de relatórios e métricas de performance, melhoria de processos.; 15.000 ; 20.000 ; 17.500 ;Vendas, Sales, Growth;;10155, 10156, 10157, 10158, 10020, 10084, 10036, 10319, 10320, 10423, 10321, 10006, 10093, 10162, 10089, 10163;Estratégia corporativa, gestão de mudanças;10036, 10172@' +
		'Gerente de vendas;Tecnologia;Comercial;Gerencie equipes de venda de software, aplicativos ou propagandas online, garantindo a eficiência e o atingimento das metas.;Gestão de equipes, prospecção de clientes; 4.800 ; 12.600 ; 8.140 ;;Relacionamento com clientes, prospeção, gestão de  equipes;1015, 10022, 10272, 10020, 10018, 10165, 10163, 10307, 10359, 10326, 10019, 10089, 10093, 10162, 10401;;@' +
		'Gerente de compras;Todas;Comercial;Gerencie equipes de comprar para garantir o abastecimento de insumos com a melhor qualidade e menor custo para a empresa. Identifique oportunidades de substituição de fornecedores e negocie condições vantajosas de pagamento.;Gestão de equipes, negociação com fornecedores, apresentação para executivos, criação de estratégias de compras, prospecção de mercado.; 6.000 ; 20.000 ; 13.000 ;comprador, suprimentos, outsourcing;Relacionamento com clientes, prospeção, gestão de  equipes;1015, 10022, 10272, 10020, 10018, 10165, 10163, 10307, 10359, 10326, 10019, 10089, 10093, 10162, 10401;;@' +
		'Gerente financeiro;Todas;Finanças;Gerencie um departamento ou área de finanças, gerando e analisando informações para a tomada de decisão.;Gestão do processo de planejamento financeiro e controle orçamentário, gestão de equipe, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos na área, Interação intra-empresa e apoio à tesouraria.; 8.800 ; 25.800 ; 14.000 ;Finance manager;Matemática financeira, finanças corporativas, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento operacional, contabilidade empresarial, ;150, 1032, 10090, 10089,10088,102, 10015, 1018, 10018, 10042, 10043;Finanças, contabilidade, análise econômica, planejamento estratégico, inglês fluente, 6 anos experiência, relatórios gerenciais;102, 109, 116, 10037, 10187, 10188@' +
		'Gerente de controladoria;Todas;Finanças;Seja responsável pelas rotinas financeiras da empresa e administre ativos e passivos para garantir a operação lucrativa do negócio. Crie e mantenha relatórios de informações financeiras para tomada de decisão.;Coordenação de equipes para a elaboração de demonstrações contábeis e geração de informações gerenciais, coordenação do departamento de custos, coordenação da área tributária/ fiscal. Negociação com bancos e clientes e apresentação para executivos.; 12.000 ; 22.000 ; 16.000 ;Controller;Matemática financeira, finanças corporativas, contratação de funcionários, coaching, criação de estratégias de recursos humanos, planejamento operacional, contabilidade empresarial, ;150, 1032, 10090, 10089,10088, 10015, 1018, 10018, 10042, 10043;Finanças, contabilidade, análise econômica, planejamento estratégico, inglês fluente, relatórios gerenciais;102, 109, 116, 10037, 10187, 10188@' +
		'Gerente de tesouraria estruturada;Todas;Finanças;Gerencie a equipe de tesouraria responsável pela estrutura de capital da empresa. Otimize o custo e o prazo das captações do negócio maximizando o seu valor.  ;Gestão de equipes, relacionamento com bancos, projeções financeiras, gestão do fluxo de caixa, otimização da estrutura de capital, renegociação de dívidas.; 14.000 ; 25.000 ; 17.000 ;treasruy, finanças estruturadas, estruturação;Matemática financeira, otimização da estrutura de capital, emissão de dívida, ;150, 10020, 10018, 10426, 10327, 10165, 10329, 10163, 10016, 10093, 10162, 10063, 10064, 10046, 10045, 10041, 10040, 10189, 10307;finanças corporativas;10272, 10308, 10197, 10311, 1032] "@' +
		'Gerente de crédito;Serviços financeiros;Finanças;Gerencie equipes de avaliação de empresas para otimizar a concessãod e crédito para os melhores pagadores e restringir a oferta a clientes problemáticos. Avalie as políticas e processos de crédito vigentes e sugira mudanças para otimizar o resultado do banco.;Gestão de equipes, análise de crédito PJ, relacionamento profissional, avaliação de empresas, revisão de políticas de crédito.; 5.000 ; 16.000 ; 8.300 ;Crédito, análise, bancos;;10349, 10190, 10191, 10192, 10193, 10312, 10348, 10045, 10019, 10018, 10020, 10163, 10016, 10093;;10045@' +
		'Gerente de risco - seguros;Serviços financeiros;Finanças;Gerencie equipes com a missão de avaliar riscos de clientes e identificar potenciais sinistros. Tome medidas cabíveis para evitar prejuízos substanciais à operação da seguradora. Construa relacionamentos com clientes para obter as melhores informações possíveis.;Gestão de equipes, análise de mercados, análise operacional, análise de empresas, análise de riscos.; 15.000 ; 25.000 ; 20.000 ;Insurance, Riscos, Risk, V@R;;10020, 10018, 10426, 10327, 10329, 10163, 10016, 10019, 10349, 10312, 10192, 10193, 10350, 10352, 10089;;1032@' +
		'Gerente de Portfólio;Serviços financeiros;Finanças;Maximize o retorno de portfólios de renda fixa ou variável, de acordo com o produto, e crie novos produtos financeiros.;Gestão de portfólio, análise de mercado e econômica,  análise de concentração de riscos, seleção de investimentos, criação de estratégias de investimento.; 15.000 ; 30.000 ; 22.000 ;Asset management, investimentos, portfolio manager;;10042, 10043, 10192, 10039, 10054, 10056, 10057, 10059, 10178;;10018, 1034@' +
		'Gerente de logística;Bens de consumo;Operações;Gerencie equipes operacionais e de logística para maximizar a eficiência operacional da empresa. Controle, organize e garanta os estoques necessários à atividade da empresa. ;Gestão de equipes, otmização de níveis de estoques, definição de estratégia logística, contratação de terceiros para manutenção.; 6.500 ; 15.300 ; 10.800 ;;Office, comunicação, gestão de projetos, Mapeamento e criação de processos, logistica;10155, 10156, 10157, 10158, 10020, 10005, 10006, 10313, 10011, 1063, 1005, 10093, 10162, 10089;Gestão de projetos;1002@' +
		'Gerente de supply chain;Bens de consumo;Operações;Gerencie equipes de operações e logística para garantir o fluxo de produção e entrega de produtos aos clientes externos e internos. Coordene projetos para melhora da eficiência operacional da área.  ;Gestão de equipes, apresentações para executivos, gestão de projetos, gestão de estoques, mapeamento de processos; 7.200 ; 18.000 ; 13.200 ;;Office, comunicação, gestão de projetos, Mapeamento e criação de processos, logistica, gestão operacional;10155, 10156, 10157, 10158, 10020, 10005, 10006, 10313, 10011, 1063, 1064, 1005, 10093, 10162, 10089;Gestão de projetos;1002@' +
		'Gerente de projetos ;Todas;Operações;Gerencie equipes alocadas em um projeto e garanta a sua entrega dentro do prazo e com a qualidade necessária. Desenhe processos e trace estratégias de execução para permitir a melhora contínua das operações da empresa.;Gestão de equipes, redesenho de processos, gestão de crises, comunicação com equipe e gestão, resolução de problemas.; 4.500 ; 15.000 ; 9.100 ;PMO;Gestão de projetos, gestão de operações;1002, 1005, 10165, 10155, 10156, 10157, 10158, 10020,10018, 10426, 10093, 10089, 10162;;10329, 10163@' +
		'Gerente de projetos;Serviços;Consultoria;Gerencie projetos e equipes e seja o principal responsável pela qualidade na sua entrega. Direcione a criação de soluções.;Coordenação de equipe, relacionamento com clientes, desenvolvimento de soluções, revisão de material, apresentação de resultados.; 9.000 ; 21.000 ; 14.400 ;;Estratégia, comercial, operações Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, análise mercadológica, análise competitiva;104, 102, 1005 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10073, 10032, 10020, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114@' +
		'Gerente de produtos;Indústria, Tecnologia, Telecom;Marketing;Seja responsável pela criação de produtos e sua gestão, desenvolvendo novas funcionalidades e construindo sua estratégia competitiva.;Definição das estratégias de marketing e de desenvolvimento de produtos, desenvolvimento de pesquisas e estudos mercadológicos.; 7.200 ; 18.500 ; 12.800 ;Product manager;Gestão de Marketing, análises estratégicas;1038, 1029, 10020, 1039;;[]@' +
		'Gerente de inteligência de mercado;Todas;Marketing;Gerencie a equipe de inteligência de mercado garantindo o suprimento de informações de mercado para tomada de decisão. Avalie a concorrência, os clientes e tendências de mercado e defina políticas e processos.;Gestão de equipes, análise de mercado, análise de concorrência, análise de comportamento de consumidores; 7.200 ; 21.000 ; 13.700 ;Business Inteligence;Formulação estratégica, análise mercadológica;1029, 1039, 10354, 10016, 10093, 10162, 10019, 10089;Gestão de produtos;1038@' +
		'Gerente de marketing digital;Todas;Marketing;Gerencie equipes de marketing digital responsáveis pela experiência de usuário e compra online. Gerencie a estratégia digital da companhia, definindo canais e segmentos de mercados a serem utilizados. Analise informações de mercado e de seus clientes para tomar decisões e identificar novas oportunidades.;Gestão de equipes, criação de estratégia, prospecção de mercado, análise de mercado, análise de comportamento de clientes, criação de novos produtos e serviços, desenvolvimento de usabilidade.; 12.000 ; 25.000 ; 16.400 ;SEO, ;MKT digital, formulação estratégica, análise mercadológica, decisão mercadológica, desenho de experiência de usuário;1061, 1029, 1039, 1041, 10624, 10623, 10016, 10093, 10162, 10019, 10089;Gestão de produtos;1038@' +
		'Gerente de marketing;Todas;Marketing;Gerencie a equipe e seja responsável pela marca da empresa e de seus produtos. Estruture planos estratégicos de comunicação e vendas.;Gestão de equipes e criação de estratégias corporativas  de marketing.; 8.000 ; 23.700 ; 14.400 ;;Gestão de Marketing, análises estratégicas, coaching, recrutamento de funcionários, negociação, gestão de projetos;1038, 1029, 10089 , 10090, 10022, 1002, 10020, 1039;planejamento operacional;10015@' +
		'Project leader;Serviços;Consultoria;Gerencie projetos e equipes e seja o principal responsável pela qualidade na sua entrega. Direcione a criação de soluções.;Coordenação de equipe, relacionamento com clientes, coordenação do desenvolvimento de soluções, revisão de material, apresentação de resultados.; 16.500 ; 24.000 ; 19.800 ;Consultor, consulting;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114@' +
		'Vice presidente em IB;Serviços financeiros;Finanças;Se relacione com clientes para originar novas operações e garantir a execução correta de mandatos, coordene equipe de associates criar pitches e executar operações.;Alocação de equipes, gestão de equipes para desenvolvimento de materiais, gestão de relacionamentos e apresentação para clientes.; 19.800 ; 32.400 ; 26.200 ;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, comercial, coaching, contratação de funcionários;150, 1032, 10035, 10032, 10047, 10116, 10115, 102, 10089, 10090, 10020, 10018, 10187, 10188;Análises econômicas, análises estratégicas;116, 1029, 1049@' +
		'Vice presidente em Private Equity;Serviços financeiros;Finanças;Prospecte o mercado para originar investimentos e coordene analistas para modelar, estruturar e executar operações. Assuma posições executivas em empresas do portfólio.;Originação de deals, supervisão de processos de due diligence, gestão de empresas do portfolio, estruturação de operações financeiras.; 19.800 ; 32.400 ; 26.200 ;Private Equity, Venture capital, investimentos;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, comercial, coaching, contratação de funcionários, análises estratégicas;150, 1032, 10035, 10032, 10047, 10116, 10115, 102, 10089, 10090, 1029, 10020, 10187, 1018810042, 10043;Análises econômicas, planejamento estratégico, planejamento operacional;116, 10037, 10015, 10018, 1049@' +
		'Engagement manager;Serviços;Consultoria;Origine novos projetos a partir de seu relacionamento com clientes e supervisione seu andamento, apoie as equipes consultoras com seu conhecimento e expertise.;Gestão de projetos, relacionamento com clientes, suporte em questões especificas, desenvolvimento de consultores mais juniores.; 27.000 ; 32.600 ; 30.000 ;Consultor, consulting;Estratégia, comercial, operações Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114,10042, 10043@' +
		'Superintendente financeiro;Todas;Finanças;Coordene áreas dentro da diretoria financeira e garanta a geração correta de informações e entrega dessas áreas. Relacione-se com altos executivos para identificar oportunidades e apresentar soluções.;Gestão de equipes de gerentes, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos em sua área, Interação intra-empresa e com alta gestão.; 14.900 ; 43.600 ; 25.000 ;Finance;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento operacional, contabilidade empresarial, ;150, 1032,1036, 10090,10089, 10088, 102, 10015, 1018, 10020, 10018,10042, 10043;Finanças, contabilidade, análise econômica, planejamento estratégico, análises estratégicas;102, 109, 116, 10037, 1029@' +
		'Principal;Serviços;Consultoria;Gerencie a empresa de consultoria e crie projetos estratégicos para seu desenvolvimento. Apoie a construção de relacionamentos e a originação e execução de novos negócios com seu expertise.;Desenvolvimento de negócios, gestão do relacionamento com clientes, liderança junto a equipes em clientes, suporte em assuntos específicos.; 27.000 ; 32.600 ; 30.000 ;Consultor, consulting;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114, 10018, 10042, 10043@' +
		'Diretor de recursos humanos;Todas;Recursos Humanos;Seja o maior responsável pela atração, retenção e desenvolvimento de talentos na companhia. Direcione os esforços de contratação de talentos para permitir a operação da empresa. Crie a cultura corporativa para permitir a coesão do quadro de funcionários.;Gestão de equipes, criação de estratégias de recursos humanos, definição de políticas de recursos humanos, criação de programas de treinamento, definição de orçamento e interlocução com presidência e conselho.; 18.000 ; 55.000 ; 35.000 ;RH, HR;;10155, 10156, 10157, 10158, 1044, 1045, 1066, 1046, 10092, 10415, 10020, 10018, 10426, 10016, 10093, 10162, 10019, 10089;fin corp, estratégia;1032, 1030@' +
		'Diretor de varejo eletrônico;Varejo;Comercial;Seja o maior responsável pelo desempenho das vendas online da empresa. Direcione a melhoria da experiência do cliente para impulsionar vendas e garanta a competitividade da oferta da empresa.;Gestão de equipes, criação de experiência de usuário, criação de estrutura de atendimento, criação de campanhas e promoções, definição de orçamento e interocução com presidência e conselho.; 20.000 ; 50.000 ; 30.000 ;e-commerce;MKT digital, Relacionamento com clientes, estoques,;1061, 1015, 10401, 10006, 10172, 10307, 10020, 10426, 10327, 10165, 10329, 10016, 10093, 10162, 10272, 10019, 10089, 10022;Estratégia, gestão de projetos;10419, 10420, 1002@' +
		'Diretor de desenvolvimento de negócios;Todas;Comercial;Direcione o crescimento e o desenvolvimento dos negócios da empresa através da criação de parcerias e de novos negócios. Empreenda internamente para garantir o sucesso de longo prazo da empresa.;Prospecção de clientes e de parceiros, negociação de novas vendas, negociação de parcerias. Abertura de novos escritórios, criação de orçamentos e interlocução com presidência e conselho.; 25.000 ; 50.000 ; 35.000 ;Business development;Relacionamento com clientes, prospeção, gestão de  equipes, gestão de projetos;1015, 10022, 10272, 10020, 10018, 10165, 10163, 10307, 10359, 10326, 10329, 10016, 10093, 10162, 10272, 10019, 10089, 1002;;@' +
		'Diretor de operações;Todas;Operações;Seja o maior responsável pela gestão de recursos da empresa, organize a área para entregar resultados com eficiência máxima. Direcione os esforços de revisão de processos e de otimização logística. Garanta a adoção de novas práticas e tecnologias para perpetuar a empresa.;Gestão de equipes, criação de estratégias, planejamento operacional, definição de orçamento e interlocução com presidência e conselho.; 20.000 ; 70.000 ; 45.000 ;Supply chain;Gestão de projetos, gestão de operações, logistica, definiçào estratégica;1002, 1005,10419, 10420, 10155, 10156, 10157, 10158, 10020, 10005, 10006, 10313, 10011, 1063, 1064, 1005, 10093, 10162, 10089;formulaçao estrtégica;1029@' +
		'Diretor financeiro;Todas;Finanças;Seja o grande responsável pela saúde financeira, planejamento financeiro, gestão de riscos, otimização da estrutura de capital, captação de recursos e geração de informações gerenciais na empresa.;Gestão de departamento, Interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa.; 18.400 ; 65.400 ; 32.600 ;CFO, C-suite, Finance, VP Finance, Vice presidência de finanças, Head finanças corporativas;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10008;Finanças, contabilidade, direito societário, análise econômica;102, 109, 1024, 116, 10187, 10188@' +
		'Diretor de Banco de investimentos;Serviços financeiros;Finanças;Origine novas operações mantendo contato aos clientes e direcione o banco de investimentos ao crescimento e rentabilidade.;Gestão de equipes, apresentação para clientes, negociação de mandatos.; 35.200 ; 46.400 ; 40.000 ;Director, D;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049@' +
		'Diretor de marketing;Todas;Marketing;Seja o maior responsável pela definição da estratégia e políticas de marca da empresa e seus produtos, pela definição dos canais de comunicação e vendas a serem utilizados e pela determinação de quais produtos serão ofertados.;Gestão do departamento de marketing e responsável pelas metas de marketing da empresa.; 21.000 ; 33.000 ; 27.000 ;Director, Marketing, sales;Gestão de Marketing, análises estratégicas, coaching, recrutamento de funcionários, negociação, operações;1038, 1029, 10089, 10090, 10022, 1005, 10020, 10018, 1039;Desconto de fluxo de caixa, análise de empresas;10060, 10045@' +
		'Diretor de trade marketing;Bens de consumo;Marketing;Seja o maior responsável pelo desenvolvimento de ações para maximizar as vendas de produtos nos pontos de venda. Direcione a criação de novas ofertas de produtos e de campanhas para maximizar o valor percebido destes.;Gestão de equipes, criação de novos produtos e serviços, criação de campanhas de marketing, definição de orçamento e interlocução com presidência e conselho.; 20.000 ; 50.000 ; 32.000 ;;Formulação estratégica, análise mercadológica, decisão mercadológica, desenho de experiência de usuário;1029, 1039, 1041, 10624, 10623, 10016, 10093, 10162, 10019, 10089;Finanças corporativas;1032@' +
		'Diretor de comunicação e relações públicas;Todas;Marketing;Seja o maior responsável pela reputação da empresa, criando canais de comunicação e gerindo seu conteúdo. Direcione os esforços de criação de conteúdo de acordo com a estratégia da empresa e garanta o atendimento a clientes insatisfeitos.;Gestão de equipes, criação de ações de comunicação, relacionamento com mídias para criação de campanhas, gestão da criação de conteúdo corporativo, definição de orçamento e interlocução com presidência e conselho.; 18.000 ; 45.000 ; 27.000 ;RP, PR, conteúdo;Comunicação mercadológica, planejamento financeiro, formulação estratégica, decisão mercadológica;1040, 1029, 10198, 1041, 10020, 10426, 10165, 10163, 10016, 10093, 10162, 10272, 10019, 10089, 10006;Gestão de produtos, análise mercadológica;1038, 1039@' +
		'Diretor/ sócio de Private Equity ;Serviços financeiros;Finanças;Gerencie a empresa e seus fundos de investimento. Origine novos fundos e investimentos. Coordene operações financeiras e negocie com prestadores de serviço. Desenvolva a estratégia de investimento da empresa e a represente em eventos.;Relacionamento com investidores, estruturação e captação de novos fundos, originação de deals.; 35.200 ; 46.400 ; 40.000 ;Investimentos, Firm;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049@' +
		'Diretor executivo em Banco de investimentos;Serviços financeiros;Finanças;Organize a estrutura interna para garantir a geração de negócios e receitas. Represente o banco e interaja com executivos de outras companhias para ter uma visão clara do mercado, suas tendências e oportunidades.;Interação com clientes para negociação de mandatos, gestão do negócio.; 44.400 ; 62.800 ; 55.000 ;Managing Director, MD, IB;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049@' +
		'CFO (Chief Financial Officer);Todas;Finanças;Seja o grande responsável pela saúde financeira, planejamento financeiro, gestão de riscos, otimização da estrutura de capital, captação de recursos e geração de informações gerenciais na empresa.;Gestão de departamentos, interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa.; 32.000 ; 78.000 ; 45.000 ;CFO, C-suite, Finance, VP Finance, Vice presidência de finanças;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica;102, 109, 1024, 116@';

		var arrayCarreiras = carreiras.split("@");

		var i = 0;
		while (i < arrayCarreiras.length) {
			var arrayItensCarreira = arrayCarreiras[i].split(";");
			var objJson  = 
				{
				    documento : {
				        nome :  arrayItensCarreira[0],
				        id :  i,
				        industria :  arrayItensCarreira[1],
				        descricao : arrayItensCarreira[3],
				        tarefas : arrayItensCarreira[4],
				        salarioMinimo : arrayItensCarreira[5],
				        salarioMedio : arrayItensCarreira[7],
				        salarioMaximo : arrayItensCarreira[6],
				        funcao : arrayItensCarreira[2],
				        necessarios : [],
				        recomendados : [],
				        tags : []
				    }	
				}
			if (arrayItensCarreira[10]){
				var array = arrayItensCarreira[10].split(",");
				var w = 0;
				while (w < array.length) {
					var existente = false;
					$.each(objJson.documento.necessarios, function( i, habilidade) {
						if (array[w].replace (" ","") == habilidade){
							existente = true;
						};
					});
					if (!existente){
						objJson.documento.necessarios.push(array[w].replace (" ",""));
						objJson = obterDependencias(objJson, array[w].replace (" ",""), "necessarios");
					};
					w++;
				};
			};
			if (arrayItensCarreira[12]){
				var array = arrayItensCarreira[12].split(",");
				var w = 0;
				while (w < array.length) {
					var existente = false;
					$.each(objJson.documento.recomendados, function( i, habilidade) {
						if (array[w].replace (" ","") == habilidade){
							existente = true;
						};
					});
					if (!existente){
						objJson.documento.recomendados.push(array[w].replace (" ",""));
						objJson = obterDependencias(objJson, array[w].replace (" ",""), "recomendados");
					};
					w++;
				};
			};
			if (arrayItensCarreira[8]){
				var array = arrayItensCarreira[8].split(",");
				var w = 0;
				while (w < array.length) {
					objJson.documento.tags.push(array[w].replace (" ",""));
					w++;
				};
			};
			console.log ("carregando carreiras:" + arrayItensCarreira[0]);
			rest_incluiCarreiras(objJson, semAcao, semAcao)
			i++;
		};
};

function obterDependencias(objJson, habilidadeTarget, tipo, nivel){
	habilidades = JSON.parse(localStorage.getItem("elements"));
	$.each( habilidades, function( i, habilidadeSource) {
		if (habilidadeSource.documento.target == habilidadeTarget){
			if (tipo == "necessarios"){
				var existente = false;
				$.each(objJson.documento.necessarios, function( i, habilidade) {
					if (habilidadeSource.documento.source == habilidade){
						existente = true;
					};
				});
				if (!existente){
					objJson.documento.necessarios.push(habilidadeSource.documento.source);
					objJson = obterDependencias(objJson, habilidadeSource.documento.source, tipo);
				};
			};
			if (tipo == "recomendados"){
				var existente = false;
				$.each(objJson.documento.recomendadas, function( i, habilidade) {
					if (habilidadeSource.documento.source == habilidade){
						existente = true;
					};
				});
				if (!existente){
					objJson.documento.recomendados.push(habilidadeSource.documento.source);
					objJson = obterDependencias(objJson, habilidadeSource.documento.source, tipo);
				};
			};
			if (tipo == "habilidades"){
				var existente = false;
				$.each(objJson.documento.preRequisitos, function( i, habilidade) {
					if (habilidadeSource.documento.source == habilidade){
						existente = true;
					};
				});
				if (!existente){
					var preRequisitos = 
						{ 
							id : habilidadeSource.documento.source,
							nivel : nivel
						};
					objJson.documento.preRequisitos.push(preRequisitos);
					objJson = obterDependencias(objJson, habilidadeSource.documento.source, tipo, (parseInt(nivel) + 1));
				};
			};
		};
	});		
	
	return objJson;
};

function carregaCursosTotal (){
	/**
	 * 	carrega lista de cursos
	 */
	
	var cursos =
		'facul;Curso;Pré requsitos;Nome matéria;Habilidades desenvolvidas;Carga horária;custo;Link@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Estatística aplicada;10140,10279,10280,10281,10282;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Matemática financeira;10060,10061;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Habilidades computacionais;10155,10156,10157,10158,10146;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Comunicação para gestores;10020;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Relações interpessoais;10019;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Negociação Empresarial;10022;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Contabilidade;10101,10102,10103,10106,10107;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de pessoas;10088,10095,10092,10094;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de finanças;10043,10048,10045,10052;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de operações;10011,10012,10313,10314;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de Marketing ;10080,10363,10081,10440,10439,10070;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Estratégia empresarial;10072,10200,10032,10035,10432,10420,10435;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Aspectos jurídicos da Empresa;10113,10114,10115,10116,10117;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Economia aplicada;10206,10214,10208,10469;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Administração de Tecnologia de Informação;10155,10156,10157,10158,10146;Curso total 512 horas, 4 semestres; R$49.920,00 ;http://www.fgv.br/eaesp/cursos/ceag/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Mercado de saúde;10073,10083,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Ética e Aspectos Jurídicos;10136,10274,10275;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Economia da saúde;10390,10469,10458,10459,10460,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Comunicação para gestores;10020;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Negociação Empresarial;10022;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Processos e sistemas em Saúde;10011,10012,10313,10314,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Produtos e serviços em Saúde;10078,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Pessoas na organização de saúde;10088,10095,10092,10094;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Contabilidade e Matemática financeira;10101,10102,10103,10106,10107,10060,10061;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Análise exploratória;10280;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Habilidades computacionais;10155,10156,10157,10158,10146;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Relações interpessoais e Gestão de pessoas;10092,10088,10089,10019;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Competitividade na Saúde;10080,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Resultados na Saúde;10043,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Operações em Saúde;10011,10012,10015,10313,10314,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Gestão da Informação em Saúde;10398,10399,10400,10550;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Marketing para área de saúde;10073,10083,10085,10363,10082,10440,10439,10074;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Tópicos Emergentes;;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);TCC - Trabalho de conclusão de curso;10000;Curso total 528 horas, 3 semestres; R$35.730,00 ;http://www.fgv.br/eaesp/cursos/ceahs/@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Programação e Resolução de Problemas;10293;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Introdução à Economia;10209;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Matemática Financeira;10060,10061;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;PBL;10168;15 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Matemática I  (Parte I);10138,10139,10283,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Introdução às Ciências Sociais: Nação, Brasil e Identidade Nacional;10289;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Probabilidade;10288;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Formação Economica Do Brasil;10210;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Matemática I  (Parte II);10138,10139,10283,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Matemática I;Matemática II  (Parte I);10138,10139,10283,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Estatística  (Parte I);10137,10279;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Teoria Microeconômica I  (Parte I);10130,10131,10132,10449,10450;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Metodologia e Técnicas de Pesquisa - Projeto I (Parte I);10169;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Matemática I;Matemática II  (Parte II);10138,10139,10283,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Estatística  (Parte II);10140;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Teoria Microeconômica I  (Parte II);10450,10451,10452,1053,10454,10455;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Metodologia e Técnicas de Pesquisa - Projeto I (Parte II);10169;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Matemática II;Matemática III  (Parte I);10283,10285,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Econometria I (Parte I);10281;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Teoria Microeconômica I;Teoria Microeconômica II;10130,10131,10132,10449,10450,10451,10452,1053,10454,10455;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Matemática II;Matemática III  (Parte II);10283,10285,10284;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Econometria I (Parte II);10281;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Contabilidade Social e Introdução a Macro;10129;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Econometria I;Econometria II (Parte I);10212,1059;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Teoria e Política Macroeconômica I (Parte I);10129,10205,10390,10456,10459,10460;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Teoria Microeconômica II;Teoria Microeconômica III: Estratégia, Evolução E Complexidade;10130,10131,10132,10449,10450,10451,10452,1053,10454,10455;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Metodologia e Técnicas de Pesquisa - Projeto I;Metodologia e Técnicas de Pesquisa - Projeto II (Parte I);10169,10167;15 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Econometria II;Econometria III;10213;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Economia Industrial e de Redes;10082;75 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Direito e Economia;10251;15 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;História Econômica Geral (Parte I);10211;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Finanças I (Parte I);10039,10042,10043;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Economia Internacional;10206,10207,10471,10472,10473,10474;90 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;História Econômica Geral (Parte II);10211;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Finanças I (Parte II);10039,10042,10043;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Teoria e Política Macroeconômica II;10129,10205,10390,10456,10459,10460;75 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Finanças I;Finanças II (Parte I);10042,10043,10046;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Macroeconomia do Desenvolvimento;10211,10212,10133;60 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Economia Brasileira Contemporânea;10210;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Tópicos Especiais em Economia;10130,10450,10390,10460,10137;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;Metodologia e Técnicas de Pesquisa - Projeto II;Metodologia e Técnicas de Pesquisa - Projeto III (Parte I);10169,1051;15 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;História do Pensamento Econômico (Parte I);10216,10217,10218,10444,10445,10446,10447,10448;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Grandes Economistas  - à Distância (Parte I);10216,10217,10218,10444,10445,10446,10447,10448;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Monografia (Parte I);10000,10169;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;História Do Pensamento Econômico (Parte II);10216,10217,10218,10444,10445,10446,10447,10448;45 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Grandes Economistas  - à Distância (Parte II);10216,10217,10218,10444,10445,10446,10447,10448;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV EESP;Curso de graduação em ciências econômicas;;Monografia (Parte II);10000,10169;30 horas aula;Mensalidade - R$ 3.506;http://eesp.fgv.br/ensino/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Crime e Sociedade;10230,10262,10263,10264;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Direitos da Pessoa Humana;10235,10229;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;História do Direito;10233,10161;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Introdução ao Direito;10230,10160,10020;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Artes e Direito I;10230;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Jurisprudência;10231,10232;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Prática Jurídica I (Expressão Oral e Textual);10160,10236;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Organização das Relações Privadas;10230,10250;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Política e Instituições Brasileiras;10162,10121;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Contabilidade;10106;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Constitucional;10121;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito de Família e Sucessões;1053,1054;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Filosofia Política;10161,138;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Artes e Direito I;Oficina de Artes e Direito II;10230;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Oficina de Legislação;10230,10160,10020;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica I;Oficina de Prática Jurídica II - Técnicas de Negociação e Mediação;10022;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Ordem Jurídica Internacional;10254,10255;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Organização da Justiça e do Processo;10257;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Administrativo I;10238,10239,10324;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito da Organização Econômica;10251,10252;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito da Propriedade I;10246;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito dos Negócios I;10112,10117;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Obrigacional e Contratual I;10249,10022;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Processual Civil I;10257,10258,10259,10260,10261;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Microeconomia;10130,10131,10132,10449,10450,10451,10452;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Oficina de Inglês Jurídico I;10278;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica II - Técnicas de Negociação e Mediação;Oficina de Prática Jurídica III - Arbitragem;10234;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito Administrativo I;Direito Administrativo II;10238,10239,10324;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito da Propriedade I;Direito da Propriedade II;10247,10248;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito dos Negócios I;Direito dos Negócios II;10112,10117;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito e Economia;10453,10455;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito Obrigacional e Contratual I;Direito Obrigacional e Contratual II;10250;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito Processual Civil I;Direito Processual Civil II;10259,10260;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Macroeconomia;10129;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Inglês Jurídico I;Oficina de Inglês Jurídico II;10278;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica III - Arbitragem;Oficina de Prática Jurídica IV: Redação e Estratégia Processual I;10261;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito da Responsabilidade I;10237;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito dos Negócios II;Direito dos Negócios III;10115,10116;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito e Processo do Trabalho;10268,10269,10122;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito e Processo Penal I;10266,10267;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Global;10253,10254,10255,10256;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Tributário e Finanças Públicas I;10270,10271;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Ética e Teoria do Direito;10273,10274,10275;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica IV: Redação e Estratégia Processual I;Oficina de Prática Jurídica V: Redação e Estratégia Processual II;10261;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica V: Redação e Estratégia Processual II;Oficina de Prática Jurídica VI Redação e Estratégia Contratual;10249,10022;30 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Contencioso Empresarial;10249,10257,10258,10259,10260,10261;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito da Responsabilidade I;Direito da Responsabilidade II;10237;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito dos Negócios III;Direito dos Negócios IV;10113,10114;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito e Processo Penal I;Direito e Processo Penal II;10266,10267;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Direito Internacional Econômico;10253,10254,10255,10256;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Direito Tributário e Finanças Públicas I;Direito Tributário e Finanças Públicas II;10123,10124,10125;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Sociologia Jurídica;10290;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Teoria da Constituição;10121;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;;Metodologia da Pesquisa em Direito I;10169;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV Direito SP;Curso de graduação em direito;Metodologia da Pesquisa em Direito I;Metodologia da Pesquisa em Direito II;10169;60 horas aula;Mensalidade - R$ 4.300;http://direitosp.fgv.br/graduacao@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Atividades Planejadas I                ;10162,10136;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução ao Marketing           ;10073,10072;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Sociologia I                   ;10289,10386;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Matemática I               ;10138,10139;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução à Tecnologia da Informação  ;10157,10146;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Matemática Financeira                ;10061,10060,10157;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Gestão de Projetos ;10002,10003,10005,10006;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução à Gestão                      ;10010,10005,10096;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Experiência Empreendedora;10029,10030,10322;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Filosofia;10136,10274,10275,10276;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Psicologia I;10145;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Sociologia I;Sociologia II;10386,10387,10649;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Direito Privado na Empresa;10246,10117,10249,10112;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Matemática I;Matemática II;10283,10285,10286;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Contabilidade Financeira;10106,10107;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Estatística I;10137;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Estratégia Mercadológica;10073,10363,10439,10432;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Psicologia I;Psicologia II;10142,10143,10144;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Ciência Política;10392,10393,10394;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Controladoria;10050,10198,10339;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Estatística I;Estatística II;10140,10279,10281;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Estatística I;Gestão de Operações;10011,10313,10012,10314;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Análise Estratégica;10072,10200,10032,10035,10432,10420,10435;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Oficina em Organizações;10171,10432,10162,10019;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Atividades planejadas I;Atividades Planejadas II;10162,10136;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Pesquisa de Mercado;10073,10018,10020,1059;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Matemática I;Microeconomia Intermediária Aplicada;10132,10208,10451,10364;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Contabilidade Financeira e Controladoria;Finanças Corporativas I;10042,10043,10352;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Modelagem para apoio à Tomada de Decisão;10016,10157,10352;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Introdução à Gestão                      ;Organizações;10171,10315,10096;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Marketing Mix;10082,10074,10077,10360;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Direito Privado na Empresa;Direito Tributário;10270,10271,10123,10124,10125;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Microeconomia Intermediária Aplicada;Macroeconomia Intermediária Aplicada;10456, 10390,10460, 10127;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Finanças Corporativas I;Finanças Corporativas II;10046,10052,10187,10188,10045 ;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Gestão de Operações e Estatística II;Logística Empresarial e SCM;10071,10401,10402,10403;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Direito Privado na Empresa;Direito Trabalhista;10268,10269,10122;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Introdução à Tecnologia da Informação  ;Administração da Tecnologia da Informação;10398,10399;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Oficina Comunicação;10018,10020,10427;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão de Pessoas;10088,10095,10092,10094;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Orientação de Trabalho de Conclusão de Curso;10000,10169;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Atividades Planejadas II;Atividades Planejadas III;10162,10136;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;Logística Empresarial e SCM;Operações e Competitividade;10015,10443,10315,10071,10036;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão Estratégica;10037,10432,10036,10419,10420;;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Captação de Recursos para Novo Negocios;10031;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Estratégia Internacional;10366;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Estratégia Politica das Empresas Multinacionais;10008,10393,10394;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão com Pessoas e Literatura;10088, 10089;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Estratégia e Sustentabilidade em Organizações;10013,10365;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Geopolítica e Estratégia Organizacional;10366,10393,10394;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão De Carreiras;10381;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Empreendedorismo Social;10367;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Governança Corporativa;10008,10009,10010,10201;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Fusões E Aquisições;10045,10046,10047;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão De Carteiras E Fundos De Investimentos;10057,10039,10178,10184;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Governança Corporativa, Controle Interno E Auditoria;1004,10339;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Microfinanças E Inclusão Financeira;10371, 10190;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Controladoria Ii;10049,10050,10051,10198;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Renda Fixa;10064;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Mercados Financeiros E De Capitais;10054, 10184;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Mercados Financeiros E De Capitais;10054, 10184;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Private Equity Venture Capital;10045, 10178, ;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Avaliação De Empresas E Gestão Baseada Em Valor;10043,10045;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestao De Riscos E Derivativos;10183, 10066;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Psicanálise E Propaganda;10385, 10357;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Interpretações Da Sociedade Contemporânea: O Debate Sobre O Neoliberalismo;10386;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Fundamentos E Tendencias Da Cultura De Consumo;10387;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Vocação E Trabalho;10381;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Corrupção: Conceito, Sistema De Controle E Análise De Casos Na Relação Público Privado;10238,10324;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Metodos Multivariados Em Administração;10280;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Modelagem De Risco De Crédito;10190, 10191;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;VBA;10330;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Tecnicas De Previsão Em Administração E Economia;10205,10352;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Capacidade Analítica Para Decisões De Marketing;10080,10423,10083;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gestão De Vendas;10319,10320,10023;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Marketing Global;10082, 10037;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Criatividade;10027, 10382;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Branding;10363, 10076;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Business Up To Date: Consultoria em Marketing;10360,10074,10439;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Marketing De Redes Sociais;10359;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gerenciamento De Crises;10172;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Técnicas De Negociação;10022;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Negociação: Teoria E Pratica;10022;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gvniano Ensina Gvniano: Estratégia, Liderança E Gestão De Pessoas;10088, 10089, 10093;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Libras: Língua Brasileira De Sinais;10389;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Formação Integrada Para A Sustentabilidade;10013,10371,10365,10408;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Atividade De Campo – Formaçao Integrada Para A Sustentabilidade;10013,10371,10365,10409;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Equity Research Challenge;10054, 10045,10187,10188;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Preparação para Imersão Em Campo – GV Pesquisa;10169;15 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Economia da Gestão dos Recursos Humanos;10088, 10095;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Teoria dos Jogos e Economia Comportamental;10135,10214, 10364;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Indicadores Econômicos;10390;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Economia Da Estrategia;10130, 10208, 10032, 10035, 10128;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Inovação Para Sustentabilidade;10028;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Operação E Logistica Internacional;10369,10015,10403;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Intraempreendedorismo E Inovação;10028,10030,10322;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Sustentabilidade: Introdução À Temática Socioambiental;10408;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Diagnóstico Empresarial: Técnicas De Consultoria;10313, 10042, 10043;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Criação De Negócios Tecnológicos;10030, 10322;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Modelo De Negócio, Parcerias Em Criação De Valor;10030, 10323;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Avaliação De Empresas E Gestão Baseada Em Valor;10043, 10045;60 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;A Conjuntura Politica Brasileira E Seus Impactos No Mundo Dos Negócios;10392;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Oficina Do Pensamento Logico;10327;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Analise De Risco Politico: Como As Empresas Multinacionais Dedidem Onde E Como Investir;10392, 10394;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Logistica Reversa E A Gestão De Residuos Solidos;10370;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Marketing Para Novos Negócios – Modulo I;10074, 10078;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Technology Business Models – Modulo I;10030;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Negotiation – Módulo I;10022;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Corporate Social Responsibility In Brazil – Modulo I;10371;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Macroeconomics For Emerging Markets – Modulo I;1010;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Brazilian Economy – Módulo I;10210;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Emerging Powers In Global Political Order – Modulo I;10394;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Cultural Aspects Of Brazilian Society – Módulo I;10388;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Gamification – Modulo I;10361;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Racism And Prejudice: Misbehaviour In The Workplace – Modulo I;10383;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Legal Framework For International Business Modulo Ii;10397;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Simulation Models In Finance – Modulo Ii;10352;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Strategy In International Perspective - Módulo Ii;10366;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Bric Countries: Companies & Labor Laws – Modulo Ii;10122, 10206;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Cases On Economic Development: China, India And Other Economies – Modulo Ii;10206, 10211;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Brazilian Foreign Policy – Modulo Ii;10393;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Marketing For Low Income Consumers – Modulo Ii;10360;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;Graduação em administração de empresas;;Development & Sustainability - Modulo Ii;10391;30 horas aula;Mensalidade - R$ 3.700;http://graduacao.fgv.br/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Pessoas na organização;10092,10088,10089;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Consumidores e produtos;10074,10078;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Fontes e aplicações de recursos;10048,10060;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Processos e sistemas;10011,10012,10313,10314;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise de oportunidades de mercado;10032, 10035;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Visão economica do mercado;10129,10205,10319,10458,10459,10460;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise mercadológica;10072,10073,10423,10083;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Ética e sociedade;10136,10273,10274,10275;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Relações com o Governo;10022;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;A Empresa e sua cadeia de valor;10072;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Indicadores de desempenho da empresa;10043;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise de empreendimentos;10045;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Inteligência de negócios;10080;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Geração de valor na Empresa;10038,10046;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;Inovação e sustentabilidade;10028,10365,10371,10408;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MBM (Master in business management);Graduação, inglês;TCC - Trabalho de conclusão de curso;10000;Curso total 436 horas, 3 semestres; R$32.160,00 ;http://www.fgv.br/eaesp/cursos/mbm/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Contabilidade e Análise financeira;10101,10102,10103,10106,10107,10043;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Análise Estatística;10140,10279,10280,10281,10282;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Microeconomia;10130,10131,10132,10449,10450,10451,10452,1053,10454,10455;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Finanças corporativas;10042,10043,10352,10046,10052,10187,10188,10045 ;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Economia de Empresas;10206,10214,10208,10469;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Estratégia de Marketing;10073,10083;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Comportamento Organizacional;10088,10019;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Estratégia empresarial;10072,10200,10032,10035,10432,10420,10435;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Gestão de Operações;10011,10313,10012,10314;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Macroeconomia;10129,10205,10390,10456,10459,10460;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Investimentos;10039,10342,10064,10054,10057;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Fusões e Aquisições;10047,10042,10043,10052;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Mapeando Decisões complexas;10016;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Negociação;10022;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Inovação em Tecnologia da Informação;10028,10398,10399;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Comportamento humano;10089,10092;Curso total 666 horas, 6 semestres; R$101.256,00 ;http://www.fgv.br/eaesp/cursos/mpa/@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Business Performance Management;10005,10006,10009,10012,10016,10037,10036;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Estratégia Financeira;10066,10186,10311,10436;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Direito Empresarial e Responsabilidade Corporativa;10365,10201,10114,10117;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Global Finance Reporting;10219;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Tax Strategy;10271;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Finanças Internacionais;10061,10039,10202,10203,10219,10220;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Finanças Integradas em Marketing e Vendas;10073,10080,10082,10440;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Integrando Finanças e Supply Chain Management;10071,10403;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Gestão Estratégica  de Performance;10004,10005,10006;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Audit and Assurance;10339;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Excellence in Family Business;10180,10368,10322;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Finanças e Controladoria);Graduação, 3 anos de experiência;Inovação e Co-criação;10026,10028;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-financas-controladoria@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Big data e saúde da população I;10334,10335,10638;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Big data e saúde da população II;10334,10335,10638;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Economia da saúde;10390,10469,10458,10459,10460,10550;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Empreendedorismo em saúde;10025,10029,10030,10367;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Indicadores de saúde e gestão;10390;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Governança em saúde;10008,10009,10010,10201;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Legislação, Regulação e Judicialização em saúde;;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Novos modelos de negócio na saúde;10030,10322;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Novos modelos de organização na saúde;10171,10096;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Qualidade e experiência do paciente;10081;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Qualidade e segurança em saúde;10081;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Redes e valor em saúde;10082;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Sistemas comparados de saúde: estado, sociedade e políticas de saúde;10206;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Sistemas comparados de saúde: diferentes realidades, diferentes modelos, diferentes resultados;10206;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Saúde);Graduação, 5 anos de experiência, Inglês;Discussão de Projeto;;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-saude@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Inteligencia de Negócios;10080;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Alinhamento Estratégico em Supply Chain;10037,10071;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Parcerias: coordenação e colaboração;10395;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Gestão de Projetos;10002,10003,10004,1000510006,10172,10368;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Gestão de Cadeias Globais;10366,10369;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Gestão de Relacionamentos;10014,10019,10650;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Arquitetura de Processos End to End;10011,10012,10015,10313,10314,10315,10370,10443;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Gestão de Desempenho;10314,10415;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Infraestrutura Logística;10403,10071;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Gestão de Riscos;10004;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Logística em Varejo;10071,10369,10401,10402,10405;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Logística em Saúde;10071,10369,10401,10402,10405;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Inovação Disruptiva em Supply Chain;10026,10028;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Compartilhamento de Conhecimento;10089;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Gestão de Supply Chain);Graduação, 3 anos de experiência, Inglês;Agentes de Transformação em cadeias;10172;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-gestao-supply-chain@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Desenvolvimento Sustentavel: Agenda e Governanca;10365;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Mudanças Climáticas: regulação e gestão empresarial;10371;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Viabilidade Econômico-financeira da Empresa: da estratégia à tomada de decisão I;10391;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Formação Integrada: Autoformação e Processos colaborativos ;10313;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Cultura do Consumo: fundamentos históricos e teóricos;10387;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Viabilidade Econômico-financeira da Empresa: da estratégia à tomada de decisão II;10391;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Gerindo Cadeias de Valor: Estratégias e ferramentas para Gestão Empresarial;10008,10009,10010,10201;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Sustentabilidade na estratégia empresarial;10013;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Cultura do Consumo: formas e desafios contemporâneos;10387;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Desenvolvimento local e grandes empreendimentos;10133,10030;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Serviços Ecossistêmicos: impactos na gestão;10408;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Cidades Sustentáveis;10391;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Sustentabilidade);Graduação, 3 anos de experiência, Inglês;Inclusão Financeira, Tecnologia e Desenvolvimento;10391;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-sustentabilidade@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Pensamento e Planejamento Estratégico;10037;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Varejo Online e Multicanal;10316,10359,10077;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Logística e Supply Chain;10071,10369,10401,10402,10405;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Big Data;10334;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Desenvolvimento de Produtos e Coleções;10081,10082,10361,10424,10440;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Experiência de Compra e Shopper;10077,10078;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Otimização de Processos, Melhoria Contínua, Eliminação de Desperdícios e Benchmarking;10011,10012,10015,10313,10314,10315,10443;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Analytics e Métodos Estatísticos;10137,10140,10279,10280,10281,10282;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Métricas Financeiras e Pricing;10082,10454;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Comunicação, Novas Mídias e Redes Sociais ;10076,10085,10441,10359,10437;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV EAESP;MPA (Mestrado Profissional Ênfase em Varejo);Graduação, 5 anos de experiência, Inglês;Desafios e Tendências de Mercado;10080;Curso total 390 horas, 3 semestres; R$60.000,00 ;http://mestrado-profissional.eaesp.fgv.br/enfase-em-varejo@' +
		'FGV;PEC - Programas de educação continuada;Envolvimento com projetos e empreendimentos;PEC - Gerenciamento de projetos;10002,10003,10005,10006, 10096, 10097,10315;60 horas aula; R$ 4.800 ;http://pec.fgv.br/cursos/gerenciamento-de-projetos@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Gestão de Marketing;10439,10081,10441,10442,10077;60 horas aula; R$ 4.560 ;http://pec.fgv.br/cursos/gestao-de-marketing-uma-visao-geral@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Liderança 360;10648,10649,10650;60 horas aula; R$ 5.400 ;http://pec.fgv.br/cursos/lideranca-360o-abilio-diniz@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Criatividade;10425,10027,10382;40 horas aula; R$ 3.120 ;http://pec.fgv.br/cursos/criatividade@' +
		'FGV;PEC - Programas de educação continuada;Profissionais formados na área de saúde;PEC - Auditoria nos serviços de saúde;10004,10022,10037,10198;90 horas aula; R$ 6.030 ;http://pec.fgv.br/cursos/auditoria-em-servicos-e-sistemas-de-saude@' +
		'FGV;PEC - Programas de educação continuada;Formação superior completa;PEC - Empreendedorismo e criação de novos negócios;10028,10025,10029,10030,10031,10322;60 horas aula; R$ 4.920 ;http://pec.fgv.br/cursos/empreendedorismo-e-criacao-de-novos-negocios@' +
		'FGV;PEC - Programas de educação continuada;3 anos de experiência na área;PEC - Gestão de processos;10172,10011,10012,10313,10314;60 horas aula; R$ 5.040 ;http://pec.fgv.br/cursos/gestao-de-processos@' +
		'FGV;PEC - Programas de educação continuada;Estar envolvido na estratégia da empresa;PEC - Gestão estratégica de negócios;10072,10200,10032,10035,10432,10420,10435;56 horas aula; R$ 5.220 ;http://pec.fgv.br/cursos/gestao-estrategica-de-negocios@' +
		'FGV;PEC - Programas de educação continuada;2 anos de formação ou 5 anos de experiência em gestão;PEC - Intensivo de administração;10022,10406,10107,10105,10060,10061,10081,10073,10083;132 horas aula; R$ 10.824 ;http://pec.fgv.br/cursos/intensivo-de-administracao@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Negociação;10022,10430,10650;60 horas aula; R$ 6.060 ;http://pec.fgv.br/cursos/negociacao@' +
		'FGV;PEC - Programas de educação continuada;Conhecimentos básicos de custo;PEC - Gerência comercial;10022,10023,10024,10319,10320,10321;56 horas aula; R$ 4.320 ;http://pec.fgv.br/cursos/gerencia-comercial@' +
		'FGV;PEC - Programas de educação continuada;1 ano de experiência na área de produto;PEC - Gerência de produto;10073,10081,10424,10440,10082,10356,10361,10073,10423,10080;60 horas aula; R$ 4.500 ;http://pec.fgv.br/cursos/gerencia-de-produto@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Mobile marketing;10423,10080,10083,10354,10355,10358,10359;60 horas aula; R$ 4.260 ;http://pec.fgv.br/cursos/mobile-marketing@' +
		'FGV;PEC - Programas de educação continuada;Formação superior completa;PEC - Intensivo de economia;10206,10473,10214,10208,10129,10205,10390,10458,10459,10130,10131,10132;60 horas aula; R$ 4.320 ;http://pec.fgv.br/cursos/intensivo-de-economia@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Análise de investimentos em projetos;10042,10391,10013,10043,10346,10052,10185,10187,10307;60 horas aula; R$ 4.380 ;http://pec.fgv.br/cursos/analise-de-investimentos-em-projetos@' +
		'FGV;PEC - Programas de educação continuada;Nenhum;PEC - Contabilidade e finanças para administradores não financeiros;10108,10060,10061,10049,10050,10042,10043,10101,10102,10103,10106,10106,10221;60 horas aula; R$ 5.340 ;http://pec.fgv.br/cursos/contabilidade-e-financas-para-administradores-nao-financeiros@';
	
	var arrayCursos = cursos.split("@");
	var i = 0;
	while (i < arrayCursos.length) {
		var arrayItensCurso = arrayCursos[i].split(";");
		console.log ("carregando curso:" + arrayCursos[i]);
		var objJson  =
				{ 
					documento: 
					{
				    	idCurso : i,
					    nome : arrayItensCurso[1],
					    descricao : arrayItensCurso[3],
					    tempo : arrayItensCurso[5],
					    custo : arrayItensCurso[6],
					    escola : arrayItensCurso[0],
					    eletiva : "",
					    preRequisito : arrayItensCurso[2],
					    wiki : arrayItensCurso[7],
						materias : [],
						habilidades : []
						}
					}
		if (arrayItensCurso[3]){
			var array = arrayItensCurso[3].split(",");
			var w = 0;
			while (w < array.length) {
				objJson.documento.materias.push(array[w].replace (" ",""));
				w++;
			};
		};
		if (arrayItensCurso[4]){
			var array = arrayItensCurso[4].split(",");
			var w = 0;
			while (w < array.length) {
				objJson.documento.habilidades.push(array[w].replace (" ",""));
				w++;
			};
		};
		
		rest_incluiCursos(objJson, semAcao, semAcao);

		i++;
	};

};

function carregaBadgesTotal (){
	/**
	 * 	carrega lista de badges
	 */
	
	var badges =
		'CFA candidate I ;"Você foi aprovado na prova ""CFA level I""";CFA Institute;1031#1035#10137#10140#10055#10042#10043#10048#10052#10185#10039#10064#10063#10174#10175#10176#10178#10194#10196#10197#10070#10131#10199#10200#10201#10208#10209#10132#10128#10202#10203#10101#10102#10103#10220#10227#10222#10223#10224#10225;Financial analyst, Finance, Research, analista financeiro, mercado financeiro, mercado de capitais;Certificado;CFA_I.png;Conquistei o título de CFA candidate I ;Mais uma meta alcançada, o CFA Institute me conferiu o título de CFA candidate I ;@' +
		'CFA candidate II;"Você foi aprovado nas provas ""CFA level I"" e ""CFA level II""";CFA Institute;1031#1035#10137#10140#10055#10042#10043#10048#10052#10185#10039#10064#10063#10174#10175#10176#10178#10194#10196#10197#10070#10131#10199#10200#10201#10208#10209#10132#10128#10202#10203#10101#10102#10103#10220#10227#10222#10223#10224#10225#10195#10204#10044#10045#10046#10047#10281#10282#10062#10065#10066#10226#10228#10187#10188#10189#10177#10056#10059;Financial analyst, Finance, Research, analista financeiro, mercado financeiro, mercado de capitais;Certificado;CFA_II.png;Conquistei o título de CFA candidate II;Mais uma meta alcançada, o CFA Institute me conferiu o título de CFA candidate II;@' +
		'CFA candidate III;"Você foi aprovado nas provas ""CFA level I"", ""CFA level II"" e ""CFA level III""";CFA Institute;1031#1035#10137#10140#10055#10042#10043#10048#10052#10185#10039#10064#10063#10174#10175#10176#10178#10194#10196#10197#10070#10131#10199#10200#10201#10208#10209#10132#10128#10202#10203#10101#10102#10103#10220#10227#10222#10223#10224#10225#10195#10204#10044#10045#10046#10047#10281#10282#10062#10065#10066#10226#10228#10187#10188#10189#10177#10056#10059#10179#10180#10181#10182#10183#10184#10271#10205#10214#10215#10135#10190#10191#10192#10193;Financial analyst, Finance, Research, analista financeiro, mercado financeiro, mercado de capitais;Certificado;CFA_III.png;Conquistei o título de CFA candidate III;Mais uma meta alcançada, o CFA Institute me conferiu o título de CFA candidate III;@' +
		'CFA;Você conseguiu o título de Chartered Financial Analyst;CFA Institute;1031#1035#10137#10140#10055#10042#10043#10048#10052#10185#10039#10064#10063#10174#10175#10176#10178#10194#10196#10197#10070#10131#10199#10200#10201#10208#10209#10132#10128#10202#10203#10101#10102#10103#10220#10227#10222#10223#10224#10225#10195#10204#10044#10045#10046#10047#10281#10282#10062#10065#10066#10226#10228#10187#10188#10189#10177#10056#10059#10179#10180#10181#10182#10183#10184#10271#10205#10214#10215#10135#10190#10191#10192#10193#10163#10164#10166;Financial analyst, Finance, Research, analista financeiro, mercado financeiro, mercado de capitais;Certificado;CFA.png;Conquistei o título de CFA;Mais uma meta alcançada, o CFA Institute me conferiu o título de CFA;@' +
		'Mestrado Profissional em Administração;"Você adquiriu o título de ""Mestre em Administração""";FGV EAESP;1053#10011#10012#10016#10019#10022#10028#10032#10035#10039#10042#10043#10045#10046#10047#10052#10054#10057#10064#10072#10073#10083#10088#10089#10092#10101#10102#10103#10106#10107#10129#10130#10131#10132#10140#10187#10188#10200#10205#10206#10208#10214#10279#10280#10281#10282#10313#10314#10342#10352#10390#10398#10399#10420#10432#10435#10449#10450#10451#10452#10454#10455#10456#10459#10460#10469;Mestrado Profissional, business;Certificado;MPA.png;Concluí o curso Mestrado Profissional em Administração pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Administração de Empresas;@' +
		'Mestrado Profissional Gestão para a Competitividade - Linha Finanças e Controladoria;"Você adquiriu o título de ""Mestre em Administração"", na linha de Finanças e Controladoria";FGV EAESP;10005#10006#10009#10012#10016#10037#10036#10066#10186#10311#10436#10365#10201#10114#10117#10219#10271#10061#10039#10202#10203#10220#10073#10080#10082#10440#10071#10403#10004#10339#10180#10368#10322#10026#10028;Mestrado Profissional, finance, controller;Certificado;MPA_Finanças_controladoria.png;Concluí o curso Mestrado Profissional - Linha Finanças e Controladoria pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Gestão para a competitividade na linha de Finanças e Controladoria;@' +
		'Mestrado Profissional Gestão para a Competitividade - Linha Gestão de Saúde;"Você adquiriu o título de ""Mestre em Administração"", na linha de Gestão da saúde";FGV EAESP;10008#10009#10010#10025#10029#10030#10081#10082#10096#10171#10201#10206#10322#10334#10335#10367#10390#10458#10459#10460#10469#10550#10638;Mestrado Profissional, health care, médico, hospitalar;Certificado;MPA_Gestão_da_Saúde.png;Concluí o curso Mestrado Profissional - Linha Gestão de Saúde pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Gestão para a competitividade na linha de Gestão de Saúde;@' +
		'Mestrado Profissional Gestão para a Competitividade - Linha Gestão de Supply Chain;"Você adquiriu o título de ""Mestre em Administração"", na linha de Gestão de supply chain";FGV EAESP;10002#10003#10004#10005#10006#10011#10012#10014#10015#10019#10026#10028#10037#10071#10080#10089#10172#10313#10314#10315#10366#10368#10369#10370#10395#10401#10402#10403#10405#10415#10443#10650;Mestrado Profissional, logística, estoque, operações;Certificado;MPA_Supply_Chain.png;Concluí o curso Mestrado Profissional - Linha Gestão de Supply Chain pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Gestão para a competitividade na linha de Gestão de Supply Chain;@' +
		'Mestrado Profissional Gestão para a Competitividade - Linha Sustentabilidade;"Você adquiriu o título de ""Mestre em Administração"", na linha de Sustentabilidade";FGV EAESP;10008#10009#10010#10201#10365#10371#10391#10313#10387#10013#10133#10030#10408;Mestrado Profissional, sustainability, meio ambiente;Certificado;MPA_Sustentabilidade.png;Concluí o curso Mestrado Profissional - Linha Sustentabilidade pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Gestão para a competitividade na linha de Sustentabilidade;@' +
		'Mestrado Profissional Gestão para a Competitividade - Linha Varejo;"Você adquiriu o título de ""Mestre em Administração"", na linha de Varejo";FGV EAESP;10011#10012#10015#10037#10071#10076#10077#10078#10080#10081#10082#10085#10137#10140#10279#10280#10281#10282#10313#10314#10315#10316#10334#10359#10361#10369#10401#10402#10405#10424#10437#10440#10441#10443#10454;Mestrado Profissional, operações, consumer, consumidor;Certificado;MPA_Varejo.png;Concluí o curso Mestrado Profissional - Linha Varejo pela FGV-EAESP;Mais uma meta alcançada, a FGV EAESP me conferiu o título de Mestre em Gestão para a competitividade na linha de Varejo;@' +
		'PEC;Você completou um curso do PEC FGV;FGV EAESP;;Programa de educação continuada;Certificado;FGV_PEC.png;Concluí um PEC na FGV EAESP;Mais uma meta alcançada, Concluí um curso no PEC da FGV EAESP;@' +
		'YggBoard;Parabéns, você completou seu perfil e agora faz parte da YggBoard;YggBoard;;Perfil, cadastro;Incentivo;Perfil.png;Agora participo da revolução!;Completei meu perfil e já estou aproveitando as vantagens de usar a YggBoard;@' +
		'Colecionador nível 1;Você conquistou 60 Habilidades;Yggboard;;;Número;Colecionador_1.png;Colecionador nível 1;Conquistei 60  Habilidades em Yggboard;60@' +
		'Colecionador nível 2;Parabéns você conquistou 100 Habilidades;Yggboard;;;Número;Colecionador_2.png;Colecionador nível 2;Conquistei 100 Habilidades em Yggboard;100@' +
		'Colecionador nível 3;Foco no crescimento! Conquistou 150 Habilidades;Yggboard;;;Número;Colecionador_3.png;Colecionador nível 3;Conquistei 150 Habilidades em Yggboard;150@' +
		'Colecionador nível 4;Wow! Você acaba de conquistar 200 Habilidades;Yggboard;;;Número;Colecionador_4.png;Colecionador nível 4;Conquistei 200 Habilidades em Yggboard;200@' +
		'Colecionador nível 5;Unstoppable! Conquistou 250 Habilidades;Yggboard;;;Número;Colecionador_5.png;Colecionador nível 5;Conquistei 250 Habilidades em Yggboard;250@' +
		'Colecionador nível 6;Parabéns Mestre, você chegou a 300 Habilidades;Yggboard;;;Número;Colecionador_6.png;Colecionador nível 6;Conquistei 300 Habilidades em Yggboard;300@' +
		'Fome de conhecimento;Você iniciou um novo caminho ao marcar 35 Habilidades como Interesse;Yggboard;;;Número;Fome_de_conhecimento.png;Fome de conhecimento;Meta estabelecida, aprender 35 novas Habilidades;@' +
		'Caçador de conhecimento;Continue a caçada por mais conhecimento, marcou 80 Habilidades como Interesse;Yggboard;;;Número;Caçador_de_conhecimento.png;Caçador de conhecimento;Que comece a caçada pela sabedoria, vou aprender 80 novas Habilidades ;80@' +
		'Mente ambiciosa;Prepare-se para se transformar, você marcou 120 Habilidades como Interesse;Yggboard;;;Número;Mente_ambiciosa.png;Mente ambiciosa;Metamorfose iniciada, mente pronta para aprender 120 novas Habilidades;120@' +
		'Visão pro futuro;Selecionou seu próximo Objetivo na carreira;Yggboard;;;Referência;Visão_de_futuro.png;Minha visão para o futuro;Selecionei meu próximo objetivo de carreira em Yggboard e agora começam os estudos;@' +
		'Beta Tester;Participei da faze Beta do Yggboard;Yggboard;;;Data;Beta_Tester.png;Beta Tester Yggboard;Participei da fase Beta do Yggboard;1022017@' +
		'Contribuidor Ygg;Contribui no conteudo do Yggboard;Yggboard;;;Contribuidor Número;Contribuidor.png;Contribuidor;Contribuí com a evolução do conteúdo do Yggboard;@' +
		'Ygg Bronze;Consegui qualificar 25% do meu perfil;Yggboard;;;Qualidade Informação;Perfil_qualificado_1.png;Ygg Bronze;Consegui qualificar 25% do meu perfil em Yggboard;25@' +
		'Ygg Prata;Consegui qualificar 50% do meu perfil;Yggboard;;;Qualidade Informação;Perfil_qualificado_2.png;Ygg Prata;Consegui qualificar 50% do meu perfil em Yggboard;50@' +
		'Ygg Ouro;Consegui qualificar 75% do meu perfil;Yggboard;;;Qualidade Informação;Perfil_qualificado_3.png;Ygg Ouro;Consegui qualificar 75% do meu perfil em Yggboard;75@' +
		'Ygg Mestre;Consegui qualificar 100% do meu perfil;Yggboard;;;Qualidade Informação;Perfil_qualificado_4.png;Ygg Mestre;Consegui qualificar 100% do meu perfil em Yggboard;100@' +
		'Bom amigo;Convidei um amigo para fazer parte da Revolução!;Yggboard;;;Incentivo;Amigo_Ygg.png;Bom amigo;Convidei um amigo para fazer parte da Revolução Yggboard;@' +
		'MP Finanças e Controladoria 1 Semestre;Você completou a Dimensão Edificar do curso;FGV EAESP;;;Certificado;Finanças_1.png;FGV - MP Finanças e Controladoria 1 Semestre;Primeiro passo dado, completei o primeiro semestre do Mestrado profissional na FGV linha Finaças e Controladoria;@' +
		'MP Finanças e Controladoria 2 Semestre;Você completou a Dimensão Integrar do curso;FGV EAESP;;;Certificado;Finanças_2.png;FGV - MP Finanças e Controladoria 2 Semestre;Rumo ao objetivo, segundo semestre completo do Mestrado profissional da FGV linha Finanças e Controladoria;@' +
		'MP Gestão de Saúde 1 semestre;Você completou a Dimensão Global do curso;FGV EAESP;;;Certificado;Saúde_1.png;FGV - MP Gestão de Saúde 1 semestre;Primeiro passo dado, completei o primeiro semestre do Mestrado profissional na FGV linha Gestão de Saúde;@' +
		'MP Gestão de Saúde 2 semestre;Você completou a Dimensão Decisória do curso;FGV EAESP;;;Certificado;Saúde_2.png;FGV - MP Gestão de Saúde 2 semestre;Rumo ao objetivo, segundo semestre completo do Mestrado profissional da FGV linha Gestão de Saúde;@' +
		'MP Gestão de Supply Chain 1 semestre;Você completou a Dimensão Configuração do curso;FGV EAESP;;;Certificado;Supply_1.png;FGV - MP Gestão de Supply Chain 1 semestre;Primeiro passo dado, completei o primeiro semestre do Mestrado profissional na FGV linha Gestão de Supply Chain;@' +
		'MP Gestão de Supply Chain 2 semestre;Você completou a Dimensão Operação do curso;FGV EAESP;;;Certificado;Supply_2.png;FGV - MP Gestão de Supply Chain 2 semestre;Rumo ao objetivo, segundo semestre completo do Mestrado profissional da FGV linha Gestão de Supply Chain;@' +
		'MP Sustentabilidade 1 semestre;Você completou a Dimensão Global do curso;FGV EAESP;;;Certificado;Sustentabilidade_1.png;FGV - MP Sustentabilidade 1 semestre;Primeiro passo dado, completei o primeiro semestre do curso de Mestrado profissional na FGV linha Sustentabilidade;@' +
		'MP Sustentabilidade 2 semestre;Você completou a Dimensão Relacional do curso;FGV EAESP;;;Certificado;Sustentabilidade_2.png;FGV - MP Sustentabilidade 2 semestre;Rumo ao objetivo, segundo semestre completo no curso de Mestrado profissional da FGV linha Sustentabilidade;@' +
		'MP Varejo 1 semestre ;Você completou a Dimensão Investigação do curso;FGV EAESP;;;Certificado;Varejo_1.png;FGV - MP Varejo 1 semestre ;Primeiro passo dado, completei o primeiro semestre do curso de Mestrado profissional na FGV linha Varejo;@' +
		'MP Varejo 2 semestre ;Você completou a Dimensão Conhecimento do curso;FGV EAESP;;;Certificado;Varejo_2.png;FGV - MP Varejo 2 semestre ;Rumo ao objetivo, segundo semestre completo no curso de Mestrado profissional da FGV linha Varejo;@';
	var arrayBadges = badges.split("@");
	var i = 0;
	while (i < arrayBadges.length) {
		var arrayItensBadge = arrayBadges[i].split(";");
		console.log ("carregando badge:" + arrayBadges[i]);
		var objJson  =
				{ 
					documento: 
					{
					    nome : arrayItensBadge[0],
					    badge : arrayItensBadge[6],
					    descricao : arrayItensBadge[1],
					    textoCompartilhamento_1 : arrayItensBadge[7],
					    textoCompartilhamento_2 : arrayItensBadge[8],
					    entidadeCertificadora : arrayItensBadge[2],
					    tipo : arrayItensBadge[5],
					    parametro : arrayItensBadge[9],
						habilidades : [],
						tags : []
						}
					};
		if (arrayItensBadge[3]){
			var array = arrayItensBadge[3].split("#");
			var w = 0;
			while (w < array.length) {
				objJson.documento.habilidades.push(array[w].replace (" ",""));
				w++;
			};
		};
		if (arrayItensBadge[4]){
			var array = arrayItensBadge[4].split(",");
			var w = 0;
			while (w < array.length) {
				objJson.documento.tags.push(array[w].replace (" ",""));
				w++;
			};
		};
		
		rest_incluiBadges(objJson, semAcao, semAcao);

		i++;
	};
};

function carregaUsuarios (){
	/**
	 * 	carrega usuarios
	 */
	
	var usuarios =
		'2016-07-12T01:12:39+0001;;;;Bruno;Gouvea;brugou@gmail.com&' +
		'2016-07-12T01:12:39+0002;;;;André;Bringhenti;Andrebcr@hotmail.com&' +
		'2016-07-12T01:12:39+0003;;;;Guilherme;Mariotto;guilhermecmf@gmail.com&' +
		'2016-07-12T01:12:39+0004;;;;Rodrigo ;Machado;rodmachado@hotmail.com&' +
		'2016-07-12T01:12:39+0005;;;;Rodrigo ;Morosky;rodrigo.morosky@gmail.com&' +
		'2016-07-12T01:12:39+0006;;;;Vitor ;Gouvea Santos;vitgs0@gmail.com&' +
		'2016-07-12T01:12:39+0007;;;;Aluizio ;Leal;aluizio.leal@hotmail.com&' +
		'2016-07-12T01:12:39+0008;;;;Victor ;Grobberio;victor.grobberio@gmail.com&' +
		'2016-07-12T01:12:39+0009;;;;Adriana ;Oka;adrioka@gmail.com&' +
		'2016-07-12T01:12:39+0010;;;;Marcela ;Bermudes;marcela_bermudes@hotmail.com&' +
		'2016-07-12T01:12:39+0011;;;;Luiz Gustavo;Suet Barriel;luizgustavos@yahoo.com.br&' +
		'2016-07-12T01:12:39+0012;;;;Luiza ;Santos;lukgsantos@gmail.com&' +
		'2016-07-12T01:12:39+0013;;;;Roberta ;Gagliano;gagliano.roberta@gmail.com&' +
		'2016-07-12T01:12:39+0014;;;;João ;Prates Correia;joepcorreia@gmail.com&' +
		'2016-07-12T01:12:39+0015;;;;Francisco;Souza;frasouza@gmail.com&' +
		'2016-07-12T01:12:39+0016;;;;Thomas;Gouvea;tdgouvea@gmail.com&' +
		'2016-07-12T01:12:39+0017;;;;Marcela ;Pereira;marcelapignanelli@hotmail.com&';
	var arrayUsuario = usuarios.split("&");
	var i = 0;
	while (i < arrayUsuario.length) {
		var arrayItensUsuario = arrayUsuario[i].split(";");
		console.log ("carregando badge:" + arrayUsuario[i]);
		var objJson  =
		{
				documento: 
				{
			        email : arrayItensUsuario[6],
			        firstName : arrayItensUsuario[4],
			        lastName : arrayItensUsuario[5],
			        perfil : "user",
			        city : "São Paulo",
			        password : "mudar@123",
			        gender : "",
			        acceptTerms : "yes",
			        status : "",
			        dateTimeAcceptTerms : arrayItensUsuario[0]		        
				}
			};
		
		rest_incluirUsuario(objJson, semAcao, semAcao);

		i++;
	};
};

function carregaIndex (){
	
	rest_obterHabilidades (carregaIndexElemento, semAcao, "Habilidade");
	rest_obterCarreiras (carregaIndexElemento, semAcao,  "Objetivo");
	rest_obterBadges (carregaIndexElemento,semAcao,   "Badge");
	rest_obterCursos (carregaIndexElemento, semAcao,  "Curso");	
	rest_obterAreaAtuacao (carregaIndexElemento, semAcao,  "Área aAtuação");	
	rest_obterAreaConhecimento (carregaIndexElemento, semAcao,  "Área Conhecimento");	
}; 

function carregaIndexElemento(data, assunto){

	$.each(data, function (i, index) {
		var texto = "";
		if (index){
			var entidade = "";
			var id = "";
			var descricao = "";
			if (index.documento){
				if (index.documento.name){
					texto  = texto + carregaTextoIndex (index.documento.name);
					entidade = index.documento.name;
					id = index.documento.idHabilidade;
					descricao = index.documento.descricao;
				};
				if (index.documento.nome){
					texto  = texto + carregaTextoIndex (index.documento.nome);
					entidade = index.documento.nome;
					id = index.documento.idHabilidade;
				};
				if (index.documento.idCurso){
					id = index.documento.idCurso;
				};
				if (index.documento.id){
					id = index.documento.id;
				};
				if (index.documento.descricao) {
					texto  = texto + "," + carregaTextoIndex (index.documento.descricao);
					descricao = index.documento.descricao;
				};
				if (index.documento.tags){
					$.each(index.documento.tags, function (i, tag) {
						texto  = texto + "," + carregaTextoIndex (tag);
					});
				};
			};
			if (index.nome){
				texto  = texto + carregaTextoIndex (index.nome);
				entidade = index.nome;
			};
			if (index.descricao) {
				texto  = texto + "," + carregaTextoIndex (index.descricao);
				descricao = index.descricao;
			};
			if (index.tags){
				$.each(index.tags, function (i, tag) {
					texto  = texto + "," + carregaTextoIndex (tag);
				});
			};
			if (index.id){
				id = index.id;
			};
		};
		if (texto != ""){
			var textoArray = texto.split(",");
			var objIndex = 
				{
					documento :
					{
						texto : textoArray,
						assunto : assunto,
						entidade : entidade,
						id : id,
						descricao : descricao				
					}
				};
			rest_incluiIndex(objIndex, semAcao, semAcao)
		};
	});
	
};

function carregaTextoIndex (texto){
	if (texto){
		texto = texto.toLowerCase();
		texto = limpaTexto (texto);
		var textoArray = texto.split(" ");
		return textoArray;
	};
	
	return "";
};

function limpaTexto (texto){
	if (texto){
		var i = 0;
		var textoOut = "";
		while (i < texto.length) {
			var char = texto.substring(i, i + 1);
			switch(char) {
			case "ã":
		        char = "a"
		        break;
			case "á":
		        char = "a"
		        break;
			case "à":
		        char = "a"
		        break;
			case "â":
		        char = "a"
		        break;
		    case "é":
		    	char = "e"
		        break;
		    case "ê":
		    	char = "e"
		        break;
		    case "í":
		    	char = "i"
		        break;
		    case "ô":
		    	char = "o"
		        break;
		    case "õ":
		    	char = "o"
		        break;
		    case "ô":
		    	char = "o"
		        break;
		    case "ó":
		    	char = "o"
		        break;
		    case "ú":
		    	char = "u"
		        break;
		    case "ç":
		    	char = "c"
		        break;
		    default:
		    	break;
			}			
			textoOut = textoOut + char;
			++i;
		};
		return textoOut;
	};
	
	return "";
		
};

function atualizaCursosSugeridos(){
	var objJson = 

	{"cursosSugeridos": [{"cursos": [], "usuario": "adamivilela@gmail.com"}, {"cursos": [37, 141, 17, 327], "usuario": "adilson.prando@gmail.com"}, {"cursos": [], "usuario": "aluizio.leal@hotmail.com"}, {"cursos": [141, 281, 17, 383, 1, 298, 311], "usuario": "andrea@agenciabadaro.com.br"}, {"cursos": [], "usuario": "andrebcr@hotmail.com"}, {"cursos": [141, 376, 1, 281], "usuario": "arielchenker77@gmail.com"}, {"cursos": [], "usuario": "barbara.sgraciola@gmail.com"}, {"cursos": [141, 379], "usuario": "bdardes@gmail.com"}, {"cursos": [], "usuario": "beatriz@agenciabadaro.com.br"}, {"cursos": [], "usuario": "bento.mussnich@gmail.com"}, {"cursos": [], "usuario": "brugou@gmail.com"}, {"cursos": [], "usuario": "buh_mt@hotmail.com"}, {"cursos": [141, 327, 17, 37, 371, 1, 378, 281, 641, 630, 631, 298, 343], "usuario": "camila.koblinsky@gmail.com"}, {"cursos": [141, 379, 281, 17, 37, 383, 373, 377, 374, 384, 1, 378, 311], "usuario": "cesarfontao@hotmail.com"}, {"cursos": [141, 37, 281, 382, 482, 17, 381, 380, 371, 1, 327, 343, 311], "usuario": "cirofsouza@gmail.com"}, {"cursos": [141, 605, 609, 610, 611, 613, 614, 615, 606, 607, 608, 616, 612, 327, 369], "usuario": "douglas@yggboard.com"}, {"cursos": [], "usuario": "douglasprando@yahoo.com.br"}, {"cursos": [141, 298, 327, 605, 609, 610, 611, 613, 614, 615, 37, 606, 607, 608, 616], "usuario": "eric@yggboard.com"}, {"cursos": [], "usuario": "ericprando@gmail.com"}, {"cursos": [141, 37, 376, 1, 298, 281], "usuario": "fabrizio.dardes@gmail.com"}, {"cursos": [], "usuario": "fcesarcamargo@gmail.com"}, {"cursos": [], "usuario": "felipetabacchi@gmail.com"}, {"cursos": [], "usuario": "gabriel.soares.a@hotmail.com"}, {"cursos": [141, 281, 1, 298, 17, 357, 327, 311, 384, 343, 380, 383, 377, 605, 609], "usuario": "giopigatto@hotmail.com"}, {"cursos": [], "usuario": "grenne@grenne.com"}, {"cursos": [], "usuario": "grenne@uol.com.br"}, {"cursos": [374, 311], "usuario": "grenneglr@gmail.com"}, {"cursos": [141, 281, 17, 1, 298, 327, 357, 311, 384, 343, 380, 383, 377, 605, 609], "usuario": "gui.eckstein@hotmail.com"}, {"cursos": [], "usuario": "guilhermecmf@gmail.com"}, {"cursos": [], "usuario": "guiportoflorido@gmail.com"}, {"cursos": [141, 281, 17, 1, 298, 327, 357, 311, 384, 343, 380, 383, 377, 605, 609], "usuario": "jay_kim1996@hotmail.com"}, {"cursos": [], "usuario": "konarthur@gmail.com"}, {"cursos": [], "usuario": "lucanascimento98@gmail.com"}, {"cursos": [], "usuario": "lucasprototipo@gmail.com"}, {"cursos": [281, 141, 1, 384, 17, 383, 37, 377, 298, 483, 399], "usuario": "luizgustavos@yahoo.com.br"}, {"cursos": [], "usuario": "lukgsantos@gmail.com"}, {"cursos": [], "usuario": "marcelo.abib@instorebr.com"}, {"cursos": [], "usuario": "marcelospodolan@hotmail.com"}, {"cursos": [37, 281, 141, 382, 1, 311], "usuario": "paulodinis@terra.com.br"}, {"cursos": [298, 141, 17, 37, 377, 384, 1], "usuario": "pedro.henrique.martins19@gmail.com"}, {"cursos": [141, 281, 1, 17, 383, 384, 379, 298, 37, 377, 327, 357, 375, 641, 630], "usuario": "ppaeslopes@gmail.com"}, {"cursos": [], "usuario": "prando@gmail.com"}, {"cursos": [141, 374, 311, 298, 281, 327, 632, 37, 383, 1, 343, 720], "usuario": "rafael.amado86@gmail.com"}, {"cursos": [], "usuario": "rogassaf@gmail.com"}, {"cursos": [], "usuario": "tdgouvea@gmail.com"}, {"cursos": [141, 298, 327, 605, 609, 610, 611, 613, 614, 615, 37, 606, 607, 608, 616], "usuario": "teste@yggboard.com"}, {"cursos": [141, 281, 17, 1, 357, 298, 327, 37, 380, 384, 311, 343, 383, 381, 377], "usuario": "victor.grobberio@gmail.com"}, {"cursos": [384, 17, 1, 281, 141, 377, 298, 399], "usuario": "viniciusjose3000@gmail.com"}]};
	
	rest_atualizaCursosSugeridos(objJson, semAcao, semAcao);
};

function testaAtualizacaoPerfil(){
	var objJson = 

		{
			usuario : "grenneglr@gmail.com",
			tipo : "habilidadesInteresse",
			id : "9999",
			inout : "in"
		};
	
	rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
	var objJson = 

	{
		usuario : "grenneglr@gmail.com",
		tipo : "habilidades",
		id : "9999",
		inout : "in"
	};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "carreirasInteresse",
	id : "9999",
	inout : "in"
};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "carreiras",
	id : "9999",
	inout : "in"
};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "cursosInteresse",
	id : "9999",
	inout : "in"
};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "cursos",
	id : "9999",
	inout : "in"
};
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "badgesInteresse",
	id : "9999",
	inout : "in"
};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
var objJson = 

{
	usuario : "grenneglr@gmail.com",
	tipo : "badges",
	id : "9999",
	inout : "in"
};

rest_atualizaUserPerfilElementos(objJson, semAcao, semAcao);
};

function atualizaPreRequisitos (){
	
	rest_obterHabilidades(atualizaPreRequisitosProcess, semAcao);

};

function atualizaPreRequisitosProcess (habilidades){
	
	localStorage.setItem("elements", JSON.stringify(habilidades));
	
	$.each( habilidades, function( i, habilidade) {		
		habilidade = obterDependencias(habilidade, habilidade.documento.idHabilidade, "habilidades", 1);
		console.log ("id - "  + habilidade.documento.idHabilidade);
		var cursos = [];
	    $.each(habilidade.documento.cursos, function (i, curso) {
	    	cursos.push(curso.idCurso);
	    });
    	delete habilidade.documento["cursos"];
    	habilidade.documento.cursos = cursos;
		rest_atualizaHabilidade(habilidade, semAcao, semAcao);
	});

};

function atualizaObjetivos (){
	
	rest_obterHabilidades(lerObjetivos, semAcao, "false");

};

function lerObjetivos (habilidades){
	
	localStorage.setItem("elements", JSON.stringify(habilidades));
	
	rest_obterCarreiras(atualizaObjetivosProcess, semAcao);
};

function atualizaObjetivosProcess (objetivos){
	
	localStorage.setItem("objetivos", JSON.stringify(objetivos));
	
	habilidades = JSON.parse(localStorage.getItem("elements"));

	$.each( habilidades, function( i, habilidade) {		
		habilidade = obterObjetivos(habilidade, habilidade.documento.idHabilidade);
		console.log ("id - "  + habilidade.documento.idHabilidade);
		rest_atualizaHabilidade(habilidade, semAcao, semAcao);
	});

};

function obterObjetivos(objJson, habilidadeTarget){

	objetivos = JSON.parse(localStorage.getItem("objetivos"));
	
	$.each( objetivos, function( i, objetivo) {
		$.each( objetivo.necessarios, function( i, habilidade) {
			if (habilidade == objJson.documento.idHabilidade){
				var existente = false;
				$.each(objJson.documento.objetivos, function( i, objetivoCarregado) {
					if (objetivoCarregado == objetivo.nome){
						existente = true;
					};
				});
				if (!existente){
					objJson.documento.objetivos.push(objetivo.nome);
				};
			};
		});
	});		
	
	return objJson;
};

function atualizaPerfilCarreira (){
	
	rest_obterUsersPerfil(obterCarreiras, semAcao);

};

function obterCarreiras (perfis){
	
	rest_obterCarreiras(atualizaCarreiraPerfil, semAcao, perfis);

};

function atualizaCarreiraPerfil (carreiras, perfis){
	
	
	$.each( perfis, function( i, perfil) {
		var carreirasNew = [];
	    $.each(perfil.documento.carreiras, function (i, carreira) {
		    $.each(carreiras, function (i, carreiraSource) {
		    	if (carreira == carreiraSource.nome){
		    		carreirasNew.push(carreiraSource.id);
		    	};
		    });
	    });
	    delete perfil.documento.carreiras;
	    perfil.documento.carreiras = carreirasNew;
		var carreirasInteresseNew = [];
	    $.each(perfil.documento.carreirasInteresse, function (i, carreira) {
		    $.each(carreiras, function (i, carreiraSource) {
		    	if (carreira == carreiraSource.nome){
		    		carreirasInteresseNew.push(carreiraSource.id);
		    	};
		    });
	    });
	    delete perfil.documento.carreirasInteresse;
	    perfil.documento.carreirasInteresse = carreirasInteresseNew;
	    rest_atualizaUserPerfil(perfil, semAcao, semAcao);
	});

};
