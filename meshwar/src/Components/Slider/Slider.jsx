import "./Slider.css";

const SliderPar = ({ width, height, quantity, images, reverse }) => {
  return (
    <div
      className="slider"
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--quantity": quantity,
      }}
      data-reverse={reverse}
    >
      <div className="list">
        {images.map((src, index) => (
          <div className="item" key={index} style={{ "--position": index + 1 }}>
            <img src={src} alt={`slider_image_${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderPar;