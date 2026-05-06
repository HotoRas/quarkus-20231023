// @jakarta.persistence.Entity
// public class kr.hotoras.champion.Champion extends io.quarkus.hibernate.orm.panache.PanacheEntity
declare class Champion {
    name: string;
    role: string;
    line: string;
}

// @jakarta.persistence.Entity
// public class kr.hotoras.login.User extends io.quarkus.hibernate.orm.panache.PanacheEntity
declare class User {
    username: string;
    password: string;

    findByUsername: (username: string) => User;
}