let data;


let xhr = new XMLHttpRequest();  //on crée un objet xmlhttprequest


xhr.open("GET","movies.json");     // on initialise notre requet avec open()
xhr.onreadystatechange = function(){
  
    if(this.readyState === 4 && this.status === 200){
        data = JSON.parse(xhr.response);
        console.log(data)
        
    create(data);
}},
xhr.send()

    // // Search
    document.getElementById('search').onkeyup = function(){
        var search= document.getElementById("search").value;
        let datasearch = data.filter(function(a){
          return a.titre.toLowerCase().includes(search.toLowerCase());
        });
        create(datasearch)
    }
// sort a>z ****
document.getElementById('Select').onchange=function(){
    var  select= document.getElementById('Select').value;
      if (select=="titre") {
      data =data.sort((a, b) => {
        let A = a.titre.toLowerCase();
        let B = b.titre.toLowerCase();
        if (A< B) {
            return -1
        }
        if (A>B) {
            return 1
        }
        if(A==B){
            return 0
        }
      });
      
      }
      else if (select=="Réalisateur"){
        data =data.sort((a, b) => {
            let A = a.realisateur.toLowerCase();
            let B = b.realisateur.toLowerCase();
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
     
    }

    else if (select=="Durée"){
       data =data.sort((a, b) => {
            let A = a.duré.toLowerCase();
            let B = b.duré.toLowerCase();
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
      
    } 
    else if (select=="Anné"){
        data =data.sort((a, b) => {
            let A = a.anné;
            let B = b.anné;
            if (A< B) {
                return -1
            }
            if (A>B) {
                return 1
            }
            if(A==B){
                return 0
            }
          });
    }else if (select=="Titre") {
        data =data.sort((a, b) => {
          let A = a.titre.toLowerCase();
          let B = b.titre.toLowerCase();
          if (A< B) {
              return 1
          }
          if (A>B) {
              return -1
          }
          if(A==B){
              return 0
          }
        });
        
        }
        else if (select=="Un Réalisateur"){
          data =data.sort((a, b) => {
              let A = a.realisateur.toLowerCase();
              let B = b.realisateur.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
       
      }
  
      else if (select=="grand durée"){
         data =data.sort((a, b) => {
              let A = a.duré.toLowerCase();
              let B = b.duré.toLowerCase();
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
        
      } 
      else if (select=="L'anné"){
          data =data.sort((a, b) => {
              let A = a.anné;
              let B = b.anné;
              if (A< B) {
                  return 1
              }
              if (A>B) {
                  return -1
              }
              if(A==B){
                  return 0
              }
            });
      }
    create(data)
}
// create element 
function create(array){
    document.querySelector('#tbody').innerHTML = ""
    array.forEach(element => {
        let tr = document.createElement("tr");
    let poster= document.createElement("img");
    let title = document.createElement("td");
    let realisateur = document.createElement("td");
    let RDate = document.createElement("td");
    let lasts = document.createElement("td"); 
    let festival = document.createElement("td");
    let actor = document.createElement("td")
    poster.setAttribute("src", element.poste)
    poster.style.width = "150px"
    poster.append(element.poste);
    title.append(element.titre); 
    realisateur.append(element.realisateur);
    RDate.append(element.anné);
    lasts.append(element.duré);
    festival.append(element.festival);
    actor.append(element.acteur);
    tr.appendChild(poster);      
    tr.appendChild(title);
    tr.appendChild(realisateur);
    tr.appendChild(RDate);
    tr.appendChild(lasts);
    tr.appendChild(festival);
    const actorsList = document.createElement("ul");
        element.acteur.forEach(acteur=> {
            let li = document.createElement('li')
            let p = document.createElement('p');
            p.append(acteur.nom);
            p.append(acteur.prénom);
            p.append(acteur.nationalité);
            li.append(p)
            actorsList.append(li);
        })
        tr.append(actorsList)
    document.querySelector('#tbody').appendChild(tr)
});
}