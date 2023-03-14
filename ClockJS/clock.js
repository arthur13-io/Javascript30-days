function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour= now.getHours();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand= document.querySelector(`.minute-hand`);
    const hourHand = document.querySelector('.hour-hand');

    const secondsDegree = ((seconds/60)*360) + 90; //Divided it by 60 because the seconds hand move sixty times for a complete cycle (360 deg)
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minuteDegree = ((minutes/60)*360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`; //Divide it by 60 because the minutes hand move sixty times for a complete cycle (360 deg)

    const hourDegree = ((hour/12)*360) +90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;  //Divide by 12 because it the hour hand moves twelve times for a complete cycle(360 deg)
    console.log(hourDegree, minuteDegree, secondsDegree) 
}
setInterval(setDate, 1000);