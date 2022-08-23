const $app = document.getElementById("app")
const h = React.createElement       //Crea un elemento

const Avatar = params => {
    const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`
    return h("img", {src})     //diciendole que es lo que queremos renderizar el elemento imagen y le vamos a pasar el atributo src
};

ReactDOM.render(h(Avatar, { id: 21}), $app);

//const Avatar = params => {
    //const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
    //return `<picture>
      //  <img src= "${src}"/>
        //<strong>${params.name}</strong>
    //</picture>
    //`;
//};
//$app.innerHTML += Avatar({ id: 21, name: "Andrea"});
//$app.innerHTML += Avatar({ id: 48, name: "Daniela"});

//$app.querySelectorAll('img').forEach(img => {
  //  img.addEventListener('click', () => {
    //    img.classList.toggle('disabled')
   // })
//})