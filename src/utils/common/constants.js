import { v4 as uuidv4 } from 'uuid';

export const DEFAULT_VALUES_FORM = {
    locality: 'EU',
    localitySpecificationEu:'',
    localitySpecificationUsa:'',
    job: '',
    time: '',
    name: '',
    lastname: '',
    email: '',
    phone: '+421',
};

export const DEFAULT_VALUES_TIME = [
    {
        id: 1,
        btnBoolean: false,
    },
    {
        id: 2,
        btnBoolean: false,
    },
    {
        id: 3,
        btnBoolean: false,
    },
    {
        id: 4,
        btnBoolean: false,
    },
    {
        id: 5,
        btnBoolean: false,
    },
    {
        id: 6,
        btnBoolean: false,
    },
];

export const FORM_PAGES = [0, 1, 2];

export const USER_ID = uuidv4();

export const location = window.location.href;

const domain = 'http://localhost:3000';

export const routes = {
    form: `${domain}/`,
    noDataSend: `${domain}/no_data_sent`,
    done: `${domain}/done`,
  };