-- 기본 데이터

-- BCryptPasswordEncoder - 암호화 시
-- 사용자
INSERT INTO users ( id, username, password, name )
VALUES ( UUID(), 'user', '$2a$12$TrN..KcVjciCiz.5Vj96YOBljeVTTGJ9AUKmtfbGpgc9hmC7BxQ92', '사용자' );

-- 관리자
INSERT INTO users ( id, username, password, name )
VALUES ( UUID(), 'admin', '$2a$12$TrN..KcVjciCiz.5Vj96YOBljeVTTGJ9AUKmtfbGpgc9hmC7BxQ92', '관리자' );

INSERT INTO users ( id, username, password, name )
VALUES ( UUID(), 'test', '$2a$12$TrN..KcVjciCiz.5Vj96YOBljeVTTGJ9AUKmtfbGpgc9hmC7BxQ92', '테스트' );



-- 권한
-- 사용자 
-- * 권한 : ROLE_USER
INSERT INTO user_auth ( id, username,  auth )
VALUES ( UUID(), 'user', 'ROLE_USER' );

INSERT INTO user_auth ( id, username,  auth )
VALUES ( UUID(), 'test', 'ROLE_USER' );

-- 관리자
-- * 권한 : ROLE_USER, ROLE_ADMIN
INSERT INTO user_auth ( id, username,  auth )
VALUES ( UUID(), 'admin', 'ROLE_USER' );

INSERT INTO user_auth ( id, username,  auth )
VALUES ( UUID(), 'admin', 'ROLE_ADMIN' );