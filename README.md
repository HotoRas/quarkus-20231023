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

You can then execute your native executable with: `./target/code-with-quarkus-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

## Related Guides

- REST ([guide](https://quarkus.io/guides/rest)): A Jakarta REST implementation utilizing build time processing and Vert.x. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on it.
- Qute Web ([guide](https://quarkiverse.github.io/quarkiverse-docs/quarkus-qute-web/dev/index.html)): Serves Qute templates directly over HTTP.
- Qute ([guide](https://quarkus.io/guides/qute)): Offer templating support for web, email, etc in a build time, type-safe way
- OpenID Connect ([guide](https://quarkus.io/guides/security-openid-connect)): Verify Bearer access tokens and authenticate users with Authorization Code Flow
- WebSockets ([guide](https://quarkus.io/guides/websockets)): WebSocket communication channel support

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

#### 현재 디렉토리 구조
```tree
src/main/resources/META-INF/resources/
    === frontend@/
│
├ index.html
├ css/
│ │
│ ├ index.css
│ ├ champion.css
│ └ download.css
├ modals/
│ │
│ └ Aatrox.html
├ pds/
│ │
│ └ lol.exe
├ res/
│ │
│ ├ bnr/...
│ ├ img/...
│ └ img-large/...
└ sub/
  │
  └ download.html
```