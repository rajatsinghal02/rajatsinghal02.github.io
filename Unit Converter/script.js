var input = document.getElementById('fromval');
var result = document.getElementById('toval');
var inputType = document.getElementById('calfrom');
var resultType = document.getElementById('calto');

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

 
inputTypeValue= inputType.value;
resultTypeValue= resultType.value;


function myResult(){
    
    inputTypeValue= inputType.value;
    resultTypeValue= resultType.value;
     //Length Conversion formulas
    //Meter conversion Formulas

if(inputTypeValue == "meter" && resultTypeValue == "kilometer")
{
    result.value = Number(input.value) * 0.001;
}
else if(inputTypeValue =="meter" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 100;
}
else if(inputTypeValue =="meter" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 1000;
}
else if(inputTypeValue =="meter" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 1000000;
}
else if(inputTypeValue =="meter" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1000000000;
}
else if(inputTypeValue =="meter" && resultTypeValue == "mile"){
    result.value= Number(input.value) * 0.0006213689;
}
else if(inputTypeValue =="meter" && resultTypeValue == "yard"){
    result.value= Number(input.value) * 1.0936132983;
}
else if(inputTypeValue =="meter" && resultTypeValue == "foot"){
    result.value= Number(input.value) * 3.280839895;
}
else if(inputTypeValue =="meter" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 39.37007874;
}
else if(inputTypeValue =="meter" && resultTypeValue == "meter"){
    result.value= Number(input.value) * 1;
}

  //Kilometer Conversion formulas

  else if(inputTypeValue =="kilometer" && resultTypeValue == "meter"){
    result.value= Number(input.value) * 1000;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 100000;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 1e+6;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 1e+9;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1e+12;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 1.609;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "yard"){
    result.value= Number(input.value) * 1094;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "foot"){
    result.value= Number(input.value) * 3281;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 39370;
}
else if(inputTypeValue =="kilometer" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) * 1;
}

   //Centimeter Conversion Formulas
   else if(inputTypeValue =="centimeter" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 100;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 100000;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 10;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 10000;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1e+7;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 160900;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 91.44;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "foot"){
    result.value= Number(input.value) / 30.48;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "inch"){
    result.value= Number(input.value) / 2.54;
}
else if(inputTypeValue =="centimeter" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) *1;
}

   //Milimeter Conversion Formulas
   else if(inputTypeValue =="milimeter" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 1000;
   }
    else if(inputTypeValue =="milimeter" && resultTypeValue == "kilometer"){
        result.value= Number(input.value) / 1e+6;
    }
    else if(inputTypeValue =="milimeter" && resultTypeValue == "centimeter"){
        result.value= Number(input.value) / 10;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 1000;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1e+6;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 1.609e+6;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 914.4;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "foot"){
    result.value= Number(input.value) /304.8;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "inch"){
    result.value= Number(input.value) /25.4;
}
else if(inputTypeValue =="milimeter" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 1;
}
 
//Micrometer Conversion Formulas

else if(inputTypeValue =="micrometer" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 1e+6;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 1e+9;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) / 10000;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) / 1000;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1000;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 1.609e+9;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 914400;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "foot"){
    result.value= Number(input.value) / 304800;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "inch"){
    result.value= Number(input.value) / 25400;
}
else if(inputTypeValue =="micrometer" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 1;
}

//Nanometer Conversion Formulas

else if(inputTypeValue =="nanometer" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 1e+9;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 1e+12;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) / 1e-7;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) / 1e-6;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) / 1000;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 1.609e+12;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 9.144e+8;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "foot"){
    result.value= Number(input.value) / 3.048e+8;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "inch"){
    result.value= Number(input.value) / 2.54e+7;
}
else if(inputTypeValue =="nanometer" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1;
}

