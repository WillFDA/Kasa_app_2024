import AppartementSwiper from "../components/ui/appartement-swiper";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
const Appartement = () => {
  const { id } = useParams();
  const appartement = data.find((a) => a.id === id);

  return (
    <>
      <AppartementSwiper
        image={appartement?.pictures}
        alt={appartement?.title}
      />
    </>
  );
};

export default Appartement;
