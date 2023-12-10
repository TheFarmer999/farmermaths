score = 0;
highScore = 0;

function isPrime(n)
{
    if(n == 2 || n == 3)
    {
        return true;
    }
    
    if(n % 2 == 0 || n == 1 || n == 0)
    {
        return false;
    }

    for(i = 3; i<Math.sqrt(n)+1;i++)
    {
        if(n % i == 0)
        {
            return false;
        }
    }
    return true;
}

function add()
{
    score += 1;
    document.getElementById("score").innerHTML = "n = " + score.toString();

    if(score > highScore)
    {
        highScore = score;
        document.getElementById("highscore").innerHTML = "n<sub>max</sub> = " + highScore.toString();
    }
}

function reset()
{
    score = 0;
    document.getElementById("score").innerHTML = "n = " + score.toString();
}

function yes()
{
    if(isPrime(score))
    {
        add();
    }
    else
    {
        reset();
    }
}

function no()
{
    if(!isPrime(score))
    {
        add();
    }
    else
    {
        reset();
    }
}