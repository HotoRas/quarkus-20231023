package kr.hotoras.login;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

/**
 * 사용자 칼럼
 */
@Entity
@Table(name = "users")
public class User extends PanacheEntity {
    /**
     * 사용자명
     */
    public String username;
    /**
     * 비밀번호
     */
    public String password; // SHA256

    /**
     * 이메일
     * 
     * @Unique
     */
    @Column(unique = true)
    public String email;
    /**
     * 전화번호
     */
    public String phone;

    public static User findByUsername(String username) {
        return find("username", username).firstResult();
    }

    public static User findByEmail(String email) {
        return find("email", email).firstResult();
    }
}
