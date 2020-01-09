import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import styled from "styled-components";
import Message from "Components/Message";

const imgRootUrl = "https://image.tmdb.org/t/p/w500";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 100px 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  position: absolute;
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Cover = styled.div`
  width: 400px;
  height: 100%;
  background-image: url(${props => props.coverUrl});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 10px 5px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Star = styled.span`
  display: flex;
  padding: 0;
  justify-content: space-between;
  background: -webkit-linear-gradient(
    left,
    #f1c40f ${props => props.percent}%,
    #555 ${props => 100 - props.percent}%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : error ? (
    <Message text={error} color="red" />
  ) : (
    <Container>
      <Helmet>
        <title>
          {" "}
          {result.original_title ? result.original_title : result.original_name}
        </title>
      </Helmet>
      <Backdrop bgUrl={`${imgRootUrl}${result.backdrop_path}`} />
      <Content>
        <Cover coverUrl={`${imgRootUrl}${result.poster_path}`} />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <Divider></Divider>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider />
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider />
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider />
            <Divider />
            <Divider />
            <Star percent={result.vote_average * 10}>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </Star>

            <Divider />
            <Item>{result.vote_average} / 10</Item>
          </ItemContainer>
          <Divider />
          <Overview>{result.overview}</Overview>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
