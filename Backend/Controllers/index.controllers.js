
import data from '../Assets/customerData.js';

const getCustomerData = async (req, res) => {
    try {
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching customer data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default getCustomerData;
