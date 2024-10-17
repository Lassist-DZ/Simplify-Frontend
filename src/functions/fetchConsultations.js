import axios from "axios";
import loggout from "./loggout";
const fetchConsultations = async (setLoading, token, setConsultations, navigate, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5001/api/consultations/get_consultations_all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.statusText === "OK") {
        setConsultations(response.data);
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