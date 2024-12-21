import React from "react";

const QuestionDetails = async ({ params }: RoutParams) => {
  const { id } = await params;

  return <div>Question Page: {id}</div>;
};

export default QuestionDetails;