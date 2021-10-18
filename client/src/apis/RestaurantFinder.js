import axios from 'axios';

/* hosted db vs local db */
/* postgres://yvtnuqnykqzrhn:127a435c220546ad3d40934a26df469fb3a17cb28d827b1d3f2d1390239aec97@ec2-54-162-207-150.compute-1.amazonaws.com:5432/ddkihbk0qhiips */
/* http://localhost:4000/api/v1/restaurants */


export default axios.create({
    baseURL: 'postgres://yvtnuqnykqzrhn:127a435c220546ad3d40934a26df469fb3a17cb28d827b1d3f2d1390239aec97@ec2-54-162-207-150.compute-1.amazonaws.com:5432/ddkihbk0qhiips',
})