jQuery.fn.abas = function(options)
{
		var element = this;
		options = $.extend({ classSelected: 'selected' }, options);
		
		this.escondeAbas = function(){
			$(this).find('.listAbas > li > a').removeClass(options.classSelected);
			$(this).children('.abas').hide();
		}
		
		this.showAba = function(id)
		{
			this.escondeAbas();
			
			$(this).find('.listAbas > li > a[href="'+ id +'"]').addClass(options.classSelected);
			$(this).children(id).show();
		}
		
		this.init = function()
		{
			var aTabs = $(this).find('.listAbas a');
			var abaSelecionada = $(this).find('.listAbas > li > a.' + options.classSelected);
			
			if(!abaSelecionada.length)
			{
				abaSelecionada = $(this).find('.listAbas > li > a:first');
			}
			element.showAba( $(abaSelecionada).attr('href') );
			
			$(aTabs).click(function(){
				// oculta todas as abas
				var idAba = $(this).attr("href");
				element.showAba(idAba);
				return false;
			});	
		}
		
		this.init();
}
