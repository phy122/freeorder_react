SELECT 
    p.CATEGORY_ID,
    c.NAME AS CATEGORY_NAME,
    p.ID AS PRODUCT_ID,
    p.NAME,
    p.DESCRIPTION,
    p.PRICE,
    p.STOCK_CHECK,
    p.STOCK,
    -- 인기메뉴 여부 (주문 횟수 100회 이상이면 TRUE, 아니면 FALSE)
    IF(oc.ORDER_COUNT >= 100, TRUE, FALSE) AS IS_POPULAR,
    -- 신메뉴 여부 (2주 이내에 생성된 상품이면 TRUE, 아니면 FALSE)
    IF(p.CREATED_AT >= NOW() - INTERVAL 2 WEEK, TRUE, FALSE) AS IS_NEW,
    -- 추천메뉴 여부 (추천 상품이면 TRUE, 아니면 FALSE)
    IF(rp.PRODUCTS_ID IS NOT NULL, TRUE, FALSE) AS IS_RECOMMENDED
FROM PRODUCTS p
-- 카테고리 테이블 조인
JOIN CATEGORIES c ON p.CATEGORY_ID = c.ID
-- 주문 횟수 계산을 위한 서브쿼리
LEFT JOIN (
    SELECT 
        oi.PRODUCTS_ID,
        COUNT(oi.ID) AS ORDER_COUNT
    FROM ORDER_ITEMS oi
    JOIN ORDERS o ON oi.ORDERS_ID = o.ID
    WHERE o.STATUS = 'PAID'  -- 결제 완료된 주문만 계산
    GROUP BY oi.PRODUCTS_ID
) oc ON p.ID = oc.PRODUCTS_ID
-- 추천 상품 여부를 위한 조인
LEFT JOIN RECOMMENDED_PRODUCTS rp ON p.ID = rp.PRODUCTS_ID
ORDER BY p.seq asc;


SELECT *
FROM files
WHERE parent_id = 'f99062c3-01f4-4f84-87c2-a6070d0dfa28'
AND parent_table = 'notice'
AND not is_main;

SELECT *
FROM files
WHERE parent_id = '9145fc40-bc4a-46fd-a245-65e1ed403f86'
AND parent_table = 'product'
AND NOT is_main;

SELECT * FROM files;

SELECT * FROM notices;

SELECT * 
FROM files 
WHERE parent_table = 'product';

SELECT * from products;

SELECT * FROM files WHERE id = '72fca0aa-fa0b-4080-8b7b-901054d37ea2';
SELECT * FROM files WHERE PARENT_ID = '8c981b05-10ef-4005-aa8a-33a39a8ae3b8';

SELECT * FROM files;

SELECT c.*
FROM carts c
LEFT JOIN products p
    ON c.products_id = p.id 
LEFT OUTER JOIN cart_options co
    ON c.id = co.carts_id 
LEFT JOIN option_items oi
    ON co.option_items_id = oi.id
WHERE c.users_id = '5b443691-cc5b-4b8a-a4de-aa1f627c6e2d'
ORDER BY c.created_at desc, oi.seq asc;



SELECT * FROM `options`;

SELECT * FROM option_items;
SELECT * FROM products;
SELECT * FROM carts;
SELECT * FROM cart_options;

TRUNCATE TABLE cart_options;
TRUNCATE TABLE carts;


SELECT * FROM notices;