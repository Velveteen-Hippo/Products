import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
	stages: [{ duration: '15s', target: 5000}],
	// thresholds: {
	// 	http_req_duration: ['p(95)<200']
	// }
};

export default function () {
  let res = http.get('http://localhost:3000/products');
	check(res, {
		'is status 200': (r) => r.status === 200,
		'is response time < 2000ms': (r) => r.timings.duration < 2000
	});
  sleep(1);
}


export default function () {
  let res = http.get('http://localhost:3000/products/1');
	check(res, {
		'is status 200': (r) => r.status === 200,
		'is response time < 2000ms': (r) => r.timings.duration < 2000
	});
  sleep(1);
}


export default function () {
  let res = http.get('http://localhost:3000/products/1/styles');
	check(res, {
		'is status 200': (r) => r.status === 200,
		'is response time < 2000ms': (r) => r.timings.duration < 2000
	});
  sleep(1);
}


export default function () {
  let res = http.get('http://localhost:3000/products/1/related');
	check(res, {
		'is status 200': (r) => r.status === 200,
		'is response time < 2000ms': (r) => r.timings.duration < 2000
	});
  sleep(1);
}