javascript
function togglemode() { 
   const html = document.documentElement;
   
   // Alterna a classe "light"
   html.classList.toggle("light");

   // Pegar a tag img
   const img = document.querySelector("#profile img");
   
   // Substituir imagem 
   if (html.classList.contains("light")) {
      // Se tiver light mode, manter a imagem normal
      img.setAttribute("src", "./assents/avatar-light.png.png");
      img.setAttribute("alt", "Avatar em modo claro") // Adicionando o alt
   } else {
      // Se tiver dark mode, trocar a imagem
      img.setAttribute("src", "./assents/avatar-dark.png.png")
      img.setAttribute("alt", "Avatar em modo claro") // Adicionando o alt
   }
}

