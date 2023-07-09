# BOLBO


### JIRA
https://hykwon8952.atlassian.net/jira/software/projects/UCFQ/boards/1

### DONE 
  - IOS-SQLite 연동 테스트
  - Android-SQLite 연동 테스트

### TODO 
  
* 영상, 이미지 각각 어플에서 갤러리의 경로만 가져와서 쓸 수 있나 아니면 copy인지 확인
  - 안드로이드 기기 빌드 
    - 실행 ``` $ yarn android ```
  - 갤러리 사용 방법 검토
  - [참고1](https://velog.io/@onedanbee/react-native-%EA%B0%A4%EB%9F%AC%EB%A6%AC-%EC%82%AC%EC%A7%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0-react-native-communitycameraroll-%EC%82%AC%EC%9A%A9)
  - [참고2](https://devbksheen.tistory.com/entry/React-Native-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%82%AC%EC%A7%84-%EC%84%A0%ED%83%9D-%EB%98%90%EB%8A%94-%EC%B9%B4%EB%A9%94%EB%9D%BC-%EC%B4%AC%EC%98%81%ED%95%98%EA%B8%B0) 
 
  
* 로컬 디비 설계 ERD 
* 피그마 샘플 
* 이미지 뷰어 구현
* 영상 재생 확인 
* 문제 목록 화면
* 문제 목록 empty 화면
* 문제 등록  
  - 문제 이미지(여러장 가능, 가져오는 거 우선 기술 검토)
  - 클라이밍장 이름 (매장정보는 추후 연동하는 방향으로..)
  - 난이도
  - 메모 (option)
* 문제 수정 화면
* 문제 상세 화면
  - read only
    + 문제 이미지 (사진확대)
    + 난이도(우리가 정한 7가지 무지개), 
    + 클라이밍장명, 
    + 문제 desc,
    + 문제 수정 버튼 -> 문제 수정 화면으로 이동 
  - regist
    + 시도영상 뷰잉 및 매핑
    + 나의 해답 (AI, 그린것, 대기)
* 홀더 세그멘테이션 추 출 인퍼런스 모델 확인 & 리스크 확인     

### TIP

- SQLite 설정 
  - https://kyungyeon.dev/posts/79
