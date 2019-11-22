import React from "react";

import Publish from "../components/svgr-icons/Publish";
import PublishHover from "../components/svgr-icons/PublishHover";
import {IconButton} from "../components/icon-button";
import styled from "styled-components";
import {Themes} from "../themes";
import {action} from "@storybook/addon-actions";

const Colors = Themes.Clue;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  width: 500px;
  align-items: flex-end;
`;

const BigBlock = styled.div`
  font-size: 70px;
`;

export default {
  title: "Icon Buttons",
  parameters: {
    component: IconButton,
    componentSubtitle: "SVG Icon Button",
  }
};

export const PublishToSupportsButton = () => {
  return (
      <Gallery>
        <BigBlock>
          <IconButton
            onClick={action("click")}
            normalColor={Colors.Sage.sage}
            title="publish to supports"
            content={<Publish fill={Colors.Sky["sky-dark-3"]} />}
            hoverContent={<PublishHover fill={Colors.Sky["sky-dark-4"]} />}
          />
        </BigBlock>
    </Gallery>
  );
};

// storiesOf("IconButton", module)d
//   .add("PublishToSupportsButton", PublishToSupportsButton);
