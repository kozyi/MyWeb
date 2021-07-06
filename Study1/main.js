let target = document.querySelector("#dynamic");



function randomString()
{
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JS" ,"Learn to Python", "Learn to Ruby","기운센 천하장사", "무쇠로 만든 사나이"];

    let selectString = stringArr[ Math.floor( Math.random() * stringArr.length )];
    let selectStirngArray = selectString.split("");
    return selectStirngArray;
    
}

//리셋
function ResetArray()
{
    target.textContent = "";
    Typing( randomString() );
}

//한글자씩 타이핑
function Typing( randomArr )
{
    if( randomArr.length > 0 )
    {
        target.textContent += randomArr.shift();
        //setTimeout( Typing( randomArr ), 80 );
        setTimeout( function(){ Typing( randomArr ) }, 80 );
    }
    else
    {
        setTimeout( ResetArray, 3000 );
    }
}


Typing( randomString() );
//커서 깜빡
function blink()
{
    target.classList.toggle("active");
}

setInterval( blink, 500 );