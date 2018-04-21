var bool;


$(document).ready(function(){

	$(function() {
		$(".hidden_forms").hide();

	if(localStorage.getItem("bool")==null)
	{	bool = 0;

		localStorage.setItem("bool", bool);
	}
	else
		bool = localStorage.getItem("bool");

		//Lancer une première fois avec :
		//bool = 0;
		//Puis le commenter et continuer


		if(bool==1){

		$("#notif").removeClass("orange");
		}
	});

	$("#save").click(function(){
	    $(".hidden_forms").hide();
	    $("#edit").show();
	    $(".editable").show();
	});

	$("#edit").click(function(){
	    $(".hidden_forms").show();
	    $(".editable").hide();
	    $("#edit").hide();
	});




	var scrollTo = function(name_section) {
  		var section_id = "#section_" + name_section;
		var content = $("#right");
  		var target =  $(section_id).offset().top - 130;
  		content.stop().animate({ scrollTop: target }, 1000);


	};

	$("#section_appels_btn").click(function(){
		scrollTo("appels");
	});

	$("#section_demandes_btn").click(function(){
		scrollTo("demandes");
	});

	$("#section_publications_btn").click(function(){
		scrollTo("publications");
	});


	$("#notif").click(function(){
		$("#notif").removeClass("orange");
		boolTo1();
	})



	function boolTo1(){
		bool = 1;
		localStorage.setItem("bool", bool);
	}

		function boolTo0(){
		bool = 0;
		localStorage.setItem("bool", bool);
	}

/* ====== add class on pagination if the section is visible ====== 
$(document).scroll(function() {
    var cutoff = $(window).scrollTop() + 200; // on défini la position de déclenchement (*1)
    // Find current section and highlight nav menu
    var curSec = $.find('.current'); // on cherche l'élément (section) avec la class current
    var curID = $(curSec).attr('id'); // on récupère son ID
    alert(curID);
    var curNav = $.find('a[href=#'+curID+']'); // on cherche l'élément de navigation correspondant (*2)
	
	$('span a').removeClass('is-active'); // on nettoie la navigation de la class active présente
    $(curNav).addClass('active'); // (*2) -> on ajoute la class active

    $('section').each(function(){
       if($(this).offset().top + $(this).height() > cutoff){ // si la section est dans le champ de scroll
            $('section').removeClass('current') // on nettoie les sections de la class current présente
            $(this).addClass('current'); // on ajoute la class current à la section visible
            return false; // on stoppe l'iteration (le cas contraire, seule la derniere section se verra ajoutée la class)
        }
    });
});*/






$(function initMap() {
	        var pauline = {lat: 48.87911035, lng: 2.50809512};
	        var grenelle = {lat: 48.84861449, lng: 2.29180178};
	        var autre = {lat: 48.86011035, lng: 2.40803532};
	        var map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 12,
	          center: grenelle
	        });
	        var marker_pauline = new google.maps.Marker({
	          position: pauline,
	          map: map
	        });
	        var marker_grenelle = new google.maps.Marker({
	          position: grenelle,
	          map: map
	        });
	        var marker_autre = new google.maps.Marker({
	          position: autre,
	          map: map
	        });
	      });

});



