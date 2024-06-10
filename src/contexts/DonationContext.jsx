import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from './AuthContext';

export const DonationContext = createContext();

const DonationProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const { user } = useContext(AuthContext);
  const [globalLoading, setGlobalLoading] = useState(false);

  const createDonation = async () => {
    setGlobalLoading(true);
    try {
      const response = await axios.post(`${apiURL}/donations`, {
        user_id: user.id,
        status: "Incompleto",
      });
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  const createDonationItem = async (donationId, itemId, quantity) => {
    setGlobalLoading(true);
    try {
      const response = await axios.post(`${apiURL}/donations_items`, {
        donation_id: donationId,
        product_id: itemId,
        quantity
      });
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      if (error.response) {
        return error.response.data;
      } else {
        return { error: "Erro de conexão" };
      }
    }
  };
  const createGiftItem = async (itemId, donationId, quantity, selectedLocation) => {
    setGlobalLoading(true);
    console.log(itemId, donationId, quantity);
    try {
      const response = await axios.post(`${apiURL}/gift_item`, {
        gift_id: itemId,
        donation_id: donationId,
        quantity: quantity,
        delivery_place: "Senai Valinhos - Rua Prof. Atílio Martini, 160 - Vila Boa Vista, Valinhos - SP, 13270-540"
      });
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      if (error.response) {
        return error.response.data;
      } else {
        return { error: "Erro de conexão" };
      }
    }
  }

  const getDonationsByUserId = async (userId) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/donations/user/${userId}`);
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  const createGift = async (type, name, description, image) => {
    setGlobalLoading(true);
    try {
      const response = await axios.post(`${apiURL}/gift`, {
        type,
        name,
        description,
        image
      });
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  const getAllDonationsItemsByDonationId = async (donationId) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/donations_items/${donationId}`);
      setGlobalLoading(false);
      return response.data.data;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  const getFullPriceByDonationId = async (donationId) => {
    setGlobalLoading(true);
    try {
      const response = await axios.get(`${apiURL}/donations_items/fullPrice/${donationId}`);
      setGlobalLoading(false);
      return response.data.data[0].full_price;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  const updateStatusDonation = async (donationId) => {
    setGlobalLoading(true);
    try {
      const response = await axios.put(`${apiURL}/donations/${donationId}`, {
        status: "Aguardando pagamento"
      });
      setGlobalLoading(false);
      return response.data;
    } catch (error) {
      setGlobalLoading(false);
      return error.response.data;
    }
  };

  return (
    <DonationContext.Provider value={{ createDonation, createDonationItem, getAllDonationsItemsByDonationId, getFullPriceByDonationId, createGiftItem, createGift, getDonationsByUserId, updateStatusDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;