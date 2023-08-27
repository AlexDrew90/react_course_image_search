import ImageShow from "./ImageShow";
let ImageList = ({ images }) => {

  const renderedImages = images.map((image) => {

    return < ImageShow image={image} />;
  });
  return <div>{renderedImages}</div>
}

export default ImageList;
