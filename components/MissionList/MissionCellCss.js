import styled from 'styled-components/native';

export const MissionCellContainer = styled.View`
  margin: 10px;
  height: 80px;
  background-color: yellow;
  border-radius: 10px;
`;

export const MissionCellBtn = styled.TouchableOpacity`
  padding-right: 10px;
  height: 100%;
  width: 95%;
  background-color: orange;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const MissionCellText = styled.Text`
  position: absolute;
`;

export const MissionName = styled(MissionCellText)`
  left: 5%;
  top: 10%;
`;

export const MissionDate = styled(MissionCellText)`
  right: 5%;
  bottom: 10%;
`;
