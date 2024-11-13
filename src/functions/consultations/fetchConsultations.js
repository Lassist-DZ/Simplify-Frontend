import axios from "axios";
import loggout from "../loggout";
const fetchConsultations = async (setLoading, token, setConsultations, navigate, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://simplify-backend-50i4p642b-simplify-f26de8d1.vercel.app/api/consultations/get_consultations_all",
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