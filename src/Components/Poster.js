import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const imgRootUrl = "https://image.tmdb.org/t/p/w500";

const Container = styled.div`
  font-size: 10px;
`;

const Star = styled.span`
  display: flex;
  padding: 0;
  justify-content: space-between;
  width: 60%;
  background: -webkit-linear-gradient(
    left,
    #f1c40f ${props => props.percent}%,
    #555 ${props => 100 - props.percent}%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  height: 180px;
  border-radius: 4px;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 6px;
  opacity: 0;
  transition: opacity 0.2s linear;
  color: rgba(200, 200, 200);
  font-weight: 600;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  color: rgba(220, 220, 220);
`;

const Year = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-weight: 600;
`;

const Poster = ({ id, imageURL, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageURL
              ? `${imgRootUrl}${imageURL}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <Rating>
          <Star percent={rating * 10}>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </Star>
          <span>{rating}/10</span>
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 20 ? `${title.substring(0, 19)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
