package kr.hotoras.champion;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity
public class Champion extends PanacheEntity {
    public String name; // 이름
    public String role; // 역할
    public String line; // 라인

    public static Champion findByName(String champion) {
        return find("name", champion).firstResult();
    }
}
