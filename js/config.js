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

    cargas(tx);
});

function cargas(tx) {
    tx.executeSql("DELETE FROM Professor", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Area", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Curso", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Grade", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("DELETE FROM Prof_Curso", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
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
    
    //Cargas do banco

    //Professores
    tx.executeSql("Insert into Professor values (null,'Ricardo')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Leonardo')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Bruno')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Junior')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Professor values (null,'Bacon')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    //Area
    tx.executeSql("Insert into Area values (null,'Ciências Biologicas')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Area values (null,'Ciências Exatas')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Area values (null,'Ciências Humanas')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Cursos
    tx.executeSql("Insert into Curso values(null,2,'Ciência da Computação',9,'Ciência da computação é a ciência que estuda as técnicas, metodologias e instrumentos computacionais, que automatiza processos e desenvolve soluções baseadas no uso do processamento digital. Não se restringe apenas ao estudo dos algoritmos, suas aplicações e implementação na forma de software, extrapolando para todo e qualquer conhecimento pautado no computador, que envolve também a telecomunicação, o banco de dados e as aplicações tecnológicas que possibilitam atingir o tratamento de dados de entrada e saída, de forma que se transforme em informação. Assim, a Ciência da Computação também abrange as técnicas de modelagem de dados e os protocolos de comunicação, além de princípios que abrangem outras especializações da área.')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Curso values(null,1,'Odontologia',9,'Odontologia é a área da saúde humana que estuda e trata o sistema estomatognático - compreende a face, pescoço e cavidade bucal, abrangendo ossos, musculatura mastigatória, articulações, dentes e tecidos. Em Portugal, a Medicina Dentária é um segmento independente, tal como no Brasil é a Odontologia. Cirurgião-Dentista é a denominação dada a estes profissionais no Brasil; em Portugal, os licenciados em Medicina Dentária designam-se Médicos Dentistas. Por saúde oral, entende-se a ausência de doença estomatológica, bem como a correcta função, estabilidade e até mesmo estética de todo o sistema estomatognático. É hoje certo e sabido que a saúde oral tem sérias implicações na saúde humana, sendo as duas indissociáveis.')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Curso values(null,3,'Psicologia',9,'Psicologia é o estudo do comportamento e dos processos mentais (experiências subjetivas inferidas através do comportamento). O principal foco da psicologia se encontra no indivíduo, em geral humano, mas o estudo do comportamento animal para fins de pesquisa e correlação, na área da psicologia comparada, também desempenha um papel importante.')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Grades
    tx.executeSql("Insert into Grade values (null,1,'Programação Imperativa')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Programação Orientada a Objetos')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Estrutura de Dados')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,1,'Algoritmos')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    tx.executeSql("Insert into Grade values (null,2,'Enfermagem 1')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Dentições e Outras Histórias')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Arcadas')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,2,'Análises e Acompanhamento de Dores')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    tx.executeSql("Insert into Grade values (null,3,'Filosofia')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'Nietzsche e a Queda dos Idolos')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'A Vida Alegre de Sartre')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Grade values (null,3,'Behaveorismo')", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    
    //Prof_Curso
    tx.executeSql("Insert into Prof_Curso values(1,1)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(2,1)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(3,2)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(4,3)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
    tx.executeSql("Insert into Prof_Curso values(5,2)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
}