<script>
	function Location() {

		var myLatLng = {lat: -29.1787066, lng: -51.1666366};

		var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: myLatLng
        });

		var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
	}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB6tto3i9FUGLcKSE4qHtxk0QihUPC8KE&callback=Location"></script>
<!--
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
-->

</body>
	<!-- jquery -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<!-- js bootstrap -->
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	<!-- slick -->
	<script type="text/javascript" src="slick/slick.min.js"></script>
	<!-- Meus js -->
	<script type="text/javascript" src="js/main.js"></script>
</html>