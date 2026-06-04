// @jakarta.persistence.Entity
// public class kr.hotoras.champion.Champion
//     extends io.quarkus.hibernate.orm.panache.PanacheEntity
declare class Champion {
    name: string;
    role: string;
    line: string;

    static findByName: (champion: string) => Champion;
}

// @jakarta.persistence.Entity
// public class kr.hotoras.champion.ChampionDetails
//     extends io.quarkus.hibernate.orm.panache.PanacheEntity
declare class ChampionDetails {
    name: string;
    nameKor: string;
    summary: string;
    skills: { keyPress: string, name: string }[];
    story: string;

    static findByName: (champion: string) => ChampionDetails;
    static findByChampion: (champion: Champion) => ChampionDetails;
}

// @jakarta.persistence.Entity
// public class kr.hotoras.login.User
//     extends io.quarkus.hibernate.orm.panache.PanacheEntity
declare class User {
    username: string;
    password: string;
    /*@unique*/ email: string;
    phone: string;
    profileImage: string;

    static findByUsername: (username: string) => User;
    static findByEmail: (email: string) => User;
}

declare class UserRegister extends User {
    passwordConfirm: string;
}