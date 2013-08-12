var EmployeeView = function(employee) {

 	this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.change-pic-btn', this.changePicture);
    };
 
    this.initialize();

    this.render = function() {
	    this.el.html(EmployeeView.template(employee));
	    return this;
	};

	this.changePicture = function(event) {
	    event.preventDefault();
	    if (!navigator.camera) {
	        app.showAlert("Camera API not supported", "Error");
	        return;
	    }
	    var options =   {   quality: 50,
	                        destinationType: Camera.DestinationType.DATA_URL,
	                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
	                        encodingType: 0     // 0=JPG 1=PNG
	                    };
	 
	    navigator.camera.getPicture(
	        function(imageData) {
	            $('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
	        },
	        function() {
	            app.showAlert('Error taking picture', 'Error');
	        },
	        options);
	 
	    return false;
	};

 
}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html())