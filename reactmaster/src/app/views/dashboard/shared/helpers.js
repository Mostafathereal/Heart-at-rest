export function checkCondition(systolic, diastolic){
   if(systolic < 120 && diastolic < 80)
     return "Good"
   else if(systolic >=120 && systolic <=129 && diastolic < 80)
     return "Elevated"
   else if(systolic >=130 && systolic <=139 && diastolic >= 80 && diastolic <= 89)
     return "High Blood Pressure (Stage 1)"
   else if(systolic >=140 && systolic < 180 && diastolic > 90)
     return "High Blood Pressure (Stage 2)"
   else if(systolic >=180 && diastolic > 120)
     return "High Blood Pressure (Stage 3)"
}
