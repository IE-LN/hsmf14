'use strict';

	document.getElementById('video').onclick = function() {
		picoModal({
			content: '<img src="http://placekitten.com/300/160"/>',
			width: 			900,
			overlayStyles: 	{
				backgroundColor: '#000',
				opacity: 		 .5
			}
		});
	}

/*
var modal = picoModal({
					content: 		'<img id="modal-image" src="'+path+'" gallery-modal data-index="'+scope.$parent.$index+'"/>',
					width: 			900,
					closeButton:	false,
					overlayStyles: 	{
						backgroundColor: '#000',
						opacity: 		 .5
					}
				});
*/