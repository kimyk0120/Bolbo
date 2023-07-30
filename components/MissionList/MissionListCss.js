import styled, {css} from 'styled-components/native';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
export const StyledUpperImageContainer = styled.View`
  flex: 1;
  background-color: orange;
`;
export const StyledMissionCreateBtnContainer = styled.View`
  flex: 1;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

export const MissionCreateBtn = styled.TouchableOpacity`
  background-color: #55568a;
  width: 95%;
  height: 78%;
  border-radius: 10px;
  justify-content: center;
`;

export const MissionCreateBtnText = styled.Text`
  text-align: center;
  color: white;
`;

export const StyledMissionListContainer = styled.ScrollView`
  flex: 7;
  background-color: blue;
  width: 100%;
`;
