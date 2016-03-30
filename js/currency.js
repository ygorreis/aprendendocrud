$(document).ready(function() {
	
	$("#btn-converter").click(function() {

		$("#content").empty();
		valor = $("#valor-moeda").val();
		unidadesMoedaDe = $("#unidadesMoedaDe").val();

		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/ARS.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Peso Argentino:</th><th>ARS " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/AUD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar Australiano:</th><th>AUD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/BTC.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Bitcoin:</th><th>BTC " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/BRL.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Real Brasileiro:</th><th>BRL " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/CAD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar Canadense:</th><th>CAD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/CLP.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Peso Chileno:</th><th>CLP " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/CNY.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>China Yuan Renminbi:</th><th>CNY " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/CZK.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Coroa Checa:</th><th>CZK " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/DKK.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Coroa Dinamarquesa:</th><th>DKK " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/EUR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Euro:</th><th>EUR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/FJD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar Fijano:</th><th>FJD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/HNL.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Lempira Hondurenha:</th><th>HNL " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/HKD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar de Hong Kong:</th><th>HKD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/HUF.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Forint Húngaro:</th><th>HUF " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/ISK.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Coroa da Islândia:</th><th>ISK " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/INR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Rúpias Indianas:</th><th>INR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/IDR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Rúpia da Indonésia:</th><th>IDR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/ILS.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Novo Shekel Israelense:</th><th>ILS " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/JPY.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Iene Japonês:</th><th>JPY " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/KRW.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Won Sul-Coreano:</th><th>KRW " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/MYR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Malásia Ringgit:</th><th>MYR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/MXN.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Peso Mexicano:</th><th>MXN " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/NZD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar Neozelandês:</th><th>NZD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/NOK.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Coroa Norueguesa:</th><th>NOK " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/PKR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Rúpia Paquistanesa:</th><th>PKR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/PHP.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Peso Filipino:</th><th>PHP " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/PLN.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Polônia Zloty:</th><th>PLN " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/RUB.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Rublo Russo:</th><th>RUB " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/SGD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar de Singapura:</th><th>SGD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/ZAR.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Rand Sul-Africano:</th><th>ZAR " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/SEK.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Coroa Sueca:</th><th>SEK " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/CHF.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Franco Suíço:</th><th>CHF " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/TWD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Novo Dólar Taiwanês:</th><th>TWD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/THB.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Baht Tailandês:</th><th>THB " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/TRY.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Lira Turca:</th><th>TRY " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/GBP.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Libra Esterlina:</th><th>GBP " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/USD.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dólar Americano:</th><th>USD " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});
		$.ajax({
			url: 'https://currency-api.appspot.com/api/' + unidadesMoedaDe + '/VND.jsonp',
			dataType: "jsonp",
			success: function(response) {
				$('#content').append("<tr><th>Dong Vietnamita:</th><th>VND " + parseFloat(response.rate * valor).toFixed(2)+"</th></tr>");
			}
		});

	});
});