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

  return (
    <DonationContext.Provider value={{ createDonation }}>
      {children}
    </DonationContext.Provider>
  );
}

export default DonationProvider;