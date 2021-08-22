package com.rmit.sept.bk_loginservices.security;

public class SecurityConstant {

    public static final String SIGN_UP_URLS = "/bookeroo/users/**";
    public static final String HOME_PAGE = "/bookeroo/";
    public static final String H2_URL = "h2-console/**";
    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 864000_000; //1 day
}