//Mile Conversion Formulas
else if(inputTypeValue =="mile" && resultTypeValue == "meter"){
    result.value= Number(input.value) * 1609;
}
else if(inputTypeValue =="mile" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) * 1.609;
}
else if(inputTypeValue =="mile" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 160900;
}
else if(inputTypeValue =="mile" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 1.609e+6;
}
else if(inputTypeValue =="mile" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 1.609e+9;
}
else if(inputTypeValue =="mile" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 1.609e+12;
}
else if(inputTypeValue =="mile" && resultTypeValue == "yard"){
    result.value= Number(input.value) * 1760;
}
else if(inputTypeValue =="mile" && resultTypeValue == "foot"){
    result.value= Number(input.value) * 5280;
}
else if(inputTypeValue =="mile" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 63360;
}

   //Yard Conversion Formulas
   else if(inputTypeValue == "yard" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 1.094;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 1094;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 91.44;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 914.4;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 914400;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) / 9.144e+8;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 1760;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "foot"){
    result.value= Number(input.value) * 3;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 36;
   }
   else if(inputTypeValue == "yard" && resultTypeValue == "yard"){
    result.value= Number(input.value)  * 1;
   }
   

   //Foot conversion Formulas
   else if(inputTypeValue == "foot" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 3.281;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 3281;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 30.48;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 304.8;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 304800;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "nanometer"){
    result.value= Number(input.value)  * 3.048e+8;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 5280;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 3;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 12;
   }
   else if(inputTypeValue == "foot" && resultTypeValue == "foot"){
    result.value= Number(input.value) / 1;
   }

   //inch conversion formulas
   else if(inputTypeValue == "inch" && resultTypeValue == "meter"){
    result.value= Number(input.value) / 39.37;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "kilometer"){
    result.value= Number(input.value) / 39370;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "centimeter"){
    result.value= Number(input.value) * 2.54;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "milimeter"){
    result.value= Number(input.value) * 25.4;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "micrometer"){
    result.value= Number(input.value) * 25400;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "nanometer"){
    result.value= Number(input.value) * 2.54e+7;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "mile"){
    result.value= Number(input.value) / 63360;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "yard"){
    result.value= Number(input.value) / 36;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "foot"){
    result.value= Number(input.value) / 12;
   }
   else if(inputTypeValue == "inch" && resultTypeValue == "inch"){
    result.value= Number(input.value) * 1;
   }

   //Mass conversion formulas
   //Gram conversion formulas
   else if(inputTypeValue == 'gram' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) /1000;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) /1e+6;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) * 1000;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 1e+6;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1.0606e+6;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'us'){
    result.value = Number(input.value) / 907200;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'stone'){
    result.value = Number(input.value) / 6350;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'pound'){
    result.value = Number(input.value) / 453.6;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) / 28.35;
   }
   else if(inputTypeValue == 'gram' && resultTypeValue == 'gram'){
    result.value = Number(input.value) * 1;
   }

   //kilogram conversion formulas
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'gram'){
    result.value = Number(input.value) * 1000;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) /1000;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) * 1e+6;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 1e+9;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1016;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'us'){
    result.value = Number(input.value) / 907.2;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'stone'){
    result.value = Number(input.value)  / 6.35;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'pound'){
    result.value = Number(input.value) * 2.205;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) * 35.274;
   }
   else if(inputTypeValue == 'kilogram' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) * 1;
   }

   //tonne conversion formulas
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) * 1000;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'gram'){
    result.value = Number(input.value) * 1e+6;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) * 1e+9;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 1e+12;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1.016;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'us'){
    result.value = Number(input.value) * 1.102;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'stone'){
    result.value = Number(input.value) * 157.5;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'pound'){
    result.value = Number(input.value) * 2205;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) * 35270;
   }
   else if(inputTypeValue == 'tonne' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) * 1;
   }

   //Miligram conversion formulas
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) / 1e+9;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) / 1e+6;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'gram'){
    result.value = Number(input.value) / 1000;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 1000;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1.016e+9;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'us'){
    result.value = Number(input.value) / 9.072e+8;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'stone'){
    result.value = Number(input.value) / 6.35e+6;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'pound'){
    result.value = Number(input.value) / 453600;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) / 28350;
   }
   else if(inputTypeValue == 'miligram' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) * 1;
   }

   //Microgram cinversion formulas

   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) / 1e+12;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) / 1e+9;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'gram'){
    result.value = Number(input.value) / 1e+6;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) / 1000;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1.016e+12;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'us'){
    result.value = Number(input.value) / 9.072e+11;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'stone'){
    result.value = Number(input.value) / 6.35e+9;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'pound'){
    result.value = Number(input.value) / 4.536e+8;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) / 2.835e+7;
   }
   else if(inputTypeValue == 'Microgram' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 1;
   }

   //Imperial ton conversion formulas

   else if(inputTypeValue == 'imperial' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) * 1.01605;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) * 1016.05;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'gram'){
    result.value = Number(input.value) / 1.016e+6;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) / 1.016e+9;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) / 1.016e+12;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'us'){
    result.value = Number(input.value) * 1.12;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'stone'){
    result.value = Number(input.value) * 160;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'pound'){
    result.value = Number(input.value) * 2240;
   }
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) * 35840;
   }
   
   else if(inputTypeValue == 'imperial' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) * 1;
   }
   
   //US ton conversion formulas

   else if(inputTypeValue == 'us' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) / 1.102;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'kilogram'){
    result.value = Number(input.value) * 907.2;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'gram'){
    result.value = Number(input.value) * 907200;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'miligram'){
    result.value = Number(input.value) * 9.072e+8;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'Microgram'){
    result.value = Number(input.value) * 9.072e+11;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'imperial'){
    result.value = Number(input.value) / 1.12;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'stone'){
    result.value = Number(input.value) * 142.9;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'pound'){
    result.value = Number(input.value) * 2000;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'ounce'){
    result.value = Number(input.value) * 32000;
   }
   else if(inputTypeValue == 'us' && resultTypeValue == 'us'){
    result.value = Number(input.value) * 1;
   }

   //stone conversion formulas
   else if(inputTypeValue == 'stone' && resultTypeValue == 'tonne'){
    result.value = Number(input.value) / 157.5;
   }
    else if(inputTypeValue == 'stone' && resultTypeValue == 'kilogram'){
        result.value = Number(input.value) * 6.35;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'gram'){
        result.value = Number(input.value) * 6350;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'miligram'){
        result.value = Number(input.value) * 6.35e+6;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'Microgram'){
        result.value = Number(input.value) * 6.35e+9;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'imperial'){
        result.value = Number(input.value) / 160;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'us'){
        result.value = Number(input.value) / 142.9;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'stone'){
        result.value = Number(input.value) * 1;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'pound'){
        result.value = Number(input.value) * 14;
       }
       else if(inputTypeValue == 'stone' && resultTypeValue == 'ounce'){
        result.value = Number(input.value) * 224;
       }

       //pound conversion formulas
       else if(inputTypeValue == 'pound' && resultTypeValue == 'tonne'){
        result.value = Number(input.value) / 2205;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'kilogram'){
        result.value = Number(input.value) / 2.205;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'gram'){
        result.value = Number(input.value) * 453.6;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'miligram'){
        result.value = Number(input.value) * 453600;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'Microgram'){
        result.value = Number(input.value) * 4.536e+8;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'imperial'){
        result.value = Number(input.value) / 2240;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'us'){
        result.value = Number(input.value) / 2000;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'stone'){
        result.value = Number(input.value) / 14;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'pound'){
        result.value = Number(input.value) * 1;
       }
       else if(inputTypeValue == 'pound' && resultTypeValue == 'ounce'){
        result.value = Number(input.value) * 16;
       }

       //Ounce conversion formulas
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'tonne'){
        result.value = Number(input.value) / 35270;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'kilogram'){
        result.value = Number(input.value) / 35.274;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'gram'){
        result.value = Number(input.value) * 28.35;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'miligram'){
        result.value = Number(input.value) * 28350;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'Microgram'){
        result.value = Number(input.value) * 2.835e+7;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'imperial'){
        result.value = Number(input.value) / 35840;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'us'){
        result.value = Number(input.value) / 32000;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'stone'){
        result.value = Number(input.value) / 224;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'pound'){
        result.value = Number(input.value) / 16;
       }
       else if(inputTypeValue == 'ounce' && resultTypeValue == 'ounce'){
        result.value = Number(input.value) * 1;
       }

       //Temperature conversion formulas
       //celcius conversion formulas
       else if(inputTypeValue == 'deg' && resultTypeValue == 'far'){
        result.value = Number(input.value) * 9/5+32;
       }
       else if(inputTypeValue == 'deg' && resultTypeValue == 'kelvin'){
        result.value = Number(input.value) + 273.15;
       }
       else if(inputTypeValue == 'deg' && resultTypeValue == 'deg'){
        result.value = Number(input.value) * 1;
       }

       //fahrenheit conversion formulas
       else if(inputTypeValue == 'far' && resultTypeValue == 'deg'){
        result.value = Number(input.value)  -32 *5/9;
       }
       else if(inputTypeValue == 'far' && resultTypeValue == 'kelvin'){
        result.value = Number(input.value) -32 * 5/9 +273.15;
       }
       else if(inputTypeValue == 'far' && resultTypeValue == 'far'){
        result.value = Number(input.value) * 1;
       }

       //kelvin conversion formulas
       else if(inputTypeValue == 'kelvin' && resultTypeValue == 'deg'){
        result.value = Number(input.value) - 273.15;
       }
       else if(inputTypeValue == 'kelvin' && resultTypeValue == 'far'){
        result.value = Number(input.value) - 273.15 *9/5+32;
       }
       else if(inputTypeValue == 'kelvin' && resultTypeValue == 'kelvin'){
        result.value = Number(input.value) * 1;
       }

       //Frequency conversion formulas
       //hertz conversion formulas
       else if(inputTypeValue == 'hertz' && resultTypeValue == 'kilo'){
        result.value = Number(input.value) / 1000;
       }
       else if(inputTypeValue == 'hertz' && resultTypeValue == 'mega'){
        result.value = Number(input.value) / 1e+6;
       }
       else if(inputTypeValue == 'hertz' && resultTypeValue == 'giga'){
        result.value = Number(input.value) / 1e+9;
       }
       else if(inputTypeValue == 'hertz' && resultTypeValue == 'hertz'){
        result.value = Number(input.value) * 1;
       }

       //Kilohertz conversion formulas
       else if(inputTypeValue == 'kilo' && resultTypeValue == 'hertz'){
        result.value = Number(input.value) * 1000;
       }
       else if(inputTypeValue == 'kilo' && resultTypeValue == 'mega'){
        result.value = Number(input.value) / 1000;
       }
       else if(inputTypeValue == 'kilo' && resultTypeValue == 'giga'){
        result.value = Number(input.value) / 1e+6;
       }
       else if(inputTypeValue == 'kilo' && resultTypeValue == 'kilo'){
        result.value = Number(input.value) * 1;
       }

       //megahertz conversion formulas
       else if(inputTypeValue == 'mega' && resultTypeValue == 'mega'){
        result.value = Number(input.value) * 1;
       }
       else if(inputTypeValue == 'mega' && resultTypeValue == 'hertz'){
        result.value = Number(input.value) * 1e+6;
       }
       else if(inputTypeValue == 'mega' && resultTypeValue == 'kilo'){
        result.value = Number(input.value) * 1000;
       }
       else if(inputTypeValue == 'mega' && resultTypeValue == 'giga'){
        result.value = Number(input.value) / 1000;
       }

       //gigahertz conversion formulas
       else if(inputTypeValue == 'giga' && resultTypeValue == 'hertz'){
        result.value = Number(input.value) * 1e+9;
       }
       else if(inputTypeValue == 'giga' && resultTypeValue == 'kilo'){
        result.value = Number(input.value) * 1e+6;
       }
       else if(inputTypeValue == 'giga' && resultTypeValue == 'mega'){
        result.value = Number(input.value) * 1000;
       }
       else if(inputTypeValue == 'giga' && resultTypeValue == 'giga'){
        result.value = Number(input.value) * 1;
       }
   }


