/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");

   // Moved to submit handler
   // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   //    response.json().then(function(json){
   //       console.log(json)
   //       const container = document.getElementById("missionTarget");

   //          let i = document.getElementById("planetDestination").value
   //          // i = i.value
   //          console.log(`${i}`)
   //                container.innerHTML = `
   //             <ol>
   //                <li>Name: ${json[i].name}</li>
   //                <li>Diameter: ${json[i].diameter}</li>
   //                <li>Star: ${json[i].star}</li>
   //                <li>Distance from Earth: ${json[i].distance}</li>
   //                <li>Number of Moons: ${json[i].moons}</li>
   //             </ol>
   //             <img src="${json[i].image}"></img>
   //             `;
   //       });
   // });

   form.addEventListener("submit", function(event) {
      event.preventDefault();
/////////////////////////
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            console.log(json)
            const container = document.getElementById("missionTarget");
            
               let i = document.getElementById("planetDestination").value
               // i = i.value
               console.log(`${i}`)
                     container.innerHTML = `
                  <ol>
                     <li>Name: ${json[i].name}</li>
                     <li>Diameter: ${json[i].diameter}</li>
                     <li>Star: ${json[i].star}</li>
                     <li>Distance from Earth: ${json[i].distance}</li>
                     <li>Number of Moons: ${json[i].moons}</li>
                  </ol>
                  <img src="${json[i].image}"></img>
                  `;
            });
      });
///////////////////////////////////////
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required.");
      }else if ((isNaN(pilotName.value) === false) || (isNaN(copilotName.value) === false) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         // document.getElementById("faultyItems").style.visibility = "hidden";
         alert("Incorrect data type.");
      }else if (fuelLevel.value < 10000 || cargoMass.value > 10000){
         if(fuelLevel.value < 10000){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
            copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
            fuelStatus.innerHTML = (`Fuel level too low for launch.`);
            launchStatus.style.color = "red";
            launchStatus.innerHTML = (`Shuttle not ready for launch.`);

         }else{
            fuelStatus.innerHTML = (`Fuel level high enough for launch.`);
         };
         if(cargoMass.value > 10000){
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
            copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
            cargoStatus.innerHTML = (`Cargo mass too much for launch.`);
            launchStatus.style.color = "red";
            launchStatus.innerHTML = (`Shuttle not ready for launch.`);
         }else{
            cargoStatus.innerHTML = (`Cargo mass low enough for launch.`);
         };
         
      }else{
         faultyItems.style.visibility = "hidden";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = (`Shuttle ready for launch.`);
      };
   });
});
