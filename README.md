# quarkus 프로젝트 시작 (20231023 전도현)
<!--TODO add summary-->
This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## Packaging and running the application

The application can be packaged using:

```shell script
./mvnw package
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dquarkus.package.jar.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./mvnw package -Dnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./mvnw package -Dnative -Dquarkus.native.container-build=true
```
<!-- 
You can then execute your native executable with: `./target/code-with-quarkus-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

## Related Guides

- REST ([guide](https://quarkus.io/guides/rest)): A Jakarta REST implementation utilizing build time processing and Vert.x. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on it.
- Qute Web ([guide](https://quarkiverse.github.io/quarkiverse-docs/quarkus-qute-web/dev/index.html)): Serves Qute templates directly over HTTP.
- Qute ([guide](https://quarkus.io/guides/qute)): Offer templating support for web, email, etc in a build time, type-safe way
- OpenID Connect ([guide](https://quarkus.io/guides/security-openid-connect)): Verify Bearer access tokens and authenticate users with Authorization Code Flow
- WebSockets ([guide](https://quarkus.io/guides/websockets)): WebSocket communication channel support -->

## Provided Code
- Qute Web
- REST
- WebSockets

## 주차별 요약

### 2주차
> Hello, Quarkus!

- 프론트엔드 `/` 위치: `.../META-INF/resources/`
- 개발 환경 인터페이스 -> `/q/dev-ui/welcome`

### 3주차
> League of Legents | 1단계 ~ 4단계

- `/`에 기본 랜딩 페이지 삽입
  * `/index.css`로 css 파일 분리

### 4주차
> League of Legends | 이미지, 모달창 삽입

- 기본 `/img`가 아닌 `/res/img/Aatrox.png`에 이미지 투척

### 5주차
> League of Legends | 챔피언 모달, 다운로드 페이지 구현

- 상대경로 `../`가 아닌 절대경로 `/`로 각종 경로 지정 (`/`에 의존하는 것들 위주)
- `Aatrox.html`에서 `custom.css` 분리: `/css/champion.css`
- `index.css` 이동: `/css/index.css`
- gitignore 업데이트: `*.exe` 파일 제외
- `/sub/download.html`: MacOS 최신 사양 갱신 [출처: 공식 LoL 서포트 페이지](https://support-leagueoflegends.riotgames.com/hc/ko/articles/201752654-%EC%B5%9C%EC%86%8C-%EB%B0%8F-%EA%B6%8C%EC%9E%A5-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%82%AC%EC%96%91-%EB%A6%AC%EA%B7%B8-%EC%98%A4%EB%B8%8C-%EB%A0%88%EC%A0%84%EB%93%9C)
  * Bionic A18 Pro 추가: M1과 M1 Pro 사이 사양으로 권장 사양 충족
  * M1 G13 family를 그래픽 권장 사양에 반영

### 6주차
javascript! (프론트엔드 WebDAV 스크립팅)
- 구조, 기본 문법
  * omit (`var` `let` `const` `function(){}` `const = () => {}`)
  * omit (`document.getElementById` `HTMLElement.prototype.addEventListener(type,*func)`)
- 외부 스크립트 방식 구현

### 7주차
- 검색 구현 2차
  * `JavaScript!list<[k:string]:v>`, `HTMLElement.innerHTML`
  * 백틱(<code>`</code>) 스트링
  * Event Listener `onClick` JS파일로 추출
  * 추가 구현: 아트록스 모달 추출해 검색창용 모달로 추출
- 기타
  * 6주차의 navbar 다운로드 페이지로 복사

### 9주차
- 다크 모드 토글러
- SQLite 연동, database `lol` 생성

### 10주차
- 챔피언 테이블 sql로 이전
  * TODO! 챔피언 검색 쿼리화
- 로그인 및 회원관리 구현
- 기타
  * 본 주차의 navbar 다운로드 페이지로 복사

