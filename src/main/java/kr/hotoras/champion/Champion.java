package kr.hotoras.champion;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Champion extends PanacheEntity {
    @Column(length = 32)
    public String name; // 이름
    @Column(length = 512)
    public String role; // 역할
    @Column(length = 32)
    public String line; // 라인

    public static Champion findByName(String champion) {
        return find("name", champion).firstResult();
    }
}
