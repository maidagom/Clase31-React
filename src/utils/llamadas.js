export async function obtenerDatos() {
  const url = "https://dragonball-api.com/api/characters"
  const respuesta = await fetch(url)
  const datos =  await respuesta.json()
  return datos.items

  
  /*return fetch(url).then(
    function(respuesta){
        return respuesta.json()
    }
  ).then(
    function (datos) {
        return datos.items
    }
  )*/
}