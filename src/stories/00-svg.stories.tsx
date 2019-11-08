import React from "react";

import OneUp from "../components/svgr-icons/1Up";
import TwoUp from "../components/svgr-icons/2Up";
import FourUp from "../components/svgr-icons/4Up";
import Caret from "../components/svgr-icons/Caret";
import Copy from "../components/svgr-icons/Copy";
import CopyOnly from "../components/svgr-icons/CopyOnly";
import DeleteWorkspace from "../components/svgr-icons/DeleteWorkspace";
import DragTile from "../components/svgr-icons/DragTile";
import DrawTile from "../components/svgr-icons/DrawTile";
import DropdownCaret from "../components/svgr-icons/DropdownCaret";
import Edit from "../components/svgr-icons/Edit";
import EditWorkspaceName from "../components/svgr-icons/EditWorkspaceName";
import GoToWorkspace from "../components/svgr-icons/GoToWorkspace";
import GraphTile from "../components/svgr-icons/GraphTile";
import ImageTile from "../components/svgr-icons/ImageTile";
import LearningLogDropdown from "../components/svgr-icons/LearningLogDropdown";
import LinkedTile from "../components/svgr-icons/LinkedTile";
import New from "../components/svgr-icons/New";
import NotShare from "../components/svgr-icons/NotShare";
import PageLeftRight from "../components/svgr-icons/PageLeftRight";
import PageUpDown from "../components/svgr-icons/PageUpDown";
import Publish from "../components/svgr-icons/Publish";
import Published from "../components/svgr-icons/Published";
import PublishedHover from "../components/svgr-icons/PublishedHover";
import PublishHover from "../components/svgr-icons/PublishHover";
import Refresh from "../components/svgr-icons/Refresh";
import SelectionTile from "../components/svgr-icons/SelectionTile";
import Share from "../components/svgr-icons/Share";
import StarWorkspace from "../components/svgr-icons/StarWorkspace";
import StickyNote from "../components/svgr-icons/StickyNote";
import Support from "../components/svgr-icons/Support";
import TableTile from "../components/svgr-icons/TableTile";
import TeacherStudent from "../components/svgr-icons/TeacherStudent";
import TextTile from "../components/svgr-icons/TextTile";

import styled from "styled-components";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  width: 500px;
  align-items: flex-end;
`;
export default {
  title: "SVGR Icons",
  parameters: {
    component: Publish,
    componentSubtitle: "Simple svg Publish component",
  }
};

export const SomeIcons = () => {
  const props = {fill:  "blue", height: "4em", width: "4em"};
  return (
      <Gallery>
      <OneUp {...props} />
      <TwoUp {...props} />
      <FourUp {...props} />
      <Caret {...props} />
      <Copy {...props} />
      <CopyOnly {...props} />
      <DeleteWorkspace {...props} />
      <DragTile {...props} />
      <DrawTile {...props} />
      <DropdownCaret {...props} />
      <Edit {...props} />
      <EditWorkspaceName {...props} />
      <GoToWorkspace {...props} />
      <GraphTile {...props} />
      <ImageTile {...props} />
      <LearningLogDropdown {...props} />
      <LinkedTile {...props} />
      <New {...props} />
      <NotShare {...props} />
      <PageLeftRight {...props} />
      <PageUpDown {...props} />
      <Publish {...props} />
      <Published {...props} />
      <PublishedHover {...props} />
      <PublishHover {...props} />
      <Refresh {...props} />
      <SelectionTile {...props} />
      <Share {...props} />
      <StarWorkspace {...props} />
      <StickyNote {...props} />
      <Support {...props} />
      <TableTile {...props} />
      <TeacherStudent {...props} />
      <TextTile {...props} />
    </Gallery>
  );
};

export const PublishColorsAndSizes = () =>
  <Gallery>
    <Publish fill="blue" height="1em" width="1em"/>
    <Publish fill="orange" height="4em" width="4em"/>
    <Publish fill="yellow" height="10em" width="10em"/>
    <Publish fill="red" height="1em" width="1em"/>
    <Publish fill="red" height="4em" width="4em"/>
    <Publish fill="red" height="10em" width="10em"/>
  </Gallery>;
