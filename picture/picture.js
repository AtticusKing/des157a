
/* because the image is large, you don't want to do anything 
in this script, until  you are sure the image has loaded. */
window.addEventListener('load', function () {
    'use strict';

	//define variables needed
	const posts = document.querySelectorAll('section');
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	let doneResizing;

	//see below for what this function does
	resetPagePosition();


	/* Everything in this event handler runs everytime the window 
	is scrolled just a little bit. Be careful about preformance */
	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 300;
		//console.log(pagetop);

		// if the user is scrolling down the page...
		if (pageTop > postTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		// if the user is down the page and scrolling up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}

		// when the section changes...
		if (counter != prevCounter) {
			// changes the class name on the image, which activates animation...
			document.querySelector('figure img').className = 'picture' + counter;
            document.querySelector('#extra').className = 'stars' + counter;
			prevCounter = counter;

/* The caption from the HTML file are broken up into an
	array so that one part of the caption can be shown at at
	time, depending on which section is on the screen. */
	const captions = [
		// captions[0] is empty because counter starts at 1
		'',
        '',
        '<img src="images/Caran.png" alt="Image 2" width="10px">',
		'<img src="images/Castan.png" alt="Image 1" width="10px">',  
        '<img src="images/Paibu.png" alt="Image 3" width="10px">',
        '<img src="images/Eurus.png" alt="Image 4" width="10px">'
    ];

	let figCaption = document.querySelector('figcaption');

	// Set the first caption for when the screen loads...
	figCaption.innerHTML = captions[1];
            
// animates the caption off the top of the screen
figCaption.className = 'exit';

// this event handler runs when the CSS animation finishes
figCaption.addEventListener('animationend', function () {
    // Clone the figcaption
    let newCaption = document.querySelector('figcaption').cloneNode(true);
    // remove the original figcaption
    figCaption.remove();
    // add a class name to the new fig caption (the one that was cloned)
    newCaption.className = 'enter';
    // change the caption based on which section is on the screen
    newCaption.innerHTML = captions[counter];
    // put the new caption on the page
    document.querySelector('figure').appendChild(newCaption);
    // reassign the figCaption variable
    figCaption = document.querySelector('figcaption');
});
            
		}

        

	}); // end window scroll function

	// this event handler fires while the window is being resized
	window.addEventListener('resize', function () {

		clearTimeout(doneResizing);
		// this runs after the window has stopped being resized...
		doneResizing = setTimeout(function () {

			resetPagePosition();

		}, 500);
	});

	// this function resets variables, which may have changed based on resizing
	function resetPagePosition() {
		postTops = [];
		posts.forEach(function (post) {
			postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
		});

		const pagePosition = window.pageYOffset + 300;
		counter = 0;

		postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

	}

}); // end window load function








window.addEventListener('load', function () {
    // Add JS here

    const sections = document.querySelectorAll('section');
    let sectionTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    sections.forEach(function (eachSection) {
        sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
    });
    
    //console.log(sectionTops);




    window.addEventListener('scroll', function () {
        pagetop = window.scrollY + (window.innerHeight / 2); // Calculate middle of viewport
    
        if (pagetop >= sectionTops[sectionTops.length - 1]) {
            if (counter !== sectionTops.length) {
                counter = sectionTops.length;
                onSectionChange();
            }
        } else {
            for (let i = 0; i < sectionTops.length - 1; i++) {
                if (pagetop >= sectionTops[i] && pagetop < sectionTops[i + 1]) {
                    if (counter !== i + 1) {
                        counter = i + 1;
                        onSectionChange();
                    }
                    break;
                }
            }
        }
    });
    
    


    function onSectionChange(){
        // Change classes on the section...
        for( const eachPost of sections){
        eachPost.className = 'offscreen';
        }
        document.querySelector(`#section0${counter}`).className = 'onscreen';
    };




    window.addEventListener('resize', function () {
    
        clearTimeout(doneResizing);
        
        doneResizing = setTimeout(function () {

        resetPagePosition();

    }, 500);

    });


    function resetPagePosition() {
        sectionTops = [];
        sections.forEach(function (eachSection) {
            sectionTops.push(Math.floor(eachSection.getBoundingClientRect().top) + window.scrollY);
        });
    
        // how far down has someone scrolled
        const pagePosition = window.scrollY + sectionTops[0] + 10;
        counter = 1; // Reset counter to 1
        for (let i = 1; i < sectionTops.length; i++) {
            if (pagePosition >= sectionTops[i]) { // Use >= to include the case where pagePosition == eachSection
                counter = i + 1;
            } else {
                break; // Exit loop if we've found the correct section
            }
        }
    }
    



}); //end window load event listener



