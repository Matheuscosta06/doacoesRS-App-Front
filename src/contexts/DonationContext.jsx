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

  return (
    <DonationContext.Provider value={{ createDonation, createDonationItem }}>
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;