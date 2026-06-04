package kr.hotoras.champion;

import java.util.List;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;

@Entity
public class ChampionDetails extends PanacheEntity {
    @Column(length = 32)
    public String name;
    @Column(length = 32)
    public String nameKor;
    @Column(columnDefinition = "TEXT")
    public String summary;
    @ElementCollection
    public List<ChampionSkill> skills;
    @Column(columnDefinition = "TEXT")
    public String story;

    public static ChampionDetails findByName(String champion) {
        return find("name", champion).firstResult();
    }

    public static ChampionDetails findByChampion(Champion champion) {
        return find("nameKor", champion.name).firstResult();
    }
}
