# BOLBO

--- 

### [JIRA](https://hykwon8952.atlassian.net/jira/software/projects/UCFQ/boards/1)



### DONE 
  - IOS-SQLite 연동 테스트
  - Android-SQLite 연동 테스트
  - React Navigation 적용
  - 과제 리스트 화면 레이아웃

### TODO 


* 영상, 이미지 각각 어플에서 갤러리의 경로만 가져와서 쓸 수 있나 아니면 copy인지 확인
  - 안드로이드 기기 빌드 
    - 실행 ``` $ yarn android ```
  - 갤러리 사용 방법 검토
  - [참고1](https://velog.io/@onedanbee/react-native-%EA%B0%A4%EB%9F%AC%EB%A6%AC-%EC%82%AC%EC%A7%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0-react-native-communitycameraroll-%EC%82%AC%EC%9A%A9)
  - [참고2](https://devbksheen.tistory.com/entry/React-Native-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%A0-%EC%82%AC%EC%A7%84-%EC%84%A0%ED%83%9D-%EB%98%90%EB%8A%94-%EC%B9%B4%EB%A9%94%EB%9D%BC-%EC%B4%AC%EC%98%81%ED%95%98%EA%B8%B0)
  - 리액트 fs 검토
    - [참고1](https://dev-yakuza.posstree.com/ko/react-native/react-native-fs/)
 
  
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

###  TIP & REFERENCE

* [SQLite 설정](https://kyungyeon.dev/posts/79)  
* [React-Native 프로젝트 기본구조](https://jake-seo-dev.tistory.com/233)
* [React 폴더 구조](https://velog.io/@sisofiy626/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
* [React-Native 구조 구성](https://krworker.com/react-native-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EA%B5%AC%EC%84%B1%ED%95%B4%EB%B3%B4%EC%9E%90/)
* [React-Native 구조 구성2](https://dipsiiiiiiiiii.wordpress.com/2021/10/09/react-native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0/)
* [React-Native 동작 방식](https://firework-ham.tistory.com/117)
* [React-Native 동작 방식2](https://ssollacc.tistory.com/14)
* [React-Native 동작 방식3](https://www.yeummy-blog.com/post/80285a63-730b-4cd7-94eb-399af12b994e)
* [React-Native 네이티브 모듈 생성 예시](https://defineall.tistory.com/1236#toc1)

