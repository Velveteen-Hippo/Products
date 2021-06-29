SELECT products.id, name, slogan, description, category, default_price,
jsonb_agg(json_build_object('feature', features.feature, 'value', features.value)) as features
FROM products
JOIN features ON features.product_id = products.id
WHERE products.id = 1
GROUP BY products.id;
-- explain analyze select * from products limit 500000