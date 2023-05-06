import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1000, // number of virtual users
    duration: '30s', // test duration
};

export default function () {
    const res = http.get('http://20.44.251.80');

    check(res, {
        'status is 200': (r) => r.status === 200,

    });

    sleep(1);
}
