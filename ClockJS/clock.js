function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour= now.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand= document.querySelector(`.minute-hand`);
    const hourHand = document.querySelector('.hour-hand');

    const secondsDegree = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minuteDegree = ((minutes/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hourDegree = ((hour/minutes)*360) +90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;  
}
setInterval(setDate, 1000);