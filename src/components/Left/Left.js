import "./Left.css";
function Left(props) {
  return (
    <div className="G_left">
      <div className="img">
        <img src={props.image} className="left_img"></img>
      </div>
      <div className="title">
        <h3 className="title_left">{props.title}</h3>
      </div>
    </div>
  );
}

export default Left;