function clearResult(){
    document.getElementById("fromval").value = '';
    document.getElementById("toval").value = '';
}


function populate(s1,s2)
{
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  
  s2.innerHTML = "";
  if(s1.value == "length")
   {
     var optionArray = ["meter|Meter","kilometer|Kilometer","centimeter|Centimeter","milimeter|Milimeter","micrometer|Micrometer","nanometer|Nanometer","mile|Mile","yard|Yard","foot|Foot","inch|Inch"];
   }
  else if(s1.value == 'Area')
  {
    var optionArray = ["squaremeter|Sqaure Meter","squarekilometer|Square Kilometer","Squaremile|Square Mile","Squareyard|Square Yard","squarefoot|Square Foot","Square inch|Square Inch","hectare|Hectare","acre|Acre"];
  }
  else if(s1.value == 'data')
  {
   var optionArray = ["bit|Bit per second","kilobit|Kilobit per second","kilobyte|Kilobyte per second","kibibit|Kibibit per second","megabit|Megabit per second","megabyte|Megabyte per second","mebibit|Mebibit per second","Gigabit|Gigabit per second","gigabyte|Gigabyte per second","gibibit|Gibibit per second","terabit|Terabit per second","terabyte|Terabyte per second","tebibit|Tebibit per second"];

  }
  else if(s1.value == 'digital')
  {
    var optionArray = ["bit|Bit","kilobit|kilobit","megabit|Megabit","mebibit|Mebibit","gigabit|Gigabit","gibibit|Gibibit","terabit|Terabit","Tebibit|Tebibit","petabit|Petabit","byte|Byte","kilobyte|Kilobyte","kibibyte|Kibibyte","megabyte|Megabyte","mebibyte|Mebibyte","gigabyte|Gigabyte","gibibyte|Gibibyte","terabyte|Tetabyte","tebibyte|tebibyte","petabyte|Petabyte","pebibyte|Pebibyte"];

  }
  else if(s1.value == 'energy')
  {
    var optionArray = ["joule|Joule","kilojoule|Kilojoule","gram|Gram calorie","kilocalorie|Kilocalorie","watt|Watt hour","kilowatt|Kilowatt hour","electronvolt|ElectronVolt","british|British thermal unit","us|US therm","foot|Foot-pound"];
  }
  else if(s1.value == 'frequency')
  {
    var optionArray = ["hertz|Hertz","kilo|Kilohertz","mega|Megahertz","giga|Gigahertz"];
  }
  else if (s1.value == 'fuel')
  {
    var optionArray = ["miles|Miles per gallon","miles|Miles per gallon(Imperial)","kilo|Kilometer per liter","liter|Liter per 100 kilometers"];
  }
  else if(s1.value == 'mass')
  {
    var optionArray = ["tonne|Tonne","kilogram|Kilogram","gram|Gram","miligram|Milligram","Microgram|Microgram","imperial|Imperial ton","us|US ton","stone|Stone","pound|Pound","ounce|Ounce"];

  }
  else if(s1.value == 'Plane')
  {
    var optionArray = ["arc|Arcsecond","degree|Degree","gra|Gradian","mili|Milliradian","min|Minute of arc","rad|Radian"];
  }
  else if(s1.value == 'pressure')
  {
    var optionArray = ["bar|Bar","pascal|Pascal","pound|Pounch per square inch","stan|Standard atmosphere","torr|Torr"];
  }
  else if(s1.value == 'speed')
  {
    var optionArray = ["mile|Mile per hour","foot|Foot per Second","meter|Meter per Second","kilo|Kilometer per hour","knot|Knot"];

  }
  else if (s1.value == 'temperature')
  {
    var optionArray = ["deg|Degree Celsius","far|Fahrenheit","kelvin|Kelvin"];
  }
  else if (s1.value == 'time')
{
    var optionArray = ["nano|Nanosecond","micro|Microsecond","milli|Millisecond","sec|Second","min|Minute","hour|Hour","day|Day","week|Week","mon|Month","cale|Calendar Year","dec|Decade","cen|Century"];

}
else if(s1.value == 'volume')
{
   var optionArray = ["us|US liquid gallon","us|US liquid quart","us|US liquid pint","us|US legal cup","fluid|Fluid ounce","us|US tablespoon","us|US teaspoon","cubic|Cubic meter","liter|Liter","milli|Milliliter","imp|Imperial galoon","imp|Imperial quart","imp|Imperial pint","imp|Imperial cup","imp|Imp. fluid ounce","imp|Imperial tablespoon","imp|Imperial Teaspoon","cubic|Cubic foot","cubic|Cubic inch"];
}
else if(s1.value == 'choose')
{
    var optionArray = ["plz|Please specify conversion type"];
}

  for (var option in optionArray){
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
  
}
function populated(s3,s4)
{
  var s3 = document.getElementById(s3);
  var s4 = document.getElementById(s4);
  
  s4.innerHTML = "";
  
   if(s3.value == "length")
   {
     var optionArray = ["meter|Meter","kilometer|Kilometer","centimeter|Centimeter","milimeter|Milimeter","micrometer|Micrometer","nanometer|Nanometer","mile|Mile","yard|Yard","foot|Foot","inch|Inch"];
   }
  else if(s3.value == 'Area')
  {
    var optionArray = ["squaremeter|Sqaure Meter","squarekilometer|Square Kilometer","Squaremile|Square Mile","Squareyard|Square Yard","squarefoot|Square Foot","Square inch|Square Inch","hectare|Hectare","acre|Acre"];
  }
  else if(s3.value == 'data')
  {
   var optionArray = ["bit|Bit per second","kilobit|Kilobit per second","kilobyte|Kilobyte per second","kibibit|Kibibit per second","megabit|Megabit per second","megabyte|Megabyte per second","mebibit|Mebibit per second","Gigabit|Gigabit per second","gigabyte|Gigabyte per second","gibibit|Gibibit per second","terabit|Terabit per second","terabyte|Terabyte per second","tebibit|Tebibit per second"];

  }
  else if(s3.value == 'digital')
  {
    var optionArray = ["bit|Bit","kilobit|kilobit","megabit|Megabit","mebibit|Mebibit","gigabit|Gigabit","gibibit|Gibibit","terabit|Terabit","Tebibit|Tebibit","petabit|Petabit","byte|Byte","kilobyte|Kilobyte","kibibyte|Kibibyte","megabyte|Megabyte","mebibyte|Mebibyte","gigabyte|Gigabyte","gibibyte|Gibibyte","terabyte|Tetabyte","tebibyte|tebibyte","petabyte|Petabyte","pebibyte|Pebibyte"];

  }
  else if(s3.value == 'energy')
  {
    var optionArray = ["joule|Joule","kilojoule|Kilojoule","gram|Gram calorie","kilocalorie|Kilocalorie","watt|Watt hour","kilowatt|Kilowatt hour","electronvolt|ElectronVolt","british|British thermal unit","us|US therm","foot|Foot-pound"];
  }
  else if(s3.value == 'frequency')
  {
    var optionArray = ["hertz|Hertz","kilo|Kilohertz","mega|Megahertz","giga|Gigahertz"];
  }
  else if (s3.value == 'fuel')
  {
    var optionArray = ["miles|Miles per gallon","miles|Miles per gallon(Imperial)","kilo|Kilometer per liter","liter|Liter per 100 kilometers"];
  }
  else if(s3.value == 'mass')
  {
    var optionArray = ["tonne|Tonne","kilogram|Kilogram","gram|Gram","miligram|Milligram","Microgram|Microgram","imperial|Imperial ton","us|US ton","stone|Stone","pound|Pound","ounce|Ounce"];

  }
  else if(s3.value == 'Plane')
  {
    var optionArray = ["arc|Arcsecond","degree|Degree","gra|Gradian","mili|Milliradian","min|Minute of arc","rad|Radian"];
  }
  else if(s3.value == 'pressure')
  {
    var optionArray = ["bar|Bar","pascal|Pascal","pound|Pounch per square inch","stan|Standard atmosphere","torr|Torr"];
  }
  else if(s3.value == 'speed')
  {
    var optionArray = ["mile|Mile per hour","foot|Foot per Second","meter|Meter per Second","kilo|Kilometer per hour","knot|Knot"];

  }
  else if (s3.value == 'temperature')
  {
    var optionArray = ["deg|Degree Celsius","far|Fahrenheit","kelvin|Kelvin"];
  }
  else if (s3.value == 'time')
{
    var optionArray = ["nano|Nanosecond","micro|Microsecond","milli|Millisecond","sec|Second","min|Minute","hour|Hour","day|Day","week|Week","mon|Month","cale|Calendar Year","dec|Decade","cen|Century"];

}
else if(s3.value == 'volume')
{
   var optionArray = ["us|US liquid gallon","us|US liquid quart","us|US liquid pint","us|US legal cup","fluid|Fluid ounce","us|US tablespoon","us|US teaspoon","cubic|Cubic meter","liter|Liter","milli|Milliliter","imp|Imperial galoon","imp|Imperial quart","imp|Imperial pint","imp|Imperial cup","imp|Imp. fluid ounce","imp|Imperial tablespoon","imp|Imperial Teaspoon","cubic|Cubic foot","cubic|Cubic inch"];
}
else if(s3.value == 'choose')
{
    var optionArray = ["plz|Please specify conversion type"];
}
  
  for (var option in optionArray){
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s4.options.add(newoption);
  }
  
}