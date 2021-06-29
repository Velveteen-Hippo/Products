
-- select styles.id,
-- jsonb_agg(json_build_object('style_id', styles.id,
-- 					        'name', styles.name,
-- 						    'original_price', styles.original_price,
-- 						    'sale_price', styles.sale_price,
-- 						    'default?', styles.default_style))
-- 							as results
-- FROM styles
-- JOIN styles ON styles.product_id = products.id
-- WHERE products.id = 1
-- GROUP BY products.id;

select styles.id, name, sale_price, original_price, default_style,
jsonb_agg(json_build_object('thumbnail_url', photos.thumbnail_url,
						    'url', photos.url)) as photos,
jsonb_object_agg('sku_id', json_build_object('quantity', skus.quantity,
											  'size', skus.size)) as skus	
FROM styles JOIN photos on photos.style_id = styles.id
JOIN skus ON skus.style_id = styles.id
WHERE styles.product_id = 1
GROUP BY styles.id;
