import "./Content.css";

function Content(props) {
  return (
    <div>
      <div className="G_content">
        <div className="img">
          <img src={props.image} className="content_img"></img>
        </div>
        <div className="title">
          <h3 className="title_content">{props.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Content;
