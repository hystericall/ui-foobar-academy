import React from "react";

class LikeItem extends React.Component {
  render() {
    return (
      <div className="like_items">
        {}
        <div className="like_item d-flex flex-row align-items-end justify-content-start">
          <div className="like_title_container">
            <div className="like_title">Full eco rush mid</div>
            <div className="like_subtitle">CSGO</div>
          </div>
          <div className="like_price ml-auto">Free</div>
        </div>
      </div>
    );
  }
}

export default LikeItem;
