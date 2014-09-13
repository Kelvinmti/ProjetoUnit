function carregarProvas(){
	banco.transaction( function (tx) {
		//tx.executeSql("DROP TABLE disciplinas");
		 tx.executeSql('CREATE TABLE IF NOT EXISTS disciplinas (codigo integer primary key autoincrement, nome, nota1, nota2)', [],
			function () {	
			 tx.executeSql( 'SELECT c.Nome, c.Duracao, c.Descricao FROM cursos c INNER JOIN Area a ON(a.Id = c.Id_Area) INNER JOIN Prof_Curso p ON(p.Id_Professor = c.Id_Area)', [],
			        function (tx, results){    	  
			          	var quant = results.rows.length;
			          	var itens = [];
			          	for (var i = 0; i < quant; i++)
			          	{
			           	  	var disc = results.rows.item(i);
			           	  	var item = document.createElement('div');
							item.setAttribute('data-bb-type','item');
							item.setAttribute('data-bb-title',disc.nome);
							item.innerHTML = "Nota1: " + disc.nota1;
							item.setAttribute('id', disc.codigo);
							item.setAttribute('onclick', '');
							itens.push(item);
			            }
			            document.getElementById('listaProvas').refresh(itens);   		          
					},
			        function (tx, error)
			        {
			         	alert('Ops.. ' + error.message);
			        });
			});
	});

}