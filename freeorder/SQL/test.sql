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

SELECT * FROM `options`;

SELECT * FROM option_items;
SELECT * FROM products;
SELECT * FROM carts;
SELECT * FROM cart_options;
SELECT * FROM orders;
SELECT * FROM order_options;
SELECT * FROM order_items;

TRUNCATE TABLE orders;
TRUNCATE TABLE order_options;
TRUNCATE TABLE order_items;

-- af0e4b32-53ec-47be-98c7-f8d771f61b56
TRUNCATE TABLE carts;

SELECT * FROM products;
SELECT * FROM options;
SELECT * FROM option_items;

INSERT INTO options(ID,NAME)
VALUES("1","사리");
INSERT INTO option_items(ID,`OPTIONS_ID`,`NAME`,`PRICE`,`SEQ`)
VALUES("1","1","우동",2000,1),
("2","1","라면",1000,2),
("3","1","일면",1000,3),
("4","1","이면",1000,4),
("5","1","삼면",1000,5),
("6","1","사면",1000,6),
("7","1","오면",1000,7),
("8","1","햄추가",5000,8);
UPDATE products SET
`OPTIONS_ID` = 1
WHERE `ID` = "3ba64cf4-8479-444d-804f-698761b76896";

SELECT * FROM cart_options;

TRUNCATE TABLE option_items;

SELECT o.*
        ,oi.id as order_items_id
        ,oi.products_id
        ,oi.name
        ,oi.quantity
        ,oi.price
        ,oi.amount
        ,op.id as order_options_id
        ,op.option_items_id
        ,op.name as options_name
        ,op.price as options_price
FROM orders o
LEFT OUTER JOIN order_items oi
    ON o.id = oi.orders_id
LEFT OUTER JOIN order_options op
    ON oi.id = op.order_items_id;