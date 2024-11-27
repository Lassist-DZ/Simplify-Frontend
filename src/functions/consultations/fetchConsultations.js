import axios from "axios";
import loggout from "../loggout";
import config from "../../config";
const fetchConsultations = async (setLoading, token, setConsultations, navigate, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        config.API_URL + "consultations/get_consultations_all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        setConsultations(response.data);
        console.log(response.data)
        
      }
      setLoading(false);
    } catch (err) {
      if (err.status === 401)
      {
        loggout(navigate)
      }
      setError("Error fetching consultations");
      setLoading(false);
    }
  };
export default fetchConsultations