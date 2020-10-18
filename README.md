배포한 사이트는 아래의 주소에서 확인하실 수 있습니다. https://akiakma.github.io/airNike/

![airnikemain](https://user-images.githubusercontent.com/56889320/96362082-bde1e800-1165-11eb-96cf-89b927464311.png)


## AirNike(CardMaker & SearchList)


## 소개

2019년부터 스니커즈 리세일 시장이 엄청난 규모로 커지면서, 올해 스니커즈 중계 플랫폼들이 여러개 생겼습니다.
중계 어플들은 스니커즈를 직접 정품,양품 검수를 통하여 구매자와 판매자를 연결해주고있습니다. 
미국에서는 stockX나 Goat같은 유명한 중계 어플들이 예전부터 자리를 잡고있었지만, 한국에서는 그런 플랫폼이 존재하지않았고,
현재 선두주자로 KREAM, XXBLUE, FROG등이 올해 생기면서, 시장 점유율을 높이기위해 서로 치열한 경쟁을 하고 있습니다.
신발을 좋아하는 저로써는 이런 상황이 재밌게 느껴졌고, 나이키 스니커즈의 간략한 사진, 가격등의 정보들을 보여주고, 소유하고있는 
신발의 카드를 만들어 그 카드에 구입가 가격을 적고, 현재 value가 얼마나 상승,하락했는지 보여주는 사이트를 간략하게 만들고자 하였습니다.



### 구현
![react](https://user-images.githubusercontent.com/56889320/96362028-5461d980-1165-11eb-8d0f-368bd562faeb.png)

크게 나눠 Home, Jordan1, Dunk, Login, Entertainment라는 페이지가 존재합니다.
Home에는 간략한 나이키 브랜드를 소개하고있고, Dunk에서는 나이키의 대표 스케이트화인 DunkSB를 소개하고있습니다.
LOGIN을 하면 Entertainment라는 페이지가 나오는데, 로그인을 해야만 볼 수 있는 카테고리입니다.
Entertainment는 카드를 만들 수 있는 페이지인데, form에 구입한 신발의 사진과 정보를 등록하면 서버와의 통신을 통해 서버에 저장이되고
로그인 유저아이디를 통해서 그 기록들이 저장이 됩니다. 각각의 로그인 유저는 다른 유저의 카드를 볼 수 없습니다.
로그인은 Firbase의 Authentication을 이용하였고, 이미지 업로드는 Cloudinary를 통해 업로드하여 Firbase를 통해 Realtime Databse를 구현했습니다.
목적은 카드 등록을 통해 현재 내가 보유하고 있는 스니커즈의 value와 시장 value를 비교해줌으로써 그 가치가 상승했는지 하락했는지 간편히 볼수있는 것에 있습니다.
아직 최종적인 구현은 하지 못한 상태이며 계속 수정 진행중입니다.


### 사용한 기술

•	React Hooks

•	useEffect

•	useHistory

•	ReactRouterDom

•	FirebaseAPI

•	Cloudinary

•	Dependency Injection

•	Postman

• Public APIs

•	Axios

•	Fetch

•	PostCSS

•	Responsive Web

### 어려웠던 점

전 프로젝트들과 다르게 useState에 array가 아닌 object형식으로 저장을 했는데 처음에 그 부분이 달라 혼란이 있었습니다. 다른것보다 가장 어려웠던 점은 API들을 이용하는것이었는데, firebase나 cloudinary에서 제공하는 문서들을 읽는데 상당한 어려움이 있었습니다. 해보고나니 백엔드가 있을때 fetch를 이용하는것과 별 다를게 없는것 같다고 느꼈습니다. google auth나 github auth를 통한 로그인 구현, 실시간 데이터전송이 가장 어려웠던 것같습니다.

##영상 링크
https://youtu.be/LYZQoQ_Db9A


