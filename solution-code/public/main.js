console.log("welcome to my new app for candies")

$(document).ready(function(){


	$("newCandySubmit").click(function(event){
		event.preventDefault();

		var data = {
			newCandyName : $("#newCandyName").val()
		}

		$.post("/candies", data, function(){
			window.location.reload();
		});

	})

});