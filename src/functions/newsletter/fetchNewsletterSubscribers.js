import axios from "axios";
import loggout from "../loggout";
const fetchNewsletterSubs = async (setLoading, token, setConsultations, navigate, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://simplify-backend-p6g56yj6r-simplify-f26de8d1.vercel.app/api/newsletter_subs/get_newsletter_subs_all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
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
export default fetchNewsletterSubs