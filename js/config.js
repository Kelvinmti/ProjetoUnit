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
    tx.executeSql("CREATE TABLE IF NOT EXISTS Professor (Id INT(11) NOT NULL AUTO_INCREMENT,Nome VARCHAR(60) NOT NULL,PRIMARY KEY (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Area
    tx.executeSql("CREATE TABLE IF NOT EXISTS Area (Id INT(11) NOT NULL AUTO_INCREMENT,Nome VARCHAR(60) NOT NULL,PRIMARY KEY (Id))", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    //Curso
    tx.executeSql("CREATE TABLE IF NOT EXISTS Curso (Id INT(11) NOT NULL AUTO_INCREMENT, Id_Area INT(11) NOT NULL, Nome VARCHAR(60) NOT NULL, Duracao SMALLINT(6) NOT NULL, Descricao TEXT NOT NULL,PRIMARY KEY (Id, Id_Area), INDEX fk_Curso_Area1_idx (Id_Area ASC), CONSTRAINT fk_Curso_Area1FOREIGN KEY (Id_Area)REFERENCES Area (Id) ON DELETE NO ACTION ON UPDATE NO ACTION)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    tx.executeSql("CREATE TABLE IF NOT EXISTS Grade (Id INT(11) NOT NULL AUTO_INCREMENT, Id_Curso INT(11) NOT NULL, Nome_Materia VARCHAR(60) NOT NULL, PRIMARY KEY (Id, Id_Curso), INDEX fk_Grade_Curso1_idx (Id_Curso ASC), CONSTRAINT fk_Grade_Curso1 FOREIGN KEY (Id_Curso) REFERENCES Curso (Id) ON DELETE NO ACTION ON UPDATE NO ACTION)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });

    tx.executeSql("CREATE TABLE IF NOT EXISTS Prof_Curso (Id_Professor INT(11) NOT NULL, Id_Curso INT(11) NOT NULL, PRIMARY KEY (Id_Professor, Id_Curso), INDEX fk_Prof_Curso_Curso1_idx (Id_Curso ASC), CONSTRAINT fk_Prof_Curso_Professor FOREIGN KEY (Id_Professor) REFERENCES Professor (Id) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT fk_Prof_Curso_Curso1 FOREIGN KEY (Id_Curso) REFERENCES Curso (Id) ON DELETE NO ACTION ON UPDATE NO ACTION)", [], null, function (tx, error) {
        alert('Ops... ' + error.message);
    });
});