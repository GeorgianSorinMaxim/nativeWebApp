// @flow

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Styles } from '../styles';
import Images from '../images';

console.log(BrowserRouter, Route, Link);

type Props = {
  data: Object,
  loading: boolean,
  platform: string
};

const Container = styled.div`
  ${Styles.container};
`;

const Content = styled.div`
  ${Styles.content};
`;

const TextWrapper = styled.section`
  ${Styles.wrapper};
`;

const StyledText = styled.p`
  ${Styles.text};
`;

const StyledListElement = styled.li`
  ${Styles.li};
`;

const StyledList = styled.ul`
  ${Styles.ul};
`;

const StyledItemContainer = styled.div`
  ${Styles.itemContainer};
`;

const StyledRowElement = styled.p`
  ${Styles.rowElement};
`;

const StyledImage = styled.img`
  ${Styles.avatar};
`;

const HomeScreen = ({ data, loading, platform }: Props) => (
  <Container>
    {!loading ? (
      <Content>
        <TextWrapper>
          <img className="vessel" src={Images.vessel} width="50" alt="vessel" />
        </TextWrapper>
        <StyledList>
          {data.map(item => (
            <StyledListElement key={item.id}>
              <StyledItemContainer>
                <StyledRowElement>
                  {item.first_name} {item.last_name}
                </StyledRowElement>
                <StyledImage src={item.avatar} alt="avatar" />
              </StyledItemContainer>
            </StyledListElement>
          ))}
        </StyledList>
        <StyledText>This is the {platform.toUpperCase()} app</StyledText>
      </Content>
    ) : (
      <StyledText>Loading ... </StyledText>
    )}
  </Container>
);

export default HomeScreen;
