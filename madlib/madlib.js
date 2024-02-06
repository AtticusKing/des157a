(function(){
    'use strict';
    console.log('reading js');

const myForm = document.querySelector('#myForm');
const myArticle = document.querySelector('#madlib');

myForm.addEventListener('submit', function (event){
    event.preventDefault();
    const verb1 = document.querySelector('#verb1').value;
    const place = document.querySelector('#place').value;
    const verb2 = document.querySelector('#verb2').value;
    const emotion = document.querySelector('#emotion').value;
    const number = document.querySelector('#number').value;
    const adjective1 = document.querySelector('#adjective1').value;
    const noun1 = document.querySelector('#noun1').value;
    const noun2 = document.querySelector('#noun2').value;
    const name = document.querySelector('#name').value;
    const word = document.querySelector('#word').value;
    const verb3 = document.querySelector('#verb3').value;
    const noun3 = document.querySelector('#noun3').value;
    const movie = document.querySelector('#movie').value;
    const adjective2 = document.querySelector('#adjective2').value;
    const adjective3 = document.querySelector('#adjective3').value;
    const noun4 = document.querySelector('#noun4').value;
    const noun5 = document.querySelector('#noun5').value;
    const verb4 = document.querySelector('#verb4').value;
    console.log(verb1);


        /* let myText;
        if (noun1 && noun2 && adj1 && verb1){
            myText = `This is a ${noun1} that ${noun2} so it ${adj1} and then ${verb1}`;
        } else {
            myText = "I'm hungry for words!";
        } */


       let myText;

        if(verb1 == '') {
            myText = "Please provide a noun";
            document.querySelector('#verb1').focus();
        }

        else if (place == '') {
            myText = "Please provide a noun";
            document.querySelector('#place').focus();
        }

        else if (verb2 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#verb2').focus();
        }

        else if (emotion == '') {
            myText = "Please provide an adjective";
            document.querySelector('#emotion').focus();
        }

        else if (number == '') {
            myText = "Please provide an adjective";
            document.querySelector('#number').focus();
        }

        else if (adjective1 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#adjective1').focus();
        }

        else if (noun1 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#noun1').focus();
        }

        else if (noun2 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#noun2').focus();
        }

        else if (name == '') {
            myText = "Please provide an adjective";
            document.querySelector('#name').focus();
        }

        else if (word == '') {
            myText = "Please provide an adjective";
            document.querySelector('#word').focus();
        }

        else if (verb3 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#verb3').focus();
        }

        else if (noun3 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#noun3').focus();
        }

        else if (movie == '') {
            myText = "Please provide an adjective";
            document.querySelector('#movie').focus();
        }

        else if (adjective2 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#adjective2').focus();
        }

        else if (adjective3 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#adjective3').focus();
        }

        else if (noun4 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#noun4').focus();
        }

        else if (noun5 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#noun5').focus();
        }

        else if (verb4 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#verb4').focus();
        }
        
        else {
            myText = `Reviews for the new hit movie "${verb1} in ${place}" have been pouring in, and it seems like audiences are ${verb2} between enthusiasm and ${emotion}. Some of the more enthusiastic ${number}-star reviews praise the film's ${adjective1} twist when the main character is revealed to be a ${noun1}. While those who didn't like it are angrily pointing their ${noun2} at the lead actor, a woman named ${name} Mc${word}. Critics claim her ${verb3} was a bit too "over-the-${noun3}" and that she should stick to ${movie} instead of action films. The evil mastermind, a ${adjective2} man, is being criticized for his menacing laughter, which some describe as more ${adjective3} than “scary." All-in-all, it seems ${noun4} and ${noun5} are the keys to cinematic success, leaving audiences wondering if they've just witnessed the birth of a new genre: the ${verb4} blockbuster.`;
            document.querySelector('#verb1').value = '';
            document.querySelector('#place').value = '';
            document.querySelector('#verb2').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#number').value = '';
            document.querySelector('#adjective1').value = '';
            document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#word').value = '';
            document.querySelector('#verb3').value = '';
            document.querySelector('#noun3').value = '';
            document.querySelector('#movie').value = '';
            document.querySelector('#adjective2').value = '';
            document.querySelector('#adjective3').value = '';
            document.querySelector('#noun4').value = '';
            document.querySelector('#noun5').value = '';
            document.querySelector('#verb4').value = '';
            
            document.querySelector('#submit').addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelector('#overlay').className = "showing";
            });
    
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    document.querySelector('#overlay').className = "hidden";
                }
            });
        }

        myArticle.innerHTML = myText;
    });

        /* if (verb1 && place && verb2 && emotion && number && adjective1 && noun1 && noun2 && name && word && verb3 && noun3 && movie && adjective2 && adjective3 && noun4 && noun5 && verb4){
        document.querySelector('.myForm').addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#overlay').className = "showing";
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                document.querySelector('#overlay').className = "hidden";
            }
        }); */

})();