



(function($) { 
    		// значение по умолчанию - ЗЕЛЁНЫЙ
    		//var defaults = { color:'green' };

    		// актуальные настройки, глобальные
    		//var options;

    		$.fn.customizeSelect = function(){
        	// при многократном вызове функции настройки будут сохранятся, и замещаться при необходимости
        	//var options = $.extend({}, defaults, options, params);
        	var This =this; 
        	//console.log(this);

        	//initializeCustomSelect();
        	customSelect(This);

			//выборочая инициализация
			function customSelect(This) {
				//console.log(This);
				var This =  This;
				$(This).addClass('custom_select');
				$(This).children().wrap('<div class="option"></div>');
				$('<div class="selected_option"></div>').prependTo(This);
				$(This).find('.option').wrapAll('<div class="wrap_options"></div>');
				var thisSelected = $(This).find('.selected_option');
				$(This).find('.option').eq(0).clone().appendTo(thisSelected);
				$(thisSelected).find('.option').children().addClass('active');
				openCustomSelect();
			}


			//общая инициализация
			function initializeCustomSelect() {	
				console.log('начало инициализации');
				$('.custom_select').each(function() {
					$(this).children().wrap('<div class="option"></div>');
					$('<div class="selected_option"></div>').prependTo(this);
					$(this).find('.option').wrapAll('<div class="wrap_options"></div>');
					var thisSelected = $(this).find('.selected_option');
					$(this).find('.option').eq(0).clone().appendTo(thisSelected);
					$(thisSelected).find('.option').children().addClass('active');

				})


				openCustomSelect();

			}


			function openCustomSelect() {
				$('.selected_option').click(function() {
					console.log('клик');
					var options = $(this).parent().find('.option');
					var optHeight = $(options).outerHeight();
					var optCount = $(options).length;
					var heightWrap = optHeight * optCount;

					$(this).parent().find('.wrap_options').css('height', heightWrap);
					$(this).parent().find('.wrap_options').addClass('active');

					var selectThis = $(this);
					selectOption(selectThis);

				})
			}


			function destroyCustomSelect(selector) {
				console.log('дестрой селект');


				$(selector).find('.selected_option').remove()
				$(selector).find('.option').unwrap();
				$(selector).find('.option').children().unwrap();
			}



			function selectOption(selectThis) {
				$(selectThis).parent().find('.wrap_options .option').click(function() {

					var thisSelect = $(selectThis).parent().find('.selected_option')
					$(selectThis).parent().find('.selected_option .option').remove();
					$(this).clone().appendTo(thisSelect);
					$(thisSelect).find('.option').children().addClass('active');
					$(selectThis).parent().find('.wrap_options').css('height', 0);
					$(selectThis).parent().find('.wrap_options').removeClass('active');
				})
			}

			return this;  // end pluginit
		};  // end pluginit
	})(jQuery);  // end pluginit




