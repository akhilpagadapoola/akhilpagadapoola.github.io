function updateCountdown(currentYear) {
    
    const currentTime = new Date();
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    const diff = newYearTime - currentTime;
  
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    return d;
}
module.exports=updateCountdown;