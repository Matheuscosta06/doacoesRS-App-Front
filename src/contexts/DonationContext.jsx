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

  return (
    <DonationContext.Provider value={{ createDonation, createDonationItem, getAllDonationsItemsByDonationId, getFullPriceByDonationId }}>
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;