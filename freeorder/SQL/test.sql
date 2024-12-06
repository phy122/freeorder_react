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
