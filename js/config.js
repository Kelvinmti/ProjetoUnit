//CREATE DB
var banco = window.openDatabase(
    'unitDB',
    '1.0',
    'Banco de dados referente ao armazenamento mobile',
    2 * 1024 * 1024
);

banco.transaction(function (tx) {
    //Criação do banco

    //Professor
    tx.executeSql("CREATE TABLE IF NOT EXISTS Professor (Id INTEGER PRIMARY KEY AUTOINCREMENT,Nome TEXT NOT NULL)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Area
    tx.executeSql("CREATE TABLE IF NOT EXISTS Area (Id INTEGER PRIMARY KEY AUTOINCREMENT,Nome TEXT NOT NULL)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Curso
    tx.executeSql("CREATE TABLE IF NOT EXISTS Curso (Id INTEGER PRIMARY KEY AUTOINCREMENT, Id_Area INTEGER NOT NULL, Nome TEXT NOT NULL, Duracao INT NOT NULL, Descricao TEXT NOT NULL, FOREIGN KEY (Id_Area) REFERENCES Area (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Grade
    tx.executeSql("CREATE TABLE IF NOT EXISTS Grade (Id INTEGER PRIMARY KEY AUTOINCREMENT, Id_Curso INTEGER NOT NULL, Nome_Materia TEXT NOT NULL, FOREIGN KEY (Id_Curso) REFERENCES Curso (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Prof_Curso
    tx.executeSql("CREATE TABLE IF NOT EXISTS Prof_Curso (Id_Professor INTEGER PRIMARY KEY, Id_Curso INTEGER NOT NULL, FOREIGN KEY (Id_Professor) REFERENCES Professor (Id), FOREIGN KEY (Id_Curso) REFERENCES Curso (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Teste (Id INTEGER PRIMARY KEY AUTOINCREMENT,Nome_Usuario TEXT NOT NULL)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Pergunta (Numero INTEGER PRIMARY KEY AUTOINCREMENT, Texto TEXT NOT NULL)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Opcoes (Id INTEGER PRIMARY KEY AUTOINCREMENT, Numero_Pergunta INTEGER NOT NULL, Texto TEXT NOT NULL, FOREIGN KEY (Numero_Pergunta) REFERENCES Pergunta (Numero))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Respostas (Id INTEGER PRIMARY KEY AUTOINCREMENT,Id_Teste INTEGER NOT NULL, Numero_pergunta INTEGER NOT NULL, Id_Opcao INTEGER NOT NULL, FOREIGN KEY (Id_Opcao) REFERENCES Opcoes (Id), FOREIGN KEY (Numero_pergunta) REFERENCES Pergunta (Numero), FOREIGN KEY (Id_Teste) REFERENCES Teste (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    tx.executeSql("CREATE TABLE IF NOT EXISTS Resultado (Id INTEGER PRIMARY KEY AUTOINCREMENT, Id_Teste INTEGER NOT NULL, Id_Curso INTEGER NOT NULL, FOREIGN KEY (Id_Teste) REFERENCES Teste (Id), FOREIGN KEY (Id_Curso) REFERENCES Curso (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    cargas(tx);
});

function cargas(tx) {
    //Deletes das tabelas
    tx.executeSql("DELETE FROM Professor", [], null, function (tx, error) {
        alert('DP Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Area", [], null, function (tx, error) {
        alert('DA Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Curso", [], null, function (tx, error) {
        alert('DC Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Grade", [], null, function (tx, error) {
        alert('DG Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Prof_Curso", [], null, function (tx, error) {
        alert('DPC Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Teste", [], null, function (tx, error) {
        alert('DT Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Pergunta", [], null, function (tx, error) {
        alert('DPg Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Opcoes", [], null, function (tx, error) {
        alert('DO Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Respostas", [], null, function (tx, error) {
        alert('DR Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Resultado", [], null, function (tx, error) {
        alert('DRs Ops... ' + error.message);
    });
    
    //Zerar autoincrementos
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Professor'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Area'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Curso'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Grade'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Teste'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Pergunta'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Opcoes'", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    //Cargas do banco

    //Professores
    tx.executeSql("Insert into Professor values (null,'Ricardo')", [], null, function (tx, error) {
        alert('Professor Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Leonardo')", [], null, function (tx, error) {
        alert('Professor Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Bruno')", [], null, function (tx, error) {
        alert('Professor Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Junior')", [], null, function (tx, error) {
        alert('Professor Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Bacon')", [], null, function (tx, error) {
        alert('Professor Ops... ' + error.message);
    });
    
    //Area
    tx.executeSql("Insert into Area values (null,'Ciências Biologicas')", [], null, function (tx, error) {
        alert('Area Ops... ' + error.message);
    });
    tx.executeSql("Insert into Area values (null,'Ciências Exatas')", [], null, function (tx, error) {
        alert('Area Ops... ' + error.message);
    });
    tx.executeSql("Insert into Area values (null,'Ciências Humanas')", [], null, function (tx, error) {
        alert('Area Ops... ' + error.message);
    });

    //Cursos
    tx.executeSql("Insert into Curso values(null,2,'Ciência da Computação',9,'Ciência da computação é a ciência que estuda as técnicas, metodologias e instrumentos computacionais, que automatiza processos e desenvolve soluções baseadas no uso do processamento digital. Não se restringe apenas ao estudo dos algoritmos, suas aplicações e implementação na forma de software, extrapolando para todo e qualquer conhecimento pautado no computador, que envolve também a telecomunicação, o banco de dados e as aplicações tecnológicas que possibilitam atingir o tratamento de dados de entrada e saída, de forma que se transforme em informação. Assim, a Ciência da Computação também abrange as técnicas de modelagem de dados e os protocolos de comunicação, além de princípios que abrangem outras especializações da área.')", [], null, function (tx, error) {
        alert('Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Curso values(null,1,'Odontologia',9,'Odontologia é a área da saúde humana que estuda e trata o sistema estomatognático - compreende a face, pescoço e cavidade bucal, abrangendo ossos, musculatura mastigatória, articulações, dentes e tecidos. Em Portugal, a Medicina Dentária é um segmento independente, tal como no Brasil é a Odontologia. Cirurgião-Dentista é a denominação dada a estes profissionais no Brasil; em Portugal, os licenciados em Medicina Dentária designam-se Médicos Dentistas. Por saúde oral, entende-se a ausência de doença estomatológica, bem como a correcta função, estabilidade e até mesmo estética de todo o sistema estomatognático. É hoje certo e sabido que a saúde oral tem sérias implicações na saúde humana, sendo as duas indissociáveis.')", [], null, function (tx, error) {
        alert('Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Curso values(null,3,'Psicologia',9,'Psicologia é o estudo do comportamento e dos processos mentais (experiências subjetivas inferidas através do comportamento). O principal foco da psicologia se encontra no indivíduo, em geral humano, mas o estudo do comportamento animal para fins de pesquisa e correlação, na área da psicologia comparada, também desempenha um papel importante.')", [], null, function (tx, error) {
        alert('Curso Ops... ' + error.message);
    });

    //Grades
    tx.executeSql("Insert into Grade values (null,1,'Programação Imperativa')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Programação Orientada a Objetos')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Estrutura de Dados')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Algoritmos')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });

    tx.executeSql("Insert into Grade values (null,2,'Enfermagem 1')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Dentições e Outras Histórias')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Arcadas')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Análises e Acompanhamento de Dores')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });

    tx.executeSql("Insert into Grade values (null,3,'Filosofia')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'Nietzsche e a Queda dos Idolos')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'A Vida Alegre de Sartre')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'Behaveorismo')", [], null, function (tx, error) {
        alert('Grade Ops... ' + error.message);
    });
    
    //Prof_Curso
    tx.executeSql("Insert into Prof_Curso values(1,1)", [], null, function (tx, error) {
        alert('Prof_Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(2,1)", [], null, function (tx, error) {
        alert('Prof_Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(3,2)", [], null, function (tx, error) {
        alert('Prof_Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(4,3)", [], null, function (tx, error) {
        alert('Prof_Curso Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(5,2)", [], null, function (tx, error) {
        alert('Prof_Curso Ops... ' + error.message);
    });
    
    //Teste
    tx.executeSql("Insert into Teste values(null,'Joaquim')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Teste values(null,'Joana')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Teste values(null,'Rosana')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    
    //Perguntas
    tx.executeSql("Insert into Pergunta values(null,'O professor que teve a maior influência sobre mim foi aquele:')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Pergunta values(null,'Admiro profissionais que:')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    
    //Opções
    tx.executeSql("Insert into Opcoes values(null,1,'Que me identificou como um dos melhores')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,1,'Que me mostrou uma nova e promissora área de trabalho')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,1,'Que me ensinou a raciocinar criticamente')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,1,'Que me auxiliou na busca por uma melhora nas minhas relações interpessoais')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,1,'Que me ajudou a enxergar novos interesses e talentos')", [], null, function (tx, error) {
        alert('Teste Ops... ' + error.message);
    });
    
    tx.executeSql("Insert into Opcoes values(null,2,'São muito bons e sempre estão envolvidos com trabalhos voluntários')", [], null, function (tx, error) {
        alert('Opcoes Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,2,'Seguem a tradição profissional da família e têm sucesso')", [], null, function (tx, error) {
        alert('Opcoes Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,2,'São considerados os melhores na sua profissão')", [], null, function (tx, error) {
        alert('Opcoes Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,2,'Sentem-se felizes e plenamente satisfeitos com seu trabalho')", [], null, function (tx, error) {
        alert('Opcoes Ops... ' + error.message);
    });
    tx.executeSql("Insert into Opcoes values(null,2,'Fazem sucesso e ficam ricos com seu trabalho')", [], null, function (tx, error) {
        alert('Opcoes Ops... ' + error.message);
    });
    
    //Respostas
    tx.executeSql("Insert into Respostas values(null,1,1,3)", [], null, function (tx, error) {
        alert('Respostas Ops... ' + error.message);
    });
    tx.executeSql("Insert into Respostas values(null,1,2,2)", [], null, function (tx, error) {
        alert('Respostas Ops... ' + error.message);
    });
    tx.executeSql("Insert into Respostas values(null,2,1,3)", [], null, function (tx, error) {
        alert('Respostas Ops... ' + error.message);
    });
    tx.executeSql("Insert into Respostas values(null,2,2,4)", [], null, function (tx, error) {
        alert('Respostas Ops... ' + error.message);
    });
    tx.executeSql("Insert into Respostas values(null,3,1,5)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Respostas values(null,3,2,1)", [], null, function (tx, error) {
        alert('Respostas Ops... ' + error.message);
    });
    
    //Teste
    tx.executeSql("Insert into Resultado values(null,1,2)", [], null, function (tx, error) {
        alert('Resultado Ops... ' + error.message);
    });
    tx.executeSql("Insert into Resultado values(null,2,1)", [], null, function (tx, error) {
        alert('Resultado Ops... ' + error.message);
    });
    tx.executeSql("Insert into Resultado values(null,3,3)", [], null, function (tx, error) {
        alert('Resultado Ops... ' + error.message);
    });
}