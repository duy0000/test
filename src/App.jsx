import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Iframe from "react-iframe";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ImageOverlay = ({ opacity }) => (
  <div className="image-overlay" style={{ opacity: opacity }}>
    <img
      src="../public/duan24h.net_BĐQHSDĐ_Dong_Anh_HN_2030.jpg"
      alt="Overlay Image"
    />
  </div>
);

export default function SimpleMap() {
  const [opacity, setOpacity] = useState(1);

  const handleOpacityChange = (event) => {
    setOpacity(parseFloat(event.target.value));
  };
  const tangdomo = () => {
    if (opacity < 1) {
      setOpacity((prevOpacity) => prevOpacity + 0.1);
    }
  };

  const giamdomo = () => {
    if (opacity > 0) {
      setOpacity((prevOpacity) => prevOpacity - 0.1);
    }
  };

  const defaultProps = {
    center: {
      lat: 21.0245,
      lng: 105.84117,
    },
    zoom: 11,
  };

  return (
    <>
      {" "}
      <h4>cách 1 dùng google-map-react và gg api key để làm</h4>
      <div style={{ height: "100vh", width: "100%" }} className="ggmap">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBa7UlmsSGVz7NA2HkBdfevTBiwIPP2mdY",
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={21.0245} lng={105.84117} />
        </GoogleMapReact>
        <div className="opacity-slider">
          <AddIcon
            onClick={tangdomo}
            sx={{ fontSize: 25 }}
            style={{ cursor: "pointer" }}
          />
          <input
            type="range"
            id="opacity-slider"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
          />
          <HorizontalRuleIcon
            onClick={giamdomo}
            sx={{ fontSize: 25 }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <ImageOverlay opacity={opacity} />
      </div>
      <h4>
        cách 2 dùng react-iframe để lấy thẳng từ trên gg map rồi đẩy vào
        <br></br>thanh select dùng chung nên chỉnh 1 nó ăn cả 2 anh ạ
      </h4>
      <div className="dungiframe">
        <div className="opacity-slider">
          <AddIcon
            onClick={tangdomo}
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 25 }}
          />
          <input
            type="range"
            id="opacity-slider"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
          />
          <HorizontalRuleIcon
            sx={{ fontSize: 25 }}
            onClick={giamdomo}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1367.8306639177322!2d105.76047220000001!3d20.986388899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU5JzExLjAiTiAxMDXCsDQ1JzM3LjciRQ!5e1!3m2!1svi!2s!4v1715054851050!5m2!1svi!2s"
          width="100%"
          height="500px"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        />
        <ImageOverlay opacity={opacity} />
      </div>
    </>
  );
}
