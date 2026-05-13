package kr.hotoras.common;

import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.transaction.Transactional;
import kr.hotoras.champion.Champion;
import kr.hotoras.login.User;

@ApplicationScoped
public class DataSeeder {

    /**
     * 시작 시 자동 실행: 데이터 삽입 (1회한)
     */
    @Transactional
    void onStart(@Observes StartupEvent ev) { // CDI 표준, 이벤트
        if (User.count() == 0) {
            User guest = new User();
            guest.username = "guest";
            guest.password = "123123";
            guest.persist();
        }
        if (Champion.count() > 0)
            return; // 이미 데이터 있으면 중단
        persist("아트록스", "전사", "탑");
        persist("사일러스", "마법사", "정글/미드");
        persist("애니비아", "마법사", "미드");
        persist("브라이어", "전사", "정글");
        persist("잭스", "전사", "탑");
        persist("징크스", "원거리딜러", "원딜");
        persist("야스오", "전사", "미드/탑");
        persist("리신", "전사", "정글");
        persist("티모", "마법사", "탑");
        persist("케인", "암살자", "정글");
        persist("루시안", "원거리딜러", "원딜/미드");
    }

    /**
     * 챔피언 데이터 생성 및 삽입
     * 
     * @param name 챔피언 이름
     * @param role 역할
     * @param line 주력 라인
     */
    private void persist(String name, String role, String line) {
        Champion c = new Champion();
        c.name = name;
        c.role = role;
        c.line = line;
        c.persist();
    }
}