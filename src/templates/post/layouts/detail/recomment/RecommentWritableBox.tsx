import React from "react";
import dayjs from "dayjs";
import { Column, Row } from "@/components/Flex";
import { Button } from "@/components/atoms";
import { theme } from "@/styles";
import { useRecomment } from "@/templates/post/hooks";
import { Recomment } from "@/templates/post/types";
import RecommentContentBox from "./RecommentContentBox";
import {
  CommentCreatedAt,
  CommentTextArea,
  CommentWriter,
} from "../CommentStylesheet";

const RecommentWritableBox = ({ ...recomment }: Recomment) => {
  const {
    isEditMode,
    isDetailMode,
    recommentInput,
    setRecommentInput,
    isRecommentWriterSameAsUser,
    handleEditModeChange,
    handleDetailModeChange,
    handleRecommentInputChange,
    handleUpdateRecommentDetailClick,
    handleDeleteRecommentDetailClick,
  } = useRecomment(recomment.id);

  React.useEffect(() => {
    setRecommentInput(recomment.detail);
    // eslint-disable-next-line
  }, []);

  return (
    <Column justifyContent="center" width="100%">
      <Row gap="4px" width="100%">
        <CommentWriter>{recomment.user.nickName}</CommentWriter>·
        <CommentCreatedAt>
          {dayjs(recomment.createdAt).format("YYYY.MM.DD.")}
        </CommentCreatedAt>
        {isRecommentWriterSameAsUser(recomment.user.id) && (
          <>
            <Button
              align="RIGHT"
              color={isEditMode ? theme.primary_red : theme.primary_blue}
              onClick={handleEditModeChange}
              isSmall
            >
              {isEditMode ? "취소" : "수정"}
            </Button>
            <Button
              color={isEditMode ? theme.primary_blue : theme.primary_red}
              onClick={
                isEditMode
                  ? handleUpdateRecommentDetailClick
                  : handleDeleteRecommentDetailClick
              }
              isSmall
            >
              {isEditMode ? "수정" : "삭제"}
            </Button>
          </>
        )}
      </Row>
      {isEditMode ? (
        <CommentTextArea
          onChange={handleRecommentInputChange}
          value={recommentInput}
        />
      ) : (
        <RecommentContentBox
          isDetailMode={isDetailMode}
          handleDetailModeChange={handleDetailModeChange}
          commentInput={recommentInput}
          content={recomment.detail}
        />
      )}
    </Column>
  );
};

export default RecommentWritableBox;
