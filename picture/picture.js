window.addEventListener('load', function () {
    'use strict';
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
        //changing page color using transitions
        const style = `bgcolor${counter}`;
        document.querySelector('body').className = style;


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