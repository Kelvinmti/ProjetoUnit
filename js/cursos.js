function loadPage(id) {
	sessionStorage.idCurso = id;
	document.location.href = 'cursos.detalhes.html';
}

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
			           	  	item.setAttribute('type','button');
								item.innerHTML = res.Nome;
								item.setAttribute('id', res.Id);
								item.setAttribute('class', 'btn btn-default btn-lg btn-block');
								item.setAttribute('onclick', 'loadPage('+res.Id+')');
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

function criarDivs() {

}

function loadFromCourse(id){
	if (id !== 'undefined') {
	banco.transaction( function (tx) {
			tx.executeSql( 'SELECT c.*, a.Nome AS area FROM Curso AS c INNER JOIN Area AS a ON(a.Id = c.Id_Area) WHERE c.Id = ' + id, [],
			        function (tx, results){    	  
			          	var quant = results.rows.length;
			          	for (var i = 0; i < quant; i++)
			          	{
			           	  	var res = results.rows.item(i);
			           	  	if (i == 0) {
			           	  		$('#title').append(res.Nome);		           	  		
			           	  	} else {
			           	  		
			           	  	}

			           	  	item = document.createElement('div');
								item.innerHTML = "Area: " + res.area;
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);

			           	  	/*item = document.createElement('div');
								item.innerHTML = "Nome: " + res.Nome;
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);*/

			           	  	item = document.createElement('div');
								item.innerHTML = "Duração: " + res.Duracao;
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);

								item = document.createElement('div');
								item.innerHTML = "Descrição: ";
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);

								item = document.createElement('div');
								item.innerHTML = res.Descricao;
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);
			            }
					},
			        function (tx, error)
			        {
			         	alert('Ops.. ' + error.message);
					  });

        //PROFESSOR 
        tx.executeSql( 'SELECT prof.* FROM Prof_Curso AS pc INNER JOIN Professor AS prof ON(prof.Id = pc.Id_Professor) WHERE pc.Id_Curso = ' + id, [],
			        function (tx, results){    	  
			          	var quant = results.rows.length;
		          	   var item = document.createElement('div');
							item.innerHTML = "Corpo docente: ";
							item.setAttribute('class', 'col-md-12');
							$('#detalhe').append(item);
			          	for (var i = 0; i < quant; i++)
			          	{
			           	  	var res = results.rows.item(i);			           	  	
			           	  	item = document.createElement('div');
								item.innerHTML = res.Nome;
								item.setAttribute('class', 'col-md-12');
								$('#detalhe').append(item);
			            }
					},
			        function (tx, error)
			        {
			         	alert('Ops.. ' + error.message);
					  });
	});
}
}