/**
 * Created by itc_user on 6/18/2016.
 */

/*function to print name along with the Quiz result popup page */
var printName = function () {
    var username = document.getElementById("first-name").value;
    document.getElementById("showText1").innerHTML = ("hello " + username);
    document.getElementById("showText2").innerHTML = ("hello " + username);
    document.getElementById("showText3").innerHTML = ("hello " + username);
    document.getElementById("showText4").innerHTML = ("hello " + username);
};

/*function that check results according to the score by the answers on the Quiz*/
var checkScore  = function() {
    var score = 0;
    score += checkAnswer("q1");
    score += checkAnswer("q2");
    score += parseInt(document.getElementById("q3").value);
    score += checkAnswer("q4");
    score += parseInt(document.getElementById("q5").value);


    /*lowest score = israeli brunch*/

    if (score >= 0 && score <= 8) {
        var modalbreakfast = document.getElementById('myModalBreakfast');
        var span = document.getElementsByClassName("close")[0];
        modalbreakfast.style.display = "block";
        span.onclick = function () {
            modalbreakfast.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modalbreakfast.style.display = "none";
            }
        }
    }
    /*second score = shakshooka*/
    else if (score > 8 && score <= 11) {
        var modalshakshooka = document.getElementById('myModalShakshooka');
        var span = document.getElementsByClassName("close")[0];
        modalshakshooka.style.display = "block";
        span.onclick = function () {
            modalshakshooka.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modalshakshooka.style.display = "none";
            }
        }
    }
    /*third score = falafel*/
    else if (score > 11 && score <= 13) {
        var modalfalafel = document.getElementById('myModalFalafel');
        var span = document.getElementsByClassName("close")[0];

        modalfalafel.style.display = "block";
        span.onclick = function () {
            modalfalafel.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modalfalafel.style.display = "none";
            }
        }
    }

    /*highest score = bureka*/
    if (score > 13 && score <= 16) {
        var modalbureka = document.getElementById('myModalBureka');
        var span = document.getElementsByClassName("close")[0];

        modalbureka.style.display = "block";
        span.onclick = function () {
            modalbureka.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modalbureka.style.display = "none";
            }
        }
    }
};

var checkAnswer = function(name) {
    var answerScore = 0;
    var allAnswers = document.getElementsByName(name);
    for (var i = 0; i < allAnswers.length; i++) {
        if (allAnswers[i].checked) {
            answerScore += parseInt(allAnswers[i].value);
        }
    }
    return answerScore;
}
