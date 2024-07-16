import Slider from "./components/Slider.jsx";
function App(){
  const images = [
    "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=pexels-michael-block-1691617-3225517.jpg&fm=jpg",
    "https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
    "https://images.squarespace-cdn.com/content/v1/5feb6d2cab06677bba637eba/d72ddeeb-d2bd-4779-99be-8bbd6845fbc8/LAM+images+%284%29.jpg"
  ];

  return (
    <div className="container">
      <Slider images={images} />
    </div>
  );
}

export default App;