#### 현재 프론트엔드 디렉토리 구조
```tree
/src/main/resources/META-INF/resources = /
│  index.html
│  
├─css/{champion.css,download.css,index.css}
│      
├─js/{interfaces.d.ts,search.js,test.js,toggle.js}
│      
├─login/{login.html,main_after_login.html}
│      
├─modals/{Aatrox.html,navbar.html,SearchChamp.html}
│      
├─pds/lol.exe
│      
├─res
│  ├─bnr/download-banner.webp
│  │      
│  ├─img/{Aatrox.png,LOL.webp}
│  │      
│  └─img-large/{Aatrox.jpg}
│          
└─sub/download.html
```
#### 백엔드 디렉토리 구조
```tree
/src/main/java/kr/hotoras = package kr.hotoras
├─champion/{Champion.java,ChampionResource.java}
│      
├─common/{DataSeeder.java,GreetingResource.java,StartWebSocket.java}
│      
└─login/{AuthResource.java,User.java}
```

### 11주차
> vscode:java-dev 버그로 인해 $PATH 오염, workspace 전체 다시 로드 실시

- 로그인 구현 추가
  * 회원가입 구현 (절반)

#### database transaction
```sql
UPDATE lol.users SET email='guest@example.com' WHERE id=1;
ALTER TABLE lol.users MODIFY COLUMN username VARCHAR(32) NOT NULL;
ALTER TABLE lol.users MODIFY COLUMN password VARCHAR(511);
ALTER TABLE lol.users MODIFY COLUMN email VARCHAR(255) NOT NULL;
ALTER TABLE lol.users MODIFY COLUMN phone VARCHAR(32);
```

## 12주차
- 로그인 구현 추가
  * 회원가입 시 비밀번호 SHA256 적용
  * navbar (`/after-login`): 프로필 링크 추가 (to `/profile`)
  * 로그인 페이지 수정: 유효성 체크

## 13주차
- 회원관리 구현 추가
  * 개인 프로필 조회 페이지 추가
  * 프로필 사진 업로드 기능 추가
- 로그인 후 `/login`시 `/after_login`으로 던지기 구현
- 전체 페이지 다크, 라이트 모드 구현 조정
  * 내비바 중앙 정렬 (5주차 아니었나 이거)
  * 검색창 다크/라이트 모드 전환 구현 (`/js/toggle.js` 직접 수정)
  * `/profile` 다크/라이트 전환 구현 (`/js/toggle.js` 직접 수정)
  * session 활용 다크/라이트 모드 유지 구현

### extra
- `@Item Champion`: 검색 기능 구현 준비 (실제 텍스트 파싱 처리 X)
- `/js/test.js` -> `/js/toast.js` (파일명 변경)
  * 모든 페이지 toast 구현

| 페이지 | 항목 | 이벤트 | toast 구현 |
|---|---|---|---|
| `#navbar` | a#playLeague | `@click` | `() => showToast('즐거운 플레이 되세요')` |
| `/` | document | `@onload` | `() => showToast('메인 페이지 로딩 완료')` |
| `/after_login` | document | `@onload` | ``async() => showToast(`${await fetch....then(d=>d.username)} 아이디로 로그인되어 있습니다.`)`` |
| `/register` | document | `@onload` | `() => showToast('회원가입 페이지 로딩 완료')` |
| `/register_success` | document | `@onload` | `() => showToast('회원가입이 완료되었습니다!')` |
> `/register`, `/register_success`는 해당 페이지가 로딩된 상태가 toast 내용의 상태문이 되므로 `window.onload`에 이벤트 할당

- navbar: ~~`/modals/navbar.html`, `/modals/navbar-loggedin.html`에 투입하여 동적 로딩 준비~~
- `/js/search.js`: 검색 표시 오류 수정
  * TODO! `kr.hotoras.champion.ChampionDetail extends PanacheEntity`에 내용 주입  
  (String 기본값인 `varchar(255)`에 산입 불가로 자동 트랜젝션 방법 강구)

#### todo!
- 챔피언 총 12체에 대한 모달 구현 (JS상 구현)
  - `/js/search`의 `CHAMPIONS: any[]`를 별도 파일로 추출해 구현
  - `document.getElementsByClassName(...).foreach((element)=>{...})`
- 다운로드 페이지에 검색 코드 인젝션