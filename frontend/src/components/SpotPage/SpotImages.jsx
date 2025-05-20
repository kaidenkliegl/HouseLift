
import "./SpotImages.css"

function SpotImages({ spot }) {
  console.log(spot)

  return (
    <div className="images-grid">
      <img src={spot.previewImage} alt="" className="grid-image-large"/>
      {spot.SpotImages.slice(1, 5).map((img) => {
        return <img key={img.id} src={img.url} alt="" className="grid-image" />;
      })}
    </div>
  );
}

export default SpotImages;
