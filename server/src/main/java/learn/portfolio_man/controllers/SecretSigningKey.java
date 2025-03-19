package learn.portfolio_man.controllers;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

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

}
