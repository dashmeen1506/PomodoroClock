var incSession=document.getElementById("sessionplus");
var decSession=document.getElementById("sessionminus");
var incBreak=document.getElementById("breakplus");
var decBreak=document.getElementById("breakminus");
var start=document.getElementById("start");
var min_interval;
var sec_interval;
var timerName;
var count=0;
function startsess()
{
    document.getElementById("start").style.display='none';
    document.getElementById("pause").style.display='block';
    document.getElementById("resume").style.display='none';
    document.getElementById("sesshead").innerHTML="Session Start";
    document.getElementById("sessionplus").disabled=true;
    document.getElementById("sessionminus").disabled=true;
    document.getElementById("breakplus").disabled=true;
    document.getElementById("breakminus").disabled=true;
    startTimer();
}

function startTimer()
{
    var min = document.getElementById("minutes").innerHTML;
    var sec = document.getElementById("seconds").innerHTML;
    var check_min = checkMinute(parseInt(min)-0);
    var check_sec = checkSeconds(parseInt(sec)-1);
    if(check_sec==59)
    {
        check_min=check_min-1;
        if(check_min<10)
        check_min="0"+check_min;
    }
    document.getElementById("minutes").innerHTML=check_min;
    document.getElementById("seconds").innerHTML=check_sec;
    if(check_min==00 && check_sec==00)
    {
        document.getElementById("start").style.display='block';
        document.getElementById("pause").style.display='none';
        document.getElementById("resume").style.display='none';
        breaktime();
        return;
    }
    timerName=setTimeout(startTimer,1000);

}

function pausesess()
{
    clearTimeout(timerName);
    document.getElementById("start").style.display='none';
    document.getElementById("pause").style.display='none';
    document.getElementById("resume").style.display='block';
}

function resumesess()
{
    clearTimeout(timerName);
    document.getElementById("start").style.display='none';
    document.getElementById("pause").style.display='block';
    document.getElementById("resume").style.display='none';
    startsess();
}

function incSess()
{
    var stime=document.getElementById("stime");
    var min=document.getElementById("minutes").innerHTML;
    min=parseInt(min)+1;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML="00";
    stime.innerHTML=min+" min";
};

function decSess()
{
    var stime=document.getElementById("stime");
    var min=document.getElementById("minutes").innerHTML;
    min=parseInt(min)-1;
    if(min>0)
    {
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML="00";
    stime.innerHTML=min+" min";
    }
}

function breaktime()
{
    var bMin=document.getElementById("btime").innerHTML;
    var str = bMin.split(/(\d+)/);
    var changedisptime=document.getElementById("minutes");
    changedisptime.innerHTML="0"+str[1];
    count=count+1;
    document.getElementById("sesshead").innerHTML="Break Time";
    startBreak();
}

function startBreak()
{
    //var presentTime=document.getElementById("minutes").innerHTML;
    //var changedisptime=document.getElementById("minutes");
    var min = document.getElementById("minutes").innerHTML;
    var sec = document.getElementById("seconds").innerHTML;
    
    var check_min = checkMinute(parseInt(min)-0);
    var check_sec = checkSeconds(parseInt(sec)-1);

    if(check_sec==59)
    {
        check_min=check_min-1;
        if(check_min<10)
        check_min="0"+check_min;
    }
    document.getElementById("minutes").innerHTML=check_min;
    document.getElementById("seconds").innerHTML=check_sec;
    if(check_min==00 && check_sec==00)
    {
        clearTimeout(timerName);
        alert("Break Over....");
        window.location.reload();
        return;
    }
    timerName=setTimeout(startBreak,1000);
}

function incBr()
{
    var btime=document.getElementById("btime");
    var breaktime=document.getElementById("btime").innerHTML;
    var time = breaktime.split(/[]/);
    var min=parseInt(time[0]);
    min=min+1;
    btime.innerHTML=min+" min";
}
function decBr()
{
    var btime=document.getElementById("btime");
    var breaktime=document.getElementById("btime").innerHTML;
    var time = breaktime.split(/[]/);
    var min=parseInt(time[0]);
    if(min>1)
    min=min-1;
    btime.innerHTML=min+" min";
}
function resetsess()
{
    window.location.reload();
}

function checkMinute(min)
{
    if(min<10)
    {
        min="0"+min;
    }
    return min;
}	
function checkSeconds(s)
{
    var sec=parseInt(s);
    if (sec < 10 && sec >= 0) 
    {
        sec = "0" + sec;
    } 
    if (sec < 0)
    {
       sec = "59";
    }

    console.log("return time"+sec);
    return sec;
}