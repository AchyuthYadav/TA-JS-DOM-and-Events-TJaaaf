got.houses.forEach((character) => 
    character.people.forEach((people) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = people.image

        let h2 = document.createElement("h2")
        h2.innerText ="name"

        let p = document.createElement("p")
        p.innerText = "description"

        let btn = document.createElement("button")
        btn.innerText ="Learn More"

        box.append(img, h2, p, btn)
        container.append(box)
    }))


    let container = document.querySelector(".bigbox")

got.houses.forEach((char) => {
  char.people.forEach((peop)=>{
  let box = document.createElement("div")
  let img = document.createElement("img")
  img.src = peop.image
  let name = document.createElement("h2")
  name.innerText = peop.name
  let p = document.createElement("p")
  p.innerText = peop.description
  let btn = document.createElement("button")
  btn.innertext = "learn more"

  box.append(img, name, p, btn)
  container.append(box);
  })
});
