function carregarCursos(){
	banco.transaction( function (tx) {
			tx.executeSql( 'SELECT c.* FROM Curso AS c', [],
			        function (tx, results){    	  
			          	var quant = results.rows.length;
			          	var itens = [];
			          	for (var i = 0; i < quant; i++)
			          	{
			           	  	var res = results.rows.item(i);
			           	  	var item = document.createElement('button');
			           	  	var href = "document.location.href='cursos.detalhes.html'?id="+ res.Id;
			           	  	item.setAttribute('type','button');
								item.innerHTML = res.Nome;
								item.setAttribute('id', res.Id);
								item.setAttribute('class', 'btn btn-default btn-lg btn-block');
								item.setAttribute('onclick', href);
								itens.push(item);
								$('#listaCursos').append(item);
			            }
					},
			        function (tx, error)
			        {
			         	alert('Ops.. ' + error.message);
					  });
	});
}

function loadFromCourse(id){
	banco.transaction( function (tx) {
			tx.executeSql( 'SELECT c.* FROM Curso AS c INNER JOIN Area AS a ON(a.Id = c.Id_Area) INNER JOIN Grade AS g ON(g.Id_Curso = c.Id) LEFT JOIN Prof_Curso AS pc ON(pc.Id_Curso = c.Id) INNER JOIN Professor AS prof ON(prof.Id = pc.Id_Professor) WHERE c.Id = ' + id, [],
			        function (tx, results){    	  
			          	var quant = results.rows.length;
			          	var itens = [];
			          	for (var i = 0; i < quant; i++)
			          	{
			           	  	var res = results.rows.item(i);
			           	  	var item = document.createElement('button');
			           	  	var href = "document.location.href='cursos.detalhes.html'";
			           	  	item.setAttribute('type','button');
								item.innerHTML = res.Nome;
								item.setAttribute('id', res.Id);
								item.setAttribute('class', 'btn btn-default btn-lg btn-block');
								item.setAttribute('onclick', href);
								itens.push(item);
								$('#listaCursos').append(item);
			            }
					},
			        function (tx, error)
			        {
			         	alert('Ops.. ' + error.message);
					  });
	});

}