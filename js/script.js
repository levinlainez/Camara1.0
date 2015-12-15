var fichero; //tendra la ruta de la imagen enviada

function ObtenerFoto() //obtenemos la foto de la camara{
	navigator,camera.getPicture{corecto, error{ quality: 100, allowEdit: false}};

}
function correcto(rutaImagen) //hemos obtenido la imagen correctamente{
	document.getElementById("imgCamara").src = rutaImagen;
	fichero=rutaImagen;
}
function error(message) //en caso de error de la captura mostramos una ventana con la informacion
{
	alert("error =>" + message);
}
function enviarDatos()
{
	var options = new FileUploadOptions();
	options.fileKey="file"; //nombre del campo que recogera el servidor
	options.fileName=fichero.substr(fichero.lastIndexOf('/')+1); //nombre del fichero
	options.mimeType="image/jpeg"; //tipo de imagen
	options.chunKedMode = true;

	var params = new object();
	params.descripcion = document.getElementByElementById("descripcion").value;

	options.params = params;
	var ft = new FileTransfer();
	var percentageUpload=0;
	ft.upload(fichero, "http:192.168.0.103/datos/index.php", win, fail, options); 
}

function win(r) //respuesta del servidor si todo fue ok
{
	alert("RESPUESTA SERVIDOR = " + r.response);
}
function fail(error){

	alert("upload error source" + error.source);
	alert("upload error target" + error.target);
	alert("An error has ocurred: Code = + error.code");
}