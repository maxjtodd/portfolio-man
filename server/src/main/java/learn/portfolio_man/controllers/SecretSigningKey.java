package learn.portfolio_man.controllers;

import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class SecretSigningKey {

    private SecretKey key;

    public SecretSigningKey() {
        this.key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public SecretKey getKey() {
        return key;
    }

    public Integer getUserIdFromAuthHeaders(Map<String, String> headers) {

        String authorization = headers.get("authorization");
        if (authorization == null) {
            return null;
        }

        try {
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(key)
                .build().parseClaimsJws(authorization);
            return (Integer) claims.getBody().get("userId");
        } catch (Exception e) {
            return null;
        }
        
    }

}
