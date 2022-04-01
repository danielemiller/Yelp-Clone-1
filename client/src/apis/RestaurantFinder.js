import axios from 'axios';

/* hosted db vs local db */
/* (old) postgres://yvtnuqnykqzrhn:127a435c220546ad3d40934a26df469fb3a17cb28d827b1d3f2d1390239aec97@ec2-54-162-207-150.compute-1.amazonaws.com:5432/ddkihbk0qhiips */
/* http://localhost:4000/api/v1/restaurants */
/* (new) postgres://fjnifotstgdzuc:54b3ddf42d7e129cc4404f15164772dec0b69a6436b56be969d71788f01ce158@ec2-52-73-155-171.compute-1.amazonaws.com:5432/d8v9b1093d37j6 */


export default axios.create({
    baseURL: 'postgres://fjnifotstgdzuc:54b3ddf42d7e129cc4404f15164772dec0b69a6436b56be969d71788f01ce158@ec2-52-73-155-171.compute-1.amazonaws.com:5432/d8v9b1093d37j6',
})