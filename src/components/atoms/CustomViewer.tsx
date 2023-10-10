import React from "react";
import MDViewer from "@uiw/react-markdown-preview";
import { getXSSContent } from "@/helpers";

interface MDViewerPropsType {
  content?: string;
}

const CustomViewer = ({ content }: MDViewerPropsType) => {
  return (
    <MDViewer
      source={getXSSContent(content)}
      wrapperElement={{
        "data-color-mode": "light",
      }}
    />
  );
};

export default CustomViewer;
