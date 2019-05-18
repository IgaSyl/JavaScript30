document.addEventListener("DOMContentLoaded",(e)=>{
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds/60)*360)+90;// changing seconds into degrees for clock hand; +90 because at the begining clock hand is set up at 90 deg for default clock look ;)
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes/60)*360)+90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours/12)*360)+90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    }

    setInterval(setDate, 1000);

});