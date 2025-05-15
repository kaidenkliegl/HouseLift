
import "./SpotImages.css"

function SpotImages({ spot }) {
  console.log(spot)

  return (
    <div className="images-grid">
      <img src={spot.previewImage} alt="" className="grid-image-large"/>
      {spot.SpotImages.slice(0, 4).map((img) => {
        return <img key={img.id} src={img.url} alt="" className="grid-image" />;
      })}
    </div>
  );
}

export default SpotImages;
