

/*
abaixo temos um codigo onde mostra o numero de marcadores existente no codigo. Como temos 13 videos , então 
teremos NumMarcadores =13  esse numero deverá ser mudado caso diminua ou aumente o numero de marcadores personalizados,  
e logo depois teremos o caminho do marcadores na pasta (markers), em seguida devemos
adicionar o video ID  que irá aparecer ao apontar pra o marcador.
*/

const numMarcadores = 13;
const marcadores = [
  { url: "/markers/marcador1.patt", videoId: "video1" },
  { url: "/markers/marcador2.patt", videoId: "video2" },
  { url: "/markers/marcador3.patt", videoId: "video3" },
  { url: "/markers/marcador4.patt", videoId: "video4" },
  { url: "/markers/marcador5.patt", videoId: "video5" },
  { url: "/markers/marcador6.patt", videoId: "video6" },
  { url: "/markers/marcador7.patt", videoId: "video7" },
  { url: "/markers/marcador8.patt", videoId: "video8" },
  { url: "/markers/marcador9.patt", videoId: "video9" },
  { url: "/markers/marcador10.patt", videoId: "video10" },
  { url: "/markers/marcador11.patt", videoId: "video11" },
  { url: "/markers/marcador12.patt", videoId: "video12" },
  { url: "/markers/marcador13.patt", videoId: "video13" },
];

/*
O loop for percorre a matriz de marcadores e, para cada objeto de marcador, cria um elemento a-marker com o 
tipo "padrão" e a URL do padrão definida pelo objeto do marcador correspondente. O marcador também recebe 
um atributo personalizado "video-marker" que contém o ID do vídeo correspondente, e um elemento a-video 
é criado para exibir o vídeo em cima do marcador. O ID do vídeo é usado para selecionar o vídeo correspondente 
do HTML e exibi-lo no marcador.
*/

for (let i = 0; i < numMarcadores; i++) {
  const marcador = marcadores[i];
  const videoId = marcador.videoId;

  const video = document.getElementById(videoId);

  const marker = document.createElement("a-marker");
  marker.setAttribute("type", "pattern");
  marker.setAttribute("url", marcador.url);
  marker.setAttribute("video-marker", `videoId: ${i + 1}`);

  /*
Abaixo temos as dimensões que serão aplicados para todos os videos.
*/
  const videoEl = document.createElement("a-video");
  videoEl.setAttribute("width", "1.5");
  videoEl.setAttribute("height", "1");
  videoEl.setAttribute("scale", "1 1 1");
  videoEl.setAttribute("position", "0 0.1 0");
  videoEl.setAttribute("rotation", "-90 0 0");
  videoEl.setAttribute("class", "clickable");
  videoEl.setAttribute("gesture-handler", "");
  videoEl.setAttribute("src", `#${videoId}`);

  marker.appendChild(videoEl);
  document.querySelector("a-scene").appendChild(marker);
}