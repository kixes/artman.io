

$(window).load(function() {
    // Animate loader off screen
    try{
        $(".se-pre-con").delay(500).slideUp("slow").$('html,body').scrollTop(0);
    }catch(err){
        console.error(err);
    }
    window.scrollTo(0, 0);
    

    

});

function skills(type){
	if (type == "leadership"){
		swal({
		  title: "Leadership",
		  text: "Leadership is not about shining above the rest. It's about doing what you can to keep your team focused and motivated to achieve the goal, especially when the stakes are high.",
		  type: "info",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Cool!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
	
	if (type == "problem solver"){
		swal({
		  title: "Problem Solver",
		  text: "Through strategic planning and deliberation, any problem can be solved given  a little elbow grease and determination.",
		  type: "info",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Alright!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}

	if (type == "developer"){
		swal({
		  title: "Software Architecture",
		  text: "<div style='text-align:left;margins:auto'><ul style='display:block;text-align:left;margins:auto'> <li>Web Development (JavaScript/jQuery, HTML/CSS)</li> <li>Database Applicaitons (SQL, PL/SQL, Data Structures)</li> <li>UX Design</li> <li>Operating System Operations (Linux, Windows)</li> </ul> </div>",
		  type: "info",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Love it!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false,
		  html: true
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
}

function EE(type){
	if (type == "sherwin"){
		swal({
		  title: "Sherwin Williams",
		  text: "<div style='text-align:left;margins:auto'><ul style='display:block;text-align:left;margins:auto'> <li>Planned data analysis applications by clarifying goals, designing functionality to be user friendly.</li> <li>Collaborated with team members to correctly categorizing content, funneling traffic more efficiently.</li> <li>Created and maintain underlying database schemas for the optimal data analytics.</li> <li>Deliberate and documented application structures to lower overhead for support.</li> </ul> </div>",
		  type: "",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Got it!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false,
		  html:true
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
	if (type == "best buy"){
		swal({
		  title: "Property Panorama",
		  text: "<div style='text-align:left;margins:auto'><ul style='display:block;text-align:left;margins:auto'> <li>Responsible for user experience.</li> <li>Maintain and update system dependences.</li> <li>Create and maintain software automation tools.</li> </ul> </div>",
		  type: "",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Nice!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false,
		  html:true
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
	if (type == "csu"){
		swal({
		  title: "Cleveland State University",
		  text: "<div style='text-align:left;margins:auto'><ul style='display:block;text-align:left;margins:auto'> <li>Honor Role Recognition: Spring 2015</li> <li>Related Coursework: Information Technology Concepts for Programmers, Programming Logic, Java Programming, and creating webpages with HTML, CSS & JavaScript, Assembly programing</li></ul> </div>",
		  type: "",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Great!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false,
		  html:true
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
	
	if (type == "tri-c"){
		swal({
		  title: "Cuyahoga Community College",
		  text: "<div style='text-align:left;margins:auto'><ul style='display:block;text-align:left;margins:auto'> <li>Honor Role Recognition: Spring 2013</li> <li>Related Coursework: Information Technology Concepts for Programmers, Programming Logic, Java Programming, and creating webpages with HTML, CSS & JavaScript</li></ul> </div>",
		  type: "",
		  showCancelButton: false,
		  confirmButtonColor: "#337ab7",
		  confirmButtonText: "Okay!",
		  cancelButtonText: "No, cancel plx!",
		  closeOnConfirm: true,
		  closeOnCancel: false,
		  html:true
		},
		function(isConfirm){
		  if (isConfirm) {
			return;
		  } else {
			return;
		  }
		});
	}
}
