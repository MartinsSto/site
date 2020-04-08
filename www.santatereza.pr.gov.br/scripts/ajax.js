var displayErrors = false;

$(document).ajaxError( function(event, request, settings)
{
	if( displayErrors )
	{
		$('#msgErroAjax').html(request.responseText + '<div align="right"><a href="#" onClick="javaScript:$(\'#erroAjax\').slideUp();" >Fechar</a></div>' );
	}
	else
	{
		if (request.status == 500)
		{
			$('#msgErroAjax').html('Desculpe, ocorreu um erro inesperado.');
			
		}
		else if (request.status == 404)
		{
			$('#msgErroAjax').html('Erro: Página não encontrada.');
		}
	}
	
	$('#erroAjax').slideDown('fast', function()
	{
		if( !displayErrors )
			setTimeout("$('#erroAjax').slideUp()", 5000);
	});
});
