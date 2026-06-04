package kr.hotoras.champion;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class ChampionSkill {
    @Column(length = 8)
    public String keyPress;
    @Column(length = 64)
    public String name;
}
