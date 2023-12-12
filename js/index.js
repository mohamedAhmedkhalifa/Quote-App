var previousRandomIndex = null;

function randomQuote(){
    var qouteText = [   " “Be yourself; everyone else is already taken.” ",
                    " “So many books, so little time.” " ,
                    " “You only live once, but if you do it right, once is enough.” ",
                    " “Be the change that you wish to see in the world.” ",
                    " “If you tell the truth, you don't have to remember anything.” ",
                    " “A friend is someone who knows all about you and still loves you.” "
    ];



    var quoteAuthor = [ " -- Oscar Wilde " ,
                    " -- Frank Zappa ",
                    " -- Mae West " , 
                    " -- Mahatma Gandhi ", 
                    " -- Mark Twain " , 
                    " -- Elbert Hubbard"
    ];



    var num;
    do {
        num = Math.floor(Math.random() * qouteText.length);
    } while (num === previousRandomIndex);

    previousRandomIndex = num;


    document.getElementById('quoteText').innerHTML = (qouteText[num]);
    document.getElementById('quoteAuthor').innerHTML = (quoteAuthor[num]);

    // console.log(qouteText[num]);
    // console.log(quoteAuthor[num]);
}