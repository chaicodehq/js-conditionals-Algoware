/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  let monthstring = '';
  let activity = '';

  const monthSeason = {
    Winter:[1,2,12],
    Spring:[3,4,5],
    Summer:[6,7,8],
    Autumn:[9,10,11]
  };
console.log(`Case for Temperature ${temperature} and month is ${month}`)  
  if(month < 1 || month >12)
    return null;

  Object.entries(monthSeason).forEach(([season,mon])=>{
    if(mon.includes(month))
    {
      monthstring = season;
    }
  });
    
switch(true){
  case (monthstring=='Winter' && temperature < 0):activity = "skiing";
  break;
  case (monthstring=='Winter' && temperature >= 0):activity = "ice skating";
  break;
  case (monthstring=='Spring' && temperature > 20):activity =  "hiking";
  break;
  case (monthstring=='Spring' && temperature <= 20):activity =  "museum visit";
  break;
  case (monthstring=='Summer' && temperature >35):activity =  "swimming";
  break;
  case (monthstring=='Summer' && temperature <=35):activity =  "cycling";
  break;
  case (monthstring=='Autumn' && temperature >15 ):activity = "nature walk";
  break;
  case (monthstring=='Autumn' && temperature <=15):activity =  "reading at a cafe"; break;
  default: return null ;
}
console.log(`Season ${monthstring} and activity is ${activity}`) 
return { season: monthstring, activity: activity };
}



