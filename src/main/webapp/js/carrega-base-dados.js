/**
 * 
 */
function carregaHabilidadesTotal (){
	var jsonBase =
	{
		data:
		[
		
		{
		    _id : "57dabc71c66652ca33e4cd70",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1",
		        name : "Acadêmica",
		        descricao : "Conhecimentos relativos à produção científica e seus requerimentos",
		        wiki : "https://pt.wikipedia.org/wiki/Academia",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "933.75",
		        positionY : "361.71508819920325",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Acadêmico"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd71",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "6",
		        name : "Filosofia",
		        descricao : "Estudos sobre a consciência e condição humana, conhecimentos transcendentes à realidade",
		        wiki : "https://pt.wikipedia.org/wiki/Filosofia",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "-1264.75",
		        positionY : "373",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd72",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "5",
		        name : "Economia",
		        descricao : "Estudo das interações humanas de trocas e seus componentes",
		        wiki : "https://pt.wikipedia.org/wiki/Economia",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "-3297",
		        positionY : "1446",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Economics"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd73",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "2",
		        name : "Administração de empresas",
		        descricao : "Estudo da organização humana e administração de organizações",
		        wiki : "https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_de_empresas",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "31.56121935581632",
		        positionY : "1654.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Business", 
		            "MBA", 
		            "gestão"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd74",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "3",
		        name : "Ciências contábeis",
		        descricao : "Estudo de regras de contabilização de transações e propriedades",
		        wiki : "https://pt.wikipedia.org/wiki/Contabilidade",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "3098.106625788411",
		        positionY : "1004.8112473719638",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Contabilidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd75",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "4",
		        name : "Direito",
		        descricao : "Estudo das normas que regem as relações humanas em sociedade",
		        wiki : "https://pt.wikipedia.org/wiki/Direito",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "-1466",
		        positionY : "3159",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Law", 
		            "LLM", 
		            "advogado"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd76",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "7",
		        name : "Matemática",
		        descricao : "Estudo das relações numéricas como medidas, variações e estatísticas",
		        wiki : "https://pt.wikipedia.org/wiki/Matem%C3%A1tica",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "642",
		        positionY : "3010.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd77",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "8",
		        name : "Psicologia",
		        descricao : "Estudo do funcionamento da mente humana e seus padrões",
		        wiki : "https://pt.wikipedia.org/wiki/Psicologia",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "1599",
		        positionY : "251.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd78",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "12",
		        name : "Idiomas",
		        descricao : "Comunicação em idiomas estrangeiros",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_natural",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "2268.5",
		        positionY : "222.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Línguas"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd79",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "9",
		        name : "Tecnologia da informação",
		        descricao : "Conhecimentos e habilidades ligados a sistemas de informação digitais, computadores e redes",
		        wiki : "https://pt.wikipedia.org/wiki/Tecnologia_da_informa%C3%A7%C3%A3o",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "2990.6066257884113",
		        positionY : "2088.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "TI", 
		            "PC", 
		            "Mac"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "11",
		        name : "Sociologia",
		        descricao : "Estudo do comportamento e interações humanas",
		        wiki : "https://pt.wikipedia.org/wiki/Sociologia",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "937",
		        positionY : "18.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10",
		        name : "Soft Skills",
		        descricao : "Competências Intelectuais não técnicas, emocionais, sociais e criativas",
		        wiki : "https://en.wikipedia.org/wiki/Soft_skills",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "-272",
		        positionY : "251.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Competênciasemocionais", 
		            ""
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "13",
		        name : "Profissional",
		        descricao : "Habilidades profissionais",
		        wiki : "https://pt.wikipedia.org/wiki/Trabalhador",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "area",
		        weight : "70",
		        positionX : "-1098.4561439783613",
		        positionY : "82.4495500676217",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "trabalho"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "100",
		        name : "Trabalhos acadêmicos",
		        descricao : "Criação de trabalhos acadêmicos de acordo com as normas",
		        wiki : "https://pt.wikipedia.org/wiki/Academia",
		        area : "Acadêmica",
		        campo : "",
		        categoria : "",
		        parent : "1",
		        classes : "campo",
		        weight : "70",
		        positionX : "1051",
		        positionY : "367.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "127",
		        name : "Métodos de ensino",
		        descricao : "Técnicas e métodos de ensino",
		        wiki : "https://pt.wikipedia.org/wiki/Ensino",
		        area : "Acadêmica",
		        campo : "",
		        categoria : "",
		        parent : "1",
		        classes : "campo",
		        weight : "70",
		        positionX : "773",
		        positionY : "324",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Aulas", 
		            "professores"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd7f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "128",
		        name : "Pesquisa",
		        descricao : "Técnicas e métodos de pesquisa",
		        wiki : "https://pt.wikipedia.org/wiki/Pesquisa",
		        area : "Acadêmica",
		        campo : "",
		        categoria : "",
		        parent : "1",
		        classes : "campo",
		        weight : "70",
		        positionX : "755.7325440996017",
		        positionY : "415.9301763984065",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Tese", 
		            "mestrado", 
		            "doutorado"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd80",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "101",
		        name : "Gestão",
		        descricao : "Coordenação e direção das atividades da empresa basedas na interação com acionistas e stakeholders",
		        wiki : "https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1733.9387806441837",
		        positionY : "1007.0572176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd81",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "102",
		        name : "Comercial",
		        descricao : "Execução de transações de compra e venda baseadas em processos de relacionamento, negociação e senso comercial",
		        wiki : "https://pt.wikipedia.org/wiki/Com%C3%A9rcio",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "1588.561219355816",
		        positionY : "1362.0572176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd82",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "103",
		        name : "Empreendedorismo",
		        descricao : "Identificação de oportunidades, criação de modelos de negócios e implementação de novas empresas",
		        wiki : "https://pt.wikipedia.org/wiki/Empreendedorismo",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "252.0612193558144",
		        positionY : "886.5572176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd83",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "104",
		        name : "Estratégia",
		        descricao : "Planejamento, execução e iteração de iniciativas com o intuito de maximizar o sucesso competitivo da empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1871.688780644184",
		        positionY : "2355.9662086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd84",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "105",
		        name : "Finanças",
		        descricao : "Gestão dos recursos financeiros da companhia, com o objetivo da redução de seu custo, a otimização da sua aplicação e sua plena disponibilidade",
		        wiki : "https://pt.wikipedia.org/wiki/Finan%C3%A7as",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "595.8112193558155",
		        positionY : "2132.124381869675",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "finance", 
		            "grana"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd85",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "107",
		        name : "Marketing",
		        descricao : "Interação com mercado para a criação de soluções e de uma marca, suas ofertas e gestão de seus desempenhos",
		        wiki : "https://pt.wikipedia.org/wiki/Marketing",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1718.4387806441837",
		        positionY : "1700.5572176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd86",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "108",
		        name : "Recursos humanos",
		        descricao : "Identificação, atração, retenção e desenvolvimento de pessoas para viabilizar a execução da visão da organização",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_recursos_humanos",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "-677.1887806441854",
		        positionY : "1094.5572176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "RH"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc71c66652ca33e4cd87",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "146",
		        name : "Operações",
		        descricao : "Planejamento e execução de processos, determinando recursos e ferramentas necessários para a disponibilização eficiente de produtos e serviços",
		        wiki : "https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_da_produ%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "",
		        categoria : "",
		        parent : "2",
		        classes : "campo",
		        weight : "70",
		        positionX : "543.811219355815",
		        positionY : "1310.5572176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "operations", 
		            "produção"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd88",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "109",
		        name : "Contabilidade",
		        descricao : "Manutenção de registros contábeis de uma operação ou negócio",
		        wiki : "https://pt.wikipedia.org/wiki/Contabilidade",
		        area : "Ciências contábeis",
		        campo : "",
		        categoria : "",
		        parent : "3",
		        classes : "campo",
		        weight : "70",
		        positionX : "3098.106625788411",
		        positionY : "1012.5612473719638",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Contabilidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd89",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "110",
		        name : "Direito civil",
		        descricao : "Regulação das interações e relações entre pessoas fisícas ou jurídicas",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_civil",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1380.75",
		        positionY : "3098.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "114",
		        name : "Direito trabalhista",
		        descricao : "Regulação das relações trabalhistas entre pessoas físicas e jurídicas",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_do_trabalho",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-798.5",
		        positionY : "2847",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "emprego"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "113",
		        name : "Direito tributário",
		        descricao : "Regras e normas que regulam a cobrança de taxas e impostos de pessoas físicas e jurídicas",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1377.5",
		        positionY : "3437.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Impostos", 
		            "taxas"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "111",
		        name : "Direito comercial",
		        descricao : "Regulação das atividades empresariais e comerciais",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_comercial",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-594.25",
		        positionY : "3273.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "112",
		        name : "Direito constitucional",
		        descricao : "Análise e interpretação das normas constitucionais que regem uma nação",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_constitucional",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1469",
		        positionY : "2824",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "115",
		        name : "Regulações setoriais",
		        descricao : "Regulações específicas que regem o funcionamento de setores econômicos",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1837",
		        positionY : "3084.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd8f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "129",
		        name : "Direito administrativo",
		        descricao : "Direito das relações entre cidadãos e o governo",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_administrativo",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1802",
		        positionY : "3286",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd90",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "134",
		        name : "Direito Internacional",
		        descricao : "Regulação das relações internacionais entre países e organizações",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_internacional",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-2461.5",
		        positionY : "3467.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd91",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "131",
		        name : "Direito processual",
		        descricao : "Conjunto de regras, instituições e suas jurisprudências, que regulam o processo jurídico",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_processual",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-2419",
		        positionY : "3094.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd92",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "130",
		        name : "Direito econômico",
		        descricao : "Regulação das relações econômicas, produtivas e de circulação de bens",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_econ%C3%B4mico",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1930",
		        positionY : "3475",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd93",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "132",
		        name : "Direito bancário",
		        descricao : "Conjunto de normas que regulam o funcionamento do mercado bancário no Brasil",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_banc%C3%A1rio",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1765",
		        positionY : "2866",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd94",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "136",
		        name : "Direito penal",
		        descricao : "Regulação das penalidades aplicadas a infratores",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_penal",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "campo",
		        weight : "70",
		        positionX : "-2377.75",
		        positionY : "3264",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd95",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "116",
		        name : "Análise econômica",
		        descricao : "Análise econômica",
		        wiki : "https://pt.wikipedia.org/wiki/Economia",
		        area : "Economia",
		        campo : "",
		        categoria : "",
		        parent : "5",
		        classes : "campo",
		        weight : "70",
		        positionX : "-3493",
		        positionY : "1453.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd96",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "138",
		        name : "Filosofia política",
		        descricao : "Estudo da necessidade de importância da política na humanidade",
		        wiki : "https://pt.wikipedia.org/wiki/Filosofia_pol%C3%ADtica",
		        area : "Filosofia",
		        campo : "",
		        categoria : "",
		        parent : "6",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1427",
		        positionY : "309",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd97",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "137",
		        name : "Pensamento economico",
		        descricao : "Evolução do estudo econômico e escolas de pensamento econômico",
		        wiki : "https://pt.wikipedia.org/wiki/C%C3%B3digos_de_classifica%C3%A7%C3%A3o_JEL#B_-_Hist.C3.B3ria_do_pensamento_econ.C3.B3mico.2C_metodologia_e_abordagens_heterodoxas",
		        area : "Economia",
		        campo : "",
		        categoria : "",
		        parent : "5",
		        classes : "campo",
		        weight : "70",
		        positionX : "-2664",
		        positionY : "1258",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd98",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "117",
		        name : "Economia comportamental",
		        descricao : "Análise da influência do comportamento humano nas decisões econômicas",
		        wiki : "https://pt.wikipedia.org/wiki/Economia_comportamental",
		        area : "Economia",
		        campo : "",
		        categoria : "",
		        parent : "5",
		        classes : "campo",
		        weight : "70",
		        positionX : "-2660",
		        positionY : "1520.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd99",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "118",
		        name : "Ética",
		        descricao : "Estudo dos bons hábitos necessários à vida em comunidade",
		        wiki : "https://pt.wikipedia.org/wiki/%C3%89tica",
		        area : "Filosofia",
		        campo : "",
		        categoria : "",
		        parent : "6",
		        classes : "campo",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "383.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "139",
		        name : "Inglês",
		        descricao : "Comunicação na língua inglesa",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa",
		        area : "Idiomas",
		        campo : "",
		        categoria : "",
		        parent : "12",
		        classes : "campo",
		        weight : "70",
		        positionX : "2261",
		        positionY : "182.75",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "144",
		        name : "Francês",
		        descricao : "Comunicação na língua francesa",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa",
		        area : "Idiomas",
		        campo : "",
		        categoria : "",
		        parent : "12",
		        classes : "campo",
		        weight : "70",
		        positionX : "2268.25",
		        positionY : "340",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "147",
		        name : "Português",
		        descricao : "Comunicação na língua portuguesa",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa",
		        area : "Idiomas",
		        campo : "",
		        categoria : "",
		        parent : "12",
		        classes : "campo",
		        weight : "70",
		        positionX : "2077",
		        positionY : "19",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "145",
		        name : "Espanhol",
		        descricao : "Comunicação na língua espanhola",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana",
		        area : "Idiomas",
		        campo : "",
		        categoria : "",
		        parent : "12",
		        classes : "campo",
		        weight : "70",
		        positionX : "2269",
		        positionY : "437.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "120",
		        name : "Estatística",
		        descricao : "Análise do relacionamento entre dados e sua descrição",
		        wiki : "https://pt.wikipedia.org/wiki/Estat%C3%ADstica",
		        area : "Matemática",
		        campo : "",
		        categoria : "",
		        parent : "7",
		        classes : "campo",
		        weight : "70",
		        positionX : "534.25",
		        positionY : "2876.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cd9f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "119",
		        name : "Cálculo",
		        descricao : "Estudo das taxas de variação e crescimento de grandezas",
		        wiki : "https://pt.wikipedia.org/wiki/C%C3%A1lculo",
		        area : "Matemática",
		        campo : "",
		        categoria : "",
		        parent : "7",
		        classes : "campo",
		        weight : "70",
		        positionX : "909",
		        positionY : "3106",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cda0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "140",
		        name : "Álgebra",
		        descricao : "Manipulação de operações e equações matemáticas",
		        wiki : "https://pt.wikipedia.org/wiki/%C3%81lgebra",
		        area : "Matemática ",
		        campo : "",
		        categoria : "",
		        parent : "7",
		        classes : "campo",
		        weight : "70",
		        positionX : "466.25",
		        positionY : "3073.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cda1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "141",
		        name : "Probabilidade",
		        descricao : "Estudo da incerteza matemática",
		        wiki : "https://pt.wikipedia.org/wiki/Probabilidade",
		        area : "Matemática ",
		        campo : "",
		        categoria : "",
		        parent : "7",
		        classes : "campo",
		        weight : "70",
		        positionX : "976",
		        positionY : "2826",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cda2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "121",
		        name : "Psicologia Freudiana",
		        descricao : "Psicologia Freudiana",
		        wiki : "",
		        area : "Psicologia",
		        campo : "",
		        categoria : "",
		        parent : "8",
		        classes : "campo",
		        weight : "70",
		        positionX : "1443",
		        positionY : "77",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cda3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "150",
		        name : "Matemática financeira",
		        descricao : "Estudo das relações matemáticas de números financeiros",
		        wiki : "https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira",
		        area : "Matemática ",
		        campo : "",
		        categoria : "",
		        parent : "7",
		        classes : "campo",
		        weight : "70",
		        positionX : "401.5",
		        positionY : "3215.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc72c66652ca33e4cda4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "122",
		        name : "Psicologia do trabalho",
		        descricao : "Psicologia do trabalho",
		        wiki : "",
		        area : "Psicologia",
		        campo : "",
		        categoria : "",
		        parent : "8",
		        classes : "campo",
		        weight : "70",
		        positionX : "1704",
		        positionY : "351.25",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cda5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "148",
		        name : "Psicanálise",
		        descricao : "Psicanálise",
		        wiki : "https://pt.wikipedia.org/wiki/Psican%C3%A1lise",
		        area : "Psicologia",
		        campo : "",
		        categoria : "",
		        parent : "8",
		        classes : "campo",
		        weight : "70",
		        positionX : "1718",
		        positionY : "98",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cda6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "142",
		        name : "Sociologia econômica",
		        descricao : "Análise dos impactos dos sistemas econômicos na vida em sociedade",
		        wiki : "",
		        area : "Sociologia",
		        campo : "",
		        categoria : "",
		        parent : "11",
		        classes : "campo",
		        weight : "70",
		        positionX : "1057",
		        positionY : "26.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cda7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "143",
		        name : "Sociologia jurídica",
		        descricao : "Análise dos impactos das leis e normas na vida em sociedade",
		        wiki : "",
		        area : "Sociologia",
		        campo : "",
		        categoria : "",
		        parent : "11",
		        classes : "campo",
		        weight : "70",
		        positionX : "781",
		        positionY : "74",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cda8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "151",
		        name : "Pensamento crítico",
		        descricao : "Avaliação e reflexão lógica",
		        wiki : "https://pt.wikipedia.org/wiki/Pensamento_cr%C3%ADtico",
		        area : "Soft Skills",
		        campo : "",
		        categoria : "",
		        parent : "10",
		        classes : "campo",
		        weight : "70",
		        positionX : "-99.75",
		        positionY : "120.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cda9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "149",
		        name : "Habilidades sociais",
		        descricao : "Capacidade de interação social e de criação de relacionamentos",
		        wiki : "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_social",
		        area : "Soft Skills",
		        campo : "",
		        categoria : "",
		        parent : "10",
		        classes : "campo",
		        weight : "70",
		        positionX : "-46.75",
		        positionY : "331.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Inteligênciaemocional"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdaa",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "152",
		        name : "Pensamento abstrato",
		        descricao : "Avaliação de observações e experiências pelos seus componentes",
		        wiki : "https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o",
		        area : "Soft Skills",
		        campo : "",
		        categoria : "",
		        parent : "10",
		        classes : "campo",
		        weight : "70",
		        positionX : "-172",
		        positionY : "470.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdab",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "153",
		        name : "Comunicação",
		        descricao : "Transmissão e recepção de informações",
		        wiki : "https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o",
		        area : "Soft Skills",
		        campo : "",
		        categoria : "",
		        parent : "10",
		        classes : "campo",
		        weight : "70",
		        positionX : "-671.5",
		        positionY : "144",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdac",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "154",
		        name : "Postura",
		        descricao : "Auto controle do comportamental para atingimento de objetivos",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "",
		        categoria : "",
		        parent : "10",
		        classes : "campo",
		        weight : "70",
		        positionX : "-641",
		        positionY : "407.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdad",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "123",
		        name : "Computação geral",
		        descricao : "Computação geral",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "",
		        categoria : "",
		        parent : "9",
		        classes : "campo",
		        weight : "70",
		        positionX : "2889.1066257884113",
		        positionY : "1723.2536194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdae",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "125",
		        name : "Programação e Desenvolvimento",
		        descricao : "Programação e Desenvolvimento",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "",
		        categoria : "",
		        parent : "9",
		        classes : "campo",
		        weight : "70",
		        positionX : "2827.3566257884113",
		        positionY : "2115.7536194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdaf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "124",
		        name : "Infra estrutura tecnológica",
		        descricao : "Infra estrutura tecnológica",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "",
		        categoria : "",
		        parent : "9",
		        classes : "campo",
		        weight : "70",
		        positionX : "3305.3566257884113",
		        positionY : "2100.7536194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "126",
		        name : "Sistemas e plataformas",
		        descricao : "Sistemas e plataformas",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "",
		        categoria : "",
		        parent : "9",
		        classes : "campo",
		        weight : "70",
		        positionX : "3005.6066257884113",
		        positionY : "2485.7536194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1000",
		        name : "Monografias",
		        descricao : "Monografias",
		        wiki : "https://pt.wikipedia.org/wiki/Monografia",
		        area : "Trabalhos acadêmicos",
		        campo : "",
		        categoria : "",
		        parent : "100",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1051",
		        positionY : "375",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "TCC", 
		            "tese", 
		            "doutorado", 
		            "mestrado"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1050",
		        name : "Álgebra linear",
		        descricao : "",
		        wiki : "",
		        area : "Álgebra",
		        campo : "",
		        categoria : "",
		        parent : "140",
		        classes : "categoria",
		        weight : "70",
		        positionX : "590",
		        positionY : "3081",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1010",
		        name : "Macroeconomia",
		        descricao : "Estudo da economia de uma região ou país",
		        wiki : "https://pt.wikipedia.org/wiki/Macroeconomia",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3661",
		        positionY : "1591",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1012",
		        name : "Teoria do desenvolvimento econômico",
		        descricao : "Teoria do desenvolvimento econômico",
		        wiki : "",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3046",
		        positionY : "1303",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1011",
		        name : "Microeconomia",
		        descricao : "Estudo do comportamento econômico de indivíduos e firmas",
		        wiki : "https://pt.wikipedia.org/wiki/Microeconomia",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3723.5",
		        positionY : "1356.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1013",
		        name : "Teoria dos jogos",
		        descricao : "Teoria dos jogos",
		        wiki : "",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3724",
		        positionY : "1227",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1051",
		        name : "Econometria",
		        descricao : "",
		        wiki : "",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1502",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1060",
		        name : "Economia Internacional",
		        descricao : "",
		        wiki : "",
		        area : "Análise econômica",
		        campo : "",
		        categoria : "",
		        parent : "116",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1656",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdb9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1014",
		        name : "Negociações",
		        descricao : "Troca de informações com clientes e discussão de termos para realização de acordo",
		        wiki : "",
		        area : "Comercial",
		        campo : "",
		        categoria : "",
		        parent : "102",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1404.561219355816",
		        positionY : "1396.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdba",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1065",
		        name : "Transações comerciais",
		        descricao : "Condução de processos comerciais do interesse à entrega do produto",
		        wiki : "",
		        area : "Comercial",
		        campo : "",
		        categoria : "",
		        parent : "102",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1588.561219355816",
		        positionY : "1269.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdbb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1015",
		        name : "Relacionamento com clientes",
		        descricao : "Criaçãod e relacionamentos com objetivos de maximizar a eficiência comercial de longo prazo do negócio",
		        wiki : "",
		        area : "Comercial",
		        campo : "",
		        categoria : "",
		        parent : "102",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1699.561219355816",
		        positionY : "1422.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdbc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1016",
		        name : "Utilização MS Office",
		        descricao : "Utilização MS Office",
		        wiki : "",
		        area : "Computação geral",
		        campo : "",
		        categoria : "",
		        parent : "123",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3003.6066257884113",
		        positionY : "1731.0036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdbd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1018",
		        name : "Contabilidade empresarial",
		        descricao : "Contabilidade empresarial",
		        wiki : "",
		        area : "Contabilidade",
		        campo : "",
		        categoria : "",
		        parent : "109",
		        classes : "categoria",
		        weight : "70",
		        positionX : "2930.106625788411",
		        positionY : "1067.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc73c66652ca33e4cdbe",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1019",
		        name : "Contabilidade financeira",
		        descricao : "Contabilidade financeira",
		        wiki : "",
		        area : "Contabilidade",
		        campo : "",
		        categoria : "",
		        parent : "109",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3515.356625788411",
		        positionY : "1184.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdbf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1020",
		        name : "Contabilidade pessoal",
		        descricao : "Contabilidade Pessoal",
		        wiki : "",
		        area : "Contabilidade",
		        campo : "",
		        categoria : "",
		        parent : "109",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3078.106625788411",
		        positionY : "777.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1021",
		        name : "Código civil",
		        descricao : "Código civil",
		        wiki : "",
		        area : "Direito Civil",
		        campo : "",
		        categoria : "",
		        parent : "110",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1527",
		        positionY : "2965",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1052",
		        name : "Direito da propriedade",
		        descricao : "",
		        wiki : "",
		        area : "Direito Civil",
		        campo : "",
		        categoria : "",
		        parent : "110",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1509",
		        positionY : "3131",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1053",
		        name : "Direito da família",
		        descricao : "",
		        wiki : "",
		        area : "Direito Civil",
		        campo : "",
		        categoria : "",
		        parent : "110",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1243",
		        positionY : "3009",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1054",
		        name : "Direito das sucessões",
		        descricao : "",
		        wiki : "",
		        area : "Direito Civil",
		        campo : "",
		        categoria : "",
		        parent : "110",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1239",
		        positionY : "3204",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1022",
		        name : "Contratos",
		        descricao : "Contratos",
		        wiki : "",
		        area : "Direito Comercial",
		        campo : "",
		        categoria : "",
		        parent : "111",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-490.75",
		        positionY : "3092.5",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1024",
		        name : "Direito societário",
		        descricao : "Direito societário",
		        wiki : "",
		        area : "Direito Comercial",
		        campo : "",
		        categoria : "",
		        parent : "111",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-590.25",
		        positionY : "3347",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1056",
		        name : "Direito internacional privado",
		        descricao : "",
		        wiki : "",
		        area : "Direito internacional",
		        campo : "",
		        categoria : "",
		        parent : "134",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-2625",
		        positionY : "3471",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1055",
		        name : "Direito internacional público",
		        descricao : "",
		        wiki : "",
		        area : "Direito internacional",
		        campo : "",
		        categoria : "",
		        parent : "134",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-2298",
		        positionY : "3479",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1025",
		        name : "Tributação",
		        descricao : "Tributação",
		        wiki : "",
		        area : "Direito tributário",
		        campo : "",
		        categoria : "",
		        parent : "113",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1525",
		        positionY : "3444",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdc9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1057",
		        name : "Planejamento tributário",
		        descricao : "",
		        wiki : "",
		        area : "Direito tributário",
		        campo : "",
		        categoria : "",
		        parent : "113",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1251",
		        positionY : "3497",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdca",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1026",
		        name : "Finanças comportamentais",
		        descricao : "Finanças comportamentais",
		        wiki : "",
		        area : "Economia comportamental",
		        campo : "",
		        categoria : "",
		        parent : "117",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-2660",
		        positionY : "1528",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdcb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1027",
		        name : "Inovação",
		        descricao : "Identificação de oportunidades e lacunas de mercado e construção de soluções para suprir esta necessidade",
		        wiki : "",
		        area : "Empreendedorismo",
		        campo : "",
		        categoria : "",
		        parent : "103",
		        classes : "categoria",
		        weight : "70",
		        positionX : "59.56121935581422",
		        positionY : "780.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdcc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1028",
		        name : "Novos negócios",
		        descricao : "Criação de modelos de negócios e implantação de organizações para desenvolvê-los",
		        wiki : "",
		        area : "Empreendedorismo",
		        campo : "",
		        categoria : "",
		        parent : "103",
		        classes : "categoria",
		        weight : "70",
		        positionX : "252.06121935581436",
		        positionY : "945.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdcd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1029",
		        name : "Formulação estratégica",
		        descricao : "Análises do mercado, sua conjuntura competitiva, de empresas e produtos para a criação de planos e políticas de ação",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#A_intelig.C3.AAncia_e_o_planejamento",
		        area : "Estratégia",
		        campo : "",
		        categoria : "",
		        parent : "104",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1871.688780644184",
		        positionY : "2267.2162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdce",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1030",
		        name : "Decisão estratégica",
		        descricao : "Criação, seleção e execução de iniciativas estratégicas condicionadas às respostas competitivas observadas",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#Dire.C3.A7.C3.A3o_Estrat.C3.A9gica",
		        area : "Estratégia",
		        campo : "",
		        categoria : "",
		        parent : "104",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1869.938780644184",
		        positionY : "2522.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdcf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1031",
		        name : "Ética Aplicada",
		        descricao : "Ética Aplicada",
		        wiki : "",
		        area : "Ética",
		        campo : "",
		        categoria : "",
		        parent : "118",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "391",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1017",
		        name : "Finanças bancárias",
		        descricao : "Controle e aplicação de recursos financeiros dentro de instituições financeiras",
		        wiki : "https://pt.wikipedia.org/wiki/Banco",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1830.5612193558159",
		        positionY : "1897.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1032",
		        name : "Finanças corporativas",
		        descricao : "Análise e otimização da estrutura de capital de uma empresa para maximização do seu valor",
		        wiki : "https://pt.wikipedia.org/wiki/Finan%C3%A7as_corporativas",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-291.1887806441855",
		        positionY : "2319.8072176905703",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1036",
		        name : "Trading",
		        descricao : "Estruturação e execução de transações a mercado",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado_financeiro",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "631.311219355815",
		        positionY : "1834.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1034",
		        name : "Investimentos",
		        descricao : "Avaliação e aplicação de recursos em ativos financeiros para a maximização do retorno a determinado nível de risco",
		        wiki : "https://pt.wikipedia.org/wiki/Investimento",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1433.5612193558152",
		        positionY : "2375.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1033",
		        name : "Controladoria",
		        descricao : "Geração de informações financeiras para implementação de controles e realização de planejamento",
		        wiki : "https://pt.wikipedia.org/wiki/Controladoria",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-691.1887806441854",
		        positionY : "1896.307217690571",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1035",
		        name : "Finanças pessoais",
		        descricao : "Organização e maximização dos recursos financeiros pessoais em função das necessidades individuais",
		        wiki : "https://pt.wikipedia.org/wiki/Finan%C3%A7as_pessoais",
		        area : "Finanças",
		        campo : "",
		        categoria : "",
		        parent : "105",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-846.3268403456773",
		        positionY : "1713.4415460487794",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1002",
		        name : "Gestão de projetos",
		        descricao : "Planejamento, implementação e controle de projetos de mudança",
		        wiki : "https://pt.wikipedia.org/wiki/Ger%C3%AAncia_de_projetos",
		        area : "Gestão",
		        campo : "",
		        categoria : "",
		        parent : "101",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1733.9387806441837",
		        positionY : "1053.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc74c66652ca33e4cdd7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1004",
		        name : "Governança corporativa",
		        descricao : "Criação de estruturas de controle e direção dos negócios pelos acionistas e condução desses mecanismos",
		        wiki : "https://pt.wikipedia.org/wiki/Governan%C3%A7a_corporativa",
		        area : "Gestão",
		        campo : "",
		        categoria : "",
		        parent : "101",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1965.1887806441837",
		        positionY : "844.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdd8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1007",
		        name : "Gestão sustentável",
		        descricao : "Interação e comunicação com stakeholders para a adaptação das atividades da empresa e criação de iniciativas alinhadas a seus interesses",
		        wiki : "",
		        area : "Gestão",
		        campo : "",
		        categoria : "",
		        parent : "101",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1886.6887806441837",
		        positionY : "1217.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdd9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1058",
		        name : "Inglês de negócios",
		        descricao : "Jargões de inglês utilizados em negócios",
		        wiki : "",
		        area : "Inglês",
		        campo : "",
		        categoria : "",
		        parent : "139",
		        classes : "categoria",
		        weight : "70",
		        positionX : "2348",
		        positionY : "226",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdda",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1037",
		        name : "Implementação de sistemas",
		        descricao : "Implementação de sistemas",
		        wiki : "",
		        area : "Infra estrutura tecnológica",
		        campo : "",
		        categoria : "",
		        parent : "124",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3305.3566257884113",
		        positionY : "2108.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cddb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1038",
		        name : "Gestão de produto",
		        descricao : "Desenho e desenvolvimento de soluções alinhadas às necessidades dos consumidores, e gestão de seus atributos",
		        wiki : "",
		        area : "Marketing",
		        campo : "",
		        categoria : "",
		        parent : "107",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1950.4387806441837",
		        positionY : "1627.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cddc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1039",
		        name : "Análise mercadológica",
		        descricao : "Coleta e análise de informações de mercado e de uso dos produtos e serviços da empresa para reforçar o valor da sua oferta",
		        wiki : "",
		        area : "Marketing",
		        campo : "",
		        categoria : "",
		        parent : "107",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1839.9387806441837",
		        positionY : "1424.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cddd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1040",
		        name : "Comunicação mercadológica",
		        descricao : "Criação e gestão de canais de comunicação para a transmissão de informações sobre a empresa e suas ofertas",
		        wiki : "",
		        area : "Marketing",
		        campo : "",
		        categoria : "",
		        parent : "107",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1850.9387806441837",
		        positionY : "1827.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdde",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1041",
		        name : "Decisão mercadológica",
		        descricao : "Planejamento e gestão da oferta de produtos e serviços, agregando valor ao negócio com o pleno atendimento dos clientes",
		        wiki : "",
		        area : "Marketing",
		        campo : "",
		        categoria : "",
		        parent : "107",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1432.688780644184",
		        positionY : "1630.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cddf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1005",
		        name : "Gestão de operações",
		        descricao : "Desenvolvimento e controle de processos, visando a utilização eficiente de recursos na produção de bens e serviços",
		        wiki : "",
		        area : "Operações",
		        campo : "",
		        categoria : "",
		        parent : "146",
		        classes : "categoria",
		        weight : "70",
		        positionX : "880.811219355815",
		        positionY : "1419.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1061",
		        name : "Marketing digital",
		        descricao : "Utilização de canais digitais para a realização de comunicações e vendas",
		        wiki : "",
		        area : "Marketing",
		        campo : "",
		        categoria : "",
		        parent : "107",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1836.6887806441837",
		        positionY : "1993.3072176905714",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1062",
		        name : "Administração de sistemas",
		        descricao : "Dimensionamento, operação e controle de ferramentas tecnológicas para a operação eficiente de negócios",
		        wiki : "",
		        area : "Operações",
		        campo : "",
		        categoria : "",
		        parent : "146",
		        classes : "categoria",
		        weight : "70",
		        positionX : "799.3112193558145",
		        positionY : "1216.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1063",
		        name : "Logística",
		        descricao : "Dimensionamento, armazenamento e movimentação de recursos pela empresa, garantindo o fluxo constante e eficiente de sua operação",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos",
		        area : "Operações",
		        campo : "",
		        categoria : "",
		        parent : "146",
		        classes : "categoria",
		        weight : "70",
		        positionX : "155.06121935581425",
		        positionY : "1420.8072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Supplychain", 
		            "SCM", 
		            "Gestão da cadeia de suprimentos"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1064",
		        name : "Técnicas de gestão operacional",
		        descricao : "Técnicas de controle e desenvolvimento de operações",
		        wiki : "",
		        area : "Operações",
		        campo : "",
		        categoria : "",
		        parent : "146",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-14.438780644185783",
		        positionY : "1204.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1042",
		        name : "Linguagens de programação",
		        descricao : "Linguagens de programação",
		        wiki : "",
		        area : "Programação e Desenvolvimento",
		        campo : "",
		        categoria : "",
		        parent : "125",
		        classes : "categoria",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2123.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1046",
		        name : "Estruturação organizacional",
		        descricao : "Determinação das funções e criação de desenho estrutural da organização baseados no dimensionamento das suas necessidades de recursos humanos",
		        wiki : "https://pt.wikipedia.org/wiki/Estrutura_organizacional",
		        area : "Recursos humanos",
		        campo : "",
		        categoria : "",
		        parent : "108",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-793.9387806441855",
		        positionY : "798.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Organograma"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1043",
		        name : "Psicologia comportamental",
		        descricao : "Psicologia comportamental",
		        wiki : "",
		        area : "Psicologia do trabalho",
		        campo : "",
		        categoria : "",
		        parent : "122",
		        classes : "categoria",
		        weight : "70",
		        positionX : "1704",
		        positionY : "359",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1045",
		        name : "Recrutamento e seleção",
		        descricao : "Identificação e triagem de candidatos e condução de processos seletivos para garantir a aderência dos profissionais recrutados às necessidades técnicas e culturais da organização",
		        wiki : "https://pt.wikipedia.org/wiki/Provis%C3%A3o_de_recursos_humanos#Recrutamento_e_sele.C3.A7.C3.A3o",
		        area : "Recursos humanos",
		        campo : "",
		        categoria : "",
		        parent : "108",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-831.688780644185",
		        positionY : "982.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Headhunter"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1044",
		        name : "Atração e retenção",
		        descricao : "Desenvolvimento de pacotes de compensação e planos de carreira alinhados às expectativas dos funcionários e ao mercado, maximizando o capital humano da organização",
		        wiki : "",
		        area : "Recursos humanos",
		        campo : "",
		        categoria : "",
		        parent : "108",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-677.1887806441854",
		        positionY : "1160.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Retençãode talentos", 
		            "talentos", 
		            "gestão de talentos"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cde9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1066",
		        name : "Treinamento e desenvolvimento",
		        descricao : "Estruturação de metas e disponibilização de recursos educacionais para colaboradores de maneira a a garantir a oferta de habilidades para a evolução da organização",
		        wiki : "",
		        area : "Recursos humanos",
		        campo : "",
		        categoria : "",
		        parent : "108",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-803.9387806441853",
		        positionY : "1371.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdea",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1047",
		        name : "Regulação bancária",
		        descricao : "Regulação bancária",
		        wiki : "",
		        area : "Regulações setoriais",
		        campo : "",
		        categoria : "",
		        parent : "115",
		        classes : "categoria",
		        weight : "70",
		        positionX : "-1837",
		        positionY : "3092",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdeb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1049",
		        name : "Sistemas de negociação",
		        descricao : "Sistemas de negociação",
		        wiki : "",
		        area : "Sistemas e plataformas",
		        campo : "",
		        categoria : "",
		        parent : "126",
		        classes : "categoria",
		        weight : "70",
		        positionX : "2700.3566257884113",
		        positionY : "2493.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdec",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1048",
		        name : "Bases de dados",
		        descricao : "Bases de dados",
		        wiki : "",
		        area : "Sistemas e plataformas",
		        campo : "",
		        categoria : "",
		        parent : "126",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3051.3566257884113",
		        positionY : "2473.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cded",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "1059",
		        name : "Software econométrico",
		        descricao : "",
		        wiki : "",
		        area : "Sistemas e plataformas",
		        campo : "",
		        categoria : "",
		        parent : "126",
		        classes : "categoria",
		        weight : "70",
		        positionX : "3362.3566257884113",
		        positionY : "2465.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdee",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10000",
		        name : "Formatação de trabalhos científicos",
		        descricao : "Utilização das regras da ABNT para formatação de trabalhos acadêmicos",
		        wiki : "",
		        area : "Acadêmica",
		        campo : "Trabalhos acadêmicos",
		        categoria : "Monografias",
		        parent : "1000",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1051",
		        positionY : "358",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc75c66652ca33e4cdef",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10168",
		        name : "Criação de cursos em PBL",
		        descricao : "Utilização da metodologia de ensino baseada em solução de problemas e em projetos (Problem based Learning)",
		        wiki : "https://pt.wikipedia.org/wiki/Projeto_de_aprendizagem",
		        area : "Acadêmica",
		        campo : "Métodos de ensino",
		        categoria : "",
		        parent : "127",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "773",
		        positionY : "332",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Projectbased learning"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10169",
		        name : "Projetos de pesquisa",
		        descricao : "Criação de projetos de pesquisa acadêmica",
		        wiki : "",
		        area : "Acadêmica",
		        campo : "Pesquisa",
		        categoria : "",
		        parent : "128",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "755.7325440996017",
		        positionY : "423.9301763984065",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10022",
		        name : "Negociação",
		        descricao : "Utilização de técnicas e conceitos de negociação para maximização de resultados",
		        wiki : "https://pt.wikipedia.org/wiki/Negocia%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Negociações",
		        parent : "1014",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1404.561219355816",
		        positionY : "1379.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10170",
		        name : "Defesa de teses",
		        descricao : "Aprovação de trabalhos teóricos em banca de examinação",
		        wiki : "",
		        area : "Acadêmica",
		        campo : "Academia",
		        categoria : "Monografias",
		        parent : "1000",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1051",
		        positionY : "408",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10199",
		        name : "Participação de leilões",
		        descricao : "Participação dos diversos tipo de leilão e realização de lances para aquisição de produtos e serviços de acordo com as regras estipuladas",
		        wiki : "https://pt.wikipedia.org/wiki/Leil%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Negociações",
		        parent : "1014",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1404.561219355816",
		        positionY : "1429.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10353",
		        name : "Realização de Road Show",
		        descricao : "Condução de sequência de reuniões e encontros com potenciais investidores para a apresentação de uma oportunidade de investimento e coleta de ofertas indicativas ou firmes.",
		        wiki : "https://en.wikipedia.org/wiki/Financial_roadshows",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Transações comerciais",
		        parent : "1065",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1758.561219355816",
		        positionY : "1279.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Roadshow", 
		            "IPO", 
		            "Structured finance", 
		            "follow-on", 
		            "emissão secundária", 
		            "emissão primária", 
		            "abertura de capital"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10319",
		        name : "Cotação e orçamento",
		        descricao : "Informação de preço de combinações de produtos e serviços para clientes individuais",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Transações comerciais",
		        parent : "1065",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1400.561219355816",
		        positionY : "1275.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10320",
		        name : "Criação de propostas",
		        descricao : "Redação de propostas comerciais, contendo seus termos e condições",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Transações comerciais",
		        parent : "1065",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1568.561219355816",
		        positionY : "1278.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10024",
		        name : "Prospecção de mercado",
		        descricao : "Pesquisa e contato com novos clientes, fornacedores e parceiros",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Relacionamento com clientes",
		        parent : "1015",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1699.561219355816",
		        positionY : "1380.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10023",
		        name : "Gestão de relacionamento com clientes",
		        descricao : "Manutenção de relacionamento com clientes com objetivo de maximizar vendas e capacidade de atendimento",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Relacionamento com clientes",
		        parent : "1015",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1699.561219355816",
		        positionY : "1430.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdf9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10321",
		        name : "Atendimento a clientes",
		        descricao : "Interação com clientes para entendimento de suas demandas e melhor forma de atendê-las com produtos e serviços ofertados",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Comercial",
		        categoria : "Relacionamento com clientes",
		        parent : "1015",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1699.561219355816",
		        positionY : "1480.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdfa",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10026",
		        name : "Design thinking",
		        descricao : "Criação de soluções baseada na interação com usuários e foco em design e inovação",
		        wiki : "https://pt.wikipedia.org/wiki/Design_thinking",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Inovação",
		        parent : "1027",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "190.56121935581422",
		        positionY : "789.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdfb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10028",
		        name : "Inovação em produtos e serviços",
		        descricao : "Identificação de lacunas de mercados ou criação de novas soluções para problemas e transformação de oportunidades em produtos ou serviços",
		        wiki : "https://pt.wikipedia.org/wiki/Inova%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Inovação",
		        parent : "1027",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-8.438780644185783",
		        positionY : "787.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdfc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10025",
		        name : "Abertura de empresas",
		        descricao : "Condução do processo burocrático de abertura de uma nova pessoa jurídica",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-44.43878064418567",
		        positionY : "890.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdfd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10029",
		        name : "Empreendimento com metodologia Lean Start-up",
		        descricao : "Criação de novos negócios com foco na criação eficiente de produtos com base na identificação de demandas",
		        wiki : "https://pt.wikipedia.org/wiki/Lean_startup",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "249.56121935581422",
		        positionY : "890.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Lean"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdfe",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10030",
		        name : "Criação de modelos de negócios",
		        descricao : "Desenvolvimento de modelos de negócios baseados em novos produtos, clientes e mercados",
		        wiki : "https://pt.wikipedia.org/wiki/Modelo_de_neg%C3%B3cio",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-45.43878064418567",
		        positionY : "947.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Businessmodel"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4cdff",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10031",
		        name : "Financiamento de novos negócios",
		        descricao : "Estruturação de operações e captação de recursos para viabilizar empresas em fase inicial de operação",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "254.56121935581422",
		        positionY : "1014.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce00",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10322",
		        name : "Criação de plano de negócios",
		        descricao : "Criação de um plano de negócios contendo os objetivos, análise de mercado e as características da empresa e produto a serem criados",
		        wiki : "https://pt.wikipedia.org/wiki/Plano_de_neg%C3%B3cios",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "249.56121935581422",
		        positionY : "949.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "BP", 
		            "business plan"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce01",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10367",
		        name : "Empreendedorismo social",
		        descricao : "Criação de empresa com modelo de negócios focado na criação de benefícios sociais e não diretamente ligado à obtenção de lucro",
		        wiki : "https://pt.wikipedia.org/wiki/Empreendedorismo_social",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "539.5612193558144",
		        positionY : "950.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "CSR", 
		            "Empresa social", 
		            "setor dois e meio", 
		            "setor 2.5", 
		            "Inclusão"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce02",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10407",
		        name : "Aceleração de empreendimentos",
		        descricao : "Apoio a projetos e empresas para que estes possam atingir a fase de produção e comercialização de maneira mais rápida",
		        wiki : "https://pt.wikipedia.org/wiki/Aceleradora",
		        area : "Administração de empresas",
		        campo : "Empreendedorismo",
		        categoria : "Novos negócios",
		        parent : "1028",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "548.5612193558144",
		        positionY : "1017.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Incubadora", 
		            "angel", 
		            "investidor anjo"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce03",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10200",
		        name : "Análise das forças de mercado",
		        descricao : "Análise da distribuição de forças em um determinado mercado e mitigação dos riscos que essa distribuição apresenta",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2078.4387806441837",
		        positionY : "2183.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce04",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10072",
		        name : "Análise de cadeia de valor",
		        descricao : "Análise da cadeia de fornecedores e de processos produtivos para identificação de vantagens e desvantagens competitivas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2078.4387806441837",
		        positionY : "2242.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce05",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10032",
		        name : "Análise da concorrência",
		        descricao : "Criação de relatórios de estratégias de concorrentes, determinar seus pontos fortes e fracos e posicionar empresas no mercado",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1856.4387806441841",
		        positionY : "2241.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce06",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10033",
		        name : "Análise de end game",
		        descricao : "Identificação de potenciais reações competitivas de uma decisão estratégica e adaptação a essas reações",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2080.4387806441837",
		        positionY : "2366.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc76c66652ca33e4ce07",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10034",
		        name : "Análise do ciclo de vida do produto",
		        descricao : "Identificação do ponto de vida de determinado produto e de ações específicas para maximizar seu retorno",
		        wiki : "https://pt.wikipedia.org/wiki/Ciclo_de_vida_do_produto",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2081.4387806441837",
		        positionY : "2305.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce08",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10035",
		        name : "Análise estrutural",
		        descricao : "Construir o entendimento sobre uma indústria, sua cadeia de valor, tendências e distribuição de poderes",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1853.4387806441841",
		        positionY : "2183.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce09",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10364",
		        name : "Análise de jogos",
		        descricao : "Análise do comportamento de participantes de situações baseada na teoria dos jogos",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_dos_jogos",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1856.4387806441841",
		        positionY : "2362.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Johnnash", 
		            "dilema do prisoneiro"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10037",
		        name : "Planejamento estratégico",
		        descricao : "Desenvolvimento de objetivos de médio e longo prazo e identificação de ações necessárias a seu atingimento",
		        wiki : "https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1628.4387806441841",
		        positionY : "2298.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10417",
		        name : "Análise SWOT",
		        descricao : "Realização de análise sobre as forças, fraquezas, oportunidades e ameaças ligadas ao negócio da empresa",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_SWOT",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Formulação estratégica",
		        parent : "1029",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1855.4387806441841",
		        positionY : "2306.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "FOFA"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10036",
		        name : "Construção de estratégias competitivas",
		        descricao : "Definir estratégia geral ou especifica com base em dados de mercado e análises mercadológicas e estratégicas",
		        wiki : "https://pt.wikipedia.org/wiki/Estrat%C3%A9gia",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Decisão estratégica",
		        parent : "1030",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1892.4387806441841",
		        positionY : "2502.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10366",
		        name : "Criação de estratégia global",
		        descricao : "Desenho da estratégia da empresa levando em consideração os diversos países onde atua e buscando maximizar seu retorno em cada mercado, aproveitando oportunidades e mitigando riscos de cada região",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Decisão estratégica",
		        parent : "1030",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1891.4387806441841",
		        positionY : "2559.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Globalização", 
		            ""
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10420",
		        name : "Criação de plano de ação",
		        descricao : "Listagem das ações necessárias ao atingimento dos objetivos estratégicos e determinação da ordem em que serão realizadas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Decisão estratégica",
		        parent : "1030",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1635.4387806441841",
		        positionY : "2503.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce0f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10419",
		        name : "Direção estratégica",
		        descricao : "Definição do norte estratégico da empresa com missão, visão e valores",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Estratégia",
		        categoria : "Decisão estratégica",
		        parent : "1030",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2126.4387806441837",
		        positionY : "2501.7162086919234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Missão", 
		            "visão"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce10",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10098",
		        name : "Cálculos de LCR e NSFR - BIS III",
		        descricao : "Cálculo dos índices de NSFR (Net Stable Funding Ratio) e LCR ( Liquidity Coverage Ratio)",
		        wiki : "https://pt.wikipedia.org/wiki/Basileia_III",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2065.5612193558154",
		        positionY : "1781.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce11",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10099",
		        name : "Divulgação de informações bancárias",
		        descricao : "Criação e divulgação de informações determinadas pelas normas de divulgação de informação e transparência para investidores de mercado (CVM/ Bolsas de valor)",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1747.561219355816",
		        positionY : "1843.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce12",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10100",
		        name : "Cálculo de requerimento de capital de BIS III",
		        descricao : "Determinação do índice de basiléia de um banco, a partir do cálculo do requerimento de capital por ativo ponderado por risco",
		        wiki : "https://pt.wikipedia.org/wiki/Basileia_III",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2066.5612193558154",
		        positionY : "1841.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce13",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10190",
		        name : "Análise de crédito PJ",
		        descricao : "Avaliação do risco de não pagamento de dívidas por empresas",
		        wiki : "https://pt.wikipedia.org/wiki/Cr%C3%A9dito",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1512.561219355816",
		        positionY : "1841.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce14",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10191",
		        name : "Análise de crédito PF",
		        descricao : "Avaliação do risco de não pagamento de dívidas por indivíduos",
		        wiki : "https://pt.wikipedia.org/wiki/Cr%C3%A9dito",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1511.561219355816",
		        positionY : "1779.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce15",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10192",
		        name : "Análise de riscos",
		        descricao : "Análise dos diversos riscos aos quais um banco está exposto e criação de estratégias de mitigação",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1510.561219355816",
		        positionY : "1965.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce16",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10193",
		        name : "Análise de liquidez",
		        descricao : "Análise das projeções de necessidades e disponibilidade de caixa no curto e médio prazo",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1510.561219355816",
		        positionY : "2031.3072176905716",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce17",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10312",
		        name : "Gestão de garantias",
		        descricao : "Avaliação e acompanhamento do valor de garantias prestadas em relação a uma dívida e tomada de ação em caso de desenquadramento",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1746.561219355816",
		        positionY : "1900.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce18",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10348",
		        name : "Definição de política de crédito",
		        descricao : "Definição de variáveis a serem analisadas e valores a serem observados para a aprovação de operações de crédito",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1749.561219355816",
		        positionY : "1781.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Crédito"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce19",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10349",
		        name : "Análise de garantias",
		        descricao : "Análise de ativos oferecidos em garantias de operações de crédito, seu valor e instrumento jurídico utilizado para a dação",
		        wiki : "https://pt.wikipedia.org/wiki/Garantia",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças bancárias",
		        parent : "1017",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1511.561219355816",
		        positionY : "1900.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Garantias", 
		            "alienação fiduciária"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10049",
		        name : "Criação de relatórios gerenciais",
		        descricao : "Criação de relatórios e demonstrativos gerenciais, de acordo com normas corporativas internas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-682.4387806441856",
		        positionY : "1834.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10050",
		        name : "Consolidação de demonstrativos",
		        descricao : "Consolidação gerencial de demonstrativos financeiros de diversas unidades de negócio",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-949.4387806441853",
		        positionY : "1834.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10051",
		        name : "Relatórios para investidores",
		        descricao : "Produção de informações conforme regulação visando o atendimento a investidores",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-413.4387806441857",
		        positionY : "1833.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10198",
		        name : "Planejamento financeiro",
		        descricao : "Criação de orçamentos de receitas e despesas e cálculo de necessidades de financiamento",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-681.4387806441856",
		        positionY : "1906.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10306",
		        name : "Gestão de contas a pagar/ receber",
		        descricao : "Acompanhamento de fluxos financeiros previstos e realizados, e tomada de ação para garantir a correta entrada e saída de recursos",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-944.4387806441852",
		        positionY : "1975.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce1f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10339",
		        name : "Criação de controles internos",
		        descricao : "Desenvolvimento de normas e processos para garantir a confiabilidade das informações financeiras geradas",
		        wiki : "https://pt.wikipedia.org/wiki/Controle_interno",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Controladoria",
		        parent : "1033",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-944.4387806441852",
		        positionY : "1907.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Auditoriainterna"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce20",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10038",
		        name : "Reestruturação de passivos",
		        descricao : "Renegociação de dívidas para readequação dos fluxos de pagamentos à geração de caixa da empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "50.56121935581422",
		        positionY : "2081.30721769057",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc77c66652ca33e4ce21",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10040",
		        name : "Captação a mercado via ações",
		        descricao : "Estruturação de operações de captação de recursos por meio de venda de ações",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado_de_capitais",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "49.56121935581422",
		        positionY : "2444.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce22",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10041",
		        name : "Captação a mercado com dívida",
		        descricao : "Estruturação de operações de captação de recursos por meio de instrumentos de dívida",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado_de_capitais",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "50.56121935581422",
		        positionY : "2507.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce23",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10042",
		        name : "Análise de demonstrativos financeiros",
		        descricao : "Análise vertical/ horizontal de balanços, DREs e fluxos de caixa",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-951.4387806441853",
		        positionY : "2294.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce24",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10043",
		        name : "Análise de índices financeiros",
		        descricao : "Criação de índices a partir de informações financeiras e interpretação de seus resultados",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-694.4387806441856",
		        positionY : "2295.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce25",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10044",
		        name : "Avaliação de opções reais",
		        descricao : "Cálculo do valor de opções reais e utilização na análise de investimentos",
		        wiki : "https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_op%C3%A7%C3%B5es_reais",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "48.56121935581422",
		        positionY : "2281.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce26",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10045",
		        name : "Avaliação de empresas",
		        descricao : "Cálculo e análise do valor de uma empresa/ ativos/ projetos via múltiplos ou descontos de fluxo de caixa",
		        wiki : "https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-219.43878064418573",
		        positionY : "2367.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce27",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10046",
		        name : "Otimização da estrutura de capital",
		        descricao : "Maximização do valor de uma empresa a partir da melhor composição de sua estrutura de financiamento",
		        wiki : "https://pt.wikipedia.org/wiki/Custo_do_capital",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "382.5612193558142",
		        positionY : "2277.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce28",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10047",
		        name : "Estruturação de fusões e aquisições",
		        descricao : "Definição de estratégia e estruturação de operações de compra ou venda de negócios ou ativos",
		        wiki : "https://pt.wikipedia.org/wiki/Fus%C3%A3o_%28direito%29",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "50.56121935581422",
		        positionY : "2363.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce29",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10052",
		        name : "Cálculo do custo de capital",
		        descricao : "Determinação do custo de capital médio ponderado de uma empresa incluindo as componentes de capital próprio - CAPM - e de terceiros",
		        wiki : "https://pt.wikipedia.org/wiki/Custo_do_capital",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-691.4387806441856",
		        positionY : "2508.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10048",
		        name : "Gestão de caixa",
		        descricao : "Garantir a disponibilidade de caixa, via a projeção de sua geração e de necessidades de financiamento",
		        wiki : "https://pt.wikipedia.org/wiki/Cash_management",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-695.4387806441856",
		        positionY : "2215.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10185",
		        name : "Medição de alavancagem",
		        descricao : "Cálculo e análise das diversas medidas de alavancagem de uma empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Alavancagem_financeira",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-691.4387806441856",
		        positionY : "2361.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10186",
		        name : "Criação de estratégias de saída",
		        descricao : "Avaliação e seleção de modalidades de realização de investimentos em empresas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "388.5612193558142",
		        positionY : "2357.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10187",
		        name : "Avaliação por desconto",
		        descricao : "Determinação do valor presente de ativos a partir da sua capacidade de geração de resultados futuros",
		        wiki : "https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-446.4387806441857",
		        positionY : "2429.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "DCF", 
		            "DDM", 
		            "NOPLAT", 
		            "EBITDA"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10188",
		        name : "Avaliação por múltiplos",
		        descricao : "Determinação do valor presente de ativos a partir da comparação de índices com empresas e transações semelhantes",
		        wiki : "https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-447.4387806441857",
		        positionY : "2296.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "P/E", 
		            "Market to book", 
		            "price to earnings"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce2f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10189",
		        name : "Securitização",
		        descricao : "Estruturação de transações e veículos de securitização de ativos",
		        wiki : "https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "48.56121935581422",
		        positionY : "2148.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "FIDC", 
		            "CDO", 
		            "CRI", 
		            "CRA"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce30",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10307",
		        name : "Avaliação de projetos",
		        descricao : "Determinação do valor presente de um projeto e sua sensibilidade a variáveis ligadas a esse projeto",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-222.43878064418573",
		        positionY : "2297.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "NPV"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce31",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10350",
		        name : "Criação de covenants financeiros",
		        descricao : "Criação de cláusulas e restrições contratuais em instrumentos financeiros estruturados para garantir o comportamento corporativo alinhado aos interesses dos investidores",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "48.56121935581422",
		        positionY : "2574.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Covenants", 
		            "finanças estruturadas"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce32",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10351",
		        name : "Avaliação da geração de valor",
		        descricao : "Cálculo de métricas de geração de valor e interpretação de seus resultados",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-446.4387806441857",
		        positionY : "2511.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "EVA", 
		            "GVA", 
		            "MVA"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce33",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10352",
		        name : "Projeção financeira",
		        descricao : "Criação de projeções de demonstrativos financeiros operacionais de uma empresa a partir de resultados passados e assumindo premissas de evolução dos números",
		        wiki : "https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_financeira",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-691.4387806441856",
		        positionY : "2431.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Forecasting", 
		            "avaliação financeira"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce34",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10346",
		        name : "Financiamento de projetos",
		        descricao : "Criação de estruturas de financiamento de projetos conforme sua necessidade e projeção de geração de caixa",
		        wiki : "https://en.wikipedia.org/wiki/Project_finance",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças corporativas",
		        parent : "1032",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "45.56121935581422",
		        positionY : "2219.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Projectfinance"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce35",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10039",
		        name : "Análise dos mercados financeiros",
		        descricao : "Análise básica do funcionamento de mercados financeiros com a visão de Risco e Retorno, Eficiência de mercado e Portfólio eficiente",
		        wiki : "https://pt.wikipedia.org/wiki/Finan%C3%A7as",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "708.5612193558142",
		        positionY : "2287.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Riscoe retorno", 
		            "eficiência de mercado"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce36",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10053",
		        name : "Análise quantitativa",
		        descricao : "Determinação do preço de um ativo financeiro com base em análises estatisticas de componentes que o influenciam",
		        wiki : "https://en.wikipedia.org/wiki/Quantitative_analyst",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1233.561219355816",
		        positionY : "2283.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc78c66652ca33e4ce37",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10054",
		        name : "Análise fundamentalista",
		        descricao : "Determinação do preço de uma ação a partir de fluxos de caixa projetados com informações financeiras e de mercado",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_fundamentalista",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "993.5612193558148",
		        positionY : "2289.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Research"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce38",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10055",
		        name : "Análise técnica",
		        descricao : "Determinação do preço de um ativo financeiro a partir do preço do ativo e seu comportamento histórico",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_t%C3%A9cnica",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "994.5612193558148",
		        positionY : "2217.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Análisegráfica"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce39",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10057",
		        name : "Gestão de portfólio",
		        descricao : "Combinação dos diversos ativos financeiros disponíveis para a construção e manutenção de portfólio alinhado aos objetivos do investidor",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_moderna_do_portf%C3%B3lio",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1672.561219355816",
		        positionY : "2207.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10064",
		        name : "Análise de títulos de renda fixa",
		        descricao : "Avaliação dos componentes e cálculo do valor justo de títulos de dívida pública ou corporativa",
		        wiki : "https://pt.wikipedia.org/wiki/Renda_fixa",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "989.5612193558148",
		        positionY : "2357.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10063",
		        name : "Análise da curva a termo",
		        descricao : "Cálculo da taxa de juros justa para diferentes prazos e vencimentos, utilizando FRAs e projeções de mercados",
		        wiki : "https://pt.wikipedia.org/wiki/Curva_a_termo",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "702.5612193558142",
		        positionY : "2363.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10173",
		        name : "Análise de perfil de investidor",
		        descricao : "Determinação de perfil de investidores a partir de seus objetivos e restrições, utilizando conceitos de gestão de portfólio",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "707.5612193558142",
		        positionY : "2425.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10174",
		        name : "Investimentos em ativos imobiliários",
		        descricao : "Análise de imóveis como investimentos",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1676.561219355816",
		        positionY : "2422.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10176",
		        name : "Investimentos alternativos",
		        descricao : "Análise de investimento em ativos não tradicionais e de alto risco",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1675.561219355816",
		        positionY : "2346.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Hedgefunds"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce3f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10345",
		        name : "Investimento em empresas de capital fechado",
		        descricao : "Avaliação e investimento em empresas sem ações negociadas em bolsas de valores",
		        wiki : "https://pt.wikipedia.org/wiki/Private_equity",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1675.561219355816",
		        positionY : "2274.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "PrivateEquity", 
		            "venture capital"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce40",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10177",
		        name : "Investimento em ativos securitizados",
		        descricao : "Avaliação e investimento em ativos financeiros decorrentes de processos de securitização",
		        wiki : "https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1677.561219355816",
		        positionY : "2493.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "FIDC", 
		            "CRI", 
		            "CRA"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce41",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10182",
		        name : "Investimentos em seguros",
		        descricao : "Avaliação de investimentos em títulos lastreados em contratos de seguros e resseguros",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1676.561219355816",
		        positionY : "2566.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce42",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10178",
		        name : "Criação de tese de investimento",
		        descricao : "Criação de estratégias de geração de valor com investimentos em ativos financeiros ou empresas de capital fechado",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "710.5612193558142",
		        positionY : "2486.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce43",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10179",
		        name : "Gestão de fortunas",
		        descricao : "Criação de portfólio personalizado com diversificação de objetivos e orientação de longo prazo",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2184.5612193558163",
		        positionY : "2264.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce44",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10180",
		        name : "Planejamento sucessório",
		        descricao : "Estruturação de veículos de investimento voltados à eficiência tributária na transmissão de bens entre gerações familiares",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2188.5612193558163",
		        positionY : "2327.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce45",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10181",
		        name : "Gestão institucional",
		        descricao : "Criação de portfólio institucional, seguindo regras atuariais de retorno requerido e limitação de riscos",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2182.5612193558163",
		        positionY : "2200.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce46",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10183",
		        name : "Gestão de riscos",
		        descricao : "Determinação das exposições a serem tomadas e ajuste de portfólio para balanceamento destas exposições",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1404.561219355816",
		        positionY : "2204.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce47",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10184",
		        name : "Avaliação de performance",
		        descricao : "Utilização de benchmarks e objetivos para avaliação do desempenho do portfolio",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1963.561219355816",
		        positionY : "2202.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce48",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10340",
		        name : "Classificação de risco",
		        descricao : "Classificação de capacidade de pagamento das dívidas de determinada empresa ou instituição",
		        wiki : "https://pt.wikipedia.org/wiki/Classifica%C3%A7%C3%A3o_de_cr%C3%A9dito",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1407.561219355816",
		        positionY : "2420.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Rating", 
		            "nota de crédito"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce49",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10341",
		        name : "Teste de estresse",
		        descricao : "Realização de simulação financeira com cenários extremamente negativos para identificação de riscos sistêmicos e limites operacionais de empresas",
		        wiki : "https://en.wikipedia.org/wiki/Stress_test_(financial)",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1226.561219355816",
		        positionY : "2418.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Stresstesting", 
		            "crise financeira", 
		            "basiléia"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10342",
		        name : "Avaliação de riscos",
		        descricao : "Avaliação da sensibilidade do preço de títulos de renda fixa e seus derivados a eventos como pré pagamento, inadimplência e oscilações de mercado",
		        wiki : "https://pt.wikipedia.org/wiki/Gerenciamento_de_risco",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "988.5612193558148",
		        positionY : "2422.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Prépagamento", 
		            "crédito", 
		            "mercado"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10343",
		        name : "Estruturação de fundos de investimentos",
		        descricao : "Implantação de um fundo de investimentos, a partir de sua documentação, definição de responsabilidades e desenvolvimento de processos operacionais com os participantes definidos",
		        wiki : "https://pt.wikipedia.org/wiki/Fundo_de_investimento",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Investimentos",
		        parent : "1034",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "985.5612193558148",
		        positionY : "2487.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Fundode investimentos", 
		            "FIDC", 
		            "Hedge fund", 
		            "FII", 
		            "FIA", 
		            "FIP."
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10065",
		        name : "Precificação de derivativos",
		        descricao : "Cálculo do valor de derivativos como opções de compra e venda e futuros",
		        wiki : "https://pt.wikipedia.org/wiki/Derivativo",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "906.5612193558148",
		        positionY : "1923.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10347",
		        name : "Conciliação de posições",
		        descricao : "Verificação do saldo de contas e posições financeiras após um período de movimentacões, comparando saldos finais com as somas dos valores movimentados",
		        wiki : "https://pt.wikipedia.org/wiki/Concilia%C3%A7%C3%A3o_banc%C3%A1ria",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "420.5612193558142",
		        positionY : "1936.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10066",
		        name : "Criação de estratégias de hedge",
		        descricao : "Montagem de estratégias de hedge com derivativos, alguéis de ações e seguros",
		        wiki : "https://pt.wikipedia.org/wiki/Cobertura_%28finan%C3%A7as%29",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1132.5612193558156",
		        positionY : "1921.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce4f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10062",
		        name : "Negociação em mercado organizado",
		        descricao : "Compra e venda de ativos financeiros em bolsa de valores ou mercado de balcão",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado_financeiro",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "424.5612193558142",
		        positionY : "1749.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce50",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10068",
		        name : "Operação de plataformas de negociação",
		        descricao : "Utilização de plataformas de negociação de ativos financeiros",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "423.5612193558142",
		        positionY : "1870.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce51",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10194",
		        name : "Avaliação de derivativos",
		        descricao : "Avaliação dos diversos tipos de derivativos (termos, futuros, opções, Swaps)",
		        wiki : "https://pt.wikipedia.org/wiki/Derivativo",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "686.5612193558142",
		        positionY : "1928.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce52",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10197",
		        name : "Avaliação de opções",
		        descricao : "Avaliação do valor de uma opção e seus componentes (letras gregas)",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado_de_op%C3%A7%C3%B5es",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "683.5612193558142",
		        positionY : "1866.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc79c66652ca33e4ce53",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10195",
		        name : "Cálculo de spreads e prêmios",
		        descricao : "Cálculo de ágios cobrados em transações de ativos e inclusão da informação na tomada de decisão de investimentos",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "141.56121935581422",
		        positionY : "1810.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce54",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10196",
		        name : "Arbitragem financeira",
		        descricao : "Compra e venda de ativos com preço divergente de seu valor justo com a expectativa de ajuste para esse valor",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "426.56121935581416",
		        positionY : "1807.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce55",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10308",
		        name : "Estruturação de produtos",
		        descricao : "Combinação de ativos financeiros e derivativos com base em uma estratégia de resultado",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "902.5612193558148",
		        positionY : "1809.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce56",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10311",
		        name : "Estratégias de negociação",
		        descricao : "Utilização de técnicas de negociação baseadas em estruturas de mercado, custos de transação e preferências estratégica",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "681.5612193558142",
		        positionY : "1749.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce57",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10337",
		        name : "Aluguel de ações",
		        descricao : "Execução de transações de aluguel de ações e utilização em estruturas e estratégias",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "681.5612193558142",
		        positionY : "1807.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Stockrenting", 
		            "venda a descoberto"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce58",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10338",
		        name : "Emissão de ordem de negociação",
		        descricao : "Emissão de ordens de compra e venda, nas diversas modalidades de ordens praticadas em bolsas de valores",
		        wiki : "https://en.wikipedia.org/wiki/Order_(exchange)",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Trading",
		        parent : "1036",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "135.56121935581422",
		        positionY : "1749.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Stoploss", 
		            "stop", 
		            "realização"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce59",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10421",
		        name : "Investimento em previdência privada",
		        descricao : "Investimento em planos de previdência complementar para garantir fluxo de renda futuro",
		        wiki : "https://pt.wikipedia.org/wiki/Previd%C3%AAncia_privada",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças pessoais",
		        parent : "1035",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-756.8268403456781",
		        positionY : "1721.4415460487794",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "aposentadoria"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10422",
		        name : "Orçamento doméstico",
		        descricao : "Construção de plano financeiro para tomada de decisão de consumo doméstico",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Finanças",
		        categoria : "Finanças pessoais",
		        parent : "1035",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-987.8268403456766",
		        positionY : "1721.4415460487794",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10423",
		        name : "Análise do comportamento de clientes",
		        descricao : "Avaliação do processo de tomada de decisão de compra dos clientes para criação de ofertas adaptadas a este comportamento",
		        wiki : "https://pt.wikipedia.org/wiki/Comportamento_do_consumidor",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Análise mercadológica",
		        parent : "1039",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2079.4387806441837",
		        positionY : "1464.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "comportamentodo consumidor"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10002",
		        name : "Análise de valor agregado de projetos",
		        descricao : "Dimensionamento dos benefícios e resultados esperados de projetos",
		        wiki : "https://pt.wikipedia.org/wiki/Gerência_de_projetos",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2078.4387806441837",
		        positionY : "1028.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10003",
		        name : "Desenvolvimento de cronogramas",
		        descricao : "Criação de planos de metas e definição do tempo necessário ao cumprimento das atividades ligadas a um projeto",
		        wiki : "https://pt.wikipedia.org/wiki/Gerência_de_projetos",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2076.4387806441837",
		        positionY : "1093.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10004",
		        name : "Gerênciamento de riscos de projetos",
		        descricao : "Identificação de obstáculos e riscos de projetos e definição de ações para a mitigação dos mesmos",
		        wiki : "https://pt.wikipedia.org/wiki/Gerência_de_projetos",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1647.438780644184",
		        positionY : "1095.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce5f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10005",
		        name : "Planejamento de projetos",
		        descricao : "Desenvolvimento de planos de projetos, incluindo Escopos, objetivos, cronogramas, orçamentos e avaliação do esforço necessário.",
		        wiki : "https://pt.wikipedia.org/wiki/Gerência_de_projetos",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1835.438780644184",
		        positionY : "1028.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce60",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10006",
		        name : "Gerência de projeto",
		        descricao : "Gestão de todo o processo de um projeto, incluindo custos, qualidade, recursos humanos e comunicações",
		        wiki : "https://pt.wikipedia.org/wiki/Gerência_de_projetos",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1647.438780644184",
		        positionY : "1029.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce61",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10368",
		        name : "Criação de planos de contingência",
		        descricao : "Criação de planos para mitigação de eventuais crises e situações adversas com que a empresa possa se deparar",
		        wiki : "https://pt.wikipedia.org/wiki/Plano_de_conting%C3%AAncia",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1377.438780644184",
		        positionY : "1095.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Gestãode crises"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce62",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10172",
		        name : "Gestão de mudanças",
		        descricao : "Condução de processos de mudança organizacional, levando em consideração seu tipo e o ambiente em que ocorrerá",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_mudan%C3%A7a",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Gestão de projetos",
		        parent : "1002",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1377.438780644184",
		        positionY : "1029.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce63",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10008",
		        name : "Relacionamento com órgãos reguladores",
		        descricao : "Atendimento a demandas e gestão de relacionamento com órgãos regulatórios",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Governança corporativa",
		        parent : "1004",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1873.438780644184",
		        positionY : "914.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce64",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10009",
		        name : "Gestão de comitês",
		        descricao : "Organização e condução de comitês e conselhos, criação de pautas e atas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Governança corporativa",
		        parent : "1004",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1873.438780644184",
		        positionY : "854.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce66",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10201",
		        name : "Gestão fiduciária",
		        descricao : "Gestão de empresas e criação de instrumentos para mitigação de conflitos entre acionistas e gestores",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Governança corporativa",
		        parent : "1004",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2086.4387806441837",
		        positionY : "790.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce65",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10010",
		        name : "Definição de alçadas de decisão",
		        descricao : "Estruturação e definição das alçadas de tomada de decisões corporativas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Governança corporativa",
		        parent : "1004",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2088.4387806441837",
		        positionY : "853.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce67",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10408",
		        name : "Identificação de impactos",
		        descricao : "Identificação e mensuração dos impactos causados pela operação de uma empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Impacto_ambiental",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Sustentabilidade",
		        parent : "1007",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2118.4387806441837",
		        positionY : "1196.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Impacto"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce68",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10365",
		        name : "Criação de estratégia sustentável",
		        descricao : "Desenho de estratégia de negócios baseada nos impactos causados pela atividade no ambiente, nas comunidades que atua e na economia.",
		        wiki : "https://pt.wikipedia.org/wiki/Desenvolvimento_sustent%C3%A1vel",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Sustentabilidade",
		        parent : "1007",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1896.438780644184",
		        positionY : "1196.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "CSR", 
		            "Sustentabilidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce69",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10371",
		        name : "Criação de políticas de responsabilidade",
		        descricao : "Definição das normas e valores a serem seguidos pela empresa e seus funcionários, visando a não infração de direitos humanos e a promoção do bem estar social",
		        wiki : "https://pt.wikipedia.org/wiki/Responsabilidade_social_corporativa",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Sustentabilidade",
		        parent : "1007",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1895.438780644184",
		        positionY : "1255.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "CSR", 
		            "RSC"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce6a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10013",
		        name : "Gestão da sustentabilidade",
		        descricao : "Interagir com steakholders de uma operação para minimizar seus impactos ambientais e maximizar os econômico-sociais",
		        wiki : "https://pt.wikipedia.org/wiki/Sustentabilidade",
		        area : "Administração de empresas",
		        campo : "Gestão",
		        categoria : "Sustentabilidade",
		        parent : "1007",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1661.438780644184",
		        positionY : "1196.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce6b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10083",
		        name : "Segmentação de mercado",
		        descricao : "Criação de segmentos de clientes a partir da definição de suas características",
		        wiki : "https://pt.wikipedia.org/wiki/Segmenta%C3%A7%C3%A3o_de_mercado",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Análise mercadológica",
		        parent : "1039",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1834.438780644184",
		        positionY : "1401.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce6c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10080",
		        name : "Criação de inteligência competitiva",
		        descricao : "Coleta e análise contínuas de dados sobre desempenho de produtos e concorrentes em um mercado e mapeamento das preferências dos consumidores",
		        wiki : "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_competitiva",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Análise mercadológica",
		        parent : "1039",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1588.438780644184",
		        positionY : "1404.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce6d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10073",
		        name : "Pesquisa mercadológica",
		        descricao : "Coleta e interpretação de dados sobre produtos e desejos dos consumidores",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Análise mercadológica",
		        parent : "1039",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2076.4387806441837",
		        positionY : "1401.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ac66652ca33e4ce6e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10423",
		        name : "Análise do comportamento de clientes",
		        descricao : "Avaliação do processo de tomada de decisão de compra dos clientes para criação de ofertas adaptadas a este comportamento",
		        wiki : "https://pt.wikipedia.org/wiki/Comportamento_do_consumidor",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Análise mercadológica",
		        parent : "1039",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "comportamentodo consumidor"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce6f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10362",
		        name : "Criação de material promocional",
		        descricao : "Criação de material de promoção da empresa e sua oferta, incentivandoa aquisição de produtos e serviços",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1900.438780644184",
		        positionY : "1804.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "promoção", 
		            "banner", 
		            "panfleto", 
		            "tickets", 
		            "vouchers"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce70",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10363",
		        name : "Criação de marca",
		        descricao : "Criação de uma marca alinhada aos objetivos da empresa através da definição de sua identidade visual e verbal",
		        wiki : "https://pt.wikipedia.org/wiki/Branding",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2120.4387806441837",
		        positionY : "1805.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Branding", 
		            "logo", 
		            "slogan", 
		            "identidade visual"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce71",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10085",
		        name : "Relacionamento Público",
		        descricao : "Comunicação com mercado e coordenação de ações de exposição de marca e de identidade corporativa",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1902.438780644184",
		        positionY : "1865.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce72",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10086",
		        name : "Organização de eventos",
		        descricao : "Realização de eventos com programação de atividades, emissão de convites e organização do local",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2123.4387806441837",
		        positionY : "1865.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce73",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10357",
		        name : "Criação de campanhas publicitárias",
		        descricao : "Desenvolvimento de objetivos, seleção de mídias e estruturação das ações que comporão uma campanha",
		        wiki : "https://pt.wikipedia.org/wiki/Campanha_publicit%C3%A1ria",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1630.438780644184",
		        positionY : "1804.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "propaganda", 
		            "veiculação", 
		            "mídia digital"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce74",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10076",
		        name : "Gestão de comunicação mercadológica",
		        descricao : "Controle dos canais de comunicação e mensagens a serem enviadas aos clientes, fornecedores e mercado em geral",
		        wiki : "https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Comunicação mercadológica",
		        parent : "1040",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1632.438780644184",
		        positionY : "1867.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce75",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10081",
		        name : "Desenvolvimento de novos produtos",
		        descricao : "Criação de soluções com atributos para suprir demandas identificadas no mercado",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Gestão de produto",
		        parent : "1038",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2083.4387806441837",
		        positionY : "1577.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce76",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10082",
		        name : "Precificação de produtos e serviços",
		        descricao : "Definição de preços com base em metodologias como mark-up ou disponibilidade a pagar dos consumidores por atributos",
		        wiki : "https://pt.wikipedia.org/wiki/Pre%C3%A7o",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Gestão de produto",
		        parent : "1038",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1814.438780644184",
		        positionY : "1578.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce77",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10356",
		        name : "Criação de promoções",
		        descricao : "Desenvolvimento de ações de redução de preços para alavancar as vendas de produtos e serviços",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Gestão de produto",
		        parent : "1038",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1816.438780644184",
		        positionY : "1637.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Desconto", 
		            "queima de estoque", 
		            "sales"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce78",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10361",
		        name : "Gamificação de produtos e serviços",
		        descricao : "Utilização de conceitos de jogos no desenvolvimento dos produtos e serviços da empresa, visando o aumento do engajamento e retenção de clientes",
		        wiki : "https://pt.wikipedia.org/wiki/Ludifica%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Gestão de produto",
		        parent : "1038",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2084.4387806441837",
		        positionY : "1694.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Gamification", 
		            "ludificação"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce79",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10424",
		        name : "Desesenho de produtos",
		        descricao : "Criação da identidade visual de produtos, seu aspecto e de sua embalagem",
		        wiki : "https://pt.wikipedia.org/wiki/Design",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Gestão de produto",
		        parent : "1038",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2082.4387806441837",
		        positionY : "1638.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Design"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10074",
		        name : "Atração e retenção de clientes",
		        descricao : "Criação de estratégias para expansão de mercados e manutenção da base de clientes atuais",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Decisão mercadológica",
		        parent : "1041",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1534.438780644184",
		        positionY : "1698.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10077",
		        name : "Gestão de canais",
		        descricao : "Definição e controle dos canais a serem empregados pela empresa para entregar seus produtos e serviços",
		        wiki : "https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_%28log%C3%ADstica%29",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Decisão mercadológica",
		        parent : "1041",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1305.438780644184",
		        positionY : "1579.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10078",
		        name : "Gestão de mix de produtos",
		        descricao : "Determinação do mix de ofertas da empresa, com foco de atender a todos os segmentos selecionados e maximizar o valor dos negócios",
		        wiki : "https://pt.wikipedia.org/wiki/Produto_%28marketing%29",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Decisão mercadológica",
		        parent : "1041",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1531.438780644184",
		        positionY : "1580.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10360",
		        name : "Criação de plano de marketing",
		        descricao : "Criação de plano listando e fundamentando os objetivos mercadológicos de uma empresa e as ações necessárias para atingi-los",
		        wiki : "https://pt.wikipedia.org/wiki/Plano_de_marketing",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Decisão mercadológica",
		        parent : "1041",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1534.438780644184",
		        positionY : "1639.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Estratégiade marketing"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10317",
		        name : "Gestão de campanhas",
		        descricao : "Acompanhamento do desempenho de campanhas e criação de ações corretivas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Decisão mercadológica",
		        parent : "1041",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1302.438780644184",
		        positionY : "1639.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce7f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10316",
		        name : "Criação de campanhas digitais",
		        descricao : "Criação de campanhas em plataformas digitais de marketing, como Google Ads e Facewords",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Marketing digital",
		        parent : "1061",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1575.438780644184",
		        positionY : "1971.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce80",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10354",
		        name : "Análise do uso de sites",
		        descricao : "Utilização de plataformas de análise do comportamento de usuários de websites para obtenção de informações sobre conversão e identificação de ações de melhora",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Marketing digital",
		        parent : "1061",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2082.4387806441837",
		        positionY : "1972.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Googleanalytics", 
		            "SEO"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce81",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10355",
		        name : "Otimização para sistema de busca",
		        descricao : "Utilização de estratégias para aumento da relevância de um site como resultado de uma busca baseadas nos critérios de classificação utilizados pelos sistemas de buscas",
		        wiki : "https://pt.wikipedia.org/wiki/Otimiza%C3%A7%C3%A3o_para_motores_de_busca",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Marketing digital",
		        parent : "1061",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2084.4387806441837",
		        positionY : "2031.3072176905716",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "SEO"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce82",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10358",
		        name : "Marketing de sistemas de busca",
		        descricao : "Criação de planos de marketing baseados em aumento da relevância da oferta em sistemas de busca",
		        wiki : "https://pt.wikipedia.org/wiki/Palavra-chave_(marketing_de_pesquisa)",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Marketing digital",
		        parent : "1061",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1829.438780644184",
		        positionY : "1972.3072176905712",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "SEM", 
		            "adwords"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce83",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10359",
		        name : "Marketing de redes sociais",
		        descricao : "Criação de planos de marketing baseados em ofertas direcionadas a perfis de clientes identificados em redes sociais",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Marketing",
		        categoria : "Marketing digital",
		        parent : "1061",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1828.438780644184",
		        positionY : "2031.3072176905716",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Faceads"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce84",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10398",
		        name : "Planejamento de sistemas",
		        descricao : "Planejamento do uso eficiente de recursos técnológicos garantindo o funcionamento pleno da operação da empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico_de_sistemas_de_informa%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Administração de sistemas",
		        parent : "1062",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "974.5612193558148",
		        positionY : "1198.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "sistemasde informação", 
		            "estratégia"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce85",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10399",
		        name : "Dimensionamento de infraestrutura técnológica",
		        descricao : "Determinação da quantidade e qualidade de recursos técnológicos a serem utilizados na operação da empresa",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Administração de sistemas",
		        parent : "1062",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "697.5612193558142",
		        positionY : "1198.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Banda", 
		            "Projeto de rede", 
		            "projeto de informática"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce86",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10400",
		        name : "Implantação de sistema de gestão integrado",
		        descricao : "Implantação e operação de sistema integrado de informações de gestão",
		        wiki : "https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Administração de sistemas",
		        parent : "1062",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "695.5612193558142",
		        positionY : "1251.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "ERP"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce87",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10011",
		        name : "Criação e revisão de processos",
		        descricao : "Determinar passos e atividades necessárias para o atingimento de um objetivo",
		        wiki : "https://pt.wikipedia.org/wiki/Processo",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "633.5612193558142",
		        positionY : "1364.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7bc66652ca33e4ce88",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10012",
		        name : "Determinação de níveis de eficiência",
		        descricao : "Ajustar processos e recursos para a entrega de um nível de eficiência planejado",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "893.5612193558148",
		        positionY : "1364.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce89",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10015",
		        name : "Planejamento operacional",
		        descricao : "Determinar e otimizar a quantidade de recursos necessários a uma operação, desenhar e encadear processos envolvidos",
		        wiki : "https://pt.wikipedia.org/wiki/Planejamento_operacional",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1129.5612193558156",
		        positionY : "1365.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10313",
		        name : "Mapeamento de processos",
		        descricao : "Identificação e registro do fluxo de processos envolvidos nas diversas atividades da empresa",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "635.5612193558142",
		        positionY : "1424.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10314",
		        name : "Métricas de performance",
		        descricao : "Desenvolvimento e análise de índices representativos do desempenho de uma operação ou empresa",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1131.5612193558156",
		        positionY : "1427.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "KPI", 
		            "Performance metrics", 
		            "Indicadores chave de performance", 
		            "métrica"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10315",
		        name : "Terceirização de mão de obra",
		        descricao : "Desenvolvimento de projetos de terceirização de processose de pessoal",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1134.5612193558156",
		        positionY : "1486.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10370",
		        name : "Gestão de resíduos",
		        descricao : "Determinação dos tipos de resíduos gerados pelos processos da empresa e da maneira mais economicamente sustentável de dispor deles",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_integrada_de_res%C3%ADduos_s%C3%B3lidos",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Gestão de operações",
		        parent : "1005",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "633.5612193558142",
		        positionY : "1490.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Reciclagem", 
		            "sustentabilidade", 
		            "pegada de carbono", 
		            "lixo"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10369",
		        name : "Planejamento de produção global",
		        descricao : "Criação de plano de produção e logística global, aproveitando benefícios e vantagens comparativas regionais para maximização da competitividade da empresa",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Logística",
		        parent : "1063",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "343.56121935581416",
		        positionY : "1432.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Mundial", 
		            "otimização"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce8f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10071",
		        name : "Otimização logística",
		        descricao : "Redução dos custos e aumento da eficiência na movimentação de recursos e bens",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Logística",
		        parent : "1063",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "137.56121935581422",
		        positionY : "1432.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce90",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10401",
		        name : "Gestão de estoques",
		        descricao : "Determinação de níveis de estoques a serem mantidos e tamanho dos armazéns a serem utilizados para garantir a operação da empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Estoque",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Logística",
		        parent : "1063",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-60.43878064418567",
		        positionY : "1370.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "WMS", 
		            "Warehouse management"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce91",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10402",
		        name : "Gestão de transportes",
		        descricao : "Definição de rotas e carregamentos para reduzir os custos do processo de entrega de mercadorias",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Logística",
		        parent : "1063",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-61.43878064418567",
		        positionY : "1432.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce92",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10403",
		        name : "Planejamento de recursos",
		        descricao : "Dimensionamento da necessidade de insumos para a produção",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Logística",
		        parent : "1063",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-59.43878064418567",
		        positionY : "1487.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "ERP", 
		            "Resource planning"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce93",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10404",
		        name : "Utilização de linha de montagem",
		        descricao : "Criação e implantação de processos produtivos baseados em linha de montagem",
		        wiki : "https://pt.wikipedia.org/wiki/Linha_de_produ%C3%A7%C3%A3o",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Técnicas de gestão operacional",
		        parent : "1064",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-14.438780644185783",
		        positionY : "1162.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Ford", 
		            "assembly line", 
		            "linha de produção"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce94",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10405",
		        name : "Utilização de Kanban",
		        descricao : "Criação e implantação de controle de processos produtivos utilizando Kanbans",
		        wiki : "https://pt.wikipedia.org/wiki/Kanban",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Técnicas de gestão operacional",
		        parent : "1064",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-14.438780644185783",
		        positionY : "1212.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Toyota"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce95",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10406",
		        name : "Utilização de modelo de produção JIT",
		        descricao : "Criação e implantação de processos produtivos baseados na metodologia Just in Time",
		        wiki : "https://pt.wikipedia.org/wiki/Just_in_time",
		        area : "Administração de empresas",
		        campo : "Operações",
		        categoria : "Técnicas de gestão operacional",
		        parent : "1064",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-14.438780644185783",
		        positionY : "1262.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Justin time"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce96",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10087",
		        name : "Gestão da folha de pagamentos",
		        descricao : "Cálculo e controle de pagamentos de vencimentos, e geração de demonstrativos dos valores",
		        wiki : "https://pt.wikipedia.org/wiki/Folha_de_pagamento",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Atração e retenção",
		        parent : "1044",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-961.4387806441849",
		        positionY : "1138.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Holerite"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce97",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10088",
		        name : "Criação de planos de carreiras",
		        descricao : "Desenvolvimento de planos de progressão de carreira vinculados a metas",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Atração e retenção",
		        parent : "1044",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-702.4387806441856",
		        positionY : "1199.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "planode carreira"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce98",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10095",
		        name : "Avaliação de clima interno",
		        descricao : "Pesquisa e determinação da satisfação dos funcionários com o ambiente de trabalho",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Atração e retenção",
		        parent : "1044",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-701.4387806441856",
		        positionY : "1136.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Qualidadede vida", 
		            "satisfação profissional"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce99",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10091",
		        name : "Gestão de remuneração e benefícios",
		        descricao : "Definição de pacotes de remuneração e benefícios por cargos a partir de estudos de mercado e interações com funcionários",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Atração e retenção",
		        parent : "1044",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-960.4387806441849",
		        positionY : "1199.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "salário"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10412",
		        name : "Seleção de candidatos",
		        descricao : "Divulgação de vagas, pesquisa e triagem incial de candidatos",
		        wiki : "https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Recrutamento e seleção",
		        parent : "1045",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-966.4387806441847",
		        positionY : "930.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10410",
		        name : "Criação de estratégia de atração e retenção",
		        descricao : "Criação de plano para oferta de condições mais competitivas de trabalho para maximização do capital humano",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Atração e retenção",
		        parent : "1044",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-418.4387806441857",
		        positionY : "1200.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10090",
		        name : "Realização de processos seletivos",
		        descricao : "Condução de atividades de processo de seleção de pessoas, como aplicação de provas, dinâmicas de grupo e entrevistas",
		        wiki : "https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Recrutamento e seleção",
		        parent : "1045",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-738.4387806441856",
		        positionY : "933.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10413",
		        name : "Contratação",
		        descricao : "Condução de processos burocráticos de contratação de funcionários",
		        wiki : "https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Recrutamento e seleção",
		        parent : "1045",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-740.4387806441856",
		        positionY : "994.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Contratação"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10414",
		        name : "Desligamento",
		        descricao : "Condução de processos burocráticos de desligamento de funcionários",
		        wiki : "https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Recrutamento e seleção",
		        parent : "1045",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-737.4387806441856",
		        positionY : "1050.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Demissão", 
		            "justa causa"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4ce9f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10096",
		        name : "Definição de mandatos e cargos",
		        descricao : "Especificação de mandatos de cargos e funções",
		        wiki : "https://pt.wikipedia.org/wiki/Estrutura_organizacional",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Estruturação organizacional",
		        parent : "1046",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-937.4387806441853",
		        positionY : "781.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4cea0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10097",
		        name : "Criação de organogramas",
		        descricao : "Criação de mapas de cargos e funções de uma empresa",
		        wiki : "https://pt.wikipedia.org/wiki/Estrutura_organizacional",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Estruturação organizacional",
		        parent : "1046",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-937.4387806441853",
		        positionY : "831.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4cea1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10171",
		        name : "Definição de estrutura organizacional",
		        descricao : "Definição de melhor estrutura organizacional para cada modelo e momento de negócio",
		        wiki : "https://pt.wikipedia.org/wiki/Estrutura_organizacional",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Estruturação organizacional",
		        parent : "1046",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-667.4387806441856",
		        positionY : "808.3072176905706",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4cea2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10089",
		        name : "Coaching",
		        descricao : "Acompanhamento individual de colaboradores e prestação de apoio ao seu desenvolvimento",
		        wiki : "https://pt.wikipedia.org/wiki/Coaching",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Treinamento e desenvolvimento",
		        parent : "1066",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-940.4387806441852",
		        positionY : "1319.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7cc66652ca33e4cea3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10092",
		        name : "Treinamento de recursos humanos",
		        descricao : "Identificação de necessidade e criação de programas de capacitação de funcionários",
		        wiki : "https://pt.wikipedia.org/wiki/Treinamento",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Treinamento e desenvolvimento",
		        parent : "1066",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-698.4387806441856",
		        positionY : "1319.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10094",
		        name : "Gestão de metas",
		        descricao : "Definição e acompanhamento de metas de cargos e funções",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Treinamento e desenvolvimento",
		        parent : "1066",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-941.4387806441852",
		        positionY : "1379.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10415",
		        name : "Avaliação de performance",
		        descricao : "Condução de processos de avaliação do desempenho de funcionários",
		        wiki : "",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Treinamento e desenvolvimento",
		        parent : "1066",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-940.4387806441852",
		        positionY : "1439.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10416",
		        name : "Gestão por competências",
		        descricao : "Criação de planos de desenvolvimento individual baseados na identificação de competências necessárias e a desenvolver",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_por_compet%C3%AAncias",
		        area : "Administração de empresas",
		        campo : "Recursos humanos",
		        categoria : "Treinamento e desenvolvimento",
		        parent : "1066",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-697.4387806441856",
		        positionY : "1436.3072176905707",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10101",
		        name : "Contabilização de custos",
		        descricao : "Determinação e alocação dos custos de uma empresa de acordo com normativos pré determinados",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2950.356625788411",
		        positionY : "1020.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10102",
		        name : "Contabilização de receitas",
		        descricao : "Reconhecimento e alocação das receitas de uma empresa de acordo com normas e regimes determinados",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2950.356625788411",
		        positionY : "957.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cea9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10103",
		        name : "Contabilização de resultados",
		        descricao : "Determinação do resultado de uma empresa a partir de receitas e custos",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3207.356625788411",
		        positionY : "1021.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceaa",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10104",
		        name : "Gestão Contábil",
		        descricao : "Realização de todas as rotinas contábeis como lançamento de notas fiscais, geração de demonstrativos e controle de contas a pagar/ receber",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2684.356625788411",
		        positionY : "880.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceab",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10105",
		        name : "Contabilização fiscal brasileira",
		        descricao : "Determinação de impostos a serem pagos e créditos tributários gerados por uma empresa, partindo das bases de cálculo e alíquotas estipuladas na lei brasileira",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3210.356625788411",
		        positionY : "955.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceac",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10106",
		        name : "Contabilização básica",
		        descricao : "Utilização de conceitos contábeis básicos: ativo, passivo, contas T, demonstrativos contábeis",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2684.356625788411",
		        positionY : "956.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cead",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10107",
		        name : "Montagem de demonstrativos financeiros",
		        descricao : "Fechamento de demonstrativos financeiros de uma empresa: Balanço, DRE, Fluxo de caixa",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2685.356625788411",
		        positionY : "1022.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceae",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10219",
		        name : "Contabilidade em IFRS",
		        descricao : "Realização de lançamentos contábeis de acordo com as normas internacionais de contabilidade estipuladas pelo IASB",
		        wiki : "https://pt.wikipedia.org/wiki/International_Financial_Reporting_Standards",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3196.356625788411",
		        positionY : "1254.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceaf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10220",
		        name : "Contabilidade em US GAAP",
		        descricao : "Realização de lançamentos contábeis de acordo com as normas de contabilidade geralmente aceitas nos EUA",
		        wiki : "https://en.wikipedia.org/wiki/Generally_Accepted_Accounting_Principles_(United_States)",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2967.356625788411",
		        positionY : "1251.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10221",
		        name : "Contabilidade em BR GAAP",
		        descricao : "Realização de lançamentos contábeis de acordo com as normas geralmente aceitas no Brasil",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3085.356625788411",
		        positionY : "1175.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10222",
		        name : "Contabilização de itens extraordinários",
		        descricao : "Contabilização e tratamento correto de lançamentos de intangíveis, provisões e demais itens não recorrentes da operação de uma empresa",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2945.356625788411",
		        positionY : "1087.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10224",
		        name : "Contabilização de estoques",
		        descricao : "Contabilização de ativos operacionais e sua transformação de acordo com métodos existentes (PEPS/UEPS)",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2685.356625788411",
		        positionY : "1270.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10223",
		        name : "Contabilização de ativos",
		        descricao : "Contabilização de itens de ativo, circulante ou permanente, de acordo com as normas internas e regulações vigentes",
		        wiki : "https://pt.wikipedia.org/wiki/Ativo",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2682.356625788411",
		        positionY : "1090.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10225",
		        name : "Contabilização de depreciação",
		        descricao : "Tratamento do valor contábil de ativos de acordo com sua utilização e com as regulações existentes",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2681.356625788411",
		        positionY : "1151.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10226",
		        name : "Contabilização de investimentos",
		        descricao : "Contabilização e consolidação de ativos permanentes de acordo com seu valor e estrutura de investimento",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2682.356625788411",
		        positionY : "1210.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10108",
		        name : "Contabilização bancária",
		        descricao : "Contabilização de empresas do setor bancário, contemplando as regras específicas por produto e empresa",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade financeira",
		        parent : "1019",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3515.356625788411",
		        positionY : "1117.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10227",
		        name : "Contabilização de fluxo de caixa",
		        descricao : "Contabilização de itens de fluxo de caixa e correta determinação de seu valor, utilizando os métodos direto ou indireto",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade empresarial",
		        parent : "1018",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3206.356625788411",
		        positionY : "1087.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10109",
		        name : "Contabilização de seguros",
		        descricao : "Cálculo e registro de operações de seguros, suas provisões e resultados",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade financeira",
		        parent : "1019",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3515.356625788411",
		        positionY : "1167.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceb9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10110",
		        name : "Contabilização de operações de leasing",
		        descricao : "Cálculo e registro de operações de leasing, seus resultados e tributação",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade financeira",
		        parent : "1019",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3515.356625788411",
		        positionY : "1217.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4ceba",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10323",
		        name : "Conciliação contábil",
		        descricao : "Criação de provisões e ajustes para lançamentos com efetivação em data diferente de sua execução",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade financeira",
		        parent : "1019",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3515.356625788411",
		        positionY : "1267.8112473719639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cebb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10111",
		        name : "Contabilização de IRPF",
		        descricao : "Determinação do Imposto de Renda de Pessoa Física a ser pago ou restituído",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade pessoal",
		        parent : "1020",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2965.356625788411",
		        positionY : "785.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cebc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10228",
		        name : "Contabilização previdenciária",
		        descricao : "Contabilização do valor e benefício tributário do investimento nas diversas modalidades de planos de previdência",
		        wiki : "",
		        area : "Ciências contábeis",
		        campo : "Contabilidade",
		        categoria : "Contabilidade pessoal",
		        parent : "1020",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3170.356625788411",
		        positionY : "785.8112473719636",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7dc66652ca33e4cebd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10229",
		        name : "Análise de casos",
		        descricao : "Leitura de casos e análise de suas seções, fontes de informação e direcionamentos das conclusões",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2478",
		        positionY : "2800",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cebe",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10230",
		        name : "Interpretação de textos jurídicos",
		        descricao : "Leitura de textos jurídicos e análise de seu conteúdo e forma",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2479",
		        positionY : "2870",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cebf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10231",
		        name : "Tramitação no poder judiciário",
		        descricao : "Conhecimento dos órgãos e instituições que compoem o poder judiciário brasileiro e direcionamento de casos de acordo",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1994",
		        positionY : "2801",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10232",
		        name : "Utilização de jurisprudência",
		        descricao : "Compreensão do conceito e utilização de jurisprudências para resolução de casos com maior agilidade",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2238",
		        positionY : "2799",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10233",
		        name : "Desenvolvimento jurídico",
		        descricao : "Entendimento do desenvolvimento histórico das leis e contextualização das leis atuais",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2718",
		        positionY : "2867",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10234",
		        name : "Arbitragem judicial",
		        descricao : "Participação de um processo como árbitro, seguindo as regras comuns ao papel",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2243",
		        positionY : "2945",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10235",
		        name : "Análise de direitos humanos",
		        descricao : "Análise de situações com base nos direitos humanos universais",
		        wiki : "https://pt.wikipedia.org/wiki/Direitos_humanos",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1994",
		        positionY : "2871",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10236",
		        name : "Criação de peças jurídicas",
		        descricao : "Redação de documentos jurídicos utilizando a terminologia e formatos apropriados",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2477",
		        positionY : "2944",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10237",
		        name : "Avaliação de responsabilidade",
		        descricao : "Determinação do grau de responsabilidade de uma parte de acordo com a legislação brasileira",
		        wiki : "",
		        area : "Direito",
		        campo : "",
		        categoria : "",
		        parent : "4",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1997",
		        positionY : "2946",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10238",
		        name : "Análise institucional",
		        descricao : "Análise da eficiência e do funcionamento de instituições públicas com relação a seu papel",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito administrativo",
		        categoria : "",
		        parent : "129",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1802",
		        positionY : "3244",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10239",
		        name : "Desenho institucional",
		        descricao : "Criação de normativos para regular o correto funcionamento de instituições públicas",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito administrativo",
		        categoria : "",
		        parent : "129",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1802",
		        positionY : "3294",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10324",
		        name : "Análise de políticas públicas",
		        descricao : "Análise do impacto de leis e normativos nas esferas a que dizem respeito",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito administrativo",
		        categoria : "",
		        parent : "129",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1802",
		        positionY : "3344",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cec9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10112",
		        name : "Definição de pessoa jurídica",
		        descricao : "Caracterização de uma pessoa jurídica a partir de seus objetivos e identificação dos requisitos e direitos de cada modalidade",
		        wiki : "https://pt.wikipedia.org/wiki/Pessoa_jur%C3%ADdica",
		        area : "Direito",
		        campo : "Direito Civil",
		        categoria : "Código civil",
		        parent : "1021",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1527",
		        positionY : "2973",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ceca",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10240",
		        name : "Celebração de Uniões",
		        descricao : "Criação de contratos de união de indivíduos nas modalidades previstas na legislação brasileira",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da família",
		        parent : "1053",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1243",
		        positionY : "2967",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cecb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10241",
		        name : "Defesa de direitos de menores",
		        descricao : "Utilização das leis que envolvem crianças nas famílias para resolução de situações e garantia de direitos previstos na constituição",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da família",
		        parent : "1053",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1243",
		        positionY : "3017",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cecc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10242",
		        name : "Dissolução de uniões",
		        descricao : "Dissolucão de contratos de união de indivíduos nas modalidades previstas na legislação brasileira e tratamento da separação",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da família",
		        parent : "1053",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1243",
		        positionY : "3067",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cecd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10243",
		        name : "Planejamento sucessório",
		        descricao : "Criação de planos para minimizar o trabalho e a taxação da transferência bens na sucessão",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito das sucessões",
		        parent : "1054",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1239",
		        positionY : "3162",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cece",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10244",
		        name : "Criação de testamentos",
		        descricao : "Redação de documentos contendo a destinação de bens na sucessão de um indivíduo",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito das sucessões",
		        parent : "1054",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1239",
		        positionY : "3212",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4cecf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10245",
		        name : "Processo sucessório",
		        descricao : "Condução de processos de transmissão de bens para sucessores inter vivo ou causa mortis",
		        wiki : "https://pt.wikipedia.org/wiki/Invent%C3%A1rio",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito das sucessões",
		        parent : "1054",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1239",
		        positionY : "3262",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10246",
		        name : "Caracterização da propriedade",
		        descricao : "Análise dos direitos e deveres oriundos da propriedade de algo",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_propriedade",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da propriedade",
		        parent : "1052",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1509",
		        positionY : "3089",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10247",
		        name : "Defesa da propriedade",
		        descricao : "Condução de casos de defesa da propriedade com base nos normativos brasileiros",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_propriedade",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da propriedade",
		        parent : "1052",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1509",
		        positionY : "3139",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10248",
		        name : "Desapropriação",
		        descricao : "Condução de processos de desapropriação em conforme com a legislação brasileira",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_de_propriedade",
		        area : "Direito",
		        campo : "Direito civil",
		        categoria : "Direito da propriedade",
		        parent : "1052",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1509",
		        positionY : "3189",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10395",
		        name : "Estruturação de parcerias",
		        descricao : "Definição das responsabilidades e direitos das partes em um processo de parceria corporativa",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "",
		        parent : "111",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-961",
		        positionY : "3097",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Jointventure", 
		            "partnership"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10113",
		        name : "Condução de processo falimentar",
		        descricao : "Coordenação do processo falimentar, definição do tipo de pedido de falência",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-267",
		        positionY : "3235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10114",
		        name : "Reestruturação societária",
		        descricao : "Criação e revisão de contratos para a mudança da composição acionária de uma empresa, contemplando acionistas e credores",
		        wiki : "https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-553",
		        positionY : "3232",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10115",
		        name : "Emissão de novas ações",
		        descricao : "Criação de peças jurídicas e revisão do contrato social de uma empresa para emissão de novas ações",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-552",
		        positionY : "3355",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7ec66652ca33e4ced7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10116",
		        name : "Emissão de títulos de dívida",
		        descricao : "Criação e revisão de contratos para a emissão de instrumentos de dívida corporativa",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-554",
		        positionY : "3295",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ced8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10117",
		        name : "Criação de sociedades",
		        descricao : "Criação de contratos sociais, acordos de acionistas e demais peças necessárias ao registro de uma Pessoa Jurídica",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-883",
		        positionY : "3231",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ced9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10118",
		        name : "Estruturação de fundos de investimentos",
		        descricao : "Criação de contratos e documentos para o registro e funcionamento de fundos de investimentos",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-888",
		        positionY : "3295",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceda",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10119",
		        name : "Estruturação de fusões e aquisições",
		        descricao : "Estruturação jurídica de operação de compra e venda de empresas ou ativos corporativos",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-548",
		        positionY : "3417",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cedb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10396",
		        name : "Estruturação de empresa de capital aberto",
		        descricao : "Revisão de contratos e instrumentos constitutivos para permitir o funcionamento de uma empresa em regime de capital aberto",
		        wiki : "https://pt.wikipedia.org/wiki/Empresa_de_capital_aberto",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-551",
		        positionY : "3479",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "IPO", 
		            "corporate finance", 
		            "abertura de capital"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cedc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10397",
		        name : "Internacionalização de empresas",
		        descricao : "Abertura de subsidiárias e revisão de instrumentos constitutivos para permitir o funcionamento de uma empresa em países estrangeiros",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Direito societário",
		        parent : "1024",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-267",
		        positionY : "3293",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Globalização", 
		            "expansão internacional"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cedd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10249",
		        name : "Redação de contratos",
		        descricao : "Criação de instrumentos jurídicos de intermediação de relacionamentos e estabelecimento de obrigações",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Contratos",
		        parent : "1022",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-741",
		        positionY : "3100",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cede",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10120",
		        name : "Criação de contratos bancários",
		        descricao : "Desenvolvimento de contratos de serviços bancários em conforme com as leis",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Contratos",
		        parent : "1022",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-273",
		        positionY : "3100",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cedf",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10250",
		        name : "Padronização de contratos",
		        descricao : "Redação de contratos padronizados de acordo com o tipo de relacionamento que se propõe",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito Comercial",
		        categoria : "Contratos",
		        parent : "1022",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-521",
		        positionY : "3101",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10121",
		        name : "Utilização dos princípios constitucionais brasileiros",
		        descricao : "Aplicação dos conceitos básicos da constituição brasileira em análises jurídicas",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito constitucional",
		        categoria : "",
		        parent : "112",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1469",
		        positionY : "2832",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10251",
		        name : "Análise econômica do direito",
		        descricao : "Análise do papel econômico do sistema jurídico, suas ineficiências e alavancas",
		        wiki : "https://pt.wikipedia.org/wiki/An%C3%A1lise_econ%C3%B4mica_do_direito",
		        area : "Direito",
		        campo : "Direito econômico",
		        categoria : "",
		        parent : "130",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1930",
		        positionY : "3458",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10252",
		        name : "Criação de políticas públicas econômicas",
		        descricao : "Criação de políticas públicas com o intuito de fortalecer o sistema econômico do país",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito econômico",
		        categoria : "",
		        parent : "130",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1930",
		        positionY : "3508",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10253",
		        name : "Análise de comunidades internacionais",
		        descricao : "Análise de acordos internacionais e seus impactos",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_internacional",
		        area : "Direito",
		        campo : "Direito internacional",
		        categoria : "Direito internacional público",
		        parent : "1055",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2298",
		        positionY : "3462",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10254",
		        name : "Análise de regulação internacional",
		        descricao : "Observância de regulamentações internacionais na confecção de peças jurídicas",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito internacional",
		        categoria : "Direito internacional público",
		        parent : "1055",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2298",
		        positionY : "3512",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10255",
		        name : "Estruturação de acordos Internacionais",
		        descricao : "Análise e criação de normas para composição de acordos internacionais",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_internacional",
		        area : "Direito",
		        campo : "Direito internacional",
		        categoria : "Direito internacional privado",
		        parent : "1056",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2625",
		        positionY : "3454",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10256",
		        name : "Solução de controvérsias",
		        descricao : "Resolução de disputas internacionais com base nas normas locais e de direito internacional",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito internacional",
		        categoria : "Direito internacional privado",
		        parent : "1056",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2625",
		        positionY : "3504",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10262",
		        name : "Referência à jurisprudência penal",
		        descricao : "Análise de casos com base na jurisprudência penal vigente",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_penal",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2345",
		        positionY : "3243",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10263",
		        name : "Promotoria penal",
		        descricao : "Moção de processos com base em atestação de infringimento do código penal",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_penal",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2556",
		        positionY : "3241",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cee9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10265",
		        name : "Argumentação penal comparativa",
		        descricao : "Utilização de analogias e comparações entre sistemas jurídicos extrangeiros para avaliação de casos",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_penal",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2090",
		        positionY : "3243",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceea",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10264",
		        name : "Defesa penal",
		        descricao : "Condução de defesa de réus com base na desconstrução de argumentos e limitações da lei penal",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_penal",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2548",
		        positionY : "3303",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceeb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10266",
		        name : "Tipificação de crime",
		        descricao : "Definição da classificação do crime de acordo com a legislação penal",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2714",
		        positionY : "3241",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceec",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10267",
		        name : "Atribuição de culpa",
		        descricao : "Definição da participação de um indivíduo em um crime",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito penal",
		        categoria : "",
		        parent : "136",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2341",
		        positionY : "3299",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceed",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10257",
		        name : "Condução de processos no Brasil",
		        descricao : "Conhecimento das instituições brasileiras envolvidas em processos jurídicos e suas jurisdições",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil",
		        area : "Direito",
		        campo : "Direito processual",
		        categoria : "",
		        parent : "131",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2668",
		        positionY : "3074",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceee",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10258",
		        name : "Condução de processo civil no Brasil",
		        descricao : "Condução de um processo pelas instituições brasileiras de acordo com a legislação vigente",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil",
		        area : "Direito",
		        campo : "Direito processual",
		        categoria : "",
		        parent : "131",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2401",
		        positionY : "3074",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4ceef",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10259",
		        name : "Execução de sentenças",
		        descricao : "Garantir o cumprimento de uma sentença decorrente de um processo",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito processual",
		        categoria : "",
		        parent : "131",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2139",
		        positionY : "3133",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cef0",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10260",
		        name : "Protocolação de recursos",
		        descricao : "Criação de recursos contra sentenças resultantes de processos",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito processual",
		        categoria : "",
		        parent : "131",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2141",
		        positionY : "3072",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cef1",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10261",
		        name : "Criação de estratégia processual",
		        descricao : "Criação de estratégias para a maximização da chance de obtenção de resultado favorável em processo",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito processual",
		        categoria : "",
		        parent : "131",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2401",
		        positionY : "3132",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cef2",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10268",
		        name : "Negociações coletivas",
		        descricao : "Atuação em negociações sindicais para discussão de melhores termos dentro da legislação trabalhista brasileira",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_do_trabalho",
		        area : "Direito",
		        campo : "Direito trabalhista",
		        categoria : "",
		        parent : "114",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-660",
		        positionY : "2832",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc7fc66652ca33e4cef3",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10269",
		        name : "Criação de contratos de trabalho",
		        descricao : "Criação de contratos de trabalho nas modalidades disponíveis em conforme com a legislação trabalhista brasileira",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_do_trabalho",
		        area : "Direito",
		        campo : "Direito trabalhista",
		        categoria : "",
		        parent : "114",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-660",
		        positionY : "2882",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef4",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10122",
		        name : "Criação de relações de trabalho no Brasil",
		        descricao : "Utilização dos conceitos e princípios das leis trabalhistas brasileiras em vigor na construção de relações de trabalho",
		        wiki : "https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho",
		        area : "Direito",
		        campo : "Direito trabalhista",
		        categoria : "",
		        parent : "114",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-906",
		        positionY : "2828",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "CLT"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef5",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10123",
		        name : "Cálculo de tributos Municipais",
		        descricao : "Determinação de base de cálculo e alíquotas de tributos municipais",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio",
		        area : "Direito",
		        campo : "Direito tributário",
		        categoria : "Tributação",
		        parent : "1025",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1525",
		        positionY : "3402",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef6",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10124",
		        name : "Cálculo de tributos Estaduais",
		        descricao : "Determinação de base de cálculo e alíquotas de tributos estaduais",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio",
		        area : "Direito",
		        campo : "Direito tributário",
		        categoria : "Tributação",
		        parent : "1025",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1525",
		        positionY : "3452",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef7",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10270",
		        name : "Debate da evolução tributária brasileira",
		        descricao : "Compreensão da evolução da legislação tributária brasileira",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito tributário",
		        categoria : "",
		        parent : "113",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1251",
		        positionY : "3389",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef8",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10125",
		        name : "Cálculo de tributos federais",
		        descricao : "Determinação de base de cálculo e alíquotas de tributos federais",
		        wiki : "https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio",
		        area : "Direito",
		        campo : "Direito tributário",
		        categoria : "Tributação",
		        parent : "1025",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1525",
		        positionY : "3502",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cef9",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10271",
		        name : "Elisão fiscal",
		        descricao : "Criação de estratégias de redução dos tributos a serem pagos de acordo com a legislação vigente",
		        wiki : "",
		        area : "Direito",
		        campo : "Direito tributário",
		        categoria : "Planejamento tributário",
		        parent : "1057",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1251",
		        positionY : "3505",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cefa",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10126",
		        name : "Divulgação de informações regulatórias",
		        descricao : "Conhecimento das normas de divulgação de informação de bancos para BACEN e outros órgãos reguladores",
		        wiki : "",
		        area : "Direito",
		        campo : "Regulações setoriais",
		        categoria : "Regulação bancária",
		        parent : "1047",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1837",
		        positionY : "3100",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cefb",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10209",
		        name : "Análise econômica básica",
		        descricao : "Utilização dos conceitos básicos da economia na avaliação de situações",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "",
		        parent : "116",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-4006",
		        positionY : "1216",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "PIB", 
		            "Crescimento", 
		            "Dívida pública"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cefc",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10127",
		        name : "Análise das contas públicas",
		        descricao : "Determinação da saúde financeira de uma unidade governamental a partir de suas contas",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3680",
		        positionY : "1547",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cefd",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10128",
		        name : "Análise das políticas monetárias e fiscais",
		        descricao : "Determinação de tendências econômicas a partir do conjunto de regras que regem o funcionamento do governo e do banco central",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3681",
		        positionY : "1496",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cefe",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10129",
		        name : "Análise macroeconômica",
		        descricao : "Análise das tendências econômicas de um país ou região a partir de dados econômicos disponíveis",
		        wiki : "https://pt.wikipedia.org/wiki/Macroeconomia",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3962",
		        positionY : "1494",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4ceff",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10202",
		        name : "Análise de regime cambial",
		        descricao : "Análise dos impactos dos diversos tipos de regime cambial",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3681",
		        positionY : "1600",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf00",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10203",
		        name : "Análise de acordos internacionais",
		        descricao : "Análise do impacto de um acordo de comércio internacional",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3681",
		        positionY : "1650",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf01",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10205",
		        name : "Projeções econômicas",
		        descricao : "Projeção de dados economicos utilizando modelos teóricos e informações de mercado",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3964",
		        positionY : "1553",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf02",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10336",
		        name : "Análise regulatória",
		        descricao : "Análise dos impactos econômicos e setoriais de legislações, estatutos e normas",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3678",
		        positionY : "1704",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf03",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10390",
		        name : "Análise de indicadores econômicos",
		        descricao : "Análise de indicadores economicos (produção e crescimento, renda, desemprego, desigualdade, etc.) para criação de diagnóstico conjuntural",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3963",
		        positionY : "1606",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "PIB", 
		            "Gini", 
		            "Sazonalidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf04",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10392",
		        name : "Análise política",
		        descricao : "Análise da conjuntura política de um país, identificando tendências, oportunidades e riscos para empresas e cidadãos",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3371",
		        positionY : "1565",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "riscopolítico", 
		            "revolução", 
		            "eleições"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf05",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10391",
		        name : "Análise de sustentabilidade econômica",
		        descricao : "Avaliação dos impactos das iniciativas de desenvolvimento sustentável no desenvolvimento econômico de um país",
		        wiki : "https://pt.wikipedia.org/wiki/Desenvolvimento_sustent%C3%A1vel",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3372",
		        positionY : "1497",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "sustentabilidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf06",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10393",
		        name : "Análise de política externa",
		        descricao : "Análise das políticas e relações externas de um governo, identificando tendências e potenciais impactos decorrentes",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3372",
		        positionY : "1633",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf07",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10394",
		        name : "Análise política global",
		        descricao : "Análise das relações entre governos e seus respectivos sistemas políticos, identificando tendências, oportunidades e riscos",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Macroeconomia",
		        parent : "1010",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3372",
		        positionY : "1694",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "riscopolítico", 
		            "revolução", 
		            "eleições"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf08",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10130",
		        name : "Análise de custos e lucros",
		        descricao : "Determinação do preço ótimo para maximização do resultado em função dos custos marginais de produção (teoria da firma)",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_da_firma",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Microeconomia",
		        parent : "1011",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3789",
		        positionY : "1335",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf09",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10131",
		        name : "Cálculos de elasticidade",
		        descricao : "Determinação da sensibilidade da demanda de produtos à variação de preços e avaliação de suas causas e relações",
		        wiki : "https://pt.wikipedia.org/wiki/Elasticidade_%28economia%29",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Microeconomia",
		        parent : "1011",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-4002",
		        positionY : "1333",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf0a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10132",
		        name : "Análise dos agregados de oferta e demanda",
		        descricao : "Análise da variação de preços potencial em função da regra de equilíbrio de oferta e demanda",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_do_equil%C3%ADbrio_geral",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Microeconomia",
		        parent : "1011",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3791",
		        positionY : "1396",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf0b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10208",
		        name : "Análise econômica de mercados",
		        descricao : "Identificação e caracterização de mercados em termos de estrutura e competição",
		        wiki : "https://pt.wikipedia.org/wiki/Mercado",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Microeconomia",
		        parent : "1011",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3474",
		        positionY : "1335",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf0c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10206",
		        name : "Análise de sistemas econômicos",
		        descricao : "Análise das regras e instituições econômicas de determinado país",
		        wiki : "https://pt.wikipedia.org/wiki/Economia#Economia_internacional",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Economia internacional",
		        parent : "1060",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1639",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc80c66652ca33e4cf0d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10207",
		        name : "Utilização de Incoterms",
		        descricao : "Avaliação dos termos de uma negociação internacional e suas implicações financeiras",
		        wiki : "https://pt.wikipedia.org/wiki/Incoterms",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Economia internacional",
		        parent : "1060",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1689",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "FOB"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf0e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10212",
		        name : "Criação de modelos lineares",
		        descricao : "Criação de modelos lineares de explicação de fatores econômicos por variáveis",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Econometria",
		        parent : "1051",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1485",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf0f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10213",
		        name : "Criação de modelos de painel",
		        descricao : "Criação de modelos de explicação de fatores econômicos por variáveis dispostas em um painel balanceado ou não",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Econometria",
		        parent : "1051",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3044",
		        positionY : "1535",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf10",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10210",
		        name : "Análise da formação econômica brasileira",
		        descricao : "Análise do desenvolvimento econômico brasileiro a partir de sua história",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Teoria do desenvolvimento econômico",
		        parent : "1012",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3046",
		        positionY : "1236",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf11",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10211",
		        name : "Debate da história econômica",
		        descricao : "Análise do desenvolvimento da ciência econômica humana",
		        wiki : "",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Teoria do desenvolvimento econômico",
		        parent : "1012",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3046",
		        positionY : "1286",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf12",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10133",
		        name : "Análise de modelo de Solow",
		        descricao : "Avaliação da capacidade de crescimento de uma economia a partir dos componentes de capital, mão de obra e tecnologia",
		        wiki : "https://pt.wikipedia.org/wiki/Modelo_de_Solow",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Teoria do desenvolvimento econômico",
		        parent : "1012",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3046",
		        positionY : "1336",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf13",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10204",
		        name : "Análise da produtividade dos fatores",
		        descricao : "Análise do potencial de crescimento econômico a partir dos componentes que o promovem",
		        wiki : "https://pt.wikipedia.org/wiki/Produtividade",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Teoria do desenvolvimento econômico",
		        parent : "1012",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3046",
		        positionY : "1386",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf14",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10134",
		        name : "Modelagem de jogos",
		        descricao : "Estruturação de situações conforme a teoria dos jogos e análise dos possíveis resultados",
		        wiki : "https://pt.wikipedia.org/wiki/Teoria_dos_jogos",
		        area : "Economia",
		        campo : "Análise econômica",
		        categoria : "Teoria dos jogos",
		        parent : "1013",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-3724",
		        positionY : "1235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf15",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10135",
		        name : "Modelagem behaviorista de preços",
		        descricao : "Determinação de preços de ativos com base em comportamentos de agentes de mercado",
		        wiki : "https://pt.wikipedia.org/wiki/Economia_comportamental",
		        area : "Economia",
		        campo : "Economia comportamental",
		        categoria : "Finanças comportamentais",
		        parent : "1026",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2660",
		        positionY : "1511",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf16",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10214",
		        name : "Análise de viés comportamental",
		        descricao : "Análise do impacto de emoções e cultura na tomada de decisão econômica",
		        wiki : "",
		        area : "Economia",
		        campo : "Economia comportamental",
		        categoria : "Finanças comportamentais",
		        parent : "1026",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2660",
		        positionY : "1561",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf17",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10216",
		        name : "Análise da evolução do pensamento econômico",
		        descricao : "Avaliação da criação das teorias econômicas em seus contextos históricos e culturais",
		        wiki : "",
		        area : "Economia",
		        campo : "Pensamento econômico",
		        categoria : "",
		        parent : "137",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2664",
		        positionY : "1216",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf18",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10217",
		        name : "Economia clássica",
		        descricao : "Avaliação da economia através do instrumental clássico criado por Adam Smith",
		        wiki : "",
		        area : "Economia",
		        campo : "Pensamento econômico",
		        categoria : "",
		        parent : "137",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2664",
		        positionY : "1266",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf19",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10136",
		        name : "Ética nos negócios",
		        descricao : "Aplicação de valores éticos na conduta profissional",
		        wiki : "",
		        area : "Filosofia",
		        campo : "Ética",
		        categoria : "Ética aplicada",
		        parent : "1031",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "324",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10218",
		        name : "Economia austríaca",
		        descricao : "Avaliação da economia através do instrumental desenvolvido pela escola Austríaca de pensamento econômico",
		        wiki : "",
		        area : "Economia",
		        campo : "Pensamento econômico",
		        categoria : "",
		        parent : "137",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-2664",
		        positionY : "1316",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10273",
		        name : "Mitigação de conflito de interesses",
		        descricao : "Atuação com capacidade de discernimento entre os diversos interesses presentes em uma situação e com a tomada das devidas precauções",
		        wiki : "https://pt.wikipedia.org/wiki/Conflito_de_interesses",
		        area : "Filosofia",
		        campo : "Ética",
		        categoria : "Ética aplicada",
		        parent : "1031",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "374",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10274",
		        name : "Responsabilidade com terceiros",
		        descricao : "Consideração pelo mercado, pelos clientes e pela instituição empregadora na tomada de decisão",
		        wiki : "",
		        area : "Filosofia",
		        campo : "Ética",
		        categoria : "Ética aplicada",
		        parent : "1031",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "424",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10275",
		        name : "Confidencialidade",
		        descricao : "Não divulgação de informações consideradas confidenciais",
		        wiki : "",
		        area : "Filosofia",
		        campo : "Ética",
		        categoria : "Ética aplicada",
		        parent : "1031",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1102",
		        positionY : "474",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10277",
		        name : "Debate sobre a liberdade do indivíduo",
		        descricao : "Construção de raciocínios com base nos conceitos filosóficos de indivíduo e liberdade",
		        wiki : "",
		        area : "Filosofia",
		        campo : "Filosofia política",
		        categoria : "",
		        parent : "138",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1427",
		        positionY : "292",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf1f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10276",
		        name : "Debate sobre o indivíduo e o estado",
		        descricao : "Construção de raciocínios com base nos conceitos filosóficos de indivíduo e estado e seu relacionamento",
		        wiki : "",
		        area : "Filosofia",
		        campo : "Filosofia política",
		        categoria : "",
		        parent : "138",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1427",
		        positionY : "342",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf20",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10389",
		        name : "Comunicação em Libras",
		        descricao : "Comunicação em Libras - língua brasileira de sinais",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais",
		        area : "Idiomas",
		        campo : "português",
		        categoria : "",
		        parent : "147",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2077",
		        positionY : "27",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "surdo", 
		            "mudo"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf21",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10294",
		        name : "Inglês básico",
		        descricao : "Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa",
		        area : "Idiomas",
		        campo : "Inglês",
		        categoria : "",
		        parent : "139",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2035",
		        positionY : "137",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf22",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10295",
		        name : "Inglês intermediário",
		        descricao : "Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa",
		        area : "Idiomas",
		        campo : "Inglês",
		        categoria : "",
		        parent : "139",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2190",
		        positionY : "139",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf23",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10297",
		        name : "Inglês fluente",
		        descricao : "Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa",
		        area : "Idiomas",
		        campo : "Inglês",
		        categoria : "",
		        parent : "139",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2487",
		        positionY : "136",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf24",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10296",
		        name : "Inglês avançado",
		        descricao : "Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa",
		        area : "Idiomas",
		        campo : "Inglês",
		        categoria : "",
		        parent : "139",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2348",
		        positionY : "137",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf25",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10298",
		        name : "Francês básico",
		        descricao : "Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa",
		        area : "Idiomas",
		        campo : "Francês",
		        categoria : "",
		        parent : "144",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2037",
		        positionY : "346",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf26",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10299",
		        name : "Francês intermediário",
		        descricao : "Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa",
		        area : "Idiomas",
		        campo : "Francês",
		        categoria : "",
		        parent : "144",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2185",
		        positionY : "350",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf27",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10300",
		        name : "Francês avançado",
		        descricao : "Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa",
		        area : "Idiomas",
		        campo : "Francês",
		        categoria : "",
		        parent : "144",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2349",
		        positionY : "349",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc81c66652ca33e4cf28",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10301",
		        name : "Francês fluente",
		        descricao : "Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa",
		        area : "Idiomas",
		        campo : "Francês",
		        categoria : "",
		        parent : "144",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2499",
		        positionY : "349",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf29",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10302",
		        name : "Espanhol básico",
		        descricao : "Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana",
		        area : "Idiomas",
		        campo : "Espanhol",
		        categoria : "",
		        parent : "145",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2042",
		        positionY : "449",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10303",
		        name : "Espanhol intermediário",
		        descricao : "Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana",
		        area : "Idiomas",
		        campo : "Espanhol",
		        categoria : "",
		        parent : "145",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2197",
		        positionY : "447",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10304",
		        name : "Espanhol avançado",
		        descricao : "Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana",
		        area : "Idiomas",
		        campo : "Espanhol",
		        categoria : "",
		        parent : "145",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2358",
		        positionY : "441",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10305",
		        name : "Espanhol fluente",
		        descricao : "Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana",
		        area : "Idiomas",
		        campo : "Espanhol",
		        categoria : "",
		        parent : "145",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2495",
		        positionY : "450",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10278",
		        name : "Inglês jurídico",
		        descricao : "Redação de peças jurídicas em inglês com a correta utilização dos termos e construção de lógica",
		        wiki : "",
		        area : "Idiomas",
		        campo : "Inglês",
		        categoria : "Inglês de negócios",
		        parent : "1058",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2348",
		        positionY : "234",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10285",
		        name : "Cálculo de sistemas dinâmicos",
		        descricao : "Cálculo do resultado de sistemas com uma componente variável de tempo",
		        wiki : "https://pt.wikipedia.org/wiki/Sistema_din%C3%A2mico",
		        area : "Matemática",
		        campo : "Álgebra",
		        categoria : "",
		        parent : "140",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "339",
		        positionY : "3106",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf2f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10286",
		        name : "Cálculo de sistemas lineares",
		        descricao : "Cálculos e análises de conjuntos de equações lineares",
		        wiki : "https://pt.wikipedia.org/wiki/Sistema_de_equa%C3%A7%C3%B5es_lineares",
		        area : "Matemática",
		        campo : "Álgebra",
		        categoria : "Álgebra linear",
		        parent : "1050",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "590",
		        positionY : "3064",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf30",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10287",
		        name : "Análise geométrica",
		        descricao : "Análise de formas geométricas com base em planos cartesianos",
		        wiki : "https://pt.wikipedia.org/wiki/Geometria_anal%C3%ADtica",
		        area : "Matemática",
		        campo : "Álgebra",
		        categoria : "Álgebra linear",
		        parent : "1050",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "590",
		        positionY : "3114",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Geometriaanalítica"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf31",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10139",
		        name : "Cálculo integral",
		        descricao : "Cálculo do resultado de operações integrais",
		        wiki : "https://pt.wikipedia.org/wiki/C%C3%A1lculo",
		        area : "Matemática",
		        campo : "Cálculo",
		        categoria : "",
		        parent : "119",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "909",
		        positionY : "3039",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf32",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10138",
		        name : "Cálculo diferencial",
		        descricao : "Cálculo do resultado de operações derivadas",
		        wiki : "https://pt.wikipedia.org/wiki/C%C3%A1lculo",
		        area : "Matemática",
		        campo : "Cálculo",
		        categoria : "",
		        parent : "119",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "909",
		        positionY : "3089",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf33",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10283",
		        name : "Cálculo de equações diferenciais",
		        descricao : "Cálculo do resultado de uma equação com icógnitas em forma de derivadas",
		        wiki : "https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_diferencial",
		        area : "Matemática",
		        campo : "Cálculo",
		        categoria : "",
		        parent : "119",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "909",
		        positionY : "3139",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf34",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10284",
		        name : "Determinação de relação de recorrência",
		        descricao : "Cálculo de termos anteriores ou seguintes de relações matemáticas a partir de regras particulares",
		        wiki : "https://pt.wikipedia.org/wiki/Rela%C3%A7%C3%A3o_de_recorr%C3%AAncia",
		        area : "Matemática",
		        campo : "Cálculo",
		        categoria : "",
		        parent : "119",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "909",
		        positionY : "3189",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf35",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10137",
		        name : "Análise estatística básica",
		        descricao : "Avaliação estatística básica de conjuntos de dados e sua comparação a uma distribuição normal",
		        wiki : "https://pt.wikipedia.org/wiki/Estat%C3%ADstica",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "313",
		        positionY : "2883",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Princípiosestatíesticos", 
		            "moda", 
		            "média", 
		            "desvio padrão"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf36",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10140",
		        name : "Testes de hipótese",
		        descricao : "Realização de testes de hipótese, significância estatística, análise de resíduos e de variância",
		        wiki : "https://pt.wikipedia.org/wiki/Testes_de_hip%C3%B3teses",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "523",
		        positionY : "2828",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf37",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10279",
		        name : "Análise estatística",
		        descricao : "Realização de análises estatísticas para identificação de propriedades de conjuntos de dados, incluindo correlações com outros conjuntos",
		        wiki : "https://pt.wikipedia.org/wiki/Estat%C3%ADstica_descritiva",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "517",
		        positionY : "2941",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf38",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10280",
		        name : "Análise exploratória de dados",
		        descricao : "Aplicação de técnicas de regressão e testes de hipóteses para identificação de padrões e relações estatísticas",
		        wiki : "",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "740",
		        positionY : "2885",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf39",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10281",
		        name : "Criação de regressões",
		        descricao : "Identificação de relações estatísticas entre duas ou mais variáveis e representação matemática desta relação",
		        wiki : "",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "516",
		        positionY : "2883",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10282",
		        name : "Análise de resíduos",
		        descricao : "Análise de dados resultantes de regressões para identificação de padrões que afetem a validade da relação estatística",
		        wiki : "",
		        area : "Matemática",
		        campo : "Estatística",
		        categoria : "",
		        parent : "120",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "742",
		        positionY : "2941",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10288",
		        name : "Descrição probabilística",
		        descricao : "Descrição de fenômenos a partir de probabilidades matemáticas",
		        wiki : "",
		        area : "Matemática",
		        campo : "Probabilidade",
		        categoria : "",
		        parent : "141",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "976",
		        positionY : "2834",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10060",
		        name : "Valor do dinheiro no tempo",
		        descricao : "Cálculo do valor do dinheiro no tempo",
		        wiki : "https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira",
		        area : "Matemática",
		        campo : "Matemática financeira",
		        categoria : "",
		        parent : "150",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "331",
		        positionY : "3223",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10061",
		        name : "Cálculo de juros",
		        descricao : "Capitalização de juros simples e juros compostos e variantes internacionais",
		        wiki : "https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira",
		        area : "Matemática",
		        campo : "Matemática financeira",
		        categoria : "",
		        parent : "150",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "510",
		        positionY : "3224",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10381",
		        name : "Gestão de carreira",
		        descricao : "Identificação de prioridades para tomada de decisão e planejamento de ações para possibilitar a evolução da carreira de acordo comos valores e interesses pessoais",
		        wiki : "https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_carreira",
		        area : "Profissional",
		        campo : "",
		        categoria : "",
		        parent : "13",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1097.4561439783613",
		        positionY : "60.44955006762172",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "careerservices"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf3f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10428",
		        name : "Construção de Currículo",
		        descricao : "Estruturação e listagem de experiências educacionais e profissionais em documento voltado a recrutamento",
		        wiki : "https://pt.wikipedia.org/wiki/Curriculum_vit%C3%A6",
		        area : "Profissional",
		        campo : "",
		        categoria : "",
		        parent : "13",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-1098.4561439783613",
		        positionY : "120.44955006762169",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "CV", 
		            "Curriculum vitae"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf40",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10141",
		        name : "Psicologia da Liderança",
		        descricao : "Aplicação dos conceitos psicológicos da Liderança",
		        wiki : "",
		        area : "Psicologia",
		        campo : "Psicologia do trabalho",
		        categoria : "Psicologia comportamental",
		        parent : "1043",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1704",
		        positionY : "292",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf41",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10142",
		        name : "Debate sobre trabalho e estresse",
		        descricao : "Tomada de decisão com base no entendimento do impacto do trabalho e do estresse na psique humana",
		        wiki : "",
		        area : "Psicologia",
		        campo : "Psicologia do trabalho",
		        categoria : "Psicologia comportamental",
		        parent : "1043",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1704",
		        positionY : "342",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf42",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10143",
		        name : "Análise psicológica da autoridade",
		        descricao : "Utilização dos conceitos psicológicos da autoridade e suas consequências na tomada de decisão",
		        wiki : "",
		        area : "Psicologia",
		        campo : "Psicologia do trabalho",
		        categoria : "Psicologia comportamental",
		        parent : "1043",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1704",
		        positionY : "392",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc82c66652ca33e4cf43",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10144",
		        name : "Aplicação do Behaviorismo aos negócios",
		        descricao : "Aplicação dos conceitos de behaviorismo em situações de trabalho",
		        wiki : "",
		        area : "Psicologia",
		        campo : "Psicologia do trabalho",
		        categoria : "Psicologia comportamental",
		        parent : "1043",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1704",
		        positionY : "442",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf44",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10145",
		        name : "Análise psicológica Freudiana",
		        descricao : "Aplicação dos conceitos de Ego, supergo, id em análises psicológicas",
		        wiki : "",
		        area : "Psicologia",
		        campo : "Psicologia Freudiana",
		        categoria : "",
		        parent : "121",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1443",
		        positionY : "85",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf45",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10384",
		        name : "Aplicação da livre associação",
		        descricao : "Aplicação de método de investigação psíquica baseado na livre exploração do paciente por tópicos que lhe façam sentido",
		        wiki : "https://pt.wikipedia.org/wiki/Livre_associa%C3%A7%C3%A3o",
		        area : "Psicologia",
		        campo : "Psicanálise",
		        categoria : "",
		        parent : "148",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1718",
		        positionY : "81",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "divã", 
		            "Freud"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf46",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10385",
		        name : "Investigação da psique",
		        descricao : "Identificaçãode desvios de personalidade e traumas a partir de técnicas investigativas",
		        wiki : "https://pt.wikipedia.org/wiki/Psican%C3%A1lise",
		        area : "Psicologia",
		        campo : "Psicanálise",
		        categoria : "",
		        parent : "148",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1718",
		        positionY : "131",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Freud"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf47",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10388",
		        name : "Análise cultural brasileira",
		        descricao : "Análise dos componentes culturais brasileiros e suas interações, criando um panomara cultural do país",
		        wiki : "https://pt.wikipedia.org/wiki/Cultura_do_Brasil",
		        area : "Sociologia",
		        campo : "",
		        categoria : "",
		        parent : "11",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "764",
		        positionY : "-27",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Brasilianismo", 
		            "tupi-guarani"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf48",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10386",
		        name : "Debate do neoliberalismo",
		        descricao : "Debate sobre o modelo economico neoliberalista e seus impactos na vida dos indivíduos e na comunidade",
		        wiki : "https://pt.wikipedia.org/wiki/Neoliberalismo",
		        area : "Sociologia",
		        campo : "Sociologia econômica",
		        categoria : "",
		        parent : "142",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1057",
		        positionY : "-15",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "liberalismo"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf49",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10289",
		        name : "Debate sobre o indivíduo na sociedade",
		        descricao : "Análise da influência do meio no indivíduo e na construção de identidades",
		        wiki : "",
		        area : "Sociologia",
		        campo : "Sociologia econômica",
		        categoria : "",
		        parent : "142",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1057",
		        positionY : "34",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10387",
		        name : "Debate da cultura de consumo",
		        descricao : "Debate sobre os impactos da cultura do consumo na sociedade",
		        wiki : "https://pt.wikipedia.org/wiki/Consumo",
		        area : "Sociologia",
		        campo : "Sociologia econômica",
		        categoria : "",
		        parent : "142",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "1057",
		        positionY : "84",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "consumismo"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10290",
		        name : "Análise sociológica do direito",
		        descricao : "Compreensão do direito na sociedade atual e seu impacto nas dinâmicas sociais",
		        wiki : "",
		        area : "Sociologia",
		        campo : "Sociologia jurídica",
		        categoria : "",
		        parent : "143",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "781",
		        positionY : "82",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10425",
		        name : "Abstração",
		        descricao : "Exercício intelectual de avaliação de conceitos e experiências separando componentes e os avaliando independentemente",
		        wiki : "https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o",
		        area : "Soft Skills",
		        campo : "Pensamento abstrato",
		        categoria : "",
		        parent : "152",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-335",
		        positionY : "478",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10027",
		        name : "Brainstorming",
		        descricao : "Geração de ideias livres sobre temas específicos e refinamento dessas em conceitos utilizáveis",
		        wiki : "https://pt.wikipedia.org/wiki/Brainstorming",
		        area : "Soft Skills",
		        campo : "Pensamento abstrato",
		        categoria : "",
		        parent : "152",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-9",
		        positionY : "479",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10016",
		        name : "Tomar decisões",
		        descricao : "Utilização de ferramentas e modelos psicológicos para apoiar a tomada de decisões",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "121",
		        positionY : "63",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf4f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10382",
		        name : "Criatividade",
		        descricao : "Geração de ideias e conceitos autonomos e alternativos, ou aplicação destes de maneira não usual, buscando novas maneiras de se atingir um objetivo",
		        wiki : "https://pt.wikipedia.org/wiki/Criatividade",
		        area : "Soft Skills",
		        campo : "Pensamento abstrato",
		        categoria : "",
		        parent : "152",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-161",
		        positionY : "478",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Criação", 
		            "inovação"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf50",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10161",
		        name : "Interpretação de textos",
		        descricao : "Leitura e compreensão de textos e sua estrutura",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-306",
		        positionY : "124",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf51",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10165",
		        name : "Enquadramento de problemas",
		        descricao : "Utilização de modelos para definir problemas e procurar caminhos para sua solução",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-94",
		        positionY : "59",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf52",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10329",
		        name : "Analisar",
		        descricao : "Coleta e avaliação de informações para construção de uma conclusão sobre determinado assunto",
		        wiki : "",
		        area : "Soft skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-91",
		        positionY : "125",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf53",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10327",
		        name : "Raciocínio lógico",
		        descricao : "Avaliar situações utilizando conceitos de lógica",
		        wiki : "",
		        area : "Soft skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-304",
		        positionY : "60",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf54",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10166",
		        name : "Execução",
		        descricao : "Capacidade de transformação de ideias em ação com foco na resolução de problemas",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "123",
		        positionY : "198",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf55",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10163",
		        name : "Foco em resultado",
		        descricao : "Identificação e priorização das entregas agregadoras de valor",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Pensamento crítico",
		        categoria : "",
		        parent : "151",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "122",
		        positionY : "125",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf56",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10018",
		        name : "Apresentação",
		        descricao : "Condução de apresentações utilizando ferramentas de comunicação",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-568",
		        positionY : "56",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf57",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10017",
		        name : "Narrar",
		        descricao : "Utilização de técnicas de narrativa em comunicações",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-566",
		        positionY : "119",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf58",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10409",
		        name : "Entrevistar",
		        descricao : "Condução de conversa com realização de perguntas pré definidas para obtenção de informações e conhecimento de opiniões de indivíduos",
		        wiki : "https://pt.wikipedia.org/wiki/Entrevista",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-562",
		        positionY : "248",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Jornalismo", 
		            "interview"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf59",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10160",
		        name : "Argumentação",
		        descricao : "Construção de raciocínios lógicos ou emocionais com o intuito de se provar determinado ponto de vista",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-564",
		        positionY : "186",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10426",
		        name : "Comunicação escrita",
		        descricao : "Transmissão efetiva de conceitos e ideias via a utilização de ténicas de comunicação escrita",
		        wiki : "https://pt.wikipedia.org/wiki/Escrita",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-750",
		        positionY : "186",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10020",
		        name : "Comunicação oral",
		        descricao : "Transmissão efetiva de conceitos e ideias via a utilização de melhores práticas de comunicação oral",
		        wiki : "https://pt.wikipedia.org/wiki/L%C3%ADngua_falada",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-750",
		        positionY : "56",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10427",
		        name : "Comunicação corporal",
		        descricao : "Reforço da transmissão de informações via a utilização de gestos e expressões corporais",
		        wiki : "https://pt.wikipedia.org/wiki/Linguagem_corporal",
		        area : "Soft Skills",
		        campo : "Comunicação",
		        categoria : "",
		        parent : "153",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-751",
		        positionY : "119",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10272",
		        name : "Profissionalismo",
		        descricao : "Conduta pautada pelo conhecimento das normas morais, pela responsabilidade individual e pelo senso de dever",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-778",
		        positionY : "416",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10167",
		        name : "Organização",
		        descricao : "Identificação de tarefas a serem realizadas e alocação de tempo e esforço de maneira estruturada e eficiente para sua realização",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-780",
		        positionY : "357",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc83c66652ca33e4cf5f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10325",
		        name : "Empreender",
		        descricao : "Postura proativa de criação de soluções para problemas não estruturados",
		        wiki : "",
		        area : "Soft skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-496",
		        positionY : "358",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf60",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10328",
		        name : "Resiliência",
		        descricao : "Suportar e superar desafios até que se atinja o resultado esperado",
		        wiki : "",
		        area : "Soft skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-637",
		        positionY : "418",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf61",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10326",
		        name : "Agir Proativamente",
		        descricao : "Antecipação de problemas e situações e tomada de ação para mitigá-los ou resolvê-los",
		        wiki : "",
		        area : "Soft skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-638",
		        positionY : "356",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf62",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10383",
		        name : "Tolerância",
		        descricao : "Aptidão em se colocar na posição de outras pessoas e aceitar diferentes pontos de vista",
		        wiki : "https://pt.wikipedia.org/wiki/Toler%C3%A2ncia",
		        area : "Soft Skills",
		        campo : "Postura",
		        categoria : "",
		        parent : "154",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-779",
		        positionY : "475",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Diversidade"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf63",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10429",
		        name : "Empatia",
		        descricao : "Colocar-se no lugar de outros e entender o que eles estão sentido com o intuito de reforço do relacionamento",
		        wiki : "https://pt.wikipedia.org/wiki/Empatia",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-328",
		        positionY : "306",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf64",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10430",
		        name : "Persuasão",
		        descricao : "Convencimento de pessoas através da comunicação lógica, emocional e simbólica",
		        wiki : "https://pt.wikipedia.org/wiki/Persuas%C3%A3o",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "40",
		        positionY : "306",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf65",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10431",
		        name : "Auto-percepção",
		        descricao : "Se perceber e a seu impacto num ambiente ou contexto",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-329",
		        positionY : "373",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf66",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10162",
		        name : "Trabalho em equipe",
		        descricao : "Contribuição para o desenvolvimento de uma tarefa com uma parte do trabalho e com apoio ao grupo",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-155",
		        positionY : "372",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf67",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10014",
		        name : "Influenciar pessoas",
		        descricao : "Utilização de técnicas de influência em relacionamentos",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "-157",
		        positionY : "305",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf68",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10019",
		        name : "Construção de relacionamentos",
		        descricao : "Construção de relacionamentos profissionais baseadas em confiança, harmonia e recriprocidade",
		        wiki : "https://pt.wikipedia.org/wiki/Relacionamento",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "51",
		        positionY : "374",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Rapport"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf69",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10093",
		        name : "Liderança",
		        descricao : "Utilização de técnicas de liderança para facilitação do atingimento de objetivos por equipes",
		        wiki : "",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "229",
		        positionY : "375",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10379",
		        name : "Articulação política",
		        descricao : "Construção de grupos de interesse e afinidade para viabilização institucional de interesses",
		        wiki : "https://pt.wikipedia.org/wiki/Pol%C3%ADtica",
		        area : "Soft Skills",
		        campo : "Habilidades sociais",
		        categoria : "",
		        parent : "149",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "225",
		        positionY : "304",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Lobby"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10155",
		        name : "Powerpoint avançado",
		        descricao : "Utilização de Powerpoint em nível avançado - animações, gráficos com links a arquivos, slide mestre",
		        wiki : "https://pt.wikipedia.org/wiki/Microsoft_Office",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2988.3566257884113",
		        positionY : "1712.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Apresentação"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10157",
		        name : "Excel avançado",
		        descricao : "Utilização de MS Excel em nível avançado - Tabelas dinâmicas, fórmulas matriciais e gravação de macros",
		        wiki : "https://pt.wikipedia.org/wiki/Microsoft_Office",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2992.3566257884113",
		        positionY : "1771.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Planilha"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10156",
		        name : "Word avançado",
		        descricao : "Utilização de MS Word em nível avançado - índices automáticos, objetos com links a arquivos",
		        wiki : "https://pt.wikipedia.org/wiki/Microsoft_Office",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2991.3566257884113",
		        positionY : "1647.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Texto"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10158",
		        name : "Office Básico",
		        descricao : "Utilização em nível básico das funcionalidades de MS Excel, powerpoint, Word e outlook",
		        wiki : "https://pt.wikipedia.org/wiki/Microsoft_Office",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2831.3566257884113",
		        positionY : "1713.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "MSOffice"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf6f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10330",
		        name : "Programação em VBA",
		        descricao : "Programação em Visual Basic",
		        wiki : "https://pt.wikipedia.org/wiki/Visual_Basic_for_Applications",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3146.3566257884113",
		        positionY : "1772.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf70",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10334",
		        name : "Gestão de base de dados",
		        descricao : "Determinação de campos, tabelas e documentos e gestão de conteúdo de bases de dados",
		        wiki : "https://pt.wikipedia.org/wiki/Banco_de_dados",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "",
		        parent : "123",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2648.3566257884113",
		        positionY : "1711.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf71",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10374",
		        name : "Utilização de Access",
		        descricao : "Utilização do MS Access para criação, manutenção e utilização da informaçãode bases de dados",
		        wiki : "https://pt.wikipedia.org/wiki/Microsoft_Access",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "Utilização MS Office",
		        parent : "1016",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2992.3566257884113",
		        positionY : "1830.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "MSOffice"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf72",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10375",
		        name : "Criação de formulários",
		        descricao : "Estruturação e desenho de formulários para captura de informações",
		        wiki : "https://pt.wikipedia.org/wiki/Formul%C3%A1rio",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "",
		        parent : "123",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2646.3566257884113",
		        positionY : "1646.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Pesquisa", 
		            "form"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf73",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10147",
		        name : "Estruturação de databases em SQL",
		        descricao : "Desenho e implementação de databases em SQL",
		        wiki : "https://pt.wikipedia.org/wiki/SQL",
		        area : "Tecnologia da informação",
		        campo : "Infra estrutura tecnológica",
		        categoria : "Implementação de sistemas",
		        parent : "1037",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3305.3566257884113",
		        positionY : "2116.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf74",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10335",
		        name : "Criação de inteligência artificial",
		        descricao : "Utilização de software para criação e treinamento de algoritmos e redes neurais.",
		        wiki : "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial",
		        area : "Tecnologia da informação",
		        campo : "Computação geral",
		        categoria : "",
		        parent : "123",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2651.3566257884113",
		        positionY : "1772.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf75",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10293",
		        name : "Programação básica",
		        descricao : "Conhecimento sobre a lógica da programação, recursos básicos e limitações da solução de problemas via programação",
		        wiki : "https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_de_computadores",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "",
		        parent : "125",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2666.3566257884113",
		        positionY : "1978.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf76",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10377",
		        name : "Criação de arquitetura de sistemas",
		        descricao : "Definição e documentação de componentes e relacionamentos de um software",
		        wiki : "https://pt.wikipedia.org/wiki/Arquitetura_de_software",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "",
		        parent : "125",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2666.3566257884113",
		        positionY : "2028.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Arquiteturade sotfware"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc84c66652ca33e4cf77",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10378",
		        name : "Realização de testes de performance",
		        descricao : "Estruturação e realização de teste da velocidade de processamento de dados de um programa",
		        wiki : "https://pt.wikipedia.org/wiki/Teste_de_desempenho",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "",
		        parent : "125",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2666.3566257884113",
		        positionY : "2078.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Performancetest", 
		            "Teste de desempenho"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf78",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10150",
		        name : "Programação em C++",
		        descricao : "Programação em C+ de nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/C%2B%2B",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "1981.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf79",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10149",
		        name : "Programação em Ruby on rails",
		        descricao : "Programação em Ruby on Rails de nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/Ruby_on_Rails",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2031.5036194811235",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7a",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10331",
		        name : "Programação em Python",
		        descricao : "Programação em Python em nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/Python",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2081.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7b",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10148",
		        name : "Programação em Json",
		        descricao : "Programação em Json em nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/JSON",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2131.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Javascript object notation"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7c",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10332",
		        name : "Programação em Javascript",
		        descricao : "Programação em Javascript em nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/JavaScript",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2181.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7d",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10333",
		        name : "Programação em Unity",
		        descricao : "Programação em unity em nível básico",
		        wiki : "https://pt.wikipedia.org/wiki/Unity",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2231.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7e",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10376",
		        name : "Desenvolvimento baseado em ASP",
		        descricao : "Utilização das bibliotecas baseadas em ASP para desenvolvimento de software",
		        wiki : "https://pt.wikipedia.org/wiki/ASP",
		        area : "Tecnologia da informação",
		        campo : "Programação e Desenvolvimento",
		        categoria : "Linguagens de programação",
		        parent : "1042",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2983.3566257884113",
		        positionY : "2281.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "Activeserver pages"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf7f",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10146",
		        name : "Construção de consultas em SQL",
		        descricao : "Programação de rotinas para consultas a dados em bases de dados SQL",
		        wiki : "https://pt.wikipedia.org/wiki/SQL",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Bases de dados",
		        parent : "1048",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3051.3566257884113",
		        positionY : "2431.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf80",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10152",
		        name : "Utilização de terminal Bloomberg",
		        descricao : "Utilização da plataforma e terminais Bloomberg de informações e negociação",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Sistemas de negociação",
		        parent : "1049",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2700.3566257884113",
		        positionY : "2426.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf81",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10151",
		        name : "Uso de homebroker",
		        descricao : "Utilização de plataformas de negociação de ações (homebrokers)",
		        wiki : "https://pt.wikipedia.org/wiki/Home_Broker",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Sistemas de negociação",
		        parent : "1049",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2700.3566257884113",
		        positionY : "2476.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf82",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10153",
		        name : "Consulta a sistemas de informação",
		        descricao : "Utilização fluente de sistemas de informação de mercado (ex: Factiva)",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Sistemas de negociação",
		        parent : "1049",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2700.3566257884113",
		        positionY : "2526.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf83",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10154",
		        name : "Utilização de Thomson One",
		        descricao : "Utilização da plataforma Thomson de informações",
		        wiki : "",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Sistemas de negociação",
		        parent : "1049",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "2700.3566257884113",
		        positionY : "2576.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf84",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10291",
		        name : "Utilização de Matlab",
		        descricao : "Utilização do Eviews para a realização de análises econométricas",
		        wiki : "https://pt.wikipedia.org/wiki/MATLAB",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Software econométrico",
		        parent : "1059",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3362.3566257884113",
		        positionY : "2448.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf85",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10292",
		        name : "Utilização de Eviews",
		        descricao : "Utilização do Matlab para a realização de análises econométricas",
		        wiki : "https://pt.wikipedia.org/wiki/EViews",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Software econométrico",
		        parent : "1059",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3362.3566257884113",
		        positionY : "2498.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf86",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10372",
		        name : "Construção de bases de dados em SQL",
		        descricao : "Estruturação e população de bases de dados utilizando a linguagem SQL",
		        wiki : "https://pt.wikipedia.org/wiki/SQL",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Bases de dados",
		        parent : "1048",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3051.3566257884113",
		        positionY : "2481.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "DB", 
		            "Database", 
		            "Structured Query language"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf87",
		    documento : {
		        diagrama : "habilidades",
		        type : "nodes",
		        idHabilidade : "10373",
		        name : "Construção de bases de dados em MongoDB",
		        descricao : "Estruturação e população de bases de dados utilizando MongoDB",
		        wiki : "https://pt.wikipedia.org/wiki/MongoDB",
		        area : "Tecnologia da informação",
		        campo : "Sistemas e plataformas",
		        categoria : "Bases de dados",
		        parent : "1048",
		        classes : "habilidade",
		        weight : "70",
		        positionX : "3051.3566257884113",
		        positionY : "2531.5036194811237",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "",
		        target : "",
		        tags : [ 
		            "DB", 
		            "Database", 
		            "Humongous DB"
		        ]
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf88",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90000",
		        name : "ApresentaçõesXComunicação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10020",
		        target : "10018",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf89",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90001",
		        name : "Análise de índices financeirosXAnálise de demonstrativos financeiros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10042",
		        target : "10043",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8a",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90002",
		        name : "Análise das contas públicasXAnálise macro econômica",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10129",
		        target : "10127",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8b",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90004",
		        name : "Análise fundamentaistaXAvaliação de empresas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10045",
		        target : "10054",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8c",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90005",
		        name : "Análise fundamentaistaXPrecificação de títulos de renda fixa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10064",
		        target : "10054",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8d",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90006",
		        name : "Análise das políticas monetárias e fiscaisXAnálise macro econômica",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10129",
		        target : "10128",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8e",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90007",
		        name : "Avaliação de opções reaisXPrecificação de derivativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10065",
		        target : "10044",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf8f",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90009",
		        name : "Basiléia - Cálculos de requerimento de capital XContabilização bancária",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10108",
		        target : "10100",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf90",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90011",
		        name : "Basiléia - Cálculos de liquidez e estabilidade de captaçãoXContabilização bancária",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10108",
		        target : "10098",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf91",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90012",
		        name : "Curva a termo de jurosXCálculo de juros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10061",
		        target : "10063",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf92",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90013",
		        name : "Captação a mercado de dívidaXDeterminação da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10046",
		        target : "10041",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc85c66652ca33e4cf93",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90014",
		        name : "Captação a mercado via açõesXDeterminação da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10046",
		        target : "10040",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf94",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90015",
		        name : "Captação a mercado via açõesXAvaliação de empresas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10045",
		        target : "10040",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf95",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90017",
		        name : "Análises estratégicas x decisão estratégica",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1029",
		        target : "1030",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf96",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90016",
		        name : "Construção de estratégias competitivasXAnálises econômicas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "116",
		        target : "10036",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf97",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90019",
		        name : "Contabilização de custosXPrincípios de contabilidade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10106",
		        target : "10101",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf98",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90020",
		        name : "Contabilização bancáriaXContabilização de resultados",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10103",
		        target : "10108",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf99",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90021",
		        name : "Consolidação das Leis do trabalhoXprincípios constitucionais do direito",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10121",
		        target : "10122",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9a",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90023",
		        name : "Contabilização de IRPFXPrincípios de contabilidade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10106",
		        target : "10111",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9b",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90024",
		        name : "Contabilização de receitasXPrincípios de contabilidade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10106",
		        target : "10102",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9c",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90026",
		        name : "Contabilização de operações de leasingXContabilização de receitas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10102",
		        target : "10110",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9d",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90025",
		        name : "Contabilização bancáriaXContabilização fiscal",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10105",
		        target : "10108",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9e",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90027",
		        name : "Contabilização fiscalXContabilização de receitas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10102",
		        target : "10105",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cf9f",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90028",
		        name : "Contabilização fiscalXContabilização de custos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10101",
		        target : "10105",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90029",
		        name : "Contratação de funcionáriosXNegociação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10022",
		        target : "10090",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90030",
		        name : "Criação de estratégia competitivaXAnálise da concorrência",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10032",
		        target : "10075",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90031",
		        name : "Criação de estratégias de hedgeXPrecificação de derivativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10065",
		        target : "10066",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90032",
		        name : "Contabilização de resultadosXContabilização de custos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10101",
		        target : "10103",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90033",
		        name : "Criação de estratégia competitivaXSegmentação de mercado",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10083",
		        target : "10075",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90034",
		        name : "Criação de estratégias de Recursos humanosXGestão de remuneração e benefícios",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10091",
		        target : "10088",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90035",
		        name : "Criação de negócio no modelo Lean Start-upXCriação de novos modelos de negócios",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10030",
		        target : "10029",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90036",
		        name : "Desenvolvimento de novos produtosXSegmentação de mercado",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10083",
		        target : "10081",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90037",
		        name : "Criação de estratégias de Recursos humanosXTreinamento de recursos humanos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10092",
		        target : "10088",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfa9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90038",
		        name : "Definição de pessoa jurídicaXprincípios constitucionais do direito",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10121",
		        target : "10112",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfaa",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90039",
		        name : "Desenvolvimento de novos produtosXPesquisa mercadológica",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10073",
		        target : "10081",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfab",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90040",
		        name : "Gerência de projetoXPlanejamento de projetos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10005",
		        target : "10006",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfac",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90041",
		        name : "Design thinkingXBrainstorming",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10027",
		        target : "10026",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfad",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90042",
		        name : "Determinação de níveis de eficiênciaXCriação e revisão de processos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10011",
		        target : "10012",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc86c66652ca33e4cfae",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90043",
		        name : "Expertise MS PowerpointXIntrodução ao pacote office",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10158",
		        target : "10155",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfaf",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90044",
		        name : "Fusões e aquisiçõesXDeterminação da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10046",
		        target : "10047",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90045",
		        name : "Determinação de níveis de eficiênciaXPlanejamento operacional",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10015",
		        target : "10012",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90046",
		        name : "Fusões e aquisiçõesXNegociação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10022",
		        target : "10047",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90048",
		        name : "Expertise MS WordXIntrodução ao pacote office",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10158",
		        target : "10156",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90049",
		        name : "Fusões e aquisiçõesXAvaliação de empresas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10045",
		        target : "10047",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90050",
		        name : "Gerência de projetoXGerênciamento de riscos de projetos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10004",
		        target : "10006",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90051",
		        name : "Gestão ContábilXPrincípios de contabilidade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10106",
		        target : "10104",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90052",
		        name : "Criação de negócio no modelo Lean Start-upXInovação em produtos e serviços",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10028",
		        target : "10029",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90056",
		        name : "Gestão de produtosXPrecificação de produtos e serviços",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10082",
		        target : "10078",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90057",
		        name : "Expertise MS ExcelXIntrodução ao pacote office",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10158",
		        target : "10157",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfb9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90058",
		        name : "Financiamento de novos negóciosXdeterminação da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10046",
		        target : "10031",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfba",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90059",
		        name : "Gestão de produtosXAnálise da concorrência",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10032",
		        target : "10078",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfbb",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90060",
		        name : "Gestão de produtosXDesenvolvimento de novos produtos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10081",
		        target : "10078",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfbc",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90061",
		        name : "Gestão de caixaXAnálise de demonstrativos financeiros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10042",
		        target : "10048",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfbd",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90062",
		        name : "Materiais institucionaisXUtilização MS Office",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1016",
		        target : "10084",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfbe",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90065",
		        name : "Modelagem behaviorista de preçosXPrecificação de títulos de renda fixa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10064",
		        target : "10135",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfbf",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90066",
		        name : "Montagem de demonstrativos financeirosXPrincípios de contabilidade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10106",
		        target : "10107",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90069",
		        name : "Negociação de jurosXPrecificação de derivativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10065",
		        target : "10062",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90070",
		        name : "Negociação de jurosXCálculo da curva a termo de juros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10063",
		        target : "10062",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90071",
		        name : "Negociação de moedas estrangeirasXPrecificação de derivativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10065",
		        target : "10067",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90072",
		        name : "Planejamento estratégicoXAnálises econômicas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "116",
		        target : "10037",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90074",
		        name : "Planejamento de projetosXAnálise de valor agregado de projetos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10002",
		        target : "10005",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90075",
		        name : "Planejamento de projetosXDesenvolvimento de cronogramas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10003",
		        target : "10005",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90076",
		        name : "Negociação de moedas estrangeirasXNegociação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10022",
		        target : "10067",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90077",
		        name : "Reestruturação de passivosXDeterminação da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10046",
		        target : "10038",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc87c66652ca33e4cfc8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90079",
		        name : "Reestruturação de passivosXGestão de caixa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10048",
		        target : "10038",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfc9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90080",
		        name : "Reestruturação de passivosXNegociação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10022",
		        target : "10038",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfca",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90081",
		        name : "Precificação de títulos de renda fixaXCálculo da curva a termo de juros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10063",
		        target : "10064",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfcb",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90082",
		        name : "Reestruturação societáriaXCriação de sociedades",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10117",
		        target : "10114",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfcc",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90083",
		        name : "Relatórios para investidoresXRelatórios gerenciais",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10049",
		        target : "10051",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfcd",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90086",
		        name : "Técnicas de liderançaXCoaching",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10089",
		        target : "10093",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfce",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90087",
		        name : "Técnicas de liderançaXGestão de recursos humanos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1044",
		        target : "10093",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfcf",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90089",
		        name : "Montagem de demonstrativos financeiros x Análise de demonstrativos financeiros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10107",
		        target : "10042",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90088",
		        name : "Valor do dinheiro no tempoXCálculo de juros",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10061",
		        target : "10060",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90090",
		        name : "Definição de pessoa jurídica x criação de sociedades",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10112",
		        target : "10117",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90091",
		        name : "Princípios processuais brasileiros x Processo civil no Brasil",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10257",
		        target : "10258",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90092",
		        name : "Processo civil no Brasil x execução de sentenças",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10258",
		        target : "10259",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90093",
		        name : "Processo civil no Brasil x Recursos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10258",
		        target : "10260",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90094",
		        name : "Tributação x elisão fiscal",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1025",
		        target : "10271",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90095",
		        name : "Custo de capital x otimização da estrutura de capital",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10052",
		        target : "10046",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90096",
		        name : "Emissão de ordem de negociação x negociação em mercado",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10338",
		        target : "10062",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90097",
		        name : "Spreads e premios x arbitragem",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10195",
		        target : "10196",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfd9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90098",
		        name : "Arbitragem x estratégias de negociação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10196",
		        target : "10331",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfda",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90099",
		        name : "Abstração x criatividade",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10425",
		        target : "10382",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfdb",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90100",
		        name : "comunicação oral x narrativa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10020",
		        target : "10017",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfdc",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90102",
		        name : "pesquisa de mercado x segmentação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10073",
		        target : "10083",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfdd",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90101",
		        name : "Comunicação corporal x narrativa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10427",
		        target : "10017",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfde",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90103",
		        name : "análise de mercado x gestão de produto",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1039",
		        target : "1038",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfdf",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90104",
		        name : "Criação plano de negócios -> empreendedorismo social",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10322",
		        target : "10367",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfe0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90105",
		        name : "Criação de modelo de negócios -> criação de plano de negócios",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10030",
		        target : "10322",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfe1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90106",
		        name : "Criação de plano de negócios -> aceleração de empreendimentos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10322",
		        target : "10407",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfe2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90107",
		        name : "Análise da concorrência -> Planejamento estratégico",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10032",
		        target : "10037",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfe3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90108",
		        name : "Análise estrutural -> Planejamento estratégico",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10035",
		        target : "10037",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc88c66652ca33e4cfe4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90109",
		        name : "Análise SWOT -> Planejamento estratégico",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10417",
		        target : "10037",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfe5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90110",
		        name : "Planejamento estratégico -> Criação de estratégia corporativa",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10037",
		        target : "10036",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfe6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90112",
		        name : "análise de garantias - > gestão de garantias",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10349",
		        target : "10312",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfe7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90111",
		        name : "Criação de estratégia corporativa -> criação de plano de ação",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10036",
		        target : "10420",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfe8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90113",
		        name : "Criação de relatórios gerenciais -> criação de relatórios para investidores",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10049",
		        target : "10051",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfe9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90114",
		        name : "Contabilidade empresarial -> controladoria",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "1018",
		        target : "1033",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfea",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90115",
		        name : "Fusões e aquisições -> criação de estratégia de saída",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10047",
		        target : "10186",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfeb",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90116",
		        name : "Captação a mercado via ações -> criação de estratégia de saída",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10040",
		        target : "10186",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfec",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90117",
		        name : "Avaliação de projetos -> avaliação de opções reais",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10307",
		        target : "10044",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfed",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90118",
		        name : "Projeção financeira - > avaliação por desconto",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10352",
		        target : "10187",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfee",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90119",
		        name : "Avaliação por desconto -> avaliação de projetos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10187",
		        target : "10307",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfef",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90120",
		        name : "Análise da curva a termo -> investimentos alternativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10063",
		        target : "10176",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff0",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90121",
		        name : "Análise de títulos de renda fixa - > investimentos alternativos",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10064",
		        target : "10176",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff1",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90122",
		        name : "Avaliação de performance -> gestão de portfólio",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10184",
		        target : "10057",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff2",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90123",
		        name : "Avaliação de performance -> gestão institucional",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10184",
		        target : "10181",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff3",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90124",
		        name : "Teste de estresse -> Classificação de risco",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10341",
		        target : "10340",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff4",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90125",
		        name : "Análise de títulos de renda fixa - > classificação de risco",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10064",
		        target : "10340",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff5",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90126",
		        name : "Identificação de impactos -> criação de estratégia sustentável",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10408",
		        target : "10365",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff6",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90127",
		        name : "Criação de estratégia sustentável -> gestão sustentável",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10365",
		        target : "10013",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff7",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90128",
		        name : "Marketing de sistemas de busca -> criação de campanhas digitais",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10358",
		        target : "10316",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff8",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90129",
		        name : "Marketing de redes sociais-> criação de campanhas digitais",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10359",
		        target : "10316",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cff9",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90130",
		        name : "Dimensionamento de infraestrutura técnológica - > Planejamento de sistemas",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10399",
		        target : "10398",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cffa",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90132",
		        name : "Gestão de estoques -> otimização logística",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10401",
		        target : "10071",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cffb",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90131",
		        name : "Determinação de níveis de eficiência -> métricas de performance",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10012",
		        target : "10314",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cffc",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90133",
		        name : "Gestão de transportes -> otimização logística",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10402",
		        target : "10071",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cffd",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90134",
		        name : "Planejamento de recursos -> otimização logística",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10403",
		        target : "10071",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cffe",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90135",
		        name : "Otimização logística -> planejamento de produção global",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10071",
		        target : "10369",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc89c66652ca33e4cfff",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90136",
		        name : "Avaliação de performance -> gestão por competências",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10415",
		        target : "10416",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc8ac66652ca33e4d000",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90137",
		        name : "Criação de planos de carreiras -> criação de estratégias de atração e retenção",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10088",
		        target : "10410",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc8ac66652ca33e4d001",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90138",
		        name : "Gestão de remuneração e benefícios - > criação de estratégias de atração e retenção",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10091",
		        target : "10410",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc8ac66652ca33e4d002",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90139",
		        name : "Definição de mandatos e cargos - > definição de estrutura organizacional",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10096",
		        target : "10171",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc8ac66652ca33e4d003",
		    documento : {
		        diagrama : "habilidades",
		        type : "edges",
		        idHabilidade : "90140",
		        name : "Criação de organogramas -> Definição de estrutura organizacional",
		        descricao : "",
		        wiki : "",
		        area : "",
		        campo : "",
		        categoria : "",
		        parent : "",
		        classes : "",
		        weight : "70",
		        positionX : "1",
		        positionY : "1",
		        opacity : "0.2",
		        color : "blue",
		        shape : "ellipse",
		        width : "",
		        lineColor : "blue",
		        targetArrowColor : "",
		        targetArrowShape : "",
		        source : "10097",
		        target : "10171",
		        tags : []
		    }
		},
		
		
		{
		    _id : "57dabc8ac66652ca33e4d004",
		    documento : {
		        diagrama : "habilidades",
		        idHabilidade : "",
		        positionX : "1",
		        positionY : "1",
		        tags : []
		    }
		}
	]
	};

	$.each(jsonBase.data, function( i, element ) {
		var objJson  = 
		{
		    documento : {
		        diagrama : "habilidades",
		        type : element.documento.type,
		        idHabilidade : element.documento.idHabilidade,
		        name : element.documento.name,
		        descricao : element.documento.descricao,
		        wiki : element.documento.wiki,
		        area : element.documento.area,
		        campo : element.documento.campo,
		        categoria : element.documento.categoria,
		        parent : element.documento.parent,
		        classes : element.documento.classes,
		        weight : element.documento.weight,
		        positionX : element.documento.positionX,
		        positionY : element.documento.positionY,
		        opacity : element.documento.opacity,
		        color : element.documento.color,
		        shape : element.documento.shape,
		        width : element.documento.width,
		        lineColor : element.documento.lineColor,
		        targetArrowColor : element.documento.targetArrowColor,
		        targetArrowShape : element.documento.targetArrowShape,
		        source : element.documento.source,
		        target : element.documento.target,
		        tags: []
		    }	
		}
		$.each(element.documento.tags, function(w, tag) {
			objJson.documento.tags.push(tag);
		});
		rest_incluiHabilidades(objJson, semAcao, semAcao)
	});

};

function carregaHabilidadesTotall (){

var habilidades = 

	"1;area;;;;Acadêmica;;Conhecimentos relativos à produção científica e seus requerimentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Academia;Acadêmico;;@" +
	"2;area;;;;Administração de empresas;;Estudo da organização humana e administração de organizações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_de_empresas;Business, MBA, gestão;;@" +
	"3;area;;;;Ciências contábeis;;Estudo de regras de contabilização de transações e propriedades;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Contabilidade;Contabilidade;;@" +
	"4;area;;;;Direito;;Estudo das normas que regem as relações humanas em sociedade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito;Law, LLM, advogado;;@" +
	"5;area;;;;Economia;;Estudo das interações humanas de trocas e seus componentes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia;Economics;;@" +
	"6;area;;;;Filosofia;;Estudos sobre a consciência e condição humana, conhecimentos transcendentes à realidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Filosofia;;;@" +
	"7;area;;;;Matemática;;Estudo das relações numéricas como medidas, variações e estatísticas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica;;;@" +
	"8;area;;;;Psicologia;;Estudo do funcionamento da mente humana e seus padrões;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Psicologia;;;@" +
	"9;area;;;;Tecnologia da informação;;Conhecimentos e habilidades ligados a sistemas de informação digitais, computadores e redes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Tecnologia_da_informa%C3%A7%C3%A3o;TI, PC, Mac;;@" +
	"10;area;;;;Soft Skills;;Competências Intelectuais não técnicas, emocionais, sociais e criativas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Soft_skills;Competências emocionais,;;@" +
	"11;area;;;;Sociologia;;Estudo do comportamento e interações humanas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sociologia;;;@" +
	"12;area;;;;Idiomas;;Comunicação em idiomas estrangeiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_natural;Línguas;;@" +
	"13;area;;;;Profissional;;Habilidades profissionais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Trabalhador;trabalho;;@" +
	"100;campo;Acadêmica;;;Trabalhos acadêmicos;1;Criação de trabalhos acadêmicos de acordo com as normas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Academia;;;@" +
	"127;campo;Acadêmica;;;Métodos de ensino;1;Técnicas e métodos de ensino;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ensino;Aulas, professores;;@" +
	"128;campo;Acadêmica;;;Pesquisa;1;Técnicas e métodos de pesquisa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pesquisa;Tese, mestrado, doutorado;;@" +
	"101;campo;Administração de empresas;;;Gestão;2;Coordenação e direção das atividades da empresa basedas na interação com acionistas e stakeholders;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o;;;@" +
	"102;campo;Administração de empresas;;;Comercial;2;Execução de transações de compra e venda baseadas em processos de relacionamento, negociação e senso comercial;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Com%C3%A9rcio;;;@" +
	"103;campo;Administração de empresas;;;Empreendedorismo;2;Identificação de oportunidades, criação de modelos de negócios e implementação de novas empresas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Empreendedorismo;;;@" +
	"104;campo;Administração de empresas;;;Estratégia;2;Planejamento, execução e iteração de iniciativas com o intuito de maximizar o sucesso competitivo da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;;;@" +
	"105;campo;Administração de empresas;;;Finanças;2;Gestão dos recursos financeiros da companhia, com o objetivo da redução de seu custo, a otimização da sua aplicação e sua plena disponibilidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Finan%C3%A7as;finance, grana;;@" +
	"107;campo;Administração de empresas;;;Marketing;2;Interação com mercado para a criação de soluções e de uma marca, suas ofertas e gestão de seus desempenhos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Marketing;;;@" +
	"108;campo;Administração de empresas;;;Recursos humanos;2;Identificação, atração, retenção e desenvolvimento de pessoas para viabilizar a execução da visão da organização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_recursos_humanos;RH;;@" +
	"146;campo;Administração de empresas;;;Operações;2;Planejamento e execução de processos, determinando recursos e ferramentas necessários para a disponibilização eficiente de produtos e serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_da_produ%C3%A7%C3%A3o;operations, produção;;@" +
	"109;campo;Ciências contábeis;;;Contabilidade;3;Manutenção de registros contábeis de uma operação ou negócio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Contabilidade;Contabilidade;;@" +
	"110;campo;Direito;;;Direito civil;4;Regulação das interações e relações entre pessoas fisícas ou jurídicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_civil;;;@" +
	"111;campo;Direito;;;Direito comercial;4;Regulação das atividades empresariais e comerciais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_comercial;;;@" +
	"112;campo;Direito;;;Direito constitucional;4;Análise e interpretação das normas constitucionais que regem uma nação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_constitucional;;;@" +
	"113;campo;Direito;;;Direito tributário;4;Regras e normas que regulam a cobrança de taxas e impostos de pessoas físicas e jurídicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;Impostos, taxas;;@" +
	"114;campo;Direito;;;Direito trabalhista;4;Regulação das relações trabalhistas entre pessoas físicas e jurídicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;emprego;;@" +
	"115;campo;Direito;;;Regulações setoriais;4;Regulações específicas que regem o funcionamento de setores econômicos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"129;campo;Direito;;;Direito administrativo;4;Direito das relações entre cidadãos e o governo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_administrativo;;;@" +
	"130;campo;Direito;;;Direito econômico;4;Regulação das relações econômicas, produtivas e de circulação de bens;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_econ%C3%B4mico;;;@" +
	"131;campo;Direito;;;Direito processual;4;Conjunto de regras, instituições e suas jurisprudências, que regulam o processo jurídico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_processual;;;@" +
	"132;campo;Direito;;;Direito bancário;4;Conjunto de normas que regulam o funcionamento do mercado bancário no Brasil;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_banc%C3%A1rio;;;@" +
	"134;campo;Direito;;;Direito Internacional;4;Regulação das relações internacionais entre países e organizações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_internacional;;;@" +
	"136;campo;Direito;;;Direito penal;4;Regulação das penalidades aplicadas a infratores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;;;@" +
	"116;campo;Economia;;;Análise econômica;5;Análise econômica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia;;;@" +
	"117;campo;Economia;;;Economia comportamental;5;Análise da influência do comportamento humano nas decisões econômicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia_comportamental;;;@" +
	"137;campo;Economia;;;Pensamento economico;5;Evolução do estudo econômico e escolas de pensamento econômico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%B3digos_de_classifica%C3%A7%C3%A3o_JEL#B_-_Hist.C3.B3ria_do_pensamento_econ.C3.B3mico.2C_metodologia_e_abordagens_heterodoxas;;;@" +
	"118;campo;Filosofia;;;Ética;6;Estudo dos bons hábitos necessários à vida em comunidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/%C3%89tica;;;@" +
	"138;campo;Filosofia;;;Filosofia política;6;Estudo da necessidade de importância da política na humanidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Filosofia_pol%C3%ADtica;;;@" +
	"139;campo;Idiomas;;;Inglês;12;Comunicação na língua inglesa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;;;@" +
	"144;campo;Idiomas;;;Francês;12;Comunicação na língua francesa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;;;@" +
	"145;campo;Idiomas;;;Espanhol;12;Comunicação na língua espanhola;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;;;@" +
	"147;campo;Idiomas;;;Português;12;Comunicação na língua portuguesa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_portuguesa;;;@" +
	"119;campo;Matemática;;;Cálculo;7;Estudo das taxas de variação e crescimento de grandezas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;;;@" +
	"120;campo;Matemática;;;Estatística;7;Análise do relacionamento entre dados e sua descrição;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estat%C3%ADstica;;;@" +
	"140;campo;Matemática ;;;Álgebra;7;Manipulação de operações e equações matemáticas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/%C3%81lgebra;;;@" +
	"141;campo;Matemática ;;;Probabilidade;7;Estudo da incerteza matemática;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Probabilidade;;;@" +
	"150;campo;Matemática ;;;Matemática financeira;7;Estudo das relações matemáticas de números financeiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;;;@" +
	"121;campo;Psicologia;;;Psicologia Freudiana;8;Psicologia Freudiana;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"122;campo;Psicologia;;;Psicologia do trabalho;8;Psicologia do trabalho;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"148;campo;Psicologia;;;Psicanálise;8;Psicanálise;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Psican%C3%A1lise;;;@" +
	"142;campo;Sociologia;;;Sociologia econômica;11;Análise dos impactos dos sistemas econômicos na vida em sociedade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"143;campo;Sociologia;;;Sociologia jurídica;11;Análise dos impactos das leis e normas na vida em sociedade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"149;campo;Soft Skills;;;Habilidades sociais;10;Capacidade de interação social e de criação de relacionamentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_social;Inteligência emocional;;@" +
	"151;campo;Soft Skills;;;Pensamento crítico;10;Avaliação e reflexão lógica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pensamento_cr%C3%ADtico;;;@" +
	"152;campo;Soft Skills;;;Pensamento abstrato;10;Avaliação de observações e experiências pelos seus componentes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o;;;@" +
	"153;campo;Soft Skills;;;Comunicação;10;Transmissão e recepção de informações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o;;;@" +
	"154;campo;Soft Skills;;;Postura;10;Auto controle do comportamental para atingimento de objetivos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"123;campo;Tecnologia da informação;;;Computação geral;9;Computação geral;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"124;campo;Tecnologia da informação;;;Infra estrutura tecnológica;9;Infra estrutura tecnológica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"125;campo;Tecnologia da informação;;;Programação e Desenvolvimento;9;Programação e Desenvolvimento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"126;campo;Tecnologia da informação;;;Sistemas e plataformas;9;Sistemas e plataformas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1000;categoria;Trabalhos acadêmicos;;;Monografias;100;Monografias;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Monografia;TCC, tese, doutorado, mestrado;;@" +
	"1050;categoria;Álgebra;;;Álgebra linear;140;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1010;categoria;Análise econômica;;;Macroeconomia;116;Estudo da economia de uma região ou país;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Macroeconomia;;;@" +
	"1011;categoria;Análise econômica;;;Microeconomia;116;Estudo do comportamento econômico de indivíduos e firmas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microeconomia;;;@" +
	"1012;categoria;Análise econômica;;;Teoria do desenvolvimento econômico;116;Teoria do desenvolvimento econômico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1013;categoria;Análise econômica;;;Teoria dos jogos;116;Teoria dos jogos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1051;categoria;Análise econômica;;;Econometria;116;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1060;categoria;Análise econômica;;;Economia Internacional;116;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1014;categoria;Comercial;;;Negociações;102;Troca de informações com clientes e discussão de termos para realização de acordo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1015;categoria;Comercial;;;Relacionamento com clientes;102;Criaçãod e relacionamentos com objetivos de maximizar a eficiência comercial de longo prazo do negócio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1065;categoria;Comercial;;;Transações comerciais;102;Condução de processos comerciais do interesse à entrega do produto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1016;categoria;Computação geral;;;Utilização MS Office;123;Utilização MS Office;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1018;categoria;Contabilidade;;;Contabilidade empresarial;109;Contabilidade empresarial;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1019;categoria;Contabilidade;;;Contabilidade financeira;109;Contabilidade financeira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1020;categoria;Contabilidade;;;Contabilidade pessoal;109;Contabilidade Pessoal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1021;categoria;Direito Civil;;;Código civil;110;Código civil;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1052;categoria;Direito Civil;;;Direito da propriedade;110;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1053;categoria;Direito Civil;;;Direito da família;110;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1054;categoria;Direito Civil;;;Direito das sucessões;110;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1022;categoria;Direito Comercial;;;Contratos;111;Contratos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1024;categoria;Direito Comercial;;;Direito societário;111;Direito societário;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1055;categoria;Direito internacional;;;Direito internacional público;134;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1056;categoria;Direito internacional;;;Direito internacional privado;134;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1025;categoria;Direito tributário;;;Tributação;113;Tributação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1057;categoria;Direito tributário;;;Planejamento tributário;113;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1026;categoria;Economia comportamental;;;Finanças comportamentais;117;Finanças comportamentais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1027;categoria;Empreendedorismo;;;Inovação;103;Identificação de oportunidades e lacunas de mercado e construção de soluções para suprir esta necessidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1028;categoria;Empreendedorismo;;;Novos negócios;103;Criação de modelos de negócios e implantação de organizações para desenvolvê-los;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1029;categoria;Estratégia;;;Formulação estratégica;104;Análises do mercado, sua conjuntura competitiva, de empresas e produtos para a criação de planos e políticas de ação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#A_intelig.C3.AAncia_e_o_planejamento;;;@" +
	"1030;categoria;Estratégia;;;Decisão estratégica;104;Criação, seleção e execução de iniciativas estratégicas condicionadas às respostas competitivas observadas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia#Dire.C3.A7.C3.A3o_Estrat.C3.A9gica;;;@" +
	"1031;categoria;Ética;;;Ética Aplicada;118;Ética Aplicada;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1017;categoria;Finanças;;;Finanças bancárias;105;Controle e aplicação de recursos financeiros dentro de instituições financeiras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Banco;;;@" +
	"1032;categoria;Finanças;;;Finanças corporativas;105;Análise e otimização da estrutura de capital de uma empresa para maximização do seu valor;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Finan%C3%A7as_corporativas;;;@" +
	"1033;categoria;Finanças;;;Controladoria;105;Geração de informações financeiras para implementação de controles e realização de planejamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Controladoria;;;@" +
	"1034;categoria;Finanças;;;Investimentos;105;Avaliação e aplicação de recursos em ativos financeiros para a maximização do retorno a determinado nível de risco;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Investimento;;;@" +
	"1035;categoria;Finanças;;;Finanças pessoais;105;Organização e maximização dos recursos financeiros pessoais em função das necessidades individuais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Finan%C3%A7as_pessoais;;;@" +
	"1036;categoria;Finanças;;;Trading;105;Estruturação e execução de transações a mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;;;@" +
	"1002;categoria;Gestão;;;Gestão de projetos;101;Planejamento, implementação e controle de projetos de mudança;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ger%C3%AAncia_de_projetos;;;@" +
	"1004;categoria;Gestão;;;Governança corporativa;101;Criação de estruturas de controle e direção dos negócios pelos acionistas e condução desses mecanismos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Governan%C3%A7a_corporativa;;;@" +
	"1007;categoria;Gestão;;;Gestão sustentável;101;Interação e comunicação com stakeholders para a adaptação das atividades da empresa e criação de iniciativas alinhadas a seus interesses;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1037;categoria;Infra estrutura tecnológica;;;Implementação de sistemas;124;Implementação de sistemas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1058;categoria;Inglês;;;Inglês de negócios;139;Jargões de inglês utilizados em negócios;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1038;categoria;Marketing;;;Gestão de produto;107;Desenho e desenvolvimento de soluções alinhadas às necessidades dos consumidores, e gestão de seus atributos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1039;categoria;Marketing;;;Análise mercadológica;107;Coleta e análise de informações de mercado e de uso dos produtos e serviços da empresa para reforçar o valor da sua oferta;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1040;categoria;Marketing;;;Comunicação mercadológica;107;Criação e gestão de canais de comunicação para a transmissão de informações sobre a empresa e suas ofertas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1041;categoria;Marketing;;;Decisão mercadológica;107;Planejamento e gestão da oferta de produtos e serviços, agregando valor ao negócio com o pleno atendimento dos clientes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1061;categoria;Marketing;;;Marketing digital;107;Utilização de canais digitais para a realização de comunicações e vendas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1005;categoria;Operações;;;Gestão de operações;146;Desenvolvimento e controle de processos, visando a utilização eficiente de recursos na produção de bens e serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1062;categoria;Operações;;;Administração de sistemas;146;Dimensionamento, operação e controle de ferramentas tecnológicas para a operação eficiente de negócios;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1063;categoria;Operações;;;Logística;146;Dimensionamento, armazenamento e movimentação de recursos pela empresa, garantindo o fluxo constante e eficiente de sua operação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos;Supply chain, SCM, Gestão da cadeia de suprimentos;;@" +
	"1064;categoria;Operações;;;Técnicas de gestão operacional;146;Técnicas de controle e desenvolvimento de operações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1042;categoria;Programação e Desenvolvimento;;;Linguagens de programação;125;Linguagens de programação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1043;categoria;Psicologia do trabalho;;;Psicologia comportamental;122;Psicologia comportamental;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1046;categoria;Recursos humanos;;;Estruturação organizacional;108;Determinação das funções e criação de desenho estrutural da organização baseados no dimensionamento das suas necessidades de recursos humanos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrutura_organizacional;Organograma;;@" +
	"1045;categoria;Recursos humanos;;;Recrutamento e seleção;108;Identificação e triagem de candidatos e condução de processos seletivos para garantir a aderência dos profissionais recrutados às necessidades técnicas e culturais da organização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Provis%C3%A3o_de_recursos_humanos#Recrutamento_e_sele.C3.A7.C3.A3o;Headhunter;;@" +
	"1044;categoria;Recursos humanos;;;Atração e retenção;108;Desenvolvimento de pacotes de compensação e planos de carreira alinhados às expectativas dos funcionários e ao mercado, maximizando o capital humano da organização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Retenção de talentos, talentos, gestão de talentos;;@" +
	"1066;categoria;Recursos humanos;;;Treinamento e desenvolvimento;108;Estruturação de metas e disponibilização de recursos educacionais para colaboradores de maneira a a garantir a oferta de habilidades para a evolução da organização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1047;categoria;Regulações setoriais;;;Regulação bancária;115;Regulação bancária;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1048;categoria;Sistemas e plataformas;;;Bases de dados;126;Bases de dados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1049;categoria;Sistemas e plataformas;;;Sistemas de negociação;126;Sistemas de negociação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"1059;categoria;Sistemas e plataformas;;;Software econométrico;126;;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10000;habilidade;Acadêmica;Trabalhos acadêmicos;Monografias;Formatação de trabalhos científicos;1000;Utilização das regras da ABNT para formatação de trabalhos acadêmicos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10168;habilidade;Acadêmica;Métodos de ensino;;Criação de cursos em PBL;127;Utilização da metodologia de ensino baseada em solução de problemas e em projetos (Problem based Learning);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Projeto_de_aprendizagem;Project based learning;;@" +
	"10169;habilidade;Acadêmica;Pesquisa;;Projetos de pesquisa;128;Criação de projetos de pesquisa acadêmica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10170;habilidade;Acadêmica;Academia;Monografias;Defesa de teses;1000;Aprovação de trabalhos teóricos em banca de examinação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10022;habilidade;Administração de empresas;Comercial;Negociações;Negociação;1014;Utilização de técnicas e conceitos de negociação para maximização de resultados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Negocia%C3%A7%C3%A3o;;;@" +
	"10199;habilidade;Administração de empresas;Comercial;Negociações;Participação de leilões;1014;Participação dos diversos tipo de leilão e realização de lances para aquisição de produtos e serviços de acordo com as regras estipuladas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Leil%C3%A3o;;;@" +
	"10353;habilidade;Administração de empresas;Comercial;Transações comerciais;Realização de Road Show;1065;Condução de sequência de reuniões e encontros com potenciais investidores para a apresentação de uma oportunidade de investimento e coleta de ofertas indicativas ou firmes.;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Financial_roadshows;Road show, IPO, Structured finance, follow-on, emissão secundária, emissão primária, abertura de capital;;@" +
	"10319;habilidade;Administração de empresas;Comercial;Transações comerciais;Cotação e orçamento;1065;Informação de preço de combinações de produtos e serviços para clientes individuais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10320;habilidade;Administração de empresas;Comercial;Transações comerciais;Criação de propostas;1065;Redação de propostas comerciais, contendo seus termos e condições;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10023;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Gestão de relacionamento com clientes;1015;Manutenção de relacionamento com clientes com objetivo de maximizar vendas e capacidade de atendimento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10024;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Prospecção de mercado;1015;Pesquisa e contato com novos clientes, fornacedores e parceiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10321;habilidade;Administração de empresas;Comercial;Relacionamento com clientes;Atendimento a clientes;1015;Interação com clientes para entendimento de suas demandas e melhor forma de atendê-las com produtos e serviços ofertados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10026;habilidade;Administração de empresas;Empreendedorismo;Inovação;Design thinking;1027;Criação de soluções baseada na interação com usuários e foco em design e inovação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Design_thinking;;;@" +
	"10028;habilidade;Administração de empresas;Empreendedorismo;Inovação;Inovação em produtos e serviços;1027;Identificação de lacunas de mercados ou criação de novas soluções para problemas e transformação de oportunidades em produtos ou serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Inova%C3%A7%C3%A3o;;;@" +
	"10025;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Abertura de empresas;1028;Condução do processo burocrático de abertura de uma nova pessoa jurídica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10029;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Empreendimento com metodologia Lean Start-up;1028;Criação de novos negócios com foco na criação eficiente de produtos com base na identificação de demandas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Lean_startup;Lean;;@" +
	"10030;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Criação de modelos de negócios;1028;Desenvolvimento de modelos de negócios baseados em novos produtos, clientes e mercados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Modelo_de_neg%C3%B3cio;Business model;;@" +
	"10031;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Financiamento de novos negócios;1028;Estruturação de operações e captação de recursos para viabilizar empresas em fase inicial de operação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10322;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Criação de plano de negócios;1028;Criação de um plano de negócios contendo os objetivos, análise de mercado e as características da empresa e produto a serem criados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Plano_de_neg%C3%B3cios;BP, business plan;;@" +
	"10367;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Empreendedorismo social;1028;Criação de empresa com modelo de negócios focado na criação de benefícios sociais e não diretamente ligado à obtenção de lucro;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Empreendedorismo_social;CSR, Empresa social, setor dois e meio, setor 2.5, Inclusão;;@" +
	"10407;habilidade;Administração de empresas;Empreendedorismo;Novos negócios;Aceleração de empreendimentos;1028;Apoio a projetos e empresas para que estes possam atingir a fase de produção e comercialização de maneira mais rápida;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Aceleradora;Incubadora, angel, investidor anjo;;@" +
	"10072;habilidade;Administração de empresas;Marketing;Formulação estratégica;Análise de cadeia de valor;1029;Análise da cadeia de fornecedores e de processos produtivos para identificação de vantagens e desvantagens competitivas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10200;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise das forças de mercado;1029;Análise da distribuição de forças em um determinado mercado e mitigação dos riscos que essa distribuição apresenta;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10032;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise da concorrência;1029;Criação de relatórios de estratégias de concorrentes, determinar seus pontos fortes e fracos e posicionar empresas no mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;;;@" +
	"10033;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de end game;1029;Identificação de potenciais reações competitivas de uma decisão estratégica e adaptação a essas reações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10034;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise do ciclo de vida do produto;1029;Identificação do ponto de vida de determinado produto e de ações específicas para maximizar seu retorno;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ciclo_de_vida_do_produto;;;@" +
	"10035;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise estrutural;1029;Construir o entendimento sobre uma indústria, sua cadeia de valor, tendências e distribuição de poderes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;;;@" +
	"10364;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise de jogos;1029;Análise do comportamento de participantes de situações baseada na teoria dos jogos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;John nash, dilema do prisoneiro;;@" +
	"10037;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Planejamento estratégico;1029;Desenvolvimento de objetivos de médio e longo prazo e identificação de ações necessárias a seu atingimento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico;;;@" +
	"10417;habilidade;Administração de empresas;Estratégia;Formulação estratégica;Análise SWOT;1029;Realização de análise sobre as forças, fraquezas, oportunidades e ameaças ligadas ao negócio da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_SWOT;FOFA;;@" +
	"10036;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Construção de estratégias competitivas;1030;Definir estratégia geral ou especifica com base em dados de mercado e análises mercadológicas e estratégicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrat%C3%A9gia;;;@" +
	"10366;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Criação de estratégia global;1030;Desenho da estratégia da empresa levando em consideração os diversos países onde atua e buscando maximizar seu retorno em cada mercado, aproveitando oportunidades e mitigando riscos de cada região;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Globalização,;;@" +
	"10419;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Direção estratégica;1030;Definição do norte estratégico da empresa com missão, visão e valores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Missão, visão;;@" +
	"10420;habilidade;Administração de empresas;Estratégia;Decisão estratégica;Criação de plano de ação;1030;Listagem das ações necessárias ao atingimento dos objetivos estratégicos e determinação da ordem em que serão realizadas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10098;habilidade;Administração de empresas;Finanças;Finanças bancárias;Cálculos de LCR e NSFR - BIS III;1017;Cálculo dos índices de NSFR (Net Stable Funding Ratio) e LCR ( Liquidity Coverage Ratio);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Basileia_III;;;@" +
	"10099;habilidade;Administração de empresas;Finanças;Finanças bancárias;Divulgação de informações bancárias;1017;Criação e divulgação de informações determinadas pelas normas de divulgação de informação e transparência para investidores de mercado (CVM/ Bolsas de valor);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10100;habilidade;Administração de empresas;Finanças;Finanças bancárias;Cálculo de requerimento de capital de BIS III;1017;Determinação do índice de basiléia de um banco, a partir do cálculo do requerimento de capital por ativo ponderado por risco;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Basileia_III;;;@" +
	"10190;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de crédito PJ;1017;Avaliação do risco de não pagamento de dívidas por empresas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;;;@" +
	"10191;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de crédito PF;1017;Avaliação do risco de não pagamento de dívidas por indivíduos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cr%C3%A9dito;;;@" +
	"10192;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de riscos;1017;Análise dos diversos riscos aos quais um banco está exposto e criação de estratégias de mitigação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10193;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de liquidez;1017;Análise das projeções de necessidades e disponibilidade de caixa no curto e médio prazo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10312;habilidade;Administração de empresas;Finanças;Finanças bancárias;Gestão de garantias;1017;Avaliação e acompanhamento do valor de garantias prestadas em relação a uma dívida e tomada de ação em caso de desenquadramento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10348;habilidade;Administração de empresas;Finanças;Finanças bancárias;Definição de política de crédito;1017;Definição de variáveis a serem analisadas e valores a serem observados para a aprovação de operações de crédito;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Crédito;;@" +
	"10349;habilidade;Administração de empresas;Finanças;Finanças bancárias;Análise de garantias;1017;Análise de ativos oferecidos em garantias de operações de crédito, seu valor e instrumento jurídico utilizado para a dação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Garantia;Garantias, alienação fiduciária;;@" +
	"10049;habilidade;Administração de empresas;Finanças;Controladoria;Criação de relatórios gerenciais;1033;Criação de relatórios e demonstrativos gerenciais, de acordo com normas corporativas internas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10050;habilidade;Administração de empresas;Finanças;Controladoria;Consolidação de demonstrativos;1033;Consolidação gerencial de demonstrativos financeiros de diversas unidades de negócio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10051;habilidade;Administração de empresas;Finanças;Controladoria;Relatórios para investidores;1033;Produção de informações conforme regulação visando o atendimento a investidores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10198;habilidade;Administração de empresas;Finanças;Controladoria;Planejamento financeiro;1033;Criação de orçamentos de receitas e despesas e cálculo de necessidades de financiamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10306;habilidade;Administração de empresas;Finanças;Controladoria;Gestão de contas a pagar/ receber;1033;Acompanhamento de fluxos financeiros previstos e realizados, e tomada de ação para garantir a correta entrada e saída de recursos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10339;habilidade;Administração de empresas;Finanças;Controladoria;Criação de controles internos;1033;Desenvolvimento de normas e processos para garantir a confiabilidade das informações financeiras geradas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Controle_interno;Auditoria interna;;@" +
	"10038;habilidade;Administração de empresas;Finanças;Finanças corporativas;Reestruturação de passivos;1032;Renegociação de dívidas para readequação dos fluxos de pagamentos à geração de caixa da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;;;@" +
	"10040;habilidade;Administração de empresas;Finanças;Finanças corporativas;Captação a mercado via ações;1032;Estruturação de operações de captação de recursos por meio de venda de ações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_de_capitais;;;@" +
	"10041;habilidade;Administração de empresas;Finanças;Finanças corporativas;Captação a mercado com dívida;1032;Estruturação de operações de captação de recursos por meio de instrumentos de dívida;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_de_capitais;;;@" +
	"10042;habilidade;Administração de empresas;Finanças;Finanças corporativas;Análise de demonstrativos financeiros;1032;Análise vertical/ horizontal de balanços, DREs e fluxos de caixa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;;;@" +
	"10043;habilidade;Administração de empresas;Finanças;Finanças corporativas;Análise de índices financeiros;1032;Criação de índices a partir de informações financeiras e interpretação de seus resultados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_financeira;;;@" +
	"10044;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação de opções reais;1032;Cálculo do valor de opções reais e utilização na análise de investimentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_op%C3%A7%C3%B5es_reais;;;@" +
	"10045;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação de empresas;1032;Cálculo e análise do valor de uma empresa/ ativos/ projetos via múltiplos ou descontos de fluxo de caixa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;;;@" +
	"10046;habilidade;Administração de empresas;Finanças;Finanças corporativas;Otimização da estrutura de capital;1032;Maximização do valor de uma empresa a partir da melhor composição de sua estrutura de financiamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Custo_do_capital;;;@" +
	"10047;habilidade;Administração de empresas;Finanças;Finanças corporativas;Estruturação de fusões e aquisições;1032;Definição de estratégia e estruturação de operações de compra ou venda de negócios ou ativos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Fus%C3%A3o_%28direito%29;;;@" +
	"10048;habilidade;Administração de empresas;Finanças;Finanças corporativas;Gestão de caixa;1032;Garantir a disponibilidade de caixa, via a projeção de sua geração e de necessidades de financiamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cash_management;;;@" +
	"10052;habilidade;Administração de empresas;Finanças;Finanças corporativas;Cálculo do custo de capital;1032;Determinação do custo de capital médio ponderado de uma empresa incluindo as componentes de capital próprio - CAPM - e de terceiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Custo_do_capital;;;@" +
	"10185;habilidade;Administração de empresas;Finanças;Finanças corporativas;Medição de alavancagem;1032;Cálculo e análise das diversas medidas de alavancagem de uma empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Alavancagem_financeira;;;@" +
	"10186;habilidade;Administração de empresas;Finanças;Finanças corporativas;Criação de estratégias de saída;1032;Avaliação e seleção de modalidades de realização de investimentos em empresas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10187;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação por desconto;1032;Determinação do valor presente de ativos a partir da sua capacidade de geração de resultados futuros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;DCF, DDM, NOPLAT, EBITDA;;@" +
	"10188;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação por múltiplos;1032;Determinação do valor presente de ativos a partir da comparação de índices com empresas e transações semelhantes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Avalia%C3%A7%C3%A3o_de_empresas;P/E, Market to book, price to earnings;;@" +
	"10189;habilidade;Administração de empresas;Finanças;Finanças corporativas;Securitização;1032;Estruturação de transações e veículos de securitização de ativos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o;FIDC, CDO, CRI, CRA;;@" +
	"10307;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação de projetos;1032;Determinação do valor presente de um projeto e sua sensibilidade a variáveis ligadas a esse projeto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;NPV;;@" +
	"10350;habilidade;Administração de empresas;Finanças;Finanças corporativas;Criação de covenants financeiros;1032;Criação de cláusulas e restrições contratuais em instrumentos financeiros estruturados para garantir o comportamento corporativo alinhado aos interesses dos investidores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Covenants, finanças estruturadas;;@" +
	"10351;habilidade;Administração de empresas;Finanças;Finanças corporativas;Avaliação da geração de valor;1032;Cálculo de métricas de geração de valor e interpretação de seus resultados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;EVA, GVA, MVA;;@" +
	"10352;habilidade;Administração de empresas;Finanças;Finanças corporativas;Projeção financeira;1032;Criação de projeções de demonstrativos financeiros operacionais de uma empresa a partir de resultados passados e assumindo premissas de evolução dos números;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Proje%C3%A7%C3%A3o_financeira;Forecasting, avaliação financeira;;@" +
	"10346;habilidade;Administração de empresas;Finanças;Finanças corporativas;Financiamento de projetos;1032;Criação de estruturas de financiamento de projetos conforme sua necessidade e projeção de geração de caixa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Project_finance;Project finance;;@" +
	"10039;habilidade;Administração de empresas;Finanças;Investimentos;Análise dos mercados financeiros;1034;Análise básica do funcionamento de mercados financeiros com a visão de Risco e Retorno, Eficiência de mercado e Portfólio eficiente;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Finan%C3%A7as;Risco e retorno, eficiência de mercado;;@" +
	"10053;habilidade;Administração de empresas;Finanças;Investimentos;Análise quantitativa;1034;Determinação do preço de um ativo financeiro com base em análises estatisticas de componentes que o influenciam;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Quantitative_analyst;;;@" +
	"10054;habilidade;Administração de empresas;Finanças;Investimentos;Análise fundamentalista;1034;Determinação do preço de uma ação a partir de fluxos de caixa projetados com informações financeiras e de mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_fundamentalista;Research;;@" +
	"10055;habilidade;Administração de empresas;Finanças;Investimentos;Análise técnica;1034;Determinação do preço de um ativo financeiro a partir do preço do ativo e seu comportamento histórico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_t%C3%A9cnica;Análise gráfica;;@" +
	"10057;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de portfólio;1034;Combinação dos diversos ativos financeiros disponíveis para a construção e manutenção de portfólio alinhado aos objetivos do investidor;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_moderna_do_portf%C3%B3lio;;;@" +
	"10064;habilidade;Administração de empresas;Finanças;Investimentos;Análise de títulos de renda fixa;1034;Avaliação dos componentes e cálculo do valor justo de títulos de dívida pública ou corporativa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Renda_fixa;;;@" +
	"10063;habilidade;Administração de empresas;Finanças;Investimentos;Análise da curva a termo;1034;Cálculo da taxa de juros justa para diferentes prazos e vencimentos, utilizando FRAs e projeções de mercados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Curva_a_termo;;;@" +
	"10173;habilidade;Administração de empresas;Finanças;Investimentos;Análise de perfil de investidor;1034;Determinação de perfil de investidores a partir de seus objetivos e restrições, utilizando conceitos de gestão de portfólio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10174;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos em ativos imobiliários;1034;Análise de imóveis como investimentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10176;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos alternativos;1034;Análise de investimento em ativos não tradicionais e de alto risco;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Hedge funds;;@" +
	"10177;habilidade;Administração de empresas;Finanças;Investimentos;Investimento em ativos securitizados;1034;Avaliação e investimento em ativos financeiros decorrentes de processos de securitização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Securitiza%C3%A7%C3%A3o;FIDC, CRI, CRA;;@" +
	"10345;habilidade;Administração de empresas;Finanças;Investimentos;Investimento em empresas de capital fechado;1034;Avaliação e investimento em empresas sem ações negociadas em bolsas de valores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Private_equity;Private Equity, venture capital;;@" +
	"10182;habilidade;Administração de empresas;Finanças;Investimentos;Investimentos em seguros;1034;Avaliação de investimentos em títulos lastreados em contratos de seguros e resseguros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10178;habilidade;Administração de empresas;Finanças;Investimentos;Criação de tese de investimento;1034;Criação de estratégias de geração de valor com investimentos em ativos financeiros ou empresas de capital fechado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10179;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de fortunas;1034;Criação de portfólio personalizado com diversificação de objetivos e orientação de longo prazo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10180;habilidade;Administração de empresas;Finanças;Investimentos;Planejamento sucessório;1034;Estruturação de veículos de investimento voltados à eficiência tributária na transmissão de bens entre gerações familiares;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10181;habilidade;Administração de empresas;Finanças;Investimentos;Gestão institucional;1034;Criação de portfólio institucional, seguindo regras atuariais de retorno requerido e limitação de riscos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10183;habilidade;Administração de empresas;Finanças;Investimentos;Gestão de riscos;1034;Determinação das exposições a serem tomadas e ajuste de portfólio para balanceamento destas exposições;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10184;habilidade;Administração de empresas;Finanças;Investimentos;Avaliação de performance;1034;Utilização de benchmarks e objetivos para avaliação do desempenho do portfolio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10340;habilidade;Administração de empresas;Finanças;Investimentos;Classificação de risco;1034;Classificação de capacidade de pagamento das dívidas de determinada empresa ou instituição;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Classifica%C3%A7%C3%A3o_de_cr%C3%A9dito;Rating, nota de crédito;;@" +
	"10341;habilidade;Administração de empresas;Finanças;Investimentos;Teste de estresse;1034;Realização de simulação financeira com cenários extremamente negativos para identificação de riscos sistêmicos e limites operacionais de empresas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Stress_test_(financial);Stress testing, crise financeira, basiléia;;@" +
	"10342;habilidade;Administração de empresas;Finanças;Investimentos;Avaliação de riscos;1034;Avaliação da sensibilidade do preço de títulos de renda fixa e seus derivados a eventos como pré pagamento, inadimplência e oscilações de mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerenciamento_de_risco;Pré pagamento, crédito, mercado;;@" +
	"10343;habilidade;Administração de empresas;Finanças;Investimentos;Estruturação de fundos de investimentos;1034;Implantação de um fundo de investimentos, a partir de sua documentação, definição de responsabilidades e desenvolvimento de processos operacionais com os participantes definidos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Fundo_de_investimento;Fundo de investimentos, FIDC, Hedge fund, FII, FIA, FIP.;;@" +
	"10347;habilidade;Administração de empresas;Finanças;Trading;Conciliação de posições;1036;Verificação do saldo de contas e posições financeiras após um período de movimentacões, comparando saldos finais com as somas dos valores movimentados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Concilia%C3%A7%C3%A3o_banc%C3%A1ria;;;@" +
	"10065;habilidade;Administração de empresas;Finanças;Trading;Precificação de derivativos;1036;Cálculo do valor de derivativos como opções de compra e venda e futuros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Derivativo;;;@" +
	"10066;habilidade;Administração de empresas;Finanças;Trading;Criação de estratégias de hedge;1036;Montagem de estratégias de hedge com derivativos, alguéis de ações e seguros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cobertura_%28finan%C3%A7as%29;;;@" +
	"10062;habilidade;Administração de empresas;Finanças;Trading;Negociação em mercado organizado;1036;Compra e venda de ativos financeiros em bolsa de valores ou mercado de balcão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_financeiro;;;@" +
	"10068;habilidade;Administração de empresas;Finanças;Trading;Operação de plataformas de negociação;1036;Utilização de plataformas de negociação de ativos financeiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10194;habilidade;Administração de empresas;Finanças;Trading;Avaliação de derivativos;1036;Avaliação dos diversos tipos de derivativos (termos, futuros, opções, Swaps);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Derivativo;;;@" +
	"10197;habilidade;Administração de empresas;Finanças;Trading;Avaliação de opções;1036;Avaliação do valor de uma opção e seus componentes (letras gregas);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado_de_op%C3%A7%C3%B5es;;;@" +
	"10195;habilidade;Administração de empresas;Finanças;Trading;Cálculo de spreads e prêmios;1036;Cálculo de ágios cobrados em transações de ativos e inclusão da informação na tomada de decisão de investimentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10196;habilidade;Administração de empresas;Finanças;Trading;Arbitragem financeira;1036;Compra e venda de ativos com preço divergente de seu valor justo com a expectativa de ajuste para esse valor;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10308;habilidade;Administração de empresas;Finanças;Trading;Estruturação de produtos;1036;Combinação de ativos financeiros e derivativos com base em uma estratégia de resultado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10311;habilidade;Administração de empresas;Finanças;Trading;Estratégias de negociação;1036;Utilização de técnicas de negociação baseadas em estruturas de mercado, custos de transação e preferências estratégica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10337;habilidade;Administração de empresas;Finanças;Trading;Aluguel de ações;1036;Execução de transações de aluguel de ações e utilização em estruturas e estratégias;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Stock renting, venda a descoberto;;@" +
	"10338;habilidade;Administração de empresas;Finanças;Trading;Emissão de ordem de negociação;1036;Emissão de ordens de compra e venda, nas diversas modalidades de ordens praticadas em bolsas de valores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Order_(exchange);Stop loss, stop, realização;;@" +
	"10421;habilidade;Administração de empresas;Finanças;Finanças pessoais;Investimento em previdência privada;1035;Investimento em planos de previdência complementar para garantir fluxo de renda futuro;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Previd%C3%AAncia_privada;aposentadoria;;@" +
	"10422;habilidade;Administração de empresas;Finanças;Finanças pessoais;Orçamento doméstico;1035;Construção de plano financeiro para tomada de decisão de consumo doméstico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10423;habilidade;Administração de empresas;Finanças;Finanças pessoais;Avaliação de seguros;1035;Avaliação do risco a ser corrido em relação ao custo da contratação de um seguro para tomada de decisão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Seguro;;;@" +
	"10002;habilidade;Administração de empresas;Gestão;Gestão de projetos;Análise de valor agregado de projetos;1002;Dimensionamento dos benefícios e resultados esperados de projetos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;;;@" +
	"10003;habilidade;Administração de empresas;Gestão;Gestão de projetos;Desenvolvimento de cronogramas;1002;Criação de planos de metas e definição do tempo necessário ao cumprimento das atividades ligadas a um projeto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;;;@" +
	"10004;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gerênciamento de riscos de projetos;1002;Identificação de obstáculos e riscos de projetos e definição de ações para a mitigação dos mesmos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;;;@" +
	"10005;habilidade;Administração de empresas;Gestão;Gestão de projetos;Planejamento de projetos;1002;Desenvolvimento de planos de projetos, incluindo Escopos, objetivos, cronogramas, orçamentos e avaliação do esforço necessário.;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;;;@" +
	"10006;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gerência de projeto;1002;Gestão de todo o processo de um projeto, incluindo custos, qualidade, recursos humanos e comunicações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gerência_de_projetos;;;@" +
	"10368;habilidade;Administração de empresas;Gestão;Gestão de projetos;Criação de planos de contingência;1002;Criação de planos para mitigação de eventuais crises e situações adversas com que a empresa possa se deparar;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Plano_de_conting%C3%AAncia;Gestão de crises;;@" +
	"10172;habilidade;Administração de empresas;Gestão;Gestão de projetos;Gestão de mudanças;1002;Condução de processos de mudança organizacional, levando em consideração seu tipo e o ambiente em que ocorrerá;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_mudan%C3%A7a;;;@" +
	"10008;habilidade;Administração de empresas;Gestão;Governança corporativa;Relacionamento com órgãos reguladores;1004;Atendimento a demandas e gestão de relacionamento com órgãos regulatórios;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10009;habilidade;Administração de empresas;Gestão;Governança corporativa;Gestão de comitês;1004;Organização e condução de comitês e conselhos, criação de pautas e atas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10010;habilidade;Administração de empresas;Gestão;Governança corporativa;Definição de alçadas de decisão;1004;Estruturação e definição das alçadas de tomada de decisões corporativas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10201;habilidade;Administração de empresas;Gestão;Governança corporativa;Gestão fiduciária;1004;Gestão de empresas e criação de instrumentos para mitigação de conflitos entre acionistas e gestores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10408;habilidade;Administração de empresas;Gestão;Sustentabilidade;Identificação de impactos;1007;Identificação e mensuração dos impactos causados pela operação de uma empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Impacto_ambiental;Impacto;;@" +
	"10365;habilidade;Administração de empresas;Gestão;Sustentabilidade;Criação de estratégia sustentável;1007;Desenho de estratégia de negócios baseada nos impactos causados pela atividade no ambiente, nas comunidades que atua e na economia.;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Desenvolvimento_sustent%C3%A1vel;CSR, Sustentabilidade;;@" +
	"10371;habilidade;Administração de empresas;Gestão;Sustentabilidade;Criação de políticas de responsabilidade;1007;Definição das normas e valores a serem seguidos pela empresa e seus funcionários, visando a não infração de direitos humanos e a promoção do bem estar social;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Responsabilidade_social_corporativa;CSR, RSC;;@" +
	"10013;habilidade;Administração de empresas;Gestão;Sustentabilidade;Gestão da sustentabilidade;1007;Interagir com steakholders de uma operação para minimizar seus impactos ambientais e maximizar os econômico-sociais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sustentabilidade;;;@" +
	"10083;habilidade;Administração de empresas;Marketing;Análise mercadológica;Segmentação de mercado;1039;Criação de segmentos de clientes a partir da definição de suas características;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Segmenta%C3%A7%C3%A3o_de_mercado;;;@" +
	"10080;habilidade;Administração de empresas;Marketing;Análise mercadológica;Criação de inteligência competitiva;1039;Coleta e análise contínuas de dados sobre desempenho de produtos e concorrentes em um mercado e mapeamento das preferências dos consumidores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_competitiva;;;@" +
	"10073;habilidade;Administração de empresas;Marketing;Análise mercadológica;Pesquisa mercadológica;1039;Coleta e interpretação de dados sobre produtos e desejos dos consumidores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10423;habilidade;Administração de empresas;Marketing;Análise mercadológica;Análise do comportamento de clientes;1039;Avaliação do processo de tomada de decisão de compra dos clientes para criação de ofertas adaptadas a este comportamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Comportamento_do_consumidor;comportamento do consumidor;;@" +
	"10362;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de material promocional;1040;Criação de material de promoção da empresa e sua oferta, incentivandoa aquisição de produtos e serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;promoção, banner, panfleto, tickets, vouchers;;@" +
	"10363;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de marca;1040;Criação de uma marca alinhada aos objetivos da empresa através da definição de sua identidade visual e verbal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Branding;Branding, logo, slogan, identidade visual;;@" +
	"10085;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Relacionamento Público;1040;Comunicação com mercado e coordenação de ações de exposição de marca e de identidade corporativa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10086;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Organização de eventos;1040;Realização de eventos com programação de atividades, emissão de convites e organização do local;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10076;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Gestão de comunicação mercadológica;1040;Controle dos canais de comunicação e mensagens a serem enviadas aos clientes, fornecedores e mercado em geral;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o;;;@" +
	"10357;habilidade;Administração de empresas;Marketing;Comunicação mercadológica;Criação de campanhas publicitárias;1040;Desenvolvimento de objetivos, seleção de mídias e estruturação das ações que comporão uma campanha;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Campanha_publicit%C3%A1ria;propaganda, veiculação, mídia digital;;@" +
	"10081;habilidade;Administração de empresas;Marketing;Gestão de produto;Desenvolvimento de novos produtos;1038;Criação de soluções com atributos para suprir demandas identificadas no mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10082;habilidade;Administração de empresas;Marketing;Gestão de produto;Precificação de produtos e serviços;1038;Definição de preços com base em metodologias como mark-up ou disponibilidade a pagar dos consumidores por atributos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pre%C3%A7o;;;@" +
	"10356;habilidade;Administração de empresas;Marketing;Gestão de produto;Criação de promoções;1038;Desenvolvimento de ações de redução de preços para alavancar as vendas de produtos e serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Desconto, queima de estoque, sales;;@" +
	"10361;habilidade;Administração de empresas;Marketing;Gestão de produto;Gamificação de produtos e serviços;1038;Utilização de conceitos de jogos no desenvolvimento dos produtos e serviços da empresa, visando o aumento do engajamento e retenção de clientes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ludifica%C3%A7%C3%A3o;Gamification, ludificação;;@" +
	"10424;habilidade;Administração de empresas;Marketing;Gestão de produto;Desesenho de produtos;1038;Criação da identidade visual de produtos, seu aspecto e de sua embalagem;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Design;Design;;@" +
	"10074;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Atração e retenção de clientes;1041;Criação de estratégias para expansão de mercados e manutenção da base de clientes atuais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10077;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de canais;1041;Definição e controle dos canais a serem empregados pela empresa para entregar seus produtos e serviços;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Distribui%C3%A7%C3%A3o_%28log%C3%ADstica%29;;;@" +
	"10078;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de mix de produtos;1041;Determinação do mix de ofertas da empresa, com foco de atender a todos os segmentos selecionados e maximizar o valor dos negócios;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Produto_%28marketing%29;;;@" +
	"10360;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Criação de plano de marketing;1041;Criação de plano listando e fundamentando os objetivos mercadológicos de uma empresa e as ações necessárias para atingi-los;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Plano_de_marketing;Estratégia de marketing;;@" +
	"10317;habilidade;Administração de empresas;Marketing;Decisão mercadológica;Gestão de campanhas;1041;Acompanhamento do desempenho de campanhas e criação de ações corretivas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10316;habilidade;Administração de empresas;Marketing;Marketing digital;Criação de campanhas digitais;1061;Criação de campanhas em plataformas digitais de marketing, como Google Ads e Facewords;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10354;habilidade;Administração de empresas;Marketing;Marketing digital;Análise do uso de sites;1061;Utilização de plataformas de análise do comportamento de usuários de websites para obtenção de informações sobre conversão e identificação de ações de melhora;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Google analytics, SEO;;@" +
	"10355;habilidade;Administração de empresas;Marketing;Marketing digital;Otimização para sistema de busca;1061;Utilização de estratégias para aumento da relevância de um site como resultado de uma busca baseadas nos critérios de classificação utilizados pelos sistemas de buscas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Otimiza%C3%A7%C3%A3o_para_motores_de_busca;SEO;;@" +
	"10358;habilidade;Administração de empresas;Marketing;Marketing digital;Marketing de sistemas de busca;1061;Criação de planos de marketing baseados em aumento da relevância da oferta em sistemas de busca;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Palavra-chave_(marketing_de_pesquisa);SEM, adwords;;@" +
	"10359;habilidade;Administração de empresas;Marketing;Marketing digital;Marketing de redes sociais;1061;Criação de planos de marketing baseados em ofertas direcionadas a perfis de clientes identificados em redes sociais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Faceads;;@" +
	"10398;habilidade;Administração de empresas;Operações;Administração de sistemas;Planejamento de sistemas;1062;Planejamento do uso eficiente de recursos técnológicos garantindo o funcionamento pleno da operação da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Planejamento_estrat%C3%A9gico_de_sistemas_de_informa%C3%A7%C3%A3o;sistemas de informação, estratégia;;@" +
	"10399;habilidade;Administração de empresas;Operações;Administração de sistemas;Dimensionamento de infraestrutura técnológica;1062;Determinação da quantidade e qualidade de recursos técnológicos a serem utilizados na operação da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Banda, Projeto de rede, projeto de informática;;@" +
	"10400;habilidade;Administração de empresas;Operações;Administração de sistemas;Implantação de sistema de gestão integrado;1062;Implantação e operação de sistema integrado de informações de gestão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial;ERP;;@" +
	"10011;habilidade;Administração de empresas;Operações;Gestão de operações;Criação e revisão de processos;1005;Determinar passos e atividades necessárias para o atingimento de um objetivo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Processo;;;@" +
	"10012;habilidade;Administração de empresas;Operações;Gestão de operações;Determinação de níveis de eficiência;1005;Ajustar processos e recursos para a entrega de um nível de eficiência planejado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10015;habilidade;Administração de empresas;Operações;Gestão de operações;Planejamento operacional;1005;Determinar e otimizar a quantidade de recursos necessários a uma operação, desenhar e encadear processos envolvidos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Planejamento_operacional;;;@" +
	"10313;habilidade;Administração de empresas;Operações;Gestão de operações;Mapeamento de processos;1005;Identificação e registro do fluxo de processos envolvidos nas diversas atividades da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10314;habilidade;Administração de empresas;Operações;Gestão de operações;Métricas de performance;1005;Desenvolvimento e análise de índices representativos do desempenho de uma operação ou empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;KPI, Performance metrics, Indicadores chave de performance, métrica;;@" +
	"10315;habilidade;Administração de empresas;Operações;Gestão de operações;Terceirização de mão de obra;1005;Desenvolvimento de projetos de terceirização de processose de pessoal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10370;habilidade;Administração de empresas;Operações;Gestão de operações;Gestão de resíduos;1005;Determinação dos tipos de resíduos gerados pelos processos da empresa e da maneira mais economicamente sustentável de dispor deles;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_integrada_de_res%C3%ADduos_s%C3%B3lidos;Reciclagem, sustentabilidade, pegada de carbono, lixo;;@" +
	"10369;habilidade;Administração de empresas;Operações;Logística;Planejamento de produção global;1063;Criação de plano de produção e logística global, aproveitando benefícios e vantagens comparativas regionais para maximização da competitividade da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Mundial, otimização;;@" +
	"10071;habilidade;Administração de empresas;Operações;Logística;Otimização logística;1063;Redução dos custos e aumento da eficiência na movimentação de recursos e bens;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10401;habilidade;Administração de empresas;Operações;Logística;Gestão de estoques;1063;Determinação de níveis de estoques a serem mantidos e tamanho dos armazéns a serem utilizados para garantir a operação da empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estoque;WMS, Warehouse management;;@" +
	"10402;habilidade;Administração de empresas;Operações;Logística;Gestão de transportes;1063;Definição de rotas e carregamentos para reduzir os custos do processo de entrega de mercadorias;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_da_cadeia_de_suprimentos;;;@" +
	"10403;habilidade;Administração de empresas;Operações;Logística;Planejamento de recursos;1063;Dimensionamento da necessidade de insumos para a produção;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;ERP, Resource planning;;@" +
	"10404;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de linha de montagem;1064;Criação e implantação de processos produtivos baseados em linha de montagem;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Linha_de_produ%C3%A7%C3%A3o;Ford, assembly line, linha de produção;;@" +
	"10405;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de Kanban;1064;Criação e implantação de controle de processos produtivos utilizando Kanbans;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Kanban;Toyota;;@" +
	"10406;habilidade;Administração de empresas;Operações;Técnicas de gestão operacional;Utilização de modelo de produção JIT;1064;Criação e implantação de processos produtivos baseados na metodologia Just in Time;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Just_in_time;Just in time;;@" +
	"10087;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Gestão da folha de pagamentos;1044;Cálculo e controle de pagamentos de vencimentos, e geração de demonstrativos dos valores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Folha_de_pagamento;Holerite;;@" +
	"10088;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Criação de planos de carreiras;1044;Desenvolvimento de planos de progressão de carreira vinculados a metas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;plano de carreira;;@" +
	"10091;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Gestão de remuneração e benefícios;1044;Definição de pacotes de remuneração e benefícios por cargos a partir de estudos de mercado e interações com funcionários;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;salário;;@" +
	"10095;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Avaliação de clima interno;1044;Pesquisa e determinação da satisfação dos funcionários com o ambiente de trabalho;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Qualidade de vida, satisfação profissional;;@" +
	"10410;habilidade;Administração de empresas;Recursos humanos;Atração e retenção;Criação de estratégia de atração e retenção;1044;Criação de plano para oferta de condições mais competitivas de trabalho para maximização do capital humano;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10412;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Seleção de candidatos;1045;Divulgação de vagas, pesquisa e triagem incial de candidatos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;;;@" +
	"10090;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Realização de processos seletivos;1045;Condução de atividades de processo de seleção de pessoas, como aplicação de provas, dinâmicas de grupo e entrevistas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;;;@" +
	"10413;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Contratação;1045;Condução de processos burocráticos de contratação de funcionários;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;Contratação;;@" +
	"10414;habilidade;Administração de empresas;Recursos humanos;Recrutamento e seleção;Desligamento;1045;Condução de processos burocráticos de desligamento de funcionários;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Provisão_de_recursos_humanos;Demissão, justa causa;;@" +
	"10096;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Definição de mandatos e cargos;1046;Especificação de mandatos de cargos e funções;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrutura_organizacional;;;@" +
	"10097;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Criação de organogramas;1046;Criação de mapas de cargos e funções de uma empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrutura_organizacional;;;@" +
	"10171;habilidade;Administração de empresas;Recursos humanos;Estruturação organizacional;Definição de estrutura organizacional;1046;Definição de melhor estrutura organizacional para cada modelo e momento de negócio;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estrutura_organizacional;;;@" +
	"10089;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Coaching;1066;Acompanhamento individual de colaboradores e prestação de apoio ao seu desenvolvimento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Coaching;;;@" +
	"10092;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Treinamento de recursos humanos;1066;Identificação de necessidade e criação de programas de capacitação de funcionários;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Treinamento;;;@" +
	"10094;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Gestão de metas;1066;Definição e acompanhamento de metas de cargos e funções;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10415;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Avaliação de performance;1066;Condução de processos de avaliação do desempenho de funcionários;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10416;habilidade;Administração de empresas;Recursos humanos;Treinamento e desenvolvimento;Gestão por competências;1066;Criação de planos de desenvolvimento individual baseados na identificação de competências necessárias e a desenvolver;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_por_compet%C3%AAncias;;;@" +
	"10101;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de custos;1018;Determinação e alocação dos custos de uma empresa de acordo com normativos pré determinados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10102;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de receitas;1018;Reconhecimento e alocação das receitas de uma empresa de acordo com normas e regimes determinados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10103;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de resultados;1018;Determinação do resultado de uma empresa a partir de receitas e custos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10104;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Gestão Contábil;1018;Realização de todas as rotinas contábeis como lançamento de notas fiscais, geração de demonstrativos e controle de contas a pagar/ receber;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10105;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização fiscal brasileira;1018;Determinação de impostos a serem pagos e créditos tributários gerados por uma empresa, partindo das bases de cálculo e alíquotas estipuladas na lei brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10106;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização básica;1018;Utilização de conceitos contábeis básicos: ativo, passivo, contas T, demonstrativos contábeis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10107;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Montagem de demonstrativos financeiros;1018;Fechamento de demonstrativos financeiros de uma empresa: Balanço, DRE, Fluxo de caixa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10219;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em IFRS;1018;Realização de lançamentos contábeis de acordo com as normas internacionais de contabilidade estipuladas pelo IASB;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/International_Financial_Reporting_Standards;;;@" +
	"10220;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em US GAAP;1018;Realização de lançamentos contábeis de acordo com as normas de contabilidade geralmente aceitas nos EUA;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://en.wikipedia.org/wiki/Generally_Accepted_Accounting_Principles_(United_States);;;@" +
	"10221;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilidade em BR GAAP;1018;Realização de lançamentos contábeis de acordo com as normas geralmente aceitas no Brasil;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10222;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de itens extraordinários;1018;Contabilização e tratamento correto de lançamentos de intangíveis, provisões e demais itens não recorrentes da operação de uma empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10223;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de ativos;1018;Contabilização de itens de ativo, circulante ou permanente, de acordo com as normas internas e regulações vigentes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ativo;;;@" +
	"10224;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de estoques;1018;Contabilização de ativos operacionais e sua transformação de acordo com métodos existentes (PEPS/UEPS);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10225;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de depreciação;1018;Tratamento do valor contábil de ativos de acordo com sua utilização e com as regulações existentes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10226;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de investimentos;1018;Contabilização e consolidação de ativos permanentes de acordo com seu valor e estrutura de investimento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10227;habilidade;Ciências contábeis;Contabilidade;Contabilidade empresarial;Contabilização de fluxo de caixa;1018;Contabilização de itens de fluxo de caixa e correta determinação de seu valor, utilizando os métodos direto ou indireto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10108;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização bancária;1019;Contabilização de empresas do setor bancário, contemplando as regras específicas por produto e empresa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10109;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização de seguros;1019;Cálculo e registro de operações de seguros, suas provisões e resultados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10110;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Contabilização de operações de leasing;1019;Cálculo e registro de operações de leasing, seus resultados e tributação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10323;habilidade;Ciências contábeis;Contabilidade;Contabilidade financeira;Conciliação contábil;1019;Criação de provisões e ajustes para lançamentos com efetivação em data diferente de sua execução;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10111;habilidade;Ciências contábeis;Contabilidade;Contabilidade pessoal;Contabilização de IRPF;1020;Determinação do Imposto de Renda de Pessoa Física a ser pago ou restituído;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10228;habilidade;Ciências contábeis;Contabilidade;Contabilidade pessoal;Contabilização previdenciária;1020;Contabilização do valor e benefício tributário do investimento nas diversas modalidades de planos de previdência;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10229;habilidade;Direito;;;Análise de casos;4;Leitura de casos e análise de suas seções, fontes de informação e direcionamentos das conclusões;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10230;habilidade;Direito;;;Interpretação de textos jurídicos;4;Leitura de textos jurídicos e análise de seu conteúdo e forma;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10231;habilidade;Direito;;;Tramitação no poder judiciário;4;Conhecimento dos órgãos e instituições que compoem o poder judiciário brasileiro e direcionamento de casos de acordo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10232;habilidade;Direito;;;Utilização de jurisprudência;4;Compreensão do conceito e utilização de jurisprudências para resolução de casos com maior agilidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10233;habilidade;Direito;;;Desenvolvimento jurídico;4;Entendimento do desenvolvimento histórico das leis e contextualização das leis atuais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10234;habilidade;Direito;;;Arbitragem judicial;4;Participação de um processo como árbitro, seguindo as regras comuns ao papel;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10235;habilidade;Direito;;;Análise de direitos humanos;4;Análise de situações com base nos direitos humanos universais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direitos_humanos;;;@" +
	"10236;habilidade;Direito;;;Criação de peças jurídicas;4;Redação de documentos jurídicos utilizando a terminologia e formatos apropriados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10237;habilidade;Direito;;;Avaliação de responsabilidade;4;Determinação do grau de responsabilidade de uma parte de acordo com a legislação brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10238;habilidade;Direito;Direito administrativo;;Análise institucional;129;Análise da eficiência e do funcionamento de instituições públicas com relação a seu papel;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10239;habilidade;Direito;Direito administrativo;;Desenho institucional;129;Criação de normativos para regular o correto funcionamento de instituições públicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10324;habilidade;Direito;Direito administrativo;;Análise de políticas públicas;129;Análise do impacto de leis e normativos nas esferas a que dizem respeito;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10112;habilidade;Direito;Direito Civil;Código civil;Definição de pessoa jurídica;1021;Caracterização de uma pessoa jurídica a partir de seus objetivos e identificação dos requisitos e direitos de cada modalidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pessoa_jur%C3%ADdica;;;@" +
	"10240;habilidade;Direito;Direito civil;Direito da família;Celebração de Uniões;1053;Criação de contratos de união de indivíduos nas modalidades previstas na legislação brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;;;@" +
	"10241;habilidade;Direito;Direito civil;Direito da família;Defesa de direitos de menores;1053;Utilização das leis que envolvem crianças nas famílias para resolução de situações e garantia de direitos previstos na constituição;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;;;@" +
	"10242;habilidade;Direito;Direito civil;Direito da família;Dissolução de uniões;1053;Dissolucão de contratos de união de indivíduos nas modalidades previstas na legislação brasileira e tratamento da separação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_fam%C3%ADlia;;;@" +
	"10243;habilidade;Direito;Direito civil;Direito das sucessões;Planejamento sucessório;1054;Criação de planos para minimizar o trabalho e a taxação da transferência bens na sucessão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es;;;@" +
	"10244;habilidade;Direito;Direito civil;Direito das sucessões;Criação de testamentos;1054;Redação de documentos contendo a destinação de bens na sucessão de um indivíduo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_das_sucess%C3%B5es;;;@" +
	"10245;habilidade;Direito;Direito civil;Direito das sucessões;Processo sucessório;1054;Condução de processos de transmissão de bens para sucessores inter vivo ou causa mortis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Invent%C3%A1rio;;;@" +
	"10246;habilidade;Direito;Direito civil;Direito da propriedade;Caracterização da propriedade;1052;Análise dos direitos e deveres oriundos da propriedade de algo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;;;@" +
	"10247;habilidade;Direito;Direito civil;Direito da propriedade;Defesa da propriedade;1052;Condução de casos de defesa da propriedade com base nos normativos brasileiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;;;@" +
	"10248;habilidade;Direito;Direito civil;Direito da propriedade;Desapropriação;1052;Condução de processos de desapropriação em conforme com a legislação brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_de_propriedade;;;@" +
	"10395;habilidade;Direito;Direito Comercial;;Estruturação de parcerias;111;Definição das responsabilidades e direitos das partes em um processo de parceria corporativa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Joint venture, partnership;;@" +
	"10113;habilidade;Direito;Direito Comercial;Direito societário;Condução de processo falimentar;1024;Coordenação do processo falimentar, definição do tipo de pedido de falência;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10114;habilidade;Direito;Direito Comercial;Direito societário;Reestruturação societária;1024;Criação e revisão de contratos para a mudança da composição acionária de uma empresa, contemplando acionistas e credores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Turnaround_%28administra%C3%A7%C3%A3o%29;;;@" +
	"10115;habilidade;Direito;Direito Comercial;Direito societário;Emissão de novas ações;1024;Criação de peças jurídicas e revisão do contrato social de uma empresa para emissão de novas ações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10116;habilidade;Direito;Direito Comercial;Direito societário;Emissão de títulos de dívida;1024;Criação e revisão de contratos para a emissão de instrumentos de dívida corporativa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10117;habilidade;Direito;Direito Comercial;Direito societário;Criação de sociedades;1024;Criação de contratos sociais, acordos de acionistas e demais peças necessárias ao registro de uma Pessoa Jurídica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10118;habilidade;Direito;Direito Comercial;Direito societário;Estruturação de fundos de investimentos;1024;Criação de contratos e documentos para o registro e funcionamento de fundos de investimentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10119;habilidade;Direito;Direito Comercial;Direito societário;Estruturação de fusões e aquisições;1024;Estruturação jurídica de operação de compra e venda de empresas ou ativos corporativos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10396;habilidade;Direito;Direito Comercial;Direito societário;Estruturação de empresa de capital aberto;1024;Revisão de contratos e instrumentos constitutivos para permitir o funcionamento de uma empresa em regime de capital aberto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Empresa_de_capital_aberto;IPO, corporate finance, abertura de capital;;@" +
	"10397;habilidade;Direito;Direito Comercial;Direito societário;Internacionalização de empresas;1024;Abertura de subsidiárias e revisão de instrumentos constitutivos para permitir o funcionamento de uma empresa em países estrangeiros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;Globalização, expansão internacional;;@" +
	"10120;habilidade;Direito;Direito Comercial;Contratos;Criação de contratos bancários;1022;Desenvolvimento de contratos de serviços bancários em conforme com as leis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10249;habilidade;Direito;Direito Comercial;Contratos;Redação de contratos;1022;Criação de instrumentos jurídicos de intermediação de relacionamentos e estabelecimento de obrigações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10250;habilidade;Direito;Direito Comercial;Contratos;Padronização de contratos;1022;Redação de contratos padronizados de acordo com o tipo de relacionamento que se propõe;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10121;habilidade;Direito;Direito constitucional;;Utilização dos princípios constitucionais brasileiros;112;Aplicação dos conceitos básicos da constituição brasileira em análises jurídicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10251;habilidade;Direito;Direito econômico;;Análise econômica do direito;130;Análise do papel econômico do sistema jurídico, suas ineficiências e alavancas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/An%C3%A1lise_econ%C3%B4mica_do_direito;;;@" +
	"10252;habilidade;Direito;Direito econômico;;Criação de políticas públicas econômicas;130;Criação de políticas públicas com o intuito de fortalecer o sistema econômico do país;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10253;habilidade;Direito;Direito internacional;Direito internacional público;Análise de comunidades internacionais;1055;Análise de acordos internacionais e seus impactos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_internacional;;;@" +
	"10254;habilidade;Direito;Direito internacional;Direito internacional público;Análise de regulação internacional;1055;Observância de regulamentações internacionais na confecção de peças jurídicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10255;habilidade;Direito;Direito internacional;Direito internacional privado;Estruturação de acordos Internacionais;1056;Análise e criação de normas para composição de acordos internacionais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_internacional;;;@" +
	"10256;habilidade;Direito;Direito internacional;Direito internacional privado;Solução de controvérsias;1056;Resolução de disputas internacionais com base nas normas locais e de direito internacional;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10262;habilidade;Direito;Direito penal;;Referência à jurisprudência penal;136;Análise de casos com base na jurisprudência penal vigente;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;;;@" +
	"10263;habilidade;Direito;Direito penal;;Promotoria penal;136;Moção de processos com base em atestação de infringimento do código penal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;;;@" +
	"10264;habilidade;Direito;Direito penal;;Defesa penal;136;Condução de defesa de réus com base na desconstrução de argumentos e limitações da lei penal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;;;@" +
	"10265;habilidade;Direito;Direito penal;;Argumentação penal comparativa;136;Utilização de analogias e comparações entre sistemas jurídicos extrangeiros para avaliação de casos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_penal;;;@" +
	"10266;habilidade;Direito;Direito penal;;Tipificação de crime;136;Definição da classificação do crime de acordo com a legislação penal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10267;habilidade;Direito;Direito penal;;Atribuição de culpa;136;Definição da participação de um indivíduo em um crime;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10257;habilidade;Direito;Direito processual;;Condução de processos no Brasil;131;Conhecimento das instituições brasileiras envolvidas em processos jurídicos e suas jurisdições;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil;;;@" +
	"10258;habilidade;Direito;Direito processual;;Condução de processo civil no Brasil;131;Condução de um processo pelas instituições brasileiras de acordo com a legislação vigente;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_geral_do_processo_civil;;;@" +
	"10259;habilidade;Direito;Direito processual;;Execução de sentenças;131;Garantir o cumprimento de uma sentença decorrente de um processo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10260;habilidade;Direito;Direito processual;;Protocolação de recursos;131;Criação de recursos contra sentenças resultantes de processos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10261;habilidade;Direito;Direito processual;;Criação de estratégia processual;131;Criação de estratégias para a maximização da chance de obtenção de resultado favorável em processo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10268;habilidade;Direito;Direito trabalhista;;Negociações coletivas;114;Atuação em negociações sindicais para discussão de melhores termos dentro da legislação trabalhista brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;;;@" +
	"10269;habilidade;Direito;Direito trabalhista;;Criação de contratos de trabalho;114;Criação de contratos de trabalho nas modalidades disponíveis em conforme com a legislação trabalhista brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_do_trabalho;;;@" +
	"10122;habilidade;Direito;Direito trabalhista;;Criação de relações de trabalho no Brasil;114;Utilização dos conceitos e princípios das leis trabalhistas brasileiras em vigor na construção de relações de trabalho;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Consolida%C3%A7%C3%A3o_das_Leis_do_Trabalho;CLT;;@" +
	"10123;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos Municipais;1025;Determinação de base de cálculo e alíquotas de tributos municipais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;;;@" +
	"10124;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos Estaduais;1025;Determinação de base de cálculo e alíquotas de tributos estaduais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;;;@" +
	"10125;habilidade;Direito;Direito tributário;Tributação;Cálculo de tributos federais;1025;Determinação de base de cálculo e alíquotas de tributos federais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Direito_tribut%C3%A1rio;;;@" +
	"10270;habilidade;Direito;Direito tributário;;Debate da evolução tributária brasileira;113;Compreensão da evolução da legislação tributária brasileira;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10271;habilidade;Direito;Direito tributário;Planejamento tributário;Elisão fiscal;1057;Criação de estratégias de redução dos tributos a serem pagos de acordo com a legislação vigente;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10126;habilidade;Direito;Regulações setoriais;Regulação bancária;Divulgação de informações regulatórias;1047;Conhecimento das normas de divulgação de informação de bancos para BACEN e outros órgãos reguladores;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10209;habilidade;Economia;Análise econômica;;Análise econômica básica;116;Utilização dos conceitos básicos da economia na avaliação de situações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;PIB, Crescimento, Dívida pública;;@" +
	"10127;habilidade;Economia;Análise econômica;Macroeconomia;Análise das contas públicas;1010;Determinação da saúde financeira de uma unidade governamental a partir de suas contas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10128;habilidade;Economia;Análise econômica;Macroeconomia;Análise das políticas monetárias e fiscais;1010;Determinação de tendências econômicas a partir do conjunto de regras que regem o funcionamento do governo e do banco central;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10129;habilidade;Economia;Análise econômica;Macroeconomia;Análise macroeconômica;1010;Análise das tendências econômicas de um país ou região a partir de dados econômicos disponíveis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Macroeconomia;;;@" +
	"10202;habilidade;Economia;Análise econômica;Macroeconomia;Análise de regime cambial;1010;Análise dos impactos dos diversos tipos de regime cambial;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10203;habilidade;Economia;Análise econômica;Macroeconomia;Análise de acordos internacionais;1010;Análise do impacto de um acordo de comércio internacional;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10205;habilidade;Economia;Análise econômica;Macroeconomia;Projeções econômicas;1010;Projeção de dados economicos utilizando modelos teóricos e informações de mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10336;habilidade;Economia;Análise econômica;Macroeconomia;Análise regulatória;1010;Análise dos impactos econômicos e setoriais de legislações, estatutos e normas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10390;habilidade;Economia;Análise econômica;Macroeconomia;Análise de indicadores econômicos;1010;Análise de indicadores economicos (produção e crescimento, renda, desemprego, desigualdade, etc.) para criação de diagnóstico conjuntural;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;PIB, Gini, Sazonalidade;;@" +
	"10391;habilidade;Economia;Análise econômica;Macroeconomia;Análise de sustentabilidade econômica;1010;Avaliação dos impactos das iniciativas de desenvolvimento sustentável no desenvolvimento econômico de um país;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Desenvolvimento_sustent%C3%A1vel;sustentabilidade;;@" +
	"10392;habilidade;Economia;Análise econômica;Macroeconomia;Análise política;1010;Análise da conjuntura política de um país, identificando tendências, oportunidades e riscos para empresas e cidadãos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;risco político, revolução, eleições;;@" +
	"10393;habilidade;Economia;Análise econômica;Macroeconomia;Análise de política externa;1010;Análise das políticas e relações externas de um governo, identificando tendências e potenciais impactos decorrentes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10394;habilidade;Economia;Análise econômica;Macroeconomia;Análise política global;1010;Análise das relações entre governos e seus respectivos sistemas políticos, identificando tendências, oportunidades e riscos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;risco político, revolução, eleições;;@" +
	"10130;habilidade;Economia;Análise econômica;Microeconomia;Análise de custos e lucros;1011;Determinação do preço ótimo para maximização do resultado em função dos custos marginais de produção (teoria da firma);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_da_firma;;;@" +
	"10131;habilidade;Economia;Análise econômica;Microeconomia;Cálculos de elasticidade;1011;Determinação da sensibilidade da demanda de produtos à variação de preços e avaliação de suas causas e relações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Elasticidade_%28economia%29;;;@" +
	"10132;habilidade;Economia;Análise econômica;Microeconomia;Análise dos agregados de oferta e demanda;1011;Análise da variação de preços potencial em função da regra de equilíbrio de oferta e demanda;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_do_equil%C3%ADbrio_geral;;;@" +
	"10208;habilidade;Economia;Análise econômica;Microeconomia;Análise econômica de mercados;1011;Identificação e caracterização de mercados em termos de estrutura e competição;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Mercado;;;@" +
	"10206;habilidade;Economia;Análise econômica;Economia internacional;Análise de sistemas econômicos;1060;Análise das regras e instituições econômicas de determinado país;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia#Economia_internacional;;;@" +
	"10207;habilidade;Economia;Análise econômica;Economia internacional;Utilização de Incoterms;1060;Avaliação dos termos de uma negociação internacional e suas implicações financeiras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Incoterms;FOB;;@" +
	"10212;habilidade;Economia;Análise econômica;Econometria;Criação de modelos lineares;1051;Criação de modelos lineares de explicação de fatores econômicos por variáveis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10213;habilidade;Economia;Análise econômica;Econometria;Criação de modelos de painel;1051;Criação de modelos de explicação de fatores econômicos por variáveis dispostas em um painel balanceado ou não;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10210;habilidade;Economia;Análise econômica;Teoria do desenvolvimento econômico;Análise da formação econômica brasileira;1012;Análise do desenvolvimento econômico brasileiro a partir de sua história;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10211;habilidade;Economia;Análise econômica;Teoria do desenvolvimento econômico;Debate da história econômica;1012;Análise do desenvolvimento da ciência econômica humana;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10133;habilidade;Economia;Análise econômica;Teoria do desenvolvimento econômico;Análise de modelo de Solow;1012;Avaliação da capacidade de crescimento de uma economia a partir dos componentes de capital, mão de obra e tecnologia;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Modelo_de_Solow;;;@" +
	"10204;habilidade;Economia;Análise econômica;Teoria do desenvolvimento econômico;Análise da produtividade dos fatores;1012;Análise do potencial de crescimento econômico a partir dos componentes que o promovem;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Produtividade;;;@" +
	"10134;habilidade;Economia;Análise econômica;Teoria dos jogos;Modelagem de jogos;1013;Estruturação de situações conforme a teoria dos jogos e análise dos possíveis resultados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teoria_dos_jogos;;;@" +
	"10135;habilidade;Economia;Economia comportamental;Finanças comportamentais;Modelagem behaviorista de preços;1026;Determinação de preços de ativos com base em comportamentos de agentes de mercado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Economia_comportamental;;;@" +
	"10214;habilidade;Economia;Economia comportamental;Finanças comportamentais;Análise de viés comportamental;1026;Análise do impacto de emoções e cultura na tomada de decisão econômica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10216;habilidade;Economia;Pensamento econômico;;Análise da evolução do pensamento econômico;137;Avaliação da criação das teorias econômicas em seus contextos históricos e culturais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10217;habilidade;Economia;Pensamento econômico;;Economia clássica;137;Avaliação da economia através do instrumental clássico criado por Adam Smith;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10218;habilidade;Economia;Pensamento econômico;;Economia austríaca;137;Avaliação da economia através do instrumental desenvolvido pela escola Austríaca de pensamento econômico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10136;habilidade;Filosofia;Ética;Ética aplicada;Ética nos negócios;1031;Aplicação de valores éticos na conduta profissional;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10273;habilidade;Filosofia;Ética;Ética aplicada;Mitigação de conflito de interesses;1031;Atuação com capacidade de discernimento entre os diversos interesses presentes em uma situação e com a tomada das devidas precauções;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Conflito_de_interesses;;;@" +
	"10274;habilidade;Filosofia;Ética;Ética aplicada;Responsabilidade com terceiros;1031;Consideração pelo mercado, pelos clientes e pela instituição empregadora na tomada de decisão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10275;habilidade;Filosofia;Ética;Ética aplicada;Confidencialidade;1031;Não divulgação de informações consideradas confidenciais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10276;habilidade;Filosofia;Filosofia política;;Debate sobre o indivíduo e o estado;138;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e estado e seu relacionamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10277;habilidade;Filosofia;Filosofia política;;Debate sobre a liberdade do indivíduo;138;Construção de raciocínios com base nos conceitos filosóficos de indivíduo e liberdade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10389;habilidade;Idiomas;português;;Comunicação em Libras;147;Comunicação em Libras - língua brasileira de sinais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_brasileira_de_sinais;surdo, mudo;;@" +
	"10294;habilidade;Idiomas;Inglês;;Inglês básico;139;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;;;@" +
	"10295;habilidade;Idiomas;Inglês;;Inglês intermediário;139;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;;;@" +
	"10296;habilidade;Idiomas;Inglês;;Inglês avançado;139;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;;;@" +
	"10297;habilidade;Idiomas;Inglês;;Inglês fluente;139;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_inglesa;;;@" +
	"10298;habilidade;Idiomas;Francês;;Francês básico;144;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;;;@" +
	"10299;habilidade;Idiomas;Francês;;Francês intermediário;144;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;;;@" +
	"10300;habilidade;Idiomas;Francês;;Francês avançado;144;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;;;@" +
	"10301;habilidade;Idiomas;Francês;;Francês fluente;144;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_francesa;;;@" +
	"10302;habilidade;Idiomas;Espanhol;;Espanhol básico;145;Capacidade de transmitir ideias simples e fazer perguntas objetivas. Vocabulário de até 900 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;;;@" +
	"10303;habilidade;Idiomas;Espanhol;;Espanhol intermediário;145;Capacidade de manter uma conversa limitada, com um vocabulário de cerca de 2000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;;;@" +
	"10304;habilidade;Idiomas;Espanhol;;Espanhol avançado;145;Capacidade de se comunicar sem grandes problemas sobre questões rotineiras. Vocabulário de cerca de 4000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;;;@" +
	"10305;habilidade;Idiomas;Espanhol;;Espanhol fluente;145;Capacidade de transmitir ideias complexas e específicas. Vocabulário de mais de 8000 palavras;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_castelhana;;;@" +
	"10278;habilidade;Idiomas;Inglês;Inglês de negócios;Inglês jurídico;1058;Redação de peças jurídicas em inglês com a correta utilização dos termos e construção de lógica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10285;habilidade;Matemática;Álgebra;;Cálculo de sistemas dinâmicos;140;Cálculo do resultado de sistemas com uma componente variável de tempo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sistema_din%C3%A2mico;;;@" +
	"10286;habilidade;Matemática;Álgebra;Álgebra linear;Cálculo de sistemas lineares;1050;Cálculos e análises de conjuntos de equações lineares;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Sistema_de_equa%C3%A7%C3%B5es_lineares;;;@" +
	"10287;habilidade;Matemática;Álgebra;Álgebra linear;Análise geométrica;1050;Análise de formas geométricas com base em planos cartesianos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Geometria_anal%C3%ADtica;Geometria analítica;;@" +
	"10138;habilidade;Matemática;Cálculo;;Cálculo diferencial;119;Cálculo do resultado de operações derivadas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;;;@" +
	"10139;habilidade;Matemática;Cálculo;;Cálculo integral;119;Cálculo do resultado de operações integrais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%C3%A1lculo;;;@" +
	"10283;habilidade;Matemática;Cálculo;;Cálculo de equações diferenciais;119;Cálculo do resultado de uma equação com icógnitas em forma de derivadas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Equa%C3%A7%C3%A3o_diferencial;;;@" +
	"10284;habilidade;Matemática;Cálculo;;Determinação de relação de recorrência;119;Cálculo de termos anteriores ou seguintes de relações matemáticas a partir de regras particulares;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Rela%C3%A7%C3%A3o_de_recorr%C3%AAncia;;;@" +
	"10137;habilidade;Matemática;Estatística;;Análise estatística básica;120;Avaliação estatística básica de conjuntos de dados e sua comparação a uma distribuição normal;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estat%C3%ADstica;Princípios estatíesticos, moda, média, desvio padrão;;@" +
	"10140;habilidade;Matemática;Estatística;;Testes de hipótese;120;Realização de testes de hipótese, significância estatística, análise de resíduos e de variância;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Testes_de_hip%C3%B3teses;;;@" +
	"10279;habilidade;Matemática;Estatística;;Análise estatística;120;Realização de análises estatísticas para identificação de propriedades de conjuntos de dados, incluindo correlações com outros conjuntos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Estat%C3%ADstica_descritiva;;;@" +
	"10280;habilidade;Matemática;Estatística;;Análise exploratória de dados;120;Aplicação de técnicas de regressão e testes de hipóteses para identificação de padrões e relações estatísticas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10281;habilidade;Matemática;Estatística;;Criação de regressões;120;Identificação de relações estatísticas entre duas ou mais variáveis e representação matemática desta relação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10282;habilidade;Matemática;Estatística;;Análise de resíduos;120;Análise de dados resultantes de regressões para identificação de padrões que afetem a validade da relação estatística;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10288;habilidade;Matemática;Probabilidade;;Descrição probabilística;141;Descrição de fenômenos a partir de probabilidades matemáticas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10060;habilidade;Matemática;Matemática financeira;;Valor do dinheiro no tempo;150;Cálculo do valor do dinheiro no tempo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;;;@" +
	"10061;habilidade;Matemática;Matemática financeira;;Cálculo de juros;150;Capitalização de juros simples e juros compostos e variantes internacionais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Matem%C3%A1tica_financeira;;;@" +
	"10381;habilidade;Profissional;;;Gestão de carreira;13;Identificação de prioridades para tomada de decisão e planejamento de ações para possibilitar a evolução da carreira de acordo comos valores e interesses pessoais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Gest%C3%A3o_de_carreira;career services;;@" +
	"10428;habilidade;Profissional;;;Construção de Currículo;13;Estruturação e listagem de experiências educacionais e profissionais em documento voltado a recrutamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Curriculum_vit%C3%A6;CV, Curriculum vitae;;@" +
	"10141;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Psicologia da Liderança;1043;Aplicação dos conceitos psicológicos da Liderança;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10142;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Debate sobre trabalho e estresse;1043;Tomada de decisão com base no entendimento do impacto do trabalho e do estresse na psique humana;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10143;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Análise psicológica da autoridade;1043;Utilização dos conceitos psicológicos da autoridade e suas consequências na tomada de decisão;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10144;habilidade;Psicologia;Psicologia do trabalho;Psicologia comportamental;Aplicação do Behaviorismo aos negócios;1043;Aplicação dos conceitos de behaviorismo em situações de trabalho;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10145;habilidade;Psicologia;Psicologia Freudiana;;Análise psicológica Freudiana;121;Aplicação dos conceitos de Ego, supergo, id em análises psicológicas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10384;habilidade;Psicologia;Psicanálise;;Aplicação da livre associação;148;Aplicação de método de investigação psíquica baseado na livre exploração do paciente por tópicos que lhe façam sentido;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Livre_associa%C3%A7%C3%A3o;divã, Freud;;@" +
	"10385;habilidade;Psicologia;Psicanálise;;Investigação da psique;148;Identificaçãode desvios de personalidade e traumas a partir de técnicas investigativas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Psican%C3%A1lise;Freud;;@" +
	"10388;habilidade;Sociologia;;;Análise cultural brasileira;11;Análise dos componentes culturais brasileiros e suas interações, criando um panomara cultural do país;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Cultura_do_Brasil;Brasilianismo, tupi-guarani;;@" +
	"10289;habilidade;Sociologia;Sociologia econômica;;Debate sobre o indivíduo na sociedade;142;Análise da influência do meio no indivíduo e na construção de identidades;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10386;habilidade;Sociologia;Sociologia econômica;;Debate do neoliberalismo;142;Debate sobre o modelo economico neoliberalista e seus impactos na vida dos indivíduos e na comunidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Neoliberalismo;liberalismo;;@" +
	"10387;habilidade;Sociologia;Sociologia econômica;;Debate da cultura de consumo;142;Debate sobre os impactos da cultura do consumo na sociedade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Consumo;consumismo;;@" +
	"10290;habilidade;Sociologia;Sociologia jurídica;;Análise sociológica do direito;143;Compreensão do direito na sociedade atual e seu impacto nas dinâmicas sociais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10425;habilidade;Soft Skills;Pensamento abstrato;;Abstração;152;Exercício intelectual de avaliação de conceitos e experiências separando componentes e os avaliando independentemente;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Abstra%C3%A7%C3%A3o;;;@" +
	"10027;habilidade;Soft Skills;Pensamento abstrato;;Brainstorming;152;Geração de ideias livres sobre temas específicos e refinamento dessas em conceitos utilizáveis;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Brainstorming;;;@" +
	"10382;habilidade;Soft Skills;Pensamento abstrato;;Criatividade;152;Geração de ideias e conceitos autonomos e alternativos, ou aplicação destes de maneira não usual, buscando novas maneiras de se atingir um objetivo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Criatividade;Criação, inovação;;@" +
	"10016;habilidade;Soft Skills;Pensamento crítico;;Tomar decisões;151;Utilização de ferramentas e modelos psicológicos para apoiar a tomada de decisões;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10161;habilidade;Soft Skills;Pensamento crítico;;Interpretação de textos;151;Leitura e compreensão de textos e sua estrutura;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10165;habilidade;Soft Skills;Pensamento crítico;;Enquadramento de problemas;151;Utilização de modelos para definir problemas e procurar caminhos para sua solução;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10329;habilidade;Soft skills;Pensamento crítico;;Analisar;151;Coleta e avaliação de informações para construção de uma conclusão sobre determinado assunto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10327;habilidade;Soft skills;Pensamento crítico;;Raciocínio lógico;151;Avaliar situações utilizando conceitos de lógica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10163;habilidade;Soft Skills;Pensamento crítico;;Foco em resultado;151;Identificação e priorização das entregas agregadoras de valor;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10166;habilidade;Soft Skills;Pensamento crítico;;Execução;151;Capacidade de transformação de ideias em ação com foco na resolução de problemas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10017;habilidade;Soft Skills;Comunicação;;Narrar;153;Utilização de técnicas de narrativa em comunicações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10018;habilidade;Soft Skills;Comunicação;;Apresentação;153;Condução de apresentações utilizando ferramentas de comunicação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10409;habilidade;Soft Skills;Comunicação;;Entrevistar;153;Condução de conversa com realização de perguntas pré definidas para obtenção de informações e conhecimento de opiniões de indivíduos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Entrevista;Jornalismo, interview;;@" +
	"10160;habilidade;Soft Skills;Comunicação;;Argumentação;153;Construção de raciocínios lógicos ou emocionais com o intuito de se provar determinado ponto de vista;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10020;habilidade;Soft Skills;Comunicação;;Comunicação oral;153;Transmissão efetiva de conceitos e ideias via a utilização de melhores práticas de comunicação oral;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/L%C3%ADngua_falada;;;@" +
	"10426;habilidade;Soft Skills;Comunicação;;Comunicação escrita;153;Transmissão efetiva de conceitos e ideias via a utilização de ténicas de comunicação escrita;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Escrita;;;@" +
	"10427;habilidade;Soft Skills;Comunicação;;Comunicação corporal;153;Reforço da transmissão de informações via a utilização de gestos e expressões corporais;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Linguagem_corporal;;;@" +
	"10272;habilidade;Soft Skills;Postura;;Profissionalismo;154;Conduta pautada pelo conhecimento das normas morais, pela responsabilidade individual e pelo senso de dever;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10167;habilidade;Soft Skills;Postura;;Organização;154;Identificação de tarefas a serem realizadas e alocação de tempo e esforço de maneira estruturada e eficiente para sua realização;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10325;habilidade;Soft skills;Postura;;Empreender;154;Postura proativa de criação de soluções para problemas não estruturados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10326;habilidade;Soft skills;Postura;;Agir Proativamente;154;Antecipação de problemas e situações e tomada de ação para mitigá-los ou resolvê-los;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10328;habilidade;Soft skills;Postura;;Resiliência;154;Suportar e superar desafios até que se atinja o resultado esperado;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10383;habilidade;Soft Skills;Postura;;Tolerância;154;Aptidão em se colocar na posição de outras pessoas e aceitar diferentes pontos de vista;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Toler%C3%A2ncia;Diversidade;;@" +
	"10429;habilidade;Soft Skills;Habilidades sociais;;Empatia;149;Colocar-se no lugar de outros e entender o que eles estão sentido com o intuito de reforço do relacionamento;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Empatia;;;@" +
	"10430;habilidade;Soft Skills;Habilidades sociais;;Persuasão;149;Convencimento de pessoas através da comunicação lógica, emocional e simbólica;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Persuas%C3%A3o;;;@" +
	"10431;habilidade;Soft Skills;Habilidades sociais;;Auto-percepção;149;Se perceber e a seu impacto num ambiente ou contexto;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10014;habilidade;Soft Skills;Habilidades sociais;;Influenciar pessoas;149;Utilização de técnicas de influência em relacionamentos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10162;habilidade;Soft Skills;Habilidades sociais;;Trabalho em equipe;149;Contribuição para o desenvolvimento de uma tarefa com uma parte do trabalho e com apoio ao grupo;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10019;habilidade;Soft Skills;Habilidades sociais;;Construção de relacionamentos;149;Construção de relacionamentos profissionais baseadas em confiança, harmonia e recriprocidade;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Relacionamento;Rapport;;@" +
	"10093;habilidade;Soft Skills;Habilidades sociais;;Liderança;149;Utilização de técnicas de liderança para facilitação do atingimento de objetivos por equipes;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10379;habilidade;Soft Skills;Habilidades sociais;;Articulação política;149;Construção de grupos de interesse e afinidade para viabilização institucional de interesses;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Pol%C3%ADtica;Lobby;;@" +
	"10155;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Powerpoint avançado;1016;Utilização de Powerpoint em nível avançado - animações, gráficos com links a arquivos, slide mestre;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microsoft_Office;Apresentação;;@" +
	"10156;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Word avançado;1016;Utilização de MS Word em nível avançado - índices automáticos, objetos com links a arquivos;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microsoft_Office;Texto;;@" +
	"10157;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Excel avançado;1016;Utilização de MS Excel em nível avançado - Tabelas dinâmicas, fórmulas matriciais e gravação de macros;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microsoft_Office;Planilha;;@" +
	"10158;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Office Básico;1016;Utilização em nível básico das funcionalidades de MS Excel, powerpoint, Word e outlook;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microsoft_Office;MS Office;;@" +
	"10330;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Programação em VBA;1016;Programação em Visual Basic;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Visual_Basic_for_Applications;;;@" +
	"10374;habilidade;Tecnologia da informação;Computação geral;Utilização MS Office;Utilização de Access;1016;Utilização do MS Access para criação, manutenção e utilização da informaçãode bases de dados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Microsoft_Access;MS Office;;@" +
	"10334;habilidade;Tecnologia da informação;Computação geral;;Gestão de base de dados;123;Determinação de campos, tabelas e documentos e gestão de conteúdo de bases de dados;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Banco_de_dados;;;@" +
	"10335;habilidade;Tecnologia da informação;Computação geral;;Criação de inteligência artificial;123;Utilização de software para criação e treinamento de algoritmos e redes neurais.;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial;;;@" +
	"10375;habilidade;Tecnologia da informação;Computação geral;;Criação de formulários;123;Estruturação e desenho de formulários para captura de informações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Formul%C3%A1rio;Pesquisa, form;;@" +
	"10147;habilidade;Tecnologia da informação;Infra estrutura tecnológica;Implementação de sistemas;Estruturação de databases em SQL;1037;Desenho e implementação de databases em SQL;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/SQL;;;@" +
	"10293;habilidade;Tecnologia da informação;Programação e Desenvolvimento;;Programação básica;125;Conhecimento sobre a lógica da programação, recursos básicos e limitações da solução de problemas via programação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_de_computadores;;;@" +
	"10377;habilidade;Tecnologia da informação;Programação e Desenvolvimento;;Criação de arquitetura de sistemas;125;Definição e documentação de componentes e relacionamentos de um software;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Arquitetura_de_software;Arquitetura de sotfware;;@" +
	"10378;habilidade;Tecnologia da informação;Programação e Desenvolvimento;;Realização de testes de performance;125;Estruturação e realização de teste da velocidade de processamento de dados de um programa;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Teste_de_desempenho;Performance test, Teste de desempenho;;@" +
	"10148;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em Json;1042;Programação em Json em nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/JSON;Java script object notation;;@" +
	"10149;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em Ruby on rails;1042;Programação em Ruby on Rails de nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Ruby_on_Rails;;;@" +
	"10150;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em C++;1042;Programação em C+ de nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/C%2B%2B;;;@" +
	"10331;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em Python;1042;Programação em Python em nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Python;;;@" +
	"10332;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em Javascript;1042;Programação em Javascript em nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/JavaScript;;;@" +
	"10333;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Programação em Unity;1042;Programação em unity em nível básico;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Unity;;;@" +
	"10376;habilidade;Tecnologia da informação;Programação e Desenvolvimento;Linguagens de programação;Desenvolvimento baseado em ASP;1042;Utilização das bibliotecas baseadas em ASP para desenvolvimento de software;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/ASP;Active server pages;;@" +
	"10146;habilidade;Tecnologia da informação;Sistemas e plataformas;Bases de dados;Construção de consultas em SQL;1048;Programação de rotinas para consultas a dados em bases de dados SQL;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/SQL;;;@" +
	"10151;habilidade;Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;Uso de homebroker;1049;Utilização de plataformas de negociação de ações (homebrokers);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/Home_Broker;;;@" +
	"10152;habilidade;Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;Utilização de terminal Bloomberg;1049;Utilização da plataforma e terminais Bloomberg de informações e negociação;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10153;habilidade;Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;Consulta a sistemas de informação;1049;Utilização fluente de sistemas de informação de mercado (ex: Factiva);blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10154;habilidade;Tecnologia da informação;Sistemas e plataformas;Sistemas de negociação;Utilização de Thomson One;1049;Utilização da plataforma Thomson de informações;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;;;;@" +
	"10291;habilidade;Tecnologia da informação;Sistemas e plataformas;Software econométrico;Utilização de Matlab;1059;Utilização do Eviews para a realização de análises econométricas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/MATLAB;;;@" +
	"10292;habilidade;Tecnologia da informação;Sistemas e plataformas;Software econométrico;Utilização de Eviews;1059;Utilização do Matlab para a realização de análises econométricas;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/EViews;;;@" +
	"10372;habilidade;Tecnologia da informação;Sistemas e plataformas;Bases de dados;Construção de bases de dados em SQL;1048;Estruturação e população de bases de dados utilizando a linguagem SQL;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/SQL;DB, Database, Structured Query language;;@" +
	"10373;habilidade;Tecnologia da informação;Sistemas e plataformas;Bases de dados;Construção de bases de dados em MongoDB;1048;Estruturação e população de bases de dados utilizando MongoDB;blue;habilidades;blue;0.2;;;ellipse;;;;;nodes;70;;https://pt.wikipedia.org/wiki/MongoDB;DB, Database, Humongous DB;;@" +
	"90000;;;;;ApresentaçõesXComunicação;;;blue;habilidades;blue;0.2;;;ellipse;10020;10018;;;edges;70;;;;;@" +
	"90001;;;;;Análise de índices financeirosXAnálise de demonstrativos financeiros;;;blue;habilidades;blue;0.2;;;ellipse;10042;10043;;;edges;70;;;;;@" +
	"90002;;;;;Análise das contas públicasXAnálise macro econômica;;;blue;habilidades;blue;0.2;;;ellipse;10129;10127;;;edges;70;;;;;@" +
	"90004;;;;;Análise fundamentaistaXAvaliação de empresas;;;blue;habilidades;blue;0.2;;;ellipse;10045;10054;;;edges;70;;;;;@" +
	"90005;;;;;Análise fundamentaistaXPrecificação de títulos de renda fixa;;;blue;habilidades;blue;0.2;;;ellipse;10064;10054;;;edges;70;;;;;@" +
	"90006;;;;;Análise das políticas monetárias e fiscaisXAnálise macro econômica;;;blue;habilidades;blue;0.2;;;ellipse;10129;10128;;;edges;70;;;;;@" +
	"90007;;;;;Avaliação de opções reaisXPrecificação de derivativos;;;blue;habilidades;blue;0.2;;;ellipse;10065;10044;;;edges;70;;;;;@" +
	"90009;;;;;Basiléia - Cálculos de requerimento de capital XContabilização bancária;;;blue;habilidades;blue;0.2;;;ellipse;10108;10100;;;edges;70;;;;;@" +
	"90011;;;;;Basiléia - Cálculos de liquidez e estabilidade de captaçãoXContabilização bancária;;;blue;habilidades;blue;0.2;;;ellipse;10108;10098;;;edges;70;;;;;@" +
	"90012;;;;;Curva a termo de jurosXCálculo de juros;;;blue;habilidades;blue;0.2;;;ellipse;10061;10063;;;edges;70;;;;;@" +
	"90013;;;;;Captação a mercado de dívidaXDeterminação da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10046;10041;;;edges;70;;;;;@" +
	"90014;;;;;Captação a mercado via açõesXDeterminação da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10046;10040;;;edges;70;;;;;@" +
	"90015;;;;;Captação a mercado via açõesXAvaliação de empresas;;;blue;habilidades;blue;0.2;;;ellipse;10045;10040;;;edges;70;;;;;@" +
	"90016;;;;;Construção de estratégias competitivasXAnálises econômicas;;;blue;habilidades;blue;0.2;;;ellipse;116;10036;;;edges;70;;;;;@" +
	"90017;;;;;Análises estratégicas x decisão estratégica;;;blue;habilidades;blue;0.2;;;ellipse;1029;1030;;;edges;70;;;;;@" +
	"90019;;;;;Contabilização de custosXPrincípios de contabilidade;;;blue;habilidades;blue;0.2;;;ellipse;10106;10101;;;edges;70;;;;;@" +
	"90020;;;;;Contabilização bancáriaXContabilização de resultados;;;blue;habilidades;blue;0.2;;;ellipse;10103;10108;;;edges;70;;;;;@" +
	"90021;;;;;Consolidação das Leis do trabalhoXprincípios constitucionais do direito;;;blue;habilidades;blue;0.2;;;ellipse;10121;10122;;;edges;70;;;;;@" +
	"90023;;;;;Contabilização de IRPFXPrincípios de contabilidade;;;blue;habilidades;blue;0.2;;;ellipse;10106;10111;;;edges;70;;;;;@" +
	"90024;;;;;Contabilização de receitasXPrincípios de contabilidade;;;blue;habilidades;blue;0.2;;;ellipse;10106;10102;;;edges;70;;;;;@" +
	"90025;;;;;Contabilização bancáriaXContabilização fiscal;;;blue;habilidades;blue;0.2;;;ellipse;10105;10108;;;edges;70;;;;;@" +
	"90026;;;;;Contabilização de operações de leasingXContabilização de receitas;;;blue;habilidades;blue;0.2;;;ellipse;10102;10110;;;edges;70;;;;;@" +
	"90027;;;;;Contabilização fiscalXContabilização de receitas;;;blue;habilidades;blue;0.2;;;ellipse;10102;10105;;;edges;70;;;;;@" +
	"90028;;;;;Contabilização fiscalXContabilização de custos;;;blue;habilidades;blue;0.2;;;ellipse;10101;10105;;;edges;70;;;;;@" +
	"90029;;;;;Contratação de funcionáriosXNegociação;;;blue;habilidades;blue;0.2;;;ellipse;10022;10090;;;edges;70;;;;;@" +
	"90030;;;;;Criação de estratégia competitivaXAnálise da concorrência;;;blue;habilidades;blue;0.2;;;ellipse;10032;10075;;;edges;70;;;;;@" +
	"90031;;;;;Criação de estratégias de hedgeXPrecificação de derivativos;;;blue;habilidades;blue;0.2;;;ellipse;10065;10066;;;edges;70;;;;;@" +
	"90032;;;;;Contabilização de resultadosXContabilização de custos;;;blue;habilidades;blue;0.2;;;ellipse;10101;10103;;;edges;70;;;;;@" +
	"90033;;;;;Criação de estratégia competitivaXSegmentação de mercado;;;blue;habilidades;blue;0.2;;;ellipse;10083;10075;;;edges;70;;;;;@" +
	"90034;;;;;Criação de estratégias de Recursos humanosXGestão de remuneração e benefícios;;;blue;habilidades;blue;0.2;;;ellipse;10091;10088;;;edges;70;;;;;@" +
	"90035;;;;;Criação de negócio no modelo Lean Start-upXCriação de novos modelos de negócios;;;blue;habilidades;blue;0.2;;;ellipse;10030;10029;;;edges;70;;;;;@" +
	"90036;;;;;Desenvolvimento de novos produtosXSegmentação de mercado;;;blue;habilidades;blue;0.2;;;ellipse;10083;10081;;;edges;70;;;;;@" +
	"90037;;;;;Criação de estratégias de Recursos humanosXTreinamento de recursos humanos;;;blue;habilidades;blue;0.2;;;ellipse;10092;10088;;;edges;70;;;;;@" +
	"90038;;;;;Definição de pessoa jurídicaXprincípios constitucionais do direito;;;blue;habilidades;blue;0.2;;;ellipse;10121;10112;;;edges;70;;;;;@" +
	"90039;;;;;Desenvolvimento de novos produtosXPesquisa mercadológica;;;blue;habilidades;blue;0.2;;;ellipse;10073;10081;;;edges;70;;;;;@" +
	"90040;;;;;Gerência de projetoXPlanejamento de projetos;;;blue;habilidades;blue;0.2;;;ellipse;10005;10006;;;edges;70;;;;;@" +
	"90041;;;;;Design thinkingXBrainstorming;;;blue;habilidades;blue;0.2;;;ellipse;10027;10026;;;edges;70;;;;;@" +
	"90042;;;;;Determinação de níveis de eficiênciaXCriação e revisão de processos;;;blue;habilidades;blue;0.2;;;ellipse;10011;10012;;;edges;70;;;;;@" +
	"90043;;;;;Expertise MS PowerpointXIntrodução ao pacote office;;;blue;habilidades;blue;0.2;;;ellipse;10158;10155;;;edges;70;;;;;@" +
	"90044;;;;;Fusões e aquisiçõesXDeterminação da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10046;10047;;;edges;70;;;;;@" +
	"90045;;;;;Determinação de níveis de eficiênciaXPlanejamento operacional;;;blue;habilidades;blue;0.2;;;ellipse;10015;10012;;;edges;70;;;;;@" +
	"90046;;;;;Fusões e aquisiçõesXNegociação;;;blue;habilidades;blue;0.2;;;ellipse;10022;10047;;;edges;70;;;;;@" +
	"90048;;;;;Expertise MS WordXIntrodução ao pacote office;;;blue;habilidades;blue;0.2;;;ellipse;10158;10156;;;edges;70;;;;;@" +
	"90049;;;;;Fusões e aquisiçõesXAvaliação de empresas;;;blue;habilidades;blue;0.2;;;ellipse;10045;10047;;;edges;70;;;;;@" +
	"90050;;;;;Gerência de projetoXGerênciamento de riscos de projetos;;;blue;habilidades;blue;0.2;;;ellipse;10004;10006;;;edges;70;;;;;@" +
	"90051;;;;;Gestão ContábilXPrincípios de contabilidade;;;blue;habilidades;blue;0.2;;;ellipse;10106;10104;;;edges;70;;;;;@" +
	"90052;;;;;Criação de negócio no modelo Lean Start-upXInovação em produtos e serviços;;;blue;habilidades;blue;0.2;;;ellipse;10028;10029;;;edges;70;;;;;@" +
	"90056;;;;;Gestão de produtosXPrecificação de produtos e serviços;;;blue;habilidades;blue;0.2;;;ellipse;10082;10078;;;edges;70;;;;;@" +
	"90057;;;;;Expertise MS ExcelXIntrodução ao pacote office;;;blue;habilidades;blue;0.2;;;ellipse;10158;10157;;;edges;70;;;;;@" +
	"90058;;;;;Financiamento de novos negóciosXdeterminação da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10046;10031;;;edges;70;;;;;@" +
	"90059;;;;;Gestão de produtosXAnálise da concorrência;;;blue;habilidades;blue;0.2;;;ellipse;10032;10078;;;edges;70;;;;;@" +
	"90060;;;;;Gestão de produtosXDesenvolvimento de novos produtos;;;blue;habilidades;blue;0.2;;;ellipse;10081;10078;;;edges;70;;;;;@" +
	"90061;;;;;Gestão de caixaXAnálise de demonstrativos financeiros;;;blue;habilidades;blue;0.2;;;ellipse;10042;10048;;;edges;70;;;;;@" +
	"90062;;;;;Materiais institucionaisXUtilização MS Office;;;blue;habilidades;blue;0.2;;;ellipse;1016;10084;;;edges;70;;;;;@" +
	"90065;;;;;Modelagem behaviorista de preçosXPrecificação de títulos de renda fixa;;;blue;habilidades;blue;0.2;;;ellipse;10064;10135;;;edges;70;;;;;@" +
	"90066;;;;;Montagem de demonstrativos financeirosXPrincípios de contabilidade;;;blue;habilidades;blue;0.2;;;ellipse;10106;10107;;;edges;70;;;;;@" +
	"90069;;;;;Negociação de jurosXPrecificação de derivativos;;;blue;habilidades;blue;0.2;;;ellipse;10065;10062;;;edges;70;;;;;@" +
	"90070;;;;;Negociação de jurosXCálculo da curva a termo de juros;;;blue;habilidades;blue;0.2;;;ellipse;10063;10062;;;edges;70;;;;;@" +
	"90071;;;;;Negociação de moedas estrangeirasXPrecificação de derivativos;;;blue;habilidades;blue;0.2;;;ellipse;10065;10067;;;edges;70;;;;;@" +
	"90072;;;;;Planejamento estratégicoXAnálises econômicas;;;blue;habilidades;blue;0.2;;;ellipse;116;10037;;;edges;70;;;;;@" +
	"90074;;;;;Planejamento de projetosXAnálise de valor agregado de projetos;;;blue;habilidades;blue;0.2;;;ellipse;10002;10005;;;edges;70;;;;;@" +
	"90075;;;;;Planejamento de projetosXDesenvolvimento de cronogramas;;;blue;habilidades;blue;0.2;;;ellipse;10003;10005;;;edges;70;;;;;@" +
	"90076;;;;;Negociação de moedas estrangeirasXNegociação;;;blue;habilidades;blue;0.2;;;ellipse;10022;10067;;;edges;70;;;;;@" +
	"90077;;;;;Reestruturação de passivosXDeterminação da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10046;10038;;;edges;70;;;;;@" +
	"90079;;;;;Reestruturação de passivosXGestão de caixa;;;blue;habilidades;blue;0.2;;;ellipse;10048;10038;;;edges;70;;;;;@" +
	"90080;;;;;Reestruturação de passivosXNegociação;;;blue;habilidades;blue;0.2;;;ellipse;10022;10038;;;edges;70;;;;;@" +
	"90081;;;;;Precificação de títulos de renda fixaXCálculo da curva a termo de juros;;;blue;habilidades;blue;0.2;;;ellipse;10063;10064;;;edges;70;;;;;@" +
	"90082;;;;;Reestruturação societáriaXCriação de sociedades;;;blue;habilidades;blue;0.2;;;ellipse;10117;10114;;;edges;70;;;;;@" +
	"90083;;;;;Relatórios para investidoresXRelatórios gerenciais;;;blue;habilidades;blue;0.2;;;ellipse;10049;10051;;;edges;70;;;;;@" +
	"90086;;;;;Técnicas de liderançaXCoaching;;;blue;habilidades;blue;0.2;;;ellipse;10089;10093;;;edges;70;;;;;@" +
	"90087;;;;;Técnicas de liderançaXGestão de recursos humanos;;;blue;habilidades;blue;0.2;;;ellipse;1044;10093;;;edges;70;;;;;@" +
	"90088;;;;;Valor do dinheiro no tempoXCálculo de juros;;;blue;habilidades;blue;0.2;;;ellipse;10061;10060;;;edges;70;;;;;@" +
	"90089;;;;;Montagem de demonstrativos financeiros x Análise de demonstrativos financeiros;;;blue;habilidades;blue;0.2;;;ellipse;10107;10042;;;edges;70;;;;;@" +
	"90090;;;;;Definição de pessoa jurídica x criação de sociedades;;;blue;habilidades;blue;0.2;;;ellipse;10112;10117;;;edges;70;;;;;@" +
	"90091;;;;;Princípios processuais brasileiros x Processo civil no Brasil;;;blue;habilidades;blue;0.2;;;ellipse;10257;10258;;;edges;70;;;;;@" +
	"90092;;;;;Processo civil no Brasil x execução de sentenças;;;blue;habilidades;blue;0.2;;;ellipse;10258;10259;;;edges;70;;;;;@" +
	"90093;;;;;Processo civil no Brasil x Recursos;;;blue;habilidades;blue;0.2;;;ellipse;10258;10260;;;edges;70;;;;;@" +
	"90094;;;;;Tributação x elisão fiscal;;;blue;habilidades;blue;0.2;;;ellipse;1025;10271;;;edges;70;;;;;@" +
	"90095;;;;;Custo de capital x otimização da estrutura de capital;;;blue;habilidades;blue;0.2;;;ellipse;10052;10046;;;edges;70;;;;;@" +
	"90096;;;;;Emissão de ordem de negociação x negociação em mercado;;;blue;habilidades;blue;0.2;;;ellipse;10338;10062;;;edges;70;;;;;@" +
	"90097;;;;;Spreads e premios x arbitragem;;;blue;habilidades;blue;0.2;;;ellipse;10195;10196;;;edges;70;;;;;@" +
	"90098;;;;;Arbitragem x estratégias de negociação;;;blue;habilidades;blue;0.2;;;ellipse;10196;10331;;;edges;70;;;;;@" +
	"90099;;;;;Abstração x criatividade;;;blue;habilidades;blue;0.2;;;ellipse;10425;10382;;;edges;70;;;;;@" +
	"90100;;;;;comunicação oral x narrativa;;;blue;habilidades;blue;0.2;;;ellipse;10020;10017;;;edges;70;;;;;@" +
	"90101;;;;;Comunicação corporal x narrativa;;;blue;habilidades;blue;0.2;;;ellipse;10427;10017;;;edges;70;;;;;@" +
	"90102;;;;;pesquisa de mercado x segmentação;;;blue;habilidades;blue;0.2;;;ellipse;10073;10083;;;edges;70;;;;;@" +
	"90103;;;;;análise de mercado x gestão de produto;;;blue;habilidades;blue;0.2;;;ellipse;1039;1038;;;edges;70;;;;;@" +
	"90104;;;;;Criação plano de negócios -> empreendedorismo social;;;blue;habilidades;blue;0.2;;;ellipse;10322;10367;;;edges;70;;;;;@" +
	"90105;;;;;Criação de modelo de negócios -> criação de plano de negócios;;;blue;habilidades;blue;0.2;;;ellipse;10030;10322;;;edges;70;;;;;@" +
	"90106;;;;;Criação de plano de negócios -> aceleração de empreendimentos;;;blue;habilidades;blue;0.2;;;ellipse;10322;10407;;;edges;70;;;;;@" +
	"90107;;;;;Análise da concorrência -> Planejamento estratégico;;;blue;habilidades;blue;0.2;;;ellipse;10032;10037;;;edges;70;;;;;@" +
	"90108;;;;;Análise estrutural -> Planejamento estratégico;;;blue;habilidades;blue;0.2;;;ellipse;10035;10037;;;edges;70;;;;;@" +
	"90109;;;;;Análise SWOT -> Planejamento estratégico;;;blue;habilidades;blue;0.2;;;ellipse;10417;10037;;;edges;70;;;;;@" +
	"90110;;;;;Planejamento estratégico -> Criação de estratégia corporativa;;;blue;habilidades;blue;0.2;;;ellipse;10037;10036;;;edges;70;;;;;@" +
	"90111;;;;;Criação de estratégia corporativa -> criação de plano de ação;;;blue;habilidades;blue;0.2;;;ellipse;10036;10420;;;edges;70;;;;;@" +
	"90112;;;;;análise de garantias - > gestão de garantias;;;blue;habilidades;blue;0.2;;;ellipse;10349;10312;;;edges;70;;;;;@" +
	"90113;;;;;Criação de relatórios gerenciais -> criação de relatórios para investidores;;;blue;habilidades;blue;0.2;;;ellipse;10049;10051;;;edges;70;;;;;@" +
	"90114;;;;;Contabilidade empresarial -> controladoria;;;blue;habilidades;blue;0.2;;;ellipse;1018;1033;;;edges;70;;;;;@" +
	"90115;;;;;Fusões e aquisições -> criação de estratégia de saída;;;blue;habilidades;blue;0.2;;;ellipse;10047;10186;;;edges;70;;;;;@" +
	"90116;;;;;Captação a mercado via ações -> criação de estratégia de saída;;;blue;habilidades;blue;0.2;;;ellipse;10040;10186;;;edges;70;;;;;@" +
	"90117;;;;;Avaliação de projetos -> avaliação de opções reais;;;blue;habilidades;blue;0.2;;;ellipse;10307;10044;;;edges;70;;;;;@" +
	"90118;;;;;Projeção financeira - > avaliação por desconto;;;blue;habilidades;blue;0.2;;;ellipse;10352;10187;;;edges;70;;;;;@" +
	"90119;;;;;Avaliação por desconto -> avaliação de projetos;;;blue;habilidades;blue;0.2;;;ellipse;10187;10307;;;edges;70;;;;;@" +
	"90120;;;;;Análise da curva a termo -> investimentos alternativos;;;blue;habilidades;blue;0.2;;;ellipse;10063;10176;;;edges;70;;;;;@" +
	"90121;;;;;Análise de títulos de renda fixa - > investimentos alternativos;;;blue;habilidades;blue;0.2;;;ellipse;10064;10176;;;edges;70;;;;;@" +
	"90122;;;;;Avaliação de performance -> gestão de portfólio;;;blue;habilidades;blue;0.2;;;ellipse;10184;10057;;;edges;70;;;;;@" +
	"90123;;;;;Avaliação de performance -> gestão institucional;;;blue;habilidades;blue;0.2;;;ellipse;10184;10181;;;edges;70;;;;;@" +
	"90124;;;;;Teste de estresse -> Classificação de risco;;;blue;habilidades;blue;0.2;;;ellipse;10341;10340;;;edges;70;;;;;@" +
	"90125;;;;;Análise de títulos de renda fixa - > classificação de risco;;;blue;habilidades;blue;0.2;;;ellipse;10064;10340;;;edges;70;;;;;@" +
	"90126;;;;;Identificação de impactos -> criação de estratégia sustentável;;;blue;habilidades;blue;0.2;;;ellipse;10408;10365;;;edges;70;;;;;@" +
	"90127;;;;;Criação de estratégia sustentável -> gestão sustentável;;;blue;habilidades;blue;0.2;;;ellipse;10365;10013;;;edges;70;;;;;@" +
	"90128;;;;;Marketing de sistemas de busca -> criação de campanhas digitais;;;blue;habilidades;blue;0.2;;;ellipse;10358;10316;;;edges;70;;;;;@" +
	"90129;;;;;Marketing de redes sociais-> criação de campanhas digitais;;;blue;habilidades;blue;0.2;;;ellipse;10359;10316;;;edges;70;;;;;@" +
	"90130;;;;;Dimensionamento de infraestrutura técnológica - > Planejamento de sistemas;;;blue;habilidades;blue;0.2;;;ellipse;10399;10398;;;edges;70;;;;;@" +
	"90131;;;;;Determinação de níveis de eficiência -> métricas de performance;;;blue;habilidades;blue;0.2;;;ellipse;10012;10314;;;edges;70;;;;;@" +
	"90132;;;;;Gestão de estoques -> otimização logística;;;blue;habilidades;blue;0.2;;;ellipse;10401;10071;;;edges;70;;;;;@" +
	"90133;;;;;Gestão de transportes -> otimização logística;;;blue;habilidades;blue;0.2;;;ellipse;10402;10071;;;edges;70;;;;;@" +
	"90134;;;;;Planejamento de recursos -> otimização logística;;;blue;habilidades;blue;0.2;;;ellipse;10403;10071;;;edges;70;;;;;@" +
	"90135;;;;;Otimização logística -> planejamento de produção global;;;blue;habilidades;blue;0.2;;;ellipse;10071;10369;;;edges;70;;;;;@" +
	"90136;;;;;Avaliação de performance -> gestão por competências;;;blue;habilidades;blue;0.2;;;ellipse;10415;10416;;;edges;70;;;;;@" +
	"90137;;;;;Criação de planos de carreiras -> criação de estratégias de atração e retenção;;;blue;habilidades;blue;0.2;;;ellipse;10088;10410;;;edges;70;;;;;@" +
	"90138;;;;;Gestão de remuneração e benefícios - > criação de estratégias de atração e retenção;;;blue;habilidades;blue;0.2;;;ellipse;10091;10410;;;edges;70;;;;;@" +
	"90139;;;;;Definição de mandatos e cargos - > definição de estrutura organizacional;;;blue;habilidades;blue;0.2;;;ellipse;10096;10171;;;edges;70;;;;;@" +
	"90140;;;;;Criação de organogramas -> Definição de estrutura organizacional;;;blue;habilidades;blue;0.2;;;ellipse;10097;10171;;;edges;70;;;;;@";



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
			        weight : arrayItensHabilidade[20],
			        positionX : "1",
			        positionY : "1",
			        opacity : arrayItensHabilidade[11],
			        color : arrayItensHabilidade[8],
			        shape : arrayItensHabilidade[14],
			        width : arrayItensHabilidade[21],
			        lineColor : arrayItensHabilidade[10],
			        targetArrowColor : arrayItensHabilidade[17],
			        targetArrowShape : arrayItensHabilidade[18],
			        source : arrayItensHabilidade[15],
			        target : arrayItensHabilidade[16],
			        tags: []
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

	var carreiras = 

		"Estagiário - Análise investimentos;Serviços financeiros;Finanças;Apoie a recomendação de investimentos em ações ou empresas para clientes investidores ou tomadores de decisão internos. ;Análise de demonstrativos financeiros e índices, modelagem financeira e avaliação de empresas. Acompanhamento do desempenho de ações. Pesquisa e análise econômica. Criação de bancos de dados, estudos, relatórios e apresentações para investidores. ;1.200;2.500;1.700;Equity Research, valuation, mercado financeiro, bolsa de valores;Office, inglês, valuation (DCF, multiplos);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10042, 10043;matemática financeira, análise econômica, empreendedorismo;150, 1010, 1011,1012, 10018, 10325;@" +
		"Estagiário - Equity research;Serviços financeiros;Finanças;Apoie a criação de recomendações de investimentos em ações e de estratégias de investimentos em bolsas de valores.;Preparo de apresentações e suporte a analistas, analise setorial e de ações, modelagem financeira, pesquisa e análise economica, criação de modelos econômicos, automatização de rotinas.;1.200;2.500;1.700;Mercado financeiro, bolsa de valores,;inglês, proatividade, finanças, economia;10155, 10156, 10157, 10158, 10296, 10187, 10188, 10042, 10043;VBA;10330, 10146,116, 117, 1032;@" +
		"Estagiário - Back-office;Serviços financeiros;Finanças;Crie e gerencie controles operacionais e financeiros de fundos de investimento. Acompanhe seu desempenho e apresente seu resultado.;Conciliação de carteiras, construção de demonstrativos de resultados e análises de resultados. Atendimento a clientes, cadastro de novos clientes e criação de materiais de apresentação.;1.200;1.800;1.500;Back-office, asset management, fundos de investimentos, P&L;Excel, power point, analítico, comunicação, inglês;10155, 10156, 10157, 10158, 10296, 10020, 10107, 10329;Conciliação;10347;@" +
		"Estagiário - Banco de investimentos;Serviços financeiros;Finanças;Apoie a originação e execução de operações de fusões e aquisições e de captação de recursos via dívida ou venda ações.;Pesquisa de mercado e econômica, análise financeira de projetos e empresas, avaliação por desconto de fluxo de caixa e por múltiplos, criação de apresentações e pitches;1.600;2.600;2.100;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Office, inglês, valuation (DCF, multiplso);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;;10018;@" +
		"Estagiário - Fusões e aquisições;Serviços financeiros;Finanças;Apoie a originação, estruturação e execução de operações de fusões e aquisições;Modelagem financeira, análise por múltiplos, criação de apresentações, Acompanhamento de due diligence;1.400;2.500;1.750;M&A, Valuation, MBO;Office, inglês, finanças corporativas, contabilidade;10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;;10018;@" +
		"Estagiário - Finanças estruturadas;Serviços financeiros;Finanças;Estruture operações de captação de recursos e otimização financeira para clientes corporativos.;Pesquisa econômica e análise de setores econômicos, análise de crédito e carteira, criação de propostas de negócios, estruturação de operações, acompanhamento de garantias e criação de relatórios.;1.200;2.200;1.700;FIDC, structured finance, securitização;contabilidade/ finanças, analítico, office, inglês;10155, 10156, 10157, 10158, 10296, 10089, 10073, 10129;mercado de commodities;10070;@" +
		"Estagiário - Private equity;Serviços financeiros;Finanças;Apoie a originação, modelagem, estruturação e execução de investimentos privados em empresas.;Criação de teses de investimentos, modelagem e análise financeira de empresas, criação de apresentações e relatórios, gestão de empresas investidas. Análise de indicadores econômicos.;1.200;2.200;1.700;PE, VC, Angel, capital de risco, impact investing, sustentabilidade;Analitico, empreendedor, empatia, inglês, office, pro atividade;10155, 10156, 10157, 10158, 10296, 10014;Valuation;10187, 10188, 10018;@" +
		"Estagiário - Trading;Serviços financeiros;Finanças;Apoie a execução de transações realizadas em mercados organizados e controle seus resultados.;Atualizar banco de dados, elaboração de relatórios, apresentações, analisar relatórios de vendas, boletagem de operações;1.100;1.800;1.400;Call, Put, short, long;inglês, excel (intermadiários);10155, 10156, 10157, 10158, 10296, 10062, 10338;VBA;10330;@" +
		"Estagiário - Produtos;Serviços financeiros;Finanças;Acompanhe o desempenho de produtos financeiros e apoie o desenvolvimento de ações para melhorar seu desempenho.;Controle de gastos, acompanhamento de KPIs, acompanhamento de reclamações e de risco operacional, relacionamento com outras áreas.;1.000;2.000;1.500;Cartões, renda fixa local, renda fixa moeda estrangeira;inglês, espanhol,  excel (intermadiários);10155, 10156, 10157, 10158, 10296, 10019,  10314;;;@" +
		"Estagiário - Inteligência de mercado;Serviços financeiros;Marketing;Apoie a criação de ferramentas de informação de competidores e clientes, acompanhe métricas de desempenho e sugira melhorias.;Pesquisa de mercado, análise de competidores, prospecção de clientes, criação de índices e KPIs, revisão de processos, criação de diferenciais competitivos;1.200;1.800;1.600;Business Inteligence, inteligência competitiva, BI;Office, access, inglês, relacionamento interpessoal, raciocinio lógico;10155, 10156, 10157, 10158, 10296, 10019,  10314, 10024, 10440;;;@" +
		"Estagiário - Atendimento;Serviços financeiros;Comercial;Seja o ponto de contato entre a empresa e seus clientes, melhore a experiência dos clientes e ofereça produtos adaptados a suas necessidades.;Atendimento a clientes, explicação de produtos, boletagem de operações, definição de perfil de investidor;1.000;1.600;1.400;call center;comunicação, inglês, office;10155, 10156, 10157, 10158, 10296, 10019, 10321, 10023;;;@" +
		"Estagiário - Private Banking;Serviços financeiros;Comercial;Apoie a construção do relacionamento com clientes de alta renda, oferencendo serviços e informações customizados.;Atendimento a clientes, cadastramento e operacionalização de contas, gestão de patrimonio, preparação de materiais;1.200;2.200;1.700;wealth management;Inglês, Office, ;10155, 10156, 10157, 10158, 10296, 10019, 10321, 10023;Setor financeiro;10554, 10039, 10057, 10173;@" +
		"Estagiário - Contabilidade;Serviços financeiros;Contabilidade;Apoie o controle contábil dos negócios, garanta a qualidade e abrangência das informações geradas. ;Conciliação de posições, contabilização de operações, validação de sistemas, ;1.000;1.600;1.300;ciências contábeis;;10155, 10156, 10157, 10158, 10296, 10323, 10101, 10102, 10103, 10227;;10293, 1018, 1019;@" +
		"Estagiário - Riscos;Serviços financeiros;Administrativo;Avalie e crie mecanismos de avaliação de riscos, desenvolva estudos prospectivos e sugira melhorias de controle.;Análise exploratória, criação de metodologia de análise de riscos, desenvolvimento de estudos, criação de relatórios e controles gerenciais, gestão do processo de crédito, ;1.000;1.700;1.400;Risk, liquidez, casamento taxas;Ferramentas estatísticas, programação básica, inglês espanhol;10155, 10156, 10157, 10158, 10296, 120, 10293;;1059, 10330, 10331, 10590, 10591;@" +
		"Estagiário - Operações e programação;Serviços financeiros;Administrativo;Avalie, crie e mantenha sistemas estatísticos de análise de dados de investimentos.;Análise exploratória, programação de soluções, análise de investimentos e gestão de riscos, automatização de rotinas;1.000;1.600;1.300;Desenvolvimento, Matlab;programação estatística, ;120, 10293;Python, Matlab, R, Excel, VBA, C#;1059, 10330, 10331, 10590, 10591;@" +
		"Estagiário - Controladoria;Todas;Finanças;Faça o planejamento financeiro, acompanhe os resultados e gere análises financeiras sobre o negócio.;Planejamento financeiro e orçamentário, criação e consolidação de demonstrativos gerenciais, criação de e relatórios gerenciais, acompanhamento de resultados e condução de análises financeiras.;1.200;1.800;1.500;Controladoria, Orçamento, Planejamento financeiro, FP&A;Inglês, pacote office, raciocínio lógico;10155, 10156, 10157, 10158, 10296, 10049, 10050, 10198, 10327;VBA;10042, 10043, 10330;@" +
		"Estagiário - Novos negócios;Todas;Finanças;Apoie o crescimento do negócio através de projetos, novas parcerias, captações e aquisições.;Análise econômico-financeira de projetos e empresas, criação de relatórios e apresentações, negociação com bancos e investidores para captação de recursos.;1.000;2.200;1.600;BizDev, Business development, Fundraising, strategy;Inglês,Office;10155, 10156, 10157, 10158, 10296, 10042, 10043, 10022, 10049;Valuation;10187, 10188, 10018;@" +
		"Estagiário - Relacionamento com Investidores;Todas;Finanças;Seja o interlocutor da empresa com o mercado e apoie a sua transparência.;Consolidação de informações e análise financeira do negócio, criação de apresentações, comunicados e relatórios, atendimento a órgãos reguladores e investidores.;1.200;2.300;1.700;RI, Investor relations, Bolsa de valores, IPO;Inglês, Office;10155, 10156, 10157, 10158, 10296, 10042, 10043, 10049;;10018, 10008;@" +
		"Estagiário - Administrativo;Todas;Administrativo;Garanta o correto funcionamento da empresa e seus processos. Controle o fluxo de pagamentos e recebimentos.;Controle de contas a pagar e contas a receber, controle de processos, apoio ao processo orçamentário, acompanhamento de projetos, elaboração de documentação e relatórios;1.200;1.600;1.400;Admin, manager, business;Comunicação, Office;10155, 10156, 10157, 10158, 10020, 10042, 10049;análise financeira;10042, 10043;@" +
		"Estagiário - Comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Prospecção de mercado, manutenção de pipeline e desenvolvimento de material de vendas, gestão de informação de CRM, elaboração de propostas, criação e acompanhamento de indicadores de performance;1.000;2.000;1.500;Vendas, Sales, Growth;Inglês, office, comunicação, relacionamento interpessoal, trabalho em equipe;10155, 10156, 10157, 10158, 10162, 10020, 10019, 10024;foco em resultado, mídias digitais, criação de propostas;10358, 10359, 10320;@" +
		"Estagiário - Estratégia;Todas;Estratégia;Crie um plano de longo prazo para o sucesso da companhia e direcione a empresa na trajetória identificada.;Planejamento estratégico, análise da cadeia de valor, estudos econômicos e setoriais, análise de mercado, avaliação de projetos, criação de planos de negócios.;1.400;1.800;1.600;Strategy;Office, inglês, comunicação;10155, 10156, 10157, 10158, 10296, 10020, 10032, 10035, 10036, 10037;análise de projetos;10307;@" +
		"Estagiário - Operações;Todas;Operações;Melhore a eficiência dos processos da empresa e reduza seus custos de produção.;Mapeamento e melhoria de processos, análises operacionais, gestão de bases de dados, desenvolvimento e acompanhamento de KPIs, apoio a projetos estratégicos, pesquisa e análise de dados, desenvolvimento de relatórios.;1.000;1.800;1.400;CPC, operations, logística;Office, solução de problemas, empatia, foco em resultados;10155, 10156, 10157, 10158, 10165, 10011, 10012, 10073, 10163, 10429;;10049;@" +
		"Estagiário - Desenvolvimento;Todas;Tecnologia;Apoie o desenvolvimento do produto e a criação de funcionalidades para solucionar problemas de seus clientes.;Desenvolvimento de produtos, atendimento a clientes para identificação de soluções, melhoria de processos.;1.000;1.200;1.100;Development, coding, programação, desenvolvimento;Office, comunicação;10155, 10156, 10157, 10158, 10020, 10293, 10011;Programação;10293;@" +
		"Estagiário - Marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Pesquisa de mercado, gestão de campanhas, organização de eventos, criação e gestão de KPIs, gestão de canais.;1.000;1.600;1.300;Marketing, Intern;Office, inglês;10155, 10156, 10157, 10158, 10296, 10073, 10086;;10082, 10083;@" +
		"Estagiário - Recursos humanos;Todas;Recursos humanos;Atraia, retenha e desenvolva os melhores talentos do mercado para atuar na empresa.;Cadastro de currículos, divulgação de vagas, criação de relatórios e apresentações, criação e manutenção de indicadores, recrutamento de funcionários, pesquisa de mercado, gestão e treinamento de recursos humanos.;1.000;1.600;1.300;Treinamento e desenvolvimento, RH;Inglês, Excel;10155, 10156, 10157, 10158, 10296, 10019, 10412, 10413, 10414;;10049, 10090, 10096, 10091, 10092, 10073;@" +
		"Estagiário - Consultor;Serviços;Consultoria;Crie melhorias e eficiências nos negócios de seus clientes.;Pesquisa de mercado, criação de propostas e apresentações, criação de apresentações, análise de mercado e financeira, mapeamento de processos, modelagem financeira, planejamento estratégico;1.200;2.200;1.600;Consulting, capacity building, outsourcing;Comunicação, Office, finanças, trabalho em equipe;10060, 1029, 10080, 10155, 10156, 10157, 10158, 10162, 10020, 10073;;10039, 10042, 10043, 10018;@" +
		"Estagiário - Consultor financeiro;Serviços;Finanças;Maximize o desempenho financeiro de seus clientes, reduzindo custo de capital e maximizando seu fluxo de caixa.;Pesquisa de mercado,  Análise econômico-financeira e valuation, assessoria em leilões e due diligences, estruturação de operações de captação e aquisições, criação de planos de negocios.;1.400;1.800;1.600;Boutique de M&A;Office, inglês, valuation (DCF, multiplso);10155, 10156, 10157, 10158, 10296, 10187, 10188, 10073, 10129;leilões;10199;@" +
		"Estagiário - Consultor TI;Serviços;Tecnologia;Construa novos sistemas e soluções digitais para melhorar os negócios de seus clientes.;Apoiar projetos de desenvolvimento, atendimento a clientes, análise de políticas públicas, análise estratégica.;1.000;1.200;1.100;Outsourcing;Office, inglês;10155, 10156, 10157, 10158, 10296, 10032, 10035;Programação;10293;@" +
		"Estagiário - Comunicação;Serviços;Marketing;Apoie a criação de conteúdo da empresa, para utilização com clientes e funcionários e para fins mercadológicos de atração de clientes e desenvolvimento da marca.;Criação de conteúdo, suporte, criação de treinamentos para analistas de investimentos;1.200;1.800;1.500;;Comunicação oral e escrita, relacionamento, senso crítico;10155, 10156, 10157, 10158, 10019, 10161, 10329, 10020, 10426;;10092;@" +
		"Estagiário - Operações;Serviços;Operações;Apoie a gestão da produção, e do desenvolvimento de produtos novos e atuais.;Implementação e manutenção de produtos, acompanhamento de projetos e criação de promoções;1.200;1.700;1.450;;office, google analytics, inglês, criação websites;10155, 10156, 10157, 10158, 10296, 10354;;10592;@" +
		"Estagiário - CRM;Serviços;Administrativo;Apoie a construção de relacionamento com clientes através de plataformas de relacionamento, e gerencie seu desempenho.;Desenvolvimento de campanhas de vendas e de comunicações com clientes, acompanhamento de processos e campanhas, criação de métricas, criação de apresentações e índices, projeção de vendas.;1.000;1.600;1.300;;solução de problemas, trabalho em equipe, ingles, analitico, excel;10155, 10156, 10157, 10158, 10296, 10019, 10162, 10165, 10020, 10426;;10356, 10314;@" +
		"Estagiário - Gestão de produtos;Indústria, Tecnologia, Telecom;Marketing;Crie soluções aos problemas de seus consumidores com produtos e serviços, alavanque as vendas dos produtos.;Monitoramento de desempenho de vendas, precificação, relatórios gerenciais, estratégia de precificação, planejamento de canais.;1.000;1.600;1.300;Vendas, Sales, Growth;Office, inglês, solução de problemas;10155, 10156, 10157, 10158, 10296, 10165, 10049, 10077, 10082;;10083;@" +
		"Estagiário - Administrativo;Indústria;Administrativo;Apoie a execução dentro da empresa, controle o desempenho de projetos e dos custos de operação da empresa. Apoie a implementação de parcerias.;Projeção e controle de custos, criação de indicadores, acompanhamento de projetos, implantação de projetos, criação de cotações e contratos, pesquisa de mercado;1.000;1.600;1.300;;office, relacionamento interpessoal, inglês;10155, 10156, 10157, 10158, 10296, 10314, 10073;setor elétrico;10006, 10172, 10553;@" +
		"Estagiário - Finanças;Energia;Finanças;Apoiar as rotinas de controle e planejamento financeiro, acompanhamento do contas a pagar ;Acompanhamento de orçamento e P&L, gestão contas a receber, acompanhamento de dívidas e crédito com clientes, criação de apresentações e materiais para funding;1.100;1.700;1.500;;Office, matemática financeira, contabilidade, ;10155, 10156, 10157, 10158, 10296, 10323, 10101, 10102, 10103, 10227;setor financeiro, energia, vba;10330, 10553, 10554;@" +
		"Estagiário - Planejamento estratégico;Agronegócio;Estratégia;Apoie a criação de planejamentos de longo prazo da empresa, levando em consideração o mercado que ela está inserida, seus competidores e produtos.;Apoio ao desenvolvimento de planejamento estratégico;1.200;1.800;1.500;;;10155, 10156, 10157, 10158, 10296, 10072, 10200, 10032, 10033, 10034, 10035, 10364, 10037;;1029, 1030;@" +
		"Estagiário - Administração pública;ONG/ Setor público;Administrativo;Apoie a criação de programas sociais e culturais, controle a eficiência operacional das operações.;Apoio à coordenação de programas, controlar report de colaboradores, criar e monitorar índices, criar apresentações, apoio ao desenvolvimento de novos projetos;1.000;1.500;1.300;;;10155, 10156, 10157, 10158, 10019, 10005, 10006, 10314;;;@" +
		"Estagiário - Inteligência competitiva;Varejo;Tecnologia;Desenvolva novas informações para apoiar a tomada de decisão estratégica e de vendas.;Criação e automatização de relatórios, extração de dados, desenvolvimento de estudos e projeções econômicas. ;1.200;1.600;1.400;Business Inteligence, inteligência competitiva, BI;Office, inglês, organização;10155, 10156, 10157, 10158, 10296, 10049, 10146;Marketing digital;1061;@" +
		"Estagiário - Marketing de performance;Varejo;Marketing;Desenvolva e gerencie campanhas digitais para alavancar as vendas da companhia.;Criação e gestão de campanhas, iniciativas de SEO, criação de relatórios, qualificaçãoe conversão de leads, criação e acompanhamento de índices e KPIs.;1.000;1.600;1.300;Digital marketing, Google, adwords, faceads;Excel, inglês, analítico;10155, 10156, 10157, 10158, 10296, 10049, 10329;Google analytics, VBA, marketing digital;1061, 10330;@" +
		"Analista comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Prospecção de mercado e manutenção de pipeline, revisão de materiais de vendas e relatórios, revisão de contratos, elaboração e acompanhamento de projetos, faturamento de vendas.;3.000;6.500;4.800;Vendas, Sales, Growth;Comunicação, atendimento, inglês e espanhol, organização, proatividade, apresentações;10296, 10020, 10018, 10024, 10249, 10084, 10321, 10326;;10023;@" +
		"Analista de planejamento comercial;Todas;Comercial;Aumente o número de clientes e o volume de vendas da empresa e garanta a rentabilidade dessas vendas.;Elaboração de materiais, orçamentos e propostas, validação e acompanhamento de pedidos, acompanhamento de P&L, criação de ações para alavancagem de vendas e otimização de estoques, criação de estratégias com base em análise de dados de comportamento de clientes;2.800;6.000;4.200;Vendas, Sales, Growth;Office, comunicação;10155, 10156, 10157, 10158, 10020, 10084, 10036, 10319, 10320, 10423, 10321;;10036;@" +
		"Analista comercial institucional;ONG/ Setor público;Comercial;Aumente o número de clientes e parceiros da organização, garanta sua sustentabilidade com ações comerciais.;Pesquisa de mercado, criação de pipeline, desenho de estratégia de captação e prospecção, gerenciamento de projetos de novas vendas, pitch de projetos e propostas, representar a empresa em eventos.;2.200;5.000;3.800;Vendas, Sales, Growth;comunicação, negociação, relacionamento interpessoal, gestão de processos, inglês;10296, 10020, 10073, 10129, 10024, 10036;;10018;@" +
		"Analista Sales Trader ;Serviços financeiros;Comercial;Estruture e venda produtos financeiros complexos via relacionamento com agentes de mercado.;Desenho, cotação e estruturação de produtos, relacionamento e atendimento a assessores e parceiros, venda de swaps, opções e notas estruturadas;4.200;9.600;6.300;Vendas, Sales, Growth;Persistência;10024, 10062, 10065, 10066, 10328, 10308;;10018, 1036;@" +
		"Analista consultor;Consultoria;Consultoria;Desenvolva projetos de mudança estratégica, melhoria de processos e redução de custos para seus clientes.;Análises setoriais e de empresas, estruturação e desenvolvimento de projetos estratégicos, criação de processos de planejamento estratégico, criação de apresentações, atendimento a clientes.;3.800;8.000;6.000;Consulting, strategic planning, outsourcing, business analyst;Inglês, Office, analítico, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros;10060, 1029, 10080, 10039, 10042, 10043, 10020, 10073, 10129, 10018;Estratégia, negociação, operações;104, 10022, 1005, 10036;@" +
		"Analista de gestão;Todas;Administrativo;Seja responsável pela continuidade e evolução dos negócios da companhia.;Criação e manutenção de relatórios, revisão de contratos, elaboração e acompanhamento de projetos, criação e condução de apresentações;3.500;5.000;4.200;Management, analyst, ;Office, redação de contratos, gestão de projetos, operações;10155, 10156, 10157, 10158, 10249, 10018, 1002, 10011, 10015;;;@" +
		"Analista contábil;Todas;Contabilidade;Crie e seja responsável pelo sistema de controle contábil e pelas demonstrações financeiras da empresa;Realização de lançamentos contábeis, cálculo de impostos e tributos,  conciliação contabil e do contas a pagar/ receber, determinação do fluxo de caixa e resultados do exercício.;2.600;7.000;4.600;Accounting, analyst, ;Office, contabilidade empresarial, contas a pagar/ receber;10107, 10101, 10102, 10103, 10122, 10123, 10124, 10125, 10126, 10127;;1018;@" +
		"Analista de operações;Agronegócio;Operações;Garanta o fluxo operacional da empresa, revisando processos e buscando ganhos de eficiência.;Elaboração de análises e relatórios para tomada de decisão, elaboração e manutenção de KPIs.;2.800;6.800;4.600;Operations;Excel, inglês intermediario, relacionamento interpessoal, tomada de decisão, foco resultado, solução de problemas.;10155, 10156, 10157, 10158, 10296, 10020, 10165, 10011, 10015;;1005;@" +
		"Analista de desenvolvimento;Todas;Tecnologia;Desenvolva soluções tecnológicas para a companhia, teste e melhore seu desempenho;Desenvolvimento e manutenção de sistemas, criação de ferramentas e indicadores, mapeamento e melhoria de processos, criação de apresentações.;3.200;10.200;4.600;TI;Principios de programação (falta base de dados);10293, 10018, 10011, 10146, 10372;desenvolver em ASP, SQL, JAVA PL SQ;10332, 10376;@" +
		"Analista de Marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Criação e gestão de indicadores mercadológicos, Análise de ferramentas de marketing e criação de orçamentos de campanhas;2.900;5.100;4.000;Business Inteligence, inteligência competitiva, BI;Analítico, office, marketing, inglês;10073, 10083, 10082;Analista de mercado;1038;@" +
		"Analista de marketing de performance;Varejo;Marketing;Desenvolva e gerencie campanhas digitais para alavancar as vendas da companhia;Criação e gestão de campanhas, iniciativas de SEO, criação de relatórios, qualificação e conversão de leads, criação e acompanhamento de índices e KPIs.;3.000;6.500;4.200;Marketing digital, performance;Excel, inglês, analítico;10155, 10156, 10157, 10158, 10296, 10049, 10329, 10355;Google analytics, VBA, marketing digital, analista de mercado;1061, 10330, 10080;@" +
		"Analista de produtos;Indústria, Tecnologia, Telecom;Marketing;Crie soluções aos problemas de seus consumidores com produtos e serviços, desenvolva essa solução e alavanque as vendas dos produtos existentes.;Monitoramento e análise de desempenho de vendas, criação de relatórios gerenciais, definição de estratégia e precificação de produtos, planejamento de canais e de portfólio de produtos, desenvolvimento de produtos e negociação com fornecedores e distribuidores.;2.900;5.100;4.000;Vendas, Sales, Growth;Office, inglês, solução de problemas;10155, 10156, 10157, 10158, 10165, 10296, 10049, 10073, 10075, 10077, 10078, 10082;Gestão de marketing, estratégia competitva;1038, 1039;@" +
		"Analista de risco;Serviços financeiros;Finanças;Gerencie as exposições de investimento e seu risco, crie ações para otimizar a exposição conforme os interesses de sua empresa e clientes.;Controlar posições de investimentos, calcular VaR, backtest, estresse e liquidez, gerar relatórios, contolar movimentações financeiras, criação de métricas de risco, controlar posições de clientes individuais;2.200;9.800;5.200;Asset management risk;SQL, VBA;10146, 10636, 10638, 10375, 10334, 10137, 10140, 10279, 10280, 10281, 10341, 10342, 10183, 10314;mercado financiro;10554,10039, 1034;@" +
		"Analista de business inteligence;Bens de consumo;Marketing;Suporte a equipe de marketing e estimule vendas através da geração de informações a partir de dados gerados pela operação da empresa e por plataformas digitais.;Estruturação de bases de dados e criação de consultas. Realização de estudos e análises dos dados das bases e de ferramentas de marketing digital, criação de métricas e dashboards. Revisão de processos e criação de apresentações.;3.000;4.200;7.100;BI, Big data, SEO, Faceads, adwords;SQL, Tableau, excel, análise exploratória, business inteligence, análise de websites;10146, 10636, 10638, 10137, 10140, 10279, 10280, 10281, 10314, 10155, 10156, 10011;varejo, bens de consumo;10546;@" +
		"Analista financeiro;Todas;Finanças;Analise as informações financeiras da empresa para gerar valiosas informações e apoiar a tomada de decisão. Controle custos e apoie a maximização das receitas.;Controle de contas a pagar/ receber e gestão de fluxo de caixa, criação e manutenção de planilhas financeiras, negociação com fornecedores, extração de dados de bases. Análise financeira, criação de métricas, apresentações e relatórios.;2.600;9.800;4.500;Finance, financeiro;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial;150, 10039, 10043, 10042, 1018, 10146, 10022, 10306, 10314, 10155, 10156 ;Finanças corporativas, excel;1032, 10157;@" +
		"Analista de planejamento de vendas;Bens de consumo;Comercial;Maximize as vendas da equipe comercial criando iniciativas, controlando seu desempenho e sugerindo melhorias aos processos comerciais.;Controle de custos, acompanhamento de projetos e parcerias comerciais, suporte à equipe de vendas, interação com áreas internas para garantir execução dos planos, criação de relatórios e métricas de performance, melhoria de processos.;3.000;6.500;4.800;Suporte vendas;Excel, inglês;10314, 10155, 10156, 10157, 10011, 10296, 10018, ;VBA;10330;@" +
		"Analista de planejamento;Serviços;Finanças;Alavanque o resultado do negócio através de análises e criação de planos para  otimização de custos e desenvolvimento de negócios.;Análise de índices financeiros, projeção financeira, criação de relatórios e apresentações, estruturação de bases de dados, criação de planos de negócios;3.000;6.500;4.200;planejamento financeiro, planejamento estratégico;Office, inglês, apresentações;10155, 10156, 10157, 10158, 10296, 10018, 10042, 10043, 10307, 10352, 10365, 10366, 10322; finanças, estratégia;1029, 1032;@" +
		"Consultor de planejamento;Serviços;Finanças;Alavanque o resultado do negócio executando planos estratégicos para otimização de custos e desenvolvimento de negócios.;Análise de índices financeiros, projeção financeira, criação de relatórios e apresentações, estruturação de bases de dados, criação de planos de negócios, análises estratégicas e interação com áreas parcerias para implantação de projetos.;4.200;9.100;6.700;planejamento financeiro, planejamento estratégico;Office, inglês, apresentações, finanças, estratégia;10155, 10156, 10157, 10158, 10296, 10018, 10042, 10043, 10307, 10352, 10365, 10366, 10322, 1029, 1032;relacionamento institucional, economia;116, 117, 10019, 10379;@" +
		"Trader;Serviços financeiros;Finanças;Execute operações em mercados organizados e crie estruturas financeiras para maximizar o resultado de seus clientes e do seu banco.;Negociação de ativos financeiros, boletagem de operações, relacionamento com clientes, desenvolvimento de produtos, criação de cotações, criação de relatórios, melhoria de processos.;3.500;10.000;6.500;Trader;mercado financeiro, derivativos, inglês, excel.;10155, 10156, 10157, 10158, 10296, 10554, 10039, 10065, 10066, 10062, 10068, 10194, 10308, 10311, 10011, 10319;;1036;@" +
		"Gerente de contas;Serviços;Comercial;Crie e gerencie relacionamentos corporativos com clientes, alavanque vendas e garanta o alinhamento da oferta da empresa às necessiadades dos clientes.;Prospeção de clientes, desenvolvimento de estudos e projetos, criação de relacionamentos com clientes e parceiros, apoio ao desenvolvimento dos produtos. Criação de apresentações e relatórios, criação e manutenção de métricas de performance.;5.000;12.000;7.500;Account manager;Vendas, gestão de contas, relacionamento, software de investimentos;10023, 10024, 10319, 10320, 10022, 10005, 10019, 10153, 10314, 10155, 10156, 10157;software de CRM, mercado financeiro;10081, 1049, 10554;@" +
		"Analista de tesouraria;Todas;Finanças;Garanta o fluxo de caixa e maximize o resultado financeiro da empresa com investimentos e operações de hedge;Realização de investimentos e controle de posições, captação de recursos e negociação de dívidas, criação de estratégias de hedge e derivativos;2.300;9.000;4.500;Cash flow;Persistência, comunicação, analítico;10020, 10057, 10178, 10066, 10068, 10181, 150, 10041;Investimentos, trading;1034, 1036;@" +
		"Analista de relacionamento com investidores;Todas;Finanças;Seja o interlocutor da empresa com o mercado e apoie a sua transparência.;Elaboração de apresentações, relatórios e releases para investidores, desenvolvimento de estudos setoriais, elaboração de demonstrativos financeiros, análise de indicadores e demonstrativos financeiros, realização de reuniões, atendimento a investidores e órgãos regulatórios;2.300;9.000;4.500;Investor relations, Investidores, Companhia aberta;Apresentações, relatórios gerenciais;10018, 10049, 10107, 10129, 10042, 10043, 10051;comunicação, apresentação;10020, 10008;@" +
		"Analista de banco de investimentos;Serviços financeiros;Finanças;Desenvolva pitches e execute operações de fusões e aquisições e de captação de recursos via dívida ou venda ações.;Pesquisa de mercado e econômica, análise financeira de projetos e empresas, avaliação por desconto de fluxo de caixa e por múltiplos, criação de apresentações e pitches;5.000;12.000;8.000;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, analitico, quatitativo, inglês, office;150, 1032, 10035, 10032, 10047, 10116, 10115, 10187, 10188, 10018;Análises econômicas, negociação, Valuation;116, 10022, 10187, 10188, 1049;@" +
		"Analista em finanças estruturadas;Serviços financeiros;Finanças;Estruture operações de captação de recursos e otimização financeira para clientes corporativos.;Pesquisa econômica e análise de setores econômicos, análise de crédito e carteira, criação de propostas de negócios, estruturação de operações, acompanhamento de garantias e criação de relatórios.;5.000;12.000;8.000;FIDC, structured finance, securitização;contabilidade/ finanças, analítico, office, inglês;10155, 10156, 10157, 10158, 10049, 10042, 10043, 10190, 10191, 10192, 10312, 10320;mercado de commodities;10018, 10189, 1049;@" +
		"Analista em private equity;Serviços financeiros;Finanças;Origine, modele, estruture e execute e gerencie investimentos em empresas.;Criação de teses de investimentos, modelagem e análise financeira de empresas, criação de apresentações e relatórios, gestão de empresas investidas, pesquisa e análise de mercado, acompanhamento de processos de due diligence. ;6.200;12.000;8.800;PE, VC, Angel, capital de risco, impact investing, sustentabilidade; Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, análises estratégicas, Analitico, empreendedor, empatia, inglês, office,;150, 1032, 10035, 10032, 10047, 1029, 10187, 10188, 10018, 10049, 10042, 10043;Análises econômicas, negociação,Valuation;116, 10022, 10187, 10188, 1049;@" +
		"Analista de novos negócios;Todas;Finanças;Apoie o crescimento do negócio através de projetos, novas parcerias, captações e aquisições.;Análise econômico-financeira de projetos e empresas, criação de relatórios e apresentações, negociação com bancos e investidores para captação de recursos.;2.600;9.800;4.500;BizDev, Business development, Fundraising, strategy;Inglês,Office;10155, 10156, 10157, 10158, 10018, 10049, 10042, 10043, 10041;Valuation;10187, 10188;@" +
		"Consultor interno;Todas;Finanças;Crie eficiências, identifique e transforme oportunidades em resultados dentro de sua empresa.;Realização de análises financeiras e estratégicas, revisão de processos e modelagem de problemas, construção de bases de dados, realização de apresentações;4.500;9.200;6.800;Consultoria, business development;analitico, solução de problemas, curiosidade, excel, powerpoint;10155, 10156, 10157, 10158, 10018, 10042, 10043, 10165;access;10049, 10374;@" +
		"Consultor outsourcing;Consultoria;Consultoria;Crie melhorias e eficiências na cadeia de valor de seus clientes.;Revisão e melhoria de processos, criação de metodologia de acompanhamento de processos, negociação e revisão de fornecedores, elaboração e implementação de projetos estratégicos.;4.500;9.200;6.800;Consultoria;analitico, relacionamento, office;10155, 10156, 10157, 10158, 10005, 10006, 10036, 10037, 10172, 10314;MBA;10018, 10049;@" +
		"Especialista em Tecnologia;Tecnologia;Tecnologia;Crie, teste e implante soluções digitais para empresas e clientes.;Elaboração de arquitetura, modelagem e desenvolvimento de sistemas. Planejamento, especificação e realização de testes de performance, avaliação de riscos e impactos de testes, criação de scripts e de registros de não conformidade, ;7.100;12.300;9.700;TI;TI, vivência em testes de desempenho e performance, troubleshooting, HP Loadrunner;10293, 1037, 1042, 10378, 10377 ;;125;@" +
		"Especialista de marketing;Todas;Marketing;Desenvolva a marca da companhia e de seus produtos, organize eventos e campanhas de comunicação e divulgação.;Criação e implantação de ações e campanhas de comunicação, criação e gestão de indicadores mercadológicos, análise de ferramentas de marketing e acompanhamento do road map de evolução da área. Realização de apresentações e representação da empesa em eventos.;5.100;11.800;7.600;Propaganda;ppt, excel;10155, 10156, 10157, 10158, 10018, 10073, 10086, 10049, 10296, 10082, 10083;;1038, 1039;@" +
		"Especialista financeiro;Todas;Finanças;Analise as informações financeiras da empresa para gerar valiosas informações e apoiar a tomada de decisão.;Análise de informações financeiras, desenvolvimento de relatórios, extração de dados de bases, realização de apresentações.;5.000;11.800;7.000;;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial;150, 10039, 10043, 10042, 1018, 10049;Finanças corporativas, negociação ;1032, 10022;@" +
		"Coordenador de desenvolvimento;Todas;Tecnologia;Cooredene equipe de desenvolvimento de soluções tecnológicas para a companhia, estruturando testes e ações de melhoria de desempenho;Melhoria de processos, criação e gestão de dashboard de indicadores, apresentações, suporte a unidades de negócio.;8.000;12.800;10.000;;gestão de peossoas, gestão de projetos, relacionamento, excel, ppt;10155, 10156, 10157, 10158, 10293, 1037, 1042, 10019, 10020, 10005, 10006, 10089, 10314;;10049, 1002;@" +
		"Coordenador de estoque;Indústria, Varejo, Agronegócio;Operações;Coordene equipe de gestão de estoque, buscando alternativas para aumento de eficiência e otimização de seu tamanho;Gestão de sistema de estoque, gestão e apresentação do andamento de projetos de melhorias de estoques, mapeamento e melhoria de processos, otimizacão dos níveis de estoques.;6.400;11.600;8.500;;liderança, tomada de decisões, negociação, trabalho sob pressão. Excel, comunicação, inglês;10155, 10156, 10157, 10158, 10020, 10005, 10006, 10089, 10093;;10049;@" +
		"Coordenador financeiro;Todas;Finanças;Cooredene equipe de analistas financeiros, organizando a geração de informações e sua análise.;Análise de informações financeiras, desenvolvimento e revisão de relatórios, extração de dados de bases, apresentações para alta gestão, coordenação de equipe, alocação de investimentos, desenvolvimento de planejamento financeiro.;6.600;15.200;10.000;;Matemática financeira, Teoria financeira, Análise de índices financeiros, Análise de demonstrativos financeiros, Contabilidade empresarial, coaching;150, 10039, 10043, 10042, 1018, 10089, 10018;Finanças corporativas, negociação, contratação de funcionários;1032, 10022, 10090;@" +
		"Consultor associado;Serviços;Consultoria;Conheça os negócios e desenvolva soluções para aumentar a eficiência de seus clientes.;Análise de informações, entrevistas com cliente, desenvolvimento de projetos de consultoria e soluções, revisão de material, apresentação de resultados.;7.000;19.200;13.000;Associate, consultant;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114;@" +
		"Associate em Banco de investimentos;Serviços financeiros;Finanças;Interaja com executivos e coordene equipe de analistas no desenvolvimento de pitches e execução de operações. Interaja com clientes para apresentar e estruturar trabalhos.;Supervisão de analistas e interlocução com executivos, apresentação para clientes, avaliação de empresas e negócios, revisão e apresentação de materiais para clientes.;14.600;22.300;17.000;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, negociação, coaching;150, 1032, 10035, 10032, 10047, 10116, 10115, 10022, 10089, 10018, 10187, 10188;Análises econômicas, contratação de funcionários, Comunicação, negociação;116, 10090, 10020, 1049;@" +
		"Associate em Private Equity;Serviços financeiros;Finanças;Prospecte o mercado para originar investimentos e coordene analistas para modelar, estruturar e executar operações. Assuma posições executivas em empresas do portfólio.;Análise de empresas e deals, originação de deals, coordenação de processos de due diligence, gestão de empresas do portfolio.;14.600;22.300;17.000;;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, análises estratégicas, negociação, coaching;150, 1032, 10035, 10032, 10047, 1029, 10022, 10089, 10187, 10188, 10042, 10043;Análises econômicas, contratação de funcionários, planejamento estratégico, planejamento operacional;116, 10090, 10037,10015, 10018, 1049;@" +
		"Gerente financeiro;Todas;Finanças;Gerencie um departamento ou área de finanças, gerando e analisando informações para a tomada de decisão.;Gestão do processo de planejamento financeiro e controle orçamentário, gestão de equipe, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos na área, Interação intra-empresa e apoio à tesouraria.;8.800;25.800;14.000;Finance manager;Matemática financeira, finanças corporativas, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento operacional, contabilidade empresarial, ;150, 1032, 10090, 10089,10088,102, 10015, 1018, 10018, 10042, 10043;Finanças, contabilidade, análise econômica, planejamento estratégico, inglês fluente, 6 anos experiência, relatórios gerenciais;102, 109, 116, 10037, 10187, 10188;@" +
		"Gerente de Portfólio;Serviços financeiros;Finanças;Maximize o retorno de portfólios de renda fixa ou variável, de acordo com o produto, e crie novos produtos financeiros.;Gestão de portfólio, análise de mercado e econômica,  análise de concentração de riscos, seleção de investimentos, criação de estratégias de investimento.;15.000;30.000;22.000;Asset management, investimentos, portfolio manager;;10042, 10043, 10192, 10039, 10054, 10056, 10057, 10059, 10178;;10018, 1034;@" +
		"Gerente de projetos;Serviços;Consultoria;Gerencie projetos e equipes e seja o principal responsável pela qualidade na sua entrega. Direcione a criação de soluções.;Coordenação de equipe, relacionamento com clientes, desenvolvimento de soluções, revisão de material, apresentação de resultados.;9.000;21.000;14.400;;Estratégia, comercial, operações Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, análise mercadológica, análise competitiva;104, 102, 1005 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10073, 10032, 10020, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114;@" +
		"Gerente de produtos;Indústria, Tecnologia, Telecom;Marketing;Seja responsável pela criação de produtos e sua gestão, desenvolvendo novas funcionalidades e construindo sua estratégia competitiva.;Definição das estratégias de marketing e de desenvolvimento de produtos, desenvolvimento de pesquisas e estudos mercadológicos.;7.200;18.500;12.800;Product manager;Gestão de Marketing, análises estratégicas;1038, 1029, 10020, 1039;;;@" +
		"Gerente de marketing;Todas;Marketing;Gerencie a equipe e seja responsável pela marca da empresa e de seus produtos. Estruture planos estratégicos de comunicação e vendas.;Gestão de equipes e criação de estratégias corporativas  de marketing.;8.000;23.700;14.400;;Gestão de Marketing, análises estratégicas, coaching, recrutamento de funcionários, negociação, gestão de projetos;1038, 1029, 10089 , 10090, 10022, 1002, 10020, 1039;planejamento operacional;10015;@" +
		"Project leader;Serviços;Consultoria;Gerencie projetos e equipes e seja o principal responsável pela qualidade na sua entrega. Direcione a criação de soluções.;Coordenação de equipe, relacionamento com clientes, coordenação do desenvolvimento de soluções, revisão de material, apresentação de resultados.;16.500;24.000;19.800;Consultor, consulting;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020, 10018;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114;@" +
		"Vice presidente em IB;Serviços financeiros;Finanças;Se relacione com clientes para originar novas operações e garantir a execução correta de mandatos, coordene equipe de associates criar pitches e executar operações.;Alocação de equipes, gestão de equipes para desenvolvimento de materiais, gestão de relacionamentos e apresentação para clientes.;19.800;32.400;26.200;IB, Investment banking, M&A, DCM, ECM, Valuation, mercado financeiro, mercado de capitais, IPO, Debentures;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, comercial, coaching, contratação de funcionários;150, 1032, 10035, 10032, 10047, 10116, 10115, 102, 10089, 10090, 10020, 10018, 10187, 10188;Análises econômicas, análises estratégicas;116, 1029, 1049;@" +
		"Vice presidente em Private Equity;Serviços financeiros;Finanças;Prospecte o mercado para originar investimentos e coordene analistas para modelar, estruturar e executar operações. Assuma posições executivas em empresas do portfólio.;Originação de deals, supervisão de processos de due diligence, gestão de empresas do portfolio, estruturação de operações financeiras.;19.800;32.400;26.200;Private Equity, Venture capital, investimentos;Matemática financeira, finanças corporativas, análise estrutural, análise da concorrência, Fusões e aquisições, emissões de títulos de dívida, emissões de novas ações, comercial, coaching, contratação de funcionários, análises estratégicas;150, 1032, 10035, 10032, 10047, 10116, 10115, 102, 10089, 10090, 1029, 10020, 10187, 1018810042, 10043;Análises econômicas, planejamento estratégico, planejamento operacional;116, 10037, 10015, 10018, 1049;@" +
		"Engagement manager;Serviços;Consultoria;Origine novos projetos a partir de seu relacionamento com clientes e supervisione seu andamento, apoie as equipes consultoras com seu conhecimento e expertise.;Gestão de projetos, relacionamento com clientes, suporte em questões especificas, desenvolvimento de consultores mais juniores.;27.000;32.600;30.000;Consultor, consulting;Estratégia, comercial, operações Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114,10042, 10043;@" +
		"Superintendente financeiro;Todas;Finanças;Coordene áreas dentro da diretoria financeira e garanta a geração correta de informações e entrega dessas áreas. Relacione-se com altos executivos para identificar oportunidades e apresentar soluções.;Gestão de equipes de gerentes, apresentações para alta gestão, responsabilidade pelos produtos desenvolvidos em sua área, Interação intra-empresa e com alta gestão.;14.900;43.600;25.000;Finance;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento operacional, contabilidade empresarial, ;150, 1032,1036, 10090,10089, 10088, 102, 10015, 1018, 10020, 10018,10042, 10043;Finanças, contabilidade, análise econômica, planejamento estratégico, análises estratégicas;102, 109, 116, 10037, 1029;@" +
		"Principal;Serviços;Consultoria;Gerencie a empresa de consultoria e crie projetos estratégicos para seu desenvolvimento. Apoie a construção de relacionamentos e a originação e execução de novos negócios com seu expertise.;Desenvolvimento de negócios, gestão do relacionamento com clientes, liderança junto a equipes em clientes, suporte em assuntos específicos.;27.000;32.600;30.000;Consultor, consulting;Estratégia, comercial, operações, Desconto de fluxo de caixa, análises estratégicas, análises mercadológicas, Teoria financeira, Análise de demonstrativos financeiros, Análise de índices financeiros, coaching, recrutamento de funcionários, análise mercadológica, análise competitiva;104, 102, 1005, 10060, 1029, 10080, 10039, 10042, 10043, 10089, 10090, 10073, 10032, 10020;Finanças corporativas, contabilidade empresarial, reestruturação de empresas;1032, 1018, 10114, 10018, 10042, 10043;@" +
		"Diretor financeiro;Todas;Finanças;Seja o grande responsável pela saúde financeira, planejamento financeiro, gestão de riscos, otimização da estrutura de capital, captação de recursos e geração de informações gerenciais na empresa.;Gestão de departamento, Interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa.;18.400;65.400;32.600;CFO, C-suite, Finance, VP Finance, Vice presidência de finanças;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10008;Finanças, contabilidade, direito societário, análise econômica;102, 109, 1024, 116, 10187, 10188;@" +
		"Diretor de Banco de investimentos;Serviços financeiros;Finanças;Origine novas operações mantendo contato aos clientes e direcione o banco de investimentos ao crescimento e rentabilidade.;Gestão de equipes, apresentação para clientes, negociação de mandatos.;35.200;46.400;40.000;Director, D;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049;@" +
		"Diretor de marketing;Todas;Marketing;Responsável pela definição da estratégia e políticas de marca da empresa e seus produtos, pela definição dos canais de comunicação e vendas a serem utilizados e pela determinação de quais produtos serão ofertados.;Gestão do departamento de marketing e responsável pelas metas de marketing da empresa.;21.000;33.000;27.000;Director, Marketing, sales;Gestão de Marketing, análises estratégicas, coaching, recrutamento de funcionários, negociação, operações;1038, 1029, 10089, 10090, 10022, 1005, 10020, 10018, 1039;Desconto de fluxo de caixa, análise de empresas;10060, 10045;@" +
		"Diretor/ sócio de Private Equity ;Serviços financeiros;Finanças;Gerencie a empresa e seus fundos de investimento. Origine novos fundos e investimentos. Coordene operações financeiras e negocie com prestadores de serviço. Desenvolva a estratégia de investimento da empresa e a represente em eventos.;Relacionamento com investidores, estruturação e captação de novos fundos, originação de deals.;35.200;46.400;40.000;Investimentos, Firm;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049;@" +
		"Diretor executivo em Banco de investimentos;Serviços financeiros;Finanças;Organize a estrutura interna para garantir a geração de negócios e receitas. Represente o banco e interaja com executivos de outras companhias para ter uma visão clara do mercado, suas tendências e oportunidades.;Interação com clientes para negociação de mandatos, gestão do negócio.;44.400;62.800;55.000;Managing Director, MD, IB;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica, estratégia;102, 109, 1024, 116, 104, 1049;@" +
		"CFO (Chief Financial Officer);Todas;Finanças;Seja o grande responsável pela saúde financeira, planejamento financeiro, gestão de riscos, otimização da estrutura de capital, captação de recursos e geração de informações gerenciais na empresa.;Gestão de departamentos, interação com alta gestão, participação de comitês, responsabilidade pela produção das informações financeiras da empresa.;32.000;78.000;45.000;CFO, C-suite, Finance, VP Finance, Vice presidência de finanças;Matemática financeira, finanças corporativas, trading, contratação de funcionários, coaching, criação de estratégias de recursos humanos, comercial, planejamento estratégico, planejamento operacional, contabilidade empresarial, análises estratégicas;150, 1032, 1036, 10090, 10089, 10088, 102, 10037, 10015, 1018, 1029, 10020, 10018, 10187, 10188;Finanças, contabilidade, direito societário, análise econômica;102, 109, 1024, 116;@";

		var arrayCarreiras = carreiras.split("@");

		var i = 0;
		while (i < arrayCarreiras.length) {
			var arrayItensCarreira = arrayCarreiras[i].split(";");
			var objJson  = 
				{
				    documento : {
				        nome :  arrayItensCarreira[0],
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
					objJson.documento.necessarios.push(array[w].replace (" ",""));
					w++;
				};
			};
			if (arrayItensCarreira[12]){
				var array = arrayItensCarreira[12].split(",");
				var w = 0;
				while (w < array.length) {
					objJson.documento.recomendados.push(array[w].replace (" ",""));
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
		}
	
};

function carregaCursosTotal (){
	/**
	 * 	carrega lista de cursos
	 */
	
	var cursos =
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Atividades Planejadas I                ;10162,10136;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução ao Marketing           ;10073,10072;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Sociologia I                   ;142;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Matemática I               ;10138,10139;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução à Tecnologia da Informação  ;10158,10146;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Matemática Financeira                ;10061,1006;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Gestão de Projetos ;1002;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Aprovação no vestibular FGV EAESP - Adm. Empresas;Introdução à Gestão                      ;10021;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Experiência Empreendedora;10030;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Filosofia;6;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Psicologia I;10145;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Sociologia I;Sociologia II;11;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Direito Privado na Empresa;113,10117;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Matemática I;Matemática II;1050;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Contabilidade Financeira;10106;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Estatística I;10137;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Estratégia Mercadológica;10075,10076;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Psicologia I;Psicologia II;122;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Ciência Política;;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Controladoria;1033;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Estatística I;Estatística II;10140;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Estatística I;Gestão de Operações;1005;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Análise Estratégica;1029;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Oficina em Organizações;1046;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Atividades planejadas I;Atividades Planejadas II;;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Pesquisa de Mercado;1039;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Matemática I;Microeconomia Intermediária Aplicada;1011;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Contabilidade Financeira e Controladoria;Finanças Corporativas I;10042,10043;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Modelagem para apoio à Tomada de Decisão;10016;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Introdução à Gestão                      ;Organizações;;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Marketing Mix;1038;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Direito Privado na Empresa;Direito Tributário;113;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Microeconomia Intermediária Aplicada;Macroeconomia Intermediária Aplicada;1010;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Finanças Corporativas I;Finanças Corporativas II;10046,10052;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Gestão de Operações e Estatística II;Logística Empresarial e SCM;10071;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Direito Privado na Empresa;Direito Trabalhista;114;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Introdução à Tecnologia da Informação  ;Administração da Tecnologia da Informação;124;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Oficina Comunicação;10019,1002;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão de Pessoas;1044;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Orientação de Trabalho de Conclusão de Curso;10000;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Atividades Planejadas II;Atividades Planejadas III;;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;Logística Empresarial e SCM;Operações e Competitividade;1005;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão Estratégica;10035,10037;;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Captação de Recursos para Novo Negocios;10031;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Estratégia Internacional;1029;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Estratégia Politica das Empresas Multinacionais;;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão com Pessoas e Literatura;10088, 10089;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Estratégia e Sustentabilidade em Organizações;10013;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Geopolítica e Estratégia Organizacional;10366;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão De Carreiras;10381;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Empreendedorismo Social;10367;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Governança Corporativa;1004;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Fusões E Aquisições;10047;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão De Carteiras E Fundos De Investimentos;10056, 10057, 10058, 10059;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Governança Corporativa, Controle Interno E Auditoria;1004;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Microfinanças E Inclusão Financeira;10371, 10190;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Controladoria Ii;1033;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Renda Fixa;10064;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Mercados Financeiros E De Capitais;10054, 10184, 10069;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Mercados Financeiros E De Capitais;10054, 10184, 10069;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Private Equity Venture Capital;10045, 10178, ;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Avaliação De Empresas E Gestão Baseada Em Valor;10043;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestao De Riscos E Derivativos;10183, 10066;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Psicanálise E Propaganda;10385, 10357;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Interpretações Da Sociedade Contemporânea: O Debate Sobre O Neoliberalismo;10386;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Fundamentos E Tendencias Da Cultura De Consumo;10387;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Vocação E Trabalho;10381;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Corrupção: Conceito, Sistema De Controle E Análise De Casos Na Relação Público Privado;10238;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Metodos Multivariados Em Administração;10280;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Modelagem De Risco De Crédito;10190, 10191;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;VBA;10330;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Tecnicas De Previsão Em Administração E Economia;10205;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Capacidade Analítica Para Decisões De Marketing;10080;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gestão De Vendas;10077;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Marketing Global;10082, 10037;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Criatividade;10027, 10382;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Branding;10363, 10076;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Business Up To Date: Consultoria em Marketing;10360;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Marketing De Redes Sociais;10359;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gerenciamento De Crises;10172;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Técnicas De Negociação;10022;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Negociação: Teoria E Pratica;10022;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gvniano Ensina Gvniano: Estratégia, Liderança E Gestão De Pessoas;10088, 10089, 10093;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Libras: Língua Brasileira De Sinais;10389;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Formação Integrada Para A Sustentabilidade;1007;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Atividade De Campo – Formaçao Integrada Para A Sustentabilidade;1007;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Equity Research Challenge;10054;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Preparação para Imersão Em Campo – GV Pesquisa;10169;15;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Economia da Gestão dos Recursos Humanos;10088, 10095;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Teoria dos Jogos e Economia Comportamental;117, 10364;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Indicadores Econômicos;10390;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Economia Da Estrategia;10130, 10208, 10032, 10035, 10128;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Inovação Para Sustentabilidade;10028;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Operação E Logistica Internacional;10369;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Intraempreendedorismo E Inovação;10028;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Sustentabilidade: Introdução À Temática Socioambiental;10408;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Diagnóstico Empresarial: Técnicas De Consultoria;10313, 10042, 10043;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Criação De Negócios Tecnológicos;10030, 10322;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Modelo De Negócio, Parcerias Em Criação De Valor;10030, 10323;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Avaliação De Empresas E Gestão Baseada Em Valor;10043, 10045;60;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;A Conjuntura Politica Brasileira E Seus Impactos No Mundo Dos Negócios;10392;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Oficina Do Pensamento Logico;10327;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Analise De Risco Politico: Como As Empresas Multinacionais Dedidem Onde E Como Investir;10392, 10394;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Logistica Reversa E A Gestão De Residuos Solidos;10370;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Marketing Para Novos Negócios – Modulo I;10074, 10078;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Technology Business Models – Modulo I;10030;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Negotiation – Módulo I;10022;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Corporate Social Responsibility In Brazil – Modulo I;10371;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Macroeconomics For Emerging Markets – Modulo I;1010;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Brazilian Economy – Módulo I;10210;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Emerging Powers In Global Political Order – Modulo I;10394;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Cultural Aspects Of Brazilian Society – Módulo I;10388;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Gamification – Modulo I;10361;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Racism And Prejudice: Misbehaviour In The Workplace – Modulo I;10383;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Legal Framework For International Business Modulo Ii;10397;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Simulation Models In Finance – Modulo Ii;10352;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Strategy In International Perspective - Módulo Ii;10366;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Bric Countries: Companies & Labor Laws – Modulo Ii;10122, 10206;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Cases On Economic Development: China, India And Other Economies – Modulo Ii;10206, 10211;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Brazilian Foreign Policy – Modulo Ii;10393;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Marketing For Low Income Consumers – Modulo Ii;10360;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;Graduação em administração de empresas;;Development & Sustainability - Modulo Ii;10391;30;Mensalidade - R$ 3.700@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Pessoas na organização;10092,10088,10089;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Consumidores e produtos;10074,10078;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Fontes e aplicações de recursos;10048,1006;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Processos e sistemas;1005;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise de oportunidades de mercado;1003210035;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Visão economica do mercado;1010;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise mercadológica;10072,10073;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Ética e sociedade;6;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Relações com o Governo;10022;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;A Empresa e sua cadeia de valor;10072;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Indicadores de desempenho da empresa;10043;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Análise de empreendimentos;10045;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Inteligência de negócios;10080;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Geração de valor na Empresa;10038,10046;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;Inovação e sustentabilidade;1007,1027;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;MBM (Master in business management);Graduação, inglês;TCC - Trabalho de conclusão de curso;10000;Curso total 436 horas, 3 semestres;-R$ 32.160@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Estatística aplicada;120;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Matemática financeira;1035;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Habilidades computacionais;10158,10146;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Comunicação para gestores;10020;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Relações interpessoais;10019;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Negociação Empresarial;10022;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Contabilidade;109;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de pessoas;1044;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de finanças;10043,10048,10045,10052;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de operações;1005;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Gestão de Marketing ;1038;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Estratégia empresarial;104;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Aspectos jurídicos da Empresa;1024;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Economia aplicada;1010;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAG (Curso de especialização em administração para graduados);Graduação, 3 anos experiência, inglês;Administração de Tecnologia de Informação;10158,10146;Curso total 512 horas, 4 semestres;-R$ 49.920@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Mercado de saúde;10073,10083,10075;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Ética e Aspectos Jurídicos;118;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Economia da saúde;1011;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Comunicação para gestores;10020;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Negociação Empresarial;10022;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Processos e sistemas em Saúde;10011;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Produtos e serviços em Saúde;10078;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Pessoas na organização de saúde;1044;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Contabilidade e Matemática financeira;109,1035;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Análise exploratória;;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Habilidades computacionais;10158,10146;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Relações interpessoais e Gestão de pessoas;10092,10088,10089,10019;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Competitividade na Saúde;10080;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Resultados na Saúde;10043;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Operações em Saúde;1005;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Gestão da Informação em Saúde;;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Marketing para área de saúde;1038;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);Tópicos Emergentes;;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;CEAHS (Curso de Especialização em Administração Hospitalar e de Sistemas de saúde);Graduação, 3 anos experiência (saúde);TCC - Trabalho de conclusão de curso;10000;Curso total 528 horas, 3 semestres;-R$ 35.730@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Contabilidade e Análise financeira;109,10043;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Análise Estatística;120;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Microeconomia;1011;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Finanças corporativas;1032;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Economia de Empresas;1010;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Estratégia de Marketing;10073,10083,10075;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Comportamento Organizacional;10088,10019;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Estratégia empresarial;104;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Gestão de Operações;1005;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Macroeconomia;1010;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Investimentos;1034;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Fusões e Aquisições;10047;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Mapeando Decisões complexas;10016;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Negociação;10022;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Inovação em Tecnologia da Informação;1027;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EAESP;MPA (Mestrado Profissional em Administração);Graduação, 5 anos de experiência;Comportamento humano;10089,10092;Curso total 666 horas, 6 semestres;-R$ 101.256@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Programação e Resolução de Problemas;10293;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Introdução à Economia;10209;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Matemática Financeira;1035;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;PBL;10168;15;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Aprovação em Vestibular FGV EESP;Matemática I  (Parte I);119;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Introdução às Ciências Sociais: Nação, Brasil e Identidade Nacional;10289;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Probabilidade;141;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Formação Economica Do Brasil;10210;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Matemática I  (Parte II);119;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Matemática I;Matemática II  (Parte I);10138;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Estatística  (Parte I);10137,10279;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Teoria Microeconômica I  (Parte I);1011;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Metodologia e Técnicas de Pesquisa - Projeto I (Parte I);10169;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Matemática I;Matemática II  (Parte II);1050;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Estatística  (Parte II);10140;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Teoria Microeconômica I  (Parte II);1011;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Metodologia e Técnicas de Pesquisa - Projeto I (Parte II);10169;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Matemática II;Matemática III  (Parte I);10283,10285,10284;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Econometria I (Parte I);10281;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Teoria Microeconômica I;Teoria Microeconômica II;1013;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Matemática II;Matemática III  (Parte II);10283,10285,10284;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Econometria I (Parte II);10281;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Contabilidade Social e Introdução a Macro;10129;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Econometria I;Econometria II (Parte I);10212,1059;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Teoria e Política Macroeconômica I (Parte I);1010;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Teoria Microeconômica II;Teoria Microeconômica III: Estratégia, Evolução E Complexidade;1011,1013;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Metodologia e Técnicas de Pesquisa - Projeto I;Metodologia e Técnicas de Pesquisa - Projeto II (Parte I);1011,10169,10167;15;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Econometria II;Econometria III;10213,1059;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Economia Industrial e de Redes;10082;75;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Direito e Economia;10251;15;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;História Econômica Geral (Parte I);10211;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Finanças I (Parte I);10039;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Economia Internacional;1060;90;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;História Econômica Geral (Parte II);10211;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Finanças I (Parte II);10039;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Teoria e Política Macroeconômica II;1012;75;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Finanças I;Finanças II (Parte I);10042,10043,10046;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Macroeconomia do Desenvolvimento;1012;60;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Economia Brasileira Contemporânea;10210;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Tópicos Especiais em Economia;116;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;Metodologia e Técnicas de Pesquisa - Projeto II;Metodologia e Técnicas de Pesquisa - Projeto III (Parte I);1010,10169,1051;15;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;História do Pensamento Econômico (Parte I);10216;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Grandes Economistas  - à Distância (Parte I);10217;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Monografia (Parte I);1000;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;História Do Pensamento Econômico (Parte II);10216;45;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Grandes Economistas  - à Distância (Parte II);10217;30;Mensalidade - R$ 3.506@" +
		"FGV EESP;Curso de graduação em ciências econômicas;;Monografia (Parte II);1000;30;Mensalidade - R$ 3.506@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Crime e Sociedade;10230,10262,10263,10264;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Direitos da Pessoa Humana;10235,10229;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;História do Direito;10233,10161;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Introdução ao Direito;10230,10160,10020;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Artes e Direito I;10230;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Jurisprudência;10231,10232;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Oficina de Prática Jurídica I (Expressão Oral e Textual);10160,10236;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Organização das Relações Privadas;10230,1025;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Aprovação em vestibular FGV Direito;Política e Instituições Brasileiras;10162,10121;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Contabilidade;10106;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Constitucional;10121;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito de Família e Sucessões;1053,1054;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Filosofia Política;10161,138;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Artes e Direito I;Oficina de Artes e Direito II;10230;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Oficina de Legislação;10230,10160,10020;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica I;Oficina de Prática Jurídica II - Técnicas de Negociação e Mediação;10022;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Ordem Jurídica Internacional;10254,10255;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Organização da Justiça e do Processo;10257;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Administrativo I;129;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito da Organização Econômica;130;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito da Propriedade I;10246;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito dos Negócios I;10112,10117;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Obrigacional e Contratual I;10249,10022;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Processual Civil I;131;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Microeconomia;10130,10215;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Oficina de Inglês Jurídico I;10278;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica II - Técnicas de Negociação e Mediação;Oficina de Prática Jurídica III - Arbitragem;10196;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito Administrativo I;Direito Administrativo II;129;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito da Propriedade I;Direito da Propriedade II;10247,10248;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito dos Negócios I;Direito dos Negócios II;10112,10117;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito e Economia;130;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito Obrigacional e Contratual I;Direito Obrigacional e Contratual II;10250;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito Processual Civil I;Direito Processual Civil II;10259,1026;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Macroeconomia;10129;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Inglês Jurídico I;Oficina de Inglês Jurídico II;10278;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica III - Arbitragem;Oficina de Prática Jurídica IV: Redação e Estratégia Processual I;10261;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito da Responsabilidade I;10237;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito dos Negócios II;Direito dos Negócios III;10115,10116;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito e Processo do Trabalho;114;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito e Processo Penal I;10266,10267;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Global;134;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Tributário e Finanças Públicas I;10270,10271;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Ética e Teoria do Direito;1031;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica IV: Redação e Estratégia Processual I;Oficina de Prática Jurídica V: Redação e Estratégia Processual II;10261;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Oficina de Prática Jurídica V: Redação e Estratégia Processual II;Oficina de Prática Jurídica VI Redação e Estratégia Contratual;10249,10022;30;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Contencioso Empresarial;10249,131;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito da Responsabilidade I;Direito da Responsabilidade II;10237;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito dos Negócios III;Direito dos Negócios IV;10113,10114;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito e Processo Penal I;Direito e Processo Penal II;10266,10267;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Direito Internacional Econômico;134;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Direito Tributário e Finanças Públicas I;Direito Tributário e Finanças Públicas II;1025;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Sociologia Jurídica;143;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Teoria da Constituição;112;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;;Metodologia da Pesquisa em Direito I;10169;60;Mensalidade - R$ 4.300@" +
		"FGV Direito SP;Curso de graduação em direito;Metodologia da Pesquisa em Direito I;Metodologia da Pesquisa em Direito II;10169;60;Mensalidade - R$ 4.300@";
	
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
