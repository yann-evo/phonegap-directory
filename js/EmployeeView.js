var EmployeeView = function(employee) {

 	this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
    };
 
    this.initialize();

    this.render = function() {
	    this.el.html(EmployeeView.template(employee));
	    return this;
	};
 
}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html())