import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
}))`
  `;

export const Favorite = styled.View`
  flex-direction: column;
`; 

export const Payment = styled.View`
  flex-direction: column;
  height: 100px;
  width: 100px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  margin-right: 10px;
`; 

export const Botao = styled.TouchableOpacity`
  height: 70px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 70px;
  border-radius: 20px;
`;

export const Click = styled.TouchableOpacity`
  margin-top: 20px;
  margin-right: 20px;
`;

export const Linha = styled.View`
  flex-direction: row;
`;
