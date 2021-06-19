import React from "react";
import Frame144 from "../Frame144";
import AntDesignplayCircleOutlined22 from "../AntDesignplayCircleOutlined22";
import Frame162822 from "../Frame162822";
import Button22 from "../Button22";
import Footer5 from "../Footer5";
import "./X05GalleryPageTablet.css";

function X05GalleryPageTablet(props) {
  const {
    aboutUs,
    overlapGroup,
    latestVideos,
    text179,
    address,
    text180,
    frame144Props,
    antDesignplayCircleOutlined2Props,
    frame16282Props,
    frame162822Props,
    frame162823Props,
    frame162824Props,
    button22Props,
    footer5Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x05-gallery-page-tablet screen">
        <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
        <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{aboutUs}</h1>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="rectangle-78"></div>
          <div className="frame-1626">
            <div className="latest-videos valign-text-middle typographybodysmall-12-regular">{latestVideos}</div>
            <div className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text179}</div>
            <p className="address valign-text-middle typography-body-smalltext-14-regular">{address}</p>
          </div>
          <AntDesignplayCircleOutlined22 overlapGroup1={antDesignplayCircleOutlined2Props.overlapGroup1} />
        </div>
        <p className="text-2 typography-body-smalltext-14-regular">{text180}</p>
        <div className="frame-1627">
          <Frame162822
            youtubeCard2Props={frame16282Props.youtubeCard2Props}
            youtubeCard22Props={frame16282Props.youtubeCard22Props}
          />
          <Frame162822
            className={frame162822Props.className}
            youtubeCard2Props={frame162822Props.youtubeCard2Props}
            youtubeCard22Props={frame162822Props.youtubeCard22Props}
          />
          <Frame162822
            className={frame162823Props.className}
            youtubeCard2Props={frame162823Props.youtubeCard2Props}
            youtubeCard22Props={frame162823Props.youtubeCard22Props}
          />
          <Frame162822
            className={frame162824Props.className}
            youtubeCard2Props={frame162824Props.youtubeCard2Props}
            youtubeCard22Props={frame162824Props.youtubeCard22Props}
          />
          <Button22>{button22Props.children}</Button22>
        </div>
        <Footer5 {...footer5Props} />
      </div>
    </div>
  );
}

export default X05GalleryPageTablet;
