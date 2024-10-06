import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { featuresName } = useParams(); // Get the features parameter from the URL

  // Here, you can use params to display specific content for each feature
  return (
    <Container className="my-5">
      <h2>Details about {featuresName}</h2>
      <p>
        {/* Provide more detailed information about the feature here */}
        Here you can find more information about {featuresName}.
      </p>
    </Container>
  );
};

export default DetailPage;
