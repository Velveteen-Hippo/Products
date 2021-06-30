explain analyze SELECT
	  styles.id,
		name,
		sale_price,
		original_price,
		default_style,
	jsonb_agg(json_build_object(
		'thumbnail_url', photos.thumbnail_url,
		'url', photos.url)) as photos,
  jsonb_object_agg(
		'sku_id', json_build_object(
			'quantity', skus.quantity,
			'size', skus.size)) as skus
  FROM styles
	JOIN photos on photos.style_id = styles.id
	JOIN skus ON skus.style_id = styles.id
	WHERE styles.product_id = 1
	GROUP BY styles.id;
