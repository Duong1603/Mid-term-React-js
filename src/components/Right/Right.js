import "./Right.css";

function Right(props) {
  return (
    <div className="content-big">
      <div className="img">
        <img src={props.image} className="right_img"></img>
      </div>
      <div className="title">
        <h3 className="title_right">{props.title}</h3>
      </div>
    </div>
  );
}

export default Right;
