import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1000, // number of virtual users
    duration: '30s', // test duration
};

export default function () {
    const res = http.get('http://40.119.241.117');

    check(res, {
        'status is 200': (r) => r.status === 200,
        'has crocodiles': (r) => r.json('crocodiles.length') > 0,
    });

    sleep(1);
}
