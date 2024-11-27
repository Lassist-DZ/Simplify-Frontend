import axios from "axios";
import config from "../../config";
const fetchFAQs = async (setLoading, setFAQs, setError) => {
    try {
      setLoading(true);
      const response = await axios.get(
        config.API_URL +"faqs/get_faqs_all"
      );

      if (response.status === 200) {
          setFAQs(response.data.data);
        console.log(response)
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching FAQs");
      setLoading(false);
    }
  };
export default fetchFAQs