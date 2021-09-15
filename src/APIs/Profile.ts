import axios from 'axios';

import config from '../../config/config';
import { UserType } from '../types';

async function fetchUser (tokenId: string): Promise<UserType> {

    const response = await axios.post(`http://${config.api}/auth`, { tokenId });

    return response.data;
}

export { fetchUser };
