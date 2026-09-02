import logo from "../assets/logo/logo_elefante_400x400.png";
function ErrorPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img
        src={logo}
        className="w-80 h-80 mb-10 rounded-full"
        alt="cluster logo"
      />
      <div>
        <h1 className="title mb-4">ERROR 404</h1>
        <p className="text-content text-center">
          La ruta no es valida para este sitio
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
